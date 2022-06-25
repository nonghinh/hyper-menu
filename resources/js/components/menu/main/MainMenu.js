import styled from "styled-components";
import MainMenuItem from "./MainMenuItem";
import {IconPlusSquare} from "../../../data/icons";
import ModalAddMenu from "../ModalAddMenu";
import useModal from "../../modal/useModal";
import {useSelector} from "react-redux";

const StyledMainMenu = styled.ul.attrs({className: 'main-menu'})`
  min-height: 60px;
  width: 100%;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  position: relative;
`;

const BtnAddMenu = styled.li.attrs({className:'btn-add-menu'})`
  float: left;
  list-style: none;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>button{
    width: 40px;
    height: 40px;
    padding: 6px;
    background-color: transparent;
    border: none;
  }
`;
function MainMenu() {
    const {menus} = useSelector(state => ({menus: state.menu.menus}));
    console.log('----')
    console.log(menus)
    const {isShowing, toggle} = useModal();
    const handleAddMenu = () => {
        toggle();
        return false;
    }
    return <StyledMainMenu>
        {menus.map((item, index) => <MainMenuItem key={index} item={item} index={index} />)}
        <BtnAddMenu>
            <button onClick={handleAddMenu}>
                <i className="icon-svg"><IconPlusSquare /></i>
            </button>
        </BtnAddMenu>
        <ModalAddMenu active={isShowing} hide={toggle} />
    </StyledMainMenu>
}

export default MainMenu;