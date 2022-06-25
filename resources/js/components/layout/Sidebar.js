import styled from "styled-components";
import MenuForm from "../menu/MenuForm";

const SidebarWrapper = styled.div.attrs({className: 'sidebar'})`
      width: 350px;
      height: 100%;
      min-height: calc(100vh - 60px);
      position: relative;
      background-color: #fff;
      padding: 0.75rem;
      box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    `;

const SidebarHeader = styled.div.attrs({className: 'sidebar-header'})`
    width: 100%;
    min-height: 50px;
    background-color: #fff;
    color: #333;
  `;
const SidebarContent = styled.div.attrs({className: 'sidebar-content'})`
    width: 100%;
    min-height: 50px;
    background-color: #fff;
    color: #333;
  `;
const SidebarFooter = styled.div.attrs({className: 'sidebar-footer'})`
    width: 100%;
    min-height: 50px;
    background-color: #fff;
    color: #333;
  `;
function Sidebar(){

    return <SidebarWrapper>
        <SidebarHeader>
            Sidebar header
        </SidebarHeader>
        <SidebarContent>
            <MenuForm />
        </SidebarContent>
        <SidebarFooter>footer</SidebarFooter>
    </SidebarWrapper>
}

export default Sidebar;