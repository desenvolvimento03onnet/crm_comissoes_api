const db = require('../../config/MK_db.js'); // Importe a configuração do banco de dados
 
const ValidaRenovacao = { // pode colocar o nome que quiser, recomendo colocar o nome referente ao Model que irá usar
  getRenovation: async (codcontrato) => { // esse async representa que essa é uma consulta assíncrona com o banco
    try {
      const query =
      "SELECT distinct\n"+
      "cliente.codpessoa codcliente,\n"+
      "cliente.nome_razaosocial cliente,\n"+
      "cidade.cidade,\n"+
      "contrato.codcontrato,\n"+
      "hist.dt_hr \"data\",\n"+
      "usuario.usr_codigo codusuario,\n"+
      "usuario.usr_login usuario,\n"+
      "operadorcidade.cidade operadorcid,\n"+
      "setor.descricao setor,\n"+
      "(\n"+
      "select\n"+
      "MIN(fatura.codfatura) codigo\n"+
      "from\n"+
      "mk_faturas fatura\n"+
      "where\n"+
      "fatura.data_vencimento =\n"+
      "(\n"+
      "select\n"+
      "MIN(faturas.data_vencimento)\n"+
      "from\n"+
      "mk_faturas faturas\n"+
      "where\n"+
      "faturas.tipo = 'R' and\n"+
      "faturas.suspenso = 'N' and\n"+
      "faturas.excluida = 'N' and\n"+
      "faturas.cd_pessoa = fatura.cd_pessoa and\n"+
      "faturas.data_vencimento >= (hist.dt_hr - INTERVAL '5 minutes')\n"+
      ") and\n"+
      "fatura.tipo = 'R' and\n"+
      "fatura.suspenso = 'N' and\n"+
      "fatura.excluida = 'N' and\n"+
      "fatura.cd_pessoa = cliente.codpessoa\n"+
      ") fatura,\n"+
      "planoV.vlr_mensalidade planoVelhoValor,\n"+
      "planoV.descricao planoValho,\n"+
      "planoN.vlr_mensalidade planoNovoValor,\n"+
      "planoN.descricao planoNovo,\n"+
      "vencimento.dia_vcto vencimento\n"+
      "FROM\n"+
      "mk_contratos contrato\n"+
      "LEFT JOIN mk_pessoas cliente ON (cliente.codpessoa = contrato.cliente)\n"+
      "LEFT JOIN mk_cidades cidade ON (cidade.codcidade = cliente.codcidade)\n"+
      "LEFT JOIN mk_contratos_historicos hist ON (hist.cd_contrato = contrato.codcontrato)\n"+
      "LEFT JOIN mk_planos_acesso planoV ON (planoV.codplano = hist.cd_plano_velho)\n"+
      "LEFT JOIN mk_planos_acesso planoN ON (planoN.codplano = hist.cd_plano_novo)\n"+
      "LEFT JOIN fr_usuario usuario ON (usuario.usr_login = hist.operador)\n"+
      "inner JOIN mk_usuarios_perfil_acesso_master setor ON (setor.codperfilacessomaster = usuario.cd_perfil_acesso AND setor.codperfilacessomaster IN (11,13,14,15,32))\n"+
      "LEFT JOIN mk_crm_operadores operador ON (operador.cd_operador = usuario.usr_codigo)\n"+
      "LEFT JOIN mk_pessoas operadorcadastro ON (operadorcadastro.codpessoa = operador.codpessoa)\n"+
      "LEFT JOIN mk_cidades operadorcidade ON (operadorcidade.codcidade = operadorcadastro.codcidade)\n"+
      "LEFT JOIN mk_faturamentos_regras vencimento ON (vencimento.codfaturamentoregra = contrato.cd_regra_faturamento)\n"+
      "WHERE\n"+
      "contrato.codcontrato = $1 AND\n"+
      "hist.cd_operacao IN (4,5) AND -- Upgrade e Downgrade\n"+
      "hist.dt_hr >= (SELECT (DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '4 month')::DATE)"; // Query SQL
      const values = [codcontrato];
      const result = await db.query(query, values); // await serve para que o código aguarde a consulta ser feita, para só após isso, ela ser enviada pro result
      return result.rows;
    } catch (error) {
     throw error;
    }
  }
};
 
module.exports = ValidaRenovacao;