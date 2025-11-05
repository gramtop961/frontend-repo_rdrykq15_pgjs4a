export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-3xl px-6 py-5 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-cyan-400 to-teal-500 shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
            <span className="text-white font-semibold">DermaQue</span>
          </div>
          <p className="text-slate-300/80 text-sm mt-3 md:mt-0">© 2025 DermaQue. All rights reserved.</p>
          <div className="text-slate-300/80 text-sm mt-3 md:mt-0 flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
