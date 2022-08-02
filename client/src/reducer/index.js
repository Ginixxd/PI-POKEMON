
const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    detail: [],
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_POKEMON':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
            case 'FILTER_BY_TYPE':
                const typesFiltered = action.payload === 'todos' ? state.allPokemons : state.allPokemons.filter(el => el.types[0]?.name === action.payload || el.types[1]?.name === action.payload)  
                return {
                    ...state,
                    pokemons: typesFiltered
                }
                case 'ORDER_BY_NAME' :
                    let sortedArr = action.payload === 'asc' ?
                    state.pokemons.sort (function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.pokemons.sort ( function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        pokemons: sortedArr
                    }
                    case 'ORDER_BY_ATTACK' :
                        let sortedArrNum = action.payload === 'mayor' ?
                    state.pokemons.sort (function (a, b) {
                        if (a.attack > b.attack) {
                            return -1;
                        }
                        if (b.attack > a.attack) {
                            return 1;
                        }
                        return 0;
                    }) :
                    state.pokemons.sort ( function (a, b) {
                        if (a.attack > b.attack) {
                            return 1;
                        }
                        if (b.attack > a.attack) {
                            return -1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        pokemons: sortedArrNum
                    }
                    case 'GET_NAME_POKEMONS' : 
                        return {
                            ...state,
                            pokemons: action.payload
                        }
                        case 'POST_POKEMON':
                            return {
                                ...state
                            }
                            case 'GET_TYPES':
                                return {
                                    ...state,
                                    types: action.payload
                                }
                                case 'FILTER_CREATED':
                                    const createdFilter = 
                                    action.payload === 'created'
                                    ? state.allPokemons.filter((poke) => poke.id.length > 10)
                                    : state.allPokemons.filter((poke) => poke.id.toString().length < 4)
                                    return {
                                        ...state,
                                        pokemons: 
                                        action.payload === 'all' ? state.allPokemons : createdFilter
                                    }
                                    case 'GET_DETAILS':
                                        return {
                                            ...state,
                                            detail: action.payload  
                                        }
                                        case 'RESET_DETAIL' :
                                            return {
                                                ...state,
                                                detail: []
                                            }
            default: 
                return state
    }
}

export default rootReducer;