import styled from "styled-components";

const SwitchWrapper = styled.div`
  display: flex;
  padding-left: 0.1rem;
`;
const FormSwitch = styled.label.attrs({className: 'switch'})`
  position: relative;
  display: inline-block;
  width: 3.2rem;
  height: 1.3rem;
  &>input{
    opacity: 0;
    width: 0;
    height: 0;
  }
  &>.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #a0aec0;
    transition: .4s;
  }
  &>.slider:before {
    position: absolute;
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    left: -0.1rem;
    bottom: -0.15rem;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  &>input:checked + .slider {
    background-color: #2196F3;
  }
  &>input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  &>input:checked + .slider:before {
    transform: translateX(2rem);
  }
  &>.slider.round{
    border-radius: 34px;
  }
  &>.slider.round:before{
    border-radius: 50%;
  }
`;

const SwitchLabel = styled.span`
  margin-left: 0.5rem;
`;
function SwitchButton({value, onChange, label}){
    const handleChange = () => {
        if (value == 1)
            onChange(0)
        else
            onChange(1)
    }
    return <SwitchWrapper>
        <FormSwitch>
            <input type="checkbox" checked={value == 1} onChange={handleChange} />
            <span className="slider round"></span>
        </FormSwitch>
        <SwitchLabel>{label}</SwitchLabel>
    </SwitchWrapper>
}

export default SwitchButton;