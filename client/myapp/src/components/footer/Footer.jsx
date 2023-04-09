import React from 'react'
import './Footer.scss'
import Payment from '../img/payment.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            corrupti doloribus asperiores laboriosam minima earum similique iste
            repudiandae aliquid iusto incidunt, velit numquam laborum eaque
            quis, minus, tempora ipsa facere?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            corrupti doloribus asperiores laboriosam minima earum similique iste
            repudiandae aliquid iusto incidunt, velit numquam laborum eaque
            quis, minus, tempora ipsa facere?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Thestore</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer