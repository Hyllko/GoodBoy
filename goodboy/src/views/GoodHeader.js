import React from 'react';
// import icons images
import fbIcon from '../assets/IMG/fb.png';
import instaIcon from '../assets/IMG/instagram.png';

const GoodHeader = () => {
   return (
      <header>
         <div className="container nav-container">
            <h1>Nadácia Good Boy</h1>
            <div className="nav-container__icon">
               <a href="https://www.facebook.com/">
                  <img src={fbIcon} alt="facebook icon" />
               </a>
               <a href="https://www.instagram.com/?hl=en">
                  <img src={instaIcon} alt="instagram icon" />
               </a>
            </div>
         </div>
      </header>
   );
};

export default GoodHeader;
