const OperatorsCitiesModel = require('../../services/MK/MK_Cidades_Operadores'); // Importe o modelo

const operatorsCitiesController = {
  getOperatorsCities: async (req, res) => {
    const {  } = req.body;
    try {
      const operatorsCities = await OperatorsCitiesModel.getOperatorsCities();
      res.status(200).json(operatorsCities);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lista de contratos.' });
    }
  }
};
 
module.exports = operatorsCitiesController;