import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";


function Projects() {
const Projects = [
  {
    name: "FiMi QA",
    description:
      "An employee tracking application designed specifically for quality assurance departments.",
    
  },
  {
    name: "Tech Cat",
    description:
      "This application allows users to post and track tech related blogs.",
  },
  {
    name: "m5",
    description:
      "This application allows users to quickly find videos of searched actors.",
  },
  {
    name: "README Generator",
    description:
      "This backend only application creates README files for users with user input.",
  },
  {
    name: "note-taker",
    description:
      "From to-do lists to big ideas, Note Taker is an easy way to document and track your notes.",
  },
  {
    name: "run-buddy",
    description: "A website that offers fitness training services..",
  },
];
  return(

<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 6 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>);
}

export default Projects;