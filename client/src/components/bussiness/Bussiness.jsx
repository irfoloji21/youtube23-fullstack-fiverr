import React from 'react'
import './Bussiness.scss'
import Text from '../../home.json'

const Bussiness = () => {
    return (
        <section
            className="fvr-busns py-5 px-3 px-sm-4 px-md-5 text-white"
        >
            <div className="my-5 row align-items-start">
                <div className="fvr-busns-content col-md-5 col-12">
                    <small>
                        <i>
                            <img src="./svg/fiverr-business.svg" alt="fiverr business" />
                        </i>
                        <span
                            className="bg-primary rounded-5 px-2 py-1"
                            style={{ fontSize: 10 }}
                        >
                            {Text.Bussiness.new}
                        </span>
                    </small>
                    <h1 style={{ fontSize: "2.1rem" }} className="my-4">
                        {Text.Bussiness.header}{" "}
                        <span className="fst-italic fw-normal">{Text.Bussiness.italic}</span>
                    </h1>
                    <p className="fs-5 ">{Text.Bussiness.desc}</p>
                    <ul className="d-flex flex-column">
                        <li className="d-flex my-1 align-items-start">
                            <img src="./svg/tick.svg" alt="success" />
                            <p style={{ fontSize: "1.1rem" }} className="ms-3">
                                {Text.Bussiness.item1}
                            </p>
                        </li>
                        <li className="d-flex my-1 align-items-start">
                            <img src="./svg/tick.svg" alt="success" />
                            <p style={{ fontSize: "1.1rem" }} className="ms-3">
                                {Text.Bussiness.item2}
                            </p>
                        </li>
                        <li className="d-flex my-1 align-items-start">
                            <img src="./svg/tick.svg" alt="success" />
                            <p style={{ fontSize: "1.1rem" }} className="ms-3">
                                {Text.Bussiness.item3}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 col-12" />
                <div className="fvr-busns-img-wrapper col-md-6 col-12">
                    <picture className="w-100 fvr-busns-img-thumb">
                        <img
                            className="w-100"
                            src="./img/business.png"
                            alt="Fiverr Business"
                        />
                    </picture>
                </div>
            </div>
        </section>

    )
}

export default Bussiness