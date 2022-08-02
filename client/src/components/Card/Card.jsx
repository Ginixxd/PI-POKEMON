import React from "react";
import Style from './Card.module.css'

export default function Card ({name, types, sprite, attack, defense, hp, speed, id, height, weight}) {
    return (
        <div className= {Style.card}>
            <img className = {Style.img}  src={sprite} alt= "not found" width='120px' height= '150px' />
            <h2 className={Style.text}>{name}</h2>
            <h5 className={Style.text}>{types}</h5>
            <h5>{attack}</h5>
            <h5>{defense}</h5>
            <h5>{hp}</h5>
            <h5>{speed}</h5>
            <h5>{id}</h5>
            <h5>{height}</h5>
            <h5>{weight}</h5>
        </div>
    )
}