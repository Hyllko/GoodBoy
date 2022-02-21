import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formStage } from '../../store/rootSlice';
import { validate } from '../errorsChecker';
import { checkType } from '../errorsChecker';
const GoodFormSumary = ({ pageTitle, submitButton, previousButton }) => {
   //redux
   const dispatch = useDispatch();
   const [isChecked, setIsChecked] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [errors, setErrors] = useState({});
   const currentStage = useSelector((state) => state.FormStage);
   const contributionType = useSelector((state) => state.GoodFormContribution);
   const shelterName = useSelector((state) => state.Shelter);

   // formInfo
   const state = useSelector((state) => state.GoodFormUserInfo);
   const { firstName, lastName, email, phone, value } = state;

   const handleChange = () => {
      setIsChecked(!isChecked);
   };

   let handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(isChecked));
      setIsSubmitted(true);
   };

   useEffect(() => {
      if (!errors.check && isSubmitted) {
         dispatch(formStage(4));
      }
   }, [isSubmitted, dispatch, isChecked, errors]);

   return (
      <div className="form-container animate__animated animate__zoomIn">
         <h2>{pageTitle}</h2>
         <div>
            <h5 className="summary-heading">Akou formou chcem pomôcť</h5>
            <p className="summary-text">{checkType(contributionType)}</p>
         </div>
         <div>
            <h5 className="summary-heading">Najviac mi záleží na útulku</h5>
            <p className="summary-text">{shelterName}</p>
         </div>
         <div>
            <h5 className="summary-heading">Suma ktorou chcem pomôcť</h5>
            <p className="summary-text">{value} €</p>
         </div>
         <div>
            <h5 className="summary-heading">Meno a priezvisko</h5>
            <p className="summary-text">
               {firstName} {lastName}
            </p>
         </div>
         <div>
            <h5 className="summary-heading">E-mailová adresa</h5>
            <p className="summary-text">{email}</p>
         </div>
         <div>
            <h5 className="summary-heading">Telefónne číslo</h5>
            <p className="summary-text">{phone}</p>
         </div>

         <div className="privacy">
            <p className="error">{errors.check}</p>
            <label className="summary-input">
               <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={isChecked}
               />
               Súhlasím so spracovaním mojich osobných údajov
            </label>
         </div>

         <form className="form-btn" onSubmit={handleSubmit}>
            {previousButton && (
               <button
                  className="btn form-btn--back"
                  onClick={() => dispatch(formStage(currentStage - 1))}
               >
                  Späť
               </button>
            )}
            <input
               type="submit"
               className="btn form-btn--next"
               value={submitButton}
            />
         </form>
      </div>
   );
};

export default GoodFormSumary;
