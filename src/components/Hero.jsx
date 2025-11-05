import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.20),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(13,148,136,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex items-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 border border-white/15 text-cyan-200/90 mb-4">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              Live AI Preview
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]">
              AI-Powered Skincare for Men
            </h1>
            <p className="mt-4 text-slate-200/80 text-lg">
              Analyze. Personalize. Transform.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#scan"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-slate-900 bg-gradient-to-r from-teal-500 to-cyan-400 shadow-[0_0_32px_rgba(34,211,238,0.65)] hover:brightness-110 transition"
              >
                Start Free Scan
              </a>
              <a href="#how" className="text-cyan-200 hover:text-white transition">How it works →</a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5" />
      </div>
    </section>
  );
}
