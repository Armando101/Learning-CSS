## Herencia

__Inherit__ significa “Usa el valor de mi padre”, si el elemento padre no tiene definido dicho valor el navegador seguirá el DOM hasta que encuentre un elemento superior que lo contenga, y en ultima instancia de no tenerlo ningún elemento superior se aplicara el valor por defecto.

__Initial__. Este valor pertenece a la especificación CSS3 y cuando aplicamos a una propiedad el valor initial estamos dando el valor inicial y predefinido por el navegador en cuestión.

__Upset__. Este valor unset es una combinación entre inherit y initial, cuando utilizamos este valor en una propiedad esta tratara de heredar el valor de su elemento padre si este esta disponible, de no ser así este valor colocará el valor de la propiedad en su valor inicial, como si usáramos inherit e initial juntos.

## Especificidad
Hace referencia a ¿Cómo se controla el orden al declarar CSS?
1. Importancia.
2. Especificidad.
3. Orden en las fuentes.

La __importancia__ es uno de los conceptos más importantes. Si dos declaraciones tienen la misma importancia, la __especificidad__ de las reglas decidirá cuál se debe aplicar. Si las reglas tienen la misma especificidad, el __orden de las fuentes__ controla el resultado final

### Importancia
1. Hoja de estilo de agente de usuario (Estilos del navegador).
2. Declaraciones normales en hojas de estilos de autor (Nuestro .css).
3. Declaraciones importantes en hojas de estilos de autor (utilizar el !important).

### Especificidad
Selectores | Especificidad
-- | --
!important | 1,0,0,0,0
Inline styles | 0,1,0,0,0
#id | 0,0,1,0,0
.class | 0,0,0,1,0
tag | 0,0,0,0,1

### Orden de fuentes
En tus estilos, las declaraciones al final del documento anularán a las que sucedan antes en caso de conflicto.