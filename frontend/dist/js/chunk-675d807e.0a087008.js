(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-675d807e"],{"198e":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("v-btn",{staticClass:"go-back hidden-sm-and-down pl-4 pr-4",attrs:{text:"",rounded:""},on:{click:function(a){return t.goBack()}}},[n("v-icon",[t._v("mdi-arrow-left")]),t._v("   Back ")],1),n("span",{staticClass:"hidden-md-and-up"},[n("v-btn",{staticClass:"go-back",attrs:{text:"",rounded:""},on:{click:function(a){return t.goBack()}}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1)],1)},i=[],s={methods:{goBack:function(){return this.$router.go(-1)}}},c=s,o=(n("5b0e"),n("2877")),r=n("6544"),l=n.n(r),u=n("8336"),d=n("132d"),v=Object(o["a"])(c,e,i,!1,null,null,null);a["a"]=v.exports;l()(v,{VBtn:u["a"],VIcon:d["a"]})},4290:function(t,a,n){"use strict";n("663b")},"4a9b":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("div",{staticClass:"footer-offset"},[n("v-row",{attrs:{"no-gutters":""}},[n("div",{staticClass:"d-flex justify-center col"},[n("h1",{staticClass:"mainItemTitle"},[t._v("Quality")])])]),n("v-col",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"d-flex justify-start"},[n("GoBack")],1)]),n("div",{staticClass:"d-flex justify-center col"},[n("h2",{staticClass:"mainItemTitle"},[t._v(t._s(t.quality.name))])]),n("v-col",{attrs:{cols:"2"}})],1),n("br"),n("v-row",{attrs:{"no-gutters":""}},t._l(t.items,(function(a){return n("v-col",{key:a._id,staticClass:"v-card-columns",attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[n("v-card",{staticClass:"pt-3 ma-2",attrs:{flat:""}},[a.photo?n("v-img",[t._v(t._s(a.photo))]):t._e(),n("v-else",[n("v-img",{attrs:{src:"https://picsum.photos/400/300?random"}})],1),n("v-card-title",{staticStyle:{"word-break":"break-word"}},[n("router-link",{staticClass:"item-title",attrs:{to:{name:"viewSingleItem",params:{id:a._id}}}},[t._v(" "+t._s(a.title)+" ")])],1),a.qualityID.name?n("v-card-text",[n("router-link",{attrs:{to:{name:"viewQuality",params:{id:a.qualityID._id}}}},[n("p",[t._v(" "+t._s(a.qualityID.name)+" ")])])],1):t._e()],1)],1)})),1)],1)],1)])},i=[],s=n("db49"),c=n("198e"),o={name:"ViewSingleQuality",components:{GoBack:c["a"]},data:function(){return{items:[],item:{},quality:[]}},mounted:function(){this.getItemQuality(),this.getQuality()},methods:{getItemQuality:function(){var t=this;s["a"].get("/items/quality/".concat(this.$route.params.id)).then((function(a){console.log(a.data),t.items=a.data})).catch((function(t){return console.log(t)}))},getQuality:function(){var t=this;s["a"].get("/qualities/".concat(this.$route.params.id)).then((function(a){console.log(a.data),t.quality=a.data})).catch((function(t){return console.log(t)}))}}},r=o,l=(n("4290"),n("2877")),u=n("6544"),d=n.n(u),v=n("b0af"),f=n("99d9"),m=n("62ad"),_=n("a523"),h=n("adda"),b=n("0fd9"),g=Object(l["a"])(r,e,i,!1,null,null,null);a["default"]=g.exports;d()(g,{VCard:v["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VContainer:_["a"],VImg:h["a"],VRow:b["a"]})},"5b0e":function(t,a,n){"use strict";n("77a7")},"663b":function(t,a,n){},"77a7":function(t,a,n){},"99d9":function(t,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return c})),n.d(a,"c",(function(){return o})),n.d(a,"d",(function(){return r}));var e=n("b0af"),i=n("80d2");const s=Object(i["h"])("v-card__actions"),c=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),r=Object(i["h"])("v-card__title");e["a"]}}]);
//# sourceMappingURL=chunk-675d807e.0a087008.js.map