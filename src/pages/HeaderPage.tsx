import { Button, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import '../components/styles/HeaderStyled.css'
import { Div } from "../components/util/utilStyledHtml";
import { useEffect, useState } from "react";
import { LogoK } from "../components/images";

const HeaderPage = () => {
    const [ativo, setAtivo] = useState<string>('inicio');

    useEffect(()=>{},[ativo]);
    return (
        <DivStyled>
                <Image src={LogoK} size='small' />
                <Nav>
                    <NavLink
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            backgroundColor: "rgb(0,0,0,0)",
                            padding: '0',
                            };
                        }}
                        to="/home"
                        >
                            <Button onClick={()=>setAtivo('inicio')} color={(ativo==='inicio')?'blue':'red'}>
                                Inicio
                            </Button>
                    </NavLink>
                    <NavLink
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            backgroundColor: "rgb(0,0,0,0)",
                            padding: '0',
                            };
                        }}
                        to="/menu"
                        >
                            <Button onClick={()=>setAtivo('cardapio')} color={(ativo==='cardapio')?'blue':'red'}>
                                Cardápio
                            </Button>
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