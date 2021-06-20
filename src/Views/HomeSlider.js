import React from "react";

export default function HomeSlider(props) {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="6000">
          <img src="images/slider-1.png" className="d-block w-0" alt="..." />
        </div>
        <div className="carousel-item" data-interval="6000">
          <img src="images/slider-2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-interval="6000">
          <img src="images/slider-3.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
