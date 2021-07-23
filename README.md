# PlataformaVerde2.0 - Formulário com ReactJS - Exemplo
Exemplo de formulário dinâmico usando React e json-server, com tabela dinâmica carregando dados do JSON.
Layout carrega em um container no Docker gerenciado com Docker-composer.

### Após clonar repositório, é necessário configurar o json-server (porta 3001), iniciado à partir do diretório backend.
Essa solução JSON simula uma situação em que o Layout recebe informações de uma API REST.

Para iniciar o json-server na porta 3001 à partir do diretório "backend":

npm init -y

npm i --save json-server@0.13.0 -E

### Com o json-server ativo, para ativar a aplicação, é necessário carregar o Docker. O app responderá na porta 3000

Comando para iniciar o Docker à partir do diretório "frontend" e a o layout renderizado passar a responder à partir da porta 3000:

Para efetuar o build:
        docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

Para desfazer o build:
        docker-compose -f docker-compose.yml -f docker-compose-dev.yml down

Seguindo a configuração utilizada no projeto, as portas 3001 (json-server) e 3000 (react-app) atuam em simultâneo.
O arquivo db.json é alterado no json-server de acordo com as inserções, aletrações e exclusões no formulário,
bem como exibe as informações do json na tabela, em tempo real.

## Imagem do Formulário:
![Imagem Formulário](https://github.com/RafaelSouzaValle/PlataformaVerde2.0/blob/master/imagem-amostra/layout.png)


## Imagem do JSON no json-server:
![Imagem json-server](https://github.com/RafaelSouzaValle/PlataformaVerde2.0/blob/master/imagem-amostra/json-exemplo.png)
