package br.com.florenza.cardapio.service;

import br.com.florenza.cardapio.dto.CardapioDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CardapioService {

    CardapioDTO buscarItemCardapioPorId(Long id);
    List<CardapioDTO> listarTodosItensCardapio();
    CardapioDTO atualizarItemCardapio(CardapioDTO cardapioDTO);
    CardapioDTO inserirItemNoCardapio(CardapioDTO cardapioDTO);
    ResponseEntity<?> apagarItemCardapio(Long id);
}
