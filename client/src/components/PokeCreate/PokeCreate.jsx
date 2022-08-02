import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postPokemon, getTypes} from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Style from './PokeCreate.module.css'

function validate (input) {
    let errors = {};
    if (!input.name){
        errors.name = 'A name is required'
    }
    if (!input.hp){
        errors.hp = 'Life points are required'
    }
    if (input.hp > 100){
        errors.hp = 'Life points cannot exceed 100'
    }
    if (input.hp < 0) {
        errors.hp = 'Life points cannot be less than 0'
    }
    if (!input.attack){
        errors.attack = 'Attack points are required'
    }
    if (input.attack > 100 || input.attack < 0){
        errors.attack = 'Hit points should be between 0 and 100'
    }
    if (!input.defense){
        errors.defense = 'Defense points are required'
    }
    if (input.defense > 100 || input.defense < 0){
        errors.defense = 'Defense points should be between 0 and 100'
    }
    if (!input.speed){
        errors.speed = 'Speed points are required'
    }
    if (input.speed > 100 || input.speed < 0){
        errors.speed = 'Speed points should be between 0 and 100'
    }
    if (!input.height){
        errors.height = 'Height points are required'
    }
    if (input.height > 100 || input.height < 0){
        errors.height = 'Height points should be between 0 and 100'
    }
    if (!input.weight){
        errors.weight = 'Weight points are required'
    }
    if (input.weight > 100 || input.weight < 0){
        errors.weight = 'Weight points should be between 0 and 100'
    }
    if (input.types.length > 2){
        errors.types = 'AAAAAAAAAA'
    }

    return errors
} 




export default function PokeCreate () {

    const history = useHistory()

    const dispatch = useDispatch();

    const types = useSelector((state) => state.types);

    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        sprite: '',
        types: []
    });

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getTypes())
    }, []);

    function handleChange (e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    };

    function handleSelect (e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    };
     
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(postPokemon(input))
        alert('Pokemon Creado con exito')
        setInput({
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            sprite: '',
            types: []
        })
        history.push('/home')
    }

    return ( 
        <div>
            <Link to = '/home'><button className={Style.btn}>Back</button></Link>
            <h1>Create your own pokemon!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label className ={Style.text}>Nombre: </label>
                    <input 
                    type="text"
                    value = {input.name}
                    name = 'name'
                    onChange = {handleChange}
                    className = {Style.inp}
                     />
                     {errors.name && (
                        <p className= {Style.error}>{errors.name}</p>
                     )}
                </div>
                <div>
                    <label className ={Style.text}>Vida: </label>
                    <input 
                    type="number" 
                    value = {input.hp}
                    name = 'hp'
                    onChange = {handleChange}
                    className = {Style.inp1}
                    />
                    {errors.hp && (
                        <p className= {Style.error}>{errors.hp}</p>
                     )}
                </div>
                <div>
                    <label className ={Style.text}>Attack Points: </label>
                    <input 
                    type="number"
                    value = {input.attack}
                    name = 'attack'
                    onChange = {handleChange}
                    className = {Style.inp2}
                    />
                    {errors.attack && (
                        <p className= {Style.error}>{errors.attack}</p>
                     )}
                </div>
                <div >
                    <label className ={Style.text}>Defense Points: </label>
                    <input 
                    type="number"
                    value = {input.defense}
                    name = 'defense'
                    onChange = {handleChange}
                    className = {Style.inp3}
                    />
                    {errors.defense && (
                        <p className= {Style.error}>{errors.defense}</p>
                     )}
                </div>
                <div>
                    <label className ={Style.text}> Speed Points: </label>
                    <input 
                    type="number"
                    value = {input.speed}
                    name = 'speed'
                    onChange = {handleChange}
                    className = {Style.inp4}
                    />
                    {errors.speed && (
                        <p className= {Style.error}>{errors.speed}</p>
                     )}
                </div>
                <div >
                    <label className ={Style.text}>Height Points:</label>
                    <input 
                    type="number"
                    value = {input.height}
                    name = 'height'
                    onChange = {handleChange}
                    className = {Style.inp5}
                    />
                    {errors.height && (
                        <p className= {Style.error}>{errors.height}</p>
                     )}
                </div>
                <div >
                    <label className ={Style.text} >Weight Points:  </label>
                    <input 
                    type="number"
                    value = {input.weight}
                    name = 'weight'
                    onChange = {handleChange}
                    className = {Style.inp6}
                    />
                    {errors.weight && (
                        <p className= {Style.error}>{errors.weight}</p>
                     )}
                </div>
                <div>
                    <label className ={Style.text}>Image: </label>
                    <input 
                    type="text"
                    value = {input.sprite}
                    name = 'sprite'
                    onChange = {handleChange}
                    className = {Style.inp7}
                    />
                </div>
                <div>
                <img className={Style.img} src={'https://cdn.pixabay.com/photo/2016/08/06/08/05/pokemon-1574006__340.png'} alt="img not found" />
                    <select className={Style.select} onChange = {e => handleSelect(e)}>
                    {
                        types && types.map(el => {
                        return (                            
                            <option value={el} > {el?.charAt(0).toUpperCase() + el.slice(1)}</option>
                        )
                        })
                    }
                     </select>
                     </div>
                <ul><li className= {Style.text1}>{input.types.map(el => el?.charAt(0).toUpperCase() + el.slice(1) + ', ')}</li></ul>    
                
                    <button className={Style.btn1} type = 'submit'>{input.name + ' I choose you!'}</button>
            </form>
        </div>
    )

}