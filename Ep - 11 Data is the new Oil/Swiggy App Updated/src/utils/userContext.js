import { createContext } from "react";

// Global user context with safe defaults
const UserContext = createContext({
  loggedInUser: "Harsh",
  setUserName: () => {}, // prevents "is not a function" when Provider is missing
});

export default UserContext;
