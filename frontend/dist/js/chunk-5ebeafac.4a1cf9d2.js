(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ebeafac"],{"1c7b":function(t,e,s){},"781a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-card",{attrs:{flat:""}},[s("v-row",{staticClass:"mt-6",attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"2"}},[s("div",{staticClass:"d-flex justify-start"})]),s("div",{staticClass:"d-flex justify-center col"},[s("h2",[t._v("Account Details")])]),s("v-col",{attrs:{cols:"2"}},[s("v-btn",{attrs:{text:"",rounded:"",to:{name:"editAccount",params:{id:this.user._id}}}},[t._v("Edit")])],1)],1),s("v-row",{staticClass:"mt-4"},[s("v-col",{staticClass:"d-flex justify-center"},[s("v-avatar",{attrs:{size:"100"}},[s("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"}})],1)],1),s("v-col",{staticClass:"d-flex justify-start"},[s("v-list-item",{attrs:{color:"rgba(0, 0, 0, .4)"}},[s("v-list-item-content",{attrs:{align:"left"}},[s("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name)+" ")]),s("v-list-item-subtitle",[t._v("Member since: "+t._s(new Date(t.user.createdAt).toLocaleString())+" ")]),s("v-btn",{staticClass:"mt-4",attrs:{text:"",rounded:"",to:{name:"viewUser",params:{id:this.user._id}}}},[t._v(" View public profile")])],1)],1)],1)],1),s("br"),s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("h3",{staticClass:"pt-2"},[t._v("Your Items")])]),s("v-divider"),s("v-row",{attrs:{"no-gutters":""}},t._l(t.filteredItems,(function(e){return s("v-col",{key:e._id,staticClass:"v-card-columns",attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[s("v-card",{staticClass:"pt-3 ma-2",attrs:{flat:""}},[e.photo?s("v-img",[t._v(t._s(e.photo))]):s("span",[s("v-img",{attrs:{src:"https://picsum.photos/400/300?random"}})],1),s("v-card-title",{staticStyle:{"word-break":"break-word"},attrs:{align:"left"}},[s("router-link",{staticClass:"item-title",attrs:{to:{name:"viewSingleItem",params:{id:e._id}}}},[t._v(" "+t._s(e.title)+" ")])],1),e.categoryID?s("v-card-text",[s("router-link",{attrs:{to:{name:"viewSingleCategory",params:{id:e.categoryID._id}}}},[s("p",[t._v(" "+t._s(e.categoryID.name)+" ")])])],1):t._e()],1)],1)})),1)],1)],1),s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("h3",[t._v("Your Saved Items")])])])],1),s("v-divider"),s("v-row",{attrs:{"no-gutters":""}},t._l(t.filteredSavedInteractions,(function(e){return s("v-col",{key:e._id,staticClass:"v-card-columns",attrs:{cols:"12",sm:"3"}},["Claim"==e.interactionID.interactionName?s("v-card-text",[t._v("Claimed")]):"Saved"==e.interactionID.interactionName?s("v-card-text",[t._v("Saved")]):"Interested"==e.interactionID.interactionName?s("v-card-text",[t._v("Interested ")]):t._e(),s("v-card",{staticClass:"pt-3 ma-2",attrs:{flat:""}},[t.item.photo?s("v-img",[t._v(t._s(t.item.photo))]):s("span",[s("v-img",{attrs:{src:"https://picsum.photos/400/300?random"}})],1),s("router-link",{staticClass:"item-title",attrs:{to:{name:"viewSingleItem",params:{id:e.itemID._id}}}},[t._v(" "+t._s(e.itemID.title)+" ")]),s("br"),s("v-card-text",[s("router-link",{staticClass:"item-title",attrs:{to:{name:"viewUser",params:{id:e.itemID.userID._id}}}},[t._v(" "+t._s(e.itemID.userID.username)+" ")])],1)],1)],1)})),1),0==t.filteredSavedInteractions?s("div",[s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("p",[t._v(" You haven't saved any items. ")])])])],1)],1):t._e(),s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("h3",[t._v("Your Interest List")])])])],1),s("v-divider"),s("v-row",{attrs:{"no-gutters":""}},t._l(t.filteredInterestedInteractions,(function(e){return s("v-col",{key:e._id,staticClass:"v-card-columns",attrs:{cols:"12",sm:"3"}},[s("v-card-text",[t._v("Interested")]),s("v-card",{staticClass:"pt-3 ma-2",attrs:{flat:""}},[t.item.photo?s("v-img",[t._v(t._s(t.item.photo))]):s("span",[s("v-img",{attrs:{src:"https://picsum.photos/400/300?random"}})],1),s("router-link",{staticClass:"item-title",attrs:{to:{name:"viewSingleItem",params:{id:e.itemID._id}}}},[t._v(" "+t._s(e.itemID.title)+" ")]),s("br"),s("v-card-text",[s("router-link",{staticClass:"item-title",attrs:{to:{name:"viewUser",params:{id:e.itemID.userID._id}}}},[t._v(" "+t._s(e.itemID.userID.username)+" ")])],1)],1)],1)})),1),0==t.filteredInterestedInteractions?s("div",[s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("p",[t._v(" You haven't marked any items as interested. ")])])])],1)],1):t._e(),s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("h3",[t._v("Your Claimed Items")])])])],1),s("v-divider"),s("v-row",{attrs:{"no-gutters":""}},t._l(t.filteredClaimedInteractions,(function(e){return s("v-col",{key:e._id,staticClass:"v-card-columns",attrs:{cols:"12",sm:"3"}},[s("v-card-text",[t._v("Claimed")]),s("v-card",{staticClass:"pt-3 ma-2",attrs:{flat:""}},[t.item.photo?s("v-img",[t._v(t._s(t.item.photo))]):s("span",[s("v-img",{attrs:{src:"https://picsum.photos/400/300?random"}})],1),s("router-link",{staticClass:"item-title",attrs:{to:{name:"viewSingleItem",params:{id:e.itemID._id}}}},[t._v(" "+t._s(e.itemID.title)+" ")]),s("br"),s("v-card-text",[s("router-link",{staticClass:"item-title",attrs:{to:{name:"viewUser",params:{id:e.itemID.userID._id}}}},[t._v(" "+t._s(e.itemID.userID.username)+" ")])],1)],1)],1)})),1),0==t.filteredClaimedInteractions?s("div",[s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("p",[t._v(" You haven't claimed any items. ")])])])],1)],1):t._e(),s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("h3",[t._v("User Reviews")])]),s("v-divider"),s("div",{staticClass:"footer-offset"},[s("v-row",{attrs:{"no-gutters":""}},t._l(t.filteredUserReviews,(function(e){return s("v-col",{key:e._id,staticClass:"v-card-columns",attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[s("v-card",{staticClass:"pt-3 ma-2",attrs:{flat:""}},[1==e.score?s("p",[s("v-icon",[t._v("mdi-star")])],1):2==e.score?s("p",[s("v-icon",[t._v("mdi-star")]),s("v-icon",[t._v("mdi-star")])],1):3==e.score?s("p",[s("v-icon",[t._v("mdi-star")]),s("v-icon",[t._v("mdi-star")]),s("v-icon",[t._v("mdi-star")])],1):4==e.score||5==e.score?s("p",[s("v-icon",[t._v("mdi-star")]),s("v-icon",[t._v("mdi-star")]),s("v-icon",[t._v("mdi-star")]),s("v-icon",[t._v("mdi-star")]),s("v-icon",[t._v("mdi-star")])],1):t._e(),e.message?s("v-card-subtitle",{staticStyle:{"word-break":"break-word"},attrs:{align:"left"}},[t._v(' "'+t._s(e.message)+'" ')]):t._e(),e.reviewerUserID?s("v-card-text",[s("router-link",{attrs:{to:{name:"viewUser",params:{id:e.reviewerUserID._id}}}},[s("p",[t._v(" "+t._s(e.reviewerUserID.username)+" ")])])],1):t._e()],1)],1)})),1),0==t.filteredUserReviews?s("div",[s("v-row",[s("v-col",[s("div",{staticClass:"d-flex justify-center col"},[s("p",[t._v(" You haven't gotten any reviews. ")])])])],1)],1):t._e()],1)],1)],1)],1)],1)},r=[],a=(s("4de4"),s("d3b7"),s("db49")),n={name:"Account",components:{},data:function(){return{user:{},item:{},items:[],review:{},reviews:[],interaction:{},interactions:[]}},mounted:function(){this.getItems(),this.getUserDetails(),this.getUserReviews(),this.getUserInteractions()},methods:{getUserDetails:function(){localStorage.getItem("user")&&(this.user=JSON.parse(localStorage.getItem("user")))},getUserInteractions:function(){var t=this;a["a"].get("/user_interactions").then((function(e){console.log(e.data),t.interactions=e.data})).catch((function(t){console.log(t),console.log(t.response.data)}))},getItems:function(){var t=this;a["a"].get("/items").then((function(e){t.items=e.data})).catch((function(t){return console.log(t)}))},getUserReviews:function(){var t=this;a["a"].get("/reviews").then((function(e){t.reviews=e.data})).catch((function(t){return console.log(t)}))}},computed:{filteredItems:function(){return this.items.filter((function(t){return t.userID._id==localStorage.getItem("userID")}))},filteredInterestedInteractions:function(){return this.interactions.filter((function(t){return t.userID._id==localStorage.getItem("userID")&&"Interested"==t.interactionID.interactionName}))},filteredSavedInteractions:function(){return this.interactions.filter((function(t){return t.userID._id==localStorage.getItem("userID")&&"Saved"==t.interactionID.interactionName}))},filteredClaimedInteractions:function(){return this.interactions.filter((function(t){return t.userID._id==localStorage.getItem("userID")&&"Claim"==t.interactionID.interactionName}))},filteredUserReviews:function(){return this.reviews.filter((function(t){return t.reviewedUserID._id==localStorage.getItem("userID")}))}}},o=n,c=(s("9b5c"),s("2877")),l=s("6544"),v=s.n(l),d=s("8212"),m=s("8336"),u=s("b0af"),_=s("99d9"),f=s("62ad"),I=s("a523"),p=s("ce7e"),g=s("132d"),h=s("adda"),w=s("da13"),C=s("5d23"),D=s("0fd9"),b=Object(c["a"])(o,i,r,!1,null,null,null);e["default"]=b.exports;v()(b,{VAvatar:d["a"],VBtn:m["a"],VCard:u["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VCol:f["a"],VContainer:I["a"],VDivider:p["a"],VIcon:g["a"],VImg:h["a"],VListItem:w["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VRow:D["a"]})},"8ce9":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return c}));var i=s("b0af"),r=s("80d2");const a=Object(r["h"])("v-card__actions"),n=Object(r["h"])("v-card__subtitle"),o=Object(r["h"])("v-card__text"),c=Object(r["h"])("v-card__title");i["a"]},"9b5c":function(t,e,s){"use strict";s("1c7b")},ce7e:function(t,e,s){"use strict";s("8ce9");var i=s("7560");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-5ebeafac.4a1cf9d2.js.map