import React from 'react'
import { Form, Header, Icon, Input, Modal, ModalContent, ModalHeader } from 'semantic-ui-react'

const ModalCadastro = ({modalCadastro, setModalCadastro}:any) => {
  return <Modal
            onClose={() => setModalCadastro(false)}
            onOpen={() => setModalCadastro(true)}
            open={modalCadastro}
            dimmer={"blurring"}
            size='tiny'
            style={{backgroundColor: "black", color:"white", textAlign:"center"}}
            >
                <ModalHeader>Cadastro</ModalHeader>
                <ModalContent >
                    <Form>
                        <Header>{<Icon name='text width'/>}Nome</Header>
                        <Input />
                        <Header>{<Icon name='whatsapp'/>}Número</Header>
                        <Input />
                        <Header>{<Icon name='calendar alternate outline'/>}Data de aniversário</Header>
                        <Input />
                        <Header>{<Icon name='map pin'/>}Endereço</Header>
                        <Input />
                    </Form>
                </ModalContent>
            </Modal>
}

export default ModalCadastro