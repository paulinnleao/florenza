package br.com.florenza.pizza.rest;

import br.com.florenza.pizza.Pizza;
import br.com.florenza.pizza.repository.PizzaRepositoryImp;

public class PizzaRestImp implements PizzaRest{

    PizzaRepositoryImp pizzaRepository;

    @Override
    public Pizza getPizza(Integer idPizza){
        Pizza pizzaBuscada = pizzaRepository.findById(idPizza);
        return pizzaBuscada;
    }
}
