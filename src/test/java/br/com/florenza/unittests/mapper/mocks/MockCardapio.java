package br.com.florenza.unittests.mapper.mocks;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.florenza.cardapio.dto.CardapioDTO;
import br.com.florenza.cardapio.dto.PizzaDTO;
import br.com.florenza.cardapio.models.Cardapio;
import br.com.florenza.cardapio.models.Pizza;

public class MockCardapio {

    MockPizzas mockPizzas;

    public Cardapio mockEntity() {
        return mockEntity(0);
    }

    public CardapioDTO mockVO() {
        return mockVO(0);
    }

    public List<Cardapio> mockEntityList() {
        List<Cardapio> Cardapios = new ArrayList<Cardapio>();
        for (int i = 0; i < 14; i++) {
            Cardapios.add(mockEntity(i));
        }
        return Cardapios;
    }

    public List<CardapioDTO> mockVOList() {
        List<CardapioDTO> Cardapios = new ArrayList<>();
        for (int i = 0; i < 14; i++) {
            Cardapios.add(mockVO(i));
        }
        return Cardapios;
    }

    public Cardapio mockEntity(Integer number) {
        Cardapio cardapio = new Cardapio();

        cardapio.setId(number.longValue());
        cardapio.setNome("Item"+number);
        cardapio.setProd(true);
        cardapio.setPreco(number.doubleValue());
        cardapio.setTamanho("Tamanho"+number);
        cardapio.setDataCadastro(new Date());
        List<Pizza> pizzaList = new ArrayList<Pizza>();
        cardapio.setPizzasLista(pizzaList);
        return cardapio;
    }

    public CardapioDTO mockVO(Integer number) {
        CardapioDTO cardapio = new CardapioDTO();
        cardapio.setKey(number.longValue());
        cardapio.setNome("Item"+number);
        cardapio.setProd(true);
        cardapio.setPreco(number.doubleValue());
        cardapio.setTamanho("Tamanho"+number);
        cardapio.setDataCadastro(new Date());
        List<PizzaDTO> pizzaDTOS = new ArrayList<PizzaDTO>();
        cardapio.setPizzasLista(pizzaDTOS);
        return cardapio;
    }

}