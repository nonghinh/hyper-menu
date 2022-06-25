import MainMenuForm from "./form/MainMenuForm";
import {useSelector} from "react-redux";
import {getMenuItem} from "../../helpers";
import MegaMenuForm from "./form/MegaMenuForm";

function MenuForm(){
    const {menu_item_editing, menus} = useSelector(state => ({
        menu_item_editing: state.menu.menu_item_editing,
        menus: state.menu.menus,
    }));
    let menuItem = getMenuItem(menus, menu_item_editing);
    console.log('==Menu item ========')
    console.log(menuItem)
    let formFields = <MainMenuForm />;
    if (menuItem && menuItem.layout_type == 'sub_mega_menu')
        formFields = <MegaMenuForm />;
    return <div className={`menu-form`}>
        {formFields}
    </div>
}

export default MenuForm;