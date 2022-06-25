import {ADD_MENU_ITEM, SET_MENU_ACTIVE, SET_MENU_DATA, SET_MENU_ITEM_EDITING} from "../constants/action_types";

let defaultStates = {
    menus: [],
    menu_active: 0,
    menu_item_editing: null
};

const menu = (state = defaultStates, action ) => {
    let menus = [];
    switch (action.type){
        case SET_MENU_ACTIVE:
            return {... state, menu_active: action.menu}
        case ADD_MENU_ITEM:
            menus = _.cloneDeep(state.menus);
            menus.push(action.menu);
            return {...state, menus: menus}
        case SET_MENU_DATA:
            menus = action.menus;
            return {...state, menus: menus}
        case SET_MENU_ITEM_EDITING:
            return {...state, menu_item_editing: action.item}
        default:
            return {...state};
    }
}

export default menu;
