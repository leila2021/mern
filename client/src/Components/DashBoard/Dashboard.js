import React from "react";
import { useSelector } from "react-redux";
import {Redirect} from "react-router-dom";
const Dashboard = () => {

//   const isAuth= useSelector((state) => state.authReducer.idAuth);
//  if (!isAuth) {
//    return <Redirect to="/login"/>
//  }
  return (
    <div>

      {/* <h1> {"Welcome " + user.name + " " + user.lastName} </h1> */}
      <h1>hello</h1>
    </div>
  );
};

export default Dashboard;