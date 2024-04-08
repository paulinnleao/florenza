import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import { HomePage } from './HomePage';
import MenuPage from './MenuPage';

import '../components/styles/AppStyled.css'
import FooterPage from './FooterPage';
const App = () => {

    return (
        <>
            <Body>
                <BrowserRouter>
                    <Header>
                        <HeaderPage />
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
    `;
const Footer = styled.div`
    background-color: #404040;
`;
const Body = styled.div`
    background-color: #404040;
`;