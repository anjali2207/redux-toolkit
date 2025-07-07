import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { users, loading } = useSelector((state) => state.app);
  const searchData = useSelector((state) => state.app.searchUser);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2 className="py-5"> Loading...</h2>;
  }

  return (
    <div className="py-5">
      {showModal && (
        <CustomModal
          id={id}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}

      <h2>All User Details</h2>

      <div className="d-flex justify-content-center gap-3 pt-5">
        <input
          type="radio"
          name="gender"
          checked={radioData === ""}
          className="form-check-input"
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label">All</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={radioData === "Male"}
          className="form-check-input"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Male</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={radioData === "Female"}
          className="form-check-input"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Famale</label>
      </div>

      <div className="my-4">
        {users &&
          users
            .filter((ele) => {
              if (!searchData?.length) {
                return true;
              }
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })
            .map((ele) => (
              <div key={ele.id} className="my-3 py-2 card w-50 mx-auto border">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {ele.email}{" "}
                  </h6>
                  <p className="card-text"> {ele.gender} </p>
                  <div className="d-flex gap-4 justify-content-center ">
                    <button
                      className="btn btn-link p-0"
                      onClick={() => [setId(ele.id), setShowModal(true)]}
                    >
                      Veiw
                    </button>
                    <Link to={`/edit/${ele.id}`} className="card-link">
                      Edit
                    </Link>
                    <Link
                      to=""
                      onClick={() => dispatch(deleteUser(ele.id))}
                      className="card-link m-0"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
