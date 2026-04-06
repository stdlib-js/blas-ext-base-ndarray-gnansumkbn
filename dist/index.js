/** @license Apache-2.0 */

'use strict';

/**
* Compute the sum of a one-dimensional ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas-ext-base-ndarray-gnansumkbn
*
* @example
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var gnansumkbn = require( '@stdlib/blas-ext-base-ndarray-gnansumkbn' );
*
* var xbuf = [ 1.0, -2.0, NaN, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = gnansumkbn( [ x ] );
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
