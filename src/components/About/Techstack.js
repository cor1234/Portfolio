import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiNodejs,
  DiDatabase,
  DiAws,
  DiDocker,
} from "react-icons/di";
import {
  SiAzuredevops,
  SiMicrosoftazure,
  SiPostgresql,
  SiKubernetes,
  SiFastapi,
  SiPytorch,
  SiSpring,
  SiApacheairflow,
  SiOpenai,
  SiGooglecloud,
} from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";

function Techstack() {
  const skills = [
    { name: "Python", icon: <DiPython /> },
    { name: "Java", icon: <DiJava /> },
    { name: "C++", icon: <CgCPlusPlus /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "HTML5", icon: <IoLogoHtml5 /> },
    { name: "CSS3", icon: <DiCss3 /> },
    { name: "React", icon: <DiReact /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Spring", icon: <SiSpring /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "SQL", icon: <DiDatabase /> },
    { name: "Azure", icon: <SiMicrosoftazure /> },
    { name: "AWS", icon: <DiAws /> },
    { name: "Docker", icon: <DiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Azure DevOps", icon: <SiAzuredevops /> },
    { name: "Airflow", icon: <SiApacheairflow /> },
    { name: "OpenAI", icon: <SiOpenai /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Git", icon: <DiGit /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col xs={4} md={2} key={skill.name} className="tech-icons">
          <div className="tech-icon-wrap">
            <div className="tech-icon-item">{skill.icon}</div>
            <div className="tech-skill-name">{skill.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
