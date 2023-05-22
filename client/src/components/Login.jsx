import React, { useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button, Container, Form } from "react-bootstrap";
export default function Login({ onIdSubmit }) {
  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
    console.log(idRef);
  }
  function createNewId(e) {
    e.preventDefault();
    onIdSubmit(uuidV4());
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{
        height: "100vh",
      }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNewId}>
          Create An Id
        </Button>
      </Form>
    </Container>
  );
}
