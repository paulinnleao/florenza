import { Field, Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Header, Icon, Input, Modal, ModalContent, ModalHeader, Progress } from 'semantic-ui-react'
import styled from 'styled-components';
import * as Yup from 'yup';

const ModalCadastro = ({modalCadastro, setModalCadastro}:any) => {
    const criarContaSchema = Yup.object().shape({
        email: Yup.string().email("Email inválido!").required("Obrigatório"),
        nome: Yup.string().min(2).max(50).required("Obrigatório!"),
        sobrenome: Yup.string().min(2).max(50).required("Obrigatório!"),
        dtNascimento: Yup.string().datetime().required("Obrigatório!"),
        cpf: Yup.string().min(11).max(11).required("Obrigatório!"),
        endereco: Yup.string().max(50).required("Obrigatório!"),
        cep: Yup.string().min(8).max(8).required("Obrigatório!"),
        setor: Yup.string().max(50).required("Obrigatório!"),
        complemento:Yup.string().max(50).required("Obrigatório!"),
        numero: Yup.number().min(11).max(11).required("Obrigatório!"),

    });

    const formik = useFormik ({
        initialValues: {
            email: '',
            nome: '',
            sobrenome: '',
            dtNascimento: '',
            cpf: '',
            endereco: '',
            cep:'',
            setor:'',
            complemento:'',
            numero: '',
        },
        validationSchema: criarContaSchema,
        onSubmit: (values) => {
            console.log("Olha só: ");
            console.log(values);
        },
    })
    const [colorBar, setColorBar] = useState(0);

  return <Modal
            onClose={() => setModalCadastro(false)}
            onOpen={() => setModalCadastro(true)}
            open={modalCadastro}
            dimmer={"blurring"}
            size='small'
            style={{backgroundColor: "black", color:"white", textAlign:"center"}}
            >
                <ModalHeader>Cadastro</ModalHeader>
                <ModalContent >
                    <form onSubmit={formik.handleSubmit}>
                        <InputsJuntos>
                            <InputStyled
                                        id="nome"
                                        label="Nome"
                                        name="nome"
                                        placeholder="Nome"
                                        icon="spy"
                                        error={formik.touched.nome && Boolean(formik.errors.nome)}
                                        onChange={formik.handleChange}
                                        />
                            <InputStyled
                                        id="sobrenome"
                                        label="Sobrenome"
                                        name="sobrenome"
                                        placeholder="Sobrenome"
                                        icon="spy"
                                        onChange={formik.handleChange}
                                        />
                    </InputsJuntos>
                            <InputsJuntos>
                                <InputStyled
                                            id="dtNascimento"
                                            label="Data de Nascimento"
                                            name="dtNascimento"
                                            type="date"
                                            placeholder="Data de nascimento"
                                            onChange={formik.handleChange}
                                            error={formik.touched.dtNascimento && Boolean(formik.errors.dtNascimento)}
                                            />
                                <InputStyled
                                            // <Icon name='whatsapp'/>
                                            id="numero"
                                            label="Número"
                                            icon="whatsapp"
                                            name="nome"
                                            placeholder="Nome"
                                            onChange={formik.handleChange}
                                            />
                            </InputsJuntos>
                            <InputsJuntos>
                                <InputStyled
                                            id="email"
                                            label="Email"
                                            icon="mail"
                                            name="email"
                                            placeholder="exemplo@exemplo.com.br"
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            />
                                            
                                <InputStyled
                                            id="cpf"
                                            label="CPF"
                                            name="cpf"
                                            placeholder="000.000.000-00"
                                            icon="id badge"
                                            onChange={formik.handleChange}
                                            />
                            </InputsJuntos>
                            <Header>{<Icon name='map pin'/>}Endereço</Header>
                            <InputsJuntos>
                                <InputStyled
                                            id="cep"
                                            label="CEP"
                                            name="cep"
                                            placeholder="00.000-000"
                                            onChange={formik.handleChange}
                                            icon="home"
                                            />
                                <InputStyled
                                            id="setor"
                                            label="Setor"
                                            name="setor"
                                            placeholder="Setor"
                                            onChange={formik.handleChange}
                                            icon="road"
                                            />
                            </InputsJuntos>
                                <Header>Complemento</Header>
                                <InputStyled
                                            id="complemento"
                                            label="Complemento"
                                            name="complemento"
                                            placeholder="Rua x, Quadra x, Lote x, Casa x"
                                            onChange={formik.handleChange}
                                            icon="map"
                                            />
                            <Button type='submit' onClick={()=>{
                                if(colorBar>=100){
                                    console.log('Jaxk')
                                }
                            }} style={{margin:'10px'}} positive content='Enviar' />
                    </form>
                    <Progress style={{marginTop:"10px"}} percent={colorBar} color={colorBar<=25?'red':colorBar<=50?'orange':colorBar<=98?'yellow':'green'}/>
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

const InputStyled = styled(Input)`
    text-align: center;
`;