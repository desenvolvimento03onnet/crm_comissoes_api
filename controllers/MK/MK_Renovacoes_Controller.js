const ContractModel = require('../../services/MK/MK_Renovacoes'); // Importe o modelo

const renovationController = {
  getRenovation: async (req, res) => {
    const { codcontrato } = req.body;
    try {
      const renovation = await ContractModel.getRenovation(codcontrato);
      res.status(200).json(renovation);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lista de contratos.' });
    }
  }
};
 
module.exports = renovationController;