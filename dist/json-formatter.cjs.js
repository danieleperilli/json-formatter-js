"use strict";function t(t){return null===t?"null":typeof t}function r(t){return!!t&&"object"==typeof t}function e(t){if(void 0===t)return"";if(null===t)return"Object";if("object"==typeof t&&!t.constructor)return"Object";var r=/function ([^(]*)/.exec(t.constructor.toString());return r&&r.length>1?r[1]:""}function n(t,r,e){return"null"===t||"undefined"===t?t:("string"!==t&&"stringifiable"!==t||(e='"'+(e.replace(/"/g,'\\"')+'"')),"function"===t?r.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{…}":e)}function o(o){var i="";return r(o)?(i=e(o),Array.isArray(o)&&(i+="["+o.length+"]")):i=n(t(o),o,o),i}function i(t){return"json-formatter-"+t}function s(t,r,e){var n=document.createElement(t);return r&&n.classList.add(i(r)),void 0!==e&&(e instanceof Node?n.appendChild(e):n.appendChild(document.createTextNode(String(e)))),n}!function(t){if(t&&"undefined"!=typeof window){var r=document.createElement("style");r.setAttribute("media","screen"),r.innerHTML=t,document.head.appendChild(r)}}('.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n');var a=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,f=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,m=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,l=window.requestAnimationFrame||function(t){return t(),0},c={hoverPreviewEnabled:!1,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null,maxArrayItems:100},h=function(){function h(t,r,e,n,o,i,s){void 0===r&&(r=1),void 0===e&&(e=c),void 0===i&&(i=[]),this.json=t,this.open=r,this.config=e,this.key=n,this.displayKey=o,this.path=i,this.arrayRange=s,this._isOpen=null,void 0===this.config.hoverPreviewEnabled&&(this.config.hoverPreviewEnabled=c.hoverPreviewEnabled),void 0===this.config.hoverPreviewArrayCount&&(this.config.hoverPreviewArrayCount=c.hoverPreviewArrayCount),void 0===this.config.hoverPreviewFieldCount&&(this.config.hoverPreviewFieldCount=c.hoverPreviewFieldCount),void 0===this.config.useToJSON&&(this.config.useToJSON=c.useToJSON),void 0===this.config.maxArrayItems&&(this.config.maxArrayItems=c.maxArrayItems),""===this.key&&(this.key='""'),void 0===this.displayKey&&(this.displayKey=this.key)}return Object.defineProperty(h.prototype,"isOpen",{get:function(){return null!==this._isOpen?this._isOpen:this.open>0},set:function(t){this._isOpen=t},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isDate",{get:function(){return this.json instanceof Date||"string"===this.type&&(a.test(this.json)||m.test(this.json)||f.test(this.json))},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isUrl",{get:function(){return"string"===this.type&&0===this.json.indexOf("http")},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isLargeArray",{get:function(){return this.isArray&&this.json.length>this.config.maxArrayItems},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isArrayRange",{get:function(){return this.isArray&&void 0!==this.arrayRange&&2==this.arrayRange.length},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isObject",{get:function(){return r(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&"stringifiable"===this.type},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"hasKey",{get:function(){return void 0!==this.key},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"constructorName",{get:function(){return e(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":t(this.json)},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"keys",{get:function(){if(this.isObject){var t=Object.keys(this.json);if(this.isLargeArray){var r=Math.ceil(this.json.length/this.config.maxArrayItems);t=[];for(var e=0;e<r;e++){var n=e*this.config.maxArrayItems,o=Math.min(this.json.length-1,n+(this.config.maxArrayItems-1));t.push(n+" … "+o)}}return!this.isArray&&this.config.sortPropertiesBy?t.sort(this.config.sortPropertiesBy):t}return[]},enumerable:!1,configurable:!0}),h.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(i("open")))},h.prototype.openAtDepth=function(t){void 0===t&&(t=1),t<0||(this.open=t,this.isOpen=0!==t,this.element&&(this.removeChildren(!1),0===t?this.element.classList.remove(i("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(i("open")))))},h.prototype.getInlinepreview=function(){var t=this;if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array["+this.json.length+"]":"["+this.json.map(o).join(", ")+"]";var r=this.keys,e=r.slice(0,this.config.hoverPreviewFieldCount).map((function(r){return r+":"+o(t.json[r])})),n=r.length>=this.config.hoverPreviewFieldCount?"…":"";return"{"+e.join(", ")+n+"}"},h.prototype.render=function(){this.element=s("div","row");var t=this.isObject?s("a","toggler-link"):s("span");if(this.isObject&&!this.useToJSON&&t.appendChild(s("span","toggler")),this.isArrayRange?t.appendChild(s("span","range","["+this.displayKey+"]")):this.hasKey&&(t.appendChild(s("span","key",this.displayKey+":")),this.element.dataset.path=JSON.stringify(this.path)),this.isObject&&!this.useToJSON){var r=s("span","value"),e=s("span");if(!this.isArrayRange){var o=s("span","constructor-name",this.constructorName);e.appendChild(o)}if(this.isArray&&!this.isArrayRange){var a=s("span");a.appendChild(s("span","bracket","[")),a.appendChild(s("span","number",this.json.length)),a.appendChild(s("span","bracket","]")),e.appendChild(a)}r.appendChild(e),t.appendChild(r)}else{(r=this.isUrl?s("a"):s("span")).classList.add(i(this.type)),this.isDate&&r.classList.add(i("date")),this.isUrl&&(r.classList.add(i("url")),r.setAttribute("href",this.json));var f=n(this.type,this.json,this.useToJSON?this.json.toJSON():this.json);r.appendChild(document.createTextNode(f)),t.appendChild(r)}if(this.isObject&&this.config.hoverPreviewEnabled){var m=s("span","preview-text");m.appendChild(document.createTextNode(this.getInlinepreview())),t.appendChild(m)}var l=s("div","children");return this.isObject&&l.classList.add(i("object")),this.isArray&&l.classList.add(i("array")),this.isEmpty&&l.classList.add(i("empty")),this.config&&this.config.theme&&this.element.classList.add(i(this.config.theme)),this.isOpen&&this.element.classList.add(i("open")),this.element.appendChild(t),this.element.appendChild(l),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&t.addEventListener("click",this.toggleOpen.bind(this)),this.element},h.prototype.appendChildren=function(t){var r=this;void 0===t&&(t=!1);var e=this.element.querySelector("div."+i("children"));if(e&&!this.isEmpty){var n=function(t,n){var o=r.isLargeArray?[n*r.config.maxArrayItems,Math.min(r.json.length-1,n*r.config.maxArrayItems+(r.config.maxArrayItems-1))]:void 0,i=r.isArrayRange?(r.arrayRange[0]+n).toString():t,s=new h(o?r.json.slice(o[0],o[1]+1):r.json[t],r.open-1,r.config,t,i,o?r.path:r.path.concat(i),o);e.appendChild(s.render())};if(t){var o=0,s=function(){var t=r.keys[o];n(t,o),(o+=1)<r.keys.length&&(o>10?s():l(s))};l(s)}else this.keys.forEach((function(t,r){return n(t,r)}))}},h.prototype.removeChildren=function(t){void 0===t&&(t=!1);var r=this.element.querySelector("div."+i("children"));if(t){var e=0,n=function(){r&&r.children.length&&(r.removeChild(r.children[0]),(e+=1)>10?n():l(n))};l(n)}else r&&(r.innerHTML="")},h}();module.exports=h;
