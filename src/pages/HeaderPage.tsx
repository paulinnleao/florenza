import { Button, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import '../components/styles/HeaderStyled.css'
import { Div } from "../components/util/utilStyledHtml";
import { useEffect } from "react";
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

const HeaderPage = () => {
    return <DivStyled>
                 <Image src={LogoK} size='mini' />
                 <Nav>
                     {elementosHeader.map((value, id)=><NavLink
                         key={id}
                         style={({ isActive, isPending, isTransitioning }) => {
                             return {
                                color:"white",
                                backgroundColor: isActive?'#ff5050':'#4833ff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                             };
                         }}
                         to={`/${value.link}`}
                         >
                            {value.nome}
                     </NavLink>)}
                    
                 </Nav>
         </DivStyled>
    
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