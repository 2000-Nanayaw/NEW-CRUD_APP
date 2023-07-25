import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { reduxEditUser } from "../action/UsersAction";

function EditUserForm(props) {
  const [fullName, setFullName] = useState(props.userData.fullName);
  const [idName, setIdName] = useState("");
  const [companyAddress, setCompanyAddress] = useState(props.userData.idName);
  const [info, setInfo] = useState(props.userData.companyAddress);
  const [city, setCity] = useState(props.userData.city);
  const [fileId, setFileId] = useState(props.userData.fileId);
  const [zipCode, setZipCode] = useState(props.userData.zipCode);
  const [checked, setChecked] = useState(props.userData.checked);
  const EdithandleSubmit = (e) => {
    e.preventDefault();

    let newInfo = {
      id: props.userData.id,
      fullName,
      idName,
      companyAddress,
      info,
      city,
      fileId,
      zipCode,
      checked,
    };
    props.reduxEditUser(newInfo);
    setFullName("");
    setIdName("");
    setCompanyAddress("");
    setInfo("");
    setCity("");
    setFileId("");
    setZipCode("");
    setChecked("");
    props.hide();
  };
  return (
    <div>
      <Form
        style={{
          border: "1px solid blue",
          borderRadius: "10px",
          padding: "30px",
          width: "400px",
          marginLeft: "30px",
        }}
      >
        <h5>
          <mark>EDIT FORM</mark>
        </h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Student ID"
              value={idName}
              onChange={(e) => {
                setIdName(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Company Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            type="text"
            value={companyAddress}
            onChange={(e) => {
              setCompanyAddress(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Info@</Form.Label>
          <Form.Control
            placeholder="Enter Email Address"
            type="text"
            value={info}
            onChange={(e) => {
              setInfo(e.target.value);
            }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>File</Form.Label>
            <Form.Select defaultValue="Choose...">
              <Form.Control
                value={fileId}
                onChange={(e) => {
                  setFileId(e.target.value);
                }}
              />
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="number"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            value={checked}
            onChange={(e) => {
              setChecked(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={EdithandleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
const mapDispatchToProps = {
  reduxEditUser,
};
export default connect(null, mapDispatchToProps)(EditUserForm);
