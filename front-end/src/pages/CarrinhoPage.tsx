import React, { useMemo, useState } from 'react'
import { Button, Header, ItemContent, ItemDescription, ItemHeader, ItemImage, ItemMeta, TransitionablePortal } from 'semantic-ui-react'
import styled from 'styled-components'
import { DescricaoProduto } from './PizzasPage'
import { ItensVendaProps } from '../components/util/PropsUtils'
import { useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'

const CarrinhoInitialValues = [
    {
        nome: 'teste',
        image:  "src/components/images/LogoK.PNG",
        preco: {
            t: 'Grande',
            p: 30,
        },
        quantidade: 2,
    },
    {
        nome: 'outro',
        image:  "src/components/images/LogoK.PNG",
        preco: {
            t: 'Grande',
            p: 30,
        },
        ingredientes: [
            'tomate', 'azeitona', 'cebola', 'pimentao', 'ovo'
        ],
        quantidade: 2,
    },
    {
        nome: 'Coca Cola',
        image:  "src/components/images/LogoK.PNG",
        preco: {
            t: '2 lt',
            p: 10,
        },
        quantidade: 1,
    },
]

const CarrinhoPage = ({props}) => {
    const carrinho = useStoreState((state) => state.pedido);
    const navigate = useNavigate();
    const [logado] = useState<boolean>(false);
    const valorTotal = useMemo(()=>{
        if(carrinho.length>0){
            let emptyList = carrinho.map((value)=>(value?.preco.p*value?.quantidade));
            return emptyList.reduce((total, valor) => total + valor);
        }
            return 0;
    },[])
  return <DivStyled>
                {carrinho.length<=0 &&
                    <Button
                        inverted color='red'
                    style={
                        {
                            width: '100%',
                        }
                    }
                    onClick={()=>navigate('/menu')}
                    content="Adicionar pedido"/>}
            {carrinho.length>0 && <div style={{
                display:'flex',
                flexDirection:'column',
                gap:'30px'
            }}>
                {carrinho?.map((itens, id, arr)=>{
                    return <DivItensCarrinho key={id}>
                        <ItemImage style={{position:"static"}} size='small' src={itens?.image??'src/components/images/mario.png'} />
                        <ItemContent 
                        style = {
                                    {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                    }
                                }>
                            <ItemHeader>
                                <Header style={{textTransform: 'uppercase', textAlign:'center'}}>
                                    {itens?.nome}
                                    </Header>
                            </ItemHeader>
                                <DescricaoPizzaCarrinho>
                                    {!!itens?.ingredientes && <ItemDescription>
                                        <strong>Ingredientes: </strong>
                                        <p style={{textTransform:"uppercase", textAlign:'center'}}>
                                            {itens?.ingredientes.join(", ")}.</p>
                                        </ItemDescription>}
                                    <strong>Valores: </strong>
                                    <p style={{textAlign: 'center'}}>R$ {itens?.preco.p.toFixed(2)} x {itens?.quantidade} = R$ {(itens?.preco.p * itens?.quantidade).toFixed(2)}</p>
                                    <strong>Tamanho: </strong>
                                    <p style={{textAlign: 'center'}}>{itens?.preco?.t}</p>
                                </DescricaoPizzaCarrinho>
                            <ItemMeta
                            style={{
                                display:"flex",
                                paddingTop:'5px',
                                margin:"auto",
                            }}
                            >
                            </ItemMeta>
                        </ItemContent>
                    <Button style={{
                        margin:"top"
                    }} negative icon='trash alternate outline'
                        onClick={()=>arr.splice(id, 1)}/>
                    </DivItensCarrinho>
                })}
                
                <Header
                style={{
                    textAlign: 'center',
                    margin:'auto'}}
                >Total <p>R$ {valorTotal.toFixed(2)}</p></Header>
                <Endereco>
                    <strong>Endereço:</strong> <label>Rua jose antonio ferreira</label>
                </Endereco>
                <Button style={{
                    width:'100%'
                }} positive content='Enviar pedido' onClick={()=>{
                }}/>
            </div>}
        </DivStyled>
}

export default CarrinhoPage

const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: white;
    width: 600px;
    padding: 3rem;
    margin: 50px auto;
    border-radius: 20px;
`;

const DivItensCarrinho = styled.div`
    display: flex;
    gap: 20px;
    background-color: #c4c4c43b;
    padding: 10px;
    align-items: center;
    border-radius: 20px;
    width: 100%;
`;

const DescricaoPizzaCarrinho = styled(DescricaoProduto)`
    display: flex;
    flex-direction: column;
    margin: left;
    `;

const Endereco = styled.div`
    text-align: center;
`;