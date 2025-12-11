import React from "react";
import CarAbout from "../../assets/car1.png";
const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center bg-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarAbout}
              alt="About Image"
              className="sm:scale-105 sm:-translate-x-11  max-h-[300px]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 data-aos="fade-up" className="text-2xl sm:text-4xl font-bold font-serif">
                About
              </h1>
              <p data-aos="fade-up">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                quasi molestias porro quis harum.
              </p>

              <p data-aos="fade-up">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                quasi molestias porro quis harum.
              </p>
              <button data-aos="fade-up" className="btn-outline">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
