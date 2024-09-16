import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lt from "../../Assets/Projects/lt.png"
import codechef from "../../Assets/Projects/codechef.jpeg";
import codeforce from "../../Assets/Projects/codeforce.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Coding <strong className="purple">Profile</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are coding profiles on different platforms.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lt}
              isBlog={false}
              title="Leetcode"
              description="LeetCode is widely known for preparing for technical interviews. It offers a variety of 
              coding problems that range from easy to hard, focusing on algorithms, data structures, and
               problem-solving skills. It's especially useful for mastering coding patterns and preparing for coding 
               interviews at top tech companies."
              ghLink="https://leetcode.com/u/rohna1234/"
              platform="Leetcode"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeforce}
              isBlog={false}
              title="Codeforces"
              description=" Codeforces is a competitive programming platform that hosts contests and challenges in real-time. 
              It focuses on algorithmic problem-solving, which helps users improve their coding speed, logic, and understanding 
              of complex algorithms. It's 
              a great platform for practicing under pressure and enhancing problem-solving skills in a competitive environment."
              ghLink="https://codeforces.com/profile/rohna2019.rk"
              platform="Codeforces"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codechef}
              isBlog={false}
              title="Codechef"
              description="TCodeChef is another popular competitive programming platform that encourages 
              problem-solving through monthly contests and practice problems. It also fosters a large community where 
              users can learn from tutorials and discussions. CodeChef's focus on competitive programming helps 
              learners improve their coding efficiency and algorithmic thinking."
              ghLink="https://www.codechef.com/users/rohan2019rk"
              platform="Codechef"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
