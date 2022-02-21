import React from 'react';
import { useSelector } from 'react-redux';

import ContributionType from '../ContributionComponent/type';
import ContributionValue from '../ContributionComponent/value';

const GoodFormContribution = ({ pageTitle }) => {
   const type = useSelector((state) => state.GoodFormContribution);
   return (
      <section className="form-container animate__animated animate__zoomIn">
         <h2>{pageTitle}</h2>
         <ContributionType type={type} />
         <ContributionValue type={type} />
      </section>
   );
};

export default GoodFormContribution;
