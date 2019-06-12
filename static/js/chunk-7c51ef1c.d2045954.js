(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c51ef1c"],{"0233":function(t,e,a){"use strict";var s=a("9168"),i=a.n(s);i.a},6834:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},i=[],n=a("24ce"),r=a.n(n),c=a("ed08"),l={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,sidebarElm:null,hours:["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(c["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,a=t.actualData;this.chart.setOption({title:{text:this.chartData.tit,textStyle:{fontSize:16,color:"#404040",fontWeight:400}},grid:{left:20,right:34,bottom:20,top:60,containLabel:!0},xAxis:{data:this.chartData.xdate||this.hours,boundaryGap:!1,axisTick:{show:!1}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},legend:{data:[this.chartData.date,""],right:10},series:[{name:this.chartData.date,itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=r.a.init(this.$el),this.setOptions(this.chartData)}}},d=l,o=a("17cc"),u=Object(o["a"])(d,s,i,!1,null,null,null);e["a"]=u.exports},"77d2":function(t,e,a){var s={"./af":"fbac","./af.js":"fbac","./ar":"f96f","./ar-dz":"e63c","./ar-dz.js":"e63c","./ar-kw":"b7bd","./ar-kw.js":"b7bd","./ar-ly":"968f","./ar-ly.js":"968f","./ar-ma":"9f9d","./ar-ma.js":"9f9d","./ar-sa":"aea5","./ar-sa.js":"aea5","./ar-tn":"d44b","./ar-tn.js":"d44b","./ar.js":"f96f","./az":"c7ed","./az.js":"c7ed","./be":"5a28","./be.js":"5a28","./bg":"1251","./bg.js":"1251","./bm":"2809","./bm.js":"2809","./bn":"b4fc","./bn.js":"b4fc","./bo":"5484","./bo.js":"5484","./br":"5adc","./br.js":"5adc","./bs":"ac10","./bs.js":"ac10","./ca":"e381","./ca.js":"e381","./cs":"aef2","./cs.js":"aef2","./cv":"6566","./cv.js":"6566","./cy":"1390","./cy.js":"1390","./da":"1ece","./da.js":"1ece","./de":"5f10","./de-at":"09c4","./de-at.js":"09c4","./de-ch":"89a2","./de-ch.js":"89a2","./de.js":"5f10","./dv":"e662","./dv.js":"e662","./el":"196b","./el.js":"196b","./en-SG":"0a32","./en-SG.js":"0a32","./en-au":"94ed","./en-au.js":"94ed","./en-ca":"2806","./en-ca.js":"2806","./en-gb":"b0dd","./en-gb.js":"b0dd","./en-ie":"7a6e","./en-ie.js":"7a6e","./en-il":"1f0f","./en-il.js":"1f0f","./en-nz":"1606","./en-nz.js":"1606","./eo":"f214","./eo.js":"f214","./es":"7d58","./es-do":"737b","./es-do.js":"737b","./es-us":"a894","./es-us.js":"a894","./es.js":"7d58","./et":"a888","./et.js":"a888","./eu":"1357","./eu.js":"1357","./fa":"0a48","./fa.js":"0a48","./fi":"c2b1","./fi.js":"c2b1","./fo":"52c4","./fo.js":"52c4","./fr":"04e6","./fr-ca":"6ad1","./fr-ca.js":"6ad1","./fr-ch":"b12f","./fr-ch.js":"b12f","./fr.js":"04e6","./fy":"ad13","./fy.js":"ad13","./ga":"369e","./ga.js":"369e","./gd":"22de","./gd.js":"22de","./gl":"f808","./gl.js":"f808","./gom-latn":"50d5","./gom-latn.js":"50d5","./gu":"e67a","./gu.js":"e67a","./he":"037c","./he.js":"037c","./hi":"3d53","./hi.js":"3d53","./hr":"678b","./hr.js":"678b","./hu":"1783","./hu.js":"1783","./hy-am":"2873","./hy-am.js":"2873","./id":"de99","./id.js":"de99","./is":"6aa2","./is.js":"6aa2","./it":"1f93","./it-ch":"2db9","./it-ch.js":"2db9","./it.js":"1f93","./ja":"6bf8","./ja.js":"6bf8","./jv":"6e55","./jv.js":"6e55","./ka":"e65f","./ka.js":"e65f","./kk":"7167","./kk.js":"7167","./km":"4668","./km.js":"4668","./kn":"e3d2","./kn.js":"e3d2","./ko":"b058","./ko.js":"b058","./ku":"017e","./ku.js":"017e","./ky":"b2bd","./ky.js":"b2bd","./lb":"e50c","./lb.js":"e50c","./lo":"ca14","./lo.js":"ca14","./lt":"3e84","./lt.js":"3e84","./lv":"ce1d","./lv.js":"ce1d","./me":"9d38","./me.js":"9d38","./mi":"3e2e","./mi.js":"3e2e","./mk":"d532","./mk.js":"d532","./ml":"db61","./ml.js":"db61","./mn":"7493","./mn.js":"7493","./mr":"52d8","./mr.js":"52d8","./ms":"b559","./ms-my":"7462","./ms-my.js":"7462","./ms.js":"b559","./mt":"c055","./mt.js":"c055","./my":"49e0","./my.js":"49e0","./nb":"eb1c","./nb.js":"eb1c","./ne":"0acb","./ne.js":"0acb","./nl":"7497","./nl-be":"3114","./nl-be.js":"3114","./nl.js":"7497","./nn":"9a9c","./nn.js":"9a9c","./pa-in":"c595","./pa-in.js":"c595","./pl":"801c","./pl.js":"801c","./pt":"5b08","./pt-br":"155f","./pt-br.js":"155f","./pt.js":"5b08","./ro":"05fc","./ro.js":"05fc","./ru":"90b3","./ru.js":"90b3","./sd":"99bf","./sd.js":"99bf","./se":"20d6","./se.js":"20d6","./si":"7c0b","./si.js":"7c0b","./sk":"90fc","./sk.js":"90fc","./sl":"871b","./sl.js":"871b","./sq":"b045","./sq.js":"b045","./sr":"ac81","./sr-cyrl":"a2d0","./sr-cyrl.js":"a2d0","./sr.js":"ac81","./ss":"b093","./ss.js":"b093","./sv":"12e5","./sv.js":"12e5","./sw":"38a0","./sw.js":"38a0","./ta":"a462","./ta.js":"a462","./te":"18cb","./te.js":"18cb","./tet":"0c11","./tet.js":"0c11","./tg":"d707","./tg.js":"d707","./th":"883f","./th.js":"883f","./tl-ph":"6cc0","./tl-ph.js":"6cc0","./tlh":"ab53","./tlh.js":"ab53","./tr":"e523","./tr.js":"e523","./tzl":"b192","./tzl.js":"b192","./tzm":"5604","./tzm-latn":"9f95","./tzm-latn.js":"9f95","./tzm.js":"5604","./ug-cn":"9f4f","./ug-cn.js":"9f4f","./uk":"8bd6","./uk.js":"8bd6","./ur":"9a78","./ur.js":"9a78","./uz":"4d4c","./uz-latn":"da73","./uz-latn.js":"da73","./uz.js":"4d4c","./vi":"b766","./vi.js":"b766","./x-pseudo":"2a69","./x-pseudo.js":"2a69","./yo":"fd2e","./yo.js":"fd2e","./zh-cn":"35d0","./zh-cn.js":"35d0","./zh-hk":"7b45","./zh-hk.js":"7b45","./zh-tw":"fa66","./zh-tw.js":"fa66"};function i(t){var e=n(t);return a(e)}function n(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="77d2"},9168:function(t,e,a){},cf6a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"commodity_head"},[a("div",{staticClass:"lf_head"},[a("img",{attrs:{src:t.spu_picture,width:"110px",height:"130px"}})]),t._v(" "),a("div",{staticClass:"rt_head"},[a("h3",{staticClass:"commodity_tit"},[t._v(t._s(t.spu_name))]),t._v(" "),a("p",[a("span",[t._v("货号 "+t._s(t.spu_sn))])]),t._v(" "),a("div",{staticClass:"attribute"},[a("span",[t._v("属性")]),t._v(" "),t._l(t.tableData,function(e){return a("el-button",{key:e.sku_id,attrs:{type:"primary",size:"mini"}},[t._v(t._s(e.attr_name))])})],2),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"commodity_tab"},[a("div",{staticClass:"tab_tit"},[a("span",[t._v("核心概况")]),t._v(" "),a("div",{staticClass:"block"},[a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:t.reDate}},[t._v("重置")]),t._v(" "),a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:t.query}},[t._v("确认")]),t._v(" "),a("el-date-picker",{staticClass:"timepick",attrs:{type:"daterange",format:"yyyy-MM-dd",align:"right",clearable:!1,size:"small","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v(" "),a("el-button",{staticStyle:{float:"right",margin:"15px 15px 0 0"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1),t._v(" "),a("ul",{staticClass:"choose-table clearfix"},t._l(t.list,function(e){return a("li",{key:e.id,class:["choose-one",e.id===t.currentId?"checked":""],on:{click:function(a){return t.choose(e.type,e.tit,e.id)}}},[a("p",{staticClass:"h1"},[t._v(t._s(e.tit))]),t._v(" "),a("p",{staticClass:"h2"},[t._v(t._s(t.labelList[e.type]||0))]),t._v(" "),a("p",{staticClass:"h3"},[t._v("\n          环比    \n          "),a("span",[t._v(t._s(t.labelList[e.hb]||0))]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:0!=t.labelList[e.hb],expression:"labelList[item.hb]!=0 ? true :false"}],class:["icon",t.labelList[e.hb]<0?"down":"up"]})]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.currentId==e.id,expression:"currentId == item.id ? true:false"}],staticClass:"current"})])}),0)]),t._v(" "),a("div",{staticClass:"commodity_line"},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),t._v(" "),a("div",{staticClass:"table"},[t._m(1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"attr_name",label:"SKU 信息"}}),t._v(" "),a("el-table-column",{attrs:{prop:"add_cart",label:"加购件数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pay_income",label:"支付金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pay_num",label:"支付件数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pay_user",label:"支付卖家数"}})],1)],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label"},[a("span",[t._v("标签 :")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab_tit"},[a("span",[t._v("SKU 销售详情")])])}],n=(a("d4d5"),a("f763"),a("6834")),r=a("b775");function c(t,e,a){return Object(r["a"])({url:"/app/business/goodsline?spuid="+t,method:"get",params:{start_time:e,end_time:a}})}function l(t,e,a){return Object(r["a"])({url:"/app/business/goodssku?spuid="+t,method:"get",params:{start_time:e,end_time:a}})}var d=a("fb92"),o=a("6bf2"),u={components:{LineChart:n["a"]},data:function(){return{lineChartData:{tit:"商品访客数",actualData:[],xdate:[],date:"近七天"},spu_picture:"",spu_name:"",spu_sn:"",spu_id:"",list:[{tit:"商品访客数",type:"uv",hb:"uv_hb",id:1},{tit:"商品浏览量",type:"pv",hb:"pv_hb",id:2},{tit:"添加购物车数量",type:"add_cart",hb:"add_cart",id:3},{tit:"商品平均停留时长",type:"duration",hb:"duration_hb",id:4},{tit:"商品详情页跳出率",type:"jumpr",hb:"jumpr_hb",id:5},{tit:"商品收藏人数",type:"save_user",hb:"save_user_hb",id:6}],labelList:[],chartsLine:[],currentId:1,tableData:[],dateRange:[]}},created:function(){this.getInfo()},methods:{getInfo:function(t,e){var a=this;if(this.spu_picture=this.$route.query.spu_picture,this.spu_name=this.$route.query.spu_name,this.spu_id=this.$route.query.spu_id,this.spu_sn=this.$route.query.spu_sn,!t){for(var s=[],i=-6;i<1;i++)s.push(Object(d["b"])(i));this.lineChartData.xdate=s,this.dateRange=[o().subtract("days",6).format("x"),+new Date]}c(this.spu_id,t,e).then(function(s){if(console.log(s),a.labelList=s.data.label,a.chartsLine=s.data.charts,a.lineChartData.actualData=a.chartsLine.uv,console.log(a.labelList),t){if(t===e){t+="000";var i=o(+t).format("YYYY-MM-DD");a.lineChartData.xdate=[i],a.lineChartData.date=i}else{t+="000",e+="000";var n=o(+t).format("YYYY-MM-DD"),r=o(+e).format("YYYY-MM-DD"),c=Object(d["a"])(n,r);a.lineChartData.xdate=c,a.lineChartData.date=n+"至"+r}a.currentId=1}else{a.dateRange=[o().subtract("days",6).format("x"),+new Date];for(var l=[],u=-6;u<1;u++)l.push(Object(d["b"])(u));a.lineChartData.xdate=l}}),l(this.spu_id,t,e).then(function(t){console.log(t),a.tableData=t.data,a.tableData.forEach(function(t){t.pay_income=Number(t.pay_income).toFixed(2)})})},choose:function(t,e,a){console.log(t),this.currentId=a,this.lineChartData.tit=e,this.lineChartData.actualData=this.chartsLine[t]},query:function(){var t=parseInt(this.dateRange[0]/1e3),e=parseInt(this.dateRange[1]/1e3);console.log(t,e),this.getInfo(t,e)},reDate:function(){this.getInfo()}}},h=u,b=(a("0233"),a("17cc")),f=Object(b["a"])(h,s,i,!1,null,"4510a7cf",null);e["default"]=f.exports},fb92:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"a",function(){return i});a("7bc1"),a("0857");function s(t){var e=new Date,a=e.getTime()+864e5*t;e.setTime(a);var s=e.getFullYear(),i=e.getMonth(),n=e.getDate();function r(t){var e=t;return 1===t.toString().length&&(e="0"+t),e}return i=r(i+1),n=r(n),s+"-"+i+"-"+n}function i(t,e){var a=function(t){var e=new Date,a=t.split("-");return e.setFullYear(a[0]),e.setMonth(a[1]-1),e.setDate(a[2]),e},s=a(t),i=a(e);if(s>i){var n=s;s=i,i=n}s.setDate(s.getDate()+1);var r=[],c=0;while(s.getFullYear()!==i.getFullYear()||s.getMonth()!==i.getMonth()||s.getDate()!==i.getDate()){var l=s.getDate().toString();1===l.length&&(l="0"+l),r[c]=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+l,c++,s.setDate(s.getDate()+1)}return r.splice(0,0,t),r.push(e),r}}}]);