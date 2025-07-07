import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("users..", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div className="py-5">
      <h2>Fill The Form</h2>
      <form className="w-25 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="my-3 d-flex flex-column">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={getUserData}
            className="form-control"
          />
        </div>
        <div className="my-5 d-flex flex-column">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={getUserData}
            className="form-control"
          />
        </div>
        <div className="my-5 d-flex flex-column">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            onChange={getUserData}
            className="form-control"
          />
        </div>
        <div className="my-5 d-flex flex-column">
          <label className="form-label">Select Gender</label>
          <div className="d-flex justify-content-center gap-3">
            <input
              type="radio"
              name="gender"
              // checked={getUserData.gender === "Female"}
              value="Male"
              onChange={getUserData}
              className="form-check-input"
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              // checked={this.state.selectedOption === "Female"}
              value="Female"
              onChange={getUserData}
              className="form-check-input"
            />
            <label>Famale</label>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
