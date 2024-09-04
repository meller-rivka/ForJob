import React from 'react';
function Third() {
    return (
        <div>
            <h1>זהו בגדול?</h1>
            <p>המערכת מוכנה להתחיל בקמפיין וכדי שיהיה לך קל לעבוד איתה, הכנו כאן סרטון הדרכה קצר שיכניס אותך לעניינים ברגע אחד.</p>
            <video width="750" height="500" controls >
                <source src="./Videos/video1.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
export default Third; 