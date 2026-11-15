import { useState } from 'react';
import RotatingText from '../rb/RotatingText';
import TiltedCard from '../rb/TiltedCard';
import { Reveal, SectionTitle, Serif } from '../ui';
import { Braces, Chip, Check, Calendar } from '../icons';
import { shot } from '../site';

const SAMPLE = `{
  "name": "Countdown", "width": 220, "height": 130,
  "elements": [
    { "type": "text", "y": 18, "w": 220, "align": "center",
      "text": "New Year 2027", "size": 13, "color": "fg2" },
    { "type": "text", "y": 36, "w": 220, "align": "center",
      "text": "{countdown:2027-01-01}", "size": 48 }
  ]
}`;

/* ---------------------------------------------------------------- widgets */
function WidgetTile({ img, name, desc, tags, h = 260 }: { img: string; name: string; desc: string; tags: string[]; h?: number }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[.08] bg-[#0c0c14]">
      <div className="relative flex items-center justify-center overflow-hidden bg-[radial-gradient(80%_80%_at_50%_0%,rgba(124,92,255,.16),transparent_70%)] p-6" style={{ height: h }}>
        <img src={shot(img)} alt={`${name} widget`} loading="lazy" className="max-h-full max-w-full rounded-[18px] object-contain shadow-[0_20px_50px_-20px_rgba(0,0,0,.9)] transition duration-700 group-hover:-translate-y-1 group-hover:scale-[1.02]" />
      </div>
      <div className="border-t border-white/[.06] p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-[-.02em]">{name}</h3>
          <div className="flex flex-wrap justify-end gap-1.5">
            {tags.map(t => <span key={t} className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/50">{t}</span>)}
          </div>
        </div>
        <p className="mt-2 text-[14.5px] leading-relaxed text-white/50">{desc}</p>
      </div>
    </div>
  );
}

export function Widgets() {
  return (
    <section id="widgets" className="relative px-6 py-28">
      <SectionTitle
        eyebrow="The widgets"
        title={<>Everything you glance at, <Serif>right on your wallpaper.</Serif></>}
        sub="Six built-in widgets that resize, rescale and re-layout themselves — plus as many custom ones as you can dream up."
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-6 [&>*]:min-w-0">
        <Reveal className="md:col-span-3"><WidgetTile img="w-calendar" name="Calendar" tags={['Holidays', 'Events', 'Sync']} desc="Public holidays for about 50 countries, your own events and birthdays, and read-only Google / Outlook sync. Click any day for details." h={320} /></Reveal>
        <Reveal className="md:col-span-3" delay={0.05}><WidgetTile img="w-weather" name="Weather" tags={['Auto location', 'Hourly', '7-day']} desc="Current conditions, an hourly strip and a 7-day forecast with hand-drawn colour icons. No API key, no account." h={320} /></Reveal>
        <Reveal className="md:col-span-2"><WidgetTile img="w-media" name="Media Controls" tags={['Spotify', 'YouTube']} desc="What's playing anywhere on Windows — with album art, progress and play / pause / skip." /></Reveal>
        <Reveal className="md:col-span-2" delay={0.05}><WidgetTile img="w-clock" name="Clock" tags={['Analog', 'Digital']} desc="Analog or digital, 12 or 24-hour, with the date. Adapts its layout as you resize it." /></Reveal>
        <Reveal className="md:col-span-2" delay={0.1}><WidgetTile img="w-todo" name="To-Do" tags={['Quick add']} desc="Tasks you can tick off without opening an app. Click “Add a task”, type, done." /></Reveal>
        <Reveal className="md:col-span-3">
          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/[.08] bg-[#0c0c14] p-7">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.05]"><Chip size={20} /></span><h3 className="text-lg font-semibold">System Monitor</h3></div>
            <div className="grid grid-cols-3 gap-3">
              {([['CPU', 8], ['Memory', 77], ['Battery', 79]] as const).map(([l, v]) => (
                <div key={l} className="flex flex-col items-center gap-2 rounded-2xl bg-white/[.03] py-4">
                  <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                    <defs><linearGradient id={`rg-${l}`}><stop offset="0" stopColor="#8b7bff" /><stop offset="1" stopColor="#6aa8ff" /></linearGradient></defs>
                    <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,.08)" strokeWidth="6" fill="none" />
                    <circle cx="32" cy="32" r="26" stroke={`url(#rg-${l})`} strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={`${(v / 100) * 163} 163`} transform="rotate(-90 32 32)" />
                    <text x="32" y="37" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">{v}%</text>
                  </svg>
                  <span className="text-[12px] text-white/50">{l}</span>
                </div>
              ))}
            </div>
            <p className="text-[14.5px] leading-relaxed text-white/50">CPU, memory and battery (or disk) as clean progress rings.</p>
          </div>
        </Reveal>
        <Reveal className="md:col-span-3" delay={0.05}>
          <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/[.08] bg-[#0c0c14] p-7">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.05]"><Braces size={20} /></span><h3 className="text-lg font-semibold">Your own widgets</h3></div>
            <pre className="overflow-x-auto rounded-2xl border border-white/[.06] bg-black/40 p-4 font-mono text-[12px] leading-6 text-white/70">{SAMPLE}</pre>
            <p className="text-[14.5px] leading-relaxed text-white/50">Text, icons, rings, bars, buttons and images, with live variables like <code className="text-white/75">{'{time}'}</code>, <code className="text-white/75">{'{cpu}'}</code> and <code className="text-white/75">{'{battery}'}</code>. Countdown, Greeting and Launcher samples are included.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- arrange */
export function Arrange() {
  const points = [
    ['Dot grid & safe area', 'Widgets snap to an even grid and never fall off-screen or under the taskbar.'],
    ['Smart alignment guides', 'Edges and centres line up with each other and the screen, like in a design tool.'],
    ['Equal spacing', 'Gaps between widgets match automatically for a clean, intentional layout.'],
    ['Resize & rescale', 'Edge handles change the layout, corner handles scale everything up or down.'],
    ['Keyboard precise', 'Arrow keys nudge, Shift ×10, Tab selects, hold Alt to place freely.'],
    ['Auto-arrange', 'One click tidies everything into a neat column on your main screen.'],
  ];
  return (
    <section id="arrange" className="relative px-6 py-28">
      <SectionTitle
        eyebrow="Arrange mode"
        title={<>Perfectly aligned, <Serif>without trying.</Serif></>}
        sub="Hit Arrange and your desktop becomes a canvas. Drag widgets around and Prism quietly handles the alignment, spacing and edges for you."
      />
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(106,168,255,.22),transparent_70%)] blur-2xl" />
          <div className="aspect-[16/10] w-full"><TiltedCard containerWidth="100%" containerHeight="100%" imageWidth="100%" imageHeight="100%" rotateAmplitude={2.5} scaleOnHover={1.005} radius={22} glare={0.2} showTooltip={false}>
            <img src={shot('arrange')} alt="Arrange mode with dot grid, alignment guides and resize handles" loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
          </TiltedCard></div>
        </div>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-6xl gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {points.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.04}>
            <div className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet/30 to-sky/30 text-white"><Check size={14} /></span>
              <div><div className="font-medium">{t}</div><p className="mt-1 text-[14.5px] leading-relaxed text-white/50">{d}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- themes */
export function Themes() {
  const themes = ['Liquid Glass', 'Frosted Glass', 'Acrylic', 'Tinted Glass', 'Clear', 'Solid Dark', 'Solid Light'];
  const accents = ['#4f7dff', '#1e90ff', '#b25cff', '#ff3b6b', '#ff4d3d', '#ff9500', '#ffd60a', '#30d158', '#3dd6e0'];
  return (
    <section id="themes" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.35fr]">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[12px] font-medium uppercase tracking-[.14em] text-white/60"><span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-sky" />Themes</div>
          <h2 className="text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
            Pick your vibe
            <RotatingText
              texts={themes}
              mainClassName="mt-3 flex w-fit overflow-hidden rounded-2xl bg-gradient-to-r from-violet/90 to-sky/90 px-4 py-1.5 text-white"
              staggerFrom="last"
              staggerDuration={0.02}
              rotationInterval={2200}
              splitLevelClassName="overflow-hidden pb-1"
            />
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/55">
            Seven premade looks, from Apple-style liquid glass to crisp solid panels. Set one for everything or mix per widget, choose an accent colour (or follow Windows), and text automatically flips light or dark to stay readable on your wallpaper.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {accents.map(c => <span key={c} className="h-8 w-8 rounded-full ring-1 ring-white/20 ring-offset-2 ring-offset-ink" style={{ background: c }} />)}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 shadow-[0_40px_120px_-40px_rgba(124,92,255,.6)]">
            <img src={shot('themes-panel')} alt="The seven built-in themes: Liquid Glass, Frosted Glass, Acrylic, Tinted Glass, Clear, Solid Dark and Solid Light" loading="lazy" className="block w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- settings tour */
export function Tour() {
  const tabs = [
    { id: 'settings-widgets', label: 'Widgets', text: 'Switch widgets on and off with live previews of how each one looks on your wallpaper.' },
    { id: 'settings-appearance', label: 'Appearance', text: 'Themes, accent colours, and light or dark text — applied instantly.' },
    { id: 'settings-general', label: 'General', text: 'Start with Windows, Arrange mode, pause during games and your data folder.' },
    { id: 'settings-custom', label: 'Custom', text: 'Create, edit and reload your own JSON widgets, with a quick reference built in.' },
    { id: 'settings-performance', label: 'Performance', text: 'Live memory, CPU and responsiveness numbers. Nothing hidden.' },
  ];
  const [i, setI] = useState(0);
  return (
    <section id="settings" className="relative px-6 py-28">
      <SectionTitle
        eyebrow="Settings"
        title={<>Feels like a Mac. <Serif>Runs on Windows.</Serif></>}
        sub="One calm, native control panel for everything — no config files required (unless you want them)."
      />
      <Reveal className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[.04] p-1">
          {tabs.map((t, k) => (
            <button key={t.id} onClick={() => setI(k)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${i === k ? 'bg-white text-[#0b0b12] shadow' : 'text-white/60 hover:text-white'}`}>{t.label}</button>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black shadow-[0_40px_140px_-50px_rgba(124,92,255,.65)]">
          <div className="relative aspect-[16/10]">
            {tabs.map((t, k) => (
              <img key={t.id} src={shot(t.id)} alt={`${t.label} settings page`} loading={k ? 'lazy' : undefined} className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${i === k ? 'scale-100 opacity-100 blur-0' : 'scale-[1.015] opacity-0 blur-sm'}`} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-[15px] text-white/55">{tabs[i].text}</p>
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------------- what's new */
export function WhatsNew() {
  return (
    <section id="whats-new" className="relative scroll-mt-28 px-6 pb-8">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl border border-white/[.08] bg-gradient-to-br from-violet/[.12] via-transparent to-sky/[.08] p-8 md:flex-row md:items-center md:p-10">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10"><Calendar size={22} /></span>
        <div className="flex-1">
          <div className="text-[12px] font-medium uppercase tracking-[.14em] text-white/50">New in v1.7</div>
          <h3 className="mt-1 text-2xl font-semibold tracking-[-.02em]">Events & holidays in your calendar</h3>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-white/55">Public holidays for your country, your own events and birthdays, an Upcoming list, and Google / Outlook calendar sync — with one switch to turn it all off.</p>
        </div>
      </Reveal>
    </section>
  );
}
