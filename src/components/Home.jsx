import React from "react";
import background from '../assets/bg4.jpg'

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark border-0">
        <img src={background} class="card-img" alt="Background" height="550px"/>
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="contanier">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p class="card-text fs-2 lead ">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
