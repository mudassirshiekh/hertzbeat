"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[29303],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),u=n,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const o={id:"postgresql-change",title:"Use PostgreSQL Replace H2 Database to Store Metadata(Optional)",sidebar_label:"Use PostgreSQL Instead of H2"},i=void 0,l={unversionedId:"start/postgresql-change",id:"version-v1.4.x/start/postgresql-change",title:"Use PostgreSQL Replace H2 Database to Store Metadata(Optional)",description:"PostgreSQL is a RDBMS emphasizing extensibility and SQL compliance. In addition to default built-in H2 database, HertzBeat allow you to use PostgreSQL to store structured relational data such as monitoring information, alarm information and configuration information.",source:"@site/versioned_docs/version-v1.4.x/start/postgresql-change.md",sourceDirName:"start",slug:"/start/postgresql-change",permalink:"/docs/v1.4.x/start/postgresql-change",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/start/postgresql-change.md",tags:[],version:"v1.4.x",frontMatter:{id:"postgresql-change",title:"Use PostgreSQL Replace H2 Database to Store Metadata(Optional)",sidebar_label:"Use PostgreSQL Instead of H2"},sidebar:"docs",previous:{title:"Use MYSQL Instead of H2",permalink:"/docs/v1.4.x/start/mysql-change"},next:{title:"Update Account",permalink:"/docs/v1.4.x/start/account-modify"}},s={},c=[{value:"Install PostgreSQL via Docker",id:"install-postgresql-via-docker",level:3},{value:"Database creation",id:"database-creation",level:3},{value:"Modify hertzbeat&#39;s configuration file application.yml and switch data source",id:"modify-hertzbeats-configuration-file-applicationyml-and-switch-data-source",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"PostgreSQL is a RDBMS emphasizing extensibility and SQL compliance. In addition to default built-in H2 database, HertzBeat allow you to use PostgreSQL to store structured relational data such as monitoring information, alarm information and configuration information."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"If you have the PostgreSQL environment, can be directly to database creation step.")),(0,n.yg)("h3",{id:"install-postgresql-via-docker"},"Install PostgreSQL via Docker"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Download and install the Docker environment",(0,n.yg)("br",{parentName:"li"}),"Docker tools download refer to ",(0,n.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker official document"),"\u3002\nAfter the installation you can check if the Docker version normally output at the terminal.",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,n.yg)("li",{parentName:"ol"},"Install PostgreSQL with Docker",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"$ docker run -d --name postgresql -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=123456 -e TZ=Asia/Shanghai postgresql:15       \n")),"use",(0,n.yg)("inlineCode",{parentName:"li"},"$ docker ps"),"to check if the database started successfully"),(0,n.yg)("li",{parentName:"ol"},"Create database in container manually or with ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/tree/master/script/docker-compose/hertzbeat-postgresql-iotdb/conf/sql/schema.sql"},"script"),".")),(0,n.yg)("h3",{id:"database-creation"},"Database creation"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Enter postgreSQL or use the client to connect postgreSQL service   ",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"su - postgres\npsql\n"))),(0,n.yg)("li",{parentName:"ol"},"Create database named hertzbeat",(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("inlineCode",{parentName:"li"},"CREATE DATABASE hertzbeat;")),(0,n.yg)("li",{parentName:"ol"},"Check if hertzbeat database has been successfully created",(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("inlineCode",{parentName:"li"},"\\l"))),(0,n.yg)("h3",{id:"modify-hertzbeats-configuration-file-applicationyml-and-switch-data-source"},"Modify hertzbeat's configuration file application.yml and switch data source"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Configure HertzBeat's configuration file\nModify ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," configuration file\nNote\u26a0\ufe0fThe docker container way need to mount application.yml file locally, while you can use installation package way to unzip and modify ",(0,n.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml"),(0,n.yg)("br",{parentName:"li"}),"Replace ",(0,n.yg)("inlineCode",{parentName:"li"},"spring.database")," data source parameters, URL account and password.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: 123456\n    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL\n")),(0,n.yg)("p",null,"Specific replacement parameters are as follows and you need to configure account, ip, port according to the postgresql environment:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"spring:\n   config:\n      activate:\n         on-profile: prod\n   datasource:\n      driver-class-name: org.postgresql.Driver\n      username: root\n      password: 123456\n      url: jdbc:postgresql://127.0.0.1:5432/hertzbeat\n      hikari:\n         max-lifetime: 120000\n\n   jpa:\n      database: postgresql\n      hibernate:\n         ddl-auto: update\n      properties:\n         hibernate:\n            dialect: org.hibernate.dialect.PostgreSQLDialect\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Start HertzBeat  visit http://ip:1157/ on the browser  You can use HertzBeat monitoring alarm, default account and password are admin/hertzbeat")))}d.isMDXComponent=!0}}]);