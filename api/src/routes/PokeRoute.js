const Router = require('express');
const {Pokemon, Types} = require('../db')
const {getAllPokemon} = require('../controllers/getPokemon')
const router = Router();

router.get('/', async (req, res) => {
    const {name} = req.query;
    const allPoke = await getAllPokemon();
    try {
        if(name) {
            let pokemonName = await allPoke.find(e => e.name.toLowerCase() === name.toLowerCase());
            if(pokemonName === undefined) {
                return res.status(404).send('Pokemon not found')
            } else {
                return res.status(200).json([pokemonName])
            }
        } else {
            res.status(200).json(allPoke);
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const allPokemons = await getAllPokemon();
    try {
        if(id) {
            const pokemonId = await allPokemons.filter(e => e.id == id);
            pokemonId.length ?
            res.status(200).json(pokemonId) :
            res.status(404).send('Pokemon not found')
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {
    const {name, hp, attack, defense, speed, height, weight, sprite, types} = req.body;
    try {
        if(name) {
            const createdPokemon = await Pokemon.create({
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                sprite,
                types: []
            });
            const createdDb = await Types.findAll({
                where: {name: types}
            });
            createdPokemon.addType(createdDb);
            return res.status(200).send('Pokemon successfully created')
        } else {
            return res.status(404).send('Pokemon was not created');
        }
    } catch (error) {
        console.log(error);    
    }
})


module.exports = router;