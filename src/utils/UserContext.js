import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Hi, Guest",
});

export default UserContext;
