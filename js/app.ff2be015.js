(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({about:"about",config:"config",node:"node",team:"team"}[e]||e)+"."+{about:"dad45acc",config:"401cc0eb",node:"55d5cff2",team:"0fc0ade6"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,config:1,node:1,team:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",config:"config",node:"node",team:"team"}[e]||e)+"."+{about:"665aeaef",config:"53f6ee3f",node:"06a64a20",team:"40000e9b"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"048a":function(e,t,n){"use strict";var r=n("58e0"),o=n.n(r);o.a},2766:function(e,t,n){"use strict";var r=n("40d7"),o=n.n(r);o.a},"40d7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return T}));n("caad"),n("ac1f"),n("2532"),n("1276"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",[r("img",{staticClass:"logo clearfix",attrs:{src:n("b819"),alt:"Logo for Universitetet i Bergen"}}),r("h1",[e._v("Tjenestekatalog for IT-tjenester ved UiB")]),r("nav",[r("ul",[r("li",[r("router-link",{attrs:{to:"/",exact:""}},[e._v("Hjem")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[e._v("Om")])],1),e.bus.ita_mode?r("li",[r("router-link",{attrs:{to:"/team"}},[e._v("Team")])],1):e._e(),e.bus.ita_mode?r("li",[r("router-link",{attrs:{to:"/config"}},[e._v("Valg")])],1):e._e()])])]),r("router-view"),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._v(" © 2020 "),n("a",{attrs:{href:"http://www.uib.no"}},[e._v("Universitetet i Bergen")])])}],a={data:function(){return{bus:T}}},s=a,c=(n("034f"),n("2877")),u=Object(c["a"])(s,o,i,!1,null,null,null),l=u.exports,f=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home content"},[n("service-list",{attrs:{"show-summary":!0}})],1)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.services.length?n("section",[n("div",{staticClass:"buttons"},[n("button",{attrs:{title:"Vis/skjul fremhevede tjenester"},on:{click:function(t){return e.toggleFilterPromoted()}}},[e._v(e._s(e.filterPromoted?"Anbefalt":"Alle"))]),n("button",{attrs:{title:"Velg sorteringsrekkefølge"},on:{click:function(t){return e.orderByTitle()}}},[e._v(e._s("z-a"==e.orderBy?"Å–A":"A–Å"))]),e.bus.ita_mode?n("button",{attrs:{title:"Sort etter tidspunkt for endringer i oppføringen"},on:{click:function(t){return e.orderByMTime()}}},[n("fa-icon",{attrs:{name:"clock-o"}})],1):e._e(),n("button",{attrs:{title:"Vis/skjul ekstra informasjon om tjenestene"},on:{click:function(t){e.showSummary=!e.showSummary}}},[e.showSummary?n("fa-icon",{attrs:{name:"angle-down"}}):n("fa-icon",{attrs:{name:"angle-right"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{type:"text",placeholder:"Søk etter tjenester"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}}),n("button",{attrs:{disabled:!e.filter.length}},[n("fa-icon",{attrs:{name:"search"}})],1)]),e.filteredServices.length?[n("h1",[e._v("Tjenester ("),e.filteredServices.length!=e.visibleServices.length?[e._v(e._s(e.filteredServices.length)+"/")]:e._e(),e._v(e._s(e.visibleServices.length)+"):")],2),n("transition-group",{attrs:{name:"tklist",tag:"ul"}},e._l(e.filteredServices,(function(t){return n("li",{key:t.id,class:e.svcClasses(t)},[n("router-link",{attrs:{to:"/node/"+t.id}},[e._v(e._s(t.title)+" "),t.domain?n("span",{staticClass:"domain-link"},[n("a",{attrs:{href:t.link}},[e._v(e._s(t.domain))])]):e._e(),e._v(" "),e.bus.ita_mode&&"weight"==e.orderBy&&t.weight?n("span",{staticClass:"weight"},[e._v("v="+e._s(t.weight))]):e._e(),e._v(" "),"mtime"==e.orderBy?n("span",{staticClass:"changed"},[n("fa-icon",{attrs:{name:"clock-o"}}),e._v(" "+e._s(t.changed.substr(0,10)))],1):e._e(),t.link?n("a",{staticClass:"svc-link",attrs:{href:t.link,title:"Besøk tjenesten"}},[n("fa-icon",{attrs:{name:"external-link"}})],1):e._e(),e.showSummary&&t.summary?n("p",{staticClass:"summary"},[e._v(e._s(t.summary))]):e._e()])],1)})),0)]:n("p",{staticClass:"err"},[e._v(' Ingen tjenester funnet ved å søke på "'+e._s(e.filter)+'". ')])],2):n("section",[n("p",{staticClass:"loading"},[e._v("Loading...")])])},p=[],v=(n("4de4"),n("4160"),n("07ac"),n("5319"),n("2ca0"),n("498a"),n("9911"),n("159b"),n("5530")),g=n("8588"),b=n("6e50"),_=function(e){if(!e||!/^https?:\/\//.test(e))return null;var t=e.split("/");if(t.length>4||t[3])return null;var n=t[2];return n.includes(":")?null:(n=n.replace(/^www\./,""),n.toLowerCase())},y={props:{showSummary:{type:Boolean,default:!1}},data:function(){return{services:[],orderBy:"a-z",filter:"",filterPromoted:!T.ita_mode,bus:T}},created:function(){var e=this;Object(b["a"])().then((function(t){var n=[];Object.values(t.service).forEach((function(e){n.push({id:e.id,title:e.title.trim(),summary:e.text.summary,link:e.link.home,domain:_(e.link.home),state:e.info.service_state,type:e.info.service_type,changed:e.meta.changed,flag:e.flag,weight:0})})),e.services=n}))},computed:{visibleServices:function(){return this.bus.ita_mode?this.services:this.services.filter((function(e){return"avsluttet"!=e.state&&"cfs"==e.type}))},filteredServices:function(){var e=this.filter.trim().toLowerCase(),t=this.visibleServices;return t.forEach((function(t){if(t.weight=0,e.length){var n=t.domain||"",r=t.title.toLowerCase(),o=t.summary.toLowerCase();n.startsWith(e)&&(t.weight+=1),r.startsWith(e)&&(t.weight+=1),e.length>1&&(r.includes(e)&&(t.weight+=1),o.includes(e)&&(t.weight+=.5))}})),this.sortServices(t),e&&(t=t.filter((function(e){return e.weight>0}))),this.filterPromoted&&(t=t.filter((function(e){return e.flag.promote}))),t}},watch:{filter:function(){this.orderBy="weight"}},methods:{toggleFilterPromoted:function(){this.filterPromoted=!this.filterPromoted},sortServices:function(e){e||(e=this.services),"a-z"==this.orderBy?e.sort((function(e,t){return e.title.localeCompare(t.title,"nb")})):"z-a"==this.orderBy?e.sort((function(e,t){return t.title.localeCompare(e.title,"nb")})):"mtime"==this.orderBy?e.sort((function(e,t){return t.changed.localeCompare(e.changed,"nb")})):e.sort((function(e,t){return t.weight-e.weight||e.title.localeCompare(t.title,"nb")}))},sortByTime:function(){this.show_changed=!0,this.services.sort((function(e,t){return t.changed.localeCompare(e.changed,"nb")}))},orderByTitle:function(){"a-z"==this.orderBy?this.orderBy="z-a":this.orderBy="a-z"},orderByMTime:function(){this.orderBy="mtime"},svcClasses:function(e){var t=Object(v["a"])({clearfix:!0},e.flag);return this.filterPromoted&&(t["promote"]=!1),t["state-"+e.state]=!0,t["type-"+e.type]=!0,t}},components:{FaIcon:g["a"]}},w=y,k=(n("5d88"),Object(c["a"])(w,h,p,!1,null,"3ef57ca6",null)),S=k.exports,j={name:"Home",components:{ServiceList:S}},C=j,B=(n("2766"),Object(c["a"])(C,d,m,!1,null,"19064441",null)),x=B.exports;r["a"].use(f["a"]);var O=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/team",name:"Team",component:function(){return n.e("team").then(n.bind(null,"0767"))}},{path:"/config",name:"Config",component:function(){return n.e("config").then(n.bind(null,"1071"))}},{path:"/node/:id",name:"Node",component:function(){return n.e("node").then(n.bind(null,"b09b"))},props:function(e){return{id:e.params.id}}}],E=new f["a"]({mode:"history",base:"/",routes:O}),P=E;r["a"].config.productionTip=!1;var T=new r["a"]({name:"EventBus",data:{ita_mode:!1},created:function(){var e=window.localStorage;e.tk_options&&e.tk_options.split(" ").includes("ita_mode")&&(this.ita_mode=!0)},watch:{ita_mode:function(e){e?window.localStorage.tk_options="ita_mode":window.localStorage.removeItem("tk_options")}}});new r["a"]({router:P,render:function(e){return e(l)},created:function(){var e=sessionStorage.redirect;e&&(delete sessionStorage.redirect,this.$router.push(e))}}).$mount("#app")},"58e0":function(e,t,n){},"5d88":function(e,t,n){"use strict";var r=n("cc75"),o=n.n(r);o.a},"6e50":function(e,t,n){"use strict";n("4160"),n("d81d"),n("d3b7"),n("07ac"),n("ac1f"),n("1276"),n("159b"),n("96cf");var r=n("1da1"),o=null;function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o){e.next=9;break}return e.next=3,fetch("https://tk.app.uib.no/api/v1/service/all");case 3:return t=e.sent,e.next=6,t.json();case 6:o=e.sent,n=function(e){return{uid:e,name:o.user[e]||e+"@uib.no"}},Object.values(o.service).forEach((function(e){if(e.meta.author=n(e.meta.author),e.role&&(e.role.owner&&(e.role.owner=n(e.role.owner)),e.role.operator&&(e.role.operator=e.role.operator.split(" ").map(n))),e.flag){var t={};e.flag.split(" ").forEach((function(e){t[e]=!0})),e.flag=t}else e.flag={}}));case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}t["a"]=function(){return i.apply(this,arguments)}},8588:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",{class:["fa","fa-"+e.name]})},o=[],i={props:{name:{type:String,required:!0}}},a=i,s=(n("048a"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,null,null);t["a"]=c.exports},"85ec":function(e,t,n){},b819:function(e,t,n){e.exports=n.p+"img/uib-logo.16efa59a.svg"},cc75:function(e,t,n){}});
//# sourceMappingURL=app.ff2be015.js.map