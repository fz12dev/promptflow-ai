import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIToolDemo from './components/AIToolDemo';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* AI Tool Demo Section */}
        <section id="tool">
          <AIToolDemo />
        </section>

        {/* Dashboard Preview Section */}
        <section id="dashboard">
          <DashboardPreview />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 