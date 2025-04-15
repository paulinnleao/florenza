package br.com.florenza.unittests.mapper;

import static org.junit.jupiter.api.Assertions.assertEquals;

import br.com.florenza.cardapio.dto.PizzaDTO;
import br.com.florenza.cardapio.mapper.CPMapper;
import br.com.florenza.cardapio.models.Pizza;
import br.com.florenza.unittests.mapper.mocks.MockPizzas;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;


public class MapperPizzaConverterTest {

    MockPizzas inputObject;

//    @BeforeEach
    public void setUp() {
        inputObject = new MockPizzas();
    }

//    @Test
    public void parseEntityToVOTest() {
        PizzaDTO output = CPMapper.parseObject(inputObject.mockEntity(), PizzaDTO.class);

        assertEquals(Long.valueOf(0L), output.getKey());
        assertEquals("Ingredientes0", output.getIngredientes());
    }

//    @Test
    public void parseEntityListToVOListTest() {
        List<PizzaDTO> outputList = CPMapper.parseListObject(inputObject.mockEntityList(), PizzaDTO.class);
        PizzaDTO outputZero = outputList.get(0);

        assertEquals(Long.valueOf(0L), outputZero.getKey());
        assertEquals("Ingredientes0", outputZero.getIngredientes());

        PizzaDTO outputSeven = outputList.get(7);

        assertEquals(Long.valueOf(7L), outputSeven.getKey());
        assertEquals("Ingredientes7", outputSeven.getIngredientes());

        PizzaDTO outputTwelve = outputList.get(12);

        assertEquals(Long.valueOf(12L), outputTwelve.getKey());
        assertEquals("Ingredientes12", outputTwelve.getIngredientes());
    }

//    @Test
    public void parseVOToEntityTest() {
        Pizza output = CPMapper.parseObject(inputObject.mockVO(), Pizza.class);
        assertEquals(Long.valueOf(0L), output.getId());
        assertEquals("Ingredientes0", output.getIngredientes());
    }

//    @Test
    public void parserVOListToEntityListTest() {
        List<Pizza> outputList = CPMapper.parseListObject(inputObject.mockVOList(), Pizza.class);
        Pizza outputZero = outputList.get(0);

        assertEquals(Long.valueOf(0L), outputZero.getId());
        assertEquals("Ingredientes0", outputZero.getIngredientes());

        Pizza outputSeven = outputList.get(7);

        assertEquals(Long.valueOf(7L), outputSeven.getId());
        assertEquals("Ingredientes7", outputSeven.getIngredientes());

        Pizza outputTwelve = outputList.get(12);

        assertEquals(Long.valueOf(12L), outputTwelve.getId());
        assertEquals("Ingredientes12", outputTwelve.getIngredientes());
    }
}