import { Button, Icon } from "semantic-ui-react";
import { Div } from "../components/util/utilStyledHtml";
import styled from "styled-components";

const FooterPage = () => {

    return (
        <Divstyled>
            <Div>
                <strong>Atendimento</strong> - Terça à Domingo das 18:00h às 23h00. 
            </Div>
            <Div>
                <Button href='https://maps.app.goo.gl/xk2aQFFqvJYV2ebu6'>
                    <Icon name="map marker" color="red" />
                    <strong>Endereço:</strong> Rua 1035, (Quadra , Lote) , Setor Pedro Ludovido, Goiânia-GO
                </Button>
            </Div>
            <Div>
                <Button color="instagram"
                        href='https://www.instagram.com/pizzariaflorenza01/'>
                    <Icon name="instagram" /> pizzariaflorenza01
                </Button>
                <Button color="green"
                        href='https://wa.me/5562982798704'>
                    <Icon name="whatsapp" /> +55 (62) 98279 - 8704
                </Button>
                <Button color="blue"
                        href="tel:+556239418505">
                    <Icon name="text telephone" /> +55 (62) 3941 - 8505
                </Button>
            </Div>
        </Divstyled>
    );
}

export default FooterPage;

const Divstyled = styled(Div)`
    padding: 0.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: medium;
    gap: 0.5rem;
    width: 100%;
    position: sticky;
    bottom: 0;
    left: 0;
    background-color: #404040;
`;