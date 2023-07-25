import React, { useState } from "react";
import { Card, Nav, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { reduxDeleteUser } from "../action/UsersAction";
import { useDispatch } from "react-redux";

function Users(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    // props.deleteUser(props.userData.id);
    dispatch(reduxDeleteUser(props.userData.id));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EG CHECK ATTENDANCE SYSTEM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userData={props.userData}
            EditUser={props.EditUser}
            hide={handleClose}
          />
        </Modal.Body>
      </Modal>
      <div>
        <Card style={{ padding: "30px", width: "400px" }}>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Button href="#first" style={{ margin: "10px" }}>
                  Active
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Copy text</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Copy">View Details</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>STUDENT IDENTITY</Card.Title>
            <hr />
            <Card.Text>Full Name: {props.userData.fullName}</Card.Text>
            <Card.Text>ID: {props.userData.idName}</Card.Text>
            <Card.Text>
              Company Address: {props.userData.companyAddress}
            </Card.Text>
            <Card.Text>Info@: {props.userData.info}</Card.Text>
            <hr />
            <Card.Text>City: {props.userData.city}</Card.Text>
            <Card.Text>file Id: {props.userData.fileId}</Card.Text>
            <Card.Text>Zip Code: {props.userData.zipCode}</Card.Text>
            <Card.Text>checked: {props.userData.checked}</Card.Text>
            <hr />
            <Button
              href="#"
              variant="primary"
              size="sm"
              style={{ margin: "10px" }}
              onClick={handleShow}
            >
              Edit
            </Button>
            <Button href="#" variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Users;
