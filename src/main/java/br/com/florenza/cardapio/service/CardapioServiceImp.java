package br.com.florenza.cardapio.service;

import br.com.florenza.cardapio.controller.CardapioController;
import br.com.florenza.cardapio.dto.CardapioDTO;
import br.com.florenza.cardapio.mapper.CPMapper;
import br.com.florenza.cardapio.models.Cardapio;
import br.com.florenza.cardapio.repository.CardapioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import java.util.List;

public class CardapioServiceImp implements CardapioService{
    @Autowired
    private CardapioRepository cardapioRepository;

    @Override
    public CardapioDTO buscarItemCardapioPorId(Long id) {
        Cardapio cardapio =  cardapioRepository.findById(id)
                .orElseThrow();
        CardapioDTO cardapioDTO = CPMapper.parseObject(cardapio, CardapioDTO.class);
        cardapioDTO.add(
                linkTo(
                        methodOn(
                                CardapioController.class)
                                .buscarItemCardapioPorId(id))
                        .withSelfRel());
        return cardapioDTO;
    }

    @Override
    public List<CardapioDTO> listarTodosItensCardapio() {
        List<Cardapio> cardapioList = cardapioRepository.findAll();
        List<CardapioDTO> cardapioDTOList = CPMapper.parseListObject(cardapioList, CardapioDTO.class);
        cardapioDTOList.forEach(
                cardapio ->
                        cardapio.add(
                                linkTo(
                                        methodOn(
                                                CardapioController.class)
                                                .buscarItemCardapioPorId(cardapio.getKey()))
                                        .withSelfRel())
        );
        return cardapioDTOList;
    }

    @Override
    public CardapioDTO atualizarItemCardapio(CardapioDTO cardapioDTO) {
        Cardapio cardapio = cardapioRepository.findById(cardapioDTO.getKey())
                .orElseThrow();
        CardapioDTO cardapioDTOSaved = CPMapper.parseObject(
                cardapioRepository.save(cardapio),
                CardapioDTO.class
        );
        cardapioDTOSaved.add(
                linkTo(
                        methodOn(
                                CardapioController.class)
                                .buscarItemCardapioPorId(cardapioDTOSaved.getKey()))
                        .withSelfRel());
        return cardapioDTOSaved;
    }

    @Override
    public CardapioDTO inserirItemNoCardapio(CardapioDTO cardapioDTO) {
        Cardapio cardapio = CPMapper.parseObject(cardapioDTO, Cardapio.class);
        CardapioDTO cardapioDTOSaved = CPMapper.parseObject(
                cardapioRepository.save(cardapio),
                CardapioDTO.class
        );
        cardapioDTOSaved.add(
                linkTo(
                        methodOn(
                                CardapioController.class)
                                .buscarItemCardapioPorId(cardapioDTOSaved.getKey()))
                        .withSelfRel());
        return cardapioDTOSaved;
    }

    @Override
    public ResponseEntity<?> apagarItemCardapio(Long id) {
        Cardapio cardapio = cardapioRepository.findById(id)
                .orElseThrow();
        cardapioRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
