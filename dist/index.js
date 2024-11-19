"use strict";var p=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var g=p(function(y,v){"use strict";var f=require("@stdlib/assert-is-integer"),l=require("@stdlib/assert-is-array");function h(n,e){var t,o,s,u,r,i,a;if(!l(n))throw new TypeError("invalid argument. Must provide a zipped array.");for(o=n.length,r=0;r<o;r++)if(!l(n[r]))throw new TypeError("invalid argument. Array must only contain arrays.");if(t=n[0].length,arguments.length>1){if(!l(e))throw new TypeError("invalid argument. Indices must be specified as an array.");for(r=0;r<e.length;r++){if(a=e[r],!f(a))throw new TypeError("invalid argument. All indices must be integers.");if(a<0||a>t)throw new Error("invalid argument. Must provide valid indices (i.e., must be a nonnegative integer less than or equal to the tuple length).")}t=e.length}else for(e=new Array(t),r=0;r<t;r++)e[r]=r;for(s=new Array(t),i=0;i<t;i++){for(u=new Array(o),a=e[i],r=0;r<o;r++)u[r]=n[r][a];s[i]=u}return s}v.exports=h});var m=g();module.exports=m;
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
