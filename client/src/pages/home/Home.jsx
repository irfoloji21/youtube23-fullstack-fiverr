import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Assemble from "../../components/assemble/Assemble";

function Home() {
  return (
    <div className='home'>
    <Featured />
    <div className="explore">
      <div className="container">
        <h1>Find a freelancer</h1>
        <div className="items">
          <div className="item">
            <a href="/gigs?cat=Graphics And Design">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt=""
            />
            </a>
            <span>Design & Graphics</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=IT And Development">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt=""
            />
            </a>
            <span>IT & Development</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=Digital Marketing">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt=""
            />
            </a>
            <span>Marketing</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=Video And Animation">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt=""
            />
            </a>
            <span>Video & Creative</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=Writing And Translation">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt=""
            />
            </a>
            <span>Writing & Translation</span>
          </div>
        </div>
        <div className="items">
        <div className="item">
        <a href="/gigs?cat=Music And Audio">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt=""
            />
            </a>
            <span>Music & Audio</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=Business">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt=""
            />
            </a>
            <span>Business & Support</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=Lifestyle">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt=""
            />  
            </a>
            <span>Lifestyle</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=Graphics And Design">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt=""
            />
            </a>
            <span>investment</span>
          </div>
          <div className="item">
          <a href="/gigs?cat=Graphics And Design">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
              alt=""
            />
            </a>
            <span>Counseling</span>
          </div>
        </div>
      </div>
    </div>
    <div className='forBackground'>
    <div className="second">
      <div className="container">
      <h1>Features</h1>
      <div className="items">
          <div className="item">
            <img src="./img/world.jpg" alt="" />
            <h1>Diverse freelancer skiilset</h1>
            <span>Wide range al freelancers on the WinGlo platform</span>
          </div>
          <div className="item">
            <img src="./img/padlock.png" alt="" />
            <h1>Secured</h1>
            <span>We work on a velled system</span>
          </div>
          <div className="item">
            <img src="./img/group.jpeg" alt="" />
            <h1>Share your skills</h1>
            <span>Don't be shy, share your tolents to the world!</span>
          </div>
        </div>
      </div>
    </div>
    <Assemble />
    </div>
  </div>
  );
}

export default Home;
