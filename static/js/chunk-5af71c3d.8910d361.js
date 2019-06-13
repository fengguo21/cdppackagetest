(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af71c3d"],{"36d6":function(e,t,a){},6834:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},i=[],n=a("24ce"),r=a.n(n),c=a("ed08"),o={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,sidebarElm:null,hours:["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]}},watch:{chartData:{deep:!0,handler:function(e){this.setOptions(e)}}},mounted:function(){var e=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(c["a"])(function(){e.chart&&e.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(e){"width"===e.propertyName&&this.__resizeHandler()},setOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expectedData,a=e.actualData;this.chart.setOption({title:{text:this.chartData.tit,textStyle:{fontSize:16,color:"#404040",fontWeight:400}},grid:{left:20,right:34,bottom:20,top:60,containLabel:!0},xAxis:{data:this.chartData.xdate||this.hours,boundaryGap:!1,axisTick:{show:!1}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},legend:{data:[this.chartData.date,""],right:10},series:[{name:this.chartData.date,itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:t,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=r.a.init(this.$el),this.setOptions(this.chartData)}}},l=o,h=a("17cc"),d=Object(h["a"])(l,s,i,!1,null,null,null);t["a"]=d.exports},"70c6":function(e,t,a){"use strict";var s=a("36d6"),i=a.n(s);i.a},"74de":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contanir"},[a("div",{staticClass:"box clearfix"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"statistics"},[a("h4",[e._v("本周销售")]),e._v(" "),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"thisWeek"},[a("p",{staticClass:"p1"},[e._v("本周已完成")]),e._v(" "),a("p",{staticClass:"p2"},[e._v(e._s(e.cardList.week||0))])]),e._v(" "),a("div",{staticClass:"nextWeek"},[a("p",{staticClass:"p1"},[e._v("上周已完成")]),e._v(" "),a("p",{staticClass:"p2"},[e._v(e._s(e.cardList.last_week||0))])])])]),e._v(" "),a("el-progress",{staticClass:"circlePre",attrs:{type:"circle",percentage:e.cardList.week_rate,status:"text"}},[a("p",[e._v(e._s(e.cardList.week_rate||0)+"%")]),e._v(" "),a("p",[e._v("环比")])])],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"statistics"},[a("h4",[e._v("本月销售")]),e._v(" "),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"thisWeek"},[a("p",{staticClass:"p1"},[e._v("已完成")]),e._v(" "),a("p",{staticClass:"p2"},[e._v(e._s(e.cardList.month))])]),e._v(" "),a("div",{staticClass:"nextWeek"},[a("p",{staticClass:"p1"},[e._v("目标")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.ismonth,expression:"!ismonth"}],staticClass:"p2"},[e._v("\n              "+e._s(e.cardList.month_tar)+"\n              "),a("span",{staticClass:"set_btn",on:{click:function(t){return e.setMonthNum()}}},[e._v("设置")])]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.ismonth,expression:"ismonth"}],staticClass:"ipt",attrs:{oninput:"value = value.replace(/[^0-9]/g,'')",autofocus:"autofocus",size:"mini"},model:{value:e.monthval,callback:function(t){e.monthval=t},expression:"monthval"}}),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.ismonth,expression:"ismonth"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.changeMonthNum(e.monthval)}}},[e._v("确认")])],1)])]),e._v(" "),a("el-progress",{staticClass:"circlePre",attrs:{type:"circle",percentage:e.cardList.month_rate,status:"text"}},[a("p",[e._v(e._s(e.cardList.month_rate)+"%")]),e._v(" "),a("p",[e._v("完成进度")])])],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"statistics"},[a("h4",[e._v("全年销售")]),e._v(" "),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"thisWeek"},[a("p",{staticClass:"p1"},[e._v("已完成")]),e._v(" "),a("p",{staticClass:"p2"},[e._v(e._s(e.cardList.year))])]),e._v(" "),a("div",{staticClass:"nextWeek"},[a("p",{staticClass:"p1"},[e._v("目标")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.isyear,expression:"!isyear"}],staticClass:"p2"},[e._v("\n              "+e._s(e.cardList.year_tar)+"\n              "),a("span",{staticClass:"set_btn",on:{click:function(t){return e.setYearNum()}}},[e._v("设置")])]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.isyear,expression:"isyear"}],staticClass:"ipt",attrs:{oninput:"value = value.replace(/[^0-9]/g,'')",size:"mini"},model:{value:e.yearval,callback:function(t){e.yearval=t},expression:"yearval"}}),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isyear,expression:"isyear"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.changeYearNum(e.yearval)}}},[e._v("确认")])],1)])]),e._v(" "),a("el-progress",{staticClass:"circlePre",attrs:{type:"circle",percentage:e.cardList.year_rate,status:"text"}},[a("p",[e._v(e._s(e.cardList.year_rate)+"%")]),e._v(" "),a("p",[e._v("完成进度")])])],1)],1),e._v(" "),a("div",{staticClass:"operation clearfix"},[a("div",{staticClass:"block"},[a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:e.reDate}},[e._v("重置")]),e._v(" "),a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:e.query}},[e._v("确认")]),e._v(" "),a("el-date-picker",{staticClass:"timepick",attrs:{type:"daterange",format:"yyyy-MM-dd",align:"right",clearable:!1,size:"small","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1)]),e._v(" "),a("div",{staticClass:"tab"},[a("ul",{staticClass:"choose-table clearfix"},e._l(e.list,function(t){return a("li",{key:t.type,class:["choose-one",t.id===e.currentId?"checked":""],on:{click:function(a){return e.choose(t.type,t.tit,t.id)}}},[a("p",{staticClass:"h1"},[e._v("\n          "+e._s(t.tit)+"\n          "),a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.tip,placement:"right-start"}},[a("i",{staticClass:"el-icon-question"})])],1),e._v(" "),a("p",{staticClass:"h2"},[e._v(e._s(e.labelList[t.type]||0))]),e._v(" "),a("p",{staticClass:"h3"},[e._v("\n          环比    \n          "),a("span",[e._v(e._s(e.labelList[t.hb]||0))]),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:0!=e.labelList[t.hb],expression:"labelList[item.hb]!=0 ? true :false"}],class:["icon",e.labelList[t.hb]<0?"down":"up"]})]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.currentId==t.id,expression:"currentId == item.id ? true:false"}],staticClass:"current"})])}),0),e._v(" "),a("div",{staticClass:"linechart"},[a("line-chart",{attrs:{"chart-data":e.lineChartData}})],1)]),e._v(" "),a("div",{staticClass:"commodity"},[a("div",{staticClass:"head_operate"},[a("h4",[e._v("全量商品排行")]),e._v(" "),a("div",{staticClass:"fright"},[a("el-input",{attrs:{placeholder:"请输入商品名称、ID、URL或货号",size:"small"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),e._v(" "),a("download-excel",{staticClass:"export-excel-wrapper",attrs:{data:e.json_data,fields:e.json_fields,name:"goodsAnalyse.xls"}},[a("i",{staticClass:"el-icon-download"},[e._v("下载")])])],1),e._v(" "),a("div",{staticClass:"fright",staticStyle:{"margin-right":"10px"}},[a("el-date-picker",{staticClass:"timepick",attrs:{type:"daterange",format:"yyyy-MM-dd",align:"right",clearable:!1,size:"small","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},model:{value:e.analyseVal,callback:function(t){e.analyseVal=t},expression:"analyseVal"}}),e._v(" "),a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:e.queryAnalyse}},[e._v("确认")]),e._v(" "),a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:e.reAnalyse}},[e._v("重置")])],1)]),e._v(" "),a("div",{staticClass:"select_list clearfix"},[a("div",{staticClass:"access_type"},[a("p",[e._v("访问类")]),e._v(" "),a("el-checkbox-group",{on:{change:e.checked},model:{value:e.checkedAccess,callback:function(t){e.checkedAccess=t},expression:"checkedAccess"}},e._l(e.accessType,function(t){return a("el-checkbox",{key:t.type,staticClass:"checkone",attrs:{label:t.name,disabled:e.tableList.length>=5&&-1==e.tableList.indexOf(t)}},[e._v("\n            "+e._s(t.name)+"\n            "),a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.tip,placement:"right-start"}},[a("i",{staticClass:"el-icon-question"})])],1)}),1)],1),e._v(" "),a("div",{staticClass:"into_class"},[a("p",[e._v("转化类")]),e._v(" "),a("el-checkbox-group",{on:{change:e.checked},model:{value:e.checkedInto,callback:function(t){e.checkedInto=t},expression:"checkedInto"}},e._l(e.intoClass,function(t){return a("el-checkbox",{key:t.type,staticClass:"checkone",attrs:{label:t.name,disabled:e.tableList.length>=5&&-1==e.tableList.indexOf(t)}},[e._v("\n            "+e._s(t.name)+"\n            "),a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.tip,placement:"right-start"}},[a("i",{staticClass:"el-icon-question"})])],1)}),1)],1),e._v(" "),a("div",{staticClass:"service_class"},[a("p",[e._v("服务类")]),e._v(" "),a("el-checkbox-group",{on:{change:e.checked},model:{value:e.checkedService,callback:function(t){e.checkedService=t},expression:"checkedService"}},e._l(e.serviceClass,function(t){return a("el-checkbox",{key:t.type,staticClass:"checkone",attrs:{label:t.name,disabled:e.tableList.length>=5&&-1==e.tableList.indexOf(t)}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),a("div",{staticClass:"reset"},[a("span",[e._v("选择 "+e._s(e.tableList.length)+"/5")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.reSet}},[e._v("重置")])],1)]),e._v(" "),a("div",{staticClass:"commodity_list clearfix"},[a("el-table",{staticClass:"list",staticStyle:{width:"100%"},attrs:{data:e.commodityList},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"商品",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"clearfix"},[a("img",{staticClass:"pic",attrs:{src:t.row.spu_picture}}),e._v(" "),a("div",{staticClass:"commodity_content cm_box"},[a("p",{staticClass:"commodity_name",attrs:{"show-overflow-tooltip":""}},[e._v(e._s(t.row.spu_name))]),e._v(" "),a("p",{staticClass:"commodity_hb"},[e._v("\n                  环比\n                ")])])])]}}])}),e._v(" "),e._l(e.tableList,function(t){return a("el-table-column",{key:t.type,attrs:{label:t.name,prop:t.type,sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(s){return[a("div",{staticClass:"cm_box"},[a("p",{staticClass:"num"},[e._v(e._s(s.row[t.type]))]),e._v(" "),a("p",{staticClass:"pre ccc"},[e._v(e._s(s.row[t.hb]))])])]}}],null,!0)})}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",{staticClass:"detail",on:{click:function(a){return e.getDetail(t.row)}}},[e._v("详情")]),e._v(" "),a("p",{staticClass:"attent"},[e._v("关注")])]}}])})],2),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":e.current,"page-size":e.pgSize,layout:"prev, pager, next",total:e.total},on:{"update:currentPage":function(t){e.current=t},"update:current-page":function(t){e.current=t},"current-change":e.changePage}})],1)])])},i=[],n=(a("7364"),a("4964")),r=(a("d4d5"),a("f763"),a("6834")),c=a("b775");function o(){return Object(c["a"])({url:"/app/business/goodstarget",method:"post"})}function l(e){return Object(c["a"])({url:"/app/business/settarget",method:"post",data:e})}function h(e){return Object(c["a"])({url:"/app/business/goodsAnalyse",method:"post",data:e})}function d(e,t){return Object(c["a"])({url:"/app/business/goodsline",method:"post",data:{start_time:e,end_time:t}})}var p=a("fb92"),u=a("6bf2"),_=[{name:"商品访客数",type:"uv",hb:"uvhb",tip:"所选时间内，该SKU商品的累计访客数量，去重"},{name:"商品浏览量",type:"pv",hb:"pvhb",tip:"所选时间内，该SKU商品详情页的累计访问次数"},{name:"平均停留时长",type:"duration",hb:"durationhb",tip:"所选时间内，该商品详情页的停留时间的平均时长（停留总时间/访问次数）"},{name:"商品详情跳出率",type:"jumpr",hb:"jumprhb",tip:"所选时间内，该商品详情页的跳出率（进入后未发生点击操作的人数/访客数)"},{name:"商品加购人数",type:"cart_uv",hb:"cart_uvhb",tip:"所选时间内，该商品加入购物车的人数，去重"},{name:"商品加购件数",type:"cart_pv",hb:"cart_pvhb",tip:"所选时间内，该商品加入购物车的次数（添加、删除、添加，再删除，算2次）"},{name:"商品收藏人数",type:"save_user",hb:"save_userhb",tip:"所选时间内，该商品加入到收藏夹的人数累计，去重（收藏，取消，再收藏，算一个收藏的人）"},{name:"搜索引导访客数",type:"search_user",hb:"search_userhb",tip:"所选时间内，该商品通过检索进入的访客数量，去重"}],b=[{name:"下单买家数",type:"order_user",hb:"order_userhb",tip:"所选时间内，该商品下单（提交订单）的买家数，去重"},{name:"下单件数",type:"order_num",hb:"order_numhb",tip:"所选时间内，该商品下单的累计件数"},{name:"下单金额",type:"order_income",hb:"order_incomehb",tip:"所选时间内，该商品的累计下单金额，按照应付金额进行计算（按照商品售卖价比例进行优惠分摊）"},{name:"下单转化率",type:"order_rate",hb:"order_ratehb",tip:"所选时间内，该商品的累计下单数量/访客数"},{name:"支付买家数",type:"pay_user",hb:"pay_userhb",tip:"所选时间内，该商品的实际支付数量对应的去重买家的累计和"},{name:"支付件数",type:"pay_num",hb:"pay_numhb",tip:"所选时间内，该商品的实际支付数量的累计"},{name:"支付金额",type:"pay_income",hb:"pay_incomehb",tip:"所选时间内，该商品的实际支付金额累计和（优惠券分摊金额，按照商品售卖价比例分摊）"},{name:"支付转化率",type:"pay_rate",hb:"pay_ratehb",tip:"支付买家数/访客数"},{name:"支付新买家数",type:"pay_new_user",hb:"pay_new_userhb",tip:"支付新买家数/访客数"},{name:"支付老买家数",type:"pay_old_user",hb:"pay_old_userhb",tip:"支付老买家数/访客数"},{name:"新买家支付金额",type:"pay_new_income",hb:"pay_new_incomehb",tip:"所选时间内，新卖家的支付该商品的金额累计（优惠比例分摊）"},{name:"老买家支付金额",type:"pay_old_income",hb:"pay_old_incomehb",tip:"所选时间内，老买家的支付该商品的金额累计（优惠比例分摊）"},{name:"复购周期",type:"lay",hb:"layhb",tip:"所选时间内，该产品的二次购买（支付完成）的用户间隔周期的平均值"},{name:"月累计支付金额",type:"pay_month_income",hb:"pay_month_incomehb",tip:"所选时间内，该产品的月累计实际付款金额（优惠比例分摊）"},{name:"年累计支付金额",type:"pay_year_income",hb:"pay_year_incomehb",tip:"所选时间内，该产品的年累计实际付款金额（优惠比例分摊）"},{name:"月累计支付件数",type:"pay_month_num",hb:"pay_month_num",tip:"所选时间内，该产品的月累计商品件数"},{name:"搜索引导支付买家数",type:"search_pay",hb:"search_payhb",tip:"所选时间内，该商品经过搜索入口到实际支付的买家数量"},{name:"搜索引导支付转化率",type:"search_pay_income",hb:"search_pay_incomehb",tip:"所选时间内，该商品经过搜索入口到实际支付的支付买家数/访客数量"}],m=[{name:"售中售后成功退款金额",type:"",hb:"",tip:""}],v={components:{LineChart:r["a"]},data:function(){return{ismonth:!1,monthval:"",isyear:!1,yearval:"",checkedAccess:["商品访客数","商品浏览量","平均停留时长"],checkedInto:["下单件数","下单金额"],checkedService:[],tableList:[],accessType:_,intoClass:b,serviceClass:m,search:"",dateRange:[],analyseVal:[],cardList:{},list:[{tit:"商品访客数",type:"uv",hb:"uv_hb",tip:"当前时间周期内，访问商品详情的全部访客去重后的累计和",id:1},{tit:"商品浏览量",type:"pv",hb:"pv_hb",tip:"当前时间周期内，访问商品详情的全部访问记录的累计和",id:2},{tit:"有访问商品数",type:"goods_num",hb:"goods_num_hb",tip:"当前时间周期内，商品访问次数>0的所有商品的累计和，按照SKU累计",id:3},{tit:"商品平均停留时长",type:"duration",hb:"duration_hb",tip:"当前时间周期内，所有商品详情页的总访问时间累计/商品浏览量",id:4},{tit:"商品详情页跳出率",type:"jumpr",hb:"jumpr_hb",tip:"（访问商品详情页但无点击记录的访问次数累计/商品详情页的访问次数累计）*100%",id:5},{tit:"商品收藏人数",type:"save_user",hb:"save_user_hb",tip:"当前时间周期内，所有商品的累计收藏次数（一个人，收藏一个商品，再取消，再收藏，算一次）",id:6}],labelList:[],currentId:1,lineChartData:{tit:"商品访客数",actualData:[],xdate:[],date:"近七天"},chartsLine:[],commodityList:[],json_fields:{spu_id:"spu_id",spu_name:"spu_name",spu_picture:"spu_picture",spu_sn:"spu_sn",duration:"duration",jumpr:"jumpr",pv:"pv",uv:"uv",cart_pv:"cart_pv",cart_uv:"cart_uv",save_user:"save_user",search_user:"search_user",order_income:"order_income",order_num:"order_num",order_user:"order_user",pay_income:"pay_income",pay_num:"pay_num",pay_user:"pay_user",pay_new_user:"pay_new_user",pay_new_income:"pay_new_income",pay_old_user:"pay_old_user",pay_old_income:"pay_old_income",search_pay:"search_pay",search_pay_income:"search_pay_income",order_rate:"order_rate",pay_rate:"pay_rate",durationhb:"durationhb",jumprhb:"jumprhb",pvhb:"pvhb",uvhb:"uvhb",cart_pvhb:"cart_pvhb",save_userhb:"save_userhb",search_userhb:"search_userhb",order_incomehb:"order_incomehb",order_numhb:"pay_norder_numhbum",order_userhb:"order_userhb",pay_incomehb:"pay_incomehb",pay_numhb:"pay_numhb",pay_userhb:"pay_userhb",pay_new_userhb:"pay_new_userhb",pay_new_incomehb:"pay_new_incomehb",pay_old_userhb:"pay_old_userhb",pay_old_incomehb:"pay_old_incomehb",search_payhb:"search_payhb",search_pay_incomehb:"search_pay_incomehb",order_ratehb:"order_ratehb",pay_ratehb:"pay_ratehb"},json_data:[],json_meta:[[{" key ":" charset "," value ":" utf- 8 "}]],current:1,total:0,pgSize:10,oby:"uv",obyt:2}},created:function(){this.getGoodsData(),this.getGoodsAnalyse(),this.getGoodsLine(),this.checked()},methods:{getGoodsData:function(){var e=this;o().then(function(t){console.log(t,1),e.cardList=t.data,e.cardList.week_rate=+e.cardList.week_rate,e.cardList.month_rate=+e.cardList.month_rate,e.cardList.year_rate=+e.cardList.year_rate})},getGoodsLine:function(e,t){var a=this;this.currentId=1,d(e,t).then(function(s){if(a.lineChartData.tit="商品访客数",a.labelList=s.data.label,a.labelList.duration=a.labelList.duration.toFixed(2),a.labelList.jumpr=a.labelList.jumpr.toFixed(2),a.chartsLine=s.data.charts,a.lineChartData.actualData=a.chartsLine.uv,e){e+="000",t+="000";var i=u(+e).format("YYYY-MM-DD"),n=u(+t).format("YYYY-MM-DD");if(i===n)a.lineChartData.xdate=[i],a.lineChartData.date=i;else{var r=Object(p["a"])(i,n);a.lineChartData.xdate=r,a.lineChartData.date=i+"至"+n}a.currentId=1}else{a.dateRange=[u().subtract("days",6).format("x"),+new Date];for(var c=[],o=-6;o<1;o++)c.push(Object(p["b"])(o));a.lineChartData.xdate=c}})},getGoodsAnalyse:function(e,t){var a=this;e||(this.analyseVal=[u().subtract("days",6).format("x"),+new Date]);var s={};s={start_time:e,end_time:t,page:this.current,pagerows:10,oby:this.oby,obyt:this.obyt},h(s).then(function(e){console.log(e.data),a.commodityList=e.data,a.commodityList.forEach(function(e){e.pay_month_income=Number(e.pay_month_income).toFixed(2),e.pay_year_income=Number(e.pay_year_income).toFixed(2)}),a.total=e.count,a.json_data=e.data})},sortChange:function(e){console.log(e),this.oby=e.prop||"uv",this.obyt="ascending"===e.order?1:2;var t=parseInt(this.analyseVal[0]/1e3),a=parseInt(this.analyseVal[1]/1e3);t===a&&(a+=86399),this.getGoodsAnalyse(t,a)},setMonthNum:function(){this.ismonth=!0,this.monthval=this.cardList.month_tar},setYearNum:function(){this.isyear=!0,this.yearval=this.cardList.year_tar},changeMonthNum:function(e){var t=this,a={type:1,number:+e};a=JSON.stringify(a),l(a).then(function(e){console.log(e),t.ismonth=!1,t.getGoodsData()}).catch(function(e){console.log(e)})},changeYearNum:function(e){var t=this,a={type:2,number:+e};a=JSON.stringify(a),l(a).then(function(e){console.log(e),t.isyear=!1,t.getGoodsData()}).catch(function(e){console.log(e)})},choose:function(e,t,a){console.log(e),this.currentId=a,this.lineChartData.tit=t,this.lineChartData.actualData=this.chartsLine[e]},checked:function(){var e=this;this.tableList=[].concat(Object(n["a"])(this.accessType.filter(function(t){return-1!==e.checkedAccess.indexOf(t.name)})),Object(n["a"])(this.intoClass.filter(function(t){return-1!==e.checkedInto.indexOf(t.name)})),Object(n["a"])(this.serviceClass.filter(function(t){return-1!==e.checkedService.indexOf(t.name)}))),console.log(this.tableList)},query:function(){console.log(this.dateRange);var e=parseInt(this.dateRange[0]/1e3),t=parseInt(this.dateRange[1]/1e3);e===t&&(t+=86399),console.log(e,t),this.getGoodsLine(e,t)},queryAnalyse:function(){var e=parseInt(this.analyseVal[0]/1e3),t=parseInt(this.analyseVal[1]/1e3);e===t&&(t+=86399),this.getGoodsAnalyse(e,t)},reDate:function(){this.lineChartData.date="近七天",this.getGoodsLine()},reSet:function(){this.checkedAccess=[],this.checkedInto=[],this.checkedService=[],this.checked()},reAnalyse:function(){this.getGoodsAnalyse()},changePage:function(){var e=parseInt(this.analyseVal[0]/1e3),t=parseInt(this.analyseVal[1]/1e3);this.getGoodsAnalyse(e,t)},getDetail:function(e){console.log(e);var t={spu_picture:e.spu_picture,spu_name:e.spu_name,spu_id:e.spu_id,spu_sn:e.spu_sn};this.$router.push({path:"/commodityDetails",query:t})}}},y=v,f=(a("70c6"),a("17cc")),g=Object(f["a"])(y,s,i,!1,null,"9a1b7f42",null);t["default"]=g.exports},"77d2":function(e,t,a){var s={"./af":"fbac","./af.js":"fbac","./ar":"f96f","./ar-dz":"e63c","./ar-dz.js":"e63c","./ar-kw":"b7bd","./ar-kw.js":"b7bd","./ar-ly":"968f","./ar-ly.js":"968f","./ar-ma":"9f9d","./ar-ma.js":"9f9d","./ar-sa":"aea5","./ar-sa.js":"aea5","./ar-tn":"d44b","./ar-tn.js":"d44b","./ar.js":"f96f","./az":"c7ed","./az.js":"c7ed","./be":"5a28","./be.js":"5a28","./bg":"1251","./bg.js":"1251","./bm":"2809","./bm.js":"2809","./bn":"b4fc","./bn.js":"b4fc","./bo":"5484","./bo.js":"5484","./br":"5adc","./br.js":"5adc","./bs":"ac10","./bs.js":"ac10","./ca":"e381","./ca.js":"e381","./cs":"aef2","./cs.js":"aef2","./cv":"6566","./cv.js":"6566","./cy":"1390","./cy.js":"1390","./da":"1ece","./da.js":"1ece","./de":"5f10","./de-at":"09c4","./de-at.js":"09c4","./de-ch":"89a2","./de-ch.js":"89a2","./de.js":"5f10","./dv":"e662","./dv.js":"e662","./el":"196b","./el.js":"196b","./en-SG":"0a32","./en-SG.js":"0a32","./en-au":"94ed","./en-au.js":"94ed","./en-ca":"2806","./en-ca.js":"2806","./en-gb":"b0dd","./en-gb.js":"b0dd","./en-ie":"7a6e","./en-ie.js":"7a6e","./en-il":"1f0f","./en-il.js":"1f0f","./en-nz":"1606","./en-nz.js":"1606","./eo":"f214","./eo.js":"f214","./es":"7d58","./es-do":"737b","./es-do.js":"737b","./es-us":"a894","./es-us.js":"a894","./es.js":"7d58","./et":"a888","./et.js":"a888","./eu":"1357","./eu.js":"1357","./fa":"0a48","./fa.js":"0a48","./fi":"c2b1","./fi.js":"c2b1","./fo":"52c4","./fo.js":"52c4","./fr":"04e6","./fr-ca":"6ad1","./fr-ca.js":"6ad1","./fr-ch":"b12f","./fr-ch.js":"b12f","./fr.js":"04e6","./fy":"ad13","./fy.js":"ad13","./ga":"369e","./ga.js":"369e","./gd":"22de","./gd.js":"22de","./gl":"f808","./gl.js":"f808","./gom-latn":"50d5","./gom-latn.js":"50d5","./gu":"e67a","./gu.js":"e67a","./he":"037c","./he.js":"037c","./hi":"3d53","./hi.js":"3d53","./hr":"678b","./hr.js":"678b","./hu":"1783","./hu.js":"1783","./hy-am":"2873","./hy-am.js":"2873","./id":"de99","./id.js":"de99","./is":"6aa2","./is.js":"6aa2","./it":"1f93","./it-ch":"2db9","./it-ch.js":"2db9","./it.js":"1f93","./ja":"6bf8","./ja.js":"6bf8","./jv":"6e55","./jv.js":"6e55","./ka":"e65f","./ka.js":"e65f","./kk":"7167","./kk.js":"7167","./km":"4668","./km.js":"4668","./kn":"e3d2","./kn.js":"e3d2","./ko":"b058","./ko.js":"b058","./ku":"017e","./ku.js":"017e","./ky":"b2bd","./ky.js":"b2bd","./lb":"e50c","./lb.js":"e50c","./lo":"ca14","./lo.js":"ca14","./lt":"3e84","./lt.js":"3e84","./lv":"ce1d","./lv.js":"ce1d","./me":"9d38","./me.js":"9d38","./mi":"3e2e","./mi.js":"3e2e","./mk":"d532","./mk.js":"d532","./ml":"db61","./ml.js":"db61","./mn":"7493","./mn.js":"7493","./mr":"52d8","./mr.js":"52d8","./ms":"b559","./ms-my":"7462","./ms-my.js":"7462","./ms.js":"b559","./mt":"c055","./mt.js":"c055","./my":"49e0","./my.js":"49e0","./nb":"eb1c","./nb.js":"eb1c","./ne":"0acb","./ne.js":"0acb","./nl":"7497","./nl-be":"3114","./nl-be.js":"3114","./nl.js":"7497","./nn":"9a9c","./nn.js":"9a9c","./pa-in":"c595","./pa-in.js":"c595","./pl":"801c","./pl.js":"801c","./pt":"5b08","./pt-br":"155f","./pt-br.js":"155f","./pt.js":"5b08","./ro":"05fc","./ro.js":"05fc","./ru":"90b3","./ru.js":"90b3","./sd":"99bf","./sd.js":"99bf","./se":"20d6","./se.js":"20d6","./si":"7c0b","./si.js":"7c0b","./sk":"90fc","./sk.js":"90fc","./sl":"871b","./sl.js":"871b","./sq":"b045","./sq.js":"b045","./sr":"ac81","./sr-cyrl":"a2d0","./sr-cyrl.js":"a2d0","./sr.js":"ac81","./ss":"b093","./ss.js":"b093","./sv":"12e5","./sv.js":"12e5","./sw":"38a0","./sw.js":"38a0","./ta":"a462","./ta.js":"a462","./te":"18cb","./te.js":"18cb","./tet":"0c11","./tet.js":"0c11","./tg":"d707","./tg.js":"d707","./th":"883f","./th.js":"883f","./tl-ph":"6cc0","./tl-ph.js":"6cc0","./tlh":"ab53","./tlh.js":"ab53","./tr":"e523","./tr.js":"e523","./tzl":"b192","./tzl.js":"b192","./tzm":"5604","./tzm-latn":"9f95","./tzm-latn.js":"9f95","./tzm.js":"5604","./ug-cn":"9f4f","./ug-cn.js":"9f4f","./uk":"8bd6","./uk.js":"8bd6","./ur":"9a78","./ur.js":"9a78","./uz":"4d4c","./uz-latn":"da73","./uz-latn.js":"da73","./uz.js":"4d4c","./vi":"b766","./vi.js":"b766","./x-pseudo":"2a69","./x-pseudo.js":"2a69","./yo":"fd2e","./yo.js":"fd2e","./zh-cn":"35d0","./zh-cn.js":"35d0","./zh-hk":"7b45","./zh-hk.js":"7b45","./zh-tw":"fa66","./zh-tw.js":"fa66"};function i(e){var t=n(e);return a(t)}function n(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id="77d2"},fb92:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return i});a("7bc1"),a("0857");function s(e){var t=new Date,a=t.getTime()+864e5*e;t.setTime(a);var s=t.getFullYear(),i=t.getMonth(),n=t.getDate();function r(e){var t=e;return 1===e.toString().length&&(t="0"+e),t}return i=r(i+1),n=r(n),s+"-"+i+"-"+n}function i(e,t){var a=function(e){var t=new Date,a=e.split("-");return t.setFullYear(a[0]),t.setMonth(a[1]-1),t.setDate(a[2]),t},s=a(e),i=a(t);if(s>i){var n=s;s=i,i=n}s.setDate(s.getDate()+1);var r=[],c=0;while(s.getFullYear()!==i.getFullYear()||s.getMonth()!==i.getMonth()||s.getDate()!==i.getDate()){var o=s.getDate().toString();1===o.length&&(o="0"+o),r[c]=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+o,c++,s.setDate(s.getDate()+1)}return r.splice(0,0,e),r.push(t),r}}}]);