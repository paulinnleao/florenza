package br.com.florenza.cardapio.controller;

import br.com.florenza.cardapio.dto.CardapioDTO;
import br.com.florenza.cardapio.service.CardapioServiceImp;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/cardapio")
@Tag(name = "Cardapio", description = "Endpoints para gerenciar o cardápio")
public class CardapioController {

    @Autowired
    private CardapioServiceImp cardapioService;

    @GetMapping(value = "/{id}",
                produces = {MediaType.APPLICATION_JSON_VALUE})
    @Operation(summary = "Buscar um item", description = "Buscar um item no cardápio pelo identificador",
                tags = {"Cardapio"},
                responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                                  content = @Content(schema = @Schema(implementation = CardapioDTO.class))),
                        @ApiResponse(description = "No Content", responseCode = "204", content = @Content),
                        @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                        @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                        @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                        @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
                })
    public CardapioDTO buscarItemCardapioPorId(@PathVariable(value = "id") Long id) {
        return cardapioService.buscarItemCardapioPorId(id);
    }

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    @Operation(summary = "Buscar uma lista de itens no cardápio", description = "Busca todos os itens que estão cadastrados",
                tags = {"Cardapio"},
                responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                                content = {
                            @Content(
                                    mediaType = "application/json",
                                    array = @ArraySchema(schema = @Schema(implementation = CardapioDTO.class))
                            )
                                }),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
                })
    public List<CardapioDTO> listarTodosItensCardapio() {
        return cardapioService.listarTodosItensCardapio();
    }

    @PutMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @Operation(summary = "Atualiza um item no cardápio", description = "Busca e atualiza os dados de algum item no cardápio através do ID",
                tags = {"Cardapio"},
                responses = {
                        @ApiResponse(description = "Success", responseCode = "200",
                                content = {
                                @Content(schema = @Schema(implementation = CardapioDTO.class))
                                }),
                        @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                        @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                        @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                        @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
                })
    public CardapioDTO atualizarItemCardapio(@RequestBody CardapioDTO cardapioDTO) {
        return cardapioService.atualizarItemCardapio(cardapioDTO);
    }


    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @Operation(summary = "Insere um item no cardápio", description = "Persiste um novo item no banco de dados",
                tags = {"Cardapio"},
                responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                    content = @Content(schema = @Schema(implementation = CardapioDTO.class))),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
                })
    public CardapioDTO inserirItemNoCardapio(@RequestBody CardapioDTO cardapioDTO) {
        return cardapioService.inserirItemNoCardapio(cardapioDTO);
    }

    @DeleteMapping(value = "/{id}")
    @Operation(summary = "Deleta um item do cardapio", description = "Busca um item através do ID e o apaga do cardápio",
                tags = {"Cardapio"},
                responses = {
                        @ApiResponse(description = "No Content", responseCode = "204", content = @Content),
                        @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                        @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                        @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                        @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
                })
    public ResponseEntity<?> apagarItemCardapio(@PathVariable(value = "id") Long id) {
        return cardapioService.apagarItemCardapio(id);
    }
}
