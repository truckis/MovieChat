webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={props:{results:Array,baseImageURL:String,baseURL:String,mykey:String},data:function(){return{isModalVisible:!0,dialog:!1,newResults:this.results,newbaseURL:this.baseURL,newKey:this.mykey,newdata:[],showModal:!1,title:null,genres:[],release:"",runtime:""}},methods:{getId:function(t){var e=this,a="".concat(this.newbaseURL,"movie/",t,this.newKey,"&language=en-US");fetch(a).then(function(t){return t.json()}).then(function(t){e.newdata=t,e.title=t.title,e.genre=t.genres;var a=e.newdata.release_date;e.release=a.toString().split("-")[0],console.log(e.release);var s=e.newdata.runtime;e.runtime=s<=60?s+" Minutes":null==s?"No one Knows :-(":(s/60).toFixed(1)+" Hours"})},showTheModal:function(){this.isModalVisible=!0},closeTheModal:function(){this.isModalVisible=!1}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.results,function(e){return a("v-flex",{key:"4"+e.id,attrs:{xs4:""},on:{click:function(a){t.getId(e.id)}}},[a("v-card-media",{attrs:{src:t.baseImageURL+e.poster_path,height:"400px",contain:""},on:{click:function(a){t.getId(e.id)}},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!0}}})],1)})),t._v(" "),a("v-dialog",{directives:[{name:"show",rawName:"v-show"}],attrs:{fullscreen:"",id:"my-modal"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-flex",[a("v-card",{staticClass:"white--text",staticStyle:{height:"100%"},attrs:{id:"my-modal",fullscreen:""}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mt-2",attrs:{xs5:""}},[a("v-card-media",{attrs:{src:t.baseImageURL+t.newdata.poster_path,height:"400px",contain:""}})],1),t._v(" "),a("v-flex",{staticClass:"mt-2 pb-2",attrs:{xs7:""}},[a("div",[a("div",{staticClass:"display-3"},[t._v(t._s(t.newdata.title))]),t._v(" "),a("div",[a("h4",{staticClass:"subheading"},[t._v("Release Date: "+t._s(t.release)+" "),a("br"),t._v(t._s(t.newdata.tagline))]),t._v(" "),a("h2",{staticClass:"headline mt-3"},[t._v(t._s(t.newdata.overview))]),t._v(" "),a("h4",{staticClass:"title mt-3"},[t._v("Rating: "+t._s(t.newdata.vote_average)+" / 10")]),t._v(" "),a("h4",{staticClass:"title mt-2"},[t._v("Runtime: "+t._s(t.runtime))]),t._v(" "),a("a",{staticClass:"subheading",attrs:{href:t.newdata.homepage,target:"_blank"}},[t._v(t._s(t.newdata.title)+" Home Page ")])])])]),t._v(" "),a("v-btn",{attrs:{color:"orange darken-2",dark:"","d-inline":""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("fykH")},"data-v-20c2a4dc",null).exports,r=a("mtWM"),l=a.n(r),c={data:function(){return{message:"",mytext:"",list:[],results:[],title:"",year:"",genre:"",rating:"",image:"",url:"http://www.omdbapi.com/?i=tt3896198&apikey=af4ba98b"}},mounted:function(){var t=this;l.a.get(this.url).then(function(e){t.results=e.data})},methods:{addTask:function(){var t=this.mytext;this.list.push(t),this.mytext="",console.log("Function is working");var e=this.results.Title;this.title=e,console.log(e)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("v-text-field",{staticClass:"pl-2 pt-3",attrs:{name:"input-1",label:"What do you want to watch?",id:"testing"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.handler()}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)},staticRenderFns:[]};var u=a("VU/8")(c,d,!1,function(t){a("Qmfs")},"data-v-367d8881",null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[a("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[a("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v("X")])])],2),t._v(" "),a("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t._t("body",[a("h1",[t._v("Hello this is a modal")])])],2),t._v(" "),a("footer",{staticClass:"modal-footer"},[t._t("footer",[a("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v("Close me!")])])],2)])])])},staticRenderFns:[]};a("VU/8")({name:"modal",methods:{close:function(){this.$emit("close")}}},v,!1,function(t){a("pnbe")},null,null).exports;var h=a("3EgV"),m=a.n(h);s.a.use(m.a);var g={name:"App",components:{InputComponent:u,SearchResults:o},data:function(){return{showIntro:!0,drawer:null,message:"",list:[],results:[],baseURL:"https://api.themoviedb.org/3/",configData:null,baseImageURL:null,mykey:"?api_key=f942d08e742f6170fa89654a541ecfb0",query:"&query=",fullImage:null,isActive:!1}},methods:{getConfig:function(){var t=this,e="".concat(this.baseURL,"configuration",this.mykey);fetch(e).then(function(t){return t.json()}).then(function(e){t.baseImageURL=e.images.secure_base_url+"w500",console.log("config:",e),console.log("config fetched"),console.log(t.baseImageURL)}).catch(function(t){alert(t)})},runSearch:function(t){var e=this,a="".concat(this.baseURL,"search/movie",this.mykey,"&query=",t);fetch(a).then(function(t){return t.json()}).then(function(t){e.results=t.results})},showIntro:function(){this.showIntro=!0},closeIntro:function(){this.showIntro=!1},handler:function(t){var e=this.message;this.getConfig(),this.runSearch(e),this.isActive=!0},reset:function(){var t=this;t.drawComponent=!1,s.a.nextTick(function(){t.drawComponent=!0})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-toolbar",{attrs:{app:"",color:"blue-grey darken-3"}},[a("v-btn",{attrs:{dark:"",color:"red accent-3"},on:{click:[function(e){e.stopPropagation(),t.drawer=!t.drawer},t.closeIntro]}},[t._v("Search")]),t._v(" "),a("v-toolbar-title",{staticClass:"white--text center-title"},[t._v("MovieBot")]),t._v(" "),a("a",{staticClass:"mr-2 white--text",attrs:{href:"https://github.com/mdelbianco9"}},[t._v("Github")]),t._v(" "),a("a",{staticClass:"mr-2 white--text",attrs:{href:"https://www.linkedin.com/in/marcus-del-bianco-24357b25/"}},[t._v("LinkedIn")])],1),t._v(" "),a("v-layout",{staticStyle:{height:"50px"},attrs:{wrap:""}},[a("v-navigation-drawer",{staticClass:"pl-2 pr-2 fixed-side",attrs:{temporary:"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._v(" "),a("v-text-field",{staticClass:"pl-2 pt-5",attrs:{name:"input-1",label:"What do you want to watch?",id:"testing"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.handler()}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),a("v-card-media",{staticClass:"mt-3",attrs:{src:"https://image.tmdb.org/t/p/w500/ilrZAV2klTB0FLxLb01bOp5pzD9.jpg",height:"400px",contain:""}}),t._v(" "),a("v-card-media",{staticClass:"mt-3",attrs:{src:"https://image.tmdb.org/t/p/w500/5vMEXtz1DXgxFsv8pgFFGuOlI8V.jpg",height:"400px",contain:""}})],1)],1)],1),t._v(" "),a("v-container",{staticClass:"main-container",class:{isActive:t.isActive},attrs:{fluid:""}},[a("v-jumbotron",{directives:[{name:"show",rawName:"v-show",value:t.showIntro,expression:"showIntro"}],staticStyle:{width:"50%",padding:".5rem",margin:"auto","margin-top":"3rem","background-color":"rgb(236, 239, 241, .8)"}},[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",[a("h3",{staticClass:"display-2  red--text",staticStyle:{"font-weight":"500"}},[t._v("Welcome to MovieBot")]),t._v(" "),a("span",{staticClass:"title black--text"},[t._v("Search for any movie or show titles. ")]),t._v(" "),a("v-divider",{staticClass:"my-3 white--text"}),t._v(" "),a("v-btn",{attrs:{large:"",color:"red mx-0 white--text"},on:{click:[function(e){e.stopPropagation(),t.drawer=!t.drawer},t.closeIntro]}},[t._v("See more")])],1)],1)],1)],1),t._v(" "),a("SearchResults",{attrs:{results:t.results,baseImageURL:t.baseImageURL,baseURL:t.baseURL,mykey:t.mykey}})],1)],1)],1)},staticRenderFns:[]};var f=a("VU/8")(g,p,!1,function(t){a("dbCV")},null,null).exports;a("7zck");s.a.component("SearchResults",o),s.a.component("InputComponent",u),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:f},template:"<App/>"})},Qmfs:function(t,e){},dbCV:function(t,e){},fykH:function(t,e){},pnbe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0a0885ea46801fb0bba6.js.map