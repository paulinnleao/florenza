package br.com.florenza.cardapio.models;

import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "CARDAPIO")
public class Cardapio implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CARDAPIO")
    private Long id;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "PRECO")
    private Double preco;

    @Column(name = "DATA_CADASTRO")
    private Date dataCadastro;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "PROD")
    private Boolean prod;

    @Column(name = "TAMANHO")
    private String tamanho;

    @OneToMany(mappedBy = "cardapio", fetch = FetchType.LAZY)
    private List<Pizza> pizzasLista = new ArrayList<Pizza>();

    public Cardapio() {
    }

    public Cardapio(Long id, String nome, double preco, Date dataCadastro, String status, Boolean prod, String tamanho) {
        this.id = id;
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
        Cardapio cardapio = (Cardapio) o;
        return Objects.equals(id, cardapio.id) && Objects.equals(nome, cardapio.nome) && Objects.equals(preco, cardapio.preco) && Objects.equals(dataCadastro, cardapio.dataCadastro) && Objects.equals(status, cardapio.status) && Objects.equals(prod, cardapio.prod) && Objects.equals(tamanho, cardapio.tamanho) && Objects.equals(pizzasLista, cardapio.pizzasLista);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, preco, dataCadastro, status, prod, tamanho, pizzasLista);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<Pizza> getPizzasLista() {
        return pizzasLista;
    }

    public void setPizzasLista(List<Pizza> pizzasLista) {
        this.pizzasLista = pizzasLista;
    }
}
