const nodo = ( _nodo ) => {
  if ( typeof _nodo !== "string" ) return;
  return document.createElement( _nodo );
}