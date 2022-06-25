import {SET_COLLECTIONS, SET_PRODUCTS} from "../constants/action_types";

let defaultStates = {
    menu: null,
    products: null,
    collections: null
};

const app = (state = defaultStates, action ) => {
    switch (action.type){
        case 'SET_INIT_DATA':
            return {... state, menu: []};
        case SET_PRODUCTS:
            return {...state, products: action.products}
        case SET_COLLECTIONS:
            return {...state, collections: action.collections}
        default:
            return {...state};
    }
}

export default app;
