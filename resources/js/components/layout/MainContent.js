import styled from "styled-components";
import MainMenu from "../menu/main/MainMenu";

const StyledMainContent = styled.div.attrs({className: 'main-content'})`
  flex: 1 1 auto;
  background-color: #f8fafc;
  padding: 40px 15px 15px;
`;

const MenuView = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #a0aec0;
`;

function MainContent(){
    return <StyledMainContent>
        <MenuView>
            <MainMenu />
        </MenuView>
    </StyledMainContent>
}

export default MainContent;