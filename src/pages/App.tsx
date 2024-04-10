import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import { HomePage } from './HomePage';
import MenuPage from './MenuPage';

import '../components/styles/AppStyled.css'
import FooterPage from './FooterPage';
import { useState } from 'react';
const App = () => {
    const [paginaAtualHeader, setPaginaAtualHeader] = useState<string>('Inicio');
    return (
        <>
            <Body >
                <BrowserRouter>
                    <Header>
                        <HeaderPage paginaAtualHeader={paginaAtualHeader} setPaginaAtualHeader={setPaginaAtualHeader} />
                    </Header>
                    <Body>
                            <Routes>
                                <Route path="/home" element={<HomePage />}/>
                                <Route path="/menu" element={<MenuPage />}/>
                            </Routes>
                    </Body>
                    <Footer>
                        <FooterPage />
                    </Footer>
                    
                </BrowserRouter>
            </Body>
        </>
    )

}

export default App;




const Header = styled.div`
    padding: 0.9rem;
    position: sticky; 
    top: 0;
    background-color: #404040;
    border-bottom: solid 2px black;
    `;
const Footer = styled.div`
    background-color: #404040;
    position: sticky; 
    bottom: 0;
`;
const Body = styled.div`
    background-color: #404040;
    /* height: 100vh; */
    margin:auto;
`;