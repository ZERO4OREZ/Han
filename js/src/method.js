define(function() {

var
  $ = {
    // Simplified query selector
    //
    // - $.id
    // - $.tag
    // - $.qsa
    id: function( selector, context ) {
      return ( context || document ).getElementById( selector )
    },

    tag: function( selector, context ) {
      return this.makeArray(
        ( context || document ).getElementsByTagName( selector )
      )
    },

    qsa: function( selector, context ) {
      return this.makeArray(
        ( context || document ).querySelectorAll( selector )
      )
    },

    // Create a new document fragment or element with/without
    // classes
    create: function( elem, clazz ) {
      var
        elem = '!' === elem ?
          document.createDocumentFragment() :
          document.createElement( elem )
      ;

      try {
        if ( clazz ) {
          elem.className = clazz
        }
      } catch ( e ) {}

      return elem
    },

    // Clone a node (text, element or fragment) deeply or
    // childlessly
    clone: function( node, deep ) {
      return node.cloneNode( deep || true )
    },

    // Remove a node (text, element or fragment)
    remove: function( node ) {
      return node.parentNode.removeChild( node )
    },

    // Set attributes all in once with object
    setAttr: function( target, attr ) {
      var
        len = attr.length
      ;

      if ( typeof attr !== 'object' ) {
        return
      }

      // Native NamedNodeMap
      if (
        typeof attr[0] === 'object' &&
        'name' in attr[0]
      ) {
        for ( var i = 0; i < len; i++ ) {
          if ( attr[ i ].value !== undefined ) {
            target.setAttribute( attr[ i ].name, attr[ i ].value )
          }
        }

      // Plain object
      } else {
        for ( var name in attr ) {
          if (
            attr.hasOwnProperty( name ) &&
            attr[ name ] !== undefined
          ) {
            target.setAttribute( name, attr[ name ] )
          }
        }
      }
      return target
    },

    // Convert array-like objects into real arrays
    // for the native prototype methods
    makeArray: function( obj ) {
      return Array.prototype.slice.call( obj )
    },

    // Extend target's method with objects
    extend: function( target, object ) {
      var
        isExtensible = typeof target === 'object' || typeof target === 'function'
      ;

      if ( !isExtensible || typeof object !== 'object' ) {
        return
      }

      for ( var name in object ) {
        if ( object.hasOwnProperty( name )) {
          target[ name ] = object[ name ]
        }
      }
      return target
    }
  }
;

return $
})
