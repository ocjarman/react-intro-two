
import React from 'react';
import { useState } from "react";

const CookieCounter = () => {
    const [cookies, setCookies] = useState(0); //default points is 0
 const addCookie = () => {
   setCookies(cookies + 1);
 };


 
 return (
     <div>
            <p>Cookies: {cookies}</p>
            {/**button that calls addpoint on click*/}
            <button onClick={addCookie}>Add One Cookie</button>
            
        </div>
    );
};

export default CookieCounter;

