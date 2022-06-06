import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function Contact() {
  return (
    <>
      <Card style={{ width: "100%" }}>
        <Card.Header>
          {" "}
          <h1>Contact Me </h1>{" "}
        </Card.Header>
        <ListGroup className="contact-page" variant="flush">
          <ListGroup.Item>
            {" "}
            <h3>Phone:</h3> <a href="tel:432-557-2582">432-557-2582</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>Email:</h3>{" "}
            <a href="mailto:michvalenz27@gmail.com"> michvalenz27@gmail.com</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>Web:</h3>
            <a href="https://github.com/MichValenz"> GitHub</a> <br></br>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"> Linkedin </a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default Contact;
