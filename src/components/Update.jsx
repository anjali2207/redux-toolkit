import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);
  console.log(updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div className="py-5">
      <h2>Update Details </h2>
      <form className="w-25 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="my-3 d-flex flex-column">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={updateData?.name || ""}
            onChange={newData}
            className="form-control"
          />
        </div>
        <div className="my-5 d-flex flex-column">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={updateData?.email || ""}
            onChange={newData}
            className="form-control"
          />
        </div>
        <div className="my-5 d-flex flex-column">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={updateData?.age || ""}
            onChange={newData}
            className="form-control"
          />
        </div>
        <div className="my-5 d-flex flex-column">
          <label className="form-label">Select Gender</label>
          <div className="d-flex justify-content-center gap-3">
            <input
              type="radio"
              name="gender"
              checked={updateData && updateData?.gender === "Male"}
              value="Male"
              onChange={newData}
              className="form-check-input"
              readOnly
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              checked={updateData && updateData?.gender === "Female"}
              value="Female"
              onChange={newData}
              className="form-check-input"
              readOnly
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

export default Update;
