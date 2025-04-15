package br.com.florenza.cardapio.service;

import br.com.florenza.cardapio.dto.PizzaDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PizzaService {

    PizzaDTO buscarPizzaPorId(Long id);
    List<PizzaDTO> listarTodasAsPizzas();
    PizzaDTO atualizarPizza(PizzaDTO pizzaDTO);
    PizzaDTO inserirPizza(PizzaDTO pizzaDTO);
    ResponseEntity<?> apagarPizza(Long id);
}
