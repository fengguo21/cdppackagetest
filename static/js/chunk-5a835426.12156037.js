(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a835426"],{"1b79":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"rfm_modle"},[s("p",{staticClass:"t1"},[t._v("\n      RFM模型分析\n      "),s("span",{staticClass:"user-node",on:{click:function(a){t.userNode=!0}}},[t._v("使用须知")])]),t._v(" "),s("div",{staticClass:"date-choose"},[s("span",{staticClass:"t2"},[t._v("最近付款时间在")]),t._v(" "),s("el-date-picker",{attrs:{size:"mini",clearable:!1,type:"date",placeholder:"选择日期"},model:{value:t.rfmDate,callback:function(a){t.rfmDate=a},expression:"rfmDate"}}),t._v(" "),s("span",{staticClass:"t2"},[t._v("前的成交客户数据")]),t._v(" "),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.searchRFM}},[t._v("查询")])],1),t._v(" "),s("div",{staticClass:"radio"},[s("span",{staticStyle:{"font-size":"14px"}},[t._v("选择指标 :")]),t._v(" "),s("el-radio",{attrs:{label:"1"},model:{value:t.rfmchoose,callback:function(a){t.rfmchoose=a},expression:"rfmchoose"}},[t._v("客户数/占比")]),t._v(" "),s("el-radio",{attrs:{label:"2"},model:{value:t.rfmchoose,callback:function(a){t.rfmchoose=a},expression:"rfmchoose"}},[t._v("累计支付金额")]),t._v(" "),s("el-radio",{attrs:{label:"3"},model:{value:t.rfmchoose,callback:function(a){t.rfmchoose=a},expression:"rfmchoose"}},[t._v("客单价")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.rfmchoose,expression:"rfmchoose === '1'"}],staticClass:"table"},[t._m(0),t._v(" "),s("div",{staticClass:"tbody"},[s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("R <= 30")]),t._v(" "),t._l(t.uvData[0],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"ple"},[s("p",{staticClass:"p1"},[t._v(t._s(a.numver)+"人")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("占比"+t._s(a.rate)+"%")])])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("30 < R <= 90")]),t._v(" "),t._l(t.uvData[1],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"ple"},[s("p",{staticClass:"p1"},[t._v(t._s(a.numver)+"人")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("占比"+t._s(a.rate)+"%")])])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("90 < R <= 180")]),t._v(" "),t._l(t.uvData[2],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"ple"},[s("p",{staticClass:"p1"},[t._v(t._s(a.numver)+"人")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("占比"+t._s(a.rate)+"%")])])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("180 < R <= 365")]),t._v(" "),t._l(t.uvData[3],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"ple"},[s("p",{staticClass:"p1"},[t._v(t._s(a.numver)+"人")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("占比"+t._s(a.rate)+"%")])])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("R > 365")]),t._v(" "),t._l(t.uvData[4],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"ple"},[s("p",{staticClass:"p1"},[t._v(t._s(a.numver)+"人")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("占比"+t._s(a.rate)+"%")])])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("列合计")]),t._v(" "),t._l(t.uvData[5],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"ple"},[s("p",{staticClass:"p1"},[t._v(t._s(a.numver)+"人")]),t._v(" "),s("p",{staticClass:"p2"},[t._v("占比"+t._s(a.rate)+"%")])])])})],2)])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"2"===t.rfmchoose,expression:"rfmchoose === '2'"}],staticClass:"table"},[t._m(1),t._v(" "),s("div",{staticClass:"tbody"},[s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("R <= 30")]),t._v(" "),t._l(t.moneyData[0],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"momey"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("30 < R <= 90")]),t._v(" "),t._l(t.moneyData[1],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"momey"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("90 < R <= 180")]),t._v(" "),t._l(t.moneyData[2],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"momey"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("180 < R <= 365")]),t._v(" "),t._l(t.moneyData[3],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"momey"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("R > 365")]),t._v(" "),t._l(t.moneyData[4],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"momey"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("列合计")]),t._v(" "),t._l(t.moneyData[5],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"momey"},[t._v(t._s(a)+"元")])])})],2)])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"3"===t.rfmchoose,expression:"rfmchoose === '3'"}],staticClass:"table"},[t._m(2),t._v(" "),s("div",{staticClass:"tbody"},[s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("R <= 30")]),t._v(" "),t._l(t.user_avgData[0],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"pis"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("30 < R <= 90")]),t._v(" "),t._l(t.user_avgData[1],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"pis"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("90 < R <= 180")]),t._v(" "),t._l(t.user_avgData[2],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"pis"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("180 < R <= 365")]),t._v(" "),t._l(t.user_avgData[3],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"pis"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("R > 365")]),t._v(" "),t._l(t.user_avgData[4],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"pis"},[t._v(t._s(a)+"元")])])})],2),t._v(" "),s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[t._v("列合计")]),t._v(" "),t._l(t.user_avgData[5],function(a,e){return s("div",{key:e,staticClass:"td"},[s("div",{staticClass:"pis"},[t._v(t._s(a)+"元")])])})],2)])])]),t._v(" "),s("div",{staticClass:"consumption"},[s("p",{staticClass:"t1"},[t._v("消费能力分析")]),t._v(" "),s("div",{staticClass:"date-choose"},[s("span",{staticClass:"t2"},[t._v("付款时间:  ")]),t._v(" "),s("el-date-picker",{staticClass:"timepick",attrs:{type:"daterange",format:"yyyy-MM-dd",align:"right",clearable:!1,size:"mini","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},model:{value:t.consumptionDate,callback:function(a){t.consumptionDate=a},expression:"consumptionDate"}}),t._v(" "),s("span",{staticStyle:{"font-size":"13px"}},[t._v("\n        新老客户\n        "),s("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n            新：无历史支付订单的客户\n            "),s("br"),t._v("老：有历史支付订单的客户\n          ")]),t._v(" "),s("i",{staticClass:"el-icon-question"})]),t._v(":\n      ")],1),t._v(" "),s("el-select",{attrs:{slot:"prepend",size:"mini"},slot:"prepend",model:{value:t.consumptionSelect,callback:function(a){t.consumptionSelect=a},expression:"consumptionSelect"}},[s("el-option",{attrs:{label:"全部客户",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"新成交客户",value:"2"}}),t._v(" "),s("el-option",{attrs:{label:"老成交客户",value:"3"}})],1),t._v(" "),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.searchConsumption}},[t._v("查询")])],1),t._v(" "),s("p",{staticClass:"t2"},[t._v("支付金额分布图")]),t._v(" "),s("div",{staticClass:"radio"},[s("span",{staticStyle:{"font-size":"14px"}},[t._v("选择指标 :")]),t._v(" "),s("el-radio-group",{on:{change:t.cptchooseChange},model:{value:t.cptchoose,callback:function(a){t.cptchoose=a},expression:"cptchoose"}},[s("el-radio",{attrs:{label:"1"}},[t._v("客户数")]),t._v(" "),s("el-radio",{attrs:{label:"2"}},[t._v("支付总额")]),t._v(" "),s("el-radio",{attrs:{label:"3"}},[t._v("商品支付件数")])],1)],1),t._v(" "),s("div",{staticClass:"chart"},[s("bar-chart",{attrs:{"chart-data":t.consumption}})],1),t._v(" "),s("p",{staticClass:"t2"},[t._v("支付分布明细")]),t._v(" "),s("div",{staticClass:"pay_table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.consumptionTable,"header-cell-style":{background:"#eef1f6",color:"#606266"}}},[s("el-table-column",{attrs:{prop:"type",label:"累计支付金额区间"}}),t._v(" "),s("el-table-column",{attrs:{prop:"k",label:"客户数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"khb",label:"客户数占比"}}),t._v(" "),s("el-table-column",{attrs:{prop:"sps",label:"商品支付件数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"avg",label:"人均支付件数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"pay",label:"支付总额(元)"}}),t._v(" "),s("el-table-column",{attrs:{prop:"payhb",label:"支付总额占比"}})],1)],1)]),t._v(" "),s("div",{staticClass:"frequency"},[s("p",{staticClass:"t1"},[t._v("消费频次分析")]),t._v(" "),s("div",{staticClass:"date-choose"},[s("span",{staticClass:"t2"},[t._v("付款时间:  ")]),t._v(" "),s("el-date-picker",{staticClass:"timepick",attrs:{type:"daterange",format:"yyyy-MM-dd",align:"right",clearable:!1,size:"mini","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},model:{value:t.frequencyDate,callback:function(a){t.frequencyDate=a},expression:"frequencyDate"}}),t._v(" "),s("span",{staticStyle:{"font-size":"13px"}},[t._v("\n        新老客户\n        "),s("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n            新：无历史支付订单的客户\n            "),s("br"),t._v("老：有历史支付订单的客户\n          ")]),t._v(" "),s("i",{staticClass:"el-icon-question"})]),t._v(":\n      ")],1),t._v(" "),s("el-select",{attrs:{slot:"prepend",size:"mini"},slot:"prepend",model:{value:t.frequencySelect,callback:function(a){t.frequencySelect=a},expression:"frequencySelect"}},[s("el-option",{attrs:{label:"全部客户",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"新成交客户",value:"2"}}),t._v(" "),s("el-option",{attrs:{label:"老成交客户",value:"3"}})],1),t._v(" "),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.searchFrequency}},[t._v("查询")])],1),t._v(" "),s("p",{staticClass:"t2"},[t._v("购买次数分布图")]),t._v(" "),s("div",{staticClass:"radio"},[s("span",{staticStyle:{"font-size":"14px"}},[t._v("选择指标 :")]),t._v(" "),s("el-radio-group",{on:{change:t.frcchooseChange},model:{value:t.frcchoose,callback:function(a){t.frcchoose=a},expression:"frcchoose"}},[s("el-radio",{attrs:{label:"1"}},[t._v("客户数")]),t._v(" "),s("el-radio",{attrs:{label:"2"}},[t._v("支付总额")]),t._v(" "),s("el-radio",{attrs:{label:"3"}},[t._v("商品支付件数")])],1)],1),t._v(" "),s("div",{staticClass:"chart"},[s("bar-chart",{attrs:{"chart-data":t.frequency}})],1),t._v(" "),s("p",{staticClass:"t2"},[t._v("购买次数明细")]),t._v(" "),s("div",{staticClass:"buy_table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.buyList,"header-cell-style":{background:"#eef1f6",color:"#606266"}}},[s("el-table-column",{attrs:{prop:"type",label:"购买次数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"k",label:"客户数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"khb",label:"客户数占比"}}),t._v(" "),s("el-table-column",{attrs:{prop:"sps",label:"商品支付件数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"avg",label:"人均支付件数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"pay",label:"支付总额(元)"}}),t._v(" "),s("el-table-column",{attrs:{prop:"payhb",label:"支付总额占比"}})],1)],1)]),t._v(" "),s("div",{staticClass:"buyback"},[s("p",{staticClass:"t1"},[t._v("回购周期分析")]),t._v(" "),s("div",{staticClass:"date-choose"},[s("span",{staticClass:"t2"},[t._v("付款时间:  ")]),t._v(" "),s("el-date-picker",{staticClass:"timepick",attrs:{type:"daterange",format:"yyyy-MM-dd",align:"right",clearable:!1,size:"mini","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},model:{value:t.buybackDate,callback:function(a){t.buybackDate=a},expression:"buybackDate"}}),t._v(" "),s("span",{staticStyle:{"font-size":"13px"}},[t._v("\n        新老客户\n        "),s("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n            新：无历史支付订单的客户\n            "),s("br"),t._v("老：有历史支付订单的客户\n          ")]),t._v(" "),s("i",{staticClass:"el-icon-question"})]),t._v(":\n      ")],1),t._v(" "),s("el-select",{attrs:{slot:"prepend",size:"mini"},slot:"prepend",model:{value:t.buybackSelect,callback:function(a){t.buybackSelect=a},expression:"buybackSelect"}},[s("el-option",{attrs:{label:"全部客户",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"新成交客户",value:"2"}}),t._v(" "),s("el-option",{attrs:{label:"老成交客户",value:"3"}})],1),t._v(" "),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.searchBuyback}},[t._v("查询")])],1),t._v(" "),s("p",{staticClass:"t2"},[t._v("回购周期分布明细")]),t._v(" "),s("div",{staticClass:"radio"},[s("span",{staticStyle:{"font-size":"14px"}},[t._v("回购周期间隔 :")]),t._v(" "),s("el-radio",{attrs:{label:"1"},model:{value:t.gapchoose,callback:function(a){t.gapchoose=a},expression:"gapchoose"}},[t._v("10天")]),t._v(" "),s("el-radio",{attrs:{label:"2"},model:{value:t.gapchoose,callback:function(a){t.gapchoose=a},expression:"gapchoose"}},[t._v("30天")])],1),t._v(" "),s("div",{staticClass:"radio"},[s("span",{staticStyle:{"font-size":"14px"}},[t._v("选择指标 :")]),t._v(" "),s("el-radio",{attrs:{label:"1"},model:{value:t.buychoose,callback:function(a){t.buychoose=a},expression:"buychoose"}},[t._v("支付金额(M)")]),t._v(" "),s("el-radio",{attrs:{label:"2"},model:{value:t.buychoose,callback:function(a){t.buychoose=a},expression:"buychoose"}},[t._v("购买频次(F)")])],1),t._v(" "),s("div",{staticClass:"buyback_table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.buybackList,"header-cell-style":{background:"#eef1f6",color:"#606266"}}},[s("el-table-column",{attrs:{label:"回购周期"},scopedSlots:t._u([{key:"default",fn:function(a){return["1"==t.gapchoose?s("div",[a.row.rv?s("span",[t._v(t._s(10*+a.row.rv+1)+"~"+t._s(10*(+a.row.rv+1))+"天")]):s("span",[t._v("还未再次购买")])]):s("div",[a.row.rv?s("span",[t._v(t._s(30*+a.row.rv+1)+"~"+t._s(30*(+a.row.rv+1))+"天")]):s("span",[t._v("还未再次购买")])])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"cnt",label:"客户数"}}),t._v(" "),s("el-table-column",{attrs:{prop:"cnt_rate",label:"客户数占比"}}),t._v(" "),s("el-table-column",{attrs:{prop:"fees_rate",label:"累计占比"}}),t._v(" "),s("el-table-column",{directives:[{name:"show",rawName:"v-show",value:"1"===t.buychoose,expression:"buychoose==='1'"}],attrs:{label:"人均累计消费(元)"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(t._s(a.row.fees))])]}}])}),t._v(" "),"2"===t.buychoose?s("el-table-column",{attrs:{prop:"fv1",label:"回购1次"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(t._s(a.row.fv1?a.row.fv1:0))])]}}],null,!1,2302843219)}):t._e(),t._v(" "),"2"===t.buychoose?s("el-table-column",{attrs:{prop:"fv2",label:"回购2次"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(t._s(a.row.fv2?a.row.fv2:0))])]}}],null,!1,1511036819)}):t._e(),t._v(" "),"2"===t.buychoose?s("el-table-column",{attrs:{prop:"fv3",label:"回购3次"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(t._s(a.row.fv3?a.row.fv3:0))])]}}],null,!1,4045652691)}):t._e(),t._v(" "),"2"===t.buychoose?s("el-table-column",{attrs:{prop:"fv4",label:"回购4次"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(t._s(a.row.fv4?a.row.fv4:0))])]}}],null,!1,3475340819)}):t._e(),t._v(" "),"2"===t.buychoose?s("el-table-column",{attrs:{prop:"fv5",label:"回购5次及以上"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(t._s(a.row.fv5?a.row.fv5:0))])]}}],null,!1,1714989395)}):t._e()],1)],1)]),t._v(" "),s("el-dialog",{attrs:{title:"提示",visible:t.userNode,width:"60%"},on:{"update:visible":function(a){t.userNode=a}}},[s("img",{attrs:{src:e("5d64"),width:"100%"}})])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"thead"},[e("div",{staticClass:"tr"},[e("div",{staticClass:"th"},[t._v("消费时间(R)/频次(F)")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 1")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 2")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 3")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 4")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F >= 5")]),t._v(" "),e("div",{staticClass:"th"},[t._v("行合计")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"thead"},[e("div",{staticClass:"tr"},[e("div",{staticClass:"th"},[t._v("消费时间(R)/频次(F)")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 1")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 2")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 3")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 4")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F >= 5")]),t._v(" "),e("div",{staticClass:"th"},[t._v("行合计")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"thead"},[e("div",{staticClass:"tr"},[e("div",{staticClass:"th"},[t._v("消费时间(R)/频次(F)")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 1")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 2")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 3")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F = 4")]),t._v(" "),e("div",{staticClass:"th"},[t._v("F >= 5")]),t._v(" "),e("div",{staticClass:"th"},[t._v("行合计")])])])}],c=(e("d4d5"),e("f763"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})}),i=[],n=e("24ce"),l=e.n(n),r=e("ed08");e("6cbb");var u=1e3,d={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.initChart(t)}}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(r["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=l.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{show:!0,feature:{saveAsImage:{show:!0}}},calculable:!0,grid:{top:10,left:"10%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",axisLine:{show:!1},axisTick:{show:!1}}],yAxis:[{type:"category",data:this.chartData.yType,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},offset:10,nameTextStyle:{fontSize:15}}],series:[{name:"新客户",type:"bar",stack:"总数",barWidth:"25",data:this.chartData.newData,animationDuration:u,color:"#3AA1FF"},{name:"老客户",type:"bar",stack:"总数",barWidth:"25",data:this.chartData.oldData,animationDuration:u,color:"#4ECB73"}]})}}},v=d,p=e("17cc"),h=Object(p["a"])(v,c,i,!1,null,null,null),f=h.exports,b=e("b775");function m(t){return Object(b["a"])({url:"/app/business/rfmModel",method:"post",data:{times:t}})}function _(t){return Object(b["a"])({url:"/app/business/buyBack",method:"post",data:t})}function y(t){return Object(b["a"])({url:"/app/business/consumeAbility",method:"post",data:t})}function C(t){return Object(b["a"])({url:"/app/business/consumeFrequency",method:"post",data:t})}var D=e("6bf2"),w={components:{BarChart:f},data:function(){return{rfmDate:"",rfmchoose:"1",cptchoose:"1",consumptionDate:[],consumptionSelect:"1",consumptionSelectTem:"",consumptionTable:[],frcchoose:"1",frequencyDate:[],frequencySelect:"1",frequencySelectTem:"",gapchoose:"1",buychoose:"1",buybackSelect:"1",buybackDate:[],consumption:{yType:[],newData:[],oldData:[]},payList:[],frequency:{yType:[],newData:[],oldData:[]},buyList:[],buybackList:[],temBuybackList:[],uvData:[],moneyData:[],user_avgData:[],show:[],frequencyBar:[],userNode:!1}},watch:{cptchoose:function(t){},gapchoose:function(t){this.buybackList="1"===t?this.temBuybackList.ten:this.temBuybackList.thirty}},created:function(){this.getRFMModle(),this.getBugAbility(),this.getFrequency(),this.getBuyBack()},methods:{getRFMModle:function(t){var a=this;t||(this.rfmDate=+new Date),m(t).then(function(t){a.uvData=t.data.uv,a.moneyData=t.data.money,a.user_avgData=t.data.user_avg;var e=[],s=[];a.moneyData.forEach(function(t){var a=[];t.forEach(function(t){a.push(t.toFixed(2))}),e.push(a)}),a.user_avgData.forEach(function(t){var a=[];t.forEach(function(t){a.push(t.toFixed(2))}),s.push(a)}),a.user_avgData=s,a.moneyData=e})},getBugAbility:function(t){var a=this;t||(this.consumptionDate=[D().subtract("days",29).format("x"),+new Date]),y(t).then(function(t){a.show=t.data,a.consumptionSelectTem=a.consumptionSelect,a.consumption={yType:a.show.oldData.yType,newData:a.show.newData.consumer,oldData:a.show.oldData.consumer},a.cptchooseChange();var e=0,s=0;"1"===a.consumptionSelectTem?(a.cptchoose="1",a.show.newData.consumer.forEach(function(t){e+=Number(t)}),a.show.oldData.consumer.forEach(function(t){e+=Number(t)}),a.show.newData.pay.forEach(function(t){s+=Number(t)}),a.show.oldData.pay.forEach(function(t){s+=Number(t)}),a.consumptionTable=[],a.show.oldData.yType.forEach(function(t,e){a.consumptionTable.push({type:t})}),a.consumptionTable.forEach(function(t,o){t.k=Number(a.show.newData.consumer[o]||0)+Number(a.show.oldData.consumer[o]),t.khb=(t.k/e).toFixed(4),t.sps=Number(a.show.newData.cnt[o]||0)+Number(a.show.oldData.cnt[o]),t.avg=(t.sps/t.k).toFixed(2),t.pay=(Number(a.show.newData.pay[o]||0)+Number(a.show.oldData.pay[o])).toFixed(2),t.payhb=(t.pay/s).toFixed(4)})):"2"===a.consumptionSelectTem?(a.cptchoose="1",a.show.newData.consumer.forEach(function(t){e+=Number(t)}),a.show.newData.pay.forEach(function(t){s+=Number(t)}),a.consumptionTable=[],a.show.newData.yType.forEach(function(t,e){a.consumptionTable.push({type:t})}),a.consumptionTable.forEach(function(t,o){t.k=Number(a.show.newData.consumer[o]||0),t.khb=(t.k/e).toFixed(4),t.sps=Number(a.show.newData.cnt[o]||0),t.avg=(t.sps/t.k).toFixed(2),t.pay=Number(a.show.newData.pay[o]||0).toFixed(2),t.payhb=(t.pay/s).toFixed(4)})):(a.cptchoose="1",a.show.oldData.consumer.forEach(function(t){e+=Number(t)}),a.show.oldData.pay.forEach(function(t){s+=Number(t)}),a.consumptionTable=[],a.show.oldData.yType.forEach(function(t,e){a.consumptionTable.push({type:t})}),a.consumptionTable.forEach(function(t,o){t.k=Number(a.show.oldData.consumer[o]||0),t.khb=(t.k/e).toFixed(4),t.sps=Number(a.show.oldData.cnt[o]||0),t.avg=(t.sps/t.k).toFixed(2),t.pay=Number(a.show.oldData.pay[o]||0).toFixed(2),t.payhb=(t.pay/s).toFixed(4)}))})},cptchooseChange:function(){var t=this.cptchoose;"1"===t?(this.consumption.newData=this.show.newData.consumer,this.consumption.oldData=this.show.oldData.consumer,"2"===this.consumptionSelectTem?(this.consumption.oldData=[],console.log(1)):"3"===this.consumptionSelectTem&&(this.consumption.newData=[])):"2"===t?(this.consumption.newData=this.show.newData.pay,this.consumption.oldData=this.show.oldData.pay,"2"===this.consumptionSelectTem?this.consumption.oldData=[]:"3"===this.consumptionSelectTem&&(this.consumption.newData=[])):"3"===t&&(this.consumption.newData=this.show.newData.cnt,this.consumption.oldData=this.show.oldData.cnt,"2"===this.consumptionSelectTem?this.consumption.oldData=[]:"3"===this.consumptionSelectTem&&(this.consumption.newData=[]))},getFrequency:function(t){var a=this;t||(this.frequencyDate=[D().subtract("days",29).format("x"),+new Date]),C().then(function(t){console.log(t),a.frequencyBar=t.data,a.frequencySelectTem=a.frequencySelect,a.frequency={yType:a.frequencyBar.oldData.yType,newData:a.frequencyBar.newData.consumer,oldData:a.frequencyBar.oldData.consumer},a.frcchooseChange();var e=0,s=0;"1"===a.frequencySelectTem?(a.cptchoose="1",a.frequencyBar.newData.consumer.forEach(function(t){e+=Number(t)}),a.frequencyBar.oldData.consumer.forEach(function(t){e+=Number(t)}),a.frequencyBar.newData.pay.forEach(function(t){s+=Number(t)}),a.frequencyBar.oldData.pay.forEach(function(t){s+=Number(t)}),a.buyList=[],a.frequencyBar.oldData.yType.forEach(function(t,e){a.buyList.push({type:t})}),a.buyList.forEach(function(t,o){t.k=Number(a.frequencyBar.newData.consumer[o]||0)+Number(a.frequencyBar.oldData.consumer[o]),t.khb=(t.k/e).toFixed(4),t.sps=Number(a.frequencyBar.newData.cnt[o]||0)+Number(a.frequencyBar.oldData.cnt[o]),t.avg=(t.sps/t.k).toFixed(2),t.pay=(Number(a.frequencyBar.newData.pay[o]||0)+Number(a.frequencyBar.oldData.pay[o])).toFixed(2),t.payhb=(t.pay/s).toFixed(4)})):"2"===a.frequencySelectTem?(a.cptchoose="1",a.frequencyBar.newData.consumer.forEach(function(t){e+=Number(t)}),a.frequencyBar.newData.pay.forEach(function(t){s+=Number(t)}),a.buyList=[],a.frequencyBar.newData.yType.forEach(function(t,e){a.buyList.push({type:t})}),a.buyList.forEach(function(t,o){t.k=Number(a.frequencyBar.newData.consumer[o]||0),t.khb=(t.k/e).toFixed(4),t.sps=Number(a.frequencyBar.newData.cnt[o]||0),t.avg=(t.sps/t.k).toFixed(2),t.pay=Number(a.frequencyBar.newData.pay[o]||0).toFixed(2),t.payhb=(t.pay/s).toFixed(4)})):(a.cptchoose="1",a.frequencyBar.oldData.consumer.forEach(function(t){e+=Number(t)}),a.frequencyBar.oldData.pay.forEach(function(t){s+=Number(t)}),a.buyList=[],a.frequencyBar.oldData.yType.forEach(function(t,e){a.buyList.push({type:t})}),a.buyList.forEach(function(t,o){t.k=Number(a.frequencyBar.oldData.consumer[o]||0),t.khb=(t.k/e).toFixed(4),t.sps=Number(a.frequencyBar.oldData.cnt[o]||0),t.avg=(t.sps/t.k).toFixed(2),t.pay=Number(a.frequencyBar.oldData.pay[o]||0).toFixed(2),t.payhb=(t.pay/s).toFixed(4)}))})},frcchooseChange:function(){var t=this.frcchoose;"1"===t?(this.frequency.newData=this.frequencyBar.newData.consumer,this.frequency.oldData=this.frequencyBar.oldData.consumer,"2"===this.frequencySelectTem?this.frequency.oldData=[]:"3"===this.frequencySelectTem&&(this.frequency.newData=[])):"2"===t?(this.frequency.newData=this.frequencyBar.newData.pay,this.frequency.oldData=this.frequencyBar.oldData.pay,"2"===this.frequencySelectTem?this.frequency.oldData=[]:"3"===this.frequencySelectTem&&(this.frequency.newData=[])):"3"===t&&(this.frequency.newData=this.frequencyBar.newData.cnt,this.frequency.oldData=this.frequencyBar.oldData.cnt,"2"===this.frequencySelectTem?this.frequency.oldData=[]:"3"===this.frequencySelectTem&&(this.frequency.newData=[]))},getBuyBack:function(t){var a=this;t||(this.buybackDate=[D().subtract("days",29).format("x"),+new Date]),_(t).then(function(t){a.buybackList=t.data.ten,a.temBuybackList=t.data})},searchRFM:function(){var t=parseInt(this.rfmDate/1e3);this.getRFMModle(t)},searchBuyback:function(){var t,a=parseInt(this.buybackDate[0]/1e3),e=parseInt(this.buybackDate[1]/1e3);e+=86399,"2"===this.buybackSelect?t=1:"3"===this.buybackSelect&&(t=2);var s={start_time:a,end_time:e,newpay:t};this.getBuyBack(s)},searchConsumption:function(){var t=parseInt(this.buybackDate[0]/1e3),a=parseInt(this.buybackDate[1]/1e3);a+=86399;var e={start_time:t,end_time:a};this.getBugAbility(e)},searchFrequency:function(){var t=parseInt(this.frequencyDate[0]/1e3),a=parseInt(this.frequencyDate[1]/1e3);a+=86399;var e={start_time:t,end_time:a};this.getFrequency(e)}}},k=w,j=(e("441b"),Object(p["a"])(k,s,o,!1,null,"05076849",null));a["default"]=j.exports},"441b":function(t,a,e){"use strict";var s=e("6306"),o=e.n(s);o.a},"5d64":function(t,a,e){t.exports=e.p+"static/img/usernode.87b45204.png"},6306:function(t,a,e){},"6cbb":function(t,a,e){var s,o,c;(function(i,n){o=[a,e("24ce")],s=n,c="function"===typeof s?s.apply(a,o):s,void 0===c||(t.exports=c)})(0,function(t,a){var e=function(t){"undefined"!==typeof console&&console&&console.error&&console.error(t)};if(a){var s=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],o={color:s,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:s[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:s},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};a.registerTheme("macarons",o)}else e("ECharts is not Loaded")})},"77d2":function(t,a,e){var s={"./af":"fbac","./af.js":"fbac","./ar":"f96f","./ar-dz":"e63c","./ar-dz.js":"e63c","./ar-kw":"b7bd","./ar-kw.js":"b7bd","./ar-ly":"968f","./ar-ly.js":"968f","./ar-ma":"9f9d","./ar-ma.js":"9f9d","./ar-sa":"aea5","./ar-sa.js":"aea5","./ar-tn":"d44b","./ar-tn.js":"d44b","./ar.js":"f96f","./az":"c7ed","./az.js":"c7ed","./be":"5a28","./be.js":"5a28","./bg":"1251","./bg.js":"1251","./bm":"2809","./bm.js":"2809","./bn":"b4fc","./bn.js":"b4fc","./bo":"5484","./bo.js":"5484","./br":"5adc","./br.js":"5adc","./bs":"ac10","./bs.js":"ac10","./ca":"e381","./ca.js":"e381","./cs":"aef2","./cs.js":"aef2","./cv":"6566","./cv.js":"6566","./cy":"1390","./cy.js":"1390","./da":"1ece","./da.js":"1ece","./de":"5f10","./de-at":"09c4","./de-at.js":"09c4","./de-ch":"89a2","./de-ch.js":"89a2","./de.js":"5f10","./dv":"e662","./dv.js":"e662","./el":"196b","./el.js":"196b","./en-SG":"0a32","./en-SG.js":"0a32","./en-au":"94ed","./en-au.js":"94ed","./en-ca":"2806","./en-ca.js":"2806","./en-gb":"b0dd","./en-gb.js":"b0dd","./en-ie":"7a6e","./en-ie.js":"7a6e","./en-il":"1f0f","./en-il.js":"1f0f","./en-nz":"1606","./en-nz.js":"1606","./eo":"f214","./eo.js":"f214","./es":"7d58","./es-do":"737b","./es-do.js":"737b","./es-us":"a894","./es-us.js":"a894","./es.js":"7d58","./et":"a888","./et.js":"a888","./eu":"1357","./eu.js":"1357","./fa":"0a48","./fa.js":"0a48","./fi":"c2b1","./fi.js":"c2b1","./fo":"52c4","./fo.js":"52c4","./fr":"04e6","./fr-ca":"6ad1","./fr-ca.js":"6ad1","./fr-ch":"b12f","./fr-ch.js":"b12f","./fr.js":"04e6","./fy":"ad13","./fy.js":"ad13","./ga":"369e","./ga.js":"369e","./gd":"22de","./gd.js":"22de","./gl":"f808","./gl.js":"f808","./gom-latn":"50d5","./gom-latn.js":"50d5","./gu":"e67a","./gu.js":"e67a","./he":"037c","./he.js":"037c","./hi":"3d53","./hi.js":"3d53","./hr":"678b","./hr.js":"678b","./hu":"1783","./hu.js":"1783","./hy-am":"2873","./hy-am.js":"2873","./id":"de99","./id.js":"de99","./is":"6aa2","./is.js":"6aa2","./it":"1f93","./it-ch":"2db9","./it-ch.js":"2db9","./it.js":"1f93","./ja":"6bf8","./ja.js":"6bf8","./jv":"6e55","./jv.js":"6e55","./ka":"e65f","./ka.js":"e65f","./kk":"7167","./kk.js":"7167","./km":"4668","./km.js":"4668","./kn":"e3d2","./kn.js":"e3d2","./ko":"b058","./ko.js":"b058","./ku":"017e","./ku.js":"017e","./ky":"b2bd","./ky.js":"b2bd","./lb":"e50c","./lb.js":"e50c","./lo":"ca14","./lo.js":"ca14","./lt":"3e84","./lt.js":"3e84","./lv":"ce1d","./lv.js":"ce1d","./me":"9d38","./me.js":"9d38","./mi":"3e2e","./mi.js":"3e2e","./mk":"d532","./mk.js":"d532","./ml":"db61","./ml.js":"db61","./mn":"7493","./mn.js":"7493","./mr":"52d8","./mr.js":"52d8","./ms":"b559","./ms-my":"7462","./ms-my.js":"7462","./ms.js":"b559","./mt":"c055","./mt.js":"c055","./my":"49e0","./my.js":"49e0","./nb":"eb1c","./nb.js":"eb1c","./ne":"0acb","./ne.js":"0acb","./nl":"7497","./nl-be":"3114","./nl-be.js":"3114","./nl.js":"7497","./nn":"9a9c","./nn.js":"9a9c","./pa-in":"c595","./pa-in.js":"c595","./pl":"801c","./pl.js":"801c","./pt":"5b08","./pt-br":"155f","./pt-br.js":"155f","./pt.js":"5b08","./ro":"05fc","./ro.js":"05fc","./ru":"90b3","./ru.js":"90b3","./sd":"99bf","./sd.js":"99bf","./se":"20d6","./se.js":"20d6","./si":"7c0b","./si.js":"7c0b","./sk":"90fc","./sk.js":"90fc","./sl":"871b","./sl.js":"871b","./sq":"b045","./sq.js":"b045","./sr":"ac81","./sr-cyrl":"a2d0","./sr-cyrl.js":"a2d0","./sr.js":"ac81","./ss":"b093","./ss.js":"b093","./sv":"12e5","./sv.js":"12e5","./sw":"38a0","./sw.js":"38a0","./ta":"a462","./ta.js":"a462","./te":"18cb","./te.js":"18cb","./tet":"0c11","./tet.js":"0c11","./tg":"d707","./tg.js":"d707","./th":"883f","./th.js":"883f","./tl-ph":"6cc0","./tl-ph.js":"6cc0","./tlh":"ab53","./tlh.js":"ab53","./tr":"e523","./tr.js":"e523","./tzl":"b192","./tzl.js":"b192","./tzm":"5604","./tzm-latn":"9f95","./tzm-latn.js":"9f95","./tzm.js":"5604","./ug-cn":"9f4f","./ug-cn.js":"9f4f","./uk":"8bd6","./uk.js":"8bd6","./ur":"9a78","./ur.js":"9a78","./uz":"4d4c","./uz-latn":"da73","./uz-latn.js":"da73","./uz.js":"4d4c","./vi":"b766","./vi.js":"b766","./x-pseudo":"2a69","./x-pseudo.js":"2a69","./yo":"fd2e","./yo.js":"fd2e","./zh-cn":"35d0","./zh-cn.js":"35d0","./zh-hk":"7b45","./zh-hk.js":"7b45","./zh-tw":"fa66","./zh-tw.js":"fa66"};function o(t){var a=c(t);return e(a)}function c(t){var a=s[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}o.keys=function(){return Object.keys(s)},o.resolve=c,t.exports=o,o.id="77d2"}}]);