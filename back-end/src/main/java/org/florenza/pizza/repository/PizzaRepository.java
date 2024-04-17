package org.florenza.pizza.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.florenza.pizza.Pizza;

@ApplicationScoped
public class PizzaRepository implements PanacheRepository<Pizza> {
}
