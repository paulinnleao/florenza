package br.com.florenza.pizza.rest;

import br.com.florenza.pizza.Pizza;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface PizzaRest {

    @RequestMapping(value = "/pizza/{idPizza}", method = RequestMethod.GET)
    public Pizza getPizza(@PathVariable(value = "idPizza") Integer idPizza);
}
