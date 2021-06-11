(self.webpackChunk=self.webpackChunk||[]).push([[54426],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76488:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>p,toc:()=>s,default:()=>u});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"migration-setup",title:"Migration Setup",original_id:"migration-setup"},p={unversionedId:"migration-setup",id:"version-v7.0.0/migration-setup",isDocsHomePage:!1,title:"Migration Setup",description:"Installation",source:"@site/versioned_docs/version-v7.0.0/Modern-MigrationSetup.md",sourceDirName:".",slug:"/migration-setup",permalink:"/docs/v7.0.0/migration-setup",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v7.0.0/Modern-MigrationSetup.md",version:"v7.0.0",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1623450515,formattedLastUpdatedAt:"6/11/2021",frontMatter:{id:"migration-setup",title:"Migration Setup",original_id:"migration-setup"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Set up babel-plugin-relay for Relay Classic",id:"set-up-babel-plugin-relay-for-relay-classic",children:[]},{value:"Set up babel-plugin-relay for &quot;compatibility mode&quot;",id:"set-up-babel-plugin-relay-for-compatibility-mode",children:[]},{value:"Additional Options",id:"additional-options",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Follow the installation instructions from the ",(0,i.kt)("a",{parentName:"p",href:"./installation-and-setup"},"Installation and Setup")," guide."),(0,i.kt)("h2",{id:"set-up-babel-plugin-relay-for-relay-classic"},"Set up babel-plugin-relay for Relay Classic"),(0,i.kt)("p",null,"With some additional configuration, the ",(0,i.kt)("inlineCode",{parentName:"p"},'"relay"')," babel plugin can also translate\nRelay Classic ",(0,i.kt)("inlineCode",{parentName:"p"},"Relay.QL")," literals. Most importantly, include a reference to your GraphQL Schema as either a json file or graphql schema file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {"schema": "path/schema.graphql"}]\n  ]\n}\n')),(0,i.kt)("h2",{id:"set-up-babel-plugin-relay-for-compatibility-mode"},'Set up babel-plugin-relay for "',(0,i.kt)("a",{parentName:"h2",href:"./relay-compat"},"compatibility mode"),'"'),(0,i.kt)("p",null,"When incrementally converting a Relay Classic app to Relay Modern, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql"),"\nliterals can be translated to be usable by ",(0,i.kt)("em",{parentName:"p"},"both")," runtimes if configured to use\ncompatibility mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {"compat": true, "schema": "path/schema.graphql"}]\n  ]\n}\n')),(0,i.kt)("h2",{id:"additional-options"},"Additional Options"),(0,i.kt)("p",null,"The Relay Classic and Relay Compat modes produce generated content inline and may\ncatch and log any detected GraphQL validation errors, leaving those errors to be\nthrown at runtime."),(0,i.kt)("p",null,"When compiling code for production deployment, the plugin can be configured to immediately throw upon encountering a validation problem. The plugin can be further customized for different environments with the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    ["relay", {\n      "compat": true,\n      "schema": "path/schema.graphql",\n    }]\n  ]\n}\n')))}u.isMDXComponent=!0}}]);