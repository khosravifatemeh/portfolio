import React from 'react';
import photo from './../../assets/images/jpg/me.jpg'

const about = () => {
    return (
        <div className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="about-image">
                        <img src={photo} className="w-100" />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="d-flex flex-column text-right h-100 justify-content-center mt-3">
                        {/* <p className="about__header"></p> */}
                        <p className="about__description text-justify">
 من سال 1393 از دانشگاه کاشان فارغ التحصیل شدم. در دانشگاه های مختلفی از جمله علمی کاربردی، آزاد و دولتی تدریس دروس برنامه نویسی و آزمایشگاه های مرتبط با آنها را بر عهده داشته ام. با شرکت های مختلفی در تهرآن و اصفهان در زمینه وب و موبایل همکاری دارم. بیشتر کارهایی که انجام داده ام وب بوده و همچنین تجربیات خیلی خوبی در زمینه افزایش سرعت سایت و سئو دارم.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default about;