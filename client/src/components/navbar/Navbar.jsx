import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

import './Navbar.scss'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FaSearch } from "react-icons/fa";
import FlagDropdown from '../flags/FlagDropdown'

const countryOptions = [
    { value: 'USA', label: '$ USA', currency: 'USD', symbol: '$' },
    { value: 'CAN', label: '$ CAN', currency: 'CAD', symbol: '$' },
    { value: 'EUR', label: '€ EUR', currency: 'EUR', symbol: '€' },
    { value: 'GBR', label: '£ GBP', currency: 'GBP', symbol: '£' },
    { value: 'JPN', label: '¥ JPN', currency: 'JPY', symbol: '¥' }
  ];

  function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
  
    const { pathname } = useLocation();
  
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", isActive);
      return () => {
        window.removeEventListener("scroll", isActive);
      };
    }, []);
  
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await newRequest.post("/auth/logout");
        localStorage.setItem("currentUser", null);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
      setSelectedOption(option);
    };
  


    return (
        <div className={active || pathname !=="/" ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className="row">
                    <div className="logo">
                    <Link className='link' to="/">
                    <span className='text'>WinGlo</span>
                    </Link>
                    </div>
                    <div className="search">
                    <div className='searchInput'>
                        <FaSearch />
                        <input type="text" placeholder='Search' />
                    </div>
                    </div>
                </div>
                <div className="links">
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Find Skill</span>
                    <div>
                        <Dropdown
                          options={countryOptions}
                          onChange={handleSelect}
                          value={selectedOption}
                          placeholder="$ USD"
                        />
                    </div>
                    <FlagDropdown />
                    {currentUser?.isSeller || currentUser && <span>Become a Seller</span>}
                    
                    {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
                </div>
            </div>
            {(active || pathname !=='/')  && (
                <>
                    <div className="menu">
                        <Link className='link menuLink' to="/gigs?cat=Graphics And Design">Design & Graphics</Link>
                        <Link className='link' to="/gigs?cat=Digital Marketing">Digital Marketing</Link>
                        <Link className='link' to="/gigs?cat=Writing And Translation">Writing & Translation</Link>
                        <Link className='link' to="gigs?cat=AI Services">AI Services</Link>
                        <Link className='link' to="/gigs?cat=Video And Animation">Video & Animation</Link>
                        <Link className='link' to="/gigs?cat=Music And Audio">Music & Audio</Link>
                        <Link className='link' to="/gigs?cat=Programming And Tech">Programming & Tech</Link>
                        <Link className='link' to="/gigs?cat=Business">Business</Link>
                        <Link className='link' to="/gigs?cat=Lifestyle">Lifestyle</Link>
                    </div> 
                </>
            )}
        </div>
    )
}

export default Navbar