import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function Second({ onClick, step }) {
    return (
        <div>
        <h1>שנדבר ביזנ’ס?</h1>

        <div>
        <p>מה מטרת הפרויקט?</p>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="לארגונים" />
        <FormControlLabel value="male" control={<Radio />} label="לפרטיים" />
      </RadioGroup>
           <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            placeholder='כמה כסף תכננת לגייס לפרויקט?'
          />
        </div>

        <button onClick={ () => onClick(step + 1) }>מצוין, מתקדמים</button>
         </div>
    );
}
export default Second; 