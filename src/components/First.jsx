import React from 'react';
import Textarea from '@mui/joy/Textarea';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function First({ onClick, step }) {
    return (
        <div>
            <h1>בואו נכיר</h1>

            <div>
            <Textarea name="Outlined" placeholder="מה שם הקמפיין?" variant="outlined" />
            <Textarea name="Outlined" placeholder="איך כותבים אותו באנגלית?" variant="outlined" />
            {/* התאריך עשה לי שגיאות עם ההתקנות לכן שמתי בהערה */}
            {/* <DatePicker label="תאריך התחלת הקמפיין" /> 
            <DatePicker label="תאריך סיום הקמפיין" /> */}
            <div id="addLogo">
                <h4>להוספת לוגו</h4>
            </div>
            </div>

            <button onClick={ () => onClick(step + 1) }>מעולה, ממשיכים</button>
             </div>
    );
}
export default First; 