import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import { HomePage } from './HomePage';
import MenuPage from './MenuPage';
import '../components/styles/AppStyled.css'
import FooterPage from './FooterPage';
import CarrinhoPage from './CarrinhoPage';

const App = () => {
    return <div>
                <BrowserRouter>
                    <Header>
                        <HeaderPage />
                    </Header>
                    <Body>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/menu" element={<MenuPage/>}/>
                                <Route path="/carrinho" element={<CarrinhoPage props={''}/>}/>
                            </Routes>
                    </Body>
                    <Footer>
                        <FooterPage />
                    </Footer>
                    
                </BrowserRouter>
            </div>
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
`;
const Footer = styled.div`
    bottom: 0;
`;