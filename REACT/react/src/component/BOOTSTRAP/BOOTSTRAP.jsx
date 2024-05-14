import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BOOTSTRAP = () => {
  return (
    <Card className="p-1">
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Consetetur vero et lorem sed takimata magna accusam sanctus. At duo et
        elitr dolor aliquyam sed voluptua magna. Stet sit sadipscing sanctus sed
        eos est, sed rebum dolor amet et et consetetur ut justo, dolore ut sit
        et aliquyam rebum, est rebum amet ut labore, ipsum justo dolore sit et.
      </Card.Text>
      <Button>Learn More</Button>
        </Card.Body>
    </Card>
  );
};

export default BOOTSTRAP;

//npm install react-bootstrap bootstrap
