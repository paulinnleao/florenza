import { Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import '../components/styles/HeaderStyled.css'
import { Div } from "../components/util/utilStyledHtml";

const imagemLogo = '../components/images/LogoK.png';
const HeaderPage = () => {

    return (
        <DivStyled>
                <Image src={imagemLogo} size="tiny" verticalAlign = 'middle' floated="left" />
                <Nav>
                    <NavLink
                        to="/home"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                            fontSize:"medium",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                        >
                            Inicio
                    </NavLink>
                    <NavLink
                        to="/menu"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "white",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                        >
                            Cardápio
                    </NavLink>
                </Nav>
        </DivStyled>
    )
}

export default HeaderPage;

const DivStyled = styled(Div)`
`;
const Nav = styled.nav`
    display: flex;
`;