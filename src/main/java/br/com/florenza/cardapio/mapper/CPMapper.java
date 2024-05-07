package br.com.florenza.cardapio.mapper;

import br.com.florenza.cardapio.dto.CardapioDTO;
import br.com.florenza.cardapio.dto.PizzaDTO;
import br.com.florenza.cardapio.models.Cardapio;
import br.com.florenza.cardapio.models.Pizza;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

public class CPMapper {
    private static ModelMapper mapper = new ModelMapper();

    static{
        // Para o cardápio
        mapper.createTypeMap(Cardapio.class, CardapioDTO.class).addMapping(Cardapio::getId, CardapioDTO::setKey);
        mapper.createTypeMap(CardapioDTO.class, Cardapio.class).addMapping(CardapioDTO::getKey, Cardapio::setId);

        // Para a pizza
        mapper.createTypeMap(Pizza.class, PizzaDTO.class).addMapping(Pizza::getId, PizzaDTO::setKey);
        mapper.createTypeMap(PizzaDTO.class, Pizza.class).addMapping(PizzaDTO::getKey, Pizza::setId);
    }

    public static <O, D> D parseObject(O origem, Class<D> destino){
        return mapper.map(origem, destino);
    }

    public static <O, D>List<D> parseListObject(List<O> origem, Class<D> destino){
        List<D> destinoLista = new ArrayList<D>();
        origem.forEach(
                objeto ->
                destinoLista.add(
                        mapper.map(objeto, destino)
                ));
        return destinoLista;
    }
}
