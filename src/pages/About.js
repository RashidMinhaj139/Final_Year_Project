import React from 'react';
// import './YourComponent.css'; // Make sure to import your CSS file

const About = () => {
  return (
    <div>
      <section id="header">
        <a href="#">
          <img
            src="https://th.bing.com/th/id/OIP.qQGvtIooIExayC5PAkd-LgHaCH?w=316&h=99&c=7&r=0&o=5&pid=1.7"
            alt=""
            className="logo"
          />
        </a>
        <div>
          <ul id="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a className="active" href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li id="lg-bag"><a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a></li>
            <a href="#" id="close"><i className="fa-regular fa-circle-xmark"></i></a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>

      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </section>

      {/* Add the rest of your HTML code here, translating it into React components */}
      
    </div>
  );
};

export default About;
