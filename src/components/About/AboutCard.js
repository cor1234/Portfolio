import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohan Kumar </span>
            from <span className="purple"> National Institute of Technology, Kurukshetra. </span>
            <br />And have pursued Btech in  Electronics and  Communication Engineering.
            <br />
            <br />
           My interest and hobbies......
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Acting
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
              </li>
              <li className="about-activity">
              <ImPointRight /> Travelling
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
