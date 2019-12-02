import React from 'react';
import photo from './../../assets/images/jpg/me-2.jpg'

const about = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    {/* <div className="col-12 col-md-4">
                    <div className="about-image">
                        <img src={photo} className="w-100" />
                    </div>
                </div> */}
                         <div className="col-12 col-md-10 b">
                        <div className="d-flex flex-column text-right h-100 justify-content-center mt-3 a">
                            {/* <p className="about__header"></p> */}
       
                            <p className="about__description text-justify">
                            در سال 1393  از دانشگاه کاشان در رشته مهندسی کامپیوتر گرایش نرم افزار در مقطع کارشناسی ارشد فارغ التحصیل شدم.  در دانشگاه های مختلفی از جمله دولتی، آزاد، علمی کاربردی تدریس دروس برنامه نویسی و آزمایشگاه های مرتبط با آنها را بر عهده داشتم. با شرکت های مختلفی در تهران و اصفهان در زمینه وب و موبایل همکاری دارم. بیشتر کارهایی که انجام داده ام وب بوده و همچنین تجربیات خیلی خوبی در زمینه افزایش سرعت سایت و سئو دارم.

        
        
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default about;