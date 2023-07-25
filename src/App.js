import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SeeAllUsers from "./Components/SeeAllUsers";
import AddUserForm from "./Components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const handleSubmit = (user) => {
    user.id = Math.random().toString();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(
      users.filter((user) => {
        if (user.id !== id) {
          return user;
        }
      })
    );
  };
  const EditUser = (id, upDateduser) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return upDateduser;
        }
        return user;
      })
    );
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <AddUserForm handleSubmit={handleSubmit} />
        </Col>
        <Col>
          <SeeAllUsers
            userData={users}
            deleteUser={deleteUser}
            EditUser={EditUser}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
