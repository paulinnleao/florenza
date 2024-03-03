import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import { HomePage } from './HomePage';
import MenuPage from './MenuPage';

import '../components/styles/AppStyled.css'
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
                                <Route patth="/menu" element={<MenuPage />} />
                            </Routes>
                    </Body>
                    <Footer>
                        
                    </Footer>
                    
                </BrowserRouter>
            </Body>
        </>
    )

}

export default App;




const Header = styled.div``;
const Footer = styled.div``;
const Body = styled.div`
    color: #404040;
`;