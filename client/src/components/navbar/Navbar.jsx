import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { BsList } from "react-icons/bs";
import './Navbar.scss'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import { FaSearch } from "react-icons/fa";
import FlagDropdown from '../flags/FlagDropdown'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Text from '../../home.json'

const countryOptions = [
  { value: 'USA', label: '$ USA', currency: 'USD', symbol: '$' },
  { value: 'CAN', label: '$ CAN', currency: 'CAD', symbol: '$' },
  { value: 'EUR', label: '€ EUR', currency: 'EUR', symbol: '€' },
  { value: 'GBR', label: '£ GBP', currency: 'GBP', symbol: '£' },
  { value: 'JPN', label: '¥ JPN', currency: 'JPY', symbol: '¥' }
];

function Navbar() {
  // const [active, setActive] = useState(false);
  const [gigOpen, setOpen] = useState(false);

  // const { pathname } = useLocation();

  // const isActive = () => {
  //   window.scrollY > 0 ? setActive(true) : setActive(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", isActive);
  //   return () => {
  //     window.removeEventListener("scroll", isActive);
  //   };
  // }, []);

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

  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleSelect = (option) => {
  //   setSelectedOption(option);
  // };

  const [input, setInput] = useState("");
  const formNavigate = useNavigate();

  const handleSubmit = () => {
    formNavigate(`/gigs?search=${input}`);
  };

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsMobileNavOpen(true);
  }

  const handleOverlayClick = () => {
    setIsMobileNavOpen(false);
  }

  const [isTopNavTransparent, setIsTopNavTransparent] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTopNavTransparent(false);
      } else {
        setIsTopNavTransparent(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let location = useLocation();

  useEffect(() => {
    location.pathname === '/' ? setIsHomePage(true) : setIsHomePage(false);
  }, [location]);

  return (
    <header>
      {/* Top navbar */}
      <nav className={`p-0 fixed-top ${isHomePage && isTopNavTransparent ? "bg-transparent" : "bg-white"}`} id="top-nav" >
        <div className="top-nav row mx-auto my-auto pt-3 pb-3 w-100 container-fluid text-white">
          <div className="toggle-btn col-auto text-white text-start p-0 d-md-none" onClick={handleNavToggle} style={{ cursor: 'pointer' }} id="nav-toggler">
            <BsList className="fs-2 text-start ms-0 me-auto" color={`${isHomePage && isTopNavTransparent ? "white" : "black"}`} />
          </div>
          <a href="#" className="nav-logo col-sm col-8 mx-auto mx-sm-0 text-sm-start text-center my-auto">
            <div style={{ width: 'fit-content' }} className="mx-auto mx-sm-0">
              <Link to="/">
                <img className="nav-logo-white d-block" src={`${isHomePage && isTopNavTransparent ? "./svg/logo_white.svg" : "./svg/logo.svg"}`} alt="fiverr" />
                <img className="nav-logo-black d-none" src="./svg/logo.svg" alt="fiverr" />
              </Link>
            </div>
          </a>
          <ul className={`d-none d-md-flex align-items-center col-auto row fw-semibold my-auto  ${isHomePage && isTopNavTransparent ? "text-white" : "text-dark"}`}>
            <li className="col-auto">{Text.Navbar.nav.nav1}</li>
            <li className="col-auto">{Text.Navbar.nav.nav2}</li>
            <li className="col-auto d-none d-lg-block">
              <svg width={18} height={18} fill="white" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z" strokeWidth="0.2" />
              </svg>
              English
            </li>
            <li className="col-auto d-none d-lg-block">$ USD</li>
            {currentUser?.isSeller || !currentUser && <li className="col-auto">{Text.Navbar.nav.nav3}</li>}
          
          {currentUser ? (
            <li className="user" onClick={() => setOpen(!gigOpen)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {gigOpen && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/add">
                        {Text.Navbar.gig.addNewGig}
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    {Text.Navbar.link.link1}
                  </Link>
                  <Link className="link" to="/messages">
                    {Text.Navbar.link.link2}
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    {Text.Navbar.link.link3}
                  </Link>
                </div>
              )}
            </li>
          ) : (
            <>
              <Link to="/login" className={`d-none d-sm-block col-auto my-auto text-end fs-6 fw-semibold ${isHomePage && isTopNavTransparent ? "text-white" : "text-dark"}`}>{Text.Navbar.button.button1}</Link>
              <Link to="/register" className={`join-btn col-auto my-auto text-end fs-6 px-3 py-1 fw-semibold border border-1  rounded-2 ${isHomePage && isTopNavTransparent ? "text-white border-white" : "text-dark border-dark"}`}>{Text.Navbar.button.button2}</Link>
            </>
          )}
          </ul>
        </div>
      </nav>
      {/* Options nav */}
      <nav className={`nav-options border-top border-bottom border-1 p-0 fixed-top d-none ${isHomePage && isTopNavTransparent ? "" : "d-sm-flex"}`} id="nav-options">
        <div className="nav-options-content bg-white row d-flex mx-auto align-items-center align-middle my-auto w-100 container-fluid">
          <ul className="d-flex justify-content-between align-items-center my-auto flex-nowrap">
            <li><a href="#">{Text.Navbar.listItem.listItem1}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem2}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem3}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem4}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem5}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem6}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem7}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem8}</a></li>
            <li><a href="#">{Text.Navbar.listItem.listItem9}</a></li>
          </ul>
        </div>
      </nav>
      {/* mobile sidebar */}

      <nav className="mobile-nav text-nowrap" id="mobile-nav">
        <div className={isMobileNavOpen ? "fixed-top text-muted bg-white vh-100 px-3 pt-3 open" : "fixed-top text-muted bg-white vh-100 px-3 pt-3"} id="sidebar">
          <ul className="fw-normal d-flex flex-column mx-auto">
            <li className="join-btn col-auto mt-2 mb-3  fs-6 px-3 w-50 py-2 fw-semibold text-white border rounded-2" style={{ backgroundColor: 'var(--primary--color-p)' }}>
              {Text.Navbar.sidebar.sidebar7}
            </li>
            <li className="col-auto my-2 fs-6">{Text.Navbar.sidebar.sidebar1}</li>
            <li className="col-auto my-2 fs-6">{Text.Navbar.sidebar.sidebar2}</li>
            <li className="col-auto my-2 fs-6">{Text.Navbar.sidebar.sidebar3}</li>
            <li className="col-auto my-2 fs-6" style={{ color: 'var(--primary--color)' }}>{Text.Navbar.sidebar.sidebar4}</li>
          </ul>
          <p className="fw-semibold text-black mt-4">{Text.Navbar.sidebar.sidebar5}</p>
          <hr />
          <ul className="fw-normal d-flex flex-column mx-auto">
            <li className="col-auto my-2 fs-6">{Text.Navbar.sidebar.sidebar6}</li>
            <li className="col-auto my-2 fs-6">
              <svg width={18} height={18} fill="grey" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z" strokeWidth="0.2" />
              </svg>
              English
            </li>
            <li className="col-auto my-2 fs-6">$ USD</li>
          </ul>
        </div>
        {isMobileNavOpen && <div className="mobile-nav-overlay" onClick={handleOverlayClick}></div>}
      </nav>

      {/* Hero section */}
      <section className={`hero justify-content-start ps-md-5 px-2 ${isHomePage ? "d-flex" : "d-none"}`}>
        <div className="content text-white d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
          <h1>{Text.Navbar.hero.h1first} <span className="fst-italic fw-normal">{Text.Navbar.hero.span}</span> {Text.Navbar.hero.h1second}</h1>
          <div className="input-group fw-semibold w-100 mx-auto d-flex flex-nowrap justify-content-center justify-content-md-start" style={{ position: 'relative', zIndex: 1 }}>
            <form onSubmit={handleSubmit} className="input-group fw-semibold w-100 mx-auto d-flex flex-nowrap justify-content-center justify-content-md-start" style={{ position: 'relative', zIndex: 1 }}>
              <input className="border-0 px-3 w-75" onChange={(e) => setInput(e.target.value)} style={{ borderRadius: '5px 0 0 5px' }} placeholder={Text.Navbar.hero.placeholder} type="text" name="search" id="search" />
              <input className="border-0 px-4 text-white" style={{ backgroundColor: '#1dbf73', borderRadius: '0 5px 5px 0' }} type="submit" defaultValue="Search" />
            </form>
          </div>
          <div className="tag-group d-flex mt-4 align-items-center justify-content-center ">
            <div className="fw-semibold align-middle">{Text.Navbar.hero.populer.title}</div>
            <div className="d-flex flex-wrap text-center align-items-center fw-semibold">
              <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">{Text.Navbar.hero.populer.populer1}</span>
              <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">{Text.Navbar.hero.populer.populer2}</span>
              <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">{Text.Navbar.hero.populer.populer3}</span>
              <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">{Text.Navbar.hero.populer.populer4}</span>
              <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">{Text.Navbar.hero.populer.populer5}</span>
            </div>
          </div>
        </div>
      </section>
      <TrustedBy />
    </header>
    // <div className={active || pathname !=="/" ? 'navbar active' : 'navbar'}>
    //     <div className="container">
    //         <div className="logo">
    //           <Link className='link' to="/">
    //             <span className='text'>fiverr</span>
    //           </Link>
    //           <span className='dot'>.</span>
    //         </div>
    //         {/* <div className="search">
    //           <div className='searchInput'>
    //             <form action="">
    //                 <input type="text" placeholder='Search' />
    //                 <button><FaSearch /></button>
    //               </form>
    //           </div>
    //         </div> */}
    //         <div className="links">
    //             <span>Fiverr Business</span>
    //             <span>Explore</span>
    //             <FlagDropdown />
    //             <Dropdown
    //               options={countryOptions}
    //               onChange={handleSelect}
    //               value={selectedOption}
    //               placeholder="$ USD"
    //             />
    //             {currentUser?.isSeller || !currentUser && <span>Become a Seller</span>}
    //             {currentUser ? (
    //               <div className="user" onClick={() => setOpen(!open)}>
    //                 <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
    //                 <span>{currentUser?.username}</span>
    //                 {open && (
    //                   <div className="options">
    //                     {currentUser.isSeller && (
    //                       <>
    //                         <Link className="link" to="/add">
    //                           Add New Gig
    //                         </Link>
    //                       </>
    //                     )}
    //                     <Link className="link" to="/orders">
    //                       Orders
    //                     </Link>
    //                     <Link className="link" to="/messages">
    //                       Messages
    //                     </Link>
    //                     <Link className="link" onClick={handleLogout}>
    //                       Logout
    //                     </Link>
    //                   </div>
    //                 )}
    //               </div>
    //             ) : (
    //                   <>
    //                     <Link to="/login" className="link">Sign in</Link>
    //                     <Link className="link" to="/register">
    //                       <button>Join</button>
    //                     </Link>
    //                   </>
    //                 )}
    //         </div>
    //     </div>
    //     {(active || pathname !=='/')  && (
    //         <>
    //           <hr />
    //           <div className="menu">
    //               <Link className='link menuLink' to="/gigs?cat=Graphics And Design">Design & Graphics</Link>
    //               <Link className='link' to="/gigs?cat=Digital Marketing">Digital Marketing</Link>
    //               <Link className='link' to="/gigs?cat=Writing And Translation">Writing & Translation</Link>
    //               <Link className='link' to="gigs?cat=AI Services">AI Services</Link>
    //               <Link className='link' to="/gigs?cat=Video And Animation">Video & Animation</Link>
    //               <Link className='link' to="/gigs?cat=Music And Audio">Music & Audio</Link>
    //               <Link className='link' to="/gigs?cat=Programming And Tech">Programming & Tech</Link>
    //               <Link className='link' to="/gigs?cat=Business">Business</Link>
    //               <Link className='link' to="/gigs?cat=Lifestyle">Lifestyle</Link>
    //           </div> 
    //         </>
    //     )}
    // </div>
  )
}

export default Navbar