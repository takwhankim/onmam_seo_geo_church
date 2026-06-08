const steps = [
  "Edit code",
  "Commit changes",
  "Push to GitHub",
  "Vercel builds automatically",
  "Check production URL"
];

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Next.js + GitHub + Vercel</p>
        <h1>Vercel Auto Deploy Starter</h1>
        <p className="lead">
          코드를 수정하고 GitHub에 push하면 Vercel이 자동으로 빌드하고 배포하는
          기본 구조입니다.
        </p>
      </section>

      <section className="panel" aria-labelledby="workflow-title">
        <h2 id="workflow-title">Standard Workflow</h2>
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="grid" aria-label="Documentation">
        <a href="/DEPLOYMENT.md">Deployment Guide</a>
        <a href="/MULTI_DEVICE_WORKFLOW.md">Multi Device Workflow</a>
        <a href="/PROJECT_START_CHECKLIST.md">Start Checklist</a>
      </section>
    </main>
  );
}
