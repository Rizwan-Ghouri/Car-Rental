import React from 'react'
import bannerCar1 from "../../assets/banner-car1.png";
import bannerCar2 from "../../assets/banner-car2.png";


const Hero = ({theme}) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
        <div className="container min-h-[620px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                <div className="order-1 sm:order-2">
                    <img data-aos="zoom-in" data-aos-duration="1500" className="relative -z-10 max-h-[600px] sm:scale-125 
                    drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" src={theme === "dark"?bannerCar1:bannerCar2} alt="" />
                </div>
                <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
                    <p data-aos="fade-up" data-aos-delay="500" className="text-primary text-2xl font-serif">Effortless</p>
                    <h1 data-aos="fade-up" data-aos-delay="600" className="text-5xl lg:text-7xl font-semibold font-serif">Car Rental</h1>
                    <p data-aos="fade-up" data-aos-delay="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure debitis veniam omnis illo ad harum vel doloribus?</p>
                    <button data-aos="fade-up" className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 cursor-pointer duration-300">Get Started</button>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Hero
