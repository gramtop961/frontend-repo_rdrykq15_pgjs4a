import { useState } from 'react';
import { Camera, Wand2, LineChart, Sun, Moon, Upload, Shield } from 'lucide-react';

export default function Sections() {
  return (
    <>
      <Features />
      <HowItWorks />
      <ScanSection />
      <RoutineSection />
      <ProgressSection />
      <PricingSection />
      <AuthSection />
    </>
  );
}

function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-[0_0_16px_rgba(34,211,238,0.25)]">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-300/80">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`backdrop-blur-xl bg-white/10 border border-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function Features() {
  const items = [
    { icon: <Camera className="h-6 w-6 text-cyan-300" />, title: 'Instant Skin Analysis', text: 'Upload a selfie to detect acne, dryness, redness, and more.' },
    { icon: <Wand2 className="h-6 w-6 text-cyan-300" />, title: 'Personalized Routine', text: 'Daily steps tailored to your skin goals and lifestyle.' },
    { icon: <LineChart className="h-6 w-6 text-cyan-300" />, title: 'Track Visible Progress', text: 'See improvement via metrics and monthly reports.' },
  ];

  return (
    <SectionShell id="features" title="Why DermaQue" subtitle="Premium tech meets wellness minimalism">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((f, i) => (
          <GlassCard key={i} className="p-6 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-shadow">
            <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-white/10 border border-white/15 mb-4">
              {f.icon}
            </div>
            <h3 className="text-white font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-slate-300/80">{f.text}</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  );
}

function HowItWorks() {
  const steps = [
    { icon: <Upload className="h-5 w-5 text-cyan-300" />, title: 'Upload Selfie' },
    { icon: <Wand2 className="h-5 w-5 text-cyan-300" />, title: 'AI Skin Analysis' },
    { icon: <Shield className="h-5 w-5 text-cyan-300" />, title: 'Get Your Routine' },
  ];

  return (
    <SectionShell id="how" title="How It Works" subtitle="Three simple steps to better skin">
      <GlassCard className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-white font-medium">{i + 1}️⃣ {s.title}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </SectionShell>
  );
}

function ScanSection() {
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const onAnalyze = () => {
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      setLoading(false);
      setResults(['Acne: Mild', 'Dryness: Moderate', 'Redness: Low', 'Wrinkles: Early']);
    }, 1400);
  };

  return (
    <SectionShell id="scan" title="AI Scan" subtitle="Upload or take a selfie. We analyze in seconds.">
      <GlassCard className="p-6 md:p-10">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <Camera className="h-8 w-8 text-cyan-300" />
          </div>
          <p className="mt-4 text-slate-300/80">Upload or take a selfie</p>

          <label className="mt-6 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
            />
            <span className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white/10 border border-white/15 text-white hover:bg-white/15 transition">
              <Upload className="h-5 w-5" /> Choose Image
            </span>
          </label>
          {fileName && <p className="mt-2 text-xs text-slate-400">Selected: {fileName}</p>}

          <button
            onClick={onAnalyze}
            className="mt-6 rounded-xl px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-semibold shadow-[0_0_28px_rgba(34,211,238,0.6)] hover:brightness-110 transition"
          >
            Analyze
          </button>

          {loading && (
            <div className="mt-8 w-full max-w-md h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-cyan-400 to-teal-500 animate-[shimmer_1.2s_ease_infinite]" />
            </div>
          )}

          {Array.isArray(results) && (
            <div className="mt-8 grid sm:grid-cols-2 gap-4 w-full">
              {results.map((r, i) => (
                <div key={i} className="rounded-2xl p-4 bg-white/5 border border-white/10 text-white/90">
                  {r}
                </div>
              ))}
            </div>
          )}
        </div>
      </GlassCard>
      <style>{`@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}`}</style>
    </SectionShell>
  );
}

function RoutineSection() {
  const [tab, setTab] = useState('AM');
  const stepsAM = [
    { step: 1, name: 'Gentle Cleanser', icon: <Sun className="h-5 w-5" /> },
    { step: 2, name: 'Hydrating Serum', icon: <Sun className="h-5 w-5" /> },
    { step: 3, name: 'SPF 50', icon: <Sun className="h-5 w-5" /> },
  ];
  const stepsPM = [
    { step: 1, name: 'Cleanser', icon: <Moon className="h-5 w-5" /> },
    { step: 2, name: 'Retinol Serum', icon: <Moon className="h-5 w-5" /> },
    { step: 3, name: 'Moisturizer', icon: <Moon className="h-5 w-5" /> },
  ];

  const list = tab === 'AM' ? stepsAM : stepsPM;

  return (
    <SectionShell id="routine" title="Your Personalized Routine" subtitle="Generic preview for Free. Unlock full personalization with Premium.">
      <GlassCard>
        <div className="p-6 border-b border-white/10">
          <div className="inline-flex rounded-2xl p-1 bg-white/10 border border-white/15">
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                tab === 'AM' ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900' : 'text-white'
              }`}
              onClick={() => setTab('AM')}
            >
              AM Routine
            </button>
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                tab === 'PM' ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900' : 'text-white'
              }`}
              onClick={() => setTab('PM')}
            >
              PM Routine
            </button>
          </div>
        </div>
        <div className="p-6 grid md:grid-cols-3 gap-4">
          {list.map((s) => (
            <div key={s.step} className="rounded-2xl p-5 bg-white/5 border border-white/10 text-white/90">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-300">
                  {s.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400">Step {s.step}</p>
                  <p className="font-medium">{s.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6">
          <div className="rounded-2xl p-5 border border-cyan-400/30 bg-cyan-400/10 text-white">
            <p className="font-semibold">Upgrade to Premium</p>
            <ul className="mt-2 list-disc list-inside text-slate-100/80 text-sm">
              <li>Full Product Names and Images</li>
              <li>Weekly Planner & Reminders</li>
              <li>AI Personalization & Adjustments</li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </SectionShell>
  );
}

function ProgressSection() {
  const metrics = [
    { label: 'Hydration', value: 68 },
    { label: 'Oil Balance', value: 54 },
    { label: 'Clarity', value: 73 },
  ];

  return (
    <SectionShell id="progress" title="Progress (Premium)" subtitle="Track improvements with simple metrics">
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-white/90 font-medium">Before vs After</p>
          <div className="mt-4 aspect-[16/9] rounded-2xl bg-white/5 border border-white/10 grid grid-cols-2 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
              <div className="absolute bottom-2 left-2 text-xs text-white/80">Before</div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),transparent)]" />
              <div className="absolute bottom-2 left-2 text-xs text-white/80">After</div>
            </div>
          </div>
          <p className="mt-4 text-slate-300/80 text-sm">Slider coming soon. Export report with one click.</p>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-white/90 font-medium">AI Progress Dashboard</p>
          <div className="mt-6 flex flex-col gap-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{m.label}</span>
                  <span>{m.value}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-400"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 italic text-slate-300/80">“Consistency = Confidence.”</p>
          <button className="mt-4 rounded-xl px-4 py-2 bg-white/10 border border-white/15 text-white hover:bg-white/15 transition">
            Download Monthly Report
          </button>
        </GlassCard>
      </div>
    </SectionShell>
  );
}

function PricingSection() {
  return (
    <SectionShell id="pricing" title="Choose Your Plan" subtitle="Simple pricing for smarter skincare">
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <p className="text-white text-xl font-semibold">Free</p>
          <ul className="mt-4 text-slate-300/90 space-y-2 text-sm">
            <li>• Basic Scan</li>
            <li>• General Tips</li>
            <li>• Limited Tracking</li>
          </ul>
          <button className="mt-6 rounded-xl px-5 py-2.5 bg-white/10 border border-white/15 text-white hover:bg-white/15 transition">Get Started</button>
        </GlassCard>
        <GlassCard className="p-6 ring-1 ring-cyan-400/40">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-cyan-400/15 border border-cyan-400/30 text-cyan-200 text-xs">Most Popular</div>
          <p className="mt-3 text-white text-xl font-semibold">Premium</p>
          <ul className="mt-4 text-slate-300/90 space-y-2 text-sm">
            <li>• AI Personalization</li>
            <li>• Weekly Planner</li>
            <li>• Product Recommendations</li>
            <li>• Visual Tracking</li>
          </ul>
          <button className="mt-6 rounded-xl px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-semibold shadow-[0_0_22px_rgba(34,211,238,0.55)] hover:brightness-110 transition">Upgrade to Premium</button>
        </GlassCard>
      </div>
    </SectionShell>
  );
}

function AuthSection() {
  return (
    <SectionShell id="auth" title="Join DermaQue" subtitle="Create your account or sign in">
      <div className="mx-auto max-w-xl">
        <GlassCard className="p-6 md:p-8">
          <form className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-300/80 text-sm">Name</label>
                <input className="mt-1 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-slate-300/80 text-sm">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="text-slate-300/80 text-sm">Password</label>
              <input type="password" className="mt-1 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="••••••••" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button type="button" className="flex-1 rounded-xl px-5 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-semibold shadow-[0_0_22px_rgba(34,211,238,0.55)] hover:brightness-110 transition">Sign Up</button>
              <button type="button" className="flex-1 rounded-xl px-5 py-3 bg-white/10 border border-white/15 text-white hover:bg-white/15 transition">Login</button>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              <button type="button" className="rounded-xl px-4 py-2 bg-white/10 border border-white/15 text-white hover:bg-white/15 transition">Google</button>
              <button type="button" className="rounded-xl px-4 py-2 bg-white/10 border border-white/15 text-white hover:bg-white/15 transition">Apple</button>
            </div>
          </form>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
