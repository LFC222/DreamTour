import React from 'react';
import './index.css';
import Carousel from './Carousel/Carousel';
import Slogan from './Slogan';


function Home (){
    return(
        <div>
            <Slogan/>
            <Carousel/>
        </div>
    );
}

export default Home;