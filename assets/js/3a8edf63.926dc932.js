"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[35301],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=g(a),c=r,u=d["".concat(p,".").concat(c)]||d[c]||y[c]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const l={id:"aiConfig",title:"AI QuickStart",sidebar_label:"AI QuickStartr",keywords:["AI"]},i=void 0,o={unversionedId:"help/aiConfig",id:"help/aiConfig",title:"AI QuickStart",description:"The dialogue with artificial intelligence is achieved by configuring aiConfig in the application.yml file",source:"@site/docs/help/ai_config.md",sourceDirName:"help",slug:"/help/aiConfig",permalink:"/docs/help/aiConfig",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/ai_config.md",tags:[],version:"current",frontMatter:{id:"aiConfig",title:"AI QuickStart",sidebar_label:"AI QuickStartr",keywords:["AI"]},sidebar:"docs",previous:{title:"OpenAI Account Status",permalink:"/docs/help/openai"},next:{title:"Kafka-PromQL",permalink:"/docs/help/kafka_promql"}},p={},g=[{value:"Configuration parameter description",id:"configuration-parameter-description",level:3},{value:"Large model options and configuration details",id:"large-model-options-and-configuration-details",level:3},{value:"ZhiPu AI",id:"zhipu-ai",level:4},{value:"Alibaba AI",id:"alibaba-ai",level:4},{value:"Kimi AI",id:"kimi-ai",level:4}],m={toc:g};function y(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The dialogue with artificial intelligence is achieved by configuring aiConfig in the application.yml file")),(0,r.yg)("h3",{id:"configuration-parameter-description"},"Configuration parameter description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name of the parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"Choose a large AI model (such as Zhipu, Tongyi thousand questions...)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model"),(0,r.yg)("td",{parentName:"tr",align:null},"Select the model, which defaults to GLM-4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api-key"),(0,r.yg)("td",{parentName:"tr",align:null},"Gets the api_key, without which you cannot talk to the large model")))),(0,r.yg)("h3",{id:"large-model-options-and-configuration-details"},"Large model options and configuration details"),(0,r.yg)("h4",{id:"zhipu-ai"},"ZhiPu AI"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name of the parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"),(0,r.yg)("th",{parentName:"tr",align:null},"Link"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"zhiPu (must be exactly the same as example)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model"),(0,r.yg)("td",{parentName:"tr",align:null},"glm-4-0520\u3001glm-4 \u3001glm-4-air\u3001glm-4-airx\u3001 glm-4-flash"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api-key"),(0,r.yg)("td",{parentName:"tr",align:null},"xxxxx.xxxxxx"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://open.bigmodel.cn/login?redirect=%2Fusercenter%2Fapikeys"},"https://open.bigmodel.cn/login?redirect=%2Fusercenter%2Fapikeys"))))),(0,r.yg)("h4",{id:"alibaba-ai"},"Alibaba AI"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name of the parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"),(0,r.yg)("th",{parentName:"tr",align:null},"Link"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"alibabaAi (must be exactly the same as example)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model"),(0,r.yg)("td",{parentName:"tr",align:null},"qwen-turbo\u3001qwen-plus\u3001qwen-max\u3001qwen-max-0428\u3001qwen-max-0403\u3001qwen-max-0107\u3001qwen-max-longcontext"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://help.aliyun.com/zh/dashscope/developer-reference/model-introduction?spm=a2c4g.11186623.0.0.4e0246c1RQFKMH"},"https://help.aliyun.com/zh/dashscope/developer-reference/model-introduction?spm=a2c4g.11186623.0.0.4e0246c1RQFKMH"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api-key"),(0,r.yg)("td",{parentName:"tr",align:null},"xxxxxxxxxxx"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key?spm=a2c4g.11186623.0.i10"},"https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key?spm=a2c4g.11186623.0.i10"))))),(0,r.yg)("h4",{id:"kimi-ai"},"Kimi AI"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name of the parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"),(0,r.yg)("th",{parentName:"tr",align:null},"Link"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"kimiAi (must be exactly the same as example)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model"),(0,r.yg)("td",{parentName:"tr",align:null},"moonshot-v1-8k\u3001moonshot-v1-32k\u3001moonshot-v1-128k"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api-key"),(0,r.yg)("td",{parentName:"tr",align:null},"xxxxxxxxxxx"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://platform.moonshot.cn/console/api-keys"},"https://platform.moonshot.cn/console/api-keys"))))))}y.isMDXComponent=!0}}]);