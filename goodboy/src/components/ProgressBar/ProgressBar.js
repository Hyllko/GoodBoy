import React from 'react';
import { useSelector } from 'react-redux';

//styles

const ProgressBar = () => {
   const pageStage = useSelector((state) => state.FormStage);
   return (
      <div className="progress-bar">
         <span
            className={
               pageStage === 1
                  ? 'progress-step progress-step--active'
                  : 'progress-step'
            }
         ></span>
         <span
            className={
               pageStage === 2
                  ? 'progress-step progress-step--active'
                  : 'progress-step'
            }
         ></span>
         <span
            className={
               pageStage === 3
                  ? 'progress-step progress-step--active'
                  : 'progress-step'
            }
         ></span>
      </div>
   );
};

export default ProgressBar;
