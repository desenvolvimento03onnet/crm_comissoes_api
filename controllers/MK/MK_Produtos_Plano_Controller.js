const FlatProductsModel = require('../../services/MK/MK_Produtos_Plano'); // Importe o modelo

const flatProductsController = {
  getFlatProducts: async (req, res) => {
    const { codplano } = req.body;
    try {
      const flatProducts = await FlatProductsModel.getFlatProducts(codplano);
      res.status(200).json(flatProducts);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lista de contratos.' });
    }
  }
};
 
module.exports = flatProductsController;