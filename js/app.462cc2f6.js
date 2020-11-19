(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/musicfyy_frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"431a":function(t,e,a){t.exports=a.p+"img/chilling.654d0ae5.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary_bg",dark:"",dense:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-toolbar-title",[t._v("Musicfyy")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("router-link",{attrs:{to:"/"}},[a("v-icon",[t._v("mdi-home")])],1)],1),a("v-btn",{attrs:{icon:""}},[a("router-link",{attrs:{to:"/songs"}},[a("v-icon",[t._v("mdi-playlist-music")])],1)],1),a("v-btn",{attrs:{icon:""}},[a("router-link",{attrs:{to:"/signup"}},[a("v-icon",[t._v("mdi-account-circle")])],1)],1)],1),a("v-main",[a("router-view")],1)],1)},r=[],s={name:"App",components:{},data:function(){return{links:["Home","About Us","Team","Services","Blog","Contact Us"]}}},i=s,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),f=a("8336"),m=a("132d"),v=a("f6c4"),h=a("2fa4"),b=a("2a7f"),g=Object(c["a"])(i,o,r,!1,null,null,null),w=g.exports;u()(g,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VIcon:m["a"],VMain:v["a"],VSpacer:h["a"],VToolbarTitle:b["a"]});var y=a("2f62"),x=a("bc3a"),_=a.n(x);n["a"].use(y["a"]),_.a.defaults.xsrfCookieName="csrftoken",_.a.defaults.xsrfHeaderName="X-CSRFToken";var k=new y["a"].Store({state:{authuser:{},isAuthenticated:!1,jwt:localStorage.getItem("token"),APIData:"",endpoints:{obtainJWT:"https://musicfyy.herokuapp.com/api/v1/auth/obtain_token/",refreshJWT:"https://musicfyy.herokuapp.com/auth/refresh_token/",baseUrl:"https://musicfyy.herokuapp.com/"}},mutations:{setAuthUser:function(t,e){var a=e.authUser,o=e.isAuthenticated;n["a"].set(t,"authUser",a),n["a"].set(t,"isAuthenticated",o)},updateToken:function(t,e){localStorage.setItem("token",e),t.jwt=e},removeToken:function(t){localStorage.removeItem("token"),t.jwt=null}}}),C=a("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6"}},[a("p",{staticClass:"mx-auto",attrs:{"justify-center":""}},[t._v("Login")]),a("v-text-field",{attrs:{solo:"",label:"Email","prepend-inner-icon":"mdi-email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:"password",name:"input-10-1",solo:"",label:"Senha","prepend-inner-icon":"mdi-lock"},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}}),a("v-text-field",{attrs:{type:"password",name:"input-10-1",solo:"",label:"Repita a senha","prepend-inner-icon":"mdi-lock-reset"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:function(e){return e.preventDefault(),t.register(e)}}},[t._v(" Criar Conta "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-account")])],1),a("p",{staticClass:"ma-3 ma-md-1"},[t._v("Tem uma conta ?")]),a("v-btn",[a("router-link",{attrs:{to:"/",tag:"span"}},[t._v("Entrar")])],1)],1)],1)],1)],1)},j=[],T={data:function(){return{email:"",password1:"",password2:""}},methods:{register:function(){var t={email:this.email,password1:this.password1,password2:this.password2};_.a.post("https://musicfyy.herokuapp.com/rest-auth/registration/",t)}}},S=T,A=a("62ad"),O=a("a523"),F=a("4bd4"),$=a("0fd9"),U=a("8654"),E=Object(c["a"])(S,V,j,!1,null,null,null),M=E.exports;u()(E,{VBtn:f["a"],VCol:A["a"],VContainer:O["a"],VForm:F["a"],VIcon:m["a"],VRow:$["a"],VTextField:U["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"primary_bg"},[n("v-container",{staticClass:"mb-15",attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md6:"",lg6:"",sm12:"",xs12:"",x6:""}},[n("img",{attrs:{src:a("431a"),width:"95%"}})]),n("v-flex",{attrs:{md6:"",lg6:"",sm12:"",xs12:"",x6:"","pl-3":""}},[n("h1",{staticClass:"white--text font-weight-medium mt-16 d-sm-pl-8 d-xs-pl-6"},[t._v(" Musicfy"),n("span",{staticClass:"red--text"},[t._v("y")])]),n("h2",{staticClass:"white--text d-sm-pl-6"},[t._v(" Descubra "),n("span",{staticClass:"yellow--text"},[t._v("novas músicas")])]),n("v-dialog",{attrs:{scrollable:"","max-width":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"black--text white",dark:""}},"v-btn",o,!1),a),[t._v(" Login ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Entrar")]),n("v-divider"),n("v-card-text",{staticClass:"mt-2"},[n("v-text-field",{attrs:{solo:"",lavel:"Email","prepend-inner-icon":"mdi-email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{type:t.show1?"text":"password",name:"input-10-1",solo:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off",label:"Senha","prepend-inner-icon":"mdi-account-key"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Fechar")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.preventDefault(),t.authenticate(e)}}},[t._v("Entrar")])],1)],1)],1),n("v-btn",{staticClass:"ml-2",attrs:{outlined:"",color:"white"}},[n("router-link",{attrs:{to:"/signup",tag:"span"}},[t._v("Criar conta")])],1)],1)],1)],1),n("v-footer",{attrs:{color:"primary_bg",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" - "),n("strong",[t._v("Musicfyy")]),n("p",[t._v("EduardoReinheimer")])])],1)],1)],1)},I=[],L={name:"Portfolio",data:function(){return{show1:!1,email:"",password:"",dialog:!1}},methods:{authenticate:function(){var t=this,e={email:this.email,password:this.password};_.a.post(this.$store.state.endpoints.obtainJWT,e).then((function(e){t.$store.commit("updateToken",e.data.token);var a={baseURL:t.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(t.$store.state.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},n=_.a.create(a);n({url:"rest-auth/user/",method:"get",params:{}}).then((function(e){t.$store.commit("setAuthUser",{authUser:e.data,isAuthenticated:!0}),t.$router.push({name:"Songs"})}))})).catch((function(t){console.log(t),console.debug(t),console.dir(t)}))}}},D=L,J=(a("9128"),a("b0af")),R=a("99d9"),B=a("169a"),W=a("ce7e"),H=a("0e8f"),z=a("553a"),N=a("a722"),Y=Object(c["a"])(D,P,I,!1,null,"ad492538",null),X=Y.exports;u()(Y,{VBtn:f["a"],VCard:J["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VCol:A["a"],VContainer:O["a"],VDialog:B["a"],VDivider:W["a"],VFlex:H["a"],VFooter:z["a"],VLayout:N["a"],VRow:$["a"],VTextField:U["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{wrap:""}},[t._l(t.posts,(function(e,n){return a("v-flex",{key:n,attrs:{xs4:"",md2:"","mb-16":""}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"100","max-height":"90"}},[a("v-img",{staticClass:"white--text align-end rounded-lg",attrs:{height:"110px",width:"120px",src:e.album},on:{click:function(a){return t.currentMusic(e.song)}}},[a("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"grey"}},[a("v-icon",{on:{click:function(e){t.snackbar=!0}}},[t._v("mdi-play")])],1)],1),a("div",{staticClass:"overflow_prevent"},[t._v(t._s(e.title))]),a("div",{staticClass:"caption overflow_prevent",staticStyle:{"line-height":"100%"}},[t._v(" "+t._s(e.artist)+" ")])],1)],1)})),""!=t.actual_song?a("v-snackbar",{attrs:{"multi-line":t.multiLine,timeout:-1,light:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("vuetify-audio",{attrs:{file:t.actual_song,ended:t.audioFinish}})],1):t._e()],2)],1)},G=[],K=a("59bd"),Q={data:function(){return{posts:[],errors:[],file:"",multiLine:!0,snackbar:!0,actual_song:""}},methods:{audioFinish:function(){console.log("You see this means audio finish.")},currentMusic:function(t){console.log(t),this.actual_song=t}},components:{VuetifyAudio:K["a"]},mounted:function(){var t=this,e={baseURL:this.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(this.$store.state.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},a=_.a.create(e);a({url:"https://musicfyy.herokuapp.com/api/v1/songs/",method:"get",params:{}}).then((function(e){t.posts=e.data.results})).catch((function(e){t.errors.push(e)}))}},Z=Q,tt=(a("a18d"),a("adda")),et=a("2db4"),at=Object(c["a"])(Z,q,G,!1,null,null,null),nt=at.exports;u()(at,{VBtn:f["a"],VCard:J["a"],VContainer:O["a"],VFlex:H["a"],VIcon:m["a"],VImg:tt["a"],VLayout:N["a"],VSnackbar:et["a"]}),n["a"].use(C["a"]);var ot=[{path:"/",name:"Home",component:X},{path:"/signup",name:"Signup",component:M},{path:"/songs",name:"Songs",component:nt}],rt=new C["a"]({mode:"history",base:"/musicfyy_frontend/",routes:ot}),st=rt,it=a("f309");n["a"].use(it["a"]);var ct=new it["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:k,router:st,vuetify:ct,render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,a){},9128:function(t,e,a){"use strict";a("aea7")},a18d:function(t,e,a){"use strict";a("b324")},aea7:function(t,e,a){},b324:function(t,e,a){}});
//# sourceMappingURL=app.462cc2f6.js.map