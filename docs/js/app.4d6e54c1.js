(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/mask-info-for-medical/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"18ef":function(t,e,a){},"9bf4":function(t,e,a){"use strict";var n=a("a83b"),r=a.n(n);r.a},a83b:function(t,e,a){},b9ea:function(t,e,a){"use strict";var n=a("18ef"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("5c96"),i=a.n(r),s=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("el-container",[a("el-header",{staticStyle:{height:"auto"}},[a("h1",[t._v(" 口罩供需資訊平台 "),a("br"),t._v("社區藥局端使用 ")]),a("h3",[t._v(" ℹ️ 部分藥局因採發放號碼牌方式，方便民眾購買口罩，系統目前無法顯示已發送號碼牌數量。 "),a("br"),t._v("ℹ️ 口罩數量以藥局實際存量為主，線上查詢之數量僅供參考。 "),a("br"),t._v("ℹ️ 藥師如對數字有疑問請洽藥師公會全聯會 02-25953856 轉分機 129。 ")])]),a("el-main",[a("el-row",{attrs:{type:"flex"}},[a("div",{staticClass:"input-area"},[a("el-input",{attrs:{placeholder:"請輸入醫事機構代碼"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getFilterData(e)}},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}})],1),a("div",{staticClass:"button-area"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.isLoading,disabled:!t.inputText.length||!t.isInit},on:{click:t.getFilterData}},[t._v("搜尋")]),a("el-button",{attrs:{type:"info",icon:"el-icon-delete",loading:t.isLoading},on:{click:t.resetData}},[t._v("清除")])],1)])],1),t.inputText?a("Result",{attrs:{data:t.singlePharmacyData}}):t._e()],1),t._m(1)],1)}),o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("img",{staticClass:"logo",attrs:{src:a("cf05"),alt:"中華民國藥師公會全國聯合會"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[t._v(" Powered by "),a("a",{attrs:{href:"https://github.com/charlie0228"}},[t._v("charlie0228")])])}],c=(a("7db0"),a("96cf"),a("1da1")),u=a("bc3a"),l=a.n(u),p=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json");case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Reslut"},["string"!==typeof t.data&&t.data?a("div",{staticClass:"Reslut__content"},[a("div",{staticClass:"Reslut__geo"},[t._v(" 醫事機構代碼："+t._s(t.data.properties.id)+" "),a("br"),t._v(" 藥局名稱："+t._s(t.data.properties.name)+" "),a("br"),t._v(" 電話："+t._s(t.data.properties.phone)+" "),a("br"),t._v(" 地址："+t._s(t.data.properties.address)+" "),a("br")]),a("hr"),a("div",{staticClass:"Reslut__mask"},[t._v(" 成人口罩剩餘數量："),a("span",[t._v(t._s(t.data.properties.mask_adult)+" 個口罩")]),a("br"),t._v(" 兒童口罩剩餘數量："),a("span",[t._v(t._s(t.data.properties.mask_child)+" 個口罩")]),a("br"),t._v(" 數量資料最後更新時間："+t._s(t.data.properties.updated)+" "),a("br")])]):a("div",{staticClass:"Reslut__noContent"},[t._v(t._s(t.data))])])},f=[],h={props:{data:{type:[Object,String],default:void 0}}},v=h,m=(a("9bf4"),a("2877")),_=Object(m["a"])(v,d,f,!1,null,"28ac1a66",null),b=_.exports,g={components:{Result:b},data:function(){return{pharmacyData:null,isInit:!1,inputText:"",singlePharmacyData:null,isLoading:!1}},methods:{getPharmacyData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:a=e.sent,n=a.features,t.pharmacyData=n;case 5:case"end":return e.stop()}}),e)})))()},getFilterData:function(){var t=this;this.isLoading=!0;var e=this.pharmacyData.find((function(e){return e.properties.id===t.inputText}));this.isLoading=!1,this.singlePharmacyData=e||"查無醫事機構資料"},resetData:function(){this.inputText="",this.singlePharmacyData=null}},computed:{lastUpdate:function(){return this.pharmacyData?this.pharmacyData.find((function(t){return t.properties.updated.length>0})).properties.updated:""}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPharmacyData();case 2:console.log("Last update:",t.lastUpdate),t.isInit=!0;case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;window.setInterval((function(){t.getPharmacyData(),console.log("Last update:",t.lastUpdate)}),6e4)},watch:{pharmacyData:function(){null!==this.singlePharmacyData&&this.getFilterData()}}},y=g,w=(a("b9ea"),Object(m["a"])(y,s,o,!1,null,"1000039d",null)),x=w.exports;n["default"].use(i.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(x)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.145b43b0.png"}});
//# sourceMappingURL=app.4d6e54c1.js.map