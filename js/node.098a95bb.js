(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["node"],{"1f3e":function(e,t,s){},"6caa":function(e,t,s){"use strict";var n=s("a7e4"),c=s.n(n);c.a},8964:function(e,t,s){"use strict";var n=s("1f3e"),c=s.n(n);c.a},a7e4:function(e,t,s){},b09b:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"service-page content"},[s("service",{attrs:{"svc-id":e.id}})],1)},c=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.svc?s("article",{staticClass:"service"},[s("ul",{staticClass:"links"},[e.svc.link.home?s("li",[s("a",{attrs:{href:e.svc.link.home,title:"Gå til tjenesten"}},[s("fa-icon",{attrs:{name:"external-link"}})],1)]):e._e(),e.svc.link.doc?s("li",[s("a",{attrs:{href:e.svc.link.doc,title:"Dokumentasjon om tjenesten"}},[s("fa-icon",{attrs:{name:"question-circle"}})],1)]):e._e(),e.bus.ita_mode?s("li",[s("a",{attrs:{href:e.svc.link.href_tk+"/edit",title:"Dokumentasjon om tjenesten"}},[s("fa-icon",{attrs:{name:"pencil-square-o"}})],1)]):e._e()]),s("div",{staticClass:"kicker"},[s("fa-icon",{attrs:{name:"cog"}}),e._v(" Tjeneste")],1),s("h1",[e._v(e._s(e.svc.title))]),"summary"in e.svc.text?s("p",{staticClass:"lead"},[e._v(e._s(e.svc.text.summary))]):e._e(),"description"in e.svc.text?s("p",{staticClass:"desc"},[e._v(e._s(e.svc.text.description))]):e._e(),e.bus.ita_mode?s("p",[e._v("State: "+e._s(e.svc.info.service_state))]):e._e()]):e._e()},i=[],r=s("8588"),o=s("56d7"),l=s("6e50"),v={name:"Service",props:{svcId:{type:String,required:!0}},data:function(){return{svc:null,bus:o["eventBus"]}},created:function(){var e=this;Object(l["a"])().then((function(t){e.svc=t.service[e.svcId]}))},components:{FaIcon:r["a"]}},u=v,d=(s("8964"),s("2877")),f=Object(d["a"])(u,a,i,!1,null,"23ceb97d",null),_=f.exports,m={name:"ServicePage",props:{id:{type:String,required:!0}},components:{Service:_}},p=m,k=(s("6caa"),Object(d["a"])(p,n,c,!1,null,"88167ac2",null));t["default"]=k.exports}}]);
//# sourceMappingURL=node.098a95bb.js.map