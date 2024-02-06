const SettlementDateModel = require('../../services/MK/MK_Liquidacao_Faturas'); // Importe o modelo

const settlementDateController = {
  getSettlementDate: async (req, res) => {
    const { codfatura } = req.body;
    try {
      const settlementDate = await SettlementDateModel.getSettlementDate(codfatura);
      res.status(200).json(settlementDate);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lista de contratos.' });
    }
  }
};
 
module.exports = settlementDateController;