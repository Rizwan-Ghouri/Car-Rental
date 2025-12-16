import React from 'react'
import banner from "../../assets/banner.jpeg";
import appStoreImg from "../../assets/app_store-badge.png";
import playStoreImg from "../../assets/play_store-badge.png";

const bannerImg = {
  backgroundImage:`url(${banner})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPostion:"center",
  width:"100%",
  height:"100%",

}


function AppStoreBanner() {
  return (
    <div className='container pb-14'>
      <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl' style={bannerImg}>
        <div>
          <div className='space-y-6 max-w-xl mx-auto'>
            <h1 data-aos="fade-up" className='text-2xl text-center sm:text-4xl font-semibold font-serif'>Get Started with our app</h1>
            <p data-aos="fade-up" className='text-center sm:px-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis architecto ullam delectus placeat voluptas at illo eum? Optio!</p>
            <div data-aos="fade-up" className='flex justify-center items-center gap-4'>
              <a href="#">
                <img src={playStoreImg} className='max-w-[150] sm:max-w-[120px] md:max-w-[200px]' alt="" />
              </a>
              <a href="#">
                <img src={appStoreImg} className='max-w-[150] sm:max-w-[120px] md:max-w-[200px]' alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppStoreBanner;
