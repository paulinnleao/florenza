import { CocaCola, Mostarda } from "../images/ImagensProdutos/ImagensProdutos";
import { ProdutosProps } from "../util/PropsUtils";

const produtos : ProdutosProps = [
    {
        categoria: 'Bebidas',
        produtos: [
            {
                nome: 'Coca cola',
                tamanhoPreco: [
                    {
                        t: '2 lt',
                        p: 10,
                    },
                    {
                        t: '1 lt',
                        p: 7,
                    },
                    {
                        t: 'lata',
                        p: 5
                    }
                ],
                image: CocaCola
            }
        ]
    },
    {
        categoria: 'Molhos',
        produtos: [
            {
                nome: 'Mostarda',
                tamanhoPreco: [
                    {
                        t: 'Tamanho único',
                        p: 1
                    }
                ],
                image: Mostarda
            }
        ]
    }
]

export default produtos;