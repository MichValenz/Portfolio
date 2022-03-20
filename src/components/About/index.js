import React from "react";
import { Container, Col, Row } from 'react-bootstrap';

function About() {
  return (
    <Container >
      <Row id="aboutMe">
        <Col>
          <h1 id="about">About Me</h1>
          <p>
            An analytically driven leader with 10 years of experience in
            leadership, quality control, root cause analysis, error prevention,
            technical writing, and cross-departmental collaboration. My
            experiences as a stakeholder and as a user make me the perfect
            addition to any web development project. I grew up in the outskirts
            of a small town in west Texas with nothing to do and spotty wifi. I
            spent my time surfing the web and it quickly became my safe space. I
            know the importance of an efficient and engaging website.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
