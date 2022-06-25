import MegaMenuItemAdd from "../MegaMenuItemAdd";
import MegaMenuItem from "../MegaMenuItem";
import {getMenuItem} from "../../../../helpers";
import {useSelector} from "react-redux";
import styled from "styled-components";

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
export default function BlockItem({item, index}){
    const {menus} = useSelector(state => ({menus: state.menu.menus}));
    const subIndex = index+'.items';
    const items = getMenuItem(menus, subIndex);
    console.log('sub items block');
    console.log(items);
    console.log(index);
    return <div className={`block-item`}>
        <MenuList>
            {items && items.length ? items.map((subItem, i) => <MenuItem item={subItem} key={i}><MegaMenuItem item={subItem} index={`${index}.items[${i}]`} /></MenuItem>) : ('')}
            <BreakColumn />
            <MegaMenuItemAdd index={`${subIndex}`}  />
        </MenuList>
    </div>
}