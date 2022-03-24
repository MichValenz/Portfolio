import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function Projects() {
const projectList = [
  {
    name: "FiMi QA",
    image: "../../images/FiMi.jpg",
    description:
      "An employee tracking application designed specifically for quality assurance departments.",
    
  },
  {
    name: "Tech Cat",
    image: "../../images/techcat.jpg",
    description:
      "This application allows users to post and track tech related blogs.",
  },
  {
    name: "m5",
    image: "../../images/m5.jpg",
    description:
      "This application allows users to quickly find videos of searched actors.",
  },
  {
    name: "README Generator",
    image: "../../images/readme.jpg",
    description:
      "This backend only application creates README files for users with user input.",
  },
  {
    name: "note-taker",
    image: "../../images/notetaker.jpg",
    description:
      "From to-do lists to big ideas, Note Taker is an easy way to document and track your notes.",
  },
  {
    name: "run-buddy",
    image: "../../images/runbuddy.jpg",
    description: "A website that offers fitness training services..",
    
  },
];

 const render = (proj, index) => { 
  return (
    <Row className="d-flex justify-content-around">
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img key={index} variant="top" src={proj.image} />
          <Card.Body>
            <Card.Title>{proj.name}</Card.Title>
            <Card.Text>{proj.description}</Card.Text>
            <Button variant="primary">Go to Website</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );}

  return <div className="grid">{projectList.map(render)}</div>
}

export default Projects;