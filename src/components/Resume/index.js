import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pdf from "../../images/Resume.pdf";

function Resume() {
    return (
      <>
        <Card className="resumeCard">
          <Card.Header>
            {" "}
            <h1>Resume Highlights</h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>Technical Skills</Card.Title>
            <Card.Text>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Moment.js</li>
                <li>Bulma</li>
                <li>Git</li>
                <li>Terminal</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
              </ul>
            </Card.Text>
            <Card.Title>Other Skills</Card.Title>
            <Card.Text>
              <ul>
                <li>Data analysis</li>
                <li>
                  Years of leadership and agile project management experience
                </li>
                <li>Technical writing </li>
                <li>Interpersonal skills</li>
                <li>Visual, written, and oral communication</li>
              </ul>
            </Card.Text>
            <Button href={pdf} variant="primary">
              Download Resume PDF
            </Button>
          </Card.Body>
        </Card>
      </>
    );

    
}
export default Resume;