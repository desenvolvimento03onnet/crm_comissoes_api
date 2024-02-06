const db = require('../../config/MK_db.js'); // Importe a configuração do banco de dados
 
const DataLiquidacao = { // pode colocar o nome que quiser, recomendo colocar o nome referente ao Model que irá usar
  getSettlementDate: async (codfatura) => { // esse async representa que essa é uma consulta assíncrona com o banco
    try {
      const query =
      "SELECT\n"+
      "fatura.data_liquidacao dt_liquidacao\n"+
      "FROM\n"+
      "mk_faturas fatura\n"+
      "WHERE\n"+
      "fatura.codfatura = $1"; // Query SQL
      const values = [codfatura];
      const result = await db.query(query, values); // await serve para que o código aguarde a consulta ser feita, para só após isso, ela ser enviada pro result
      return result.rows;
    } catch (error) {
     throw error;
    }
  }
};
 
module.exports = DataLiquidacao;