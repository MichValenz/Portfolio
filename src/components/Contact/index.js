import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;


  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <>
      <Form className="contactForm" onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={name}
            name="name"
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            defaultValue={email}
            name="email"
            placeholder="Enter email address"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            defaultValue={message}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <section id="my-contact" class="contact">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>Have any questions? Contact me.</p>
          <br />
          Phone: <a href="tel:432-557-2582">432-557-2582</a> <br />
          Email:
          <a href="mailto:michvalenz27@gmail.com" target="blank">
            michvalenz27@gmail.com
          </a>
          <br />
          Social Media:
          <a
            href="https://www.linkedin.com/in/michelle-valenzuela-4aa119190/"
            target="blank"
          >
            Linkedin
          </a>
          <a href="https://github.com/MichValenz" target="blank">
            Git Hub
          </a>
        </div>
      </section>
    </>
    // <section>
    //   <h1>Contact Me</h1>
    //   <form id="contact-form" onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input
    //         type="text"
    //         defaultValue={name}

    //         name="name"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         type="email"
    //         defaultValue={email}
    //         name="email"

    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea
    //         name="message"
    //         defaultValue={message}

    //         rows="5"
    //       />

    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </section>
  );
}

export default Contact;
