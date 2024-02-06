const RecurrentModel = require('../../services/MK/MK_Recorrente'); // Importe o modelo

const recurrentController = {
  getRecurrent: async (req, res) => {
    const { codfatura, data } = req.body;
    try {
      const recurrent = await RecurrentModel.getRecurrent(codfatura, data);
      res.status(200).json(recurrent);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lista de contratos.' });
    }
  }
};
 
module.exports = recurrentController;