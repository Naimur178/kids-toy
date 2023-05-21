import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src="../../../public/logo.png" alt=""  className='w-24 rounded-2xl'/>
    <p className='text-xl font-semibold'>Kids Toy Zone<br/></p>
    <p>Grow your Children with Pleasure</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Toy Store</a> 
    <a className="link link-hover">Playing child</a> 
   
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
   
  </div> 
  <div>
    <span className="footer-title">Address and Connection</span> 
    <a className="link link-hover">Mobile: 01816******</a> 
    <a className="link link-hover">Email: naim.ruet.cse17@gmail.com</a> 
    <a className="link link-hover">Address: kazla, Rajshahi</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;