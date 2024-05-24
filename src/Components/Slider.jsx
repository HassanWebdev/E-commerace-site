/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(745000);

  const handleMinChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMaxValue(event.target.value);
  };

  return (
    <div>
      <input
          className="h-10  rotate-180"
          type="range"
          min="1000"
          max="300000"
          value={300000 - minValue + 1000}
          onChange={(event) => handleMinChange({ target: { value: 300000 - parseInt(event.target.value, 10) + 1000 } })}
        />
      <input
      className='-translate-x-2 h-10'
        type="range"
        min="310000"
        max="745000"
        value={maxValue}
        onChange={handleMaxChange}
      />
      <p>
        Price. <span>{minValue} - {maxValue}</span>
      </p>
    </div>
  );
};

export default RangeSlider;