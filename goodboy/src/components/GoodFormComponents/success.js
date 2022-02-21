import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postData } from '../api';

const GoodFormSuccess = () => {
   const [message, setmessage] = useState('Príspevok bol úspešne zaznamenaný');
   const state = useSelector((state) => state.GoodFormUserInfo);

   /// postData to send
   const { firstName, lastName, email, phone, value, shelterID } = state;
   const stateOutput = `${JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone || undefined,
      value: value,
      shelterID: shelterID || undefined,
   })}`;

   useEffect(() => {
      postData(stateOutput, setmessage);
   }, [stateOutput]);

   return (
      <div className="form-container animate__animated animate__zoomIn">
         <h1>{message}</h1>
         <p className="emoji">
            {message.includes('úspešne') ? (
               <span>&#128525;</span>
            ) : (
               <span>&#128533;</span>
            )}
         </p>
      </div>
   );
};

export default GoodFormSuccess;
