import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formStage, formUser } from '../../store/rootSlice';
import { validate } from '../errorsChecker';

const GoodFormUserInfo = ({ submitButton, previousButton }) => {
   //redux
   // hooks
   const dispatch = useDispatch();
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [errors, setErrors] = useState({});

   const currentStage = useSelector((state) => state.FormStage); // for previous button

   // formData constants
   const formstageName = useSelector(
      (state) => state.GoodFormUserInfo.firstName
   );
   const formstageSurname = useSelector(
      (state) => state.GoodFormUserInfo.lastName
   );
   const value = useSelector((state) => state.GoodFormUserInfo.value);
   const shelterID = useSelector((state) => state.GoodFormUserInfo.shelterID);
   const formstageEmail = useSelector((state) => state.GoodFormUserInfo.email);
   const formstageTelNumber = useSelector(
      (state) => state.GoodFormUserInfo.phone
   );
   const [formData, setFormData] = useState({
      firstName: formstageName || '',
      lastName: formstageSurname || '',
      email: formstageEmail || '',
      phone: formstageTelNumber || '',
      value: value,
      shelterID: shelterID,
   });

   // form onChange,
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   // submit form
   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(formData));
      setIsSubmitted(true);
   };

   useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitted) {
         dispatch(formStage(3));
         // update formStage
         dispatch(
            formUser({
               firstName: formData.firstName,
               lastName: formData.lastName,
               email: formData.email,
               phone: formData.phone,
               value: formData.value,
               shelterID: formData.shelterID,
            })
         );
      }
   }, [formData, isSubmitted, dispatch, errors]);
   // template

   return (
      <section className="form-container animate__animated animate__zoomIn">
         <h2>
            Potrebujeme od Vás <br /> zopár informácií
         </h2>
         <small>O vas</small>
         <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <p className="error">{errors.firstName}</p>
            <label className="form-inputs">
               Meno
               <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Zadajte Vaše meno"
               />
            </label>
            <p className="error">{errors.lastName}</p>
            <label className="form-inputs">
               Priezvisko
               <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Zadajte Vaše priezvisko"
               />
            </label>
            <p className="error">{errors.email}</p>
            <label className="form-inputs">
               E-mailová adresa
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Zadajte Váš e-mail"
               />
            </label>
            <p className="error">{errors.phone}</p>
            <label className="form-inputs icon">
               Telefónne číslo
               <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+421"
               />
            </label>

            <div className="form-btn">
               {previousButton && (
                  <input
                     className="btn form-btn--back"
                     type="submit"
                     onClick={() => dispatch(formStage(currentStage - 1))}
                     value="Späť"
                  />
               )}
               <input
                  className="btn form-btn--next form-btn--next"
                  type="submit"
                  value={submitButton}
               />
            </div>
         </form>
      </section>
   );
};

export default GoodFormUserInfo;
