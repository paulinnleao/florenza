import { OutraLogo } from "../images";
import { PizzaProps } from "../util/PropsUtils";

interface PizzaCadastro {
    tradicionais : PizzaProps[];
    pizzasDaCasa : PizzaProps[];
    pizzasDoces : PizzaProps[];
}

const pizzas : PizzaCadastro = {
    tradicionais : [
        {
            image: OutraLogo,
            nome: "Marguerita",
            tamanhoPreco: [
                {t: "pequena", p: 35.00},
                {t: "media", p: 45.00},
                {t: "grande", p: 50.00}
            ],
            ingredientes: ["molho de tomate", "queijo", "manjericão"]
        },
        {
            image: OutraLogo,
            nome: "Portuguesa",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["presunto", "queijo", "ovos", "cebola", "azeitonas"]
        },
        {
            image: OutraLogo,
            nome: "Quatro Queijos",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["queijo mussarela", "queijo provolone", "queijo gorgonzola", "queijo parmesão"]
        },
        {
            image: OutraLogo,
            nome: "Frango com Catupiry",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["frango desfiado", "catupiry", "milho", "azeitonas"]
        },
        {
            image: OutraLogo,
            nome: "Calabresa",
            tamanhoPreco: [
                {t: "pequena", p: 38.00},
                {t: "media", p: 48.37},
                {t: "grande", p: 53.00}
            ],
            ingredientes: ["calabresa", "tomate", "molho de tomate", "queijo"]
        },
        {
            image: OutraLogo,
            nome: "Napolitana",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["molho de tomate", "queijo", "tomate fatiado", "anchovas", "azeitonas"]
        },
        {
            image: OutraLogo,
            nome: "Pepperoni",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["molho de tomate", "queijo", "pepperoni"]
        },
        {
            image: OutraLogo,
            nome: "Margarita Especial",
            tamanhoPreco: [
                {t: "pequena", p: 45.00},
                {t: "media", p: 55.00},
                {t: "grande", p: 60.00}
            ],
            ingredientes: ["molho de tomate", "queijo mozzarella", "manjericão fresco", "azeite de oliva extra virgem"]
        },
        {
            image: OutraLogo,
            nome: "Vegetariana",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["pimentão", "cebola", "azeitonas pretas", "tomate", "queijo"]
        },
        {
            image: OutraLogo,
            nome: "Bacon Lovers",
            tamanhoPreco: [
                {t: "pequena", p: 45.00},
                {t: "media", p: 55.00},
                {t: "grande", p: 60.00}
            ],
            ingredientes: ["bacon", "queijo", "cebola caramelizada", "molho barbecue"]
        }
    ],
    pizzasDaCasa : [
        {
            image: OutraLogo,
            nome: "Especial da Casa",
            tamanhoPreco: [
                {t: "pequena", p: 45.00},
                {t: "media", p: 55.00},
                {t: "grande", p: 60.00}
            ],
            ingredientes: ["pepperoni", "pimentão", "cebola roxa", "molho barbecue"]
        },
        {
            image: OutraLogo,
            nome: "Vegetariana",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["pimentão", "cebola", "tomate", "azeitonas", "queijo"]
        },
        {
            image: OutraLogo,
            nome: "Toscana",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["linguiça calabresa", "cebola", "pimentão", "azeitonas", "molho de tomate"]
        },
        {
            image: OutraLogo,
            nome: "Frango com Catupiry",
            tamanhoPreco: [
                {t: "pequena", p: 45.00},
                {t: "media", p: 55.00},
                {t: "grande", p: 60.00}
            ],
            ingredientes: ["frango desfiado", "catupiry", "milho", "azeitonas"]
        },
        {
            image: OutraLogo,
            nome: "Pizza do Chefe",
            tamanhoPreco: [
                {t: "pequena", p: 47.00},
                {t: "media", p: 57.00},
                {t: "grande", p: 62.00}
            ],
            ingredientes: ["presunto", "mussarela", "azeitonas", "cebola", "ovo"]
        },
        {
            image: OutraLogo,
            nome: "Mexicana",
            tamanhoPreco: [
                {t: "pequena", p: 45.00},
                {t: "media", p: 55.00},
                {t: "grande", p: 60.00}
            ],
            ingredientes: ["carne moída temperada", "pimentão", "cebola", "chili", "molho de tomate"]
        },
        {
            image: OutraLogo,
            nome: "Palmito com Catupiry",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["palmito", "catupiry", "azeitonas", "cebola"]
        },
        {
            image: OutraLogo,
            nome: "Havaiana",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["presunto", "abacaxi", "queijo", "molho de tomate"]
        },
        {
            image: OutraLogo,
            nome: "Calabresa Acebolada",
            tamanhoPreco: [
                {t: "pequena", p: 38.00},
                {t: "media", p: 48.37},
                {t: "grande", p: 53.00}
            ],
            ingredientes: ["calabresa", "cebola", "molho de tomate", "queijo"]
        },
        {
            image: OutraLogo,
            nome: "Pizza Suprema",
            tamanhoPreco: [
                {t: "pequena", p: 47.00},
                {t: "media", p: 57.00},
                {t: "grande", p: 62.00}
            ],
            ingredientes: ["pepperoni", "linguiça calabresa", "presunto", "queijo", "molho de tomate"]
        }
    ],
    pizzasDoces : [
        {
            image: OutraLogo,
            nome: "Banana Caramelizada",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["banana caramelizada", "canela", "açúcar mascavo"]
        },
        {
            image: OutraLogo,
            nome: "Chocolate com Morango",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["chocolate ao leite", "morangos frescos", "chantilly"]
        },
        {
            image: OutraLogo,
            nome: "Doce de Leite com Coco",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["doce de leite", "coco ralado", "açúcar mascavo"]
        },
        {
            image: OutraLogo,
            nome: "Romeu e Julieta",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["goiabada cremosa", "queijo minas frescal"]
        },
        {
            image: OutraLogo,
            nome: "Creme de Avelã com Morango",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["creme de avelã", "morangos frescos", "chocolate branco ralado"]
        },
        {
            image: OutraLogo,
            nome: "Maçã com Canela",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["maçã fatiada", "canela", "açúcar mascavo"]
        },
        {
            image: OutraLogo,
            nome: "Prestígio",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["chocolate ao leite", "coco ralado", "chantilly"]
        },
        {
            image: OutraLogo,
            nome: "Banana com Chocolate",
            tamanhoPreco: [
                {t: "pequena", p: 40.00},
                {t: "media", p: 50.00},
                {t: "grande", p: 55.00}
            ],
            ingredientes: ["banana fatiada", "chocolate ao leite derretido", "granulado"]
        },
        {
            image: OutraLogo,
            nome: "Morango com Nutella",
            tamanhoPreco: [
                {t: "pequena", p: 45.00},
                {t: "media", p: 55.00},
                {t: "grande", p: 60.00}
            ],
            ingredientes: ["morangos frescos", "Nutella", "chantilly"]
        },
        {
            image: OutraLogo,
            nome: "Creme de Avelã com Banana",
            tamanhoPreco: [
                {t: "pequena", p: 42.00},
                {t: "media", p: 52.00},
                {t: "grande", p: 57.00}
            ],
            ingredientes: ["creme de avelã", "banana fatiada", "açúcar mascavo"]
        }
    ]
}
export default pizzas;