import { OutraLogo } from "../images";
import { PizzaProps } from "../util/PropsUtils";

interface PizzaCadastro {
    tradicionais : PizzaProps[];
    pizzasDaCasa : PizzaProps[];
    pizzasDoces : PizzaProps[];
}

const pizzas : PizzaCadastro = {
    "tradicionais" : [
        {
            image: OutraLogo,
            nome: "calabresa",
            tamanhoPreco: [
                {
                    t: "pequena",
                    p: 38.00,
                },
                {
                    t: "media",
                    p: 48.37,
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
        },
        {
            image: OutraLogo,
            nome: "calabresa",
            tamanhoPreco: [
                {
                    t: "pequena",
                    p: 38.00,
                },
                {
                    t: "media",
                    p: 48.37,
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
        },
        {
            image: OutraLogo,
            nome: "calabresa",
            tamanhoPreco: [
                {
                    t: "pequena",
                    p: 38.00,
                },
                {
                    t: "media",
                    p: 48.37,
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
        },
        {
            image: OutraLogo,
            nome: "calabresa",
            tamanhoPreco: [
                {
                    t: "pequena",
                    p: 38.00,
                },
                {
                    t: "media",
                    p: 48.37,
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
        },
        
    ],
    "pizzasDaCasa" : [
        {
            image: OutraLogo,
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
            image: OutraLogo,
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

