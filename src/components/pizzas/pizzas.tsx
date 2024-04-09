import {PizzaProps} from "./PizzasPage"
interface PizzaCadastro {
    tradicionais : PizzaProps[];
    pizzasDaCasa : PizzaProps[];
    pizzasDoces : PizzaProps[];
}

const pizzas : PizzaCadastro = {
    "tradicionais" : [
        {
            nome: "calabresa",
            tamanhoPreco: [
                {
                    t: "pequena",
                    p: 38.00,
                },
                {
                    t: "media",
                    p: 48.00,
                },
                {
                    t: "grande",
                    p: 53.00,
                }
            ],
            ingredients: [
                'calabresa',
                'tomate',
                'molho de tomate',
                'queijo',
            ]
        }
        
    ],
    "pizzasDaCasa" : [
        {
            nome: "catupiry",
            tamanhoPreco: [
                {
                    t: "pequena",
                    p: 38.00,
                },
                {
                    t: "media",
                    p: 48.00,
                },
                {
                    t: "grande",
                    p: 53.00,
                }
            ],
            ingredients: [
                'calabresa',
                'tomate',
                'molho de tomate',
                'queijo',
            ]
        }
        
    ],
    "pizzasDoces" : [
        {
            nome: "calabresa",
            tamanhoPreco: [
                {
                    t: "pequena",
                    p: 38.00,
                },
                {
                    t: "media",
                    p: 48.00,
                },
                {
                    t: "grande",
                    p: 53.00,
                }
            ],
            ingredients: [
                'calabresa',
                'tomate',
                'molho de tomate',
                'queijo',
            ]
        }
        
    ]
}

export default pizzas;

