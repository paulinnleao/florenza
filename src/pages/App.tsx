import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import { HomePage } from './HomePage';
import MenuPage from './MenuPage';

import '../components/styles/AppStyled.css'
import FooterPage from './FooterPage';
import { useState } from 'react';
//import { FundoSite } from '../components/images';
import FundoSite from '../components/images/FundoSite.png'
const App = () => {
    const [paginaAtualHeader, setPaginaAtualHeader] = useState<string>('Inicio');
    return <Body style={{backgroundImage:FundoSite}}>
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
}

export default App;




const Header = styled.div`
    padding: 0.9rem;
    position: sticky; 
    top: 0;
    border-bottom: solid 2px black;
    background-image: url('src/components/images/FundoSite.png');
    `;
    
const Body = styled.div`
    margin:auto;
    width: 100%;
    height: 100%;
`;
const Footer = styled.div`
    /* position: sticky;  */
    bottom: 0;
`;