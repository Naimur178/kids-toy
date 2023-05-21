import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    const image = 'https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=1060&t=st=1684662356~exp=1684662956~hmac=dd97e972f2dc9b8c7382ea086dc5e3b83b4c41d3cf860bed0e62ac63ed8af0da'
    return (
        
<div>
    <Link to='/' className='btn btn-outline w-full'>Back to home </Link>
    <img src={image} alt=""  className='mx-auto'/>
 
</div>
    )
};

export default Error;