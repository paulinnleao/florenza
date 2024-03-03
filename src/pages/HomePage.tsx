import {Button} from 'semantic-ui-react';
import {useNavigate} from "react-router-dom";

export const  HomePage = () => {

    const history = useNavigate();
    const handleClick = () => {
        history.push("/menu");
    }
    return (
        <>
            <Button 
            size = 'massive'
            onClick={handleClick}>
                Clique aqui para ver o menu
            </Button>
        </>
    )

};