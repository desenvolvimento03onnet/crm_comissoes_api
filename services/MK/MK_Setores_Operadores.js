const db = require('../../config/MK_db.js'); // Importe a configuração do banco de dados
 
const SetorOperador = { // pode colocar o nome que quiser, recomendo colocar o nome referente ao Model que irá usar
  getOperatorsSectors: async () => { // esse async representa que essa é uma consulta assíncrona com o banco
    try {
      const query =
      "SELECT\n"+
      "usuario.usr_codigo codusuario,\n"+
      "usuario.usr_login usuario,\n"+
      "setor.codperfilacessomaster codsetor,\n"+
      "setor.descricao setor\n"+
      "FROM\n"+
      "fr_usuario usuario\n"+
      "LEFT JOIN mk_usuarios_perfil_acesso_master setor ON (setor.codperfilacessomaster = usuario.cd_perfil_acesso)\n"+
      "WHERE\n"+
      "setor.codperfilacessomaster IN (11,13,15,32)\n"+
      "ORDER BY 4,2"; // Query SQL
      const result = await db.query(query); // await serve para que o código aguarde a consulta ser feita, para só após isso, ela ser enviada pro result
      return result.rows;
    } catch (error) {
     throw error;
    }
  }
};
 
module.exports = SetorOperador;