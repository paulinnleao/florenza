import React from 'react'
import pizzas from '../components/pizzas/pizzas';
import styled from 'styled-components';
import { Button, Header, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, ItemMeta } from 'semantic-ui-react';

const PizzasPage = ({setPizzaModal, setOpenModal}:any) =>  {

   return <div style={{padding:"2rem"}}>
        
        <Header color='black' size='huge' block>Tradicionais</Header>
        <ItemGroup style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              alignItems: 'center',
            }}>
        {pizzas.tradicionais.map((pizza, id) => 
          <Item  key={id} style={{
            width: '500px',
            backgroundColor: 'white',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            margin: 'auto',
            boxShadow: '0px 0px 10px 0px orange',
          }}>
            <ItemImage style={{position:"static"}} size='small' src={pizza.image} />
            <ItemContent>
              <ItemHeader style={{}} >{pizza.nome}</ItemHeader>
              <ItemMeta>
              <DescricaoPizza><strong>Valores:</strong> {pizza.tamanhoPreco.map((value, id)=> <div key={id}>
                    <p style={{textTransform:"uppercase"}}>{value.t}</p>
                    <p>R$ {value.p}</p>
                    <Button style={{position: "static"}} onClick={()=>{
                      setOpenModal(true)
                      setPizzaModal({...pizza, t: value.t, p: value.p})
                    }} icon='add to cart'/>
                  </div>)}
                </DescricaoPizza>
              </ItemMeta>
              <ItemDescription>
                <p><strong>Ingredientes: </strong><label style={{textTransform:"uppercase"}}>{pizza.ingredientes.join(", ")}.</label></p>
              </ItemDescription>
            </ItemContent>
          </Item>
          )}
    </ItemGroup>

    <Header color='black' size='huge' block>Pizzas da Casa</Header>
        <ItemGroup style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              alignItems: 'center',
            }}>
        {pizzas.pizzasDaCasa.map((pizza, id) => 
          <Item  key={id} style={{
            width: '500px',
            backgroundColor: 'white',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            margin: 'auto',
            boxShadow: '0px 0px 10px 0px orange',
          }}>
            <ItemImage style={{position:"static"}} size='small' src={pizza.image} />
            <ItemContent>
              <ItemHeader >{pizza.nome}</ItemHeader>
              <ItemMeta>
              <DescricaoPizza><strong>Valores:</strong> {pizza.tamanhoPreco.map((value, id)=> <div key={id}>
                    <p style={{textTransform:"uppercase"}}>{value.t}</p>
                    <p>R$ {value.p}</p>
                    <Button style={{position: "static"}} onClick={()=>{
                      setOpenModal(true)
                      setPizzaModal({...pizza, t: value.t, p: value.p})
                    }} icon='add to cart'/>
                  </div>)}
                </DescricaoPizza>
              </ItemMeta>
              <ItemDescription>
              <p><strong>Ingredientes: </strong><label style={{textTransform:"uppercase"}}>{pizza.ingredientes.join(", ")}.</label></p>
              </ItemDescription>
            </ItemContent>
          </Item>
          )}
    </ItemGroup>

    <Header color='black' size='huge' block>Pizzas Doces</Header>
        <ItemGroup style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              alignItems: 'center',
            }}>
        {pizzas.pizzasDoces.map((pizza, id) => 
          <Item  key={id} style={{
            width: '500px',
            backgroundColor: 'white',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            margin: 'auto',
            boxShadow: '0px 0px 10px 0px orange',
          }}>
            <ItemImage style={{position:"static"}} size='small' src={pizza.image} />
            <ItemContent>
              <ItemHeader >{pizza.nome}</ItemHeader>
              <ItemMeta>
              <DescricaoPizza><strong>Valores:</strong> {pizza.tamanhoPreco.map((value, id)=> <div key={id}>
                    <p style={{textTransform:"uppercase"}}>{value.t}</p>
                    <p>R$ {value.p}</p>
                    <Button style={{position: "static"}} onClick={()=>{
                      setOpenModal(true)
                      setPizzaModal({...pizza, t: value.t, p: value.p})
                    }} icon='add to cart'/>
                  </div>)}
                </DescricaoPizza>
              </ItemMeta>
              <ItemDescription>
              <p><strong>Ingredientes: </strong><label style={{textTransform:"uppercase"}}>{pizza.ingredientes.join(", ")}.</label></p>
              </ItemDescription>
            </ItemContent>
          </Item>
          )}
    </ItemGroup>

      </div>
}

export default PizzasPage;

export const DescricaoPizza = styled.div`
  display: flex;
  flex-direction: wrap;
  gap: 10px;
  justify-content: center;
`;