(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-079a0716"],{"00b4":function(e,t,s){"use strict";s("ac1f");var n=s("23e7"),i=s("da84"),a=s("c65b"),r=s("e330"),l=s("1626"),o=s("861d"),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=i.Error,h=r(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=this.exec;if(!l(t))return h(this,e);var s=a(t,this,e);if(null!==s&&!o(s))throw new u("RegExp exec method returned something other than an Object or null");return!!s}})},"107c":function(e,t,s){var n=s("d039"),i=s("da84"),a=i.RegExp;e.exports=n((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"2bfd":function(e,t,s){},8378:function(e,t,s){},9263:function(e,t,s){"use strict";var n=s("c65b"),i=s("e330"),a=s("577e"),r=s("ad6d"),l=s("9f7f"),o=s("5692"),c=s("7c73"),u=s("69f3").get,h=s("fce3"),d=s("107c"),m=o("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,f=p,I=i("".charAt),v=i("".indexOf),x=i("".replace),g=i("".slice),b=function(){var e=/a/,t=/b*/g;return n(p,e,"a"),n(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),S=l.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],w=b||y||S||h||d;w&&(f=function(e){var t,s,i,l,o,h,d,w=this,D=u(w),C=a(e),$=D.raw;if($)return $.lastIndex=w.lastIndex,t=n(f,$,C),w.lastIndex=$.lastIndex,t;var R=D.groups,k=S&&w.sticky,_=n(r,w),E=w.source,V=0,F=C;if(k&&(_=x(_,"y",""),-1===v(_,"g")&&(_+="g"),F=g(C,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==I(C,w.lastIndex-1))&&(E="(?: "+E+")",F=" "+F,V++),s=new RegExp("^(?:"+E+")",_)),y&&(s=new RegExp("^"+E+"$(?!\\s)",_)),b&&(i=w.lastIndex),l=n(p,k?s:w,F),k?l?(l.input=g(l.input,V),l[0]=g(l[0],V),l.index=w.lastIndex,w.lastIndex+=l[0].length):w.lastIndex=0:b&&l&&(w.lastIndex=w.global?l.index+l[0].length:i),y&&l&&l.length>1&&n(m,l[0],s,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(l[o]=void 0)})),l&&R)for(l.groups=h=c(null),o=0;o<R.length;o++)d=R[o],h[d[0]]=l[d[1]];return l}),e.exports=f},"9f7f":function(e,t,s){var n=s("d039"),i=s("da84"),a=i.RegExp,r=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),l=r||n((function(){return!a("a","y").sticky})),o=r||n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:l,UNSUPPORTED_Y:r}},ac1f:function(e,t,s){"use strict";var n=s("23e7"),i=s("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,s){"use strict";var n=s("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},bc1a:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-col",[[s("v-card",{staticClass:"pt-2 pb-2",attrs:{flat:""}},[e.$store.state.loggedIn?s("div",[s("h2",[e._v("You have registered sucessfully!")]),s("h3")]):s("div",[s("h1",[e._v("Signup")]),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-row",[s("v-col",[s("v-text-field",{attrs:{rules:e.nameRules,label:"First Name",required:"",autocapitalize:"on"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}})],1),s("v-col",[s("v-text-field",{attrs:{rules:e.nameRules,label:"Last Name",required:"",autocapitalize:"on"},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1)],1),s("v-text-field",{attrs:{rules:e.usernameRules,label:"Username",required:"",autocapitalize:"none"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),s("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-map-marker",rules:e.locationRules,items:e.locations,"item-text":"name","item-value":"_id",placeholder:"Location",spellcheck:"false"},model:{value:e.form.locationID,callback:function(t){e.$set(e.form,"locationID",t)},expression:"form.locationID"}}),s("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:"",autocomplete:"email",autocapitalize:"none"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),s("v-text-field",{attrs:{type:"password",rules:e.passwordRules,label:"Password",autocomplete:"on",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),s("v-btn",{staticClass:"mr-4 signup",attrs:{rounded:"",text:"",disabled:!e.valid},on:{click:function(t){return e.register()}}},[e._v(" Sign up ")]),s("v-btn",{staticClass:"mr-4 reset",attrs:{rounded:"",text:""},on:{click:e.reset}},[e._v(" Reset Form ")])],1),s("br"),s("div",{staticClass:"footer-offset"},[s("h3",[e._v("Already have an account?"),s("br"),s("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1)])],1)])]],2)],1)},i=[],a=s("5530"),r=(s("ac1f"),s("00b4"),s("db49")),l=s("2f62"),o={name:"Home",data:function(){return{locations:[],form:{first_name:"",last_name:"",username:"",email:"",locationID:"",password:""},valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>=3||"Name must be at least 3 characters"}],usernameRules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length>=5||"Username must be at least 5 characters"}],emailRules:[function(e){return!!e||"Email required"},function(e){return/.+@.+\..+/.test(e)||"Email must be valid"}],locationRules:[function(e){return!!e||"Please select a location"}],passwordRules:[function(e){return!!e||"Password required"},function(e){return e&&e.length>=6||"Password must be at least 6 characters"}]}},computed:Object(a["a"])({},Object(l["c"])(["loggedIn"])),mounted:function(){this.getLocations()},methods:{reset:function(){this.$refs.form.reset()},register:function(){this.$refs.form.validate()&&this.$store.dispatch("register",this.form)},getLocations:function(){var e=this;r["a"].get("/locations").then((function(t){e.locations=t.data})).catch((function(e){return console.log(e)}))}}},c=o,u=(s("c7d0"),s("2877")),h=s("6544"),d=s.n(h),m=s("c6a6"),p=s("8336"),f=s("b0af"),I=s("62ad"),v=s("a523"),x=s("4bd4"),g=s("0fd9"),b=s("8654"),S=Object(u["a"])(c,n,i,!1,null,"c998a35e",null);t["default"]=S.exports;d()(S,{VAutocomplete:m["a"],VBtn:p["a"],VCard:f["a"],VCol:I["a"],VContainer:v["a"],VForm:x["a"],VRow:g["a"],VTextField:b["a"]})},c6a6:function(e,t,s){"use strict";s("2bfd");var n=s("b974"),i=s("8654"),a=s("d9f7"),r=s("80d2");const l={...n["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(r["n"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=n["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...l,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=n["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(e=>e===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===r["s"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["s"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["s"].backspace&&e!==r["s"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const n=this.selectedItems.length,i=e!==n-1?e:e-1,a=this.selectedItems[i];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(a["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["m"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["m"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=n["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[r["s"].home,r["s"].end].includes(t)||n["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){n["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){n["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(t=e.clipboardData)||t.setData("text/plain",i),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}})},c7d0:function(e,t,s){"use strict";s("8378")},fce3:function(e,t,s){var n=s("d039"),i=s("da84"),a=i.RegExp;e.exports=n((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-079a0716.7fdd0e8c.js.map