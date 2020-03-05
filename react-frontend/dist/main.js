!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);class r extends o.Component{constructor(e){super(e),this.render=()=>o.createElement("div",{id:"siteTitle"},this.props.title)}}t.default=r},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(4),a=n(5);n(18),r.render(o.createElement(a.MainPage,null),document.getElementById("reactBody"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);n(1);const a=n(1),i=n(6),s=n(7),c=n(11),l=n(15),d=n(17);class u extends r.Component{constructor(e){super(e),this.render=()=>r.createElement("div",null,r.createElement(a.default,{title:"Highlights"}),r.createElement("div",{className:"rowContainerJustified mainScreen"},r.createElement(c.default,null),r.createElement("div",{className:"columnContainer"},r.createElement(i.default,{handleTextAreaClick:this.axiosSubmitText}),!0===this.state.isLoading?r.createElement("div",{ref:this.state.loaderRef},r.createElement(l.default,null)):null)),r.createElement("div",{className:"documentScreen rowContainer",ref:this.state.docRef},r.createElement(s.default,{document:this.state.document}),r.createElement("div",null," QUI FATTI SALIENTI ESTRATTI DOPO INTEGRAZIONE CON FRED "))),this.axiosSubmitText=e=>o(this,void 0,void 0,(function*(){let t=new FormData;t.append("input",e),this.switchLoadingBanner(!0);let n=(yield d.default.post("http://localhost:5050/saliency",t,{headers:{"Content-Type":"multipart/form-data"}})).data;this.setState({document:n,screen:"document",isLoading:!1});const o=this.state.docRef.current;this.scrollToMyRef(o)})),this.switchLoadingBanner=e=>o(this,void 0,void 0,(function*(){yield this.setState({isLoading:e});const t=this.state.loaderRef.current;this.scrollToMyRef(t)})),this.scrollToMyRef=e=>{const t=e.getBoundingClientRect().top+.3*(e.getBoundingClientRect().bottom-e.getBoundingClientRect().top);window.scrollTo({top:t,behavior:"smooth"})},this.state={document:{edus:[{score:null,heat_color:[],text:[]}]},screen:"main",isLoading:!1,loaderRef:r.createRef(),docRef:r.createRef()}}}t.MainPage=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);class r extends o.Component{constructor(e){super(e),this.render=()=>o.createElement("div",{className:"columnContainer"},o.createElement("textarea",{id:"textInput",value:this.state.text,onChange:this.handleTextChange,rows:4}),o.createElement("button",{className:"button",onClick:()=>this.props.handleTextAreaClick(this.state.text)},"Parse")),this.handleTextChange=e=>{this.setState({text:e.target.value})},this.state={text:"Texas Instruments Japan Ltd., a unit of Texas Instruments Inc., said it opened a plantin South Korea to manufacture control devices. The new plant, located in chinchonabout 60 miles from Seoul, will help meet increasing and diversifying demand forcontrol products in South Korea, the company said. The new plant will producecontrol devices used in mothor vehicles and household appliances."}}}t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(8),a=n(10);class i extends o.Component{constructor(e){super(e),this.render=()=>o.createElement("div",{id:"documentContainer"},this.props.document.edus.map((e,t)=>o.createElement(r.default,{key:t,score:e.score,heat_color:e.heat_color,text:e.text})),o.createElement("img",{className:"loadingImg",src:a.default,alt:"loading image"})," ")}}t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(9);class a extends o.Component{constructor(e){super(e),this.render=()=>{const e=this.getEduSaliencyColor();return o.createElement("p",{className:"edu",style:e},this.props.text.map((e,t)=>(console.log(t),o.createElement(r.default,{word:e,key:t}))))},this.getEduSaliencyColor=()=>(console.log(this.props.heat_color),this.props.heat_color.length>0?(console.log("rgb detected"),{color:`rgb(${this.props.heat_color})`}):(console.log("no color"),{}))}}t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);class r extends o.Component{constructor(e){super(e),this.render=()=>o.createElement("span",{className:"word"},this.props.word)}}t.default=r},function(e,t,n){"use strict";n.r(t),t.default=n.p+"baf29dca56f610ff50dba4a1e7a20b27.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(12),a=n(13),i=n(14);class s extends o.Component{constructor(e){super(e),this.render=()=>o.createElement("div",{id:"softwareDescription"},o.createElement("h1",{id:"sWDescTitle"}," Know Important Facts from your Document"),o.createElement("div",{className:"sWDesc"}," ","You can use Highlights web interface to parse a document and extract salient information. Just write some text above or insert a plain text file. Highlights will parse it with the help of R2R and FRED. R2R performs discourse parsing. FRED do semantic parsing. You will get back an analyzed text, annotated with saliency. Salient parts are colored with red, while less important one goes to blue."),o.createElement("br",null),o.createElement("img",{className:"img",src:r.default,alt:"documents sheets fogli scrivania deck"}),o.createElement("img",{className:"img",src:a.default,alt:"documents sheets fogli scrivania deck"}),o.createElement("img",{className:"img",src:i.default,alt:"documents sheets fogli scrivania deck"}),o.createElement("div",{className:"sWDesc"},o.createElement("br",null)," You can use Highlights web interface to parse a document and extract salient information. Just write some text above or insert a plain text file. Highlights will parse it with the help of R2R and FRED. R2R performs discourse parsing. FRED do semantic parsing. You will get back an analyzed text, annotated with saliency. Salient parts are colored with red, while less important one goes to blue. FRED. R2R performs discourse parsing. FRED do semantic parsing. You will get back an analyzed text, annotated with saliency. Salient parts are colored with red, while less important one goes to blue."))}}t.default=s},function(e,t,n){"use strict";n.r(t),t.default=n.p+"770e9f15c68b1a2354800b66fbd9d189.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"488f859f9dd80b975e53a610cd6f9aa2.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"c3c5396956a7238ef5893a0c060b3850.jpeg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(16);class a extends o.Component{constructor(e){super(e),this.render=()=>o.createElement("div",{className:"loaderContainer"}," ",o.createElement("img",{className:"loadingImg",src:r.default,alt:"loading image"})," ")}}t.default=a},function(e,t,n){"use strict";n.r(t),t.default=n.p+"069f3a303c11be583068adb1ccef3132.gif"},function(e,t){e.exports=axios},function(e,t,n){var o=n(19),r=n(20);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],c=t.base?a[0]+t.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,g=0;function h(e,t){var n,o,r;if(t.singleton){var a=g++;n=m||(m=l(t)),o=p.bind(null,n,a,!1),r=p.bind(null,n,a,!0)}else n=l(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);i[r].references--}for(var a=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},function(e,t,n){(t=n(21)(!1)).push([e.i,'/* Components */\n\n#siteTitle {\n  color: white;\n  background-color: #56347c;\n  font-size: 30px;\n  margin-top: 3%;\n  padding-left: 3%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n#textInput {\n  resize: none;\n  width: 300px;\n  height: 400px;\n  margin-right: 10px;\n  margin-top: 30px;\n  word-wrap: break-word;\n  resize: none;\n  overflow: hidden;\n  padding: 1%;\n  padding-left: 3%;\n  border-radius: 1%;\n  font-family: "Open Sans", sans-serif;\n  letter-spacing: 1px;\n  background-color: #fff;\n  color: #222;\n  font-family: Courier, monospace;\n  font-weight: normal;\n  font-size: 20px;\n  resize: none;\n  line-height: 40px;\n  padding-left: 100px;\n  padding-right: 50px;\n  padding-top: 45px;\n  padding-bottom: 34px;\n  background-image: url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png),\n    url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\n  background-repeat: repeat-y, repeat;\n  -webkit-border-radius: 12px;\n  border-radius: 12px;\n  -webkit-box-shadow: 0px 2px 14px #000;\n  box-shadow: 0px 2px 14px #000;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n}\n\n#softwareDescription {\n  margin-top: 5px;\n  margin-left: 10px;\n  margin-right: 100px;\n}\n\n#sWDescTitle {\n  font-family: Helvetica, Segoe, "Segoe UI", Arial, sans-serif;\n}\n\n.sWDesc {\n  font-family: Helvetica, Segoe, "Segoe UI", Arial, sans-serif;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.loaderContainer {\n  margin-top: 40px;\n}\n\n.loadingImg {\n  margin: auto;\n  max-width: 180px;\n  height: auto;\n  border-radius: 2%;\n  margin-bottom: 30px;\n  display: block;\n}\n\n.mainScreen {\n  margin-top: 50px;\n  margin-left: 100px;\n  margin-right: 100px;\n}\n\n.linebreaker {\n  width: 2000px;\n}\n\n.documentScreen {\n  /* margin-left: 200px;\n  margin-right: 200px; */\n  border: solid 5px blue;\n}\n\n#documentContainer {\n  margin-top: 30px;\n  margin-right: 400px;\n  margin-left: 100px;\n}\n\n.edu {\n  font-family: Helvetica, Segoe, "Segoe UI", Arial, sans-serif;\n  font-size: 20px;\n  letter-spacing: 0.4px;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  margin-right: 3px;\n}\n\n.word {\n  margin-right: 3px;\n  display: inline-block;\n}\n\n#textInput:focus {\n  border-color: blue;\n}\n\n.button {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 4%;\n  border-radius: 8%;\n  cursor: pointer;\n  float: right;\n  height: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  color: #fff;\n  text-shadow: 0px -1px 0px #000000;\n  -webkit-border-radius: 8px;\n  border-radius: 8px;\n  border-top: 1px solid #fff;\n  -webkit-box-shadow: 0px 2px 14px #000;\n  box-shadow: 0px 2px 14px #000;\n  background-color: #56347c;\n  /* background-image: url(https://static.tumblr.com/maopbtg/ZHLmgtok7/button.png); */\n  background-repeat: repeat-x;\n}\n\n.img {\n  max-width: 180px;\n  height: auto;\n  border-radius: 2%;\n  float: right;\n  margin-bottom: 30px;\n}\n\n/* generics : { flex , ... } */\n\n.columnContainer {\n  display: flex;\n  flex-direction: column;\n}\n\n.rowContainerJustified {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.rowContainer {\n  display: flex;\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}}]);
//# sourceMappingURL=main.js.map