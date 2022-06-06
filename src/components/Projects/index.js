import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";




function Projects() {
const projectList = [
  {
    name: "FiMi QA",
    image: require("../../images/FiMi.png"),
    description:
      "An employee tracking application designed specifically for quality assurance departments.",
    link: "https://mighty-reef-11767.herokuapp.com/",
    github: "https://github.com/Jiryeah/FiMi-QA_Application",
  },
  {
    name: "Tech Cat",
    image: require("../../images/techcat.jpeg"),
    description:
      "This application allows users to post and track tech related blogs.",
    link: "https://dry-retreat-70520.herokuapp.com/",
    github: "https://github.com/MichValenz/Tech-Blog",
  },
  {
    name: "README Generator",
    image: require("../../images/readme.jpg"),
    description:
      "This backend only application creates README files for users with user input.",
    github: "https://github.com/MichValenz/README-generator",
  },
  {
    name: "note-taker",
    image: require("../../images/notetaker.jpg"),
    description:
      "From to-do lists to big ideas, Note Taker is an easy way to document and track your notes.",
    link: "https://secret-hamlet-22284.herokuapp.com/",
    github: "https://github.com/MichValenz/note-taker",
  },
];

 const render = (proj) => { 

  
  return (
    <Row className="row">
      <Col>
        <Card className="project" style={{ width: "20rem", height: "32rem" }}>
          <Card.Img className="work-1" variant="top" src={proj.image} />
          <Card.Body>
            <Card.Title>{proj.name}</Card.Title>
            <Card.Text>{proj.description}</Card.Text>
            <Button
              style={{ margin: "5px" }}
              href={proj.link}
            >
              Go to Website
            </Button>{" "}
            
            <Button
              style={{ margin: "5px" }}
              href={proj.github}
            >
              GitHub Repo
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );}

  return (
    <>
      <Card.Header >
        {" "}
        <h1>Projects</h1>
      </Card.Header>
      <CardGroup className="justify-content-center projContainer">
        {projectList.map(render)}
      </CardGroup>
    </>
  );
}

export default Projects;