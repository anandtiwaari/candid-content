import { Carousel } from "primereact/carousel";
import React, { useState } from "react";
import Neil from "../assets/NeilAdams.png";

export const Reviews = () => {
  const [products, setProducts] = useState([
    {
      desc: " Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to havescrambled parts of Cicero's De Finibus Bonorum.",
    },
    {
      desc: " Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to havescrambled parts of Cicero's De Finibus Bonorum.",
    },
    {
      desc: " Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to havescrambled parts of Cicero's De Finibus Bonorum.",
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

  const ReviewsCompo = () => {
    return (
      <>
        <p className="mt-5 mb-5">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum.
        </p>

        <div className="review_sect d-flex justify-content-center align-items-center flex-column mt-3">
          <img src={Neil} alt="" style={{ height: "30px", width: "30px" }} />
          <div>
            <span>{/* <img src={ratingStar} alt="" /> */}</span>
          </div>
          <span className="rating"></span>
        </div>
      </>
    );
  };
  return (
    <div>
      <div
        className="col-lg-6 bg-dark text-white d-flex justify-content-center flex-column align-items-center"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          padding: "0px",
          width: "-webkit-fill-available",
        }}
      >
        <div className="content_reviews">
          <h3>Our Top Reviews</h3>
          <Carousel
            value={products}
            numVisible={1}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={ReviewsCompo}
            autoplayInterval={3000}
          />
        </div>
      </div>
    </div>
  );
};
