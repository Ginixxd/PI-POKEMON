import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, resetDetail } from '../../actions'
import { useEffect } from 'react'
import Style from './Detail.module.css'
import Card from '../Card/Card'

export default function Detail (props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
        dispatch(resetDetail())
    },[dispatch])

    const myPokemon = useSelector((state) => state.detail )

    return (
        <div className= {Style.wait}>
            <Link to = '/home'>
                <button className={Style.btn} >
                    Back
                </button>
            </Link>
            {
                myPokemon.length > 0 ?
                <div className = {Style.text}>
                    {/* <h1>Hi! My name is {myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)}</h1>
                    <img className={Style.img1} src = {myPokemon[0].sprite} alt="img not found" />
                    <img className={Style.img} src={'https://www.gifsanimados.org/data/media/1446/pokemon-imagen-animada-0092.gif'} alt="" />
                    <h2>{myPokemon[0].types.length === 2 ? ['Types: ' + myPokemon[0].types[0].name?.charAt(0).toUpperCase() + myPokemon[0].types[0].name?.slice(1) + ' - ' , myPokemon[0].types[1].name?.charAt(0).toUpperCase() + myPokemon[0].types[1].name?.slice(1)] :'Type : ' + myPokemon[0].types[0].name?.charAt(0).toUpperCase() + myPokemon[0].types[0].name?.slice(1)}</h2>
                    <h3>Points of hp: {myPokemon[0].hp}</h3>
                    <h3>I'm the pokemon number {myPokemon[0].id} in your pokedex</h3>
                    <h3>My hit points are: {myPokemon[0].attack}</h3>
                    <h3>My defense points are: {myPokemon[0].defense}</h3>
                    <h3>My speed points are: {myPokemon[0].speed}</h3>
                    <h3>My height is: {myPokemon[0].height}</h3>
                    <h3>My weight is: {myPokemon[0].weight}</h3> */}
                    <Card 
                    name = {myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)} 
                    sprite = {myPokemon[0].sprite} 
                    types = {myPokemon[0].types.length === 2 ? ['Types: ' + myPokemon[0].types[0].name?.charAt(0).toUpperCase() + myPokemon[0].types[0].name?.slice(1) + ' - ' , myPokemon[0].types[1].name?.charAt(0).toUpperCase() + myPokemon[0].types[1].name?.slice(1)] :'Type : ' + myPokemon[0].types[0].name?.charAt(0).toUpperCase() + myPokemon[0].types[0].name?.slice(1)}
                    hp = { 'Points of hp: ' + myPokemon[0].hp}
                    attack = {'Hit points: ' + myPokemon[0].attack}
                    defense = {'Defense points: '+ myPokemon[0].defense}
                    speed = {'Speed points: '+ myPokemon[0].speed}
                    id = {'Pokemon number: '+ myPokemon[0].id}
                    weight = {'Weight: '+ myPokemon[0].weight}
                    height = {'Height: '+ myPokemon[0].height}
                    /> 
                </div> :
                <div className= {Style.wait}>
                <img  src={'https://pa1.narvii.com/6344/b0d7343a693332df0a3eb017b5d104fa1d0e6350_hq.gif'} alt="img not found" />
                </div>
            }
        </div>

    )


}