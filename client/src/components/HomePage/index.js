import "./index.css";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>
          Welcome to <span>E-Medical & Home Remedy</span>
        </h1>
        <p>
          Your trusted partner for healthcare advice and natural home remedies.
        </p>
        <button>Evaluate Disease</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="about-text">About Us</h2>
            <p className="about-description">
              We provide the best health tips, advice, and home remedies to help
              you lead a healthier life. Our mission is to offer reliable,
              natural, and medical advice for all.
            </p>
          </div>
          <img
            src="/images/healthcare.jpg"
            alt="Healthcare"
            className="about-image"
          />
        </div>
      </section>

      {/* Articles/Remedies Section */}
      <section className="articles-section">
        <h2>Explore Our Latest Health Tips</h2>
        <div className="articles-grid">
          <div className="article-card">
            <img
              src="/images/remedy1.jpg"
              alt="Remedy 1"
              className="article-image"
            />
            <h3 className="article-title">Home Remedy for Cold</h3>
            <p className="article-description">
              Learn how natural ingredients can help soothe common cold
              symptoms.
            </p>
            <button className="article-button">Read More &rarr;</button>
          </div>

          <div className="article-card">
            <img
              src="/images/remedy2.jpg"
              alt="Remedy 2"
              className="article-image"
            />
            <h3 className="article-title">Boost Your Immunity</h3>
            <p className="article-description">
              Explore tips to naturally strengthen your immune system.
            </p>
            <button className="article-button">Read More &rarr;</button>
          </div>

          <div className="article-card">
            <img
              src="/images/remedy3.jpg"
              alt="Remedy 3"
              className="article-image"
            />
            <h3 className="article-title">Herbal Teas for Stress</h3>
            <p className="article-description">
              Discover the calming effects of different herbal teas.
            </p>
            <button className="article-button">Read More &rarr;</button>
          </div>
        </div>
      </section>
    </div>
  );
}
