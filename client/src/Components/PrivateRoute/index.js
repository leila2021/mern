import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const isLoding = useSelector((state) => state.authReducer.isLoding);
  if (isLoding) {
    return <h1>loading....</h1>;
  }
  if (!isAuth) {
    return <Redirect to="/login" />;
  } else {
    <Route path={path} component={Component} {...rest} />;
  }

  return <div></div>;
};

export default PrivateRoute;
// path component
