TRANSPILADOR = scss
PARAMETROS = -w -t expanded
RUTAS = recursos/activos/scss:recursos/vista/css

main:
	${TRANSPILADOR} ${PARAMETROS} ${RUTAS}