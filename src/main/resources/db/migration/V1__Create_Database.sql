DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'florenza') THEN
        -- Criar o banco de dados 'florenza' se ele não existir
        PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE florenza');
    END IF;
END
$$;