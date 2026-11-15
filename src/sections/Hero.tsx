import { useEffect, useState } from 'react';
import Prism from '../rb/Prism';
import BlurText from '../rb/BlurText';
import ShinyText from '../rb/ShinyText';
import TiltedCard from '../rb/TiltedCard';
import { DownloadButton, StarButton } from '../ui';
import { Logo, GitHub } from '../icons';
import { EXE_SIZE, REPO_URL, RAM_MB, VERSION, shot, DOWNLOAD_URL } from '../site';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const links = [['Features', '#features'], ['Widgets', '#widgets'], ['Arrange', '#arrange'], ['Themes', '#themes'], ['How to use', '#how'], ['FAQ', '#faq']];
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-3 py-2 transition-all duration-500 ${scrolled ? 'glass !bg-[#0b0b12]/80' : 'border border-transparent'}`}>
        <a href="#top" className="flex items-center gap-2.5 pl-1 font-semibold tracking-tight">
          <Logo size={26} /> <span>Prism Widgets</span>
        </a>
        <div className="hidden items-center gap-1 text-sm text-white/60 lg:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="rounded-full px-3 py-1.5 transition hover:bg-white/[.06] hover:text-white">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={REPO_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/[.07] hover:text-white sm:flex">
            <GitHub />
          </a>
          <a href={DOWNLOAD_URL} className="inline-flex h-9 items-center rounded-full bg-white px-4 text-sm font-medium text-[#0b0b12] transition hover:bg-white/90">Download</a>
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-10 sm:pt-44">
      {/* prism light behind the headline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_30%,transparent_75%)]">
        <Prism animationType="rotate" timeScale={0.35} scale={3.2} height={3.4} baseWidth={5.4} noise={0.05} glow={0.9} hueShift={0.15} colorFrequency={1} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(124,92,255,.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <a href="#whats-new" className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-1.5 py-1.5 pr-4 text-[13px]">
          <span className="rounded-full bg-gradient-to-r from-violet to-sky px-2.5 py-0.5 text-[11px] font-semibold text-white">v{VERSION}</span>
          <ShinyText text="Now with calendar events & public holidays" color="rgba(255,255,255,.65)" shineColor="#fff" speed={3} />
        </a>

        <h1 className="text-balance text-[44px] font-semibold leading-[1.02] tracking-[-.045em] sm:text-7xl md:text-[88px]">
          <BlurText text="Your desktop," animateBy="words" delay={90} trigger="load" className="justify-center" />
          <span className="block bg-gradient-to-r from-[#d7cfff] via-[#a9c2ff] to-[#ffc0e0] bg-clip-text pb-2 font-serif text-[1.08em] font-normal italic tracking-[-.02em] text-transparent">
            but make it glass.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-[18px] leading-relaxed text-white/60">
          Liquid-glass widgets for Windows 11 — clock, weather, calendar, to-do, music and your own creations — blended into your wallpaper like they were always there. All in <span className="text-white">under {RAM_MB} MB of RAM</span>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DownloadButton />
          <StarButton />
        </div>
        <p className="mt-5 text-[13px] text-white/40">Free &amp; open source · Windows 11 · {EXE_SIZE} · No installer, no account</p>
      </div>

      {/* product shot */}
      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:mt-20">
        <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 bg-[radial-gradient(50%_50%_at_50%_40%,rgba(124,92,255,.35),transparent_70%)] blur-2xl" />
        <div className="aspect-[16/10] w-full"><TiltedCard containerWidth="100%" containerHeight="100%" imageWidth="100%" imageHeight="100%" rotateAmplitude={3.5} scaleOnHover={1.01} radius={22} glare={0.25} showTooltip={false} intro introDelay={300}>
          <img src={shot('desktop')} alt="Prism Widgets on a Windows 11 desktop: calendar, to-do, clock, media and weather widgets" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        </TiltedCard></div>
        <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>
    </section>
  );
}
