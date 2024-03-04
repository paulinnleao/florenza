import { Image, List, ListContent, ListHeader, ListItem } from "semantic-ui-react";
import { Div } from "../components/util/utilStyledHtml";


const  MenuPage = () => {
    return (
        <Div>
            <List animated verticalAlign="middle" >
                <ListItem>
                    <Image src="../components/images/logo.jpeg"/>
                    <ListContent>
                        <ListHeader>
                            <strong>My name is</strong>
                        </ListHeader>
                    </ListContent>
                </ListItem>
            </List>
        </Div>
    ); 

    }

export default MenuPage;