import React from "react";

const navItems = ["HOME", "CATAGORY", "DESIGNERS", "ABOUT"];

function Navbar() {
  return (
    <div className="container pt-3">
      <div className="row ">
        <div className="col-sm-3 bg-white fs-5">
          <i className="fab fa-stripe-s" />
        </div>
        <div className="col-sm-6 bg-white size ">
          {navItems.map(function(index) {
            return (
              <a className=" fs-5 " href="#">
                {index}
              </a>
            );
          })}
        </div>
        <div className="col-sm-3 bg-white text-end">
          <i class="fas fa-shopping-basket" />
          <a href="/singleproduct.html">My Card(12)</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
