<div align="center">

<h1 style="border-bottom: none">
    <b><a href="#">ONNET API</a></b><br />
    API de Comissões CRM
    <br>
</h1>

<div align="center">

[![OnNet Home](./images/logo.png)](http://177.85.0.28:4000)

</div>

<p>
  A descrição a seguir é referente à API criada para a aplicação OnNet CRM Comissões <br />
  Nela, será apresentada toda a documentação da API.

> [!NOTE]
> A Versão do Node.js utilizada foi a V20.9.0

</p>

</div>

<br />

## Iniciando...

<br />

> [!NOTE]
> <p align="center">
>   Os programas utilizados foram, Node.js, Visual Studio Code, HeidiSQL e Insomnia.<br />
>   Os pacotes utilizados foram o Express, Pg e Nodemon.
>   Os gráficos e toda a estilização, foi feita com a ferramenta Mermaid.
> </p>

## Progresso

<div align="center">

### Check-list do Desenvolvimento

- [X] Back-end com rotas e variáveis referentes ao banco do MK
- [X] Documentação completa do back do MK, com formatação
- [ ] Back-end com rotas e variáveis referentes ao banco local
- [ ] Documentação completa do back local, com formatação

</div>

<br />

<div align="center">

### Progresso de Desenvolvimento

</div>

```mermaid
    %%{
      init: {
        'theme': 'base',
        'themeVariables': {
          'pie1': '#0000FF',
          'primaryTextColor': '#FFFFFF'
        }
      }
    }%%
    pie title Rotas - MK
    "Concluído" : 100
```
```mermaid
    %%{
      init: {
        'theme': 'base',
        'themeVariables': {
          'pie1': '#0000FF',
          'primaryTextColor': '#FFFFFF'
        }
      }
    }%%
    pie title Documentação - MK
    "Concluído" : 100
```
```mermaid
    %%{
      init: {
        'theme': 'base',
        'themeVariables': {
          'pie1': '#006400',
          'primaryTextColor': '#FFFFFF'
        }
      }
    }%%
    pie title Rotas - Local
    "Em Desenvolvimento" : 100
```
```mermaid
    %%{
      init: {
        'theme': 'base',
        'themeVariables': {
          'pie1': '#006400',
          'primaryTextColor': '#FFFFFF'
        }
      }
    }%%
    pie title Documentação - Local
    "Em Desenvolvimento" : 100
```

## Rotas

### Rotas - MK

- **/api/Sale** — Recebe o código do contrato e, se dentro de um período de 4 meses, retorna o código do cliente, o nome do cliente, a cidade, o código do contrato, a data da operação, o código do operador que fez a venda, o usuário do operador, a cidade o operador, o setor do operador, o código da 1ª fatura após a operação, o valor do plano e o dia de vencimento;

- **/api/Renovation** — Recebe o código do contrato e, se dentro de um período de 4 meses, retorna o código do cliente, o nome do cliente, a cidade, o código do contrato, a data da operação, o código do operador que fez a renovação, o usuário do operador, a cidade o operador, o setor do operador, o código da 1ª fatura após a operação, o valor do plano antigo, o plano antigo, o valor do plano novo, o plano novo e o dia de vencimento;

- **/api/OperatorsCities** — Retorna todas as cidades dos operadores dos setores referentes à parte comercial sendo: Comercial, Filiais, Telemarketing e PAP ***Especificamente os códigos: 11, 13, 15 e 32***;

- **/api/OperatorsSectors** — Retorna os setores de todos os operadores dos setores: Comercial, Filiais, Telemarketing e PAP;

- **/api/SettlementDate** — Recebe o código da fatura e retorna a data de pagamento da mesma (caso tenha sido paga);

- **/api/FlatProducts** — Recebe o código do plano e retorna todos os produtos que fazem parte da composição dele;

- **/api/Recurrent** — Recebe o código da fatura e a data da operação e verifica se essa fatura está cadastrada para pagamento recorrente;

### Rotas - Local