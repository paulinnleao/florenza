package br.com.florenza.unittests.mockito.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import br.com.florenza.cardapio.dto.PizzaDTO;
import br.com.florenza.cardapio.models.Pizza;
import br.com.florenza.cardapio.repository.PizzaRepository;
import br.com.florenza.cardapio.service.PizzaServiceImp;
import br.com.florenza.exceptions.RequiredObjectIsNullException;
import br.com.florenza.unittests.mapper.mocks.MockPizzas;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

//@TestInstance(Lifecycle.PER_CLASS)
//@ExtendWith(MockitoExtension.class)
class PizzasServiceTest {

    MockPizzas input;

//    @InjectMocks
    private PizzaServiceImp service;

//    @Mock
    PizzaRepository repository;

//    @BeforeEach
    void setUpMocks() throws Exception {
        input = new MockPizzas();
        MockitoAnnotations.openMocks(this);
    }

//    @Test
    void testFindById() {
        Pizza entity = input.mockEntity(1);
        entity.setId(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(entity));

        var result = service.buscarPizzaPorId(1L);
        assertNotNull(result);
        assertNotNull(result.getKey());
        assertNotNull(result.getLinks());

        assertTrue(result.toString().contains("links: [</pizzas/1>;rel=\"self\"]"));
        assertEquals("Ingredientes1", result.getIngredientes());
    }

//    @Test
    void testCreate() {
        Pizza entity = input.mockEntity(1);
        entity.setId(1L);

        Pizza persisted = entity;
        persisted.setId(1L);

        PizzaDTO vo = input.mockVO(1);
        vo.setKey(1L);

        when(repository.save(entity)).thenReturn(persisted);

        var result = service.inserirPizza(vo);

        assertNotNull(result);
        assertNotNull(result.getKey());
        assertNotNull(result.getLinks());

        assertTrue(result.toString().contains("links: [</pizzas/1>;rel=\"self\"]"));
        assertEquals("Ingredientes1", result.getIngredientes());
    }

//    @Test
    void testCreateWithNullPizza() {
        Exception exception = assertThrows(RequiredObjectIsNullException.class, () -> {
            service.inserirPizza(null);
        });

        String expectedMessage = "It is not allowed to persist a null object!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }


//    @Test
    void testUpdate() {
        Pizza entity = input.mockEntity(1);

        Pizza persisted = entity;
        persisted.setId(1L);

        PizzaDTO vo = input.mockVO(1);
        vo.setKey(1L);


        when(repository.findById(1L)).thenReturn(Optional.of(entity));
        when(repository.save(entity)).thenReturn(persisted);

        var result = service.atualizarPizza(vo);

        assertNotNull(result);
        assertNotNull(result.getKey());
        assertNotNull(result.getLinks());

        assertTrue(result.toString().contains("links: [</pizzas/1>;rel=\"self\"]"));
        assertEquals("Ingredientes1", result.getIngredientes());
    }



//    @Test
    void testUpdateWithNullPizza() {
        Exception exception = assertThrows(RequiredObjectIsNullException.class, () -> {
            service.atualizarPizza(null);
        });

        String expectedMessage = "It is not allowed to persist a null object!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }

//    @Test
    void testDelete() {
        Pizza entity = input.mockEntity(1);
        entity.setId(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(entity));

        service.apagarPizza(1L);
    }

//    @Test
    void testFindAll() {
        List<Pizza> list = input.mockEntityList();

        when(repository.findAll()).thenReturn(list);

        var people = service.listarTodasAsPizzas();

        assertNotNull(people);
        assertEquals(14, people.size());

        var personOne = people.get(1);

        assertNotNull(personOne);
        assertNotNull(personOne.getKey());
        assertNotNull(personOne.getLinks());

        assertTrue(personOne.toString().contains("links: [</pizzas/1>;rel=\"self\"]"));
        assertEquals("Ingredientes1", personOne.getIngredientes());

        var personFour = people.get(4);

        assertNotNull(personFour);
        assertNotNull(personFour.getKey());
        assertNotNull(personFour.getLinks());

        assertTrue(personFour.toString().contains("links: [</pizzas/4>;rel=\"self\"]"));
        assertEquals("Ingredientes1", personFour.getIngredientes());

        var personSeven = people.get(7);

        assertNotNull(personSeven);
        assertNotNull(personSeven.getKey());
        assertNotNull(personSeven.getLinks());

        assertTrue(personSeven.toString().contains("links: [</pizzas/7>;rel=\"self\"]"));
        assertEquals("Ingredientes1", personSeven.getIngredientes());
    }

}