(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["node"],{"6caa":function(e,t,s){"use strict";var r=s("a7e4"),i=s.n(r);i.a},7088:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:e.href}},[e._v(e._s(e.name))])},i=[],n={props:{uid:{type:String,required:!0},name:{type:String,required:!0}},computed:{href:function(){return"https://www.uib.no/user/uib/"+this.uid}}},a=n,c=s("2877"),o=Object(c["a"])(a,r,i,!1,null,null,null);t["a"]=o.exports},"7e20":function(e,t,s){"use strict";var r=s("e2f8"),i=s.n(r);i.a},a7e4:function(e,t,s){},b09b:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"service-page content"},[s("service",{attrs:{"svc-id":e.id}})],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.svc?s("article",{staticClass:"service"},[s("ul",{staticClass:"links"},[e.svc.link.home?s("li",[s("a",{attrs:{href:e.svc.link.home,title:"Gå til tjenesten"}},[s("fa-icon",{attrs:{name:"external-link"}})],1)]):e._e(),e.svc.link.doc?s("li",[s("a",{attrs:{href:e.svc.link.doc,title:"Dokumentasjon av tjenesten"}},[s("fa-icon",{attrs:{name:"question-circle"}})],1)]):e._e(),e.bus.ita_mode?s("li",[s("a",{attrs:{href:e.svc.link.href_tk+"/edit",title:"Rediger info om tjenesten (krever innlogging)"}},[s("fa-icon",{attrs:{name:"pencil-square-o"}})],1)]):e._e()]),s("div",{staticClass:"kicker"},[s("fa-icon",{attrs:{name:"cog"}}),e._v(" Tjeneste ")],1),s("h2",[e._v(e._s(e.svc.title)+" "),e.svc.link.domain?[e._v(" – "),s("a",{attrs:{href:e.svc.link.home}},[e._v(e._s(e.svc.link.domain))]),s("sup",{staticStyle:{"font-size":"50%"}},[s("uptime-status",{attrs:{domain:e.svc.link.domain,refresh:""}})],1)]:e._e()],2),"summary"in e.svc.text?s("p",{staticClass:"lead"},[e._v(e._s(e.svc.text.summary))]):e._e(),"description"in e.svc.text?s("p",{staticClass:"desc"},[e._v(e._s(e.svc.text.description))]):e._e(),s("div",{staticClass:"fields"},[e.svc.related&&e.svc.related.support_contact?s("field",{attrs:{name:"Brukerstøtte"}},[s("h3",[e._v(e._s(e.svc.related.support_contact.title))]),e.svc.related.support_contact.phone?s("div",[e._v(" Telefon: "+e._s(e.svc.related.support_contact.phone)+" ")]):e._e(),e.svc.related.support_contact.link.tracker?s("div",[e._v(" Her kan du melde inn feil: "),s("a",{attrs:{href:e.svc.related.support_contact.link.tracker}},[e._v(e._s(e.svc.related.support_contact.link.tracker_title))])]):e._e(),e.svc.related.support_contact.hours?s("div",[e._v(" Åpningstid: "+e._s(e.svc.related.support_contact.hours)+" ")]):e._e(),e.svc.related.support_contact.visiting_address?s("div",[e._v(" Adresse: "),s("div",{staticStyle:{"font-size":"80%","padding-left":"15px","white-space":"pre-line"}},[e._v(e._s(e.svc.related.support_contact.visiting_address))])]):e._e()]):e._e(),e.service_roles.length||e.service_business_levels.length?s("field",{staticStyle:{display:"grid","grid-template-columns":"1fr 1fr"},attrs:{name:"Egnet for"}},[e.service_roles.length?s("div",e._l(e.service_roles,(function(t){return s("div",{key:t.id},[t.icon?s("fa-icon",{attrs:{name:t.icon}}):e._e(),e._v(" "+e._s(t.title)+" ")],1)})),0):e._e(),e.service_business_levels.length?s("div",e._l(e.service_business_levels,(function(t){return s("div",{key:t.id},[t.icon?s("fa-icon",{attrs:{name:t.icon}}):e._e(),e._v(" "+e._s(t.title)+" ")],1)})),0):e._e()]):e._e(),e.svc.text.demand?s("field",{attrs:{name:"Hva er nødvendig for å bruke tjenesten"}},[e._v(" "+e._s(e.svc.text.demand)+" ")]):e._e(),e.svc.text.field_howto_orde?s("field",{attrs:{name:"Hvordan bestille"}},[e._v(" "+e._s(e.svc.text.field_howto_orde)+" ")]):e._e(),e.svc.info.availability?s("field",{attrs:{name:"Normalt tilgjengelig"}},[e._v(" "+e._s(e.svc.info.availability_formatted)+" ")]):e._e(),e.svc.info.cost?s("field",{attrs:{name:"Hva koster tjenesten"}},[e._v(" "+e._s(e.svc.info.cost_formatted)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Tjenestetype"}},[e._v(" "+e._s(e.svc.info.service_type_formatted)+" ")]):e._e(),e.service_classes.length?s("field",{attrs:{name:"Tjenesteklasse"}},e._l(e.service_classes,(function(t){return s("div",{key:t.id},[t.icon?s("fa-icon",{attrs:{name:t.icon}}):e._e(),e._v(" "+e._s(t.title)+" ")],1)})),0):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Kritikalitet"}},[e._v(" "+e._s(e.svc.info.criticality_formatted)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Informasjonsklasse"}},[e._v(" "+e._s(e.svc.info.information_class_formatted)+" ")]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Livssyklus"}},[e._v(" "+e._s(e.svc.info.service_state_formatted)+" ")]):e._e(),e.svc.related&&e.svc.related.service_owner?s("field",{attrs:{name:"Systemeier"}},[e._v(" "+e._s(e.svc.related.service_owner.title)+" ")]):e._e(),e.bus.ita_mode&&e.svc.role&&e.svc.role.owner?s("field",{attrs:{name:"Kontaktperson hos systemeier"}},[s("user",e._b({},"user",e.svc.role.owner,!1))],1):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Vaktordning"}},[e._v(" "+e._s(e.svc.info.service_rotation_formatted)+" ")]):e._e(),e.svc.info.service_supplier?s("field",{attrs:{name:"Driftsleverandør"}},[e._v(" "+e._s(e.svc.info.service_supplier_formatted)+" ")]):e._e(),e.bus.ita_mode&&(e.svc.related&&e.svc.related.op_team||e.svc.role&&e.svc.role.operator&&e.svc.role.operator.length)?s("field",{attrs:{name:"Driftsteam"}},[e.svc.related&&e.svc.related.op_team?s("div",[e._v(e._s(e.svc.related.op_team.title))]):e._e(),e.svc.role&&e.svc.role.operator?s("ul",e._l(e.svc.role.operator,(function(t){return s("li",{key:t.uid},[s("user",e._b({},"user",t,!1))],1)})),0):e._e()]):e._e(),e.bus.ita_mode&&e.svc.info.cmdb_id?s("field",{attrs:{name:"CMDB"}},[s("a",{attrs:{href:"https://bs.uib.no/?module=cmdb&action=viewt&tjeneste="+e.svc.info.cmdb_id}},[e._v(e._s(e.svc.info.cmdb_id))])]):e._e(),e.bus.ita_mode?s("field",{attrs:{name:"Registreringsstatus"}},[e._v(" "+e._s(e.svc.info.edit_state_formatted)+" ")]):e._e(),e.bus.ita_mode&&e.svc.text.internal_notes?s("field",{attrs:{name:"Interne notater"}},[e._v(" "+e._s(e.svc.text.internal_notes)+" ")]):e._e()],1),e.bus.ita_mode?s("div",{staticClass:"meta"},[e._v(" Opprettet "+e._s(e.svc.meta.created.substr(0,10))+" av "),s("user",e._b({},"user",e.svc.meta.author,!1)),e._v(", oppdatert "+e._s(e.svc.meta.changed.substr(0,10))+". ")],1):e._e()]):s("div",[e.err?s("p",[e._v(e._s(e.err))]):e._e()])},a=[],c=(s("4de4"),s("8588")),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[s("div",{staticClass:"field-name"},[e._v(" "+e._s(e.name)+" ")]),e._t("default")],2)},l=[],_={props:{name:{type:String,required:!0}}},v=_,u=s("2877"),d=Object(u["a"])(v,o,l,!1,null,null,null),f=d.exports,p=s("f0e9"),m=s("7088"),h=s("56d7"),b=s("6e50"),k={name:"Service",props:{svcId:{type:String,required:!0}},data:function(){return{svc:null,bus:h["eventBus"],err:null}},created:function(){var e=this;Object(b["a"])().then((function(t){var s=t.service[e.svcId];s||(e.err="404 Tjenesten finnes ikke"),e.svc=s}))},computed:{service_roles:function(){return this.svc.classification.filter((function(e){return"service_roles"==e.type}))},service_business_levels:function(){return this.svc.classification.filter((function(e){return"service_business_levels"==e.type}))},service_classes:function(){return this.svc.classification.filter((function(e){return"service_classes"==e.type}))}},components:{FaIcon:c["a"],Field:f,UptimeStatus:p["a"],User:m["a"]}},g=k,y=(s("7e20"),Object(u["a"])(g,n,a,!1,null,null,null)),j=y.exports,w={name:"ServicePage",props:{id:{type:String,required:!0}},components:{Service:j}},S=w,x=(s("6caa"),Object(u["a"])(S,r,i,!1,null,"88167ac2",null));t["default"]=x.exports},e2f8:function(e,t,s){},f0e9:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",{staticStyle:{display:"inline-block"},attrs:{title:e.textStatus}},[s("svg",{staticClass:"uptime-status",staticStyle:{width:"1.5ex",height:"1.5ex"},attrs:{viewBox:"0 0 100 100"}},[s("circle",{attrs:{cx:"50",cy:"50",r:"48",fill:e.dotColor}})])])},i=[],n=(s("d3b7"),{props:{domain:{type:String,required:!0},refresh:{type:Boolean,required:!1}},data:function(){return{status:null,error:null,timer:null}},computed:{dotColor:function(){return this.error?"#999":this.status?this.status.status?"limegreen":"red":"#ddd"},textStatus:function(){var e="";if(this.status)e+=this.status.status?"For tiden oppe":"For tiden nede",e+=" – "+this.status.ratio+"% oppetid idag",e+="\n(Sist oppdatert: "+this.status.refreshed.toTimeString().substr(0,5)+")";else if(!this.error)return"Laster fra oppetid.app.uib.no";return this.error&&(e&&(e+="\n"),e+="Feil fra oppetid-serveren: "+this.error),e},tjenesteId:function(){var e=this.domain;return"litteraturkiosken.uib.no"==e&&(e="litteraturkiosken"),e}},created:function(){var e=this;this.fetchStatus(),this.refresh&&(this.timer=setInterval((function(){e.fetchStatus()}),1e3*(55+10*Math.random())))},destroyed:function(){this.timer&&clearInterval(this.timer)},methods:{fetchStatus:function(){var e=this;this.error=null,fetch("https://oppetid.app.uib.no/getStatus.php?return=json&days=1&tjeneste=".concat(this.tjenesteId),{cache:"no-store"}).then((function(e){if(e.ok)return e.json();if(404==e.status)throw new Error("Mangler oppetidsmåling");throw new Error("Response "+e.status)})).then((function(t){t.refreshed=new Date,e.status=t})).catch((function(t){e.error=t}))}}}),a=n,c=s("2877"),o=Object(c["a"])(a,r,i,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=node.313a6cc9.js.map