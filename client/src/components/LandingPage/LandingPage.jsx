import React from "react";
import { Link } from 'react-router-dom';
import Style from './LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className = {Style.landing}>
            <img className = {Style.img} src={''} alt="" />
            <h1>Welcome!</h1>
            <Link to = '/home' >
                <button>Ingresar</button>
            </Link>
        </div>
    )
}