"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[77981],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>k});var o=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),k=a,g=b["".concat(i,".").concat(k)]||b[k]||u[k]||l;return r?o.createElement(g,n(n({ref:t},p),{},{components:r})):o.createElement(g,n({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var s=2;s<l;s++)n[s]=r[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},69802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var o=r(58168),a=(r(96540),r(15680));const l={id:"alert_slack",title:"\u544a\u8b66 Slack Webhook \u901a\u77e5",sidebar_label:"\u544a\u8b66 Slack Webhook \u901a\u77e5",keywords:["\u544a\u8b66 Slack Webhook \u901a\u77e5","\u5f00\u6e90\u544a\u8b66\u7cfb\u7edf","\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf"]},n=void 0,c={unversionedId:"help/alert_slack",id:"version-v1.4.x/help/alert_slack",title:"\u544a\u8b66 Slack Webhook \u901a\u77e5",description:"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7 Slack Webhook \u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/help/alert_slack.md",sourceDirName:"help",slug:"/help/alert_slack",permalink:"/zh-cn/docs/v1.4.x/help/alert_slack",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/help/alert_slack.md",tags:[],version:"v1.4.x",frontMatter:{id:"alert_slack",title:"\u544a\u8b66 Slack Webhook \u901a\u77e5",sidebar_label:"\u544a\u8b66 Slack Webhook \u901a\u77e5",keywords:["\u544a\u8b66 Slack Webhook \u901a\u77e5","\u5f00\u6e90\u544a\u8b66\u7cfb\u7edf","\u5f00\u6e90\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf"]},sidebar:"docs",previous:{title:"\u544a\u8b66 Discord \u673a\u5668\u4eba\u901a\u77e5",permalink:"/zh-cn/docs/v1.4.x/help/alert_discord"},next:{title:"\u544a\u8b66 Telegram \u673a\u5668\u4eba\u901a\u77e5",permalink:"/zh-cn/docs/v1.4.x/help/alert_telegram"}},i={},s=[{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u5728 Slack \u5f00\u542f Webhook, \u83b7\u53d6 Webhook URL",id:"\u5728-slack-\u5f00\u542f-webhook-\u83b7\u53d6-webhook-url",level:3},{value:"\u5728 HertzBeat \u65b0\u589e\u544a\u8b66\u901a\u77e5\u4eba\uff0c\u901a\u77e5\u65b9\u5f0f\u4e3a Slack Webhook",id:"\u5728-hertzbeat-\u65b0\u589e\u544a\u8b66\u901a\u77e5\u4eba\u901a\u77e5\u65b9\u5f0f\u4e3a-slack-webhook",level:3},{value:"Slack \u673a\u5668\u4eba\u901a\u77e5\u5e38\u89c1\u95ee\u9898",id:"slack-\u673a\u5668\u4eba\u901a\u77e5\u5e38\u89c1\u95ee\u9898",level:3}],p={toc:s};function u(e){let{components:t,...l}=e;return(0,a.yg)("wrapper",(0,o.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7 Slack Webhook \u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002      ")),(0,a.yg)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u90e8\u7f72\u7f51\u7edc\u672c\u8eab\u9700\u652f\u6301\u79d1\u5b66\u4e0a\u7f51\uff0c\u4e0d\u652f\u6301\u8bbe\u7f6e\u4ee3\u7406 ")),(0,a.yg)("h3",{id:"\u5728-slack-\u5f00\u542f-webhook-\u83b7\u53d6-webhook-url"},"\u5728 Slack \u5f00\u542f Webhook, \u83b7\u53d6 Webhook URL"),(0,a.yg)("p",null,"\u53c2\u8003\u5b98\u7f51\u6587\u6863 ",(0,a.yg)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Sending messages using Incoming Webhooks"),"    "),(0,a.yg)("h3",{id:"\u5728-hertzbeat-\u65b0\u589e\u544a\u8b66\u901a\u77e5\u4eba\u901a\u77e5\u65b9\u5f0f\u4e3a-slack-webhook"},"\u5728 HertzBeat \u65b0\u589e\u544a\u8b66\u901a\u77e5\u4eba\uff0c\u901a\u77e5\u65b9\u5f0f\u4e3a Slack Webhook"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u3010\u544a\u8b66\u901a\u77e5\u3011->\u3010\u65b0\u589e\u63a5\u6536\u4eba\u3011 ->\u3010\u9009\u62e9 Slack Webhook \u901a\u77e5\u65b9\u5f0f\u3011->\u3010\u8bbe\u7f6e Webhook URL\u3011-> \u3010\u786e\u5b9a\u3011"))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"email",src:r(62110).A,width:"3782",height:"1002"})),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"\u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\u26a0\ufe0f \u3010\u65b0\u589e\u901a\u77e5\u7b56\u7565\u3011-> \u3010\u5c06\u521a\u8bbe\u7f6e\u7684\u63a5\u6536\u4eba\u5173\u8054\u3011-> \u3010\u786e\u5b9a\u3011"),"  ")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u26a0\ufe0f \u65b0\u589e\u4e86\u63a5\u6536\u4eba\u5e76\u4e0d\u4ee3\u8868\u5df2\u7ecf\u751f\u6548\u53ef\u4ee5\u63a5\u6536\u544a\u8b66\u4fe1\u606f\uff0c\u8fd8\u9700\u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\uff0c\u5373\u6307\u5b9a\u54ea\u4e9b\u6d88\u606f\u53d1\u7ed9\u54ea\u4e9b\u63a5\u6536\u4eba"),"\u3002   ")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"email",src:r(82174).A,width:"3778",height:"1284"}),"    "),(0,a.yg)("h3",{id:"slack-\u673a\u5668\u4eba\u901a\u77e5\u5e38\u89c1\u95ee\u9898"},"Slack \u673a\u5668\u4eba\u901a\u77e5\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Slack \u672a\u6536\u5230\u673a\u5668\u4eba\u544a\u8b66\u901a\u77e5  ")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u8bf7\u6392\u67e5\u5728\u544a\u8b66\u4e2d\u5fc3\u662f\u5426\u5df2\u6709\u89e6\u53d1\u7684\u544a\u8b66\u4fe1\u606f",(0,a.yg)("br",{parentName:"p"}),"\n","\u8bf7\u6392\u67e5\u662f\u5426\u914d\u7f6e\u6b63\u786e Slack Webhook URL\uff0c\u662f\u5426\u5df2\u914d\u7f6e\u544a\u8b66\u7b56\u7565\u5173\u8054   ")),(0,a.yg)("p",null,"\u5176\u5b83\u95ee\u9898\u53ef\u4ee5\u901a\u8fc7\u4ea4\u6d41\u7fa4ISSUE\u53cd\u9988\u54e6\uff01"))}u.isMDXComponent=!0},82174:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/alert-notice-policy-a44e898a35d581c7bb8f52bd2499387f.png"},62110:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/slack-bot-1-5cc584b2823e4afd5adee02aea2fb1ca.png"}}]);