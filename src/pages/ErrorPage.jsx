import { Container } from "react-bootstrap";

export default function ErrorPage() {
  return (
    <Container>
      <h1 className="text-center" style={{ fontSize: "200px" }}>
        <i
          className="fa-solid fa-triangle-exclamation"
          style={{ color: "#eeecda" }}
        />
        <br />
        Oops!
      </h1>
      <p style={{ fontSize: "80px" }}>Page Not Found</p>
    </Container>
  );
}
