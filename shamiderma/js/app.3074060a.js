(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"83edd766"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"40c300f2"}[t]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===s))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===r||d===s)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],v.parentNode.removeChild(v),a(i)},v.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(v);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}s[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var v=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0821":function(t,e,a){t.exports=a.p+"img/backgroundtest.cbbf173b.png"},"0a4e":function(t,e,a){"use strict";var r=a("ad54"),n=a.n(r);n.a},"45cc":function(t,e,a){},"504d":function(t,e,a){t.exports=a.p+"img/Texture.68f87ea7.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{height:"100",flat:""}},[a("v-btn",{attrs:{depressed:"",to:"/"}},[a("v-img",{attrs:{width:"300",height:"55",src:t.logo}})],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{staticClass:"grey--text text--darken-1 headline font-weight-regular transparent",attrs:{to:"about",depressed:""}},[t._v("About Us")]),a("v-btn",{staticClass:"grey--text text--darken-1 headline font-weight-regular transparent",attrs:{depressed:""}},[t._v("Our Doctors")]),a("v-btn",{staticClass:"grey--text text--darken-1 headline font-weight-regular transparent",attrs:{to:"/services",depressed:""}},[t._v("OUR SERVICES")]),a("v-btn",{staticClass:"grey--text text--darken-1 headline font-weight-regular transparent",attrs:{to:"/contact",depressed:""}},[t._v("CONTACT")])],1)],1),a("v-content",[a("router-view")],1),a("Footer")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{color:"#CACACA"}},[a("v-card",{attrs:{height:"100"}}),a("v-spacer"),a("v-card",{staticClass:"transparent mt-12 pt-12",attrs:{outlined:"",width:"1500"}},[a("v-divider")],1),a("v-spacer"),a("v-spacer"),a("v-card",{staticClass:"transparent",attrs:{outlined:""}},[a("v-row",[a("v-spacer"),t._l(t.footCard,(function(e,r){return a("v-col",{key:r,attrs:{cols:t.scrnSize()}},[a("v-card",{staticClass:"transparent pl-12",attrs:{outlined:"",width:"500",height:"250"}},[a("div",{staticClass:"title grey--text text--darken-1 preSpace"},[t._v(t._s(e.text))]),a("v-card",{staticClass:"transparent",attrs:{outlined:"",height:"40"}}),a("div",{staticClass:"font-weight-bold"},[t._v(" "+t._s(e.subTitle)+" ")]),a("div",[t._v(" "+t._s(e.subText)+" ")]),a("div",[t._v(" "+t._s(e.timeText)+" ")]),a("div",{staticClass:"font-weight-bold"},[t._v(" "+t._s(e.subTitle2)+" "),e.vbtn?a("v-btn",{class:e.vbtnopt,attrs:{"min-width":"200",outlined:""}},[t._v(" "+t._s(e.btnText)+" "),a("v-spacer"),e.vic?a("v-icon",[t._v("mdi-send")]):t._e()],1):t._e()],1),a("div",[t._v(" "+t._s(e.subText2)+" "),e.vbtn2?a("v-btn",{class:e.vbtnopt2,attrs:{outlined:""}},[t._v(" "+t._s(e.btnText2)+" ")]):t._e()],1),a("div",[t._v(" "+t._s(e.timeText2)+" ")]),a("div",[t._v(" "+t._s(e.subText3)+" "),e.vbtn3?a("v-btn",{class:e.vbtnopt2,attrs:{outlined:""}},[t._v(" "+t._s(e.btnText3)+" ")]):t._e()],1),a("div",{staticClass:"font-weight-bold"},[t._v(" "+t._s(e.subTitle3)+" ")]),a("div",[t._v(" "+t._s(e.subText4)+" ")])],1)],1)})),a("v-spacer")],2)],1),a("v-spacer")],1)},o=[],c={name:"Footer",data:function(){return{footCard:[{text:"CONTACT US",subTitle:"Address",subText:"7th Circle, Amman, Jordan",subTitle2:"Phone:",subText2:"+962 6 5822626",subText3:"+962 79 9451777",subTitle3:"E-mail:",subText4:"Info@shamiderma.com",vbtnopt2:"transparent",vbtnopt:"transparent"},{text:"INFO",btnText:"Our Doctors",route:"/doctors",btnText2:"Our Services",route2:"services",btnText3:"Location",route3:"/location",vbtn:!0,vbtn2:!0,vbtn3:!0,vbtnopt2:"pl-0 transparent",vbtnopt:"pl-0 transparent"},{text:"OPENNING HOURS",subText:"Sunday - Thursday",timeText:"9:00 - 19:00",subText2:"Friday - Saturday",timeText2:"9:00 - 16:00",vbtnopt:"transparent",vbtnopt2:"transparent"},{text:"APPOINTEMENT",btnText:"Book Now!",route:"/contact",vbtn:!0,vbtnopt2:"transparent",vic:!0}]}},methods:{scrnSize:function(){return window.innerWidth<1200?12:2}}},l=c,d=(a("f7e8"),a("2877")),u=a("6544"),v=a.n(u),p=a("8336"),h=a("b0af"),f=a("62ad"),b=a("ce7e"),m=a("553a"),g=a("132d"),x=a("0fd9"),w=a("2fa4"),C=Object(d["a"])(l,i,o,!1,null,"17623a75",null),y=C.exports;v()(C,{VBtn:p["a"],VCard:h["a"],VCol:f["a"],VDivider:b["a"],VFooter:m["a"],VIcon:g["a"],VRow:x["a"],VSpacer:w["a"]});var T=a("bca0"),_=a.n(T),A={name:"App",components:{Footer:y},data:function(){return{logo:_.a}}},O=A,V=a("7496"),S=a("a75b"),E=a("adda"),k=a("71d9"),N=a("2a7f"),j=Object(d["a"])(O,n,s,!1,null,null,null),I=j.exports;v()(j,{VApp:V["a"],VBtn:p["a"],VContent:S["a"],VImg:E["a"],VSpacer:w["a"],VToolbar:k["a"],VToolbarItems:N["a"]});a("d3b7");var P=a("8c4f"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},W=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{attrs:{color:"#CACACA"}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.6}}),a("v-parallax",{attrs:{height:t.windowHeight-220,src:t.tpic}},[a("v-card",{staticClass:"transparent",attrs:{flat:"",height:t.windowHeight/10,width:t.windowWidth}}),a("v-toolbar",{attrs:{flat:"",color:"transparent"}},[a("v-toolbar-items",[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.4}})],1),a("v-toolbar-items",[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/18}})],1)],1),a("v-card",{staticClass:"transparent",attrs:{flat:"",height:t.windowHeight/10,width:t.windowWidth}}),a("v-card-title",{attrs:{"primary-title":""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.6}}),a("v-lazy",{attrs:{options:{threshold:.5},transition:"slideX"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card",{staticClass:"my-style transparent",attrs:{outlined:"",width:""}},[a("div",[t._v("Practicing The Art")]),a("div",[a("v-card",{staticClass:"transparent",attrs:{outlined:"",height:"40"}})],1),a("div",[t._v("of Preserving Beauty")])])],1)],1),a("v-lazy",{attrs:{options:{threshold:.5},transition:"slideX2"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"",width:t.windowWidth/13.6}}),a("v-btn",{attrs:{rounded:"","max-width":"650",height:"80",color:t.getClassText()}},[t._v("Get a Free Consultation Now!")])],1)],1),a("v-parallax",{staticClass:"paraop",attrs:{height:"400","min-width":t.windowWidth,src:t.texture}})],1)],1)],1),a("v-flex",{attrs:{xs2:"",md12:""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:""}},[a("v-card",{staticClass:"transparent",attrs:{outlined:""}}),a("v-card-title",{staticClass:"my-style justify-center"},[a("v-card",{staticClass:"transparent",attrs:{outlined:""}}),a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"100",transition:"slide-x-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card",{staticClass:"transparent cyan--text",attrs:{outlined:"","min-width":"492"}},[a("v-card-title",{staticClass:"justify-center display-3 font-weight-bold"},[t._v("OUR SERVICES")]),a("v-card-title",{staticClass:"black--text display-2 font-weight-light"},[t._v("THE AREAS OF OUR PRACTICE")])],1)],1)],1),a("v-flex",{attrs:{xs1:"",md12:""}},[a("v-row",{staticClass:"pl-2"},[a("v-spacer"),t._l(t.serviceCards,(function(e,r){return a("v-col",{key:r},[a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"100",transition:"slideUp"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("v-card",{staticClass:"transparent",attrs:{outlined:"","min-height":"350","min-width":"350"}},[a("router-link",{attrs:{to:e.route}},[a("v-img",{attrs:{src:e.img}})],1),a("v-card-title",{staticClass:"justify-center headline cyan--text",attrs:{width:"200"}},[t._v(t._s(e.text))])],1)],1)],1)})),a("v-spacer")],2),a("br"),a("br")],1),a("v-card")],1),a("v-card",{staticClass:"center1 transparent",attrs:{height:"150",outlined:""}},[a("v-btn",{attrs:{href:"/services",rounded:"",width:"300",height:"80",color:"cyan white--text text-transform-none display-1"}},[t._v("More Info")])],1)],1)],1)},L=[],B=a("0821"),F=a.n(B),U=a("504d"),z=a.n(U),D=a("8435"),M=a.n(D),$={name:"HelloWorld",data:function(){return{windowWidth:window.innerWidth,windowHeight:window.innerHeight,logo:_.a,bg:F.a,texture:z.a,tpic:M.a,serviceCards:[{img:"https://i.imgur.com/j1NctyQ.png",text:"BOTOX & FILLERS",route:"/services/facial",extraText:"Caci Non-Surgical",extraText2:"Lifting Ultherapy treatment",extraText3:"Cat Eye Lifting",extraText4:"Botox  +  Fillers"},{img:"https://i.imgur.com/KOifmt0.png",text:"LASER HAIR REMOVAL",route:"/services/lhr",extraText:"Laster Hair Removal"},{img:"https://i.imgur.com/OSBtrCk.png",text:"BODY CONTOURING",route:"/services/bc",extraText:"Coolsculpting + Exima",extraText2:""},{img:"https://i.imgur.com/VDP2soz.png",text:"NUTRITION SERVICES",route:"/services/ns",extraText:"Diet Plan"}]}},methods:{getCol:function(){return this.windowWidth<1500?4:3},getClassText:function(){return this.windowWidth<1500?"cyan white--text text-transform-none title":"cyan white--text text-transform-none display-1"}}},G=$,J=(a("0a4e"),a("99d9")),X=a("0e8f"),q=a("b687"),K=a("8b9c"),Y=Object(d["a"])(G,H,L,!1,null,"22b8508a",null),Q=Y.exports;v()(Y,{VApp:V["a"],VBtn:p["a"],VCard:h["a"],VCardTitle:J["a"],VCol:f["a"],VFlex:X["a"],VImg:E["a"],VLazy:q["a"],VParallax:K["a"],VRow:x["a"],VSpacer:w["a"],VToolbar:k["a"],VToolbarItems:N["a"]});var Z={name:"Home",components:{HelloWorld:Q}},tt=Z,et=Object(d["a"])(tt,R,W,!1,null,null,null),at=et.exports;r["a"].use(P["a"]);var rt=[{path:"",name:"Home",component:at},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/services",name:"Service",component:function(){return a.e("about").then(a.bind(null,"f23e"))}},{path:"/services/bc",name:"Bc",component:function(){return a.e("about").then(a.bind(null,"2d6a"))}},{path:"/services/bc/coolsculpting",name:"CoolSculpting",component:function(){return a.e("about").then(a.bind(null,"7c85"))}},{path:"/services/bc/exima",name:"Exima",component:function(){return a.e("about").then(a.bind(null,"02cb"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}}],nt=new P["a"]({mode:"history",base:"",routes:rt}),st=nt,it=a("2f62");r["a"].use(it["a"]);var ot=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ct=a("f309");r["a"].use(ct["a"]);var lt=new ct["a"]({}),dt=a("fa94"),ut=a.n(dt);r["a"].config.productionTip=!1,new r["a"]({router:st,store:ot,vuetify:lt,Vuelidate:ut.a,render:function(t){return t(I)}}).$mount("#app")},8435:function(t,e,a){t.exports=a.p+"img/Transp.06644807.png"},ad54:function(t,e,a){},bca0:function(t,e,a){t.exports=a.p+"img/Logo.7655f4e2.png"},f7e8:function(t,e,a){"use strict";var r=a("45cc"),n=a.n(r);n.a}});
//# sourceMappingURL=app.3074060a.js.map