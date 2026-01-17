import "../styles/home.css";

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Silicon to System <br />
              Complete Engineering <br />
              Solutions
            </h1>

            <p>
              We design, develop, and deliver end-to-end embedded and
              semiconductor solutions for next-generation products.
            </p>

            <button className="hero-btn">
              Let’s Talk Possibilities
            </button>
          </div>
        </div>
      </section>

      {/* Optional second section */}
      <section className="about-preview">
        <h2>What We Do</h2>
        <p>
          From silicon design to system-level integration, we help companies
          build reliable, scalable, and future-ready technology solutions.
        </p>
      </section>
    </main>
  );
};

export default Home;