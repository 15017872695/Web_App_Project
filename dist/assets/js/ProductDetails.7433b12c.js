(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductDetails"],{"0762":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{marginTop:t.BoxHidden?"39.5vw":"0"},attrs:{id:"Swiper"}},[a("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white",lazyComponent:"true"},on:{change:t.onChange}},[t._l(t.imagesData,(function(e,i){return a("van-swipe-item",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",error:"@/assets/logo.png",loading:"@/assets/img/imgLodding.jpg"},expression:"{selector:'img',error:'@/assets/logo.png',loading:'@/assets/img/imgLodding.jpg'}"}],key:i,on:{click:function(e){return t.Preview(i)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}],attrs:{"data-src":e}})])})),t.hidenIndicator?a("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v("\n      "+t._s(t.current+1)+" / "+t._s(t.images.length)+"\n    ")]):t._e()],2)],1)},o=[],s=a("bd86"),c=(a("4662"),a("28a2")),r=(a("4b0a"),a("2bb1")),l=(a("7f7f"),a("7844"),a("5596")),d={name:"Swiper",components:(i={},Object(s["a"])(i,l["a"].name,l["a"]),Object(s["a"])(i,r["a"].name,r["a"]),Object(s["a"])(i,c["a"].name,c["a"]),i),props:{BoxHidden:{type:Boolean,default:!0},hidenIndicator:{type:Boolean,default:!1},images:{type:Array,default:null}},data:function(){return{current:0,imagesData:this.images}},created:function(){},methods:{onChange:function(t){this.current=t},Preview:function(t){console.log(t),Object(c["a"])({images:this.imagesData,startPosition:t,onClose:function(){}})}}},p=d,h=(a("2cd5"),a("2877")),u=Object(h["a"])(p,n,o,!1,null,"73d2ab39",null);e["a"]=u.exports},"1ae4":function(t,e,a){t.exports=a.p+"assets/img/logo.90155e25.svg"},"279a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.hideBoxBln?t.BoxHidden:t.hideBoxBln,expression:"hideBoxBln?BoxHidden:hideBoxBln"}],attrs:{id:"AppTitleShowBox"}},[i("div",{staticClass:"HomeAppTitleShowBox"},[i("i",{staticClass:"iconfont iconclose",on:{click:t.hideBox}}),t._m(0),i("div",{staticClass:"Immediately_open"},[t._v("立即打开")])]),t.selectNavBarBLN?i("div",{staticClass:"HomeAppTitleShowBoxTwo"},[i("img",{attrs:{src:a("8fdf"),alt:""}}),i("ul",t._l(t.HomeNavBarData,(function(e,a){return i("li",{key:e+a,on:{click:function(i){return t.activeFNC(a,e.path)}}},[i("span",{class:t.activeIndex==e.path?"active":""},[t._v(t._s(e.name))])])})),0)]):t._e()])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("img",{attrs:{src:a("1ae4"),alt:""}}),i("div",[i("span",[t._v("App买电脑首单立减10元")]),i("span",[t._v("注册即送188元大礼包，签到送延保！")])])])}],o=a("986e"),s={name:"AppTitleShowBox",props:{BoxHidden:{type:Boolean,default:!0},selectNavBarBLN:{type:Boolean,default:!0}},data:function(){return{HomeNavBarData:[{name:"商城",path:"/ShoppingMall"},{name:"社区",path:"/Community"},{name:"服务",path:"/Serve"},{name:"资讯",path:"/Consult"},{name:"门店",path:"/Shop"}],activeIndex:"/ShoppingMall",hideBoxBln:!0}},methods:{activeFNC:function(t,e){this.activeIndex=e,this.$router.push({path:e})},hideBox:function(){}},mounted:function(){this.activeIndex=this.$router.history.current.path},created:function(){var t=this;o["a"].$on("my-event",(function(e){for(var a in t.HomeNavBarData)t.HomeNavBarData[a].path==e&&(t.activeIndex=e)}))}},c=s,r=(a("4e93"),a("2877")),l=Object(r["a"])(c,i,n,!1,null,"a6bae5c6",null);e["a"]=l.exports},"2cd5":function(t,e,a){"use strict";var i=a("9ad4"),n=a.n(i);n.a},"4e93":function(t,e,a){"use strict";var i=a("7175"),n=a.n(i);n.a},7175:function(t,e,a){},8921:function(t,e,a){},"8fdf":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAAAXNSR0IArs4c6QAAAlJJREFUeAHt3LFtlGEUBVFAZPQDTZhqqYJ+IAYJkb9/M7hznL5PlmfGd8N9/+Pz2693fnIGPuSIAf8xIHz0H0F44aMGotgWL3zUQBTb4oWPGohiW7zwUQNRbIsXPmogim3xwkcNRLEtXviogSi2xQsfNRDFtnjhowai2BYvfNRAFNvihY8aiGJbvPBRA1Fsixc+aiCKbfHCRw1EsS1e+KiBKPbH/4X70/dvL/2pP798fel97bGP+lrxv7zCCx81EMW2eOGjBqLYFi981EAU2+KFjxqIYlu88FEDUWyLFz5qIIpt8cJHDUSxLV74qIEotsULHzUQxbZ44aMGotgWL3zUQBTb4oWPGohiW7zwUQNRbIsXPmogim3xwkcNRLEtXviogSi2xQsfNRDFtnjhowai2BYvfNRAFNvihY8aiGJbvPBRA1Fsixc+aiCKbfHCRw1Esf+b76t/tc+r32//6u9/8v5f/s58H/VPCg6+EX4w6hMk4Z9YGnwj/GDUJ0jCP7E0+Eb4wahPkIR/YmnwjfCDUZ8gCf/E0uAb4QejPkES/omlwTfvf3x++zXIBekwYPGHoNWz8KtlDy7hD0GrZ+FXyx5cwh+CVs/Cr5Y9uIQ/BK2ehV8te3AJfwhaPQu/WvbgEv4QtHoWfrXswSX8IWj1LPxq2YNL+EPQ6ln41bIHl/CHoNWz8KtlDy7hD0GrZ+FXyx5cwh+CVs/Cr5Y9uIQ/BK2ehV8te3AJfwhaPQu/WvbgEv4QtHoWfrXswSX8IWj1LPxq2YNL+EPQ6ln41bIH129FkQvps0DuKwAAAABJRU5ErkJggg=="},"986e":function(t,e,a){"use strict";var i=a("2b0e");e["a"]=new i["a"]},"9ad4":function(t,e,a){},"9ceb":function(t,e,a){"use strict";var i=a("8921"),n=a.n(i);n.a},af26:function(t,e,a){"use strict";a.r(e);var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ProductDetails"}},[a("App-Title-Show-Box",{attrs:{BoxHidden:t.TopBoxHidden,selectNavBarBLN:t.selectNavBarBLN}}),a("Swiper",{attrs:{BoxHidden:t.BoxHidden,hidenIndicator:t.hidenIndicator,images:t.images}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.TopOne,expression:"TopOne"}],staticClass:"Product-Top-One"},[a("i",{staticClass:"iconfont iconreturn",on:{click:t.back}}),a("i",{staticClass:"iconfont iconmore",on:{click:t.showMainNav}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.TopTwo,expression:"TopTwo"}],staticClass:"Product-Top-Two"},[a("i",{staticClass:"iconfont iconreturn",on:{click:t.back}}),a("div",{staticClass:"selectInfoWapper"},t._l(t.selectInfo,(function(e,i){return a("span",{key:i,class:t.Index==i?"active":"",on:{click:function(e){return t.activeIndex(i)}}},[t._v(t._s(e))])})),0),a("i",{staticClass:"iconfont iconmore",on:{click:t.showMainNav}})]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"main-nav"},[a("ul",[a("li",{on:{click:t.goHome}},[a("i",{staticClass:"iconfont iconshouye"}),a("span",[t._v("首页")])]),a("li",[a("i",{staticClass:"iconfont iconsousuo"}),a("span",[t._v("搜索")])]),a("li",[a("i",{staticClass:"iconfont iconwode1"}),a("span",[t._v("个人中心")])])])])]),a("div",{staticClass:"ProductMS"},[t._m(0),a("div",{staticClass:"ProductMS_right"},[a("span",[t._v("距结束还剩:")]),a("div",{staticClass:"time"},[a("span",{staticStyle:{"margin-right":"1vw"}},[t._v(t._s(t.day)+"天")]),a("em",[t._v(t._s(t.hour))]),a("i",[t._v(":")]),a("em",[t._v(t._s(t.min))]),a("i",[t._v(":")]),a("em",[t._v(t._s(t.second))])])])]),t._m(1),t._m(2),a("van-goods-action",{attrs:{"safe-area-inset-bottom":""}},[a("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"}}),a("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",info:t.Arr.length,url:"/ShoppingCath"}}),a("van-goods-action-icon",{attrs:{icon:"shop-o",text:"分享",info:"3"},on:{click:function(e){t.showShare=!0}}}),a("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCommodity}}),a("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1),a("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ProductMS_left"},[a("div",[a("span",[t._v("秒杀价")]),a("span",[t._v("￥149")])]),a("div",[a("div",{staticClass:"sg-notice"},[a("span",{staticClass:"sg-notice-titleType"},[a("img",{attrs:{src:"https://mitem.lenovo.com.cn/product/pd_comp/images/sgClock.png",alt:"时钟"}})]),a("span",{staticClass:"sg-notice-typeName"},[t._v("商城秒杀")])]),a("sup",{staticClass:"noPrice"},[t._v("￥169")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Product_Info"},[a("div",[t._v("ThinkPad T490 英特尔酷睿i5 笔记本电脑 20N2A002CD")]),a("div",[t._v("八代英特尔酷睿i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/WQHD/独显/14.0英寸")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Product_YH"},[a("div",[a("span",[t._v("活动")]),a("div",{staticClass:"Product_YH_Center"},[a("p",[t._v("【限时赠好礼】下单赠“女排拼搏2020“主题台历，数量有限，赠完即止，仅限电子发票用户！")]),a("p",[t._v("【福利】天天抽1000元花呗红包（联想APP支付才可以哦），详情点击了解")])]),a("img",{attrs:{src:"https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png",alt:""}})]),a("div",[a("span",[t._v("赠送")]),a("div",{staticClass:"Product_YH_Center"},[a("span",[t._v("ThinkPad双肩包B200")])]),a("img",{attrs:{src:"https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png",alt:""}})]),a("div",[a("span",[t._v("分期")]),a("div",{staticClass:"Product_YH_Center"},[a("span",[t._v("花呗分期 / 招行分期")])]),a("img",{attrs:{src:"https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png",alt:""}})]),a("div",[a("span",[t._v("已选")]),a("div",{staticClass:"Product_YH_Center"},[a("span",[a("b",[t._v("未选官方服务")]),t._v(" i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/WQHD/独显/14.0英寸\n        ")])]),a("img",{attrs:{src:"https://p3.lefile.cn/product/adminweb/2018/11/28/3ed4e508-b698-475e-b2a4-2e4545a8daa0.png",alt:""}})])])}],s=(a("e7e5"),a("d399")),c=(a("c5f6"),a("bd86")),r=(a("d356"),a("48bd")),l=(a("ef6f"),a("82a8")),d=(a("591c"),a("7713")),p=(a("7f7f"),a("93ac"),a("bb33")),h=a("0762"),u=a("279a"),v=a("4360"),m={name:"ProductDetails",props:{},components:(i={Swiper:h["a"],AppTitleShowBox:u["a"]},Object(c["a"])(i,p["a"].name,p["a"]),Object(c["a"])(i,d["a"].name,d["a"]),Object(c["a"])(i,l["a"].name,l["a"]),Object(c["a"])(i,r["a"].name,r["a"]),i),data:function(){return{BoxHidden:!1,TopBoxHidden:!0,hidenIndicator:!0,selectNavBarBLN:!1,images:["https://p4.lefile.cn/product/adminweb/2019/04/28/nZxBfBxlvRccpN5nhd4tI6bqy-8504.jpg","https://p4.lefile.cn/product/adminweb/2019/04/28/XmVH6M7xtgiSFpXGbaKbKYOV1-0641.jpg","https://p1.lefile.cn/product/adminweb/2019/04/28/gbZBhMTVkWByyrjhpdaL5LW2X-3294.jpg","https://p1.lefile.cn/product/adminweb/2019/04/28/Hz3aDmG0Lj5pnc2gIqgJqJM3P-7874.jpg","https://p4.lefile.cn/product/adminweb/2019/04/28/JKl4MFnPoItmuWXyfNyWAZSy6-1469.jpg","https://p1.lefile.cn/product/adminweb/2019/04/28/YweeNTy7caTAm00BS0CKeQDS3-3441.jpg","https://p3.lefile.cn/product/adminweb/2019/04/28/QAZ2e64r7kPG6LXHNeBjju0qh-5501.jpg"],TopOne:!1,TopTwo:!0,showNav:!1,selectInfo:["商品","详情","配置","评价"],Index:0,curStartTime:"2020-1-17",hour:"00",min:"00",second:"00",day:"00",Arr:null,showShare:!1,options:[[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]]}},created:function(){v["a"].getters.shoppingData.length?this.Arr=JSON.parse(v["a"].getters.shoppingData):this.Arr=[],console.log(this.Arr)},watch:{Arr:function(t,e){return console.log(e),e}},mounted:function(){this.countTime()},methods:{back:function(){this.$router.go(-1)},showMainNav:function(){this.showNav=!this.showNav},goHome:function(){this.$router.push("/ShoppingMall")},activeIndex:function(t){console.log(t),this.Index=t},countTime:function(){var t=new Date,e=t.getTime(),a=new Date(this.curStartTime),i=a.getTime(),n=i-e;if(n>=0){this.day=Math.floor(n/1e3/60/60/24);var o=Math.floor(n/1e3/60/60%24);this.hour=o<10?"0"+o:o;var s=Math.floor(n/1e3/60%60);this.min=s<10?"0"+s:s;var c=Math.floor(n/1e3%60);this.second=c<10?"0"+c:c}else this.day=0,this.hour="00",this.min="00",this.second="00";0===Number(this.hour)&&0===Number(this.day)&&0===Number(this.min)&&0===Number(this.second)||setTimeout(this.countTime,1e3)},onSelect:function(t){Object(s["a"])(t.name),this.showShare=!1},addCommodity:function(){var t={name:"ThinkPad T490 英特尔酷睿i5 笔记本电脑 20N2A002CD",info:"八代英特尔酷睿i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/WQHD/独显/14.0英寸",oldPrice:169,newPrice:149,imgUrl:this.images[0],ID:16,sum:1};console.log(this.Arr),this.Arr.push(t),v["a"].dispatch("ADD_COMMODITY",this.Arr),Object(s["a"])("加入购物车成功")}}},f=m,g=(a("9ceb"),a("2877")),w=Object(g["a"])(f,n,o,!1,null,"c322aada",null);e["default"]=w.exports}}]);
//# sourceMappingURL=ProductDetails.7433b12c.js.map