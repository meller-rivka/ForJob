import React from 'react';
import { useNavigate } from "react-router-dom";
function Home() {
    let navigate = useNavigate()
    return (
        <div>
            <h1> שלום מתיתיהו מן </h1>
            <p>
                תודה שבחרת להקים קמפיין התרמה ב-IMPEL.
                אנחנו נלווה אותך כאן לכל אורך הדרך ונסייע לך
                לנהל את הקמפיין בקלות, לדעת מה קורה בכל רגע
                והכי חשוב - להגיע ליעד!

            </p>
            <p>בהצלחה ענקית
                לוגו Impel</p>

            <button onClick={() => { navigate("steps") }}>  קדימה, מכאן מתחילים </button>
        </div>
    );
}
export default Home; 