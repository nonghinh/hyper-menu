import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import styled from "styled-components";
import MainContent from "./layout/MainContent";

const AppWrapper = styled.div.attrs({className: 'app-wrapper'})`
        background-color: red;
    `;
const AppBody = styled.div`
      padding-top: 60px;
      background-color: #a0aec0;
    `;
const AppContent = styled.div`
      background-color: transparent;
      display: flex;
    `;

function App(props) {

    return <AppWrapper>
        <Header />
        <AppBody>
            <AppContent>
                <Sidebar />
                <MainContent></MainContent>
            </AppContent>
        </AppBody>
    </AppWrapper>
}

export default App;
