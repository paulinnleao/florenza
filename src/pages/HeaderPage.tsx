import { Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import '../components/styles/HeaderStyled.css'

const imagemLogo = '../components/images/LogoK.png';
const HeaderPage = () => {

    return (
        <>
            <Image src={imagemLogo} size="tiny" verticalAlign = 'middle' />
            <Nav>
                <NavLinkStyled
                    to="/home end"
                    className={(isActive : boolean) => (isActive ? "actiive" : undefined)}>
                        Inicio
                </NavLinkStyled>
                <NavLinkStyled
                    to="/menu end"
                    className={(isActive : boolean) => (isActive ? "actiive" : undefined)}>
                        Cardápio
                </NavLinkStyled>
            </Nav>
        </>
    )
}

export default HeaderPage;


const Nav = styled.nav``;

const NavLinkStyled = styled(NavLink)`
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "red" : "black",
    viewTransitionName: isTransitioning ? "slide" : "",
`;