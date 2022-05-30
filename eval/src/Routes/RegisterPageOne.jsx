import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
function RegisterPageOne() {
  //const [userdata,SetUserData]= useState

  return (
    <div>
      <h1>User Basic Info</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Your UserName"
          className="Username"
        />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          className="Username"
        />
        <br />
        <span>-------------------------></span>
        <button>
          <Link to="/register/two">Next</Link>
        </button>
      </div>
    </div>
  );
}

export default RegisterPageOne;
