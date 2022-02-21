import React from 'react';
import { useSelector } from 'react-redux';

// components
import GoodFormProgressBar from '../components/ProgressBar/ProgressBar';
import GoodFormUserInfo from '../components/GoodFormComponents/userInfo';
import GoodFormSumary from '../components/GoodFormComponents/sumary';
import GoodFormContribution from '../components/GoodFormComponents/contribution';
import GoodFormSuccess from '../components/GoodFormComponents/success';

const GoodForm = () => {
   const pageStage = useSelector((state) => state.FormStage);

   return (
      <main>
         <div className="container main-container ">
            <GoodFormProgressBar />

            {pageStage === 1 && (
               <GoodFormContribution
                  pageTitle={'Vyberte si možnosť, ako chcete pomôcť'}
                  previousButton={false}
               />
            )}

            {pageStage === 2 && (
               <GoodFormUserInfo
                  submitButton={'Pokračovať'}
                  previousButton={true}
               />
            )}

            {pageStage === 3 && (
               <GoodFormSumary
                  pageTitle={'Skontrolujte si zadané údaje'}
                  submitButton={'Odoslať formulár'}
                  previousButton={true}
               />
            )}
            {pageStage === 4 && <GoodFormSuccess />}
         </div>
      </main>
   );
};

export default GoodForm;
