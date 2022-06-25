import Modal from "../modal/Modal";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addMenuItem} from "../../actions";
import mega_menu from "../../data/default/mega_menu";

const LayoutList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LayoutItem = styled.div`
  width: 33.333%;
  padding: 0.5rem;
  border: 1px solid transparent;
  &:hover,
  &:focus{
    border: 1px solid #4a5568;
  }
`;
const LayoutImage = styled.div`
  height: 12rem;
  &>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const LayoutTitle = styled.div`
  font-size: 16px;
  color: #333;
  text-align: center;
`;
function ModalAddMenu({active, hide}){
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const layouts = [
        {
            "value": "mega_menu",
            "title": "Mega menu",
            "img": "https://i.picsum.photos/id/935/200/150.jpg?hmac=XixJ50QKCgMR4USfc-tcPMVhP5HfQhYXQJYkDfTTZRU"
        },
        {
            "value": "mega_menu",
            "title": "Mega menu",
            "img": "https://i.picsum.photos/id/935/200/150.jpg?hmac=XixJ50QKCgMR4USfc-tcPMVhP5HfQhYXQJYkDfTTZRU"
        },
        {
            "value": "mega_menu",
            "title": "Mega menu",
            "img": "https://i.picsum.photos/id/935/200/150.jpg?hmac=XixJ50QKCgMR4USfc-tcPMVhP5HfQhYXQJYkDfTTZRU"
        }
    ];

    const handleSelectLayout = (layout) => {
        if (layout == 'mega_menu'){
            dispatch(addMenuItem(mega_menu));
        }
        hide();
    }
    return <Modal isShowing={active} hide={hide} title={t('Select menu layout')}>
        <LayoutList>
            {layouts.map((item, index) => <LayoutItem key={index} onClick={()=>handleSelectLayout(item.value)}>
                <LayoutImage>
                    <img src={item.img} />
                </LayoutImage>
                <LayoutTitle>{item.title}</LayoutTitle>
            </LayoutItem>)}
        </LayoutList>
    </Modal>
}

export default ModalAddMenu;