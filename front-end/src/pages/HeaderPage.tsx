import { Button, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import '../components/styles/HeaderStyled.css'
import { Div } from "../components/util/utilStyledHtml";
import { useEffect, useState } from "react";
import { LogoK } from "../components/images";
import ModalLoginCadastro from "./ModalLoginCadastro";

interface ElementosHeaderProps {
    nome: string;
    link: string;
}

const elementosHeader: ElementosHeaderProps[] = [
 {
    nome: 'Inicio',
    link: '',

 },
 {
    nome: 'Cardápio',
    link: 'menu',
 },
 {
    nome: 'Carrinho',
    link: 'carrinho',
 }
]

const HeaderPage = () => {
    const [openModal, setOpenModal] = useState(false);
    return <OtherDiv>
        <Image src={LogoK} size='mini' />
            <DivStyled>
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
                    {openModal && <ModalLoginCadastro openModal={openModal} setOpenModal={setOpenModal} />}
            </DivStyled>
            <Button positive content='Entrar' icon='sign-in'  onClick={()=>{setOpenModal(true);}}/>
        </OtherDiv>
    
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
const OtherDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;