package br.com.florenza.unittests.mapper.mocks;

import java.util.ArrayList;
import java.util.List;

import br.com.florenza.cardapio.dto.PizzaDTO;
import br.com.florenza.cardapio.models.Pizza;

public class MockPizzas {

    MockCardapio mockCardapio;

    public Pizza mockEntity() {
        return mockEntity(0);
    }

    public PizzaDTO mockVO() {
        return mockVO(0);
    }

    public List<Pizza> mockEntityList() {
        List<Pizza> Pizzas = new ArrayList<Pizza>();
        for (int i = 0; i < 14; i++) {
            Pizzas.add(mockEntity(i));
        }
        return Pizzas;
    }

    public List<PizzaDTO> mockVOList() {
        List<PizzaDTO> Pizzas = new ArrayList<>();
        for (int i = 0; i < 14; i++) {
            Pizzas.add(mockVO(i));
        }
        return Pizzas;
    }

    public Pizza mockEntity(Integer number) {
        Pizza pizza = new Pizza();

        pizza.setId(number.longValue());
        pizza.setCardapio(mockCardapio.mockEntity());
        pizza.setIngredientes("Ingredientes"+number);

        return pizza;
    }

    public PizzaDTO mockVO(Integer number) {
        PizzaDTO pizza = new PizzaDTO();
        pizza.setKey(number.longValue());
        pizza.setCardapio(mockCardapio.mockVO());
        pizza.setIngredientes("Ingredientes"+number);

        return pizza;
    }

}