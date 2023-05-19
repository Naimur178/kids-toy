import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Fascility from './Fascility';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Fascility></Fascility>
            <Categories> </Categories>
            <Review></Review>
            
            
        </div>
    );
};

export default Home;