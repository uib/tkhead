(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["node"],{"6caa":function(e,t,s){"use strict";var i=s("a7e4"),a=s.n(i);a.a},"7e20":function(e,t,s){"use strict";var i=s("e2f8"),a=s.n(i);a.a},a7e4:function(e,t,s){},b09b:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"service-page content"},[s("service",{attrs:{"svc-id":e.id}})],1)},a=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.svc?s("article",{staticClass:"service"},[s("ul",{staticClass:"links"},[e.svc.link.home?s("li",[s("a",{attrs:{href:e.svc.link.home,title:"Gå til tjenesten"}},[s("fa-icon",{attrs:{name:"external-link"}})],1)]):e._e(),e.svc.link.doc?s("li",[s("a",{attrs:{href:e.svc.link.doc,title:"Dokumentasjon om tjenesten"}},[s("fa-icon",{attrs:{name:"question-circle"}})],1)]):e._e(),e.bus.ita_mode?s("li",[s("a",{attrs:{href:e.svc.link.href_tk+"/edit",title:"Rediger info om tjenesten (krever innlogging)"}},[s("fa-icon",{attrs:{name:"pencil-square-o"}})],1)]):e._e()]),s("div",{staticClass:"kicker"},[s("fa-icon",{attrs:{name:"cog"}}),e._v(" Tjeneste")],1),s("h1",[e._v(e._s(e.svc.title))]),"summary"in e.svc.text?s("p",{staticClass:"lead"},[e._v(e._s(e.svc.text.summary))]):e._e(),"description"in e.svc.text?s("p",{staticClass:"desc"},[e._v(e._s(e.svc.text.description))]):e._e(),s("div",{staticClass:"fields"},[e.svc.related&&e.svc.related.service_owner?s("field",{attrs:{name:"Systemeier"}},[e._v(" "+e._s(e.svc.related.service_owner.title)+" ")]):e._e(),e.svc.related&&e.svc.related.support_contact?s("field",{attrs:{name:"Brukerstøtte"}},[e._v(" "+e._s(e.svc.related.support_contact.title)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Normalt tilgjengelig"}},[e._v(" "+e._s(e.svc.info.availability)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Tjenestetype"}},[e._v(" "+e._s(e.svc.info.service_type)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Kritikalitet"}},[e._v(" "+e._s(e.svc.info.criticality)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Informasjonsklasse"}},[e._v(" "+e._s(e.svc.info.information_class)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Livssyklus"}},[e._v(" "+e._s(e.svc.info.service_state)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Vaktordning"}},[e._v(" "+e._s(e.svc.info.service_rotation)+" ")]):e._e(),e.svc.info.service_supplier?s("field",{attrs:{name:"Driftsleverandør"}},[e._v(" "+e._s(e.svc.info.service_supplier)+" ")]):e._e(),e.bus.ita_mode&&e.svc.related&&e.svc.related.op_team?s("field",{attrs:{name:"Driftsteam"}},[e._v(" "+e._s(e.svc.related.op_team.title)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Registreringsstatus"}},[e._v(" "+e._s(e.svc.info.edit_state)+" ")]):e._e()],1),e.bus.ita_mode?s("div",{staticClass:"meta"},[e._v(" Opprettet "+e._s(e.svc.meta.created.substr(0,10))+" av "),s("user",e._b({},"user",e.svc.meta.author,!1)),e._v(", oppdatert "+e._s(e.svc.meta.changed.substr(0,10))+". ")],1):e._e()]):s("div",[e.err?s("p",[e._v(e._s(e.err))]):e._e()])},n=[],c=s("8588"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[s("div",{staticClass:"field-name"},[e._v(" "+e._s(e.name)+" ")]),e._t("default")],2)},v=[],o={props:{name:{type:String,required:!0}}},_=o,u=s("2877"),d=Object(u["a"])(_,l,v,!1,null,null,null),f=d.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:e.href}},[e._v(e._s(e.name))])},p=[],b={props:{uid:{type:String,required:!0},name:{type:String,required:!0}},computed:{href:function(){return"https://www.uib.no/user/uib/"+this.uid}}},h=b,k=Object(u["a"])(h,m,p,!1,null,null,null),g=k.exports,j=s("56d7"),y=s("6e50"),w={name:"Service",props:{svcId:{type:String,required:!0}},data:function(){return{svc:null,bus:j["eventBus"],err:null}},created:function(){var e=this;Object(y["a"])().then((function(t){var s=t.service[e.svcId];s||(e.err="404 Tjenesten finnes ikke"),e.svc=s}))},components:{FaIcon:c["a"],Field:f,User:g}},C=w,x=(s("7e20"),Object(u["a"])(C,r,n,!1,null,null,null)),S=x.exports,q={name:"ServicePage",props:{id:{type:String,required:!0}},components:{Service:S}},O=q,E=(s("6caa"),Object(u["a"])(O,i,a,!1,null,"88167ac2",null));t["default"]=E.exports},e2f8:function(e,t,s){}}]);
//# sourceMappingURL=node.3b6f5ef9.js.map