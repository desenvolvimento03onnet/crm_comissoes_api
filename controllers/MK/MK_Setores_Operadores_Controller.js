const OperatorsSectorsModel = require('../../services/MK/MK_Setores_Operadores'); // Importe o modelo

const operatorsSectorsController = {
  getOperatorsSectors: async (req, res) => {
    const {  } = req.body;
    try {
      const operatorsSectors = await OperatorsSectorsModel.getOperatorsSectors();
      res.status(200).json(operatorsSectors);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lista de contratos.' });
    }
  }
};
 
module.exports = operatorsSectorsController;