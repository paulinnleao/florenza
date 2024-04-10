import React from 'react'
import pizzas from './pizzas';
import styled from 'styled-components';
import { Button, Icon, Image } from 'semantic-ui-react';

export interface PizzaProps {
    image: string;
    nome: string;
    tamanhoPreco: {
        t: string,
        p: number,
    }[];
    ingredients: string[];
}

const PizzasPage = ({setPizzaModal, setOpenModal}:any) =>  {

   return <div style={{padding:"50px 0"}}>
    
    <h2>Tradicionais</h2>
      <CardPizza>
        {pizzas.tradicionais.map((pizza, id) => 
        <PizzaComponent key={id}>
            <Image style={{position: "static"}} src={pizza.image} size='small'/>
            <ElementosPizza>
              <p><strong>Pizza:</strong> {pizza.nome}</p>
              <div>
                  <p><strong>Ingredientes:</strong> {pizza.ingredients.map((ingrediente)=>`${ingrediente}, `)}</p>
                  <DescricaoPizza><strong>Valores:</strong> {pizza.tamanhoPreco.map((value, id)=> <div key={id}>
                    <p style={{textTransform:"uppercase"}}>{value.t}</p>
                    <p>R$ {value.p}</p>
                    <Button style={{position: "static"}} onClick={()=>{
                      setOpenModal(true)
                      setPizzaModal({...pizza, t: value.t, p: value.p})
                    }} icon='add to cart'/>
                  </div>)}
                </DescricaoPizza>
              </div>
            </ElementosPizza>
          </PizzaComponent>)
          }
        </CardPizza>

        <h2>Pizzas da Casa</h2>
        <CardPizza>
        {pizzas.pizzasDaCasa.map((pizza, id) => 
        <PizzaComponent key={id}>
            <Image style={{position: "static"}} src={pizza.image} size='small'/>
            <ElementosPizza>
              <p><strong>Pizza:</strong> {pizza.nome}</p>
              <div>
                  <p><strong>Ingredientes:</strong> {pizza.ingredients.map((ingrediente)=>`${ingrediente}, `)}</p>
                  <DescricaoPizza><strong>Valores:</strong> {pizza.tamanhoPreco.map((value, id)=> <div key={id}>
                    <p style={{textTransform:"uppercase"}}>{value.t}</p>
                    <p>R$ {value.p}</p>
                    <Button style={{position: "static"}} onClick={()=>{
                      setOpenModal(true)
                      setPizzaModal({...pizza, t: value.t, p: value.p})
                    }} icon='add to cart'/>
                  </div>)}
                </DescricaoPizza>
              </div>
            </ElementosPizza>
          </PizzaComponent>)
          }
        </CardPizza>

        <h2>Pizzas Doces</h2>
        <CardPizza>
        {pizzas.pizzasDoces.map((pizza, id) => 
        <PizzaComponent key={id}>
            <Image style={{position: "static"}} src={pizza.image} size='small'/>
            <ElementosPizza>
              <p><strong>Pizza:</strong> {pizza.nome}</p>
              <div>
                  <p><strong>Ingredientes:</strong> {pizza.ingredients.map((ingrediente)=>`${ingrediente}, `)}</p>
                  <DescricaoPizza><strong>Valores:</strong> {pizza.tamanhoPreco.map((value, id)=> <div key={id}>
                    <p style={{textTransform:"uppercase"}}>{value.t}</p>
                    <p>R$ {value.p}</p>
                    <Button style={{position: "static"}} onClick={()=>{
                      setOpenModal(true)
                      setPizzaModal({...pizza, t: value.t, p: value.p})
                    }} icon='add to cart'/>
                  </div>)}
                </DescricaoPizza>
              </div>
            </ElementosPizza>
          </PizzaComponent>)
          }
        </CardPizza>
      </div>
  
}

export default PizzasPage;

const CardPizza = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  padding: 3rem;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const DescricaoPizza = styled.div`
  display: flex;
  flex-direction: wrap;
  gap: 10px;
  justify-content: center;
`;
const ElementosPizza = styled.div`
  width: 350px;
`;
const PizzaComponent = styled.div`
  display: flex;
  gap: 10px;
`;