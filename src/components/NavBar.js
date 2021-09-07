import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Nav>
      <Logo>EST8</Logo>

      <MenuBars />
      <NavMenu>
      
      </NavMenu>

      <h1>NavBar</h1>
    </Nav>
  )
}

const Nav = styled.nav`
  height: 60px;
  background: blue;
`;

const Logo = styled(Link)`
  color: #fff;
`;

const MenuBars = styled.i``

const NavMenu = styled.div``

export default NavBar;