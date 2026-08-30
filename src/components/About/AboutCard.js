import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Rohan Kumar</span>, a 2024 B.Tech graduate in <span className="purple">Electronics and Communication Engineering</span> from <span className="purple">NIT Kurukshetra.</span>
            <br />
            <br />
            I am a software engineer with experience across <span className="purple">AI Engineering, Backend Engineering, and Data Engineering.</span> My work focuses on building scalable, cloud-based products and data-driven AI systems that solve real-world business problems.
            <br />
            <br />
            I have hands-on experience in backend design, data pipelines, cloud architecture, and generative AI workflows, and I enjoy turning complex requirements into reliable production systems.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem solving and DSA
            </li>
            <li className="about-activity">
              <ImPointRight /> Backend and cloud engineering
            </li>
            <li className="about-activity">
              <ImPointRight /> Generative AI and agentic systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Data pipelines and analytics
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous learning and building impactful products
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never Give Up is my philosophy!"{" "}
          </p>
          <footer className="blockquote-footer">Rohan Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
