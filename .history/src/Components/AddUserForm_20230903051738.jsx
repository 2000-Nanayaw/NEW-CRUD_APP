import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newReduxAdd } from "../action/UsersAction";
import { v4 as uuid } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../firebase/Config"

function AddUserForm(props) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState("");
  const [idName, setIdName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [info, setInfo] = useState("");
  const [city, setCity] = useState("");
  const [fileId, setFileId] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [checked, setChecked] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      newReduxAdd({
        id: uuid(),
        fullName,
        idName,
        companyAddress,
        info,
        city,
        fileId,
        zipCode,
        checked,
      })
    );
    const docRef = await addDoc(collection(db, "users"), {
      id: uuid(),
        fullName,
        idName,
        companyAddress,
        info,
        city,
        fileId,
        zipCode,
        checked,
    });
    setFullName("");
    setIdName("");
    setCompanyAddress("");
    setInfo("");
    setCity("");
    setFileId("");
    setZipCode("");
    setChecked("");
  };
  const handleIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const handleDecrease = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  const handleCopy = () => {
    // Handle copy information logic here
    const copiedInfo = `${fullName}, ${idName}, ${companyAddress}, ${info}, ${city}, ${fileId}, ${zipCode}, ${checked},`;
    navigator.clipboard.writeText(copiedInfo);
    console.log("Information copied:", copiedInfo);
    setFullName("");
    setIdName("");
    setCompanyAddress("");
    setInfo("");
    setCity("");
    setFileId("");
    setZipCode("");
    setChecked("");
  };
  return (
    <div>
      <Form
        style={{
          border: "1px solid blue",
          borderRadius: "10px",
          padding: "30px",
          width: "400px",
        }}
      >
        <h5>
          <mark>EG CHECK ATTENDANCE FORM</mark>
        </h5>
        <h3>ID No: {count}</h3>
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
            <Form.Label> ID</Form.Label>
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
          <Form.Label>Parent Address</Form.Label>
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
        <Button
          href="#"
          variant="warning"
          size="sm"
          style={{ margin: "10px" }}
          onClick={handleIncrease}
        >
          Increase ID
        </Button>
        <Button href="#" variant="secondary" size="sm" onClick={handleDecrease}>
          Decrease ID
        </Button>

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

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="dark" onClick={handleCopy} style={{ margin: "10px" }}>
          Copy Details
        </Button>
      </Form>
    </div>
  );
}
// const mapDispatchToProps = {
//   newReduxAdd: newReduxAdd,
// };
// export default connect(null, mapDispatchToProps)(AddUserForm);
export default AddUserForm;

