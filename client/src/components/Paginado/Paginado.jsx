import React from "react";
import Style from './Paginado.module.css'


export default function Paginado ({charactersPerPage, allPokemons, paginado}) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/charactersPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav className={Style.paginado}>
            <ul className = {Style.list}>
                {
                   pageNumbers && pageNumbers.map(number => (
                    <li className = {Style.li} key={number}>
                        <button className={Style.btn} onClick={() => paginado(number)}>{number}</button>
                    </li>
                   ))
                }
            </ul>
        </nav>
    )
}