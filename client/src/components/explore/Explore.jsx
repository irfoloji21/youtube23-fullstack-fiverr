import React from 'react'
import { Link } from 'react-router-dom'
import './Explore.scss'
import Text from '../../home.json'

export const Explore = () => {
    return (
        <div className="explore py-5 px-3 px-sm-4 px-md-5">
            <div className="explore-container content-wrapper my-4 mx-auto d-flex flex-wrap justify-content-start flex-column">
                <h1 className='mt-5 mb-4 pb-3'>{Text.Explore.header}</h1>
                <ul className="items d-flex flex-wrap m-0 p-0">
                    <li className="item ">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item1}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                                alt=""
                            />

                            <span>{Text.Explore.items.item2}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item3}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item4}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item5}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item6}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item7}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item8}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item9}</span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link>
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                                alt=""
                            />
                            <span>{Text.Explore.items.item10}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
