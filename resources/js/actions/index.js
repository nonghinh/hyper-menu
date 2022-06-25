import axios from "axios";
import {
    ADD_MENU_ITEM,
    SEARCH_PRODUCT, SET_COLLECTIONS,
    SET_MENU_ACTIVE,
    SET_MENU_DATA,
    SET_MENU_ITEM_EDITING, SET_PRODUCTS
} from "../constants/action_types";

export const setMenus = (menus) =>{
    return {
        type: SET_MENU_DATA,
        menus
    }
}

export const getMenu = () => {
    return (dispatch) => {

    }
}

export const setMenuActive = (menu) =>{
    return {
        type: SET_MENU_ACTIVE,
        menu
    }
}
export const setMenuItemEditing = (item) =>{
    return {
        type: SET_MENU_ITEM_EDITING,
        item
    }
}

export const addMenuItem = (menu) => {
    return {
        type: ADD_MENU_ITEM,
        menu
    }
}

export const searchProduct = (query, beforeSend, complete) => {
    return (dispatch) => {
        if (typeof beforeSend === 'function')
            beforeSend();
        return axios.get(`/api/products/search?q=${query}`)
            .then(res=> {
                if (res.data.success){
                    dispatch(setProducts(res.data.products));
                }
                if (typeof complete === 'function')
                    complete();
            })
            .catch(error => {
                if (typeof complete === 'function')
                    complete();
            })
    }
}

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export const searchCollection = (query, beforeSend, complete) => {
    return (dispatch) => {
        if (typeof beforeSend === 'function')
            beforeSend();
        return axios.get(`/api/collections/search?q=${query}`)
            .then(res=> {
                if (res.data.success){
                    dispatch(setCollections(res.data.collections));
                }
                if (typeof complete === 'function')
                    complete();
            })
            .catch(error => {
                if (typeof complete === 'function')
                    complete();
            })
    }
}

export const setCollections = (collections) => {
    return {
        type: SET_COLLECTIONS,
        collections
    }
}