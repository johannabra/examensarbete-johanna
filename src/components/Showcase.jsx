import { useEffect, useState } from "react";

const Showcase = () => {
  const [showForm, setShowForm] = useState(false);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [animateCount, setAnimateCount] = useState(false);

  useEffect(() => {
    const storedCount = localStorage.getItem("feedbackCount");
    if (storedCount) {
      setFeedbackCount(parseInt(storedCount, 10));
    }
  }, []);

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCount = feedbackCount + 1;
    setFeedbackCount(newCount);
    localStorage.setItem("feedbackCount", newCount);
    setAnimateCount(true);
    setTimeout(() => setAnimateCount(false), 400);
    e.target.reset();
  };

  return (
    <section id="showcase" className="section">
      <div className="showcase-center">
        <p className="showcase-text">
          Här kan du ta del av vårt examensarbete i sin helhet.
        </p>

        <a
          href="/Examensarbete.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
          aria-label="Öppna examensarbetet som PDF i nytt fönster">
          📄 Öppna PDF (examensarbete)
        </a>

        <button
          onClick={handleToggle}
          className="accordion-toggle secondary-btn"
          aria-expanded={showForm}>
          💬 Lämna feedback
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="feedback-form">
            <label htmlFor="feedback">Vad tyckte du om innehållet?</label>
            <input
              type="text"
              id="feedback"
              name="feedback"
              required
              aria-required="true"
            />
            <button type="submit">Skicka</button>
          </form>
        )}

        <p
          className={`feedback-count ${animateCount ? "pulse" : ""}`}
          aria-live="polite">
          📬 Antal inlämnade svar: {feedbackCount}
        </p>
      </div>
    </section>
  );
};

export default Showcase;
