select
	trans.codtransacaocartao
from
	mk_transacoes_cartao_geradas trans
WHERE
	trans.cd_fatura = 12052152
	AND trans.excluida = 'N'
	AND trans.dh >= ('2023-01-01'::TIMESTAMP - INTERVAL '5 minutes')   