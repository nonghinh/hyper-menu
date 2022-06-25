import styled from "styled-components";
import MegaMenuItemAdd from "./MegaMenuItemAdd";
import {getMenuItem} from "../../../helpers";
import {useSelector} from "react-redux";
import MegaMenuItem from "./MegaMenuItem";

const MegaMenuContent = styled.div.attrs({className: 'mega-menu'})`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  opacity: ${(props) => props.active ? 1 : 0};
  z-index: ${(props) => props.active ? 1 : -1};
`;

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;
const MenuItem = styled.li.attrs((props)=>({className: !props.item.auto_width ? `m-col-${props.item.width}` : ''}))`
  list-style: none;
  flex-grow: 1;
`;
const BreakColumn = styled.div`
  flex-basis: 100%;
  height: 0;
`;
function MegaMenu({active, index}){
    const {menus} = useSelector(state => ({menus: state.menu.menus}));
    const items = getMenuItem(menus, index);
    return <MegaMenuContent active={active}>
        <MenuList>
            {items && items.length ? items.map((item, i) => <MenuItem item={item} key={i}><MegaMenuItem item={item} index={`${index}[${i}]`} /></MenuItem>) : ('')}
            <BreakColumn />
            <MegaMenuItemAdd index={`${index}`} />
        </MenuList>

    </MegaMenuContent>
}

export default MegaMenu;