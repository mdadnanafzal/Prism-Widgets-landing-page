import type { CSSProperties, ReactNode } from 'react';
import CountUp from '../rb/CountUp';
import SpotlightCard from '../rb/SpotlightCard';
import { Reveal, SectionTitle, Serif } from '../ui';
import { Chip, Grid, Palette, Braces, Sliders, Gamepad, Sparkles, Shield } from '../icons';
import { RAM_MB, shot } from '../site';

export function Stats() {
  const items: { n: ReactNode; label: string }[] = [
    { n: <>&lt;<CountUp to={RAM_MB} duration={1.6} /> MB</>, label: 'RAM with five widgets running' },
    { n: <>~<CountUp to={0} duration={0.5} />%</>, label: 'CPU while idle (0.03% average)' },
    { n: <><CountUp to={650} duration={1.6} /> KB</>, label: 'The whole app. One .exe.' },
    { n: <><CountUp to={7} duration={1.2} /></>, label: 'Hand-tuned glass themes' },
  ];
  return (
    <section className="relative px-6 pb-8">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-white/[.08] bg-white/[.02] md:grid-cols-4">
        {items.map((it, i) => (
          <div key={i} className={`px-6 py-8 text-center ${i % 2 ? 'border-l border-white/[.06]' : ''} ${i >= 2 ? 'border-t border-white/[.06] md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''}`}>
            <div className="whitespace-nowrap text-3xl font-semibold tracking-[-.04em] sm:text-5xl">{it.n}</div>
            <div className="mt-2 text-[13px] text-white/45">{it.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Card({ icon, title, children, className = '', glow = 'rgba(139,123,255,.22)', visual }: { icon: ReactNode; title: string; children: ReactNode; className?: string; glow?: string; visual?: ReactNode }) {
  return (
    <SpotlightCard theme="dark" spotlightColor={glow} className={`group flex flex-col !p-7 ${className}`} style={{ '--spotlight-card-surface': '#0c0c14' } as CSSProperties}>
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.05] text-white/85">{icon}</div>
      <h3 className="text-[19px] font-semibold tracking-[-.02em]">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-white/55">{children}</p>
      {visual && <div className="mt-6 flex-1">{visual}</div>}
    </SpotlightCard>
  );
}

function RamBar() {
  // illustrative scale only: Prism's own number vs. a typical 150 MB budget
  return (
    <div className="space-y-3 font-mono text-[12px]">
      <div>
        <div className="mb-1.5 flex justify-between text-white/70"><span>Prism Widgets · 5 widgets</span><span>&lt; {RAM_MB} MB</span></div>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/[.06]"><div className="h-full w-[18%] rounded-full bg-gradient-to-r from-violet to-sky" /></div>
      </div>
      <div>
        <div className="mb-1.5 flex justify-between text-white/35"><span>A single browser tab</span><span>100 MB+</span></div>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/[.06]"><div className="h-full w-[70%] rounded-full bg-white/15" /></div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative px-6 py-28">
      <SectionTitle
        eyebrow="Why Prism"
        title={<>Pretty is easy. <Serif>Pretty and light</Serif> is the point.</>}
        sub="Most widget apps are a hidden web browser eating your RAM. Prism is native C++ that draws straight onto your desktop — so it looks premium and stays out of your way."
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-6 [&>*]:min-w-0">
        <Reveal className="md:col-span-3">
          <Card icon={<Chip size={20} />} title={`Under ${RAM_MB} MB of RAM. Seriously.`} className="h-full" visual={<RamBar />}>
            Native C++ and Direct2D. No Electron, no web engine, no background services. Idle CPU sits at about zero, and memory is handed back to Windows when you're not looking.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-3" delay={0.05}>
          <Card icon={<Sparkles size={20} />} title="macOS-grade liquid glass" glow="rgba(106,168,255,.22)" className="h-full"
            visual={<div className="relative h-36 overflow-hidden rounded-2xl"><img src={shot('w-weather')} alt="Weather widget showing real glass over the wallpaper" className="absolute inset-0 h-full w-full object-cover object-top" loading="lazy" /></div>}>
            Glass is rendered from your <em>actual</em> wallpaper — blur, refraction and a soft rim light — so every widget looks like it belongs to your desktop.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-2">
          <Card icon={<Grid size={20} />} title="Arrange mode" className="h-full">
            A grid, alignment guides, snapping and equal spacing. Lining things up takes seconds, not pixel-peeping.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-2" delay={0.05}>
          <Card icon={<Palette size={20} />} title="7 themes, endless accents" glow="rgba(255,143,199,.2)" className="h-full">
            Liquid, Frosted, Acrylic, Tinted, Clear, Solid Dark and Solid Light — per widget if you like, in any accent colour.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-2" delay={0.1}>
          <Card icon={<Braces size={20} />} title="Make your own widgets" className="h-full">
            Describe a widget in a tiny JSON file — text, rings, bars, buttons, live variables. Save, and it updates instantly.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-2">
          <Card icon={<Sliders size={20} />} title="A settings app you'll actually like" glow="rgba(106,168,255,.2)" className="h-full">
            Toggle widgets, pick themes and tweak everything from one clean, macOS-style control panel with live previews.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-2" delay={0.05}>
          <Card icon={<Gamepad size={20} />} title="Gamer-friendly" className="h-full">
            Widgets pause completely during fullscreen games and apps, so they never cost you a single frame.
          </Card>
        </Reveal>
        <Reveal className="md:col-span-2" delay={0.1}>
          <Card icon={<Shield size={20} />} title="Yours, privately" glow="rgba(120,220,180,.18)" className="h-full">
            No account, no ads, no sign-in. Your to-dos, events and settings stay in a folder on your PC.
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
