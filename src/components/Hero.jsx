import Spline from '@splinetool/react-spline';
import { Rocket, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">QuickCode</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#code" className="text-sm text-slate-600 hover:text-slate-900">Code</a>
            <a href="#get-started" className="text-sm text-slate-600 hover:text-slate-900">Get started</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#get-started"
              className="hidden rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 md:inline-block"
            >
              Install
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex h-[calc(90vh-72px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
          New • v1.0 — Production-ready components
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Build interfaces, not boilerplate
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          QuickCode is a modern UI library for developers. Ship faster with accessible, customizable, and consistent components for apps and dashboards.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Get started
          </a>
          <a
            href="#code"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            View code example
          </a>
        </div>
      </div>
    </section>
  );
}
