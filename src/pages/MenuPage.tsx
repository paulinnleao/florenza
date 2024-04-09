import { Image, List, ListContent, ListHeader, ListItem } from "semantic-ui-react";
import { Div } from "../components/util/utilStyledHtml";
import PizzasPage from "../components/pizzas/PizzasPage";


const  MenuPage = () => {
    return (
        <Div>
            <PizzasPage />
        </Div>
    ); 

    }

export default MenuPage;