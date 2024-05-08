import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Welcome Shoppers</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Welcome to Jericommerce, your hub for style, innovation, and convenience. Explore our curated collection designed to meet your diverse needs,
              whether it's fashion, technology, or accessories. Join our community united by a passion for quality and seamless experiences. Welcome to the adventure!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
