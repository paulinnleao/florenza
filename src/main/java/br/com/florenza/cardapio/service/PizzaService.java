package br.com.florenza.cardapio.service;

import br.com.florenza.cardapio.dto.PizzaDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PizzaService {

    PizzaDTO buscarPizzaPorId(Long id);
    List<PizzaDTO> listarTodasAsPizzas();
    PizzaDTO atualizarPizza(PizzaDTO pizzaDTO);
    PizzaDTO inserirPizza(PizzaDTO pizzaDTO);
    ResponseEntity<?> apagarPizza(Long id);
}
