import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //--To store user data in local storage--//
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <>
      <section className="vh-100 vw-100">
        <Container>
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col className="col-12 col-md-9 col-lg-7 col-xl-6">
              <Card
                style={{ borderRadius: "15px", backgroundColor: "#eeecda" }}
              >
                <Card.Body className="p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="formNameRegister">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        name="name"
                        value={input.name}
                        onChange={(event) =>
                          setInput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }
                        type="text"
                        id="formNameRegister"
                        size="lg"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formEmailRegister">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        name="email"
                        value={input.email}
                        onChange={(event) =>
                          setInput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }
                        type="email"
                        id="formEmailRegister"
                        size="lg"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-4"
                      controlId="formPasswordRegister"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        value={input.password}
                        onChange={(event) =>
                          setInput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }
                        type="password"
                        id="formPasswordRegister"
                        size="lg"
                        required
                      />
                    </Form.Group>

                    <Button type="submit" variant="primary" size="lg">
                      Register
                    </Button>

                    <p className="text-center text-muted mt-5 mb-0">
                      Already have an account?{" "}
                      <Link to="/login" className="fw-medium text-success">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
