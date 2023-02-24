(()=>{"use strict";var e={913:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(81),n=o.n(r),i=o(645),a=o.n(i)()(n());a.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}body{font-family:"Poppins",sans-serif;background-color:#eee;display:flex;align-items:center;justify-content:center;min-height:100vh}.todo-container{position:relative;display:flex;flex-direction:column;justify-content:center;box-shadow:0 3px 10px rgba(0,0,0,.2);width:70vw;background-color:#fff}form>.press-enter,.todo-header .refresh{color:#b9abab}.todo-header,form{display:flex;justify-content:space-between;align-items:center;padding:.5rem 1rem;border-bottom:1px solid #eee}.todo-header{padding:1.5rem 1rem}.todo-list{width:100%;list-style:none;padding:0}.todo-list .todo-item{display:flex;justify-content:space-between;align-items:center;padding:.5rem 1rem;border-bottom:1px solid #eee;gap:1.5rem}.todo-item .hide{display:none}.todo-item .todo-completed,.todo-item .todo-check,.todo-item .todo-delete{cursor:pointer;color:#ccc}.todo-item .todo-check:hover,.todo-item .todo-completed:hover{color:green}.todo-item .line-through{text-decoration:line-through}.todo-item .todo-delete:hover{color:red}.todo-list li .todo-ellipsis{cursor:move;color:#ccc}.todo-list li .todo-ellipsis:hover{color:#000}input{border:none;padding:10px;outline:none;flex-grow:4;font-size:16px;background-color:rgba(0,0,0,0)}.clear-todo{background-color:#eee;border:none;display:flex;align-items:center;justify-content:center;padding:2rem;outline:none;cursor:pointer;font-size:16px}form>input{font-style:italic}form .press-enter{transform:rotate(90deg)}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,r=0;r<t.length;r++)if(t[r].identifier===e){o=r;break}return o}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=o(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=n(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function n(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var i=r(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=o(i[a]);t[c].references--}for(var s=r(e,n),d=0;d<i.length;d++){var l=o(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,o){var r=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{var e=o(379),t=o.n(e),r=o(795),n=o.n(r),i=o(569),a=o.n(i),c=o(565),s=o.n(c),d=o(216),l=o.n(d),u=o(589),p=o.n(u),f=o(913),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(e,t=!1,o){this.completed=t,this.index=e,this.description=o}}class v{constructor(){this.todoObjects=[]}static addTodo=e=>{this.todoObjects.push(new h(this.todoObjects.length,!1,e.target.value)),e.target.value=""};static deleteTodo=e=>{this.todoObjects.splice(e,1),this.todoObjects.forEach(((e,t)=>{e.index=t}))};static updateTodo=(e,t)=>{this.todoObjects[e].description=t};static completeTodo=e=>{this.todoObjects[e].completed=!this.todoObjects[e].completed}}window.onload=()=>{const e=document.querySelector("form"),t=document.querySelector("form .input-todo"),o=document.querySelector(".todo-list");v.todoObjects=JSON.parse(localStorage.getItem("todoObjects"))||[];const r=()=>{var e;o.innerHTML="",o.append(...(e=JSON.parse(localStorage.getItem("todoObjects")),e.map((e=>{const t=document.createElement("li");return t.classList.add("todo-item"),t.setAttribute("data-index",e.index),t.setAttribute("data-completed",e.completed),t.innerHTML=e.completed?"\n  <div class='todo-completed'><i class='fa-regular fa-circle-check fa-2x'></i></div>":"\n  <div class='todo-check'><i class=\"fa-regular fa-square fa-2x\"></i></div>  ",t.innerHTML+=`\n  <input type='text' class='todo-edit' value='${e.description}'/>\n  <i class="fas fa-ellipsis-v todo-ellipsis fa-2x"></i>\n  <div class='todo-delete hide'><i class="fa-regular fa-trash-can fa-2x"></i></div>\n  `,t}))))},n=()=>{localStorage.setItem("todoObjects",JSON.stringify(v.todoObjects))},i=()=>{const e=document.querySelectorAll(".todo-edit"),t=document.querySelectorAll(".todo-check"),o=document.querySelectorAll(".todo-completed"),a=document.querySelectorAll(".todo-delete"),c=e=>{e.addEventListener("click",(t=>{v.completeTodo(e.parentElement.dataset.index),n(),r(),i(),e.classList.contains("todo-check")?t.currentTarget.nextElementSibling.classList.add("line-through"):e.classList.contains("todo-completed")&&t.currentTarget.nextElementSibling.classList.remove("line-through")}))};e.forEach(((e,t)=>{e.addEventListener("input",(e=>{v.updateTodo(t,e.target.value),n()}))})),e.forEach((e=>{e.addEventListener("mousedown",(()=>{e.parentElement.style.backgroundColor="#f1f8b5",e.nextElementSibling.nextElementSibling.classList.remove("hide"),e.nextElementSibling.classList.add("hide")}))})),e.forEach((e=>{e.parentElement.addEventListener("mouseout",(()=>{e.parentElement.style.backgroundColor="#fff"}))})),a.forEach(((e,t)=>{e.addEventListener("click",(()=>{v.deleteTodo(t),n(),r(),i()}))})),t.forEach((e=>{c(e)})),o.forEach((e=>{c(e)}))};document.querySelector(".clear-todo").addEventListener("click",(()=>{(e=>{if(Array.isArray(e)&&e.length){const t=e.filter((e=>!e.completed));t.forEach(((e,t)=>{e.index=t})),localStorage.setItem("todoObjects",JSON.stringify(t))}})(v.todoObjects),v.todoObjects=JSON.parse(localStorage.getItem("todoObjects"))||[],r(),i()})),v.todoObjects.length&&(r(),i()),e.addEventListener("submit",(e=>{e.preventDefault()})),t.addEventListener("keyup",(e=>{13===e.keyCode&&(e.preventDefault(),e.target.value&&v.addTodo(e),n(),r(),i())}))}})()})();