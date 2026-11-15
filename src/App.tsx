import { Nav, Hero } from './sections/Hero';
import { Stats, Features } from './sections/Features';
import { Widgets, Arrange, Themes, Tour, WhatsNew } from './sections/Showcase';
import { HowTo, StarCTA, FAQ, FinalCTA, Footer, SiteDock } from './sections/Guide';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Widgets />
        <WhatsNew />
        <Arrange />
        <Themes />
        <Tour />
        <HowTo />
        <StarCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <SiteDock />
    </div>
  );
}
