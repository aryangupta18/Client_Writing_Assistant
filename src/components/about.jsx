const principles = [
  "Glass layers keep the interface light without losing contrast.",
  "Pill-shaped controls make navigation feel intentional and touch-friendly.",
  "A restrained layout keeps the focus on the writing workflow.",
];

const values = [
  {
    title: "Focus first",
    text: "The interface removes clutter and gives each action a clear place.",
  },
  {
    title: "Readable depth",
    text: "Soft borders, blur, and layered shadows create depth without noise.",
  },
  {
    title: "Responsive rhythm",
    text: "Cards and sections reflow cleanly from desktop to mobile widths.",
  },
];

function About() {
  return (
    <main className="page">
      <section className="glass-panel about-hero">
        <span className="kicker">About this interface</span>
        <h1>A calm, glassy workspace for writing assistance.</h1>
        <p className="subtitle">
          The home and about pages use a dark gradient background, translucent
          containers, and light shadows to keep the UI polished without feeling
          heavy.
        </p>
      </section>

      <section className="about-layout">
        <article className="glass-panel card accent-card">
          <div className="section-title">Design principles</div>
          <ul className="bullet-list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="content-grid">
          {values.map((value) => (
            <article className="glass-panel card" key={value.title}>
              <h2>{value.title}</h2>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
