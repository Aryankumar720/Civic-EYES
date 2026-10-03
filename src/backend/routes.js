import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-100 p-6 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">CivicEye</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">AI-Powered Civic Platform</h1>
            </div>
            <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-sky-700">
              Report an Issue
            </button>
          </div>
        </header>

        <main className="grid gap-6 md:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="mb-3 text-2xl font-bold">How it works</h2>
            <p className="mb-4 text-slate-600">
              Citizens can detect civic issues in their surroundings, upload the problem, and let the platform
              categorize, prioritize, and route the issue to the correct department.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-sky-50 p-4">
                <p className="text-sm font-semibold text-sky-700">1. Detect</p>
                <p className="mt-2 text-sm text-slate-600">Capture street, drainage, or sanitation problems.</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-700">2. Prioritize</p>
                <p className="mt-2 text-sm text-slate-600">AI evaluates severity, traffic, and location risk.</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-700">3. Resolve</p>
                <p className="mt-2 text-sm text-slate-600">Issues are routed to the appropriate authority for action.</p>
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
            <h3 className="text-lg font-bold">System status</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <div className="flex items-center justify-between">
                <span>API</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-300">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span>AI Vision</span>
                <span className="rounded-full bg-sky-500/20 px-2 py-1 text-xs font-semibold text-sky-300">Ready</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Priority Engine</span>
                <span className="rounded-full bg-violet-500/20 px-2 py-1 text-xs font-semibold text-violet-300">Active</span>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
