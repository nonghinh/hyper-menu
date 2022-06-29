import styled from "styled-components";
import MegaMenu from "../mega/MegaMenu";
import {useDispatch, useSelector} from "react-redux";
import {setMenuActive} from "../../../actions";
import MenuAction from "../MenuAction";
import {useState} from "react";
import WrapperItemWithAction from "../WrapperItemWithAction";

const MenuItem = styled.li`
  list-style: none;
  //position: relative;
  min-height: 50px;
  float: left;
  &>a{
    padding: 15px;
    display: block;
    width: 100%;
  }
`;
function MainMenuItem({item, index}){
    const {menu_active} = useSelector((state) => ({menu_active: state.menu.menu_active}));
    const dispatch = useDispatch();
    const handleClickLink = (e) => {
        e.preventDefault();
        dispatch(setMenuActive(index));
        return false;
    }

    let menuLink = item.link_custom;
    switch (item.link_type){
        case 'product':
            if(item.product)
                menuLink = '/products/'+item.product.handle;
            break;
        case 'collection':
            if (item.collection)
                menuLink = '/collections/'+item.collection.handle;
            break;
        case 'custom_link':
            if (item.link_disabled)
                menuLink = '#';
            break;
    }
    console.log('........');
    console.log(item.link_disabled);
    console.log(menuLink);
    return <MenuItem>
        <WrapperItemWithAction bgImage={item.bg_image} tagName={`a`} href={menuLink} onClick={handleClickLink} menuIndex={`[${index}]`}>
            <span className={`sss`}>{item.title}</span>
        </WrapperItemWithAction>

        {item.layout_type == 'mega_menu' && <MegaMenu active={menu_active == index} index={`[${index}].items`} />}
    </MenuItem>
}

export default MainMenuItem;