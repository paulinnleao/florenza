import { CocaCola, Mostarda } from "../images/ImagensProdutos/ImagensProdutos";
import { ProdutosProps } from "../util/PropsUtils";

const produtos : ProdutosProps = [
    {
        categoria: 'Bebidas',
        produtos: [
            {
                nome: 'Coca Cola',
                tamanhoPreco: [
                    { t: '2 lt', p: 10 },
                    { t: '1 lt', p: 7 },
                    { t: 'lata', p: 5 }
                ],
                image: CocaCola
            },
            {
                nome: 'Pepsi',
                tamanhoPreco: [
                    { t: '2 lt', p: 9 },
                    { t: '1 lt', p: 6 },
                    { t: 'lata', p: 4 }
                ],
                image: 'Pepsi'
            },
            {
                nome: 'Guaraná Antarctica',
                tamanhoPreco: [
                    { t: '2 lt', p: 10 },
                    { t: '1 lt', p: 7 },
                    { t: 'lata', p: 5 }
                ],
                image: 'GuaranaAntarctica'
            }
        ]
    },
    {
        categoria: 'Molhos',
        produtos: [
            {
                nome: 'Mostarda',
                tamanhoPreco: [
                    { t: 'Tamanho único', p: 1 }
                ],
                image: Mostarda
            },
            {
                nome: 'Ketchup',
                tamanhoPreco: [
                    { t: 'Tamanho único', p: 1 }
                ],
                image: 'Ketchup'
            },
            {
                nome: 'Maionese',
                tamanhoPreco: [
                    { t: 'Tamanho único', p: 1.5 }
                ],
                image: 'Maionese'
            }
        ]
    },
    {
        categoria: 'Sobremesas',
        produtos: [
            {
                nome: 'Sorvete de Chocolate',
                tamanhoPreco: [
                    { t: 'Sundae', p: 6 },
                    { t: 'Pote 1 kg', p: 15 },
                    { t: 'Pote 2 kg', p: 25 }
                ],
                image: 'SorveteChocolate'
            },
            {
                nome: 'Pudim de Leite',
                tamanhoPreco: [
                    { t: 'Tamanho único', p: 8 }
                ],
                image: 'PudimLeite'
            },
            {
                nome: 'Torta de Limão',
                tamanhoPreco: [
                    { t: 'Fatia', p: 4 },
                    { t: 'Tamanho inteiro', p: 20 }
                ],
                image: 'TortaLimao'
            }
        ]
    }
]

export default produtos;