import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './FlagDropdown.scss';

const countryOptions = [
  {
    value: "us",
    label: (
      <div className='dropdownShow'>
        <img
          src="https://flagcdn.com/h20/us.png"
          alt="USA Flag"
          style={{ marginRight: "10px" }}
        />
        USA
      </div>
    ),
  },
  {
    value: "za",
    label: (
      <div className='dropdownShow'>
        <img
          src="https://flagcdn.com/h20/za.png"
          alt="Turkey Flag"
          style={{ marginRight: "10px" }}
        />
        South Africa
      </div>
    ),
  },
  {
    value: "gb",
    label: (
      <div className='dropdownShow'>
        <img
          src="https://flagcdn.com/h20/gb.png"
          alt="UK Flag"
          style={{ marginRight: "10px" }}
        />
        UK
      </div>
    ),
  },
];

const FlagDropdown = () => {

  const [selectedOption, setSelectedOption] = useState(countryOptions[2]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='flagDropDown'>
      <Dropdown
        options={countryOptions}
        onChange={handleSelect}
        value={selectedOption}
      />
    </div>
  );
};

export default FlagDropdown;