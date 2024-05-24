/* eslint-disable no-unused-vars */
import React from 'react'
import cash from '../assets/icons/cash.png'
import online from '../assets/icons/online.png'
import shipping from '../assets/icons/shipping.png'

function DelivarySvg() {
    const svg = [
        {
            "img":cash,
            "text":"Cash On Delivary",
            "Description":"Free Orders upto Rs.30,000"
        },
        {
            "img":online,
            "text":"Online Support",
            "Description":"Dedicated Online Support"
        },
        {
            "img":shipping,
            "text":"Free Delivery in Karachi",
            "Description":"For Orders Over Rs. 20,000"
        }
    ]
  return (
    <div className='w-full h-52  flex justify-center items-center flex-wrap'>
        <div className="Cards w-full justify-evenly  flex">
            {
                svg.map((item,index)=>{
                    return(
                        <div key={index} className=' flex  justify-center items-center gap-3 cursor-pointer' >
                            <img src={item.img} alt="" className='w-24' />
                            <div className="div">
                                <h3>{item.text}</h3>
                                <p className='text-gray-400' >{item.Description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DelivarySvg
