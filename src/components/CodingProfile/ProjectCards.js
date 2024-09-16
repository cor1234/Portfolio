import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
function ProjectCards(props) {
  let platformIcon;

  // Conditionally render the correct icon based on the platform
  if (props.platform === "Leetcode") {
    platformIcon = <SiLeetcode />;
  } else if (props.platform === "Codeforces") {
    platformIcon = <SiCodeforces />;
  } else if (props.platform === "Codechef") {
    platformIcon = <SiCodechef />;
  }

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          {platformIcon}&nbsp;
          {props.platform}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Link"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
