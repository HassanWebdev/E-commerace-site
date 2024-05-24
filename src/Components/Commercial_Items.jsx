/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterItems, selectProduct } from '../Store/DataSlice';

function Comercial_Item() {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(745000);

  const handleMinChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMaxValue(event.target.value);
  };
  const data = useSelector((state) => state.Products.Comercial);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      filterItems({
        type: 'Comercial',
        min: minValue,
        max: maxValue,
      })
    );
  }, [minValue, maxValue]);

  return (
    <div className='w-full flex'>
      <div className='left w-[30%] gap-5  px-5 translate-y-40'>

        <h1 className='font-bold text-2xl'>Price Filter</h1>
        <input
          className='h-10  rotate-180 '
          type='range'
          min='1000'
          max='300000'
          value={300000 - minValue + 1000}
          onChange={(event) =>
            handleMinChange({
              target: {
                value: 300000 - parseInt(event.target.value, 10) + 1000,
              },
            })
          }
        />
        <input
          className='-translate-x-2 h-10'
          type='range'
          min='310000'
          max='745000'
          value={maxValue}
          onChange={handleMaxChange}
        />
        <p>
          Price.{' '}
          <span className='font-semibold'>
            {minValue} - {maxValue}
          </span>
        </p>
      </div>
      <div className='left w-[70%] products text-center flex flex-wrap gap-10  py-5'>
        {data.map((item, index) => {
          return (
            <Link to={`/Comercial/${item.id}`} key={index}>
              <div className='main items w-72 h-80 rounded-xl'>
                <img src={item.img} alt='' />
                <h3>{`${item.title}`}</h3>
                <h3 className='text-gray-500'>{`Stock : ${item.quantity}`}</h3>
                <h3 className='text-red-500'>{`Rs.${item.price}`}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Comercial_Item;
