import { Link } from "react-router-dom";

const features = [
  {
    title: "Clean corrections",
    text: "Catch grammar slips, tighten structure, and keep the original meaning intact.",
  },
  {
    title: "Style upgrades",
    text: "Turn rough wording into polished copy with multiple rewrite directions.",
  },
  {
    title: "Fast feedback",
    text: "Move from draft to final pass quickly with a UI that keeps the flow clear.",
  },
];

const stats = [
  { value: "3x", label: "writing modes" },
  { value: "24/7", label: "available editing" },
  { value: "1 click", label: "to refine a draft" },
];

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="glass-panel hero-copy">
          <span className="kicker">Glassmorphism writing suite</span>
          <h1>Write with clarity, then polish the draft with style.</h1>
          <p className="subtitle">
            A dark gradient workspace with soft glass panels, subtle shadows,
            and a focused layout for rewriting, checking, and refining text.
          </p>

          <div className="hero-actions">
            <Link className="pill-button primary" to="/about">
              Explore the workflow
            </Link>
            <a className="pill-button" href="#feature-grid">
              See the highlights
            </a>
          </div>
        </div>

        <aside className="glass-panel hero-card">
          <div className="section-title">Workspace snapshot</div>
          <div className="metric-grid">
            {stats.map((item) => (
              <article className="mini-metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <p className="footer-note">
            Designed to feel calm, premium, and readable on top of a dramatic
            dark gradient backdrop.
          </p>
        </aside>
      </section>

      <section id="feature-grid" className="content-grid">
        {features.map((feature) => (
          <article className="glass-panel card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
