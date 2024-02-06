const db = require('../../config/MK_db.js'); // Importe a configuração do banco de dados
 
const CidadeOperador = { // pode colocar o nome que quiser, recomendo colocar o nome referente ao Model que irá usar
  getOperatorsCities: async () => { // esse async representa que essa é uma consulta assíncrona com o banco
    try {
      const query =
      "SELECT\n"+
      "usuario.usr_codigo codusuario,\n"+
      "usuario.usr_login usuario,\n"+
      "cidade.codcidade codcidade,\n"+
      "cidade.cidade\n"+
      "FROM\n"+
      "mk_crm_operadores operador\n"+
      "LEFT JOIN fr_usuario usuario ON (usuario.usr_codigo = operador.cd_operador)\n"+
      "LEFT JOIN mk_pessoas cliente ON (cliente.codpessoa = operador.codpessoa)\n"+
      "LEFT JOIN mk_cidades cidade ON (cidade.codcidade = cliente.codcidade)\n"+
      "WHERE\n"+
      "usuario.cd_perfil_acesso IN (11,13,15,32) AND\n"+
      "operador.perfil_ativo = 'S'\n"+
      "ORDER BY 4,2"; // Query SQL
      const result = await db.query(query); // await serve para que o código aguarde a consulta ser feita, para só após isso, ela ser enviada pro result
      return result.rows;
    } catch (error) {
     throw error;
    }
  }
};
 
module.exports = CidadeOperador;