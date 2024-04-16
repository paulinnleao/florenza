import React, { useState } from 'react'
import { Button, Form, Header, Icon, Input, Modal, ModalContent, ModalHeader, Progress } from 'semantic-ui-react'
import styled from 'styled-components';

const ModalCadastro = ({modalCadastro, setModalCadastro}:any) => {
    const [colorBar, setColorBar] = useState(0);
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
                        <InputsJuntos>
                            <div>
                                <Header>Nome</Header>
                                <Input />
                            </div>
                            <div>
                                <Header>Sobrenome</Header>
                                <Input />
                            </div>
                        </InputsJuntos>
                        <InputsJuntos>
                            <div>
                                <Header>{<Icon name='calendar alternate outline'/>}Data de aniversário</Header>
                                <Input type='date'/>
                            </div>
                            <div>
                                <Header type="tel">{<Icon name='whatsapp'/>}Número</Header>
                                <Input />
                            </div>
                        </InputsJuntos>
                        <InputsJuntos>
                            <div>
                                <Header>{<Icon name='mail'/>}Email</Header>
                                <Input type="email" />
                            </div>
                            <div>
                                <Header>CPF</Header>
                                <Input maxLength={'11'} required='required' placeholder='xxx.xxx.xxx-xx' pattern={'[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}'}/>
                            </div>
                        </InputsJuntos>
                        
                        <Header>{<Icon name='map pin'/>}Endereço</Header>
                        <InputsJuntos>
                            <div>
                                <Header>CEP</Header>
                                <Input style={{marginBottom:'10px', width:'100%'}} />
                            </div>
                            <div>
                                <Header>Setor</Header>
                                <Input />
                            </div>
                        </InputsJuntos>
                        <Header>Complemento</Header>
                        <Input />
                    </Form>
                    <Button onClick={()=>{
                        if(colorBar>=100){
                            console.log('Jaxk')
                        }
                    }} style={{margin:'10px'}} positive content='Enviar' />
                    <Progress percent={colorBar} color={colorBar<=25?'red':colorBar<=50?'orange':colorBar<=99?'yellow':'green'}/>
                </ModalContent>
            </Modal>
}

export default ModalCadastro

const InputsJuntos = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
    margin: auto;
    justify-content: space-around;
`;