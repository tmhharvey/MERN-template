import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuthContext from "./Context/auth/Context_HOC";

const ProtectedRoute = ({
  context: {
    state: { authenticated }
  },
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default withAuthContext(ProtectedRoute);

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// var auth;
// localStorage.getItem("authenticated") === true ? (auth = true) : (auth = false);
// console.log("AUTH IS: " + auth);

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       auth === true ? <Component {...props} /> : <Redirect to="/" />
//     }
//   />
// );

// export default ProtectedRoute;
