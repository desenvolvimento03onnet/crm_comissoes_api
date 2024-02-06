const db = require('../../config/MK_db.js'); // Importe a configuração do banco de dados
 
const ProdutosPlano = { // pode colocar o nome que quiser, recomendo colocar o nome referente ao Model que irá usar
  getFlatProducts: async (codplano) => { // esse async representa que essa é uma consulta assíncrona com o banco
    try {
      const query =
      "SELECT\n"+
      "plano.codplano codplano,\n"+
      "plano.descricao plano,\n"+
      "produtos.codplano codproduto,\n"+
      "produtos.descricao produto\n"+
      "FROM\n"+
      "mk_planos_acesso plano\n"+
      "LEFT JOIN mk_crm_produtos produto ON (produto.cd_plano_principal = plano.codplano)\n"+
      "LEFT JOIN mk_crm_produtos_composicao composicao ON (composicao.cd_produto = produto.codcrmproduto)\n"+
      "LEFT JOIN mk_planos_acesso produtos ON (produtos.codplano = composicao.cd_plano)\n"+
      "WHERE\n"+
      "plano.codplano = $1"; // Query SQL
      const values = [codplano];
      const result = await db.query(query, values); // await serve para que o código aguarde a consulta ser feita, para só após isso, ela ser enviada pro result
      return result.rows;
    } catch (error) {
     throw error;
    }
  }
};
 
module.exports = ProdutosPlano;