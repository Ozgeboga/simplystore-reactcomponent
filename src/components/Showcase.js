import React from "react";

function Showcase() {
  return (
    <div id="products" className="container showcase ">
      <div class="row">
        <div className="col-sm" />
        <div className="col-sm pad ">
          <h1>Kanken classic Backpack</h1>
          <p>
            A perfect backpack for everyday use, but also greate when you are
            travelling
          </p>
          <button type="button" className="btn btn-primary">
            Shop Now
          </button>
        </div>
        <div className="col-sm pad1 ">
          <img src="https://picsum.photos/id/600/200/300" alt="..." />
        </div>
        <div className="col-sm" />
      </div>
    </div>
  );
}

export default Showcase;
