"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[94557],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=i,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(y,n(n({ref:t},p),{},{components:r})):a.createElement(y,n({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,n[1]=c;for(var l=2;l<o;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(58168),i=(r(96540),r(15680));const o={id:"victoria-metrics-init",title:"Use Time Series Database VictoriaMetrics to Store Metrics Data (Recommended)",sidebar_label:"Use VictoriaMetrics Store Metrics"},n=void 0,c={unversionedId:"start/victoria-metrics-init",id:"version-v1.4.x/start/victoria-metrics-init",title:"Use Time Series Database VictoriaMetrics to Store Metrics Data (Recommended)",description:"HertzBeat's historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)",source:"@site/versioned_docs/version-v1.4.x/start/victoria-metrics-init.md",sourceDirName:"start",slug:"/start/victoria-metrics-init",permalink:"/docs/v1.4.x/start/victoria-metrics-init",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/start/victoria-metrics-init.md",tags:[],version:"v1.4.x",frontMatter:{id:"victoria-metrics-init",title:"Use Time Series Database VictoriaMetrics to Store Metrics Data (Recommended)",sidebar_label:"Use VictoriaMetrics Store Metrics"},sidebar:"docs",previous:{title:"Version Upgrade Guide",permalink:"/docs/v1.4.x/start/upgrade"},next:{title:"Use IoTDB Store Metrics",permalink:"/docs/v1.4.x/start/iotdb-init"}},s={},l=[{value:"Install VictoriaMetrics via Docker",id:"install-victoriametrics-via-docker",level:3},{value:"FAQ",id:"faq",level:3}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,i.yg)("wrapper",(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"HertzBeat's historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)\nWe recommend VictoriaMetrics for long term support."),(0,i.yg)("p",null,"VictoriaMetrics is a fast, cost-effective and scalable monitoring solution and time series database.Recommend Version(VictoriaMetrics:v1.95.1+, HertzBeat:v1.4.3+)"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Time series database is optional, but production environment configuration is strongly recommended to provide more complete historical chart functions and high performance"),(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("strong",{parentName:"p"},"\u26a0\ufe0f If you do not configure a time series database, only the last hour of historical data is retained.")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"If you already have an VictoriaMetrics environment, you can skip directly to the YML configuration step.")),(0,i.yg)("h3",{id:"install-victoriametrics-via-docker"},"Install VictoriaMetrics via Docker"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Refer to the official website ",(0,i.yg)("a",{parentName:"p",href:"https://docs.victoriametrics.com/Quick-Start.html#how-to-install"},"installation tutorial")),(0,i.yg)("ol",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ol"},"Download and install Docker environment",(0,i.yg)("br",{parentName:"li"}),"Docker tools download refer to ",(0,i.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker official document"),".\nAfter the installation you can check if the Docker version normally output at the terminal.",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))))),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Install VictoriaMetrics via Docker    ")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 8428:8428 \\\n    -v $(pwd)/victoria-metrics-data:/victoria-metrics-data \\\n    --name victoria-metrics \\\n    victoriametrics/victoria-metrics:v1.95.1\n")),(0,i.yg)("p",null,"   ",(0,i.yg)("inlineCode",{parentName:"p"},"-v $(pwd)/victoria-metrics-data:/victoria-metrics-data")," is local persistent mount of VictoriaMetrics data directory\nuse",(0,i.yg)("inlineCode",{parentName:"p"},"$ docker ps")," to check if the database started successfully"),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Configure the database connection in hertzbeat ",(0,i.yg)("inlineCode",{parentName:"p"},"application.yml"),"configuration file"),(0,i.yg)("p",{parentName:"li"},"Modify ",(0,i.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," configuration file",(0,i.yg)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0fThe docker container way need to mount application.yml file locally, while you can use installation package way to unzip and modify ",(0,i.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),(0,i.yg)("br",{parentName:"p"}),"\n","Config the ",(0,i.yg)("inlineCode",{parentName:"p"},"warehouse.store.jpa.enabled")," ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),". Replace ",(0,i.yg)("inlineCode",{parentName:"p"},"warehouse.store.victoria-metrics")," data source parameters, HOST account and password."))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n  store:\n     # disable JPA\n    jpa:\n      enabled: false\n    # enable victoria-metrics\n    victoria-metrics:\n       enabled: true\n       url: http://localhost:8428\n       username: root\n       password: root\n")),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Restart HertzBeat")),(0,i.yg)("h3",{id:"faq"},"FAQ"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Do both the time series databases need to be configured? Can they both be used?   ",(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"You don't need to configure all of them, you can choose one of them. Use the enable parameter to control whether it is used or not. You can also install and configure neither, which can affects the historical chart data.")))))}m.isMDXComponent=!0}}]);