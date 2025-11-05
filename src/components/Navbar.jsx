import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-slate-100/90 hover:text-white transition-colors duration-300';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-xl bg-white/10 border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
          : 'backdrop-blur-sm bg-white/5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-teal-500 shadow-[0_0_24px_rgba(34,211,238,0.6)]" />
            <span className="text-white font-semibold tracking-wide text-lg">DermaQue</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a className={linkBase} href="#home">Home</a>
            <a className={linkBase} href="#scan">Scan</a>
            <a className={linkBase} href="#routine">Routine</a>
            <a className={linkBase} href="#progress">Progress</a>
            <a className={linkBase} href="#pricing">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#auth" className="text-slate-100/80 hover:text-white">Login</a>
            <a
              href="#scan"
              className="rounded-xl px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-semibold shadow-[0_0_24px_rgba(34,211,238,0.6)] hover:brightness-110 transition"
            >
              Start Free Scan
            </a>
          </div>
          <div className="md:hidden">
            <a
              href="#scan"
              className="rounded-xl px-3 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-semibold shadow-[0_0_18px_rgba(34,211,238,0.6)]"
            >
              Scan
            </a>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </header>
  );
}
