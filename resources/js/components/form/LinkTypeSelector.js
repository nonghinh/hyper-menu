import styled from "styled-components";
import {IconChevronUp, IconHomeFill, IconLink45deg, IconSearch} from "../../data/icons";
import {useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import useOnClickOutside from "../../useOnClickOutside";

const WrapperSelector = styled.div`
  position: relative;
`;

const InputGroup = styled.div.attrs({className: 'input-group'})`
  display: flex;
  &>input{
    flex: 1 1 auto;
  }
`;

const ListOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  z-index: 9;
`;

const OptionItem = styled.div`
  padding: 5px 10px;
  display: flex;
  cursor: pointer;
  &:hover,
  &:focus{
    background-color: #a0aec0;
  }
`;
const OptionItemIcon = styled.div`
  width: 35px;
`;
const OptionItemTitle = styled.div`
  flex: 1 1 auto;
`;
const BoxValue = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 2px;
  height: calc(100% - 4px);
  width: calc(100% - 45px);
  background-color: #fff;
  color: #333;
  font-size: 14px;
  padding: 5px;
`;
function LinkTypeSelector({onSelect, value}){
    const {t} = useTranslation();
    console.log('--------')
    console.log(value)
    const options = [
        {
            title: t('Custom link'),
            value: 'custom_link',
            icon: <IconLink45deg />
        },
        {
            title: t('Home page'),
            value: 'home',
            icon: <IconHomeFill />
        },
        {
            title: t('Search page'),
            value: 'search',
            icon: <IconSearch />
        },
        {
            title: t('Product'),
            value: 'product',
            icon: <IconSearch />
        },
        {
            title: t('Collection'),
            value: 'collection',
            icon: <IconSearch />
        }
    ];
    const [searchValue, setSearchValue] = useState('');
    const [showOptions, setShowOption] = useState(false);
    const [listItems, setListItems] = useState(options);

    const refListOption = useRef();
    useOnClickOutside(refListOption, ()=> setShowOption(false));

    const handleSelectOption = (value) => {
        onSelect(value);
        setSearchValue('');
        setListItems(options);
        setShowOption(false);
    }

    const handleSearchOption = (event) => {
        let query = event.target.value;
        let items = [];
        options.forEach(function (item){
            if (item.title.toLowerCase().search(query) !== -1){
                items.push(item);
            }
        });
        setListItems(items);
    }
    let valueToDisplay = value;
    options.forEach(function (item){
        if (item.value == value)
            valueToDisplay = item.title;
    });
    return <WrapperSelector ref={refListOption}>
        <InputGroup>
            <input type="text" className="form-control" value={searchValue} onInput={handleSearchOption}
                   onChange={(e)=> setSearchValue(e.target.value)} onClick={()=>setShowOption(true)}
            />
            <span className="input-group-text"><IconChevronUp /></span>
            {value && !showOptions ? <BoxValue onClick={()=>setShowOption(true)}>{valueToDisplay}</BoxValue> : ('')}
        </InputGroup>
        {showOptions && <ListOptions>
            {listItems.map((item, index) => <OptionItem key={index} onClick={()=>handleSelectOption(item.value)}>
                <OptionItemIcon>{item.icon}</OptionItemIcon>
                <OptionItemTitle>{item.title}</OptionItemTitle>
            </OptionItem>)}
        </ListOptions>}
    </WrapperSelector>
}

export default LinkTypeSelector;