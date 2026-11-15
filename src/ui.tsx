import { useEffect, useState, type ReactNode } from 'react';
import StarBorder from './rb/StarBorder';
import FadeContent from './rb/FadeContent';
import { DOWNLOAD_URL, REPO_OWNER, REPO_NAME, REPO_URL } from './site';
import { Download, GitHub, Star, Windows } from './icons';

// GitHub star count (hidden if the API is unreachable)
export function useStars() {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    const ctl = new AbortController();
    fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`, { signal: ctl.signal })
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (d && typeof d.stargazers_count === 'number') setStars(d.stargazers_count); })
      .catch(() => {});
    return () => ctl.abort();
  }, []);
  return stars;
}
const fmt = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n));

export function DownloadButton({ size = 'lg', label = 'Download for Windows' }: { size?: 'sm' | 'lg'; label?: string }) {
  const lg = size === 'lg';
  return (
    <a
      href={DOWNLOAD_URL}
      className={`group relative inline-flex items-center gap-2.5 rounded-full bg-white font-medium text-[#0b0b12] shadow-[0_0_0_1px_rgba(255,255,255,.6),0_10px_40px_-10px_rgba(139,123,255,.8)] transition hover:-translate-y-px hover:shadow-[0_0_0_1px_#fff,0_14px_50px_-8px_rgba(139,123,255,1)] active:translate-y-0 ${lg ? 'h-12 px-6 text-[15px]' : 'h-9 px-4 text-sm'}`}
    >
      <Windows size={lg ? 16 : 14} />
      {label}
      {lg && <Download size={16} className="opacity-60 transition group-hover:translate-y-0.5 group-hover:opacity-100" />}
    </a>
  );
}

export function StarButton({ size = 'lg' }: { size?: 'sm' | 'lg' }) {
  const stars = useStars();
  const lg = size === 'lg';
  return (
    <StarBorder
      as="a"
      href={REPO_URL}
      target="_blank"
      rel="noreferrer"
      color="#b3a4ff"
      trailColor="#6aa8ff"
      duration={5}
      radius={999}
      thickness={1}
      backgroundColor="rgba(14,14,22,.85)"
      textColor="#fff"
      className={lg ? '!p-0 h-12' : '!p-0 h-9'}
    >
      <span className={`inline-flex items-center gap-2 font-medium ${lg ? 'px-5 text-[15px]' : 'px-3.5 text-sm'}`}>
        <GitHub size={lg ? 17 : 15} />
        Star on GitHub
        <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">
          <Star size={12} className="fill-amber-300 stroke-amber-300" />
          {stars !== null && stars >= 10 ? fmt(stars) : 'Star'}
        </span>
      </span>
    </StarBorder>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[12px] font-medium uppercase tracking-[.14em] text-white/60">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-sky" />
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, sub, center = true }: { eyebrow: string; title: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`mx-auto mb-14 max-w-3xl ${center ? 'text-center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-4xl font-semibold tracking-[-.035em] text-white sm:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-5 max-w-2xl text-balance text-[17px] leading-relaxed text-white/55">{sub}</p>}
    </Reveal>
  );
}

export const Serif = ({ children }: { children: ReactNode }) => (
  <span className="bg-gradient-to-r from-[#c9bfff] via-[#9db8ff] to-[#ffb3d9] bg-clip-text pr-1 font-serif font-normal italic tracking-[-.01em] text-transparent">{children}</span>
);

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <FadeContent effect="fade" blur={6} duration={0.9} delay={delay} threshold={0.12} once className={className}>
      {children}
    </FadeContent>
  );
}
