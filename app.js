const express = require('express');
const db = require('./config/MK_db');
const saleController = require('./controllers/MK/MK_Vendas_Controller');
const renovationController = require('./controllers/MK/MK_Renovacoes_Controller');
const operatorsCitiesController = require('./controllers/MK/MK_Cidades_Operadores_Controller');
const operatorsSectorsController = require('./controllers/MK/MK_Setores_Operadores_Controller');
const settlementDateController = require('./controllers/MK/MK_Liquidacao_Faturas_Controller');
const flatProductsController = require('./controllers/MK/MK_Produtos_Plano_Controller');
const recurrentController = require('./controllers/MK/MK_Recorrente_Controller');
 
const app = express(); //Instância do Express
const PORT = 3000; //Porta para o servidor, por exemplo a 3000
 
app.use(express.json()); //Middleware para tratar os dados no formato JSON

app.post('/api/Sale', saleController.getSale); //Rota para obter todos os contratos
app.post('/api/Renovation', renovationController.getRenovation);
app.post('/api/OperatorsCities', operatorsCitiesController.getOperatorsCities);
app.post('/api/OperatorsSectors', operatorsSectorsController.getOperatorsSectors);
app.post('/api/SettlementDate', settlementDateController.getSettlementDate);
app.post('/api/FlatProducts', flatProductsController.getFlatProducts);
app.post('/api/Recurrent', recurrentController.getRecurrent);

app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
}); 