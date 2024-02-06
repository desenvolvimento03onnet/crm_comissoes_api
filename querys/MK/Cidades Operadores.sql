SELECT
usuario.usr_codigo codusuario,
usuario.usr_login usuario,
cidade.codcidade codcidade,
cidade.cidade
FROM
mk_crm_operadores operador
LEFT JOIN fr_usuario usuario ON (usuario.usr_codigo = operador.cd_operador)
LEFT JOIN mk_pessoas cliente ON (cliente.codpessoa = operador.codpessoa)
LEFT JOIN mk_cidades cidade ON (cidade.codcidade = cliente.codcidade)
WHERE
usuario.cd_perfil_acesso IN (11,13,15,32) AND
operador.perfil_ativo = 'S'
ORDER BY 4,2