package br.com.florenza.unittests.mockito.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import br.com.florenza.cardapio.dto.CardapioDTO;
import br.com.florenza.cardapio.models.Cardapio;
import br.com.florenza.cardapio.repository.CardapioRepository;
import br.com.florenza.cardapio.service.CardapioServiceImp;
import br.com.florenza.exceptions.RequiredObjectIsNullException;
import br.com.florenza.unittests.mapper.mocks.MockCardapio;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

@TestInstance(Lifecycle.PER_CLASS)
@ExtendWith(MockitoExtension.class)
class CardapioServiceTest {

    MockCardapio input;

    @InjectMocks
    private CardapioServiceImp service;

    @Mock
    CardapioRepository repository;

    @BeforeEach
    void setUpMocks() throws Exception {
        input = new MockCardapio();
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindById() {
        Cardapio entity = input.mockEntity(1);
        entity.setId(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(entity));

        var result = service.buscarItemCardapioPorId(1L);
        assertNotNull(result);
        assertNotNull(result.getKey());
        assertNotNull(result.getLinks());

        assertTrue(result.toString().contains("links: [</cardapio/1>;rel=\"self\"]"));
        assertEquals("Item1", result.getNome());
        assertEquals(true, result.getProd());
        assertEquals(1, result.getPreco());
        assertEquals("Tamanho1", result.getTamanho());
    }

    @Test
    void testCreate() {
        Cardapio entity = input.mockEntity(1);
        entity.setId(1L);

        Cardapio persisted = entity;
        persisted.setId(1L);

        CardapioDTO vo = input.mockVO(1);
        vo.setKey(1L);

        when(repository.save(entity)).thenReturn(persisted);

        var result = service.inserirItemNoCardapio(vo);

        assertNotNull(result);
        assertNotNull(result.getKey());
        assertNotNull(result.getLinks());

        assertTrue(result.toString().contains("links: [</cardapio/1>;rel=\"self\"]"));
        assertEquals("Item1", result.getNome());
        assertEquals(true, result.getProd());
        assertEquals(1, result.getPreco());
        assertEquals("Tamanho1", result.getTamanho());
    }

    @Test
    void testCreateWithNullCardapio() {
        Exception exception = assertThrows(RequiredObjectIsNullException.class, () -> {
            service.inserirItemNoCardapio(null);
        });

        String expectedMessage = "It is not allowed to persist a null object!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }


    @Test
    void testUpdate() {
        Cardapio entity = input.mockEntity(1);

        Cardapio persisted = entity;
        persisted.setId(1L);

        CardapioDTO vo = input.mockVO(1);
        vo.setKey(1L);


        when(repository.findById(1L)).thenReturn(Optional.of(entity));
        when(repository.save(entity)).thenReturn(persisted);

        var result = service.atualizarItemCardapio(vo);

        assertNotNull(result);
        assertNotNull(result.getKey());
        assertNotNull(result.getLinks());

        assertTrue(result.toString().contains("links: [</cardapio/1>;rel=\"self\"]"));
        assertEquals("Item1", result.getNome());
        assertEquals(true, result.getProd());
        assertEquals(1, result.getPreco());
        assertEquals("Tamanho1", result.getTamanho());
    }



    @Test
    void testUpdateWithNullCardapio() {
        Exception exception = assertThrows(RequiredObjectIsNullException.class, () -> {
            service.atualizarItemCardapio(null);
        });

        String expectedMessage = "It is not allowed to persist a null object!";
        String actualMessage = exception.getMessage();

        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    void testDelete() {
        Cardapio entity = input.mockEntity(1);
        entity.setId(1L);

        when(repository.findById(1L)).thenReturn(Optional.of(entity));

        service.apagarItemCardapio(1L);
    }

    @Test
    void testFindAll() {
        List<Cardapio> list = input.mockEntityList();

        when(repository.findAll()).thenReturn(list);

        var people = service.listarTodosItensCardapio();

        assertNotNull(people);
        assertEquals(14, people.size());

        var personOne = people.get(1);

        assertNotNull(personOne);
        assertNotNull(personOne.getKey());
        assertNotNull(personOne.getLinks());

        assertTrue(personOne.toString().contains("links: [</cardapio/1>;rel=\"self\"]"));
        assertEquals("Item1", personOne.getNome());
        assertEquals(true, personOne.getProd());
        assertEquals(1, personOne.getPreco());
        assertEquals("Tamanho1", personOne.getTamanho());

        var personFour = people.get(4);

        assertNotNull(personFour);
        assertNotNull(personFour.getKey());
        assertNotNull(personFour.getLinks());

        assertTrue(personFour.toString().contains("links: [</cardapio/4>;rel=\"self\"]"));
        assertEquals("Item4", personFour.getNome());
        assertEquals(true, personFour.getProd());
        assertEquals(4, personFour.getPreco());
        assertEquals("Tamanho4", personFour.getTamanho());

        var personSeven = people.get(7);

        assertNotNull(personSeven);
        assertNotNull(personSeven.getKey());
        assertNotNull(personSeven.getLinks());

        assertTrue(personSeven.toString().contains("links: [</cardapio/7>;rel=\"self\"]"));
        assertEquals("Item7", personSeven.getNome());
        assertEquals(true, personSeven.getProd());
        assertEquals(7, personSeven.getPreco());
        assertEquals("Tamanho7", personSeven.getTamanho());
    }

}