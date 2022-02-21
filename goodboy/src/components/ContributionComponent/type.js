import React from 'react';
import { useDispatch } from 'react-redux';
import { formPay } from '../../store/rootSlice';

import wallet from '../../assets/IMG/icon1.png';
import paw from '../../assets/IMG/icon2.png';

const ContributionType = ({ type }) => {
   const dispatch = useDispatch();

   return (
      <div className="option">
         <div
            id="1"
            onClick={() => dispatch(formPay((type = 'whole')))}
            className={
               type === 'whole' ? 'option-one option--active' : 'option-one'
            }
         >
            <img src={wallet} alt="wallet" />
            <p>Chcem finančne prispieť konkrétnemu útulku</p>
         </div>
         <div
            id="2"
            onClick={() => dispatch(formPay((type = 'single')))}
            className={
               type === 'single' ? 'option-two option--active' : 'option-two'
            }
         >
            <img src={paw} alt="paw" />
            <p>Chcem finančne prispieť celej nadácii</p>
         </div>
      </div>
   );
};

export default ContributionType;
