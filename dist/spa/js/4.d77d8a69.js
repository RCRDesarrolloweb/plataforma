(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{2818:function(t,e,l){"use strict";l("ab35")},"28f5":function(t,e,l){"use strict";l.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-xl window-width"},[s("div",{staticClass:"row shadow-8 w-75 items-center bg-grey-1 q-ml-auto q-mr-auto"},[s("div",{staticClass:"col flex flex-center q-mt-lg"},[s("div",{staticClass:"text-center"},[s("span",{staticClass:"text-h2 text-weight-medium text-grey"},[t._v("Registro")]),s("q-icon",{staticClass:"text-info",staticStyle:{"font-size":"8vw"},attrs:{name:"person"}})],1),s("q-form",{staticClass:"q-gutter-md input-form full-width",on:{submit:t.onSubmit,reset:t.onReset}},[s("q-input",{staticClass:"q-pl-xl q-pr-xl",attrs:{filled:"",label:"Nombre Completo","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Ingrese su Nombre Completo"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("q-input",{staticClass:"q-pl-xl q-pr-xl",attrs:{filled:"",label:"Correo Electrónico","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Ingrese su correo electrónico"}]},model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}}),s("q-input",{staticClass:"q-pl-xl q-pr-xl",attrs:{filled:"",type:"password",label:"Contraseña*","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Ingrese su contraseña"}]},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}}),s("div",{staticClass:"q-pl-xl q-pr-xl"},[s("q-btn",{staticClass:"full-width q-pa-lg",attrs:{label:"Registrarme",color:"primary"},on:{click:function(e){return t.Register()}}})],1),s("div",[s("q-btn",{staticClass:"full-width text-grey",attrs:{flat:"",label:"¿Ya tienes una cuenta? Haz click aqui para ingresar"},on:{click:function(e){return t.Login()}}})],1)],1)],1),s("div",{staticClass:"col bg-primary full-height flex flex-center"},[s("q-img",{staticClass:"logo-form q-ml-auto q-mr-auto",attrs:{src:l("bcc0")}})],1)])])},a=[],n={data(){return{name:null,mail:null,pass:null}},methods:{Register:function(){null!==this.mail&&null!==this.pass&&null!==this.name&&this.$router.push("/Dashboard")},Login:function(){this.$router.push("/")}}},i=n,r=(l("2818"),l("2877")),o=l("0016"),c=l("0378"),u=l("27f9"),p=l("9c40"),m=l("068f"),f=l("eebe"),d=l.n(f),g=Object(r["a"])(i,s,a,!1,null,null,null);e["default"]=g.exports;d()(g,"components",{QIcon:o["a"],QForm:c["a"],QInput:u["a"],QBtn:p["a"],QImg:m["a"]})},ab35:function(t,e,l){},bcc0:function(t,e,l){t.exports=l.p+"img/isologo.1eba3d73.png"}}]);