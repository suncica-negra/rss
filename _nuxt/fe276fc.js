(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{370:function(e,t,n){"use strict";n.r(t);var r=n(281),l=n(282),o=n(287),d=n(283),f={components:{Title:r.default,Spinner:l.default,ArticleSummaryBox:d.default},name:"Fun",data:function(){return{feedsData:null,title:"Fun",loading:!0,error:!1}},created:function(){this.getArticlesData()},methods:{getArticlesData:function(){this.feedsData=o.a.readFromAPI("fun",this)}}},c=n(16),component=Object(c.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Title",{attrs:{title:e.title}}),e._v(" "),e.error?n("Error"):e._e(),e._v(" "),n("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),e._v(" "),e.feedsData?n("ArticleSummaryBox",{attrs:{feedsData:e.feedsData}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Title:n(281).default,Error:n(285).default,Spinner:n(282).default,ArticleSummaryBox:n(283).default})}}]);