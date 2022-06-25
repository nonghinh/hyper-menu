import styled from 'styled-components';
const NavBar = styled.div.attrs({className: 'nav-header'})`
      background-color: #ffffff;
      box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
      font-size: 14px;
      line-height: 60px;
      position: fixed;
      min-height: 50px;
      width: 100%;
      z-index: 9;
    `;
function Header(){

    return <NavBar>
        <div className="container-fluid">
            <span>Header</span>
        </div>
    </NavBar>
}

export default Header;