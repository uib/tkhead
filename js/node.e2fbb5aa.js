(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["node"],{5822:function(e,t,c){},"6caa":function(e,t,c){"use strict";var s=c("a7e4"),n=c.n(s);n.a},a7e4:function(e,t,c){},ab6c:function(e,t,c){"use strict";var s=c("5822"),n=c.n(s);n.a},b09b:function(e,t,c){"use strict";c.r(t);var s=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",{staticClass:"service-page content"},[c("service",{attrs:{"svc-id":e.id}})],1)},n=[],a=function(){var e=this,t=e.$createElement,c=e._self._c||t;return e.svc?c("article",{staticClass:"service"},[c("div",{staticClass:"kicker"},[c("fa-icon",{attrs:{name:"cog"}}),e._v(" Tjeneste")],1),c("h1",[e._v(e._s(e.svc.title))]),"summary"in e.svc.text?c("p",{staticClass:"lead"},[e._v(e._s(e.svc.text.summary))]):e._e(),"description"in e.svc.text?c("p",[e._v(e._s(e.svc.text.description))]):e._e(),c("p",[e._v("State: "+e._s(e.svc.info.service_state))])]):e._e()},i=[],r=c("8588"),v=c("6e50"),o={name:"Service",props:{svcId:{type:String,required:!0}},data:function(){return{svc:null}},created:function(){var e=this;Object(v["a"])().then((function(t){e.svc=t.service[e.svcId]}))},components:{FaIcon:r["a"]}},u=o,l=(c("ab6c"),c("2877")),p=Object(l["a"])(u,a,i,!1,null,"0bb3a8a6",null),d=p.exports,_={name:"ServicePage",props:{id:{type:String,required:!0}},components:{Service:d}},f=_,b=(c("6caa"),Object(l["a"])(f,s,n,!1,null,"88167ac2",null));t["default"]=b.exports}}]);
//# sourceMappingURL=node.e2fbb5aa.js.map