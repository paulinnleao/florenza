import React, { useState } from 'react'
import { Button, Form, Header, Modal, ModalContent, ModalHeader } from 'semantic-ui-react'
import styled from 'styled-components'
import ModalCadastro from './ModalCadastro';

const ModalLoginCadastro = ({openModal, setOpenModal}:any) => {
    const [modalCadastro, setModalCadastro] = useState(false);

  return <div>
            <Modal 
            onClose={() => setOpenModal(false)}
            onOpen={() => setOpenModal(true)}
            open={openModal}
            dimmer={"blurring"}
            size='tiny'
            style={{backgroundColor: "black", color:"white", textAlign:"center"}}
            >
                <ModalHeader>Login</ModalHeader>
                <ModalContent>
                    <Form>
                        <Header>Usuário</Header>
                        <input />
                        <Header>Senha</Header>
                        <input />
                        <Button style={{marginTop:'15px'}} positive content='Entrar'/>
                    </Form>
                </ModalContent>
                <ModalContent style={{
                    color:'black',
                    textAlign:'center',
                }}>
                    <br/>
                    <label>Não possui conta ainda? <A onClick={()=>{
                            setModalCadastro(true)
                        }}>clique aqui</A> para cadastar</label>
                </ModalContent>
        </Modal>
        {modalCadastro && <ModalCadastro modalCadastro={modalCadastro} setModalCadastro={setModalCadastro} />}
        </div>
}

export default ModalLoginCadastro

const A = styled.a`
    cursor: pointer;
`;