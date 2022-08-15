import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons } from '../../actions';
import Style from './SearchBar.module.css'
import { Link } from 'react-router-dom';

export default function SearchBar ({setCurrentPage}) {
    const dispatch =  useDispatch();

    const [name, setName] = useState('');

    function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value)
    };

    function handleSubmit (e) {
        e.preventDefault();
        dispatch (getNamePokemons(name))
        setCurrentPage(1)
    }


    return (
        <div className = {Style.header}>
            <Link className = {Style.btn2} to = '/pokemons'> Create your own pokemon! </Link>
            <input className = {Style.input} type = "text" placeholder = 'Search for...' onChange={(e) => handleInputChange(e)}/>
            <button className = {Style.btn} type = 'submit' onClick = {(e) => handleSubmit(e)}>
                <img src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849__340.png" alt="" height = '20px' width= '20px'/>
            </button>
        </div>
    )
}