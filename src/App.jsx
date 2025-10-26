import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CodeShowcase from './components/CodeShowcase';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Hero />
      <main>
        <FeatureGrid />
        <CodeShowcase />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
