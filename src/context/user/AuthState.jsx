import * as React from "react";
import AuthContext from "./authContext";
import { isLoggedIn } from "../../authorization/auth";

const AuthState = (props) => {
  const [user, setUser] = React.useState({
    // data: {},
    login: false,
  });

  React.useEffect(() => {
    setUser({
      // data: currentUserDetail(),
      login: isLoggedIn(),
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
