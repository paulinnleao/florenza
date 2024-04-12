import {Button} from 'semantic-ui-react';
import {useNavigate} from "react-router-dom";
import { Div } from '../components/util/utilStyledHtml';
import styled from 'styled-components';

export const  HomePage = () => {
    const navigate = useNavigate();
    return (
        <DivStyled >
            <Button 
            size = 'massive'
            style={{
                borderRadius: '100%',
                height:'450px',
                backgroundColor:'rgb(255, 255, 255, 0.1)',
                textShadow: '2px 2px #ffffff',
                color:'#000'
            }}
            content={'Clique aqui para ver o cardápio'}
            onClick={() => navigate("/menu")} />
        </DivStyled>
    )

};

const DivStyled = styled(Div)`
    margin: auto;
    background-image: url('src/components/images/pizzaHome.png');
    background-size: 31.25rem;
    background-position: center;
    background-repeat: no-repeat;
    height:500px;
    display: flex;
`;