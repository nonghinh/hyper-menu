import styled from "styled-components";
import GridRadio from "./GridRadio";
import Radio from "./Radio";
import ProductSelector from "./ProductSelector";
import LinkTypeSelector from "./LinkTypeSelector";
import SwitchButton from "./SwitchButton";
import InputImage from "./InputImage";
import ColumnSize from "./ColumnSize";
import CollectionSelector from "./CollectionSelector";
import ColorPicker from "./ColorPicker";

const FormGroup = styled.div.attrs({className: 'form-group'})`
  margin-bottom: 1rem;
`;
function FormItem(props){
    const {type, name, value, label, onChange} = props;
    const handleChangeValue = (e) => {
        console.log('aaxxx')
        console.log(e)
        if (typeof e === "object" && e.target)
            onChange(name, e.target.value);
        else
            onChange(name, e);
    }
    let inputItem = '';
    switch (type){
        case 'textarea':
            inputItem = <textarea name={name ?? ''} value={value ?? ''} className={`form-control`} rows={props.rows ?? 3}
                                  onChange={handleChangeValue}></textarea>
            break;
        case 'grid_radio':
            inputItem = <GridRadio value={value ?? ''} options={props.options ?? []} onChange={handleChangeValue} />
            break;
        case 'radio':
            inputItem = <Radio value={value ?? ''} name={name} options={props.options ?? []} onChange={handleChangeValue} />
            break;
        case 'link_selector':
            inputItem = <LinkTypeSelector onSelect={handleChangeValue} value={value ?? ''} />
            break;
        case 'product_selector':
            inputItem = <ProductSelector onSelect={handleChangeValue} value={value ?? ''} />
            break;
        case 'collection_selector':
            inputItem = <CollectionSelector onSelect={handleChangeValue} value={value ?? ''} />
            break;
        case 'switch':
            inputItem = <SwitchButton onChange={handleChangeValue} name={name} value={value ?? 0} label={label} />
            break;
        case 'image':
            inputItem = <InputImage name={name} value={value ?? ''} onChange={handleChangeValue} />
            break;
        case 'col_size':
            inputItem = <ColumnSize onChange={handleChangeValue} name={name} value={value ?? 3} />
            break;
        case 'color':
            inputItem = <ColorPicker onChange={handleChangeValue} value={value ?? ''} />
            break;
        default:
            inputItem = <input type={type} name={name ?? ''} value={value ?? ''} className={`form-control`} onChange={handleChangeValue} />
    }
    let inputContent = inputItem;
    if (props.prefix || props.suffix)
        inputContent = <div className="input-group mb-3">
            {props.prefix && <span className="input-group-text">{props.prefix}</span>}
            {inputItem}
            {props.suffix && <span className="input-group-text">{props.suffix}</span>}
    </div>;
    return <FormGroup>
        {label && type !== 'switch' && <label>{label}</label> }
        {inputContent}
    </FormGroup>
}

export default FormItem;