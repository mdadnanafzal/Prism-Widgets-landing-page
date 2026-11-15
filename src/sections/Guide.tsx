import { useState, type ReactNode } from 'react';
import Dock from '../rb/Dock';
import GradientText from '../rb/GradientText';
import { DownloadButton, Reveal, SectionTitle, Serif, StarButton } from '../ui';
import { Logo, GitHub, Home, Sparkles, Layers, Grid, Palette, Book, Help, Download, Plus } from '../icons';
import { DOWNLOAD_URL, EXE_SIZE, RAM_MB, RELEASES_URL, REPO_URL, VERSION } from '../site';

/* ---------------------------------------------------------------- how to use */
const Kbd = ({ children }: { children: ReactNode }) => (
  <kbd className="rounded-md border border-white/15 bg-white/[.06] px-1.5 py-0.5 font-mono text-[12px] text-white/80">{children}</kbd>
);

export function HowTo() {
  const steps: { t: string; d: ReactNode }[] = [
    { t: 'Download', d: <>Grab <b className="font-medium text-white/80">PrismWidgets.exe</b> ({EXE_SIZE}). There's no installer — put it anywhere you like, e.g. <span className="font-mono text-[13px] text-white/70">Documents\Prism Widgets</span>.</> },
    { t: 'Run it', d: <>Double-click the file. Because the app is new and not code-signed yet, Windows may say <i>“Windows protected your PC”</i> — click <b className="font-medium text-white/80">More info → Run anyway</b>. Your widgets appear and Settings opens.</> },
    { t: 'Pick your widgets', d: <>In <b className="font-medium text-white/80">Settings → Widgets</b>, flip the switches for the widgets you want. Click any widget card to change its theme, size and options.</> },
    { t: 'Arrange them', d: <>Click <b className="font-medium text-white/80">Arrange on desktop</b>. Drag to move, pull edges to resize, corners to scale. Press <Kbd>Esc</Kbd> or <b className="font-medium text-white/80">Done</b> when it looks right.</> },
    { t: 'Make it yours', d: <>Choose a theme and accent in <b className="font-medium text-white/80">Appearance</b>, turn on <b className="font-medium text-white/80">Start with Windows</b> in General, and right-click any widget for quick options.</> },
  ];
  const tips = [
    ['Reopen Settings', 'Click the Prism icon in the system tray, or run the .exe again.'],
    ['Quick options', 'Right-click any widget for its options, styles and settings.'],
    ['Calendar events', 'Click any day to see holidays and events, or add your own.'],
    ['Precise placement', <>In Arrange mode use <Kbd>←</Kbd><Kbd>→</Kbd> to nudge, <Kbd>Shift</Kbd> ×10, hold <Kbd>Alt</Kbd> to place freely.</>],
  ] as const;
  return (
    <section id="how" className="relative px-6 py-28">
      <SectionTitle eyebrow="How to use" title={<>Up and running <Serif>in about a minute.</Serif></>} sub="No installer, no account, no setup wizard. Just download, run and arrange." />
      <div className="mx-auto max-w-4xl">
        <ol className="relative space-y-4">
          <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-violet/60 via-sky/30 to-transparent" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <li className="relative flex gap-5 rounded-3xl border border-white/[.07] bg-white/[.02] p-5 sm:p-6">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-sky text-sm font-semibold shadow-[0_0_0_6px_#07070c]">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-.02em]">{s.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/55">{s.d}</p>
                  {i === 0 && <div className="mt-4"><DownloadButton size="sm" label={`Download v${VERSION}`} /></div>}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10 grid gap-3 sm:grid-cols-2">
          {tips.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-white/[.07] bg-white/[.02] p-5">
              <div className="text-[13px] font-medium uppercase tracking-[.12em] text-white/40">Tip · {t}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- GitHub star CTA */
export function StarCTA() {
  return (
    <section className="relative px-6 py-20">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b13] px-8 py-16 text-center noise sm:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(124,92,255,.28),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-sky/20 blur-3xl" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[.06]"><GitHub size={28} /></div>
          <h2 className="text-balance text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Built in the open. <Serif>Powered by stars.</Serif></h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-[17px] leading-relaxed text-white/55">
            Prism Widgets is free and open source. If it made your desktop a little nicer, a star on GitHub helps more people find it — and keeps the updates coming.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <StarButton />
            <a href={`${REPO_URL}/issues`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[15px] text-white/70 transition hover:bg-white/[.06] hover:text-white">
              Request a widget <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------------- FAQ */
export function FAQ() {
  const qa: [string, ReactNode][] = [
    ['Is it really free?', 'Yes. Prism Widgets is free and open source — no ads, no account, no premium tier.'],
    ['How much memory does it use?', <>Under {RAM_MB} MB with five widgets on screen, and roughly 0% CPU while idle. The Settings window adds a few MB only while it's open, and gives it all back when you close it.</>],
    ['Will it slow down my games?', 'No. Widgets pause completely while a fullscreen game or app is running, and resume when you return to the desktop.'],
    ['Which Windows versions are supported?', 'Prism Widgets is built for Windows 11 (64-bit). Windows 10 is not officially supported.'],
    ['Why does Windows show a SmartScreen warning?', 'SmartScreen warns about new apps that are not yet code-signed. Click “More info” and then “Run anyway”. The full source code is on GitHub if you want to check it or build it yourself.'],
    ['Does it need the internet?', 'Only for weather, public holidays and calendar sync. Clock, to-do, media, system monitor and custom widgets work completely offline.'],
    ['Where are my settings stored?', <>In <span className="font-mono text-[13px] text-white/75">%APPDATA%\PrismWidgets</span> — your layout, to-dos, events and custom widgets. Nothing leaves your PC.</>],
    ['How do I uninstall it?', 'Turn off “Start with Windows” in Settings → General, quit from the tray icon, then delete PrismWidgets.exe. To remove your data too, delete the %APPDATA%\\PrismWidgets folder.'],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-28">
      <SectionTitle eyebrow="FAQ" title={<>Questions, <Serif>answered.</Serif></>} />
      <Reveal className="mx-auto max-w-3xl divide-y divide-white/[.07] rounded-3xl border border-white/[.08] bg-white/[.02]">
        {qa.map(([q, a], i) => (
          <div key={q}>
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-[16px] font-medium transition hover:text-white">
              {q}
              <Plus size={18} className={`shrink-0 text-white/50 transition duration-300 ${open === i ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden"><p className="px-6 pb-5 text-[15px] leading-relaxed text-white/55">{a}</p></div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------------- final CTA + footer */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-36 text-center">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(50%_70%_at_50%_100%,rgba(124,92,255,.3),transparent_70%)]" />
      <Reveal className="relative">
        <div className="mx-auto mb-8 w-fit"><Logo size={64} /></div>
        <h2 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-[-.045em] sm:text-6xl">
          Give your desktop the{' '}
          <GradientText colors={['#c9bfff', '#8fb0ff', '#ffb3d9', '#c9bfff']} animationSpeed={6} className="inline-block font-serif font-normal italic">glow-up</GradientText>{' '}
          it deserves.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[17px] text-white/55">Free, tiny and gorgeous. Ready in about a minute.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DownloadButton />
          <StarButton />
        </div>
        <p className="mt-5 text-[13px] text-white/40">v{VERSION} · Windows 11 · <a className="underline decoration-white/20 underline-offset-4 hover:text-white/70" href={RELEASES_URL} target="_blank" rel="noreferrer">All releases</a></p>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[.06] px-6 pt-10 pb-32 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-white/45 sm:flex-row">
        <div className="flex items-center gap-2.5 text-white/70"><Logo size={22} /> Prism Widgets <span className="text-white/35">— glass widgets for Windows</span></div>
        <div className="flex items-center gap-6">
          <a href={REPO_URL} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="hover:text-white">Releases</a>
          <a href={`${REPO_URL}/issues`} target="_blank" rel="noreferrer" className="hover:text-white">Report a bug</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- macOS-style dock */
export function SiteDock() {
  const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const items = [
    { icon: <Home size={20} />, label: 'Home', onClick: go('top') },
    { icon: <Sparkles size={20} />, label: 'Features', onClick: go('features') },
    { icon: <Layers size={20} />, label: 'Widgets', onClick: go('widgets') },
    { icon: <Grid size={20} />, label: 'Arrange mode', onClick: go('arrange') },
    { icon: <Palette size={20} />, label: 'Themes', onClick: go('themes') },
    { icon: <Book size={20} />, label: 'How to use', onClick: go('how') },
    { icon: <Help size={20} />, label: 'FAQ', onClick: go('faq') },
    { separator: true },
    { icon: <GitHub size={20} />, label: 'Star on GitHub', onClick: () => window.open(REPO_URL, '_blank', 'noopener') },
    { icon: <Download size={20} />, label: 'Download', onClick: () => { window.location.href = DOWNLOAD_URL; } },
  ];
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden h-0 md:block">
      <div className="pointer-events-auto">
        <Dock items={items} theme="dark" baseItemSize={46} magnification={66} distance={160} panelHeight={64} />
      </div>
    </div>
  );
}
