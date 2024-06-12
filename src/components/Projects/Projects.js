import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/sign.png";
import ngo from "../../Assets/Projects/snappy.png";
// import suicide from "../../Assets/Projects/suicide.png";
import sorting from "../../Assets/Projects/gesture.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sign Language Detection"
              description="Tools & technologies used: Python,Yolov5,Vs Code.
– Sign language detection refers to the process of automatically recognizing and interpreting gestures and movements
of the hands with audio facility"
              ghLink="https://github.com/cor1234/sign_language_detection"
            //  demoLink="https://github.com/cor1234/sign_language_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ngo}
              isBlog={false}
              title="Snappy Application"
              description=" A real-time chat application is a digital platform that enables users to exchange text messages. It allows people
to communicate in real-time,often featuring features like login ,logout and emoji support. "
              ghLink="https://github.com/cor1234/snappy"
           //   demoLink="https://github.com/cor1234/snappy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Gesture Control"
              description="Tools & technologies used: Python, PyAuto GUI, MediaPipe, Open cv
∗ Gesture control refers to the ability to interact with multimedia content, such as videos,volume slider by using
hand or body movements instead of traditional input devices like a mouse or keyboard."
              ghLink="https://github.com/EmrNITK/GestureControl"
             // demoLink="https://gentle-medovik-d32b6e.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
