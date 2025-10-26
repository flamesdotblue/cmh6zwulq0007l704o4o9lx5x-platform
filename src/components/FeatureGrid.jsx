import { Blocks, Settings, Zap, Star } from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: 'Composable components',
    desc: 'A cohesive set of primitives and patterns built for dashboards, apps, and complex UIs.'
  },
  {
    icon: Settings,
    title: 'Fully customizable',
    desc: 'Use Tailwind utility classes or theme tokens to adapt to your brand without fighting the library.'
  },
  {
    icon: Zap,
    title: 'Ship faster',
    desc: 'Reduce boilerplate with ready-to-use building blocks and consistent APIs that scale with your team.'
  },
  {
    icon: Star,
    title: 'Accessible by default',
    desc: 'Built on robust a11y foundations so you can focus on product, not ARIA edge-cases.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to build fast</h2>
        <p className="mt-3 text-slate-600">Designed for frontend engineers and product teams who value speed, clarity, and consistency.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
