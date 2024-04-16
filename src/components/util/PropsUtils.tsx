export interface AdicionalProps {
    ingrediente: string;
    quantidade: number;
}[];

export interface PizzaProps {
    image: string;
    nome: string;
    tamanhoPreco: {
        t: string,
        p: number,
    }[];
    ingredientes: string[];
};

export interface ItensVendaProps {
    nome: string;
    image: string;
    preco: {
        t: string;
        p: number;
    };
    ingredientes?: string[];
    quantidade: number;
}[];

export interface ProdutosProps {
    categoria: string;
    produtos: [{
        nome: string;
        tamanhoPreco: {
            t: string;
            p: number;
        }[];
        image: string;
    }];
}[];