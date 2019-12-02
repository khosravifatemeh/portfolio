import React from 'react';
import logo from './../../assets/images/png/logo.png'
import $ from 'jquery'
import { scrollAnimate } from './../../helpers/main'

const header = () => {

    const handleToggleMenu=()=>{
        $(".main-nav__content").toggle();

    }
    return (
        <div id="main">
            <nav className="main-nav">
                <div className="row">
                    <div className="container">
                        <div className="d-flex justify-content-between py-3 px-2">
                            <div className="main-nav__content">
                                <ul className="main-nav__menu d-flex flex-column flex-md-row list-unstyled align-items-center mb-0">
                                    <li>
                                        <a className="px-2 text-decoration-none nav__link" href="#" onClick={() => scrollAnimate("#main")}>صفحه اصلی</a>
                                    </li>
                                    <li>
                                        <a className="px-2 text-decoration-none nav__link" href="#" onClick={() => scrollAnimate("#about")}>درباره من</a>
                                    </li>
                                    <li>
                                        <a className="px-2 text-decoration-none nav__link" href="#" onClick={() => scrollAnimate("#projects")}>پروژه ها</a>
                                    </li>
                                    <li>
                                        <a className="px-2 text-decoration-none nav__link" href="#" onClick={() => scrollAnimate("#contact")}>اطلاعات تماس</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-block d-md-none mt-1" onClick={(e)=>handleToggleMenu()}>
                                <span className="nav-icon mb-1"></span>
                                <span className="nav-icon mb-1"></span>
                                <span className="nav-icon"></span>

                                {/* <a href="#" onClick={(e)=>handleToggleMenu()} className="text-decoration-none menu-nav__icon" >hello</a> */}
                            </div>
                            <div className="logo">
                                <img src={logo} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <div className="container h-100">
                    <div className="header-content d-flex flex-column align-items-start justify-content-center h-100">
                        <h1>فاطمه خسروی</h1>
                        <p>برنامه نویس وب و موبایل</p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default header;