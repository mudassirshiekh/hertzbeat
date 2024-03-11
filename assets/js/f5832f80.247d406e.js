"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[99419],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=g(n),s=a,y=d["".concat(p,".").concat(s)]||d[s]||c[s]||o;return n?r.createElement(y,l(l({ref:t},m),{},{components:n})):r.createElement(y,l({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var g=2;g<o;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const o={id:"springboot2",Title:"Monitoring SpringBoot 2.0",sidebar_label:"SpringBoot 2.0",keywords:["open source monitoring tool","open source springboot2 monitoring tool","monitoring springboot2 metrics"]},l=void 0,i={unversionedId:"help/springboot2",id:"version-v1.4.x/help/springboot2",title:"springboot2",description:"Collect and monitor the general performance metrics exposed by the SpringBoot 2.0 actuator.",source:"@site/versioned_docs/version-v1.4.x/help/springboot2.md",sourceDirName:"help",slug:"/help/springboot2",permalink:"/docs/v1.4.x/help/springboot2",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.4.x/help/springboot2.md",tags:[],version:"v1.4.x",frontMatter:{id:"springboot2",Title:"Monitoring SpringBoot 2.0",sidebar_label:"SpringBoot 2.0",keywords:["open source monitoring tool","open source springboot2 monitoring tool","monitoring springboot2 metrics"]},sidebar:"docs",previous:{title:"JVM Monitor",permalink:"/docs/v1.4.x/help/jvm"},next:{title:"DynamicTp Monitor",permalink:"/docs/v1.4.x/help/dynamic_tp"}},p={},g=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:2},{value:"Configure parameters",id:"configure-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"metric Collection: Health",id:"metric-collection-health",level:4},{value:"metric Collection: enviroment",id:"metric-collection-enviroment",level:4},{value:"metric Collection: threads",id:"metric-collection-threads",level:4},{value:"metric Collection: memory_used",id:"metric-collection-memory_used",level:4}],m={toc:g};function c(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect and monitor the general performance metrics exposed by the SpringBoot 2.0 actuator.")),(0,a.yg)("h2",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,a.yg)("p",null,"If you want to monitor information in 'SpringBoot' with this monitoring type, you need to integrate your SpringBoot application and enable the SpringBoot Actuator."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1\u3001Add POM .XML dependencies:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Modify the YML configuration exposure metric interface:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n    enabled-by-default: on\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Note: If your project also introduces authentication related dependencies, such as springboot security, the interfaces exposed by SpringBoot Actor may be intercepted. In this case, you need to manually release these interfaces. Taking springboot security as an example, you should add the following code to the Security Configuration class:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'public class SecurityConfig extends WebSecurityConfigurerAdapter{\n    @Override\n    protected void configure(HttpSecurity httpSecurity) throws Exception{\n        httpSecurity\n                // Configure the interfaces to be released -----------------------------------\n                .antMatchers("/actuator/**").permitAll()\n                .antMatchers("/metrics/**").permitAll()\n                .antMatchers("/trace").permitAll()\n                .antMatchers("/heapdump").permitAll()\n                // \u3002\u3002\u3002\n                // For other interfaces, please refer to: https://blog.csdn.net/JHIII/article/details/126601858 -----------------------------------\n    }\n}\n')),(0,a.yg)("h3",{id:"configure-parameters"},"Configure parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter Help describes the"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitor Host"),(0,a.yg)("td",{parentName:"tr",align:null},"THE MONITORED PEER IPV4, IPV6 OR DOMAIN NAME. Note \u26a0\ufe0f that there are no protocol headers (eg: https://, http://).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring Name"),(0,a.yg)("td",{parentName:"tr",align:null},"A name that identifies this monitoring that needs to be unique.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"The default port provided by the database is 8080.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Enable HTTPS"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to access the website through HTTPS, please note that \u26a0\ufe0f when HTTPS is enabled, the default port needs to be changed to 443")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The acquisition interval is"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitor the periodic data acquisition interval, in seconds, and the minimum interval that can be set is 30 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Whether to probe the"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to check the availability of the monitoring before adding a monitoring is successful, and the new modification operation")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description Comment"),(0,a.yg)("td",{parentName:"tr",align:null},"For more information identifying and describing the remarks for this monitoring, users can remark the information here")))),(0,a.yg)("h3",{id:"collect-metrics"},"Collect metrics"),(0,a.yg)("h4",{id:"metric-collection-health"},"metric Collection: Health"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"status"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Service health: UP, Down")))),(0,a.yg)("h4",{id:"metric-collection-enviroment"},"metric Collection: enviroment"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"profile"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The application runs profile: prod, dev, test")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Apply the exposed port")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"os"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Run the operating system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"os_arch"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Run the operating system architecture")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"jdk_vendor"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"jdk vendor")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"jvm_version"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"jvm version")))),(0,a.yg)("h4",{id:"metric-collection-threads"},"metric Collection: threads"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"state"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Thread status")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"This thread state corresponds to")))),(0,a.yg)("h4",{id:"metric-collection-memory_used"},"metric Collection: memory_used"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"space"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Memory space name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mem_used"),(0,a.yg)("td",{parentName:"tr",align:null},"MB"),(0,a.yg)("td",{parentName:"tr",align:null},"This space occupies a memory size of")))))}c.isMDXComponent=!0}}]);