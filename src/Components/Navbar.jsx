/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import data from "../Data_Folder/LandingPage";
import { Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { FilterData } from '../Store/DataSlice';

function Navbar() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.Products.filterdata);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    dispatch(FilterData(searchTerm));
  };

  return (
    <div className="main w-full">
      <div className="flex items-center justify-evenly text-white bg-black py-2">
        <div className="logo ">
          <img className="w-48" src={data[0]?.img} alt="" />
        </div>
        <div className="links gap-5 flex text-md font-semiboldbold ">
          <a href="#" className="uppercase">Home</a>
          <a href="#" className="uppercase">Shope</a>
          <a href="#" className="uppercase">About US </a>
          <a href="#" className="uppercase">blog</a>
          <a href="#" className="uppercase"> Contact Us</a>
          <a href="#" className="uppercase">Locations</a>
        </div>
        <div className="buttons flex gap-3">
          <Button type="primary" onClick={showDrawer}>
            <SearchOutlined />
          </Button>
          <Drawer title="Search" onClose={onClose} open={open}>
            <input
              type="text"
              className="w-full bg-gray-200 h-10 rounded-xl px-4"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className='w-full flex flex-wrap py-4'>
              {
                filterData.map((item,index)=>{
                  return(
                      <Link key={index} to={`/${item.id}` }>
                        <div className='w-32'>
                          <img src={item.img} alt="" />
                        </div>
                        <div className='w-64 py-4'>
                          <h3>{item.title}</h3>
                          <h3 className='text-gray-500'>{`Stock : ${item.quantity}`}</h3>
                          <h3 className='text-red-500'>{`Rs.${item.price}`}</h3>
                        </div>
                      </Link>
                    
                  )
                })
              }
            </div>
          </Drawer>
          <Button type="primary">Log in</Button>
          <Link to='/Cart'><Button type="primary"><ShoppingCartOutlined /></Button></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;