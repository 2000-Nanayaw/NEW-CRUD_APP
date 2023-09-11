// let initialState = {
//   students: [
//     {
//       name: "jsar",
//       email: "jsar@gmail.com",
//       level: 23,
//       id: "9843igjfhjk",
//     },
//     {
//       name: "abigail",
//       email: "abigail@gmail.com",
//       level: 13,
//       id: "koi9849865",
//     },
//   ],
// };

// let usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_NEW_USER":
//       return { ...state, students: [...state.students, action.payload] };
//     default:
//       return state;
//   }
// };
// export default usersReducer;

import { v4 as uuid } from "uuid";
let initialState = {
  users: [
    {
      id: uuid(),
      fullName: "jsar",
      idName: 8778676,
      companyAddress: "L77jhd59",
      info: "info@jsar.com",
      city: "Accra",
      fileId: "king999",
      zipCode: 987877,
      checked: "",
    },
  ],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: action.payload };

    case "DELETE_USER":
      const unDeletetdUser = state.users.filter(
        (user) => user.id !== action.payload
      );

      return { ...state, users: unDeletetdUser };

    case "EDIT_USER":
      const upDatedUserInfo = state.users.map((user) => {
        if (user.id === action.payload.updatedInfo.id) {
          return action.payload.updatedInfo;
        } else {
          return user;
        }
      });
      return { ...state, users: upDatedUserInfo };

    default:
      return state;
  }
};

export default usersReducer;
