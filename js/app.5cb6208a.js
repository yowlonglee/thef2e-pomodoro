(function(t){function o(o){for(var i,a,r=o[0],c=o[1],l=o[2],u=0,m=[];u<r.length;u++)a=r[u],s[a]&&m.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(o);while(m.length)m.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,o=0;o<n.length;o++){for(var e=n[o],i=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(i=!1)}i&&(n.splice(o--,1),t=a(a.s=e[0]))}return t}var i={},s={app:0},n=[];function a(o){if(i[o])return i[o].exports;var e=i[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,o,e){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)a.d(e,i,function(o){return t[o]}.bind(null,i));return e},a.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="/thef2e-pomodoro/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=o,r=r.slice();for(var l=0;l<r.length;l++)o(r[l]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},1170:function(t,o,e){},1499:function(t,o,e){},"1a74":function(t,o,e){"use strict";var i=e("1499"),s=e.n(i);s.a},"1ac0":function(t,o,e){"use strict";var i=e("eaa2"),s=e.n(i);s.a},"354e":function(t,o,e){"use strict";var i=e("6446"),s=e.n(i);s.a},4909:function(t,o,e){},"4c19":function(t,o,e){"use strict";var i=e("d7de"),s=e.n(i);s.a},"4d05":function(t,o,e){},"4fbd":function(t,o,e){"use strict";var i=e("1170"),s=e.n(i);s.a},"53ec":function(t,o,e){"use strict";var i=e("4909"),s=e.n(i);s.a},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{class:{break:t.pomodoro.isBreak,"is-main-layout":"main"===t.$route.name},attrs:{id:"app"}},[e("div",{staticClass:"container",class:{"is-countdown":t.pomodoro.isCountdown,"is-pause":t.pomodoro.isPause}},[e("router-view",{staticClass:"view-wrapper"},[e("NavList")],1)],1)])},n=[],a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"nav-list"},["main"===t.$route.name?[e("router-link",{staticClass:"nav-item",attrs:{to:"/to-do-list"}},[e("i",{staticClass:"material-icons md-36 md-light"},[t._v("list")])]),e("router-link",{staticClass:"nav-item",attrs:{to:"/analytics"}},[e("i",{staticClass:"material-icons md-36 md-light"},[t._v("insert_chart")])]),e("router-link",{staticClass:"nav-item",attrs:{to:"/ringtones"}},[e("i",{staticClass:"material-icons md-36 md-light"},[t._v("library_music")])])]:[e("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e("i",{staticClass:"material-icons md-36 md-light"},[t._v("close")])])]],2)},r=[],c={name:"NavList"},l=c,d=(e("c0e9"),e("2877")),u=Object(d["a"])(l,a,r,!1,null,"7ad2c16a",null),m=u.exports,p={components:{NavList:m},computed:{pomodoro:function(){return this.$store.state.pomodoro}}},v=p,f=(e("5c0b"),Object(d["a"])(v,s,n,!1,null,null,null)),h=f.exports,y=e("8c4f"),g=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"main-view"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-5"},[e("styled-input"),t.toDoListLength>0?[e("app-pomodoro-timer"),e("div",{staticClass:"mini-to-do-list"},[t.miniToDoList.length>0?[t._l(t.miniToDoList,function(t,o){return e("to-do",{key:t.title,attrs:{title:t.title,index:o+1}})}),e("div",{staticClass:"shortcut"},[e("router-link",{attrs:{to:"/to-do-list"}},[t._v("More")])],1)]:[t._m(0)]],2)]:[e("div",[t._v("To do list is empty")]),e("div",[t._v("Try to add some tasks use the form above")])]],2),e("div",{staticClass:"col-6 d-flex flex-align-items-center"},[t.miniToDoList.length>0?[e("app-pomodoro-pie")]:t._e()],2),e("div",{staticClass:"col-1"},[t._t("default")],2)])])},C=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",[t._v("To do list is empty")]),e("div",[t._v("Try to add some tasks use the form above")])])}],_=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"app-pomodoro-timer"},[e("div",{staticClass:"timer"},[e("to-do",{attrs:{title:t.firstToDo.title,pomodoro:t.firstToDo.pomodoro,isTimerLayout:""}}),e("div",{staticClass:"timer-duration"},[e("div",{staticClass:"duration-item"},[t._v(t._s(t.strMinutes))]),e("div",{staticClass:"duration-item"},[t._v(":")]),e("div",{staticClass:"duration-item"},[t._v(t._s(t.strSeconds))])])],1)])},b=[],D=(e("6b54"),e("f576"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"to-do",class:{"timer-to-do":t.isTimerLayout,done:t.done}},[e("div",{staticClass:"to-do-radio",on:{click:t.toggleComplete}},[e("i",{staticClass:"material-icons unchecked",class:{"md-48":t.isTimerLayout}},[t._v("\n      radio_button_unchecked\n    ")]),e("i",{staticClass:"material-icons checked",class:{"md-48":t.isTimerLayout}},[t._v("\n      radio_button_checked\n    ")])]),e("div",{staticClass:"to-do-container"},[e("div",{staticClass:"to-do-title"},[t._v(t._s(t.title))]),e("div",{staticClass:"to-do-append"},[t.isTimerLayout||t.done?[t.pomodoro>0?e("div",{staticClass:"history-group"},t._l(t.pomodoro,function(o){return e("div",{key:o,staticClass:"history-item"},[e("i",{staticClass:"material-icons md-12"},[t._v("fiber_manual_record")])])}),0):t._e(),t.isTimerLayout?[e("div",{staticClass:"timer-svg-container"},[e("svg",{attrs:{viewBox:"-0.5 -0.5 101 101"}},[e("use",{staticClass:"circle1",attrs:{href:"#circle1"}}),e("use",{staticClass:"circle2",attrs:{href:"#circle2"}})])])]:t._e()]:[e("div",{staticClass:"to-do-icon-start",on:{click:t.continueToDo}},[e("i",{staticClass:"material-icons"},[t._v("play_circle_outline")])])]],2)])])}),T=[],w=(e("7f7f"),e("c5f6"),{name:"ToDo",props:{title:String,pomodoro:{type:Number,default:0},done:{type:Boolean,default:!1},isTimerLayout:{type:Boolean,default:!1},index:{type:Number}},methods:{toggleComplete:function(){this.done?this.$store.dispatch("restore",this.index):this.$store.dispatch("remove",this.index)},continueToDo:function(){this.$store.dispatch("continue",this.index),"main"!==this.$route.name&&this.$router.push("/")}}}),k=w,O=(e("ac7d"),Object(d["a"])(k,D,T,!1,null,"b1bf5928",null)),P=O.exports,x={name:"AppPomodoroTimer",components:{ToDo:P},props:{},data:function(){return{}},computed:{strSeconds:function(){return this.numberToDoubleDigitString(this.$store.state.pomodoro.seconds)},strMinutes:function(){return this.numberToDoubleDigitString(this.$store.state.pomodoro.minutes)},firstToDo:function(){return this.$store.state.toDos[0]}},methods:{numberToDoubleDigitString:function(t){return t.toString().padStart(2,"0")}}},j=x,$=(e("354e"),Object(d["a"])(j,_,b,!1,null,"25f75c7e",null)),S=$.exports,L=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"app-pomodoro-pie svg-container"},[e("svg",{staticClass:"timer-pie",attrs:{viewBox:"-0.5 -0.5 101 101"}},[e("circle",{staticClass:"circle1",attrs:{id:"circle1",r:"50",cx:"50",cy:"50"}}),e("circle",{staticClass:"circle2",attrs:{id:"circle2",r:"25",cx:"50",cy:"50",transform:"rotate(-90 50 50)"}}),e("circle",{staticClass:"circle3",attrs:{r:"46.5",cx:"50",cy:"50"}}),e("circle",{staticClass:"circle4",attrs:{r:"9",cx:"50",cy:"50"}}),e("g",{staticClass:"pause",on:{click:t.pause}},[e("rect",{staticClass:"rect1",attrs:{width:"6",height:"6",x:"47",y:"47"}}),e("rect",{staticClass:"rect2",attrs:{width:"2",height:"6",x:"49",y:"47"}})]),e("polygon",{staticClass:"start",attrs:{points:"48.5,47 53,50 48.5,53"},on:{click:t.start}}),e("rect",{staticClass:"stop",attrs:{width:"3",height:"3",x:"61",y:"56",id:"stop"},on:{click:t.stop}})])])},M=[],E=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),R=e("2f62");function B(t,o){var e=Object.keys(t);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(t)),o&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e}function N(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?B(e,!0).forEach(function(o){Object(E["a"])(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):B(e).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}var A={name:"AppPomodoroPie",props:{},data:function(){return{}},methods:N({},Object(R["b"])(["runTimer","start","stop","pause","clearRunningTimer"]))},I=A,W=(e("1a74"),Object(d["a"])(I,L,M,!1,null,"f2079b92",null)),V=W.exports,J=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"styled-input"},[e("input",{ref:"i",staticClass:"add-to-do",attrs:{type:"text",placeholder:"Add a New Mission..."},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.newToDo(o)}}}),e("span",{staticClass:"styled-input-append",on:{click:t.newToDo}},[e("i",{staticClass:"material-icons"},[t._v("add")])])])},F=[],Y={name:"StyledInput",methods:{newToDo:function(){var t=this.$refs.i.value.trim();t&&this.$store.dispatch("add",t),this.$refs.i.value=""}}},G=Y,q=(e("1ac0"),Object(d["a"])(G,J,F,!1,null,"537fd081",null)),z=q.exports,H={name:"MainView",components:{AppPomodoroTimer:S,AppPomodoroPie:V,StyledInput:z,ToDo:P},data:function(){return{}},computed:{toDoListLength:function(){return this.$store.state.toDos.length},miniToDoList:function(){var t=[];if(this.$store.state.toDos.length>1)for(var o=Math.min(4,this.$store.state.toDos.length),e=1;e<o;e++)t.push(this.$store.state.toDos[e]);return t}}},K=H,Q=(e("b32a"),Object(d["a"])(K,g,C,!1,null,null,null)),U=Q.exports,X=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"to-do-list-view"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4 d-flex flex-column justify-between"},[e("mini-nav-list"),e("mini-pomodoro")],1),e("div",{staticClass:"col-5 offset-1"},[e("styled-input"),e("div",{staticClass:"accordion",on:{click:t.toggleAccordion}},[e("div",{staticClass:"accordion-header"},[e("div",[t._v("To-do - "+t._s(t.toDoList.length))]),e("i",{staticClass:"material-icons"},[t._v("arrow_drop_up")])]),e("div",{staticClass:"accordion-panel"},[t.toDoList.length>0?t._l(t.toDoList,function(o,i){return e("to-do",{key:o.title,attrs:{title:o.title,index:i},on:{remove:function(o){return t.toDoList.splice(i,1)}}})}):[e("div",[t._v("You have no to dos")])]],2)]),e("div",{staticClass:"accordion",on:{click:t.toggleAccordion}},[e("div",{staticClass:"accordion-header"},[e("div",[t._v("Done - "+t._s(t.finishedToDoList.length))]),e("i",{staticClass:"material-icons"},[t._v("arrow_drop_up")])]),e("div",{staticClass:"accordion-panel finished"},[t.finishedToDoList.length>0?t._l(t.finishedToDoList,function(t,o){return e("to-do",{key:t.title,attrs:{title:t.title,pomodoro:t.pomodoro,index:o,done:""}})}):t._e()],2)])],1),e("div",{staticClass:"col-1 offset-1"},[t._t("default")],2)])])},Z=[],tt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mini-nav-list"},[e("router-link",{staticClass:"mini-nav-item",attrs:{to:"/to-do-list"}},[e("i",{staticClass:"material-icons md-36"},[t._v("list")]),e("div",[t._v("to-do list")])]),e("router-link",{staticClass:"mini-nav-item",attrs:{to:"/analytics"}},[e("i",{staticClass:"material-icons md-36"},[t._v("insert_chart")]),e("div",[t._v("analytics")])]),e("router-link",{staticClass:"mini-nav-item",attrs:{to:"/ringtones"}},[e("i",{staticClass:"material-icons md-36"},[t._v("library_music")]),e("div",[t._v("ringtones")])])],1)},ot=[],et={name:"MiniNavList"},it=et,st=(e("7148"),Object(d["a"])(it,tt,ot,!1,null,"71ad0696",null)),nt=st.exports,at=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mini-pomodoro-container"},[e("div",{staticClass:"mini-pomodoro"},[e("div",{staticClass:"mini-pomodoro-group"},[e("div",{staticClass:"mini-controls"},[e("svg",{staticClass:"control-group",attrs:{viewBox:"-3 -3 106 106"}},[e("circle",{staticClass:"stroke",attrs:{r:"50",cx:"50",cy:"50"}}),e("circle",{staticClass:"filler",attrs:{r:"44",cx:"50",cy:"50"}}),e("circle",{staticClass:"pie",attrs:{r:"22",cx:"50",cy:"50",transform:"rotate(-90 50 50)"}}),e("circle",{staticClass:"cover",attrs:{r:"36",cx:"50",cy:"50"}}),e("g",{staticClass:"pause",on:{click:t.pause}},[e("rect",{staticClass:"rect1",attrs:{width:"33",height:"40",x:"33",y:"30"}}),e("rect",{staticClass:"rect2",attrs:{width:"11",height:"40",x:"44",y:"30"}})]),e("polygon",{staticClass:"start",attrs:{points:"38,33 66,50 38,66"},on:{click:t.start}})])]),e("div",{staticClass:"timer-duration"},[e("div",{staticClass:"duration-item"},[t._v(t._s(t.strMinutes))]),e("div",{staticClass:"duration-item"},[t._v(":")]),e("div",{staticClass:"duration-item"},[t._v(t._s(t.strSeconds))])]),e("div",{staticClass:"mini-pomodoro-title"},[t._v(t._s(t.firstToDo))])])])])},rt=[];function ct(t,o){var e=Object.keys(t);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(t)),o&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e}function lt(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?ct(e,!0).forEach(function(o){Object(E["a"])(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ct(e).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}var dt={name:"MiniPomodoro",computed:{strSeconds:function(){return this.numberToDoubleDigitString(this.$store.state.pomodoro.seconds)},strMinutes:function(){return this.numberToDoubleDigitString(this.$store.state.pomodoro.minutes)},firstToDo:function(){return this.$store.state.toDos[0].title}},methods:lt({},Object(R["b"])(["start","pause"]),{numberToDoubleDigitString:function(t){return t.toString().padStart(2,"0")}})},ut=dt,mt=(e("4c19"),Object(d["a"])(ut,at,rt,!1,null,"9dc4c5ea",null)),pt=mt.exports,vt={name:"ToDoListView",components:{MiniNavList:nt,StyledInput:z,ToDo:P,MiniPomodoro:pt},computed:{toDoList:function(){return this.$store.state.toDos},finishedToDoList:function(){return this.$store.state.finishedToDos}},methods:{toggleAccordion:function(t){t.target.classList.contains("accordion-header")&&t.currentTarget.classList.toggle("hide")}}},ft=vt,ht=(e("53ec"),Object(d["a"])(ft,X,Z,!1,null,"a82900dc",null)),yt=ht.exports,gt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"analytics-view"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("mini-nav-list"),e("mini-pomodoro")],1),e("div",{staticClass:"col-5 offset-1"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-header"},[t._v("Focus Time")]),e("div",{staticClass:"panel-body report-panel"},[e("div",{staticClass:"report"},[e("div",{staticClass:"report-title"},[t._v("Today")]),e("div",{staticClass:"report-sum"},[t._v(t._s(t.sumToday))]),e("div",{staticClass:"report-tomato"},[t._v("/tomato")])]),e("div",{staticClass:"report"},[e("div",{staticClass:"report-title"},[t._v("Week")]),e("div",{staticClass:"report-sum"},[t._v(t._s(t.sumWeek))]),e("div",{staticClass:"report-tomato"},[t._v("/tomato")])])])]),t._m(0)]),e("div",{staticClass:"col-1 offset-1"},[t._t("default")],2)])])},Ct=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-header"},[t._v("Chart")]),e("div",{staticClass:"panel-body"})])}],_t={name:"AnalyticsView",components:{MiniNavList:nt,MiniPomodoro:pt},computed:{today:function(){var t=new Date;return{year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate(),day:t.getDay()}},sumToday:function(){var t=this.$store.state.history[this.$store.state.history.length-1];return t.year===this.today.year&&t.month===this.today.month&&t.date===this.today.date?t.pomodoro:0},sumWeek:function(){return 50}}},bt=_t,Dt=(e("8b43"),Object(d["a"])(bt,gt,Ct,!1,null,"c311136a",null)),Tt=Dt.exports,wt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"ringtones-view"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("mini-nav-list"),e("mini-pomodoro")],1),e("div",{staticClass:"col-5 offset-1"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-header"},[t._v("Work")]),e("div",{staticClass:"panel-body"},[e("ringtone-list",{attrs:{type:"work"}})],1)]),e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-header"},[t._v("Break")]),e("div",{staticClass:"panel-body"},[e("ringtone-list",{attrs:{type:"break"}})],1)])]),e("div",{staticClass:"col-1 offset-1"},[t._t("default")],2)])])},kt=[],Ot=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"ringtone-list"},[t._l(t.sounds,function(o){return[e("div",{key:o,staticClass:"ringtone",class:{active:t.currentRingtones[t.type]===o},attrs:{"data-name":o}},[e("div",{staticClass:"ringtone-radio",on:{click:t.select}},[e("i",{staticClass:"material-icons unchecked"},[t._v("\n          radio_button_unchecked\n        ")]),e("i",{staticClass:"material-icons checked"},[t._v("\n          radio_button_checked\n        ")])]),e("div",{staticClass:"ringtone-title"},[t._v(t._s(o))])])]})],2)},Pt=[],xt={name:"RingtoneList",props:{type:String},data:function(){return{sounds:["none","default","alarm","alert","beep","bell","bird","bungle","digital","drop","horn","music","ring","warning","whistle"]}},computed:{currentRingtones:function(){return this.$store.state.ringtones}},methods:{select:function(t){var o=t.target.closest(".ringtone");this.$store.dispatch("changeRingtone",{type:this.type,name:o.dataset.name})}}},jt=xt,$t=(e("4fbd"),Object(d["a"])(jt,Ot,Pt,!1,null,"86e35812",null)),St=$t.exports,Lt={name:"RingtonesView",components:{MiniNavList:nt,RingtoneList:St,MiniPomodoro:pt}},Mt=Lt,Et=Object(d["a"])(Mt,wt,kt,!1,null,null,null),Rt=Et.exports;i["a"].use(y["a"]);var Bt=new y["a"]({mode:"history",base:"/thef2e-pomodoro/",routes:[{path:"/",name:"main",component:U},{path:"/to-do-list",name:"to-do-list",component:yt},{path:"/analytics",name:"analytics",component:Tt},{path:"/ringtones",name:"ringtones",component:Rt}]});i["a"].use(R["a"]);var Nt=new R["a"].Store({state:{pomodoro:{minutes:25,seconds:0,isBreak:!1,isCountdown:!1,isPause:!1},toDos:[{title:"Better to persist than perfect",pomodoro:2},{title:"The second thing to do today is always better than the first one",pomodoro:0},{title:"The third thing to do today",pomodoro:3},{title:"The fourth thing to do today",pomodoro:5},{title:"The fifth thing to do today",pomodoro:0}],finishedToDos:[{title:"Meeting with Jane",pomodoro:2},{title:"Watch Game of Thrones",pomodoro:4},{title:"Listen to podcast",pomodoro:1},{title:"Cook dinner",pomodoro:2}],history:[{year:2019,month:6,date:30,pomodoro:3},{year:2019,month:7,date:1,pomodoro:2},{year:2019,month:7,date:2,pomodoro:10},{year:2019,month:7,date:3,pomodoro:2},{year:2019,month:7,date:4,pomodoro:0},{year:2019,month:7,date:5,pomodoro:9},{year:2019,month:7,date:6,pomodoro:8},{year:2019,month:7,date:7,pomodoro:7},{year:2019,month:7,date:8,pomodoro:8},{year:2019,month:7,date:9,pomodoro:5},{year:2019,month:7,date:10,pomodoro:4},{year:2019,month:7,date:11,pomodoro:4},{year:2019,month:7,date:12,pomodoro:0},{year:2019,month:7,date:13,pomodoro:9},{year:2019,month:7,date:14,pomodoro:3},{year:2019,month:7,date:15,pomodoro:4},{year:2019,month:7,date:16,pomodoro:10},{year:2019,month:7,date:17,pomodoro:5},{year:2019,month:7,date:18,pomodoro:1},{year:2019,month:7,date:19,pomodoro:2},{year:2019,month:7,date:22,pomodoro:6}],interval:"",ringtones:{work:"none",break:"none"}},getters:{},mutations:{decrement:function(t,o){t.pomodoro[o]--},setTime:function(t,o){t.pomodoro[o.name]=o.amount},setPomodoroState:function(t,o){t.pomodoro[o.name]=o.val},setTimer:function(t,o){o||(o=""),t.interval=o},addToDo:function(t,o){t.toDos.push({title:o,pomodoro:0})},removeToDo:function(t,o){t.finishedToDos.push(t.toDos[o]),t.toDos.splice(o,1)},restoreToDo:function(t,o){t.toDos.push(t.finishedToDos[o]),t.finishedToDos.splice(o,1)},continue:function(t,o){var e=t.toDos.splice(o,1);t.toDos.unshift(e[0])},changeRingtone:function(t,o){t.ringtones[o.type]=o.name}},actions:{runTimer:function(t){var o=t.commit,e=t.dispatch,i=t.state;if(0==i.pomodoro.seconds){if(0==i.pomodoro.minutes)return void e("stop");o("setPomodoroState",{name:"seconds",val:59}),o("decrement","minutes")}else o("decrement","seconds")},start:function(t){var o=t.commit,e=t.dispatch;o("setPomodoroState",{name:"isPause",val:!1}),o("setPomodoroState",{name:"isCountdown",val:!0});var i=setInterval(function(){return e("runTimer")},1e3);o("setTimer",i)},stop:function(t){var o=t.commit,e=t.dispatch,i=t.state,s=!i.pomodoro.isBreak,n=s?5:25;e("clearRunningTimer"),o("setPomodoroState",{name:"isCountdown",val:!1}),o("setPomodoroState",{name:"isPause",val:!1}),o("setPomodoroState",{name:"isBreak",val:s}),o("setPomodoroState",{name:"minutes",val:n}),o("setPomodoroState",{name:"seconds",val:0})},pause:function(t){var o=t.commit,e=t.dispatch;e("clearRunningTimer"),o("setPomodoroState",{name:"isPause",val:!0})},clearRunningTimer:function(t){var o=t.commit,e=t.state;clearInterval(e.interval),o("setTimer")},add:function(t,o){var e=t.commit;e("addToDo",o)},remove:function(t,o){var e=t.commit;e("removeToDo",o)},restore:function(t,o){var e=t.commit;e("restoreToDo",o)},continue:function(t,o){var e=t.commit,i=t.dispatch;e("continue",o),i("clearRunningTimer"),e("setPomodoroState",{name:"isBreak",val:!1}),e("setPomodoroState",{name:"minutes",val:25}),e("setPomodoroState",{name:"seconds",val:0}),i("start")},changeRingtone:function(t,o){var e=t.commit;e("changeRingtone",o)}}});e("f5df"),e("619b"),e("e3b3");i["a"].config.productionTip=!1,new i["a"]({router:Bt,store:Nt,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,o,e){"use strict";var i=e("5e27"),s=e.n(i);s.a},"5d8f":function(t,o,e){},"5e27":function(t,o,e){},6446:function(t,o,e){},"69db":function(t,o,e){},7148:function(t,o,e){"use strict";var i=e("5d8f"),s=e.n(i);s.a},"8b43":function(t,o,e){"use strict";var i=e("69db"),s=e.n(i);s.a},"9b14":function(t,o,e){},ac7d:function(t,o,e){"use strict";var i=e("4d05"),s=e.n(i);s.a},b32a:function(t,o,e){"use strict";var i=e("d86f"),s=e.n(i);s.a},c0e9:function(t,o,e){"use strict";var i=e("9b14"),s=e.n(i);s.a},d7de:function(t,o,e){},d86f:function(t,o,e){},eaa2:function(t,o,e){}});
//# sourceMappingURL=app.5cb6208a.js.map