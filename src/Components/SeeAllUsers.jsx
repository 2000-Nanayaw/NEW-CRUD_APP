import React from "react";
import Users from "./Users";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function SeeAllUsers(props) {
  const { users } = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <Row>
        {users.map((users, index) => {
          return (
            <Users
              key={index}
              userData={users}
              addNewUser={props.addNewUser}
              deleteUser={props.deleteUser}
              EditUser={props.EditUser}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default SeeAllUsers;
