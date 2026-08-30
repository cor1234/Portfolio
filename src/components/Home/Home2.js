import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/imgf.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             I would like to have this  <span className="purple">opportunity</span> to tell you something about myself
            </h1>
            <p className="home-about-body">
              I am <span className="purple">Rohan Kumar</span>, a 2024 B.Tech graduate in Electronics and Communication Engineering from NIT Kurukshetra. I am a software engineer with a strong foundation in problem solving, backend development, data engineering, and Generative AI.
              <br />
              <br />
              I have solved <span className="purple">2,000+ DSA problems</span> on platforms such as LeetCode, Codeforces, and CodeChef, where I have built strong analytical and algorithmic thinking skills. My work combines software engineering fundamentals with enterprise-scale system design and AI-driven product development.
              <br />
              <br />
              My technical expertise includes <span className="purple">Python, Java, C++, SQL, FastAPI, Spring Boot, REST APIs, PySpark, Snowflake, PostgreSQL, MongoDB, Azure, AWS, Docker, Kubernetes, LangChain, LangGraph, RAG, MCP, Azure OpenAI, and AWS Bedrock.</span>
              <br />
              <br />
              I enjoy building end-to-end solutions from data ingestion and processing to AI workflows, APIs, and cloud-native production deployment.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cor1234/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohan-kumar-465218227/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
