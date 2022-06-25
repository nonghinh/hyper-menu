import {IconCloudArrowUp} from "../../data/icons";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {ChromePicker} from "react-color";
import useOnClickOutside from "../../useOnClickOutside";
import {useRef, useState} from "react";
import {isHexColor, isRgbaColor, isRgbColor, rgbaToString, stringToRgba} from "../../helpers";

const ColorWrapper = styled.div`
  position: relative;
`;
const ColorPopup = styled.div`
  position: absolute;
  bottom: 40px;
  right: 0;
  min-width: 100px;
  min-height: 100px;
  background-color: #ffffff;
  z-index: 9;
  display: ${(props)=> props.active ? 'block': 'none'}
  };
`;

const ColorZone = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${props=> props.color || '#ffffff'};
  border: 1px solid #f2f2f2;
`;
export default  function ColorPicker({value, onChange}){
    const {t} = useTranslation();
    const [openPicker, setOpenPicker] = useState(false);
    const [inputColor, setInputColor] = useState(value);
    const [error, setError] = useState('');
    const boxRef = useRef();
    useOnClickOutside(boxRef, function (){
        setOpenPicker(false);
    });

    const handleColorChange = (color) => {
        const colorStr = rgbaToString(color.rgb);
        onChange(colorStr);
        setInputColor(colorStr)
    }

    const handleInputColor = (event) => {
        let colorValue = event.target.value;
        setInputColor(colorValue);
        if (openPicker)
            setOpenPicker(false)
    }

    const handleValidateColor = (event) => {
        let colorValue = event.target.value;
        if (isRgbColor(colorValue) || isRgbaColor(colorValue) || isHexColor(colorValue))
            onChange(colorValue);
        else {
            onChange(value);
            setInputColor(value);
            setError('The color is invalid.')
        }
    }
    let color = value;
    if (!isHexColor(value))
        color = stringToRgba(value);
    return <ColorWrapper ref={boxRef}>
        <div className="input-group">
            <input type="text" className="form-control" value={inputColor} onBlur={handleValidateColor}
                   onFocus={()=>setOpenPicker(true)} onChange={handleInputColor} />
            <button className="btn btn-outline-secondary" type="button" onClick={()=> setOpenPicker(true)}>
                <ColorZone color={value}></ColorZone>
            </button>
        </div>
        <ColorPopup active={openPicker}>
            <ChromePicker color={color} onChange={handleColorChange} />
        </ColorPopup>
    </ColorWrapper>
}