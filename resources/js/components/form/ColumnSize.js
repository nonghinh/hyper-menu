import styled from "styled-components";
import {useEffect, useRef} from "react";
import {use} from "i18next";

const Slider = styled.div.attrs({className: 'column-slider'})`
  width: 100%;
  position: relative;
  &>input{
    width: 100%;
  }
`;

const Bubble = styled.div.attrs({className: 'slider-bubble'})`
  position: absolute;
  background-color: rgba(0,0,0, .6);
  color: #ffffff;
  width: 30px;
  height: 25px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -35px;
  border-radius: 3px;
  /*&:before{
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid rgba(0,0,0,.6);
    position: absolute;
    bottom: -10px;
  }*/
`;
function ColumnSize({onChange, value}){
    const bubbleRef = useRef();
    const rangeRef = useRef();
    useEffect(() => {
        console.log('init')
        console.log(value)
        setBubblePosition(value);
    }, []);
    const handleChange = (event) => {
        const currentValue = event.target.value;
        onChange(currentValue);
        setBubblePosition(currentValue)
    }

    const setBubblePosition = (rangeValue) => {
        let left = '-8px';
        if (rangeValue == 12)
            left = 'calc(100% - 24px)';
        else if (rangeValue > 1){
            left = ((rangeValue - 1) / 12 * 100 )+'%';
        }
        bubbleRef.current.style.left = left;
    }

    return <Slider>
        <input type="range" min={1} max={12} step={1} value={value} onInput={handleChange} ref={rangeRef} />
        <Bubble ref={bubbleRef}>
            {value}
        </Bubble>
    </Slider>
}

export default ColumnSize;