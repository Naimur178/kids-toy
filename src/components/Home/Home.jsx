import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Fascility from './Fascility';
import Review from './Review';
import Galary from './galary/Galary';
import Kids from './Kids/Kids';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Galary></Galary>
            <Kids></Kids>
            <Fascility></Fascility>
            <Categories> </Categories>
            <Review></Review>
            
            
        </div>
    );
};

export default Home;