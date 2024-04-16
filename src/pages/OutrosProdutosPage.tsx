import { Button, Form, Header, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemImage, ItemMeta } from "semantic-ui-react";
import { ProdutosProps } from "../components/util/PropsUtils";
import { useState } from "react";
import styled from "styled-components";
import { DescricaoProduto } from "./PizzasPage";
import produtos from "../components/produtos/produtos";
import { useStoreActions } from "easy-peasy";


const OutrosProdutosPage = () => {
    
    const adicionaPedido = useStoreActions<any>((actions)=>actions.adicionar);
    const [quantidade, setQuantidade] = useState<number>(1);
    const [itemSelecionado, setItemSelecionado] = useState();
    return <div style={{padding:'2rem'}}>
        {!!produtos && produtos.map((value, id)=>
                <DivStyled key={id} style={{paddingBottom: '2rem'}}>
                    <Header size='huge' block>{value.categoria}</Header>
                    <ItemGroup>
                        {value.produtos.map((produto, id) => 
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
                                    <ItemImage style={{position:"static"}} size='small' src={produto.image} />
                                    <ItemContent>
                                    <ItemHeader style={{}} >{produto.nome}</ItemHeader>
                                    <ItemMeta>
                                    <DescricaoProduto><strong>Valores:</strong> {produto.tamanhoPreco.map((value, id)=> <div key={id}>
                                            <p style={{textTransform:"uppercase"}}>{value.t}</p>
                                            <p>R$ {value.p}</p>
                                            <Button style={{position: "static"}} onClick={()=>{
                                                setItemSelecionado( () => {
                                                    return {
                                                        t: value.t,
                                                        p: value.p,
                                                    }
                                                })
                                            }} icon='add to cart'/>
                                        </div>)}
                                        </DescricaoProduto>
                                    </ItemMeta>
                                    
                                    <ItemExtra>
                                    <div style={{display:"flex", gap:"10px", alignItems: "center"}}>
                                        <Form style={{display:"flex", gap:"10px"}}>
                                            <Button icon="minus" color="red" onClick={()=>(setQuantidade(quantidade-1))}/>
                                            <input disabled style={{margin:"auto", width:'80px', textAlign:'center'}} placeholder={`${quantidade}`}  />
                                            <Button icon="plus" color="green" onClick={()=>(setQuantidade(quantidade+1))}/>
                                        </Form>
                                        <Button positive content='Adicionar' onClick={() => {
                                            if(quantidade > 0){
                                                adicionaPedido(
                                                    {
                                                        nome: produto?.nome,
                                                        image:  produto?.image,
                                                        preco: {
                                                            t: itemSelecionado?.t,
                                                            p: itemSelecionado?.p,
                                                        },
                                                        quantidade: quantidade,
                                                    }
                                                )
                                            }
                                        }} />
                                    </div>
                                    </ItemExtra>
                                    </ItemContent>
                            </Item>
                            
                        )}
                    </ItemGroup>
                </DivStyled>
            )
        }
        
    </div>

}

export default OutrosProdutosPage;

const DivStyled = styled.div`

`;