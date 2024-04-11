export interface AdicionalProps {
    ingrediente: string,
    quantidade: number,
}[];

export interface PizzaProps {
    image: string;
    nome: string;
    tamanhoPreco: {
        t: string,
        p: number,
    }[];
    ingredients: string[];
};