import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className='featured'>
        <div className="container">
          <div className="left">
            <h1>Find the perfect <i>freelance</i> services for your business</h1>
            <div className="search">
              <form onSubmit={handleSubmit}>
              <div className='searchInput'>
                <img src="./img/search.png" alt="" />
                <input 
                type="text" 
                placeholder='Try "building mobile app"' 
                onChange={(e) => setInput(e.target.value)} 
                
                />
              </div>
              <button type="submit" style={{display:"none"}}>Search</button>
              </form>
            </div>

            <div className="popular">
              <span>Popular:</span>
              <Link to="/gigs?cat=Mobile App Builder">Mobile App Builder</Link>
              <Link to="/gigs?cat=Visual Studio">Visual Studio</Link>
              <Link to="/gigs?cat=English Language Tutor">English Language Tutor</Link>
              <Link to="/gigs?cat=Translator">Translator</Link>
            </div>
          </div>
          <div className="right">
            <img src="./img/woman.png" alt="" />
          </div>
        </div>
    </div>
  );
}

export default Featured;
