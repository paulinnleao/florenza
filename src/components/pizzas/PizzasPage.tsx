import React from 'react'
import pizzas from './pizzas';

export interface PizzaProps {
    nome: string;
    tamanhoPreco: {
        t: string,
        p: number,
    }[];
    ingredients: string[];
}

const PizzasPage = () =>  {

   return <div>
      {pizzas.tradicionais.map((pizza, id) => <div key={id}>
          <p>Pizza: {pizza.nome}</p>
          <p>Ingredientes: {pizza.ingredients.map((ingrediente)=>`${ingrediente}, `)}</p>
          <div>Valores: {pizza.tamanhoPreco.map((value, id)=> <div key={id}>
            <p style={{textTransform:"uppercase"}}>{value.t}</p>
            <p>{value.p}</p>
          </div>)}</div>
        </div>)
        }
        
      </div>
  
}

export default PizzasPage