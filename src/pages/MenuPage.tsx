import { Button, Header, Image, List, ListContent, ListHeader, ListItem, Modal, ModalActions, ModalContent, ModalDescription, ModalHeader } from "semantic-ui-react";
import { Div } from "../components/util/utilStyledHtml";
import PizzasPage, { PizzaProps } from "../components/pizzas/PizzasPage";
import { useState } from "react";
import { LogoK } from "../components/images";
import styled from "styled-components";

const  MenuPage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [pizzaModal, setPizzaModal] = useState<PizzaProps>();
    console.log(pizzaModal)
    return (
        <Div>
            <PizzasPage setOpenModal={setOpenModal} setPizzaModal={setPizzaModal} />
            <Modal
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
                dimmer={"blurring"}
                style={{backgroundColor: "black", color:"white"}}
                >
                    
                    <ModalHeader>Pedido</ModalHeader>
                    <ModalContent image style={{width:"100%", gap:'20px', display:"flex", textAlign: "center", alignItems:"center"}}>
                        <Image size='medium' src={!! pizzaModal?.image ? pizzaModal?.image : LogoK} wrapped />
                        <ModalDescription style={{display:"flex",gap:"40px", flexDirection:"column"}}>
                        <Header style={{textTransform:"uppercase"}}>{pizzaModal?.nome}</Header>
                        <DivModal>
                            {pizzaModal?.ingredients.map((value)=><div style={{gap:"10px",textTransform:"uppercase", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Image size="mini" src="https://www.casadecarnespine.com.br/wp-content/uploads/2023/01/linguica-calabresa-defumada.jpg"/>
                                {value}
                                <div style={{display:"flex", gap:"10px", alignItems: "center"}}>
                                    <Button icon="minus" color="red" />
                                        Não sei
                                    <Button icon="plus" color="green" />
                                </div>
                            </div>)}
                        </DivModal>
                        </ModalDescription>
                    </ModalContent>
                    <ModalActions>
                        <Button content="Voltar" color='black' onClick={() => setOpenModal(false)} />
                        <Button
                        content="Adicionar"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpenModal(false)}
                        positive
                        />
                    </ModalActions>
                </Modal>
        </Div>
    ); 

    }

export default MenuPage;

const DivModal = styled.div`
    gap: 50px;
    color: black;
    display: flex;
    flex-direction: column;
`;