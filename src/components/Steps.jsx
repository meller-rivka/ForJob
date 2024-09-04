import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import First from './First';
import Second from './Second';
import Third from './Third';

export default function IndicatorTopStepper() {


  const [ activeStep, setActiveStep ] = useState(0);
  
  const steps = [
    { title: '' },
    { title: '' },
    { title: '' },
  ];

  function getSectionComponent() {
    switch(activeStep) {
      case 0: return <First onClick={setActiveStep} step={activeStep}/>;
      case 1: return <Second onClick={setActiveStep} step={activeStep}/>;
      case 2: return <Third onClick={setActiveStep} step={activeStep}/>;
      default: return null;
    }
  }

  return (
    <div>
<div id="canChoice">
  <p>עוד לא החלטת?אפשר לבחור עכשיו ולשנות את הפרטים אחר כך.</p>
</div>

    <Stepper
      steps={steps}
      activeStep={activeStep}/>
    <div>
      { getSectionComponent()  }
     
    </div>
  </div>
  );
}