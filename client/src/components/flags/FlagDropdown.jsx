import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './FlagDropdown.scss';

const countryOptions = [
  {
    value: "us",
    label: (
      <div className='dropdownShow'>USA</div>
    ),
  },
  {
    value: "za",
    label: (
      <div className='dropdownShow'>South Africa</div>
    ),
  },
  {
    value: "gb",
    label: (
      <div className='dropdownShow'>UK</div>
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