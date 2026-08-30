import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiJetbrains,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { name: "Linux", icon: <SiLinux /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Heroku", icon: <SiHeroku /> },
    { name: "IntelliJ", icon: <SiJetbrains /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} key={tool.name} className="tech-icons">
          <div className="tech-icon-wrap">
            <div className="tech-icon-item">{tool.icon}</div>
            <div className="tech-skill-name">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
