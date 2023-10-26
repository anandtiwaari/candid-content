import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import React, { useState } from "react";
import { FollowMe } from "./FollowMe";
import neilAdams from "../assets/NeilAdams.png";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

export const CombinedComponent = () => {
  const [products, setProducts] = useState([
    {
      name: "john",
      img: neilAdams,
    },
    {
      name: "rjni ",
      img: neilAdams,
    },
  ]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productsTemplate = (products) => {
    return (
      <div className=" surface-border border-round m-2 text-center py-1 px-3">
        <div className="mb-3">
          <img
            src={products.img}
            alt={products.name}
            className="w-3 shadow-2"
          />
        </div>
        <div>
          {/* <h4 className="mb-1">{products.name}</h4>
          <h6 className="mt-0 mb-3">{products.name}</h6> */}
          {/* <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag> */}
          {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div> */}
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          perferendis eos temporibus distinctio maiores libero nostrum nobis,
          quasi tenetur, velit possimus provident sunt saepe cupiditate
          doloremque quas omnis ducimus fugiat.
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <FollowMe />
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="card" style={{ backgroundColor: "black" }}>
              <Carousel
                value={products}
                numVisible={1}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplayInterval={3000}
                itemTemplate={productsTemplate}
              />
            </div>
          </div>
          {/* <div className="col-md">One of three columns</div> */}
        </div>
      </div>
    </div>
  );
};
