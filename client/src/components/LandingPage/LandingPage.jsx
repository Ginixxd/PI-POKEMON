import React from "react";
import { Link } from 'react-router-dom';
import Style from './LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={Style.landing}>
            <h1 className={Style.text}>Welcome!</h1>
            <Link to = '/home' >
                <button className={Style.btn}>Sign in</button>
            </Link>
        </div>
    )
}