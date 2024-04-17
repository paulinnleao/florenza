package org.florenza.pizza.service;

import org.florenza.pizza.Pizza;
import org.florenza.pizza.repository.PizzaRepository;

public class PizzaServiceImp implements PizzaService {

    PizzaRepository pizzaRepository;
    @Override
    public Pizza getPizza(Integer idPizza){
        return pizzaRepository.findById(Long.valueOf(idPizza));
    }
}
