const nodo = ( _nodo ) => {
  if ( typeof _nodo !== "string" ) return;
  return document.createElement( _nodo );
};

const insertarNodo = ( _nodo, _nodoPadre ) => {
  if ( typeof _nodo === "undefined" && typeof _nodoPadre === "undefined")
    return;

  _nodo.append( _nodoPadre );
};

const colores = ( cantidad, _nodoPadre ) => {
  if ( isNaN( cantidad ) )
    return;

  let 
    _colores = [],
    content = nodo( "div" );

  content.classList.add( "colores" );

  for ( let i = 0; i < cantidad; i++ ) {
    _colores.push( nodo( "div" ) );

    _colores[i].classList.add( "colores__item" );
  }

  for ( let color of _colores ) {
    console.log( color );
    content.append( color );
  }

  if ( _nodoPadre !== undefined && _nodoPadre !== null ) {
    _nodoPadre.append( content );
    return;
  }

  return content;
};

console.log( colores( 30, app ) );