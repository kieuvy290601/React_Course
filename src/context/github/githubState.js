import { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
