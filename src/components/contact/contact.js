import React from 'react';


const contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container py-3">
                <ul className="list-unstyled d-flex flex-column align-items-start mb-0">
                    <li className="d-flex justify-content-start align-items-center mb-2">
                        <i className="email d-inline-block ml-2"></i>

                        <p className="mb-0">uni.khosravi@gmail.com</p>
                    </li>
                    <li className="d-flex justify-content-start align-items-center">
                        <i className="phone d-inline-block ml-2"></i>
                        <p className="mb-0">09376809612</p>
                    </li>
                    <li className="d-flex justify-content-start align-items-center">
                        <a href="http://linkedin.com/in/fatemeh-khosravi-farsani-86a62a65" target='blank'>

                            <i className="linkedin d-inline-block ml-2"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default contact;