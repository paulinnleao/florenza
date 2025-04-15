package br.com.florenza.cardapio.service;

import br.com.florenza.cardapio.controller.PizzaController;
import br.com.florenza.cardapio.dto.PizzaDTO;
import br.com.florenza.cardapio.mapper.CPMapper;
import br.com.florenza.cardapio.models.Pizza;
import br.com.florenza.cardapio.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;

@Service
public class PizzaServiceImp implements PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    @Override
    public PizzaDTO buscarPizzaPorId(Long id) {
        Pizza pizza = pizzaRepository.findById(id)
                .orElseThrow();
        PizzaDTO pizzaDTO = CPMapper.parseObject(pizza, PizzaDTO.class);
        pizzaDTO.add(
                linkTo(
                        methodOn(
                                PizzaController.class)
                                .buscarPizzaPorId(id))
                        .withSelfRel());
        return pizzaDTO;
    }

    @Override
    public List<PizzaDTO> listarTodasAsPizzas() {
        List<Pizza> pizzaList = pizzaRepository.findAll();
        List<PizzaDTO> pizzaDTOList = CPMapper.parseListObject(pizzaList, PizzaDTO.class);
        pizzaDTOList.forEach(
                pizza ->
                        pizza.add(
                                linkTo(
                                        methodOn(
                                                PizzaController.class)
                                                .buscarPizzaPorId(pizza.getKey()))
                                        .withSelfRel())
        );
        return pizzaDTOList;
    }

    @Override
    public PizzaDTO atualizarPizza(PizzaDTO pizzaDTO) {
        Pizza pizza = pizzaRepository.findById(pizzaDTO.getKey())
                .orElseThrow();

        PizzaDTO pizzaDTOSaved = CPMapper.parseObject(
                pizzaRepository.save(pizza)
                , PizzaDTO.class);
        pizzaDTOSaved.add(
                linkTo(
                        methodOn(
                                PizzaController.class)
                                .buscarPizzaPorId(pizzaDTOSaved.getKey()))
                        .withSelfRel());
        return pizzaDTOSaved;
    }

    @Override
    public PizzaDTO inserirPizza(PizzaDTO pizzaDTO) {
        Pizza pizza = CPMapper.parseObject(pizzaDTO, Pizza.class);

        PizzaDTO pizzaDTOSaved = CPMapper.parseObject(
                pizzaRepository.save(pizza)
                , PizzaDTO.class);
        pizzaDTOSaved.add(
                linkTo(
                        methodOn(
                                PizzaController.class)
                                .buscarPizzaPorId(pizzaDTOSaved.getKey()))
                        .withSelfRel());
        return pizzaDTOSaved;
    }

    @Override
    public ResponseEntity<?> apagarPizza(Long id) {
        Pizza pizza = pizzaRepository.findById(id)
                .orElseThrow();
        pizzaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
