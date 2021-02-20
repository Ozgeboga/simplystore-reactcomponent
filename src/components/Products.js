import React from "react";

function Products() {
  return (
    <div id="products"className="container mt-4">
      <div className="row text-center mx-auto">
        <div className="col-sm-2">
          <img
            src="https://picsum.photos/id/50/200/300"
            className="img-thumbnail"
            className="w-100"
            alt=""
          />
          <h1 className="fs-2">Berde</h1>
          <p className="text-muted fs-5">IDR 360.000</p>
        </div>
        <div className="col-sm-2">
          <img
            src="https://picsum.photos/id/51/200/300"
            className="img-thumbnail"
            className="w-100"
            alt=""
          />
          <h1 className="fs-2">Greenland</h1>
          <p className="text-muted fs-5">IDR 1.550.010</p>
        </div>
        <div className="col-sm-2">
          <img
            src="https://picsum.photos/id/52/200/300"
            className="img-thumbnail"
            className="w-100"
            alt=""
          />
          <h1 className="fs-2">Helga</h1>
          <p className="text-muted fs-5">IDR 299.000</p>
        </div>
        <div className="col-sm-2">
          <img
            src="https://picsum.photos/id/53/200/300"
            className="img-thumbnail"
            className="w-100"
            alt=""
          />
          <h1 className="fs-2">Poly Chuck</h1>
          <p className="text-muted fs-5">IDR 559.000</p>
        </div>
        <div className="col-sm-2">
          <img
            src="https://picsum.photos/id/54/200/300"
            className="img-thumbnail"
            className="w-100"
            alt=""
          />
          <h1 className="fs-2">Wallaby</h1>
          <p className="text-muted fs-5">IDR 185.000</p>
        </div>
        <div className="col-sm-2">
          <img
            src="https://picsum.photos/id/55/200/300"
            className="img-thumbnail"
            className="w-100"
            alt=""
          />
          <h1 className="fs-2">Salvo</h1>
          <p className="text-muted fs-5">IDR 319.000</p>
        </div>
      </div>
    </div>
  );
}
export default Products;
