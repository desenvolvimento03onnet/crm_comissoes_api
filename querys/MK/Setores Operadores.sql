SELECT
usuario.usr_codigo codusuario,
usuario.usr_login usuario,
setor.codperfilacessomaster codsetor,
setor.descricao setor
FROM
fr_usuario usuario
LEFT JOIN mk_usuarios_perfil_acesso_master setor ON (setor.codperfilacessomaster = usuario.cd_perfil_acesso)
WHERE
setor.codperfilacessomaster IN (11,13,15,32)
ORDER BY 4,2