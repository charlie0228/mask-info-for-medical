(function(t){function e(e){for(var r,s,o=e[0],u=e[1],c=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/mask-info-for-medical/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"097e":function(t,e,a){},"110d":function(t,e,a){"use strict";var r=a("a35c"),n=a.n(r);n.a},"98ff":function(t,e,a){"use strict";var r=a("097e"),n=a.n(r);n.a},a35c:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("5c96"),i=a.n(n),s=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("el-container",[a("el-header",{staticStyle:{height:"auto"}},[a("h1",[t._v(" 口罩供需資訊平台 "),a("br"),t._v("社區藥局端使用 ")]),a("h3",[t._v(" ℹ️ 部分藥局因採發放號碼牌方式，方便民眾購買口罩，系統目前無法顯示已發送號碼牌數量。 "),a("br"),t._v("ℹ️ 口罩數量以藥局實際存量為主，線上查詢之數量僅供參考。 "),a("br"),t._v("ℹ️ 藥師如對數字有疑問請洽藥師公會全聯會 02-25953856 轉分機 129。 ")])]),a("el-main",[a("el-row",{attrs:{type:"flex"}},[a("div",{staticClass:"input-area"},[a("el-input",{attrs:{placeholder:"請輸入醫事機構代碼"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getFilterData(e)}},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}})],1),a("div",{staticClass:"button-area"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.isLoading,disabled:!t.inputText.length||!t.isInit},on:{click:t.getFilterData}},[t._v("搜尋")]),a("el-button",{attrs:{type:"info",icon:"el-icon-delete",loading:t.isLoading},on:{click:t.resetData}},[t._v("清除")])],1)]),"string"!==typeof t.singlePharmacyData&&t.singlePharmacyData?a("el-row",{staticStyle:{"margin-top":"15px","flex-direction":"column","align-items":"center"},attrs:{type:"flex",justify:"center"}},[a("router-link",{attrs:{to:""+t.$route.path}},[t._v("醫事機構代碼："+t._s(t.$route.params.id)+" 專用查詢網址：")]),a("router-link",{attrs:{to:""+t.$route.path}},[t._v(t._s(t.currentPath))]),a("span",[t._v("將上面連結加入我的最愛，即可快速查詢 "),a("span",{staticStyle:{color:"#67C23A"}},[t._v("醫事機構代碼："+t._s(t.$route.params.id))]),t._v(" 口罩剩餘數量")])],1):t._e()],1),a("router-view",{key:t.$route.params.id,attrs:{data:t.singlePharmacyData}})],1),t._m(1)],1)}),o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("img",{staticClass:"logo",attrs:{src:a("cf05"),alt:"中華民國藥師公會全國聯合會"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[t._v(" Powered by "),a("a",{attrs:{href:"https://github.com/charlie0228"}},[t._v("charlie0228")])])}],u=(a("7db0"),a("96cf"),a("1da1")),c=a("bc3a"),l=a.n(c),p=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json");case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$route.params.id?a("div",{staticClass:"Reslut"},["string"!==typeof t.data&&t.data?a("div",{staticClass:"Reslut__content"},[a("div",{staticClass:"Reslut__geo"},[t._v(" 醫事機構代碼："+t._s(t.data.properties.id)+" "),a("br"),t._v(" 藥局名稱："+t._s(t.data.properties.name)+" "),a("br"),t._v(" 電話："+t._s(t.data.properties.phone)+" "),a("br"),t._v(" 地址："+t._s(t.data.properties.address)+" "),a("br")]),a("hr"),a("div",{staticClass:"Reslut__mask"},[t._v(" 成人口罩剩餘數量："),a("span",[t._v(t._s(t.data.properties.mask_adult)+" 個口罩")]),a("br"),t._v(" 兒童口罩剩餘數量："),a("span",[t._v(t._s(t.data.properties.mask_child)+" 個口罩")]),a("br"),t._v(" 數量資料最後更新時間："+t._s(t.data.properties.updated)+" "),a("br")])]):a("div",{staticClass:"Reslut__noContent"},[t._v(t._s(t.data))])]):t._e()},f=[],h={props:{data:{type:[Object,String],default:void 0}}},v=h,m=(a("110d"),a("2877")),_=Object(m["a"])(v,d,f,!1,null,"51c0bcb3",null),g=_.exports,y={components:{Result:g},data:function(){return{pharmacyData:null,isInit:!1,inputText:"",singlePharmacyData:null,isLoading:!1}},methods:{getPharmacyData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:a=e.sent,r=a.features,t.pharmacyData=r;case 5:case"end":return e.stop()}}),e)})))()},getFilterData:function(){var t=this;this.isLoading=!0;var e=this.pharmacyData.find((function(e){return e.properties.id===t.inputText}));this.isLoading=!1,this.singlePharmacyData=e||"查無醫事機構資料",this.inputText!==this.$route.params.id&&this.updateRoute(this.inputText)},resetData:function(){this.inputText="",this.singlePharmacyData=null,this.updateRoute(this.inputText)},updateRoute:function(t){this.$router.push("/".concat(t))}},computed:{lastUpdate:function(){return this.pharmacyData?this.pharmacyData.find((function(t){return t.properties.updated.length>0})).properties.updated:""},currentPath:function(){return window.location.href}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPharmacyData();case 2:console.log("Last update:",t.lastUpdate),t.isInit=!0;case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;window.setInterval((function(){t.getPharmacyData(),console.log("Last update:",t.lastUpdate)}),6e4)},watch:{pharmacyData:function(){null!==this.singlePharmacyData&&this.getFilterData()},isInit:function(t){t&&this.$route.params.id&&(this.inputText=this.$route.params.id,this.getFilterData(),console.log("isInit",t),console.log("this.$route.params.id",this.$route.params.id),console.log("this.inputText",this.inputText))}}},b=y,x=(a("98ff"),Object(m["a"])(b,s,o,!1,null,"a3121d9a",null)),w=x.exports,k=a("8c4f");r["default"].use(k["a"]);var D=new k["a"]({base:"/".concat("mask-info-for-medical","/"),routes:[{path:"/:id",name:"Result",component:g}]});r["default"].use(i.a),r["default"].config.productionTip=!1,new r["default"]({router:D,render:function(t){return t(w)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.145b43b0.png"}});
//# sourceMappingURL=app.8b6c6450.js.map