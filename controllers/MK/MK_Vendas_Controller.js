const ContractModel = require('../../services/MK/MK_Vendas'); // Importe o modelo

const saleController = {
  getSale: async (req, res) => {
    const { codcontrato } = req.body;
    try {
      const sale = await ContractModel.getSale(codcontrato);
      res.status(200).json(sale);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lista de contratos.' });
    }
  }
};
 
module.exports = saleController;