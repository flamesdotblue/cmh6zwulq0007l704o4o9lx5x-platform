import { Rocket } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm md:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Start building with QuickCode</h3>
            <p className="mt-2 max-w-2xl text-slate-600">Install the library in seconds and ship production-quality interfaces today. Batteries included, a11y-first, and customizable.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Install via npm
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} QuickCode UI. All rights reserved.</p>
    </section>
  );
}
