import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getPokemon, filterPokemonsByType, orderByName, orderByAttack, filterCreated } from '../../actions/index'
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import Style from './Home.module.css'


export default function Home () {

    const dispatch = useDispatch();
    
    const allPokemons = useSelector((state) => state.pokemons);

    const [currentPage, setCurrentPage] = useState(1);

    const [charactersPerPage, setCharactersPerPage] = useState(12);

    const lastPokeIndex = currentPage * charactersPerPage;

    const firstPokeIndex = lastPokeIndex - charactersPerPage;

    const currentPokes =  allPokemons?.slice(firstPokeIndex , lastPokeIndex );
    
    const [orden, setOrden] = useState('');

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        dispatch(getPokemon())
    },[dispatch]);

    function handleClick (e) {
        e.preventDefault();
        dispatch(getPokemon())
    };

    function handleFilterType (e) {
        dispatch(filterPokemonsByType(e.target.value))
        setCurrentPage(1)
    };

    function handleSort (e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSortNum (e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleFilterCreated (e) {
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
    }

    return (
        <div>
            <SearchBar setCurrentPage={setCurrentPage}/>
            
            <h1>Welcome to your own pokedex!</h1>
            <button className = {Style.btn} onClick={e => {handleClick(e)}}>
            Reload your pokemons
            </button>
            <div>
            
                <select className = {Style.select} onChange = {e => handleSort(e)}>
                    <option value= 'asc'>A to Z</option>
                    <option value= 'desc'>Z to A</option>
                </select>
                <select className = {Style.select1} onChange = {e => handleSortNum(e)}>
                    <option value="mayor"> Powerfull </option>
                    <option value="menor"> Weak </option>
                </select>
                <select className = {Style.select2} onChange = {e => handleFilterType(e)}>
                    <option value="todos">All</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknow">Unknow</option>
                    <option value="shadow">Shadow</option>
                </select>
                <div>
                <select className = {Style.select3} onChange={e => handleFilterCreated(e)}>
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="api">API</option>
                </select>
                <Paginado charactersPerPage = {charactersPerPage} allPokemons = {allPokemons.length} paginado = {paginado} />
                
                </div>
                <div>
                {
                    currentPokes.length ? currentPokes.map((poke) => {
                        return (
                            <div className={Style.container}>
                                <Link className= {Style.qqq} to = {'/home/' + poke.id} >
                        <Card name = {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} sprite = {poke.sprite} types = { poke.types.length === 2 ? ['Types: ' + poke.types[0].name?.charAt(0).toUpperCase() + poke.types[0].name?.slice(1) + ' - ' , poke.types[1].name?.charAt(0).toUpperCase() + poke.types[1].name?.slice(1)] :'Type : ' + poke.types[0].name?.charAt(0).toUpperCase() + poke.types[0].name?.slice(1)}/> 
                                 </Link>
                            </div>

                        )
                    }):
                    <img src= {'https://pa1.narvii.com/6344/b0d7343a693332df0a3eb017b5d104fa1d0e6350_hq.gif'} alt="img not found" />
                
                }
                </div>
            </div>
        </div>
    )

}