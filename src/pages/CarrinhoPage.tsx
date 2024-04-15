import React, { useMemo, useState } from 'react'
import { Button, Header, ItemContent, ItemDescription, ItemHeader, ItemImage, ItemMeta, TransitionablePortal } from 'semantic-ui-react'
import styled from 'styled-components'
import { DescricaoPizza } from './PizzasPage'
import { ItensVendaProps } from '../components/util/PropsUtils'
import { useNavigate } from 'react-router-dom'

const CarrinhoInitialValues = [
    {
        nome: 'teste',
        image:  "src/components/images/LogoK.PNG",
        preco: {
            t: 'Grande',
            p: 30,
        },
        quantidade: 2,
        itemAprovado: false,
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
        itemAprovado: false,
    },
    {
        nome: 'Coca Cola',
        image:  "src/components/images/LogoK.PNG",
        preco: {
            t: '2 lt',
            p: 10,
        },
        quantidade: 1,
        itemAprovado: false,
    },
]

const CarrinhoPage = ({props}) => {

    
    const navigate = useNavigate();
    // const [ itens ] = useState<ItensVendaProps>({...props});
    const [carrinho, setCarrinho] = useState<ItensVendaProps[]>(CarrinhoInitialValues);
    const valorTotal = useMemo(()=>{
        let emptyList = carrinho.map((value)=>(value?.preco.p*value?.quantidade));
        return emptyList.reduce((total, valor) => total + valor);
    },[])
    const compraAprovada = useMemo(()=>{
        if(carrinho.some((value)=>value.itemAprovado===false)){
            return false;
        }
        return true;
    },[carrinho])
  return <DivStyled>
                {carrinho.length===0 &&
                    <Button
                        inverted color='red'
                    style={
                        {
                            width: '100%',
                        }
                    }
                    onClick={()=>navigate('/menu')}
                    content="Adicionar pedido"/>}
            {!!carrinho && carrinho?.map((itens, id)=>{
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
                            <Button positive content="aprovar" onClick={()=>{
                                setCarrinho((oldValues)=>{
                                    return {
                                        ...oldValues,
                                        itemAprovado: true
                                    }
                                })
                            }}/>
                            <Button negative content="excluir"/>
                        </ItemMeta>
                    </ItemContent>
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
            <Button positive content='Enviar pedido' onClick={()=>{
                if(compraAprovada)
                    console.log('Pedido enviado!');
            }}/>
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

const DescricaoPizzaCarrinho = styled(DescricaoPizza)`
    display: flex;
    flex-direction: column;
    margin: left;
    `;

const Endereco = styled.div`
    text-align: center;
`;