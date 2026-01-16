import React from "react";
import "../styles/career.css";

const Career: React.FC = ()=> {
  return (
    <section className="career-page">
      <div className="career-container">
        <h1 className="career-title">CAREERS</h1>

        <p className="career-description">
          Join Our Team – Innovate with Us in Semiconductor Design & Verification.
          Welcome to Siliconsmislice, a cutting-edge startup at the forefront of
          semiconductor technology. Our mission is to drive innovation in
          semiconductor design, verification, physical design, and Design for
          Test (DFT) through our advanced solutions and expert team. As we
          continue to grow and push the boundaries of what’s possible in the
          semiconductor industry, we are always on the lookout for talented,
          passionate, and driven individuals to join our dynamic team.
        </p>

        <div className="career-divider" />
      </div>
    </section>
  );
};

export default Career;