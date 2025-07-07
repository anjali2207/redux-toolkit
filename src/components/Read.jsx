import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2> Loading...</h2>;
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
      <div className="my-3">
        {users &&
          users.map((ele) => (
            <div key={ele.id} className="my-2 card w-50 mx-auto border">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email} </h6>
                <p className="card-text"> {ele.gender} </p>
                <div className="d-flex gap-4 justify-content-center ">
                  <button
                    className="btn btn-link"
                    onClick={() => [setId(ele.id), setShowModal(true)]}
                  >
                    Veiw
                  </button>
                  <Link to="" className="card-link">
                    Edit
                  </Link>
                  <Link
                    to=""
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="card-link"
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
