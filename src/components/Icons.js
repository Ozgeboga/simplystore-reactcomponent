import React from "react";

function Icons() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-sm-6 text-start fs-5">
          <i className="fab fa-stripe-s" />
        </div>
        <div className="col-sm-6 text-end d-flex flex-item justify-content-end  ">
          <i className="fab fa-facebook-square fs-3" />
          <i className="fab fa-twitter-square ps-2 fs-3" />
          <i className="fab fa-instagram-square fs-3 ps-2" />
        </div>
      </div>
    </div>
  );
}

export default Icons;
