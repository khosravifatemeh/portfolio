import React from 'react';
import dunzhe from './../../assets/images/png/dunzhe.png'
import garaj from './../../assets/images/png/garaj.png'
import ucan from './../../assets/images/png/ucan.png'
import iranroute from './../../assets/images/png/iranroute.png'
import ucanPanel from './../../assets/images/png/panel-ucan.png' 
import dunzhePanel from './../../assets/images/png/panel-dunzhe.png' 

import zibashu from './../../assets/images/png/zibashu.png'

const project = () => {
    return (
        <div className="portfolio" id="projects">


            <div className="container">

                <div className="portfolio__content pt-4">
                    <ul class="nav nav-tabs border-0 justify-content-center ">
                        <li className=" portfolio__tab"><a data-toggle="tab" className="p-2 text-decoration-none active " href="#web">وب سایت</a></li>
                        <li className="portfolio__tab"><a data-toggle="tab" className="p-2 text-decoration-none" href="#mobile">موبایل</a></li>
                    </ul>

                    <div class="tab-content pt-4">
                        <div id="web" class="tab-pane fade in active show">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="http://dunzhe.net/" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={dunzhe} />
                                        </div>

                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="http://dunzhe.net/" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={garaj} />
                                        </div>

                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="https://www.ucan.win/" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={ucan} />
                                        </div>

                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="http://zibashu.ir/" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={zibashu} />
                                        </div>

                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="https://www.iranroute.com/" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={iranroute} />
                                        </div>

                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="http://panel.ucan.ir/Account?returnUrl=%2F" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={ucanPanel} />
                                        </div>

                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="http://panel.dunzhe.net/Account/SignIn?returnUrl=/" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={dunzhePanel} />
                                        </div>

                                    </a>
                                </div>
                            </div>

                        </div>
                        <div id="mobile" class="tab-pane fade">
                            <div className="row">
                                {/* <div className="col-sm-12 col-md-6 col-lg-4 text-right pb-4">
                                    <a href="http://dunzhe.net/" target="blank" className="portfolio__item text-decoration-none">
                                        <div className="parent-img">
                                            <img src={dunzhe} />
                                        </div>

                                    </a>
                                </div> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default project;