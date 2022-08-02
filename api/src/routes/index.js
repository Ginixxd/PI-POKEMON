const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Types} = require('../db')
const getPokemons = require('../routes/PokeRoute');
const axios = require('axios')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', getPokemons);
router.get('/types', async (req, res) => {
    const typeNormal = await Types.findOne({where: {name:'normal'}});
    if(!typeNormal) {
        try {
            const types = await axios.get("https://pokeapi.co/api/v2/type");
            const typesTotal = types.data.results.map(e => e.name);
            const typesCreate = typesTotal.map(async e => await Types.create({ name: e }));
            res.status(200).send(typesCreate);
        } catch (error) {
            console.log(error)
        };
    } else {
        const types = await Types.findAll();
        const typesTotal = types.map(e => e.name);
        return res.status(200).send(typesTotal);
    };
})


module.exports = router;
