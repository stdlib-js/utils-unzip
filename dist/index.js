"use strict";var g=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var p=g(function(y,v){"use strict";var h=require("@stdlib/assert-is-integer"),l=require("@stdlib/assert-is-array");function f(n,e){var i,s,u,o,r,a,t;if(!l(n))throw new TypeError("invalid argument. Must provide a zipped array.");for(s=n.length,r=0;r<s;r++)if(!l(n[r]))throw new TypeError("invalid argument. Array must only contain arrays.");if(i=n[0].length,arguments.length>1){if(!l(e))throw new TypeError("invalid argument. Indices must be specified as an array.");for(r=0;r<e.length;r++){if(t=e[r],!h(t))throw new TypeError("invalid argument. All indices must be integers.");if(t<0||t>i)throw new Error("invalid argument. Must provide valid indices (i.e., must be a nonnegative integer less than or equal to the tuple length).")}i=e.length}else for(e=[],r=0;r<i;r++)e.push(r);for(u=[],a=0;a<i;a++){for(o=[],t=e[a],r=0;r<s;r++)o.push(n[r][t]);u.push(o)}return u}v.exports=f});var m=p();module.exports=m;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
