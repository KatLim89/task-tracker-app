import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StatusLine from "../components/StatusLine";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import "../styles/App.scss";

export default function Home() {
  //--To display registered user's name in Navbar--//
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  //--Modal to confirm Logout--//
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //--Logout function--//
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  //------ Task Tracker App ------//
  const [tasks, setTasks] = useState([]);

  //--Hook to retrieve data from local storage--//
  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  //--Default empty task item display--//
  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        title: "",
        description: "",
        urgency: "",
        status: status,
      },
    ]);
  }

  //--To add new task item--//
  function addTask(taskToAdd) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });

    let newTaskList = [...filteredTasks, taskToAdd];

    setTasks(newTaskList);
    saveTasksToLocalStorage(newTaskList);
  }

  //--Deleting task item--//
  function deleteTask(taskId) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);
    saveTasksToLocalStorage(filteredTasks);
  }

  //--Moving task item to different Status column--//
  function moveTask(id, newStatus) {
    let task = tasks.filter((task) => {
      return task.id === id;
    })[0];

    let filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    task.status = newStatus;

    let newTaskList = [...filteredTasks, task];

    setTasks(newTaskList);
    saveTasksToLocalStorage(newTaskList);
  }

  //--Saving task item to local storage--//
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  //--Retrieve task item from local storage--//
  function loadTasksFromLocalStorage() {
    let loadedTasks = localStorage.getItem("tasks");
    let tasks = JSON.parse(loadedTasks);

    if (tasks) {
      setTasks(tasks);
    }
  }

  return (
    <>
      <Navbar
        fixed="top"
        style={{ backgroundColor: "#eeecda", color: "#132743" }}
      >
        <Container className="py-1">
          <Navbar.Brand href="/">
            <i className="fa-solid fa-dragon fs-3" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Button
              href="/timer"
              variant="warning"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                borderWidth: "medium",
                borderColor: "#132743",
                marginLeft: "10px",
              }}
            >
              TIMER
            </Button>
          </Nav>
          <Nav className="align-items-center">
            <Navbar.Text
              className="text-center"
              style={{ fontSize: "18px", fontWeight: "400", color: "#132743" }}
            >
              Signed in as: <strong>{userName.name}</strong>
              <i
                className="ps-2 fa-regular fa-face-smile"
                style={{ fontSize: "24px" }}
              />
            </Navbar.Text>
          </Nav>
        </Container>
        <Button
          className="mx-3"
          onClick={handleShow}
          variant="outline-danger"
          style={{
            fontSize: "18px",
            fontWeight: "500",
            borderWidth: "medium",
          }}
        >
          LOGOUT
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#f6f8ec", color: "black" }}
          >
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: "#f6f8ec",
              color: "black",
              fontSize: "18px",
            }}
          >
            Are you sure you want to logout of your account?
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#f6f8ec", color: "black" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>

      {/* Main body display */}
      <div className="App text-center">
        <h1 className="mt-5 pt-5">Task Tracker App</h1>
        <main>
          <section>
            <StatusLine
              tasks={tasks}
              addEmptyTask={addEmptyTask}
              addTask={addTask}
              deleteTask={deleteTask}
              moveTask={moveTask}
              status="Backlog"
            />
            <StatusLine
              tasks={tasks}
              addEmptyTask={addEmptyTask}
              addTask={addTask}
              deleteTask={deleteTask}
              moveTask={moveTask}
              status="In Progress"
            />
            <StatusLine
              tasks={tasks}
              addEmptyTask={addEmptyTask}
              addTask={addTask}
              deleteTask={deleteTask}
              moveTask={moveTask}
              status="Done"
            />
          </section>
        </main>
      </div>
    </>
  );
}
