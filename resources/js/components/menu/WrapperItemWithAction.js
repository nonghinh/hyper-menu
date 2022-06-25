import MenuAction from "./MenuAction";
import {useState} from "react";
import styled from "styled-components";

const DivItem = styled.div`
  min-height: 20px;
`;
const LinkItem = styled.a`
  min-height: 20px;
`;
export default function WrapperItemWithAction(props){
    const {tagName, menuIndex} = props;
    const [showAction, setShowAction] = useState(false);
    const handleToggleAction = (show) => {
        console.log('fxx')
        setShowAction(show);
    }
    const tagProps = {... props};
    if (typeof tagProps.tagName !== "undefined")
        delete tagProps.tagName;
    if (typeof tagProps.menuIndex !== "undefined")
        delete tagProps.menuIndex;
    if (tagName == 'a'){

        return <LinkItem {...tagProps} onMouseEnter={()=>handleToggleAction(true)} onMouseLeave={()=>handleToggleAction(false)}>
            {showAction && <MenuAction menuIndex={menuIndex} />}
            {props.children}
        </LinkItem>
    }
    return <DivItem {...tagProps} onMouseEnter={()=>handleToggleAction(true)} onMouseLeave={()=>handleToggleAction(false)}>
        {showAction && <MenuAction menuIndex={menuIndex} />}
        {props.children}
    </DivItem>
}