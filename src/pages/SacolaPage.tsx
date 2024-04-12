import React, { useState } from 'react'
import { Button, ItemContent, ItemDescription, ItemHeader, ItemImage, ItemMeta } from 'semantic-ui-react'
import styled from 'styled-components'
import { DescricaoPizza } from './PizzasPage'
import { ItensVendaProps } from '../components/util/PropsUtils'
import { useNavigate } from 'react-router-dom'

const SacolaPage = ({props}) => {

    
    const navigate = useNavigate();
    // const [ itens ] = useState<ItensVendaProps>({...props});
    const [ carrinho ] = useState<ItensVendaProps[]>([]);
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
                return <div key={id}>
                    <ItemImage style={{position:"static"}} size='small' src={itens?.image??'src/components/images/mario.png'} />
                    <ItemContent>
                    <ItemHeader>{itens?.nome}mock</ItemHeader>
                    <ItemMeta>
                    <DescricaoPizza>
                        {!!itens?.ingredientes && <ItemDescription>
                            <p><strong>Ingredientes: </strong><label style={{textTransform:"uppercase"}}>
                                {itens?.ingredientes.join(", ")}
                                .</label></p>
                            </ItemDescription>}
                        <strong>Valores: </strong>
                        R$ {itens?.preco.p} x {itens?.quantidade} = R$ {itens?.preco.p * itens?.quantidade}.
                        </DescricaoPizza>
                    </ItemMeta>
                    <ItemMeta
                    style={{
                        display:"flex",
                        justifycontent: "flex-end",
                    }}
                    >
                        <Button positive content="aprovar"/>
                        <Button negative content="excluir"/>
                    </ItemMeta>
                    </ItemContent>
                </div>
            })}
        </DivStyled>
}

export default SacolaPage

const DivStyled = styled.div`
    display: flex;
    background-color: white;
    width: 600px;
    padding: 3rem;
    margin: 50px auto;
`;