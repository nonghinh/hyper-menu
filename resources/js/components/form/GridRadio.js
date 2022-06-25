import styled from "styled-components";

const BoxGridRadio = styled.div.attrs({className: 'grid-radio'})`
    display: flex;
  flex-wrap: wrap;
`;
const GridRadioItem = styled.div.attrs({className: 'grid-radio-item'})`
    margin-right: 10px;
    margin-bottom: 10px;
`;
const RadioButton = styled.button.attrs({className: 'btn radio-button'})`
    background-color: ${(props) => props.active ? '#F76E11' :  '#FFFFFF'};
    color: ${(props) => props.active ? '#FFFFFF' :  '#333333'};
    border: 1px solid #e5e7eb;
`;
function GridRadio(props){
    const {options, value, onChange} = props;
    const handleChange = (current) => {
        onChange(current);
    }
    return <BoxGridRadio>
        {options.map((item, index)=> <GridRadioItem key={index}>
            <RadioButton active={item.value == value} onClick={()=>handleChange(item.value)}>{item.label}</RadioButton>
        </GridRadioItem> )}
    </BoxGridRadio>
}

export default GridRadio;