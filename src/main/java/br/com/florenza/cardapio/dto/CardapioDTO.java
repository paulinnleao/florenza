package br.com.florenza.cardapio.dto;

import org.springframework.hateoas.RepresentationModel;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

public class CardapioDTO extends RepresentationModel<CardapioDTO> implements Serializable{

    @Serial
    private static final long serialVersionUID = 1L;

    private Long key;

    private String nome;

    private Double preco;

    private Date dataCadastro;

    private String status;

    private Boolean prod;

    private String tamanho;

    private List<PizzaDTO> pizzasLista = new ArrayList<PizzaDTO>();

    public CardapioDTO() {
    }

    public CardapioDTO(Long key, String nome, double preco, Date dataCadastro, String status, Boolean prod, String tamanho) {
        this.key = key;
        this.nome = nome;
        this.preco = preco;
        this.dataCadastro = dataCadastro;
        this.status = status;
        this.prod = prod;
        this.tamanho = tamanho;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CardapioDTO cardapio = (CardapioDTO) o;
        return Objects.equals(key, cardapio.key) && Objects.equals(nome, cardapio.nome) && Objects.equals(preco, cardapio.preco) && Objects.equals(dataCadastro, cardapio.dataCadastro) && Objects.equals(status, cardapio.status) && Objects.equals(prod, cardapio.prod) && Objects.equals(tamanho, cardapio.tamanho) && Objects.equals(pizzasLista, cardapio.pizzasLista);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key, nome, preco, dataCadastro, status, prod, tamanho, pizzasLista);
    }

    public Long getKey() {
        return key;
    }

    public void setKey(Long key) {
        this.key = key;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Boolean getProd() {
        return prod;
    }

    public void setProd(Boolean prod) {
        this.prod = prod;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public List<PizzaDTO> getPizzasLista() {
        return pizzasLista;
    }

    public void setPizzasLista(List<PizzaDTO> pizzasLista) {
        this.pizzasLista = pizzasLista;
    }
}
