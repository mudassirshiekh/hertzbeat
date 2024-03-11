"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[8525],{15680:(e,r,t)=>{t.d(r,{xA:()=>g,yg:()=>u});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):m(m({},r),e)),t},g=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),l=p(t),u=n,h=l["".concat(i,".").concat(u)]||l[u]||c[u]||o;return t?a.createElement(h,m(m({ref:r},g),{},{components:t})):a.createElement(h,m({ref:r},g))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,m=new Array(o);m[0]=l;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,m[1]=s;for(var p=2;p<o;p++)m[p]=t[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},69790:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),n=(t(96540),t(15680));const o={id:"template",title:"Monitoring Template Here",sidebar_label:"Monitoring Template"},m=void 0,s={unversionedId:"template",id:"version-v1.4.x/template",title:"Monitoring Template Here",description:"Hertzbeat is an open source, real-time monitoring tool with custom-monitor and agentLess.",source:"@site/versioned_docs/version-v1.4.x/template.md",sourceDirName:".",slug:"/template",permalink:"/docs/v1.4.x/template",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/template.md",tags:[],version:"v1.4.x",frontMatter:{id:"template",title:"Monitoring Template Here",sidebar_label:"Monitoring Template"},sidebar:"docs",previous:{title:"Push Style Custom Monitoring",permalink:"/docs/v1.4.x/advanced/extend-push"},next:{title:"Help Center",permalink:"/docs/v1.4.x/help/guide"}},i={},p=[{value:"Application service monitoring",id:"application-service-monitoring",level:3},{value:"Database monitoring",id:"database-monitoring",level:3},{value:"Operating system monitoring",id:"operating-system-monitoring",level:3},{value:"Middleware monitoring",id:"middleware-monitoring",level:3},{value:"CloudNative monitoring",id:"cloudnative-monitoring",level:3},{value:"Network monitoring",id:"network-monitoring",level:3}],g={toc:p};function c(e){let{components:r,...o}=e;return(0,n.yg)("wrapper",(0,a.A)({},g,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Hertzbeat is an open source, real-time monitoring tool with custom-monitor and agentLess.  ")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"We make protocols such as ",(0,n.yg)("inlineCode",{parentName:"p"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," configurable, and you only need to configure ",(0,n.yg)("inlineCode",{parentName:"p"},"YML")," online to collect any metrics you want.",(0,n.yg)("br",{parentName:"p"}),"\n","Do you believe that you can immediately adapt a new monitoring type such as K8s or Docker just by configuring online?")),(0,n.yg)("p",null,"Here is the architecture.  "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"hertzBeat",src:t(72428).A,width:"2814",height:"1772"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"We define all monitoring collection types (mysql, website, jvm, k8s) as yml templates, and users can import these templates into the hertzbeat system to support corresponding types of monitoring, which is very convenient!")," "),(0,n.yg)("p",null,(0,n.yg)("img",{src:t(35008).A,width:"4064",height:"2166"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Welcome everyone to contribute your customized general monitoring type YML template during use. The available templates are as follows:")),(0,n.yg)("h3",{id:"application-service-monitoring"},"Application service monitoring"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-website.yml"},"Website monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-api.yml"},"HTTP API")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ping.yml"},"PING Connectivity")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-port.yml"},"Port Telnet")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-fullsite.yml"},"Full site monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ssl_cert.yml"},"SSL Cert monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-jvm.yml"},"JVM monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-springboot2.yml"},"SpringBoot2.0")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-springboot3.yml"},"SpringBoot3.0")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ftp.yml"},"FTP Server")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"database-monitoring"},"Database monitoring"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-mysql.yml"},"MYSQL database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-mariadb.yml"},"MariaDB database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-postgresql.yml"},"PostgreSQL database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-sqlserver.yml"},"SqlServer database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-oracle.yml"},"Oracle database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-dm.yml"},"DM database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-opengauss.yml"},"OpenGauss database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-iotdb.yml"},"IoTDB database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-elasticsearch.yml"},"ElasticSearch database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-mongodb.yml"},"MongoDB database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-clickhouse.yml"},"ClickHouse database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redis.yml"},"Redis database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redis_sentinel.yml"},"Redis Sentinel database monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redis_cluster.yml"},"Redis Cluster database monitoring")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"operating-system-monitoring"},"Operating system monitoring"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-linux.yml"},"Linux operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-windows.yml"},"Windows operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-ubuntu.yml"},"Ubuntu operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-centos.yml"},"Centos operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-euleros.yml"},"EulerOS operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-coreos.yml"},"Fedora CoreOS operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-opensuse.yml"},"OpenSUSE operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-rockylinux.yml"},"Rocky Linux operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-redhat.yml"},"Red Hat operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-freebsd.yml"},"FreeBSD operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-almalinux.yml"},"AlmaLinux operating system monitoring")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-debian.yml"},"Debian operating system monitoring")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"middleware-monitoring"},"Middleware monitoring"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-zookeeper.yml"},"Zookeeper")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-kafka.yml"},"Kafka")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-tomcat.yml"},"Tomcat")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-shenyu.yml"},"ShenYu")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-dynamic_tp.yml"},"DynamicTp")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-rabbitmq.yml"},"RabbitMQ")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-activemq.yml"},"ActiveMQ")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-jetty.yml"},"Jetty")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-flink.yml"},"Flink")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-nacos.yml"},"Nacos")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"cloudnative-monitoring"},"CloudNative monitoring"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-docker.yml"},"Docker")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-kubernetes.yml"},"Kubernetes")," ",(0,n.yg)("br",null)),(0,n.yg)("h3",{id:"network-monitoring"},"Network monitoring"),(0,n.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-cisco_switch.yml"},"CiscoSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-hpe_switch.yml"},"HpeSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-huawei_switch.yml"},"HuaweiSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-tplink_switch.yml"},"TpLinkSwitch")," ",(0,n.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/dromara/hertzbeat/master/manager/src/main/resources/define/app-h3c_switch.yml"},"H3CSwitch")," ",(0,n.yg)("br",null)),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Have Fun!")))}c.isMDXComponent=!0},35008:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"},72428:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"}}]);