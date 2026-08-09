/** @license Apache-2.0 */

'use strict';

/**
* Compute the sum of a one-dimensional ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas-ext-base-ndarray-gnansumkbn
*
* @example
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var gnansumkbn = require( '@stdlib/blas-ext-base-ndarray-gnansumkbn' );
*
* var x = vector( [ 1.0, -2.0, NaN, 2.0 ], 'generic' );
*
* var v = gnansumkbn( [ x ] );
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
