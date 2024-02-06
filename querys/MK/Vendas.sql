SELECT distinct
cliente.codpessoa codcliente,
cliente.nome_razaosocial cliente,
cidade.cidade,
contrato.codcontrato,
hist.dt_hr "data",
usuario.usr_codigo codusuario,
usuario.usr_login usuario,
operadorcidade.cidade operadorcid,
setor.descricao setor,
(
	select
		MIN(fatura.codfatura) codigo
	from
	mk_faturas fatura
	where
	fatura.data_vencimento = 
	(
	select
		MIN(faturas.data_vencimento)
	from
		mk_faturas faturas
	where
		faturas.tipo = 'R' and
		faturas.suspenso = 'N' and
		faturas.excluida = 'N' and
		faturas.cd_pessoa = fatura.cd_pessoa and
		faturas.data_vencimento >= (hist.dt_hr - INTERVAL '5 minutes')
	) and
	fatura.tipo = 'R' and
	fatura.suspenso = 'N' and
	fatura.excluida = 'N' and
	fatura.cd_pessoa = cliente.codpessoa
) fatura,
plano.vlr_mensalidade valormensal,
vencimento.dia_vcto vencimento
FROM
mk_contratos contrato
LEFT JOIN mk_pessoas cliente ON (cliente.codpessoa = contrato.cliente)
LEFT JOIN mk_cidades cidade ON (cidade.codcidade = cliente.codcidade)
LEFT JOIN mk_contratos_historicos hist ON (hist.cd_contrato = contrato.codcontrato)
LEFT JOIN mk_planos_acesso plano ON (plano.codplano = contrato.plano_acesso)
LEFT JOIN fr_usuario usuario ON (usuario.usr_login = hist.operador)
LEFT JOIN mk_usuarios_perfil_acesso_master setor ON (setor.codperfilacessomaster = usuario.cd_perfil_acesso AND setor.codperfilacessomaster IN (11,13,14,15,32))
LEFT JOIN mk_crm_operadores operador ON (operador.cd_operador = usuario.usr_codigo)
LEFT JOIN mk_pessoas operadorcadastro ON (operadorcadastro.codpessoa = operador.codpessoa)
LEFT JOIN mk_cidades operadorcidade ON (operadorcidade.codcidade = operadorcadastro.codcidade)
LEFT JOIN mk_faturamentos_regras vencimento ON (vencimento.codfaturamentoregra = contrato.cd_regra_faturamento)
WHERE
contrato.codcontrato = 196858 AND
hist.cd_operacao = 1 AND -- Venda
hist.dt_hr >= (SELECT (DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '4 month')::DATE)