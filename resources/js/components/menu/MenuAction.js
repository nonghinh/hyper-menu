import styled from "styled-components";
import {IconClose, IconDuplicate, IconPencilFill} from "../../data/icons";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setMenuItemEditing, setMenus} from "../../actions";

const BoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
`;
const BoxAction = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: -20px;
  background-color: rgba(0,0,0,.65);
  border-radius: 3px;
`;

const ActionItem = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:first-child{
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  &:last-child{
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  & svg{
    fill: #ffffff;
    color: #ffffff;
    width: 12px;
    height: 12px;
  }
  &:hover,
  &:focus{
    background-color: rgba(0,0,0,.9);
  }
`;
function MenuAction({menuIndex}){
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {menus, menu_item_editing} = useSelector(state => ({
        menus: state.menu.menus,
        menu_item_editing: state.menu.menu_item_editing
    }));
    const handleDeleteMenu = () => {
        console.log('delete')
        if(!confirm(t('Are you sure want to delete this item?')))
            return false;
        let menuClone = _.cloneDeep(menus);
        try {
            let matchKey = menuIndex.match(/\[([0-9]+)\]$/);
            let lastKey = -1
            if (matchKey && matchKey.length == 2){
                lastKey = matchKey[1];
            }
            let keys = menuIndex.replace(/\[([0-9]+)\]$/, '');
            eval("menuClone"+keys+".splice("+lastKey+", 1)");
            dispatch(setMenus(menuClone));
        }
        catch (e){
            console.log('Delete menu error: '+e.message);
        }
    }

    const handleDuplicateMenu = () => {
        console.log('copy..');
        console.log(menuIndex);
        try {
            let menuClone = _.cloneDeep(menus);
            let matchKey = menuIndex.match(/\[([0-9]+)\]$/);
            let lastKey = -1
            if (matchKey && matchKey.length == 2){
                lastKey = matchKey[1];
            }
            let menuCopy = null;
            eval("menuCopy = _.cloneDeep(menuClone" + menuIndex+")");
            if (menuCopy)
                eval("menuClone"+menuIndex.replace(/\[([0-9]+)\]$/, '')+".splice("+(+lastKey+1)+", 0, menuCopy)");
            dispatch(setMenus(menuClone));
        }
        catch (e){
            console.log(menuIndex)
            console.log('Duplicate menu error: '+e.message);
        }
    }

    const handleEditMenu = ()=>{
        if (menu_item_editing && menu_item_editing == menuIndex)
            return;
        console.log('edit..')
        console.log(menuIndex)
        dispatch(setMenuItemEditing(menuIndex));
    }

    return <BoxWrapper>
        <BoxAction>
            <ActionItem title={t('Edit')} onClick={handleEditMenu}><i className="icon-svg"><IconPencilFill /></i></ActionItem>
            <ActionItem title={t('Duplicate')} onClick={handleDuplicateMenu}><i className="icon-svg"><IconDuplicate /></i></ActionItem>
            <ActionItem title={t('Delete')} onClick={handleDeleteMenu}><i className="icon-svg"><IconClose /></i></ActionItem>
        </BoxAction>
    </BoxWrapper>
}

export default MenuAction;