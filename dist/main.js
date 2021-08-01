(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap);"]),r.push([e.id,'* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  font-family: "Poppins", sans-serif;\n  height: 100%;\n}\n\n#header {\n  background-color: #a2dbfa;\n  display: flex;\n  text-align: center;\n}\n\n#title {\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n#menu {\n  width: 3.5%;\n  margin-left: 1.8rem;\n  margin-right: 33%;\n  cursor: pointer;\n}\n\n#addIcon {\n  width: 3.5%;\n  margin-left: 33%;\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n#sidebar {\n  flex-flow: column;\n  flex: 0 1 auto;\n  background-color: #e8f0f2;\n  position: absolute;\n  height: 100%;\n  width: 32%;\n}\n\n.sidebarIcon {\n  width: 13%;\n  margin-left: 10%;\n  margin-right: 8%;\n  cursor: pointer;\n}\n\n.sidebarHeader {\n  display: flex;\n  margin-top: 1%;\n  border: 10px solid #e8f0f2;\n  cursor: pointer;\n}\n\n.sidebar {\n  margin-top: 3%;\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n\n.sidebarHeader:hover {\n  background-color: white;\n  border: 10px solid #e8f0f2;\n}\n\n.projectsHeader {\n  margin: 8% 12% 3%;\n  font-size: 1.5rem;\n}\n\n.projectList {\n  list-style: none;\n}\n\n.projectItem {\n  margin: 2% 25% 2% 10%;\n  padding-left: 10%;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n\n.active {\n  font-weight: bold;\n  border: 2px solid #a2dbfa;\n  box-shadow: 10px 5px 5px#a2dbfa;\n}\n\n.addProject {\n  display: flex;\n  margin: 2%;\n}\n\n.addIcon {\n  width: 8%;\n  margin-left: 15%;\n  cursor: pointer;\n}\n\nh4.addProject {\n  color: rgba(0, 0, 0, 50%);\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n\n#display {\n  position: relative;\n  left: 28%;\n  width: 68%;\n  min-height: 88vh;\n}\n\nh1.display {\n  font-weight: 400;\n  margin: 7% 0% 0 10%;\n  padding-left: 10%;\n}\n\nli.display {\n  margin: 3% 15%;\n  font-weight: 500;\n  border-bottom: 2px solid #e0e0e0;\n  list-style: none;\n  width: 77%;\n}\n\n.taskContent {\n  display: flex;\n  flex-flow: column;\n  width: 60%;\n}\n\n.displayItems li {\n  display: inline-block;\n}\n\n.taskDate {\n  font-weight: 400;\n  font-size: 0.8rem;\n}\n\n.taskIconContainer {\n  position: absolute;\n  left: 85%;\n}\n\n.editIcon {\n  position: relative;\n  top: 20px;\n  cursor: pointer;\n}\n\n.deleteIcon {\n  position: relative;\n  left: 30px;\n  top: 20px;\n  cursor: pointer;\n}\n\n.deleteIcon:hover,\n.editIcon:hover,\n.addIcon:hover,\n.addTask img:hover,\n#addIcon:hover,\n#menu:hover,\n#displayHeaderIcon:hover {\n  transform: scale(1.3);\n}\n\n.addTask {\n  display: flex;\n  margin-left: 13.75%;\n}\n\n.addTask img {\n  width: 4%;\n  margin-right: 0.25rem;\n  cursor: pointer;\n}\n\n.addTask h4 {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 50%);\n  position: relative;\n  top: 0.2rem;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n\n.displayHeader {\n  display: flex;\n}\n\n#displayHeaderIcon {\n  width: 3.5%;\n  position: absolute;\n  left: 80%;\n  top: 10%;\n  cursor: pointer;\n}\n\n.modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modalContent {\n  margin: 15% 40%;\n  border: 1px solid black;\n  border-radius: 10px;\n}\n\n.popUpHeader {\n  background-color: #e8f0f2;\n  padding: 1rem 0.6rem;\n}\n\nform {\n  display: flex;\n  flex-flow: column;\n  background-color: white;\n  padding: 2rem 2rem 0.25rem;\n}\n\nlabel {\n  font-weight: 500;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n\ninput {\n  height: 1.5rem;\n  border: 2px solid #ddd;\n  margin: 0.75rem 0;\n}\n\n.footer {\n  background-color: white;\n  display: flex;\n  justify-content: flex-end;\n}\n\nbutton {\n  margin: 1rem 0 0.5rem 1rem;\n  border-radius: 5px;\n  width: 30%;\n  height: 2rem;\n  background-color: #f3f3f3;\n  border: 1px solid #ddd;\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.addButton {\n  background-color: #ffa500;\n  color: white;\n}\n',""]);const a=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var s=e[d],c=o.base?s[0]+o.base:s[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(n[m].references++,n[m].updater(p)):n.push({identifier:u,updater:r(p,o),references:1}),i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var s=o(e,r),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),d=t(565),s=t.n(d),c=t(216),l=t.n(c),u=t(589),m=t.n(u),p=t(426),f={};function h(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function g(e){h(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const b=(e,n)=>{const t={name:e,date:n,completed:!1,changeName:e=>{e.length<=0||(t.name=e)},changeDate:e=>{(function(e){return h(1,arguments),g(e).getTime()<Date.now()})(e)||(t.date=e)},changeComplete:()=>{t.completed=!0}};return t},v=document.querySelector("body");function y(){const e=document.createElement("div");e.classList.add("modal");const n=document.createElement("div");n.classList.add("modalContent");const t=document.createElement("h3");t.textContent="Add project",t.classList.add("popUpHeader");const o=document.createElement("form"),r=document.createElement("label");r.setAttribute("for","name"),r.textContent="Name";const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("required","");const i=document.createElement("div");i.classList.add("footer");const d=document.createElement("button");d.textContent="Cancel",d.addEventListener("click",x);const s=document.createElement("button");s.setAttribute("type","submit"),s.classList.add("addButton"),s.textContent="Add",i.append(d,s),o.append(r,a,i),n.append(t,o),e.append(n),v.append(e)}function x(){document.querySelector(".modal").remove()}function w(){const e=document.createElement("div");e.classList.add("modal");const n=document.createElement("div");n.classList.add("modalContent");const t=document.createElement("h3");t.textContent="Add task",t.classList.add("popUpHeader");const o=document.createElement("form");o.setAttribute("onSubmit","return false");const r=document.createElement("label");r.setAttribute("for","nameInput"),r.textContent="Name";const a=document.createElement("input");a.setAttribute("id","nameInput"),a.setAttribute("type","text"),a.setAttribute("required","");const i=document.createElement("label");i.setAttribute("for","dateInput"),i.textContent="Date";const d=document.createElement("input");d.setAttribute("id","dateInput"),d.setAttribute("type","date");const s=document.createElement("div");s.classList.add("footer");const c=document.createElement("button");c.textContent="Cancel",c.addEventListener("click",x);const l=document.createElement("button");l.setAttribute("type","submit"),l.classList.add("addButton"),l.textContent="Add",l.addEventListener("click",E),l.addEventListener("click",x),s.append(c,l),o.append(r,a,i,d,s),n.append(t,o),e.append(n),v.append(e)}function E(){const e=document.querySelector("#nameInput").value,n=document.querySelector("#dateInput").value;console.log(e),console.log(n);const t=b(e,n);console.log("this is working".length),console.log(t.name),console.log(t.date)}document.querySelector("h4.addProject").addEventListener("click",y),document.querySelector("img.addIcon").addEventListener("click",y),document.querySelector("#addIcon").addEventListener("click",w),document.querySelector(".addTask h4").addEventListener("click",w),document.querySelector(".addTask img").addEventListener("click",w);const k=e=>{let n=[];const t={name:e,tasks:n,changeName:e=>{e.length<=0||(console.log(t),t.name=e)},addTask:e=>{void 0!==e&&t.tasks.push(e)},deleteTask:e=>{if(!isNaN(e)){const t=n.findIndex(e);n.splice(t,1)}}};return t},L=document.querySelector("#taskList");function I(){this.parentNode.parentNode.remove()}const C=function(e){const n=document.querySelector(".addTask"),t=document.createElement("li");t.classList.add("display");const o=document.createElement("ul");o.classList.add("displayItems"),o.append(function(e){const n=document.createElement("li"),t=document.createElement("p");t.classList.add("taskName"),t.textContent=e.name,t.classList.remove("taskDate");const o=document.createElement("p");return o.classList.add("taskDate"),o.textContent=e.date,n.append(t,o),n}(e),function(){const e=document.createElement("li");e.classList.add("taskIconContainer");const n=document.createElement("img");return n.classList.add("editIcon"),n.setAttribute("src","../src/images/edit.svg"),e.append(n),e}(),function(){const e=document.createElement("li");e.classList.add("taskIconContainer");const n=document.createElement("img");return n.classList.add("deleteIcon"),n.setAttribute("src","../src/images/delete.svg"),e.append(n),e.addEventListener("click",I),e}()),t.append(o),L.insertBefore(t,n)},A=function(){document.querySelector("h1.display").textContent=this.textContent,Array.from(L.children).forEach((e=>e.classList.contains("addTask")?null:e.remove()))};function S(){Array.from(this.parentNode.children).forEach((e=>e.classList.remove("active"))),this.classList.toggle("active")}const j=function(e){const n=document.querySelector("ul.projectList"),t=document.createElement("li");t.classList.add("projectItem"),t.addEventListener("click",S),t.addEventListener("click",A),t.setAttribute("id",e.name),t.textContent=e.name,n.append(t)},T=b("Reaaaaaaally loooooong nameeeeeee","Aug 30"),q=b("Attempt","Jul 30"),N=k("Project 1"),D=k("Project 2");C(T),C(q),j(N),j(D)})()})();