package br.com.florenza.pizza;

//import jakarta.persistence.*;
//import org.florenza.tamanhoPreco.TamanhoPreco;

import br.com.florenza.tamanhoPreco.TamanhoPreco;
import lombok.AllArgsConstructor;

import java.util.List;

//@Entity
//@Table(name = "PIZZA")
@AllArgsConstructor
public class Pizza {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "ID_PIZZA")
    private Integer id;

//    @Column(name = "NOME")
    private String nome;

//    @OneToMany(mappedBy = "idPizzaPreco")
    private List<TamanhoPreco> tamanhoPrecoList;

//    @Column(name = "INGREDIENTES")
    private String ingredientes;
}
