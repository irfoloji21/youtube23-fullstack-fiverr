import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Text from '../../home.json'

function Featured() {
  // const [input, setInput] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   navigate(`/gigs?search=${input}`);
  // };
  return (
    <section
  className="our-qlts py-5 px-3 px-sm-4 px-md-5"
  style={{ backgroundColor: "#f1fdf7" }}
>
  <div className="my-5 row align-items-center">
    <div className="qlts-content col-md-5 col-12">
      <h1 style={{ fontSize: "2.1rem" }} className="mb-4">
        {Text.Featured.header}
      </h1>
      <ul className="d-flex flex-column">
        <li>
          <div>
            <img src="./svg/tick.svg" alt="success" />
            <span style={{ fontSize: "1.2rem" }} className="fw-semibold ms-1">
              {Text.Featured.span.span1}
            </span>
          </div>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            {Text.Featured.p.p1}
          </p>
        </li>
        <li>
          <div>
            <img src="./svg/tick.svg" alt="success" />
            <span style={{ fontSize: "1.2rem" }} className="fw-semibold ms-1">
              {Text.Featured.span.span2}
            </span>
          </div>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            {Text.Featured.p.p2}
          </p>
        </li>
        <li>
          <div>
            <img src="./svg/tick.svg" alt="success" />
            <span style={{ fontSize: "1.2rem" }} className="fw-semibold ms-1">
              {Text.Featured.span.span3}
            </span>
          </div>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            {Text.Featured.p.p3}
          </p>
        </li>
        <li>
          <div>
            <img src="./svg/tick.svg" alt="success" />
            <span style={{ fontSize: "1.2rem" }} className="fw-semibold ms-1">
              {Text.Featured.span.span4}
            </span>
          </div>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            {Text.Featured.p.p4}
          </p>
        </li>
      </ul>
    </div>
    <div className="col-md-1 col-12" />
    <div className="qlts-video-wrapper col-md-6 col-12">
      <picture className="w-100 qlts-video-thumb">
        <img
          className="w-100"
          style={{ cursor: "pointer" }}
          src="./img/qualities.png"
          alt="Qualities"
        />
      </picture>
    </div>
  </div>
</section>
    // <div className='featured'>
    //     <div className="container">
    //       <div className="left">
    //         <h1>Find the perfect <i>freelance</i> services for your business</h1>
    //         <div className="search">
    //           <form onSubmit={handleSubmit}>
    //           <div className='searchInput'>
    //             <img src="./img/search.png" alt="" />
    //             <input 
    //             type="text" 
    //             placeholder='Try "building mobile app"' 
    //             onChange={(e) => setInput(e.target.value)} 
                
    //             />
    //           </div>
    //           <button type="submit" style={{display:"none"}}>Search</button>
    //           </form>
    //         </div>

    //         <div className="popular">
    //           <span>Popular:</span>
    //           <Link to="/gigs?cat=Mobile App Builder">Mobile App Builder</Link>
    //           <Link to="/gigs?cat=Visual Studio">Visual Studio</Link>
    //           <Link to="/gigs?cat=English Language Tutor">English Language Tutor</Link>
    //           <Link to="/gigs?cat=Translator">Translator</Link>
    //         </div>
    //       </div>
    //       <div className="right">
    //         <img src="./img/woman.png" alt="" />
    //       </div>
    //     </div>
    // </div>
  );
}

export default Featured;
