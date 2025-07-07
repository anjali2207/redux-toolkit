import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, showModal, setShowModal }) => {
  const totalCount = useSelector((state) => state.app.users);

  const singleUser = totalCount.filter((ele) => ele.id === id);
  //   console.log(singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          onClick={() => setShowModal(false)}
          className="btn btn-close my-2"
        ></button>
        <h2>{singleUser[0].name}</h2>
        <h4>{singleUser[0].email}</h4>
        <h4>{singleUser[0].age}</h4>
        <h5>{singleUser[0].gender}</h5>
      </div>
    </div>
  );
};

export default CustomModal;
