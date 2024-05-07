package br.com.florenza.cardapio.dto;

import org.springframework.hateoas.RepresentationModel;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

public class PizzaDTO extends RepresentationModel<PizzaDTO> implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long key;

    private String ingredientes;

    private CardapioDTO cardapio;

    public PizzaDTO(Long key, String ingredientes, CardapioDTO cardapio) {
        this.key = key;
        this.ingredientes = ingredientes;
        this.cardapio = cardapio;
    }

    public PizzaDTO() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        PizzaDTO pizzaDTO = (PizzaDTO) o;
        return Objects.equals(key, pizzaDTO.key) && Objects.equals(ingredientes, pizzaDTO.ingredientes) && Objects.equals(cardapio, pizzaDTO.cardapio);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), key, ingredientes, cardapio);
    }

    public Long getKey() {
        return key;
    }

    public void setKey(Long key) {
        this.key = key;
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public CardapioDTO getCardapio() {
        return cardapio;
    }

    public void setCardapio(CardapioDTO cardapio) {
        this.cardapio = cardapio;
    }
}
