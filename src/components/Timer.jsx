import { useState, useEffect } from "react";
import { Container, Button, Row, Col, Stack, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/App.scss";

export default function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    if (isActive && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            //--When timer is complete--//
            clearInterval(timer);
            setIsActive(false);
          } else {
            //--Decrease minutes and set seconds to 59--//
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          //--Decrease seconds--//
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, minutes, seconds]);

  //--Start button--//
  const handleStart = () => {
    setIsActive(true);
  };

  //--Pause button--//
  const handlePause = () => {
    setIsActive(false);
  };

  //--Reset button--//
  const handleReset = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  //--Return to Home page button--//
  const handleReturn = () => {
    navigate("/");
  };

  return (
    <section className="vh-100">
      <Container style={{ marginTop: "300px" }} fluid>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ flexWrap: "wrap" }}
          xs="auto"
        >
          <Col sm={6}>
            <Card style={{ borderRadius: "15px", backgroundColor: "#eeecda" }}>
              <Card.Body className="p-5">
                <Card.Title style={{ fontSize: "50px" }}>
                  Pomodoro Timer
                </Card.Title>
                <Stack gap={3}>
                  <span style={{ fontSize: "80px" }}>{`${minutes
                    .toString()
                    .padStart(2, "0")}:${seconds
                    .toString()
                    .padStart(2, "0")}`}</span>

                  <div className="d-flex justify-content-center">
                    <Button
                      variant="success"
                      style={{ margin: "5px" }}
                      onClick={handleStart}
                    >
                      <i className="fa-solid fa-play" />
                    </Button>
                    <Button
                      variant="warning"
                      style={{ margin: "5px" }}
                      onClick={handlePause}
                    >
                      <i className="fa-solid fa-pause" />
                    </Button>
                    <Button
                      variant="secondary"
                      style={{ margin: "5px" }}
                      onClick={handleReset}
                    >
                      <i className="fa-solid fa-rotate-right" />
                    </Button>
                  </div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ flexWrap: "nowrap", margin: "10px" }}
          xs="auto"
        >
          <button
            className="button return"
            style={{
              margin: "5px",
            }}
            onClick={handleReturn}
          >
            <i className="fa-solid fa-right-from-bracket p-2" />
            Return to Home Page
          </button>
        </Row>
      </Container>
    </section>
  );
}
