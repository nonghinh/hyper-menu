import styled from "styled-components";
import {IconPlusSquare} from "../../../data/icons";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {mega_menu_item} from "../../../data/default/mega_menu";
import {setMenus} from "../../../actions";

const BtnAddMenu = styled.div`
  padding: 15px;
  cursor: pointer;
`;
function MegaMenuItemAdd({index}){
    const {t} = useTranslation();
    const {menus} = useSelector(state => ({menus: state.menu.menus}));
    const dispatch = useDispatch();
    const handleAddMenu = () => {
        console.log('---index mm--')
        console.log(index)
        let menuClone = _.cloneDeep(menus);
        let defaultData = mega_menu_item;
        eval(`menuClone${index}.push(defaultData)`);
        dispatch(setMenus(menuClone));
    }
    return <BtnAddMenu onClick={()=>handleAddMenu()}>
        <i><IconPlusSquare /></i> <span>{t('Add menu item')}</span>
    </BtnAddMenu>
}

export default MegaMenuItemAdd;