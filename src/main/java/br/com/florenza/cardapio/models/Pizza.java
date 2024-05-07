package br.com.florenza.cardapio.models;

import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "PIZZA")
public class Pizza implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "INGREDIENTES")
    private String ingredientes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_CARDAPIO")
    private Cardapio cardapio;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pizza pizza = (Pizza) o;
        return Objects.equals(id, pizza.id) && Objects.equals(ingredientes, pizza.ingredientes) && Objects.equals(cardapio, pizza.cardapio);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, ingredientes, cardapio);
    }

    public Pizza() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public Cardapio getCardapio() {
        return cardapio;
    }

    public void setCardapio(Cardapio cardapio) {
        this.cardapio = cardapio;
    }

    public Pizza(Long id, String ingredientes, Cardapio cardapio) {
        this.id = id;
        this.ingredientes = ingredientes;
        this.cardapio = cardapio;
    }
}
