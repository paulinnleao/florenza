import { Button, Form, Header, Image, Modal, ModalActions, ModalContent, ModalDescription, ModalHeader } from "semantic-ui-react";
import { Div } from "../components/util/utilStyledHtml";
import PizzasPage from "./PizzasPage";
import { useMemo, useState } from "react";
import { LogoK } from "../components/images";
import styled from "styled-components";
import { AdicionalProps, PizzaProps } from "../components/util/PropsUtils";

const  MenuPage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [pizzaModal, setPizzaModal] = useState<PizzaProps>();
    const adicional = useMemo<AdicionalProps>(
         () => {
            if(!!pizzaModal?.ingredients){
                return pizzaModal?.ingredients.map((value)=>{
                    return {
                        ingrediente: value,
                        quantidade: 0
                        }
                    });
                }
            return [
                {
                    ingrediente: 'nada',
                    quantidade: 0,
                }
            ]
    }, [pizzaModal]);
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
                    <ModalContent image style={{width:"100%", gap:'20px', display:"flex", textAlign: "center", alignItems:"center", justifyContent:"space-around"}}>
                        <Image size='medium' src={!! pizzaModal?.image ? pizzaModal?.image : LogoK} wrapped />
                        <ModalDescription style={{display:"flex",gap:"40px", flexDirection:"column"}}>
                        <Header style={{textTransform:"uppercase"}}>{pizzaModal?.nome}</Header>
                        <DivModal>
                            {pizzaModal?.ingredients.map((value, id)=><div key={id} style={{gap:"10px",textTransform:"uppercase", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Image size="mini" src="https://www.casadecarnespine.com.br/wp-content/uploads/2023/01/linguica-calabresa-defumada.jpg"/>
                                {value}
                                <div style={{display:"flex", gap:"10px", alignItems: "center"}}>
                                    <Form style={{display:"flex", gap:"10px"}}>
                                        <Button icon="minus" color="red" onClick={()=>{}}/>
                                        <input disabled style={{margin:"auto", width:'40px'}} placeholder={value===adicional?.ingrediente?`${adicional?.quantidade}`:`${0}`}  />
                                        <Button icon="plus" color="green" />
                                    </Form>
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