import { Button, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import '../components/styles/HeaderStyled.css'
import { Div } from "../components/util/utilStyledHtml";
import { useEffect, useState } from "react";
import { LogoK } from "../components/images";

interface ElementosHeaderProps {
    nome: string;
    link: string;
}

const elementosHeader: ElementosHeaderProps[] = [
 {
    nome: 'Inicio',
    link: 'home',

 },
 {
    nome: 'Cardápio',
    link: 'menu',
 },
 {
    nome: 'Sacola',
    link: 'sacola',
 }
]

const HeaderPage = ({paginaAtualHeader, setPaginaAtualHeader}:any) => {

    useEffect(()=>{},[paginaAtualHeader]);
    return (
        <DivStyled>
                <Image src={LogoK} size='mini' />
                <Nav>
                    {elementosHeader.map((value, id)=><NavLink
                        key={id}
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            backgroundColor: "rgb(0,0,0,0)",
                            padding: '0',
                            };
                        }}
                        to={`/${value.link}`}
                        >
                            <Button onClick={()=>setPaginaAtualHeader(value.nome)} color={(paginaAtualHeader===value.nome)?'red':'blue'}>
                                {value.nome}
                            </Button>
                    </NavLink>)}
                    
                </Nav>
        </DivStyled>
    )
}

export default HeaderPage;

const DivStyled = styled(Div)`
    display: flex;
    justify-content: flex-start;
    gap: 500px;
`;
const Nav = styled.nav`
    display: flex;
`;