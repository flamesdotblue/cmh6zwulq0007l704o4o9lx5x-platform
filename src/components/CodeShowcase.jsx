export default function CodeShowcase() {
  const install = 'npm install quickcode-ui';
  const usage = `import { Button, Card, Input } from "quickcode-ui";

export default function Example() {
  return (
    <Card className="max-w-sm p-4">
      <h3 className="mb-2 text-lg font-semibold">Invite user</h3>
      <div className="space-y-3">
        <Input placeholder="Email" />
        <Button intent="primary">Send invite</Button>
      </div>
    </Card>
  );
}`;

  return (
    <section id="code" className="bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Install and start building</h2>
          <p className="mt-3 text-slate-600">Clean APIs, predictable styling, and components that just work.</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">Install</p>
              <pre className="overflow-x-auto rounded-md bg-slate-900 p-4 text-slate-100"><code>$ {install}</code></pre>
              <p className="mt-4 text-sm text-slate-600">Supports React, Vite, Next.js, and more. TypeScript types included.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Usage</p>
                <button
                  onClick={() => navigator.clipboard.writeText(usage)}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                >
                  Copy
                </button>
              </div>
              <pre className="max-h-[380px] overflow-auto rounded-md bg-slate-900 p-4 text-slate-100"><code>{usage}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
