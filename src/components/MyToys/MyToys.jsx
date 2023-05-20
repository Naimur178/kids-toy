import React from 'react';
import { Link } from 'react-router-dom';

const MyToys = () => {
    return (
        <div>
            <h2>Here is my toys</h2>
            <Link to='/addToy' className='btn btn-outline'></Link>
                    </div>
    );
};

export default MyToys;