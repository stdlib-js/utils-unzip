// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.2-esm/index.mjs";function s(s,o){var n,i,f,h,d,l,m;if(!t(s))throw new TypeError(r("1YH1s"));for(i=s.length,d=0;d<i;d++)if(!t(s[d]))throw new TypeError(r("1YH1t"));if(n=s[0].length,arguments.length>1){if(!t(o))throw new TypeError(r("1YH1u"));for(d=0;d<o.length;d++){if(m=o[d],!e(m))throw new TypeError(r("1YH1v"));if(m<0||m>n)throw new Error(r("1YHD4"))}n=o.length}else for(o=new Array(n),d=0;d<n;d++)o[d]=d;for(f=new Array(n),l=0;l<n;l++){for(h=new Array(i),m=o[l],d=0;d<i;d++)h[d]=s[d][m];f[l]=h}return f}export{s as default};
//# sourceMappingURL=index.mjs.map