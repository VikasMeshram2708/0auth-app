import React from 'react';

const Carosuel = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade mb-5"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/1400x400/?buildings"
              className="d-block w-100"
              alt="logo"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1400x400/?rent"
              className="d-block w-100"
              alt="logo"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1400x400/?company"
              className="d-block w-100"
              alt="logo"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carosuel;
