// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";function n(n,s){var i,o,l,h,d,a,f;if(!t(n))throw new TypeError(r("0lz23"));for(o=n.length,d=0;d<o;d++)if(!t(n[d]))throw new TypeError(r("0lz24"));if(i=n[0].length,arguments.length>1){if(!t(s))throw new TypeError(r("0lz25"));for(d=0;d<s.length;d++){if(f=s[d],!e(f))throw new TypeError(r("0lz26"));if(f<0||f>i)throw new Error("invalid argument. Must provide valid indices (i.e., must be a nonnegative integer less than or equal to the tuple length).")}i=s.length}else for(s=new Array(i),d=0;d<i;d++)s[d]=d;for(l=new Array(i),a=0;a<i;a++){for(h=new Array(o),f=s[a],d=0;d<o;d++)h[d]=n[d][f];l[a]=h}return l}export{n as default};
//# sourceMappingURL=index.mjs.map