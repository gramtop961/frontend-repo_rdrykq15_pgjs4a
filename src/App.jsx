import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full text-slate-100 font-sans">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(8,47,73,1),transparent_60%),radial-gradient(1000px_800px_at_80%_20%,rgba(15,118,110,0.8),transparent_60%),linear-gradient(120deg,rgba(2,6,23,1),rgba(4,47,46,1))]" />
      {/* Subtle floating particles */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(34,211,238,0.6)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={i} cx={(i * 53) % 100 + '%'} cy={(i * 97) % 100 + '%'} r={(i % 5) + 1} fill="url(#g1)">
              <animate attributeName="cy" values="0%;100%;0%" dur={`${10 + i}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
