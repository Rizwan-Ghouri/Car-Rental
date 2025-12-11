import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'

const SkillData = [
    {
        name:"Best Price",
        icon:(<FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />),
        link:"#",
        description:"orem, ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay:"0",
    },
    {
        name:"Fast and Safe",
        icon:(<GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />),
        link:"#",
        description:"orem, ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay:"500",
    },
    {
        name:"Experience Drivers",
        icon:(<SlNote className="text-5xl text-primary group-hover:text-black duration-300" />),
        link:"#",
        description:"orem, ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay:"1000",
    },
]

const Service = () => {
  return (
    <div className=" dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
            <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">Why Choose Us</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                SkillData.map((skillData)=>{
                    return <div key={skillData.name} data-aos="fade-up" data-aos-delay={skillData.aosDelay} className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark text-white hover:bg-primary duration-300 hover:text-black rounded-lg">
                        <div className="grid place-items-center">{skillData.icon}</div>
                        <h1>{skillData.name}</h1>
                        <p>{skillData.description}</p>
                        <a href={skillData.link}>Learn More</a>
                        
                    </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Service
