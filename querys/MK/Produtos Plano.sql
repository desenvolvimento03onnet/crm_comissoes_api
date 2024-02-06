SELECT
plano.codplano codplano,
plano.descricao plano,
produtos.codplano codproduto,
produtos.descricao produto
FROM
mk_planos_acesso plano
LEFT JOIN mk_crm_produtos produto ON (produto.cd_plano_principal = plano.codplano)
LEFT JOIN mk_crm_produtos_composicao composicao ON (composicao.cd_produto = produto.codcrmproduto)
LEFT JOIN mk_planos_acesso produtos ON (produtos.codplano = composicao.cd_plano)
WHERE
plano.codplano = 6866