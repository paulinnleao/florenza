package Cardapio.models;

import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "PIZZA")
public class Pizza implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "INGREDIENTES")
    private String ingredientes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_CARDAPIO")
    private Cardapio cardapio;
}
