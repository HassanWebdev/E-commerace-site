/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,clearCart } from '../Store/Cartslice';
import { ToastContainer,toast } from 'react-toastify';
function Cart() {
  const[total,setTotal]=useState(0)
  const dispatch = useDispatch();
  let data = useSelector((state) => state.cart.items);
  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < data.length; i++) {
      totalPrice += data[i].price;
    }
    setTotal(totalPrice);
  }, [data]);
  const Checkout=()=>{
    dispatch(clearCart())
    toast.success('Your Order is Done. Thanks For Purchasing', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className=''>
      <h1 className='text-3xl font-serif flex justify-center font-bold text-red-500'>-:All Products:-</h1>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className='flex items-center border-2 w-full justify-evenly py-4'
          >
            <img className='w-64' src={item.img} alt='' />
            <div className='w-72 text-xl'>
              <h1>
                <span className='font-bold text-red-500'>Name:</span> {item.title}
              </h1>
              <h1>
                <span className='font-bold text-red-500'>Price:</span> 
                {item.price}
              </h1>
              <h1>
                <span className='font-bold text-red-500'>Buyed:</span> 
                {item.buy}
              </h1>
              <br />
              <button className='bg-red-500 text-white px-2 rounded-xl' onClick={()=>dispatch(removeFromCart(item))}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className='flex  px-5 py-5 gap-10 justify-end' >
        <button  className='font-bold text-2xl text-white rounded-xl px-2 py-1  bg-yellow-500 ' onClick={Checkout}>Check Out</button>
        <h1 className='font-bold text-2xl text-red-500  ' >Total Bill: {total}</h1>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cart;
