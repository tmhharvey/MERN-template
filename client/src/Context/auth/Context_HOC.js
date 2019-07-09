import React from "react";

import { AuthAppContext } from "./AuthContextProvider";

export default function withAuthContext(Component) {
  return function contextComponent(props) {
    return (
      <AuthAppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AuthAppContext.Consumer>
    );
  };
}
