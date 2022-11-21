import React, { Component } from 'react';

import Front from './Front';

import Services from './Services';
import About from './About';
import Furnitures from './Furnitures';
import Who from './Who';
import Pro from './Ourpro'; 
import Contact from './Contact'; 

function Home(){
    return(
        <div>
            <Front />
            <Services />
            <About />
            <Furnitures />
            <Who />
            <Pro />
            <Contact />
        </div>
    );
}

export default Home;