import React from 'react';

// import logo
import logo from '../assets/IMG/logo-new.png';

const GoodFooter = () => {
   return (
      <footer className="container footer-container">
         <div className="footer-container--item">
            <img src={logo} alt="logo good boy" />
         </div>
         <div className="footer-container--item">
            <h3>Nadácia Good Boy</h3>
            <ul>
               <li>
                  <a href="/">O projekte</a>
               </li>
               <li>
                  <a href="/">Ako na to</a>
               </li>
               <li>
                  <a href="/">Kontakt</a>
               </li>
            </ul>
         </div>
         <div className="footer-container--item">
            <h3>Nadácia Good Boy</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
               in interdum ipsum, sit amet.
            </p>
         </div>
         <div className="footer-container--item">
            <h3>Nadácia Good Boy</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
               in interdum ipsum, sit amet.
            </p>
         </div>
      </footer>
   );
};

export default GoodFooter;
