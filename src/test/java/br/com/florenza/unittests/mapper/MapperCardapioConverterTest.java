package br.com.florenza.unittests.mapper;

import static org.junit.jupiter.api.Assertions.assertEquals;

import br.com.florenza.cardapio.dto.CardapioDTO;
import br.com.florenza.cardapio.mapper.CPMapper;
import br.com.florenza.cardapio.models.Cardapio;
import br.com.florenza.unittests.mapper.mocks.MockCardapio;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;


public class MapperCardapioConverterTest {

    MockCardapio inputObject;

    @BeforeEach
    public void setUp() {
        inputObject = new MockCardapio();
    }

    @Test
    public void parseEntityToVOTest() {
        CardapioDTO output = CPMapper.parseObject(inputObject.mockEntity(), CardapioDTO.class);
        assertEquals(Long.valueOf(0L), output.getKey());
        assertEquals("Item0", output.getNome());
        assertEquals(true, output.getProd());
        assertEquals(0, output.getPreco());
        assertEquals("Tamanho0", output.getTamanho());
    }

    @Test
    public void parseEntityListToVOListTest() {
        List<CardapioDTO> outputList = CPMapper.parseListObject(inputObject.mockEntityList(), CardapioDTO.class);
        CardapioDTO outputZero = outputList.get(0);

        assertEquals(Long.valueOf(0L), outputZero.getKey());
        assertEquals("Item0", outputZero.getNome());
        assertEquals(true, outputZero.getProd());
        assertEquals(0, outputZero.getPreco());
        assertEquals("Tamanho0", outputZero.getTamanho());

        CardapioDTO outputSeven = outputList.get(7);

        assertEquals(Long.valueOf(7L), outputSeven.getKey());
        assertEquals("Item7", outputSeven.getNome());
        assertEquals(true, outputSeven.getProd());
        assertEquals(7, outputSeven.getPreco());
        assertEquals("Tamanho7", outputSeven.getTamanho());

        CardapioDTO outputTwelve = outputList.get(12);

        assertEquals(Long.valueOf(12L), outputTwelve.getKey());
        assertEquals("Item12", outputTwelve.getNome());
        assertEquals(true, outputTwelve.getProd());
        assertEquals(12, outputTwelve.getPreco());
        assertEquals("Tamanho12", outputTwelve.getTamanho());
    }

    @Test
    public void parseVOToEntityTest() {
        Cardapio output = CPMapper.parseObject(inputObject.mockVO(), Cardapio.class);
        assertEquals(Long.valueOf(0L), output.getId());
        assertEquals("Item0", output.getNome());
        assertEquals(true, output.getProd());
        assertEquals(0, output.getPreco());
        assertEquals("Tamanho0", output.getTamanho());
    }

    @Test
    public void parserVOListToEntityListTest() {
        List<Cardapio> outputList = CPMapper.parseListObject(inputObject.mockVOList(), Cardapio.class);
        Cardapio outputZero = outputList.get(0);

        assertEquals(Long.valueOf(0L), outputZero.getId());
        assertEquals("Item0", outputZero.getNome());
        assertEquals(true, outputZero.getProd());
        assertEquals(0, outputZero.getPreco());
        assertEquals("Tamanho0", outputZero.getTamanho());

        Cardapio outputSeven = outputList.get(7);

        assertEquals(Long.valueOf(7L), outputSeven.getId());
        assertEquals("Item7", outputSeven.getNome());
        assertEquals(true, outputSeven.getProd());
        assertEquals(7, outputSeven.getPreco());
        assertEquals("Tamanho7", outputSeven.getTamanho());

        Cardapio outputTwelve = outputList.get(12);

        assertEquals(Long.valueOf(12L), outputTwelve.getId());
        assertEquals("Item12", outputTwelve.getNome());
        assertEquals(true, outputTwelve.getProd());
        assertEquals(12, outputTwelve.getPreco());
        assertEquals("Tamanho12", outputTwelve.getTamanho());
    }
}