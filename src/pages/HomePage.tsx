import {Button, Image} from 'semantic-ui-react';
import {useNavigate} from "react-router-dom";
import { Div } from '../components/util/utilStyledHtml';

const backgroundImage = '../components/images/planoDeFundo.jpeg'

export const  HomePage = () => {

    const navigate = useNavigate();
    return (
        <Div>
            <Image src={backgroundImage}/>
            <Button 
            size = 'massive'
            onClick={() => navigate("/menu")}>
                Clique aqui para ver o cardápio
            </Button>
        </Div>
    )

};

