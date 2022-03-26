import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Figure from "react-bootstrap/Figure";
import headshot from "../../images/headshot.png"


function About() {
  return (
    <>
      <Container fluid bg-light>
        <Row id="aboutMe">
          <Col>
            <h1 id="about">About Me</h1>
            <p>
              I am a creative and solution driven web developer with a
              background in project management, quality control, root cause
              analysis, and cross- departmental collaboration. As a web
              developer I have hours of experience with building full stack
              applications. Because of my background in project management and
              other roles, I understand what users and projects will require and
              need from a full stack application. I am able to anticipate needs
              and user desired experiences.
            </p>

            <p>
              For example, my first major project was building the backend
              routing and databases using MySQL, Sequelize, and Express.js for a
              QA employee tracking application, but also leading my team’s scrum
              meetings. My many years in QA allowed me to take lead and manage
              the application’s initial planning, structuring, and organizing my
              fellow developers goals. For new developers, organizing thoughts
              and plans can be difficult, but I used my experience in management
              to lead our team’s development plan. I helped the backend
              developer plan and build the application’s models and assisted the
              front-end developer with developing the user interface and tying
              the front end to the backend code.
            </p>

            <p>
              I am a highly adaptable, organized, supportive, and creative
              professional that produces thoughtful and effective work. After
              spending so many years on the other end of web development as
              stakeholder, I am determined and excited to bring my experiences
              and combine them with my creativity and technical skills to build
              other project’s ideas to life. I am excited at the prospect of
              helping others realize their ideas. I grew up in the outskirts of
              a small town in west Texas with nothing to do, but use my spotty
              wifi to browse the internet. I know the importance of an efficient
              and engaging website.
            </p>
          </Col>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              src={headshot}
              className="img-fluid rounded-circle"
              alt="headshot of Michelle Valenzuela"
            />
          </Figure>
        </Row>
      </Container>
    </>
  );
}

export default About;
