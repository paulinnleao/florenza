CREATE TABLE IF NOT EXISTS cardapio (
    ID_CARDAPIO SERIAL PRIMARY KEY,
    NOME VARCHAR(255),
    PRECO DOUBLE PRECISION,
    DATA_CADASTRO DATE,
    STATUS VARCHAR(50),
    PROD BOOLEAN,
    TAMANHO VARCHAR(50)
);