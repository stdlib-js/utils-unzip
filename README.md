<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Unzip

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Unzip a [zipped array][@stdlib/utils/zip] (i.e., a nested array of tuples).

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import unzip from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-unzip@esm/index.mjs';
```

#### unzip( arr\[, idx] )

Unzips a [zipped array][@stdlib/utils/zip] (i.e., a nested `array` of tuples).

```javascript
var arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];

var out = unzip( arr );
// returns [ [ 1, 2 ], [ 'a', 'b' ], [ 3, 4 ] ];
```

To unzip specific tuple elements, you can provide an `array` of indices as an optional second argument.

```javascript
var arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];

var out = unzip( arr, [ 0, 2 ] );
// returns [ [ 1, 2 ], [ 3, 4 ] ];
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import unzip from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-unzip@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs';

var arr = new Array( 100 );
var len = 5;

var i;
var j;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = new Array( len );
    for ( j = 0; j < len; j++ ) {
        arr[ i ][ j ] = round( randu() * pow(10, j) );
    }
}
var out = unzip( arr );

console.dir( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-zip`][@stdlib/utils/zip]</span><span class="delimiter">: </span><span class="description">generate array tuples from input arrays.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-unzip.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-unzip

[test-image]: https://github.com/stdlib-js/utils-unzip/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-unzip/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-unzip/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-unzip?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-unzip.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-unzip/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-unzip/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-unzip/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-unzip/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-unzip/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-unzip/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-unzip/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-unzip/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-unzip/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/zip]: https://github.com/stdlib-js/utils-zip/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
