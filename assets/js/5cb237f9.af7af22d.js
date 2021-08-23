"use strict";(self.webpackChunksmartdialog=self.webpackChunksmartdialog||[]).push([[538],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,slug:"/"},c="Create a Page",u={unversionedId:"create-a-page",id:"create-a-page",isDocsHomePage:!1,title:"Create a Page",description:"Technologies",source:"@site/user-manual/create-a-page.md",sourceDirName:".",slug:"/",permalink:"/vbee-docs/next/",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Create a Document",permalink:"/vbee-docs/next/create-a-document"}},p=[{value:"Technologies",id:"technologies",children:[]},{value:"Setup",id:"setup",children:[]}],s={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-page"},"Create a Page"),(0,o.kt)("h2",{id:"technologies"},"Technologies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NodeJS (ExpressJS)"),(0,o.kt)("li",{parentName:"ul"},"MongoDB"),(0,o.kt)("li",{parentName:"ul"},"Redis"),(0,o.kt)("li",{parentName:"ul"},"PM2"),(0,o.kt)("li",{parentName:"ul"},"Elasticsearch")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone file env and rename to .env. Then add configuration to .env file"),(0,o.kt)("li",{parentName:"ol"},"Install packages")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm install\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Deploy")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm run deploy\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Dev")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm run dev\n")),(0,o.kt)("p",null,"!!"))}f.isMDXComponent=!0}}]);