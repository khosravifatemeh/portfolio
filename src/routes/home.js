import React from 'react';
import Header from './../components/header/header'
import About from './../components/about/about'
import Project from './../components/project/project'
import Contact from './../components/contact/contact'
const home = () => {
    return (
        <div>
            <Header />
            <About />
            <Project />
            <Contact />
        </div>
    );
};

export default home;