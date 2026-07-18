import { useState } from "react";
import axios from "axios";

const Editor = () => {
  const [text, setText] = useState("");
  const [spellCheckedText, setSpellCheckedText] = useState("");
  const [grammarCheckedText, setGrammarCheckedText] = useState("");
  const [rephrasedText, setRephrasedText] = useState("");

  const correctionItems = [
    { label: "Spell Checked Text", value: spellCheckedText },
    { label: "Grammar Checked Text", value: grammarCheckedText },
    { label: "Rephrased Text", value: rephrasedText },
  ].filter((item) => item.value);

  const handleSpellCheck = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/spell-check", {
        text,
      });
      setSpellCheckedText(response.data.response || "");
    } catch (error) {
      console.error("Error occurred while checking spelling:", error);
    }
  };
  const handleGrammarCheck = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/grammar-check", {
        text,
      });
      setGrammarCheckedText(response.data.response || "");
    } catch (error) {
      console.error("Error occurred while checking grammar:", error);
    }
  };
  const handleRephrase = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/analyze", {
        text,
      });
      setRephrasedText(response.data.response || "");
    } catch (error) {
      console.error("Error occurred while rephrasing text:", error);
    }
  };

  return (
    <main className="page editor-page">
      {/* <section className="glass-panel about-hero">
        <h1>Editor</h1>
        <p className="subtitle">
          Draft your text, then run spelling, grammar, and rephrase actions in the same focused workspace.
        </p>
      </section> */}

      <section className="editor-layout">
        <div className="glass-panel about-hero">
          <div className="editor-panel-header">
            <span className="kicker">Writing Workspace</span>
            <p className="subtitle">
              Write or paste content here, then run one of the checks below.
            </p>
          </div>
          <textarea
            className="editor-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your text here..."
          />

          <div className="tool-row">
            <Button className="pill-button" onClick={handleSpellCheck}>
              Check Spelling
            </Button>
            <Button className="pill-button" onClick={handleGrammarCheck}>
              Check Grammar
            </Button>
            <Button className="pill-button" onClick={handleRephrase}>
              Rephrase
            </Button>
          </div>
        </div>

        {correctionItems.length ? (
          <aside className="history-panel ">
            {/* <div className="editor-panel-header">
              <span className="kicker">
                Corrected Text
              </span>
              <p className="subtitle">
                Review the latest output from each writing action.
              </p>
            </div> */}
            <div className="history-list">
              {correctionItems.map((item) => (
                <article className="history-item correction-item" key={item.label}>
                  <span className="correction-label">{item.label}</span>
                  <p className="history-item">{item.value}</p>
                </article>
              ))}
            </div>
          </aside>
        ) : null}
      </section>
    </main>
  );
};

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Editor;
