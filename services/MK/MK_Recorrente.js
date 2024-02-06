const db = require('../../config/MK_db.js'); // Importe a configuração do banco de dados
 
const Recorrente = { // pode colocar o nome que quiser, recomendo colocar o nome referente ao Model que irá usar
  getRecurrent: async (codfatura, data) => { // esse async representa que essa é uma consulta assíncrona com o banco
    try {
      const query =
      "select\n"+
      "trans.codtransacaocartao\n"+
      "from\n"+
      "mk_transacoes_cartao_geradas trans\n"+
      "WHERE\n"+
      "trans.cd_fatura = $1\n"+
      "AND trans.excluida = 'N'\n"+                                                                                           
      "AND trans.dh >= ($2::TIMESTAMP - INTERVAL '5 minutes') "; // Query SQL
      const values = [codfatura, data];
      const result = await db.query(query, values); // await serve para que o código aguarde a consulta ser feita, para só após isso, ela ser enviada pro result
      return result.rows;
    } catch (error) {
     throw error;
    }
  }
};
 
module.exports = Recorrente;