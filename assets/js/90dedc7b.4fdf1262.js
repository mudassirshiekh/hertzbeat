"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[78993],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const i={id:"greptime-init",title:"Use Time Series Database GreptimeDB to Store Metrics Data (Optional)",sidebar_label:"Use GreptimeDB Store Metrics"},o=void 0,l={unversionedId:"start/greptime-init",id:"version-v1.4.x/start/greptime-init",title:"Use Time Series Database GreptimeDB to Store Metrics Data (Optional)",description:"HertzBeat's historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)",source:"@site/versioned_docs/version-v1.4.x/start/greptime-init.md",sourceDirName:"start",slug:"/start/greptime-init",permalink:"/docs/v1.4.x/start/greptime-init",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/start/greptime-init.md",tags:[],version:"v1.4.x",frontMatter:{id:"greptime-init",title:"Use Time Series Database GreptimeDB to Store Metrics Data (Optional)",sidebar_label:"Use GreptimeDB Store Metrics"},sidebar:"docs",previous:{title:"Use TDengine Store Metrics",permalink:"/docs/v1.4.x/start/tdengine-init"},next:{title:"Use InfluxDB Store Metrics",permalink:"/docs/v1.4.x/start/influxdb-init"}},c={},s=[{value:"Install GreptimeDB via Docker",id:"install-greptimedb-via-docker",level:3},{value:"Configure the database connection in hertzbeat <code>application.yml</code> configuration file",id:"configure-the-database-connection-in-hertzbeat-applicationyml-configuration-file",level:3},{value:"FAQ",id:"faq",level:3}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"HertzBeat's historical data storage relies on the time series database, you can choose one of them to install and initialize, or not to install (note \u26a0\ufe0f but it is strongly recommended to configure in the production environment)\nWe recommend VictoriaMetrics for long term support."),(0,a.yg)("p",null,"GreptimeDB is an open-source time-series database with a special focus on scalability, analytical capabilities and efficiency.   "),(0,a.yg)("p",null,"It's designed to work on infrastructure of the cloud era, and users benefit from its elasticity and commodity storage."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u26a0\ufe0f If you do not configure a time series database, only the last hour of historical data is retained."),"  "),(0,a.yg)("h3",{id:"install-greptimedb-via-docker"},"Install GreptimeDB via Docker"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Refer to the official website ",(0,a.yg)("a",{parentName:"p",href:"https://docs.greptime.com/getting-started/overview"},"installation tutorial"),"  "),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"Download and install Docker environment",(0,a.yg)("br",{parentName:"li"}),"Docker tools download refer to ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker official document"),".",(0,a.yg)("br",{parentName:"li"}),"After the installation you can check if the Docker version normally output at the terminal.",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,a.yg)("li",{parentName:"ol"},"Install GreptimeDB with Docker   "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -p 4000-4004:4000-4004 \\\n    -p 4242:4242 -v /opt/greptimedb:/tmp/greptimedb \\\n    --name greptime \\\n    greptime/greptimedb standalone start \\\n    --http-addr 0.0.0.0:4000 \\\n    --rpc-addr 0.0.0.0:4001 \\\n")),(0,a.yg)("p",null,"   ",(0,a.yg)("inlineCode",{parentName:"p"},"-v /opt/greptimedb:/tmp/greptimedb")," is local persistent mount of greptimedb data directory. ",(0,a.yg)("inlineCode",{parentName:"p"},"/opt/greptimedb")," should be replaced with the actual local directory.\nuse",(0,a.yg)("inlineCode",{parentName:"p"},"$ docker ps")," to check if the database started successfully"),(0,a.yg)("h3",{id:"configure-the-database-connection-in-hertzbeat-applicationyml-configuration-file"},"Configure the database connection in hertzbeat ",(0,a.yg)("inlineCode",{parentName:"h3"},"application.yml")," configuration file"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Configure HertzBeat's configuration file",(0,a.yg)("br",{parentName:"li"}),"Modify ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," configuration file ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),(0,a.yg)("br",{parentName:"li"}),"Note\u26a0\ufe0fThe docker container way need to mount application.yml file locally, while you can use installation package way to unzip and modify ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml"),(0,a.yg)("br",{parentName:"li"}),"Replace ",(0,a.yg)("inlineCode",{parentName:"li"},"warehouse.store.greptime")," data source parameters, URL account and password.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n   store:\n      # disable jpa\n      jpa:\n         enabled: false\n      # enable greptime   \n      greptime:\n         enabled: true\n         endpoint: localhost:4001\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Restart HertzBeat")),(0,a.yg)("h3",{id:"faq"},"FAQ"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Do both the time series databases Greptime, IoTDB or TDengine need to be configured? Can they both be used?")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"You don't need to configure all of them, you can choose one of them. Use the enable parameter to control whether it is used or not. You can also install and configure neither, which only affects the historical chart data.")))}m.isMDXComponent=!0}}]);