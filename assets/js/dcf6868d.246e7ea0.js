"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[6060],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(t),d=i,c=k["".concat(o,".").concat(d)]||k[d]||u[d]||r;return t?a.createElement(c,l(l({ref:n},m),{},{components:t})):a.createElement(c,l({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4925:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],p={},o="\u4ee3\u7801\u68c0\u67e5\u4e0e\u683c\u5f0f\u5316",s={unversionedId:"infra/ESLint-and-Prettier",id:"infra/ESLint-and-Prettier",title:"\u4ee3\u7801\u68c0\u67e5\u4e0e\u683c\u5f0f\u5316",description:"ESLint",source:"@site/docs/infra/ESLint-and-Prettier.md",sourceDirName:"infra",slug:"/infra/ESLint-and-Prettier",permalink:"/docs/infra/ESLint-and-Prettier",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/infra/ESLint-and-Prettier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6301\u7eed\u96c6\u6210(CI)",permalink:"/docs/infra/CI"},next:{title:"\u6d4f\u89c8\u5668\u76f8\u5173",permalink:"/docs/browser"}},m={},u=[{value:"ESLint",id:"eslint",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"extends",id:"extends",level:5},{value:"parser",id:"parser",level:5},{value:"parserOptions",id:"parseroptions",level:5},{value:"ecmaVersion",id:"ecmaversion",level:6},{value:"sourceType",id:"sourcetype",level:6},{value:"ecmaFeature",id:"ecmafeature",level:6},{value:"env",id:"env",level:5},{value:"browser",id:"browser",level:6},{value:"node",id:"node",level:6},{value:"commonjs",id:"commonjs",level:6},{value:"es2021",id:"es2021",level:6},{value:"globals",id:"globals",level:5},{value:"plugins",id:"plugins",level:5},{value:"@typescript-eslint/eslint-plugin",id:"typescript-eslinteslint-plugin",level:6},{value:"eslint-plugin-react",id:"eslint-plugin-react",level:6},{value:"eslint-plugin-react-hooks",id:"eslint-plugin-react-hooks",level:6},{value:"eslint-plugin-prettier",id:"eslint-plugin-prettier",level:6},{value:"rules",id:"rules",level:5},{value:"Prettier",id:"prettier",level:2},{value:"ESLint With Prettier",id:"eslint-with-prettier",level:2},{value:"CommitLint",id:"commitlint",level:2},{value:"Husky",id:"husky",level:2},{value:"Lint-Staged",id:"lint-staged",level:2}],k={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ee3\u7801\u68c0\u67e5\u4e0e\u683c\u5f0f\u5316"},"\u4ee3\u7801\u68c0\u67e5\u4e0e\u683c\u5f0f\u5316"),(0,r.kt)("h2",{id:"eslint"},"ESLint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i eslint -D\n\nnpx eslint --init # \u521b\u5efa\u914d\u7f6e\u6587\u4ef6\nnpx eslint index.js # \u53ea\u8f93\u51fa\u6b63\u786e\u683c\u5f0f\u7684\u6587\u4ef6\u5185\u5bb9\uff0c\u4e0d\u4fee\u6539\u6e90\u6587\u4ef6\nnpx eslint indexjs --fix # \u81ea\u52a8\u4fee\u590d\u8bed\u6cd5\u6216\u683c\u5f0f\u9519\u8bef\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),"\u793e\u533a\u5b58\u5728\u8bf8\u591a\u7b2c\u4e09\u65b9\u914d\u7f6e\u6587\u4ef6\uff08\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-config-"),"\u5f00\u5934\uff09\u548c\u63d2\u4ef6\uff08\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-plugin-"),"\u5f00\u5934\uff09\u4ee5\u4f9b\u6211\u4eec\u4f7f\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"extends"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),"\u5b57\u6bb5\u4e2d\u5f15\u7528\u8fd9\u4e9b\u7c7b\u5e93\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u7701\u7565\u5bf9\u5e94\u7684\u524d\u7f00\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u4f5c\u7528\u57df\u6a21\u5757\uff0c\u89c4\u5219\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["@akara/test", "prettier"], // \u7b49\u4e8e@akara/eslint-config-test eslint-config-prettier\n  "plugins": ["@akara"] // \u7b49\u4e8e@akara/eslint-plugin\n}\n'))),(0,r.kt)("h5",{id:"extends"},(0,r.kt)("a",{parentName:"h5",href:"https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings"},"extends")),(0,r.kt)("p",null,"\u6709\u51e0\u79cd\u5e38\u89c1\u7684\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u63d0\u4f9b\u7ed9\u6211\u4eec\u7ee7\u627f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint"),"\u6838\u5fc3\u89c4\u5219",(0,r.kt)("inlineCode",{parentName:"li"},"eslint:recommended"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"eslint:all")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint-config-*"),"\u5bfc\u51fa\u7684\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint-plugin-*"),"\u5bfc\u51fa\u7684\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "eslint:recommended",\n    "plugin:@typescript-eslint/recommended", // @typescript-eslint/eslint-plugin\n    "prettier" // eslint-config-prettier\n  ]\n}\n')),(0,r.kt)("h5",{id:"parser"},"parser"),(0,r.kt)("p",null,"\u5982\u540c\u6211\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"\u7f16\u8bd1\u5668"),"\u4e00\u8282\u6240\u8ff0\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),"\u9ed8\u8ba4\u89e3\u6790\u5668",(0,r.kt)("inlineCode",{parentName:"p"},"espree"),"\u5e76\u4e0d\u652f\u6301\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"TS"),"\u4ee3\u7801\u7684\u89e3\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/parser"),"\u8fdb\u884c\u66ff\u4ee3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    "extends": [\n        "eslint:recommended",\n        "plugin:@typescript-eslint/recommended"\n    ],\n    "parser": "@typescript-eslint/parser",\n    "plugins": [\n        "@typescript-eslint"\n    ],\n};\n\n')),(0,r.kt)("h5",{id:"parseroptions"},"parserOptions"),(0,r.kt)("p",null,"\u89e3\u6790\u5668\u7684\u9009\u9879\uff0c\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"espree"),"\u7684\u9009\u9879\u3002\u5f53\u6211\u4eec\u4f7f\u7528\u5176\u4ed6\u89e3\u6790\u5668\u65f6\uff0c\u89e3\u6790\u5668\u9009\u9879\u7684\u5c5e\u6027\u53ef\u80fd\u6709\u4e00\u4e9b\u51fa\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parserOptions": {\n    "ecmaVersion": 12,\n    "sourceType": "module",\n    "ecmaFeature": {\n      "jsx": true\n    }\n  }\n}\n')),(0,r.kt)("h6",{id:"ecmaversion"},"ecmaVersion"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},' set to 3, 5 (default), 6, 7, 8, 9, 10, 11, or 12 to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), or 2021 (same as 12) to use the year-based naming. You can also set "latest" to use the most recently supported version.')),(0,r.kt)("h6",{id:"sourcetype"},"sourceType"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"script"')," (default) or ",(0,r.kt)("inlineCode",{parentName:"p"},'"module"')," if your code is in ECMAScript modules.")),(0,r.kt)("p",null,"\u4ee3\u7801\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"export"),"\u65f6\u9700\u8981\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"module")),(0,r.kt)("h6",{id:"ecmafeature"},"ecmaFeature"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," an object indicating which additional language features you'd like to use:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"globalReturn")," - allow ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," statements in the global scope"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"impliedStrict")," - enable global ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"strict mode")," (if ",(0,r.kt)("inlineCode",{parentName:"li"},"ecmaVersion")," is 5 or greater)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsx")," - enable ",(0,r.kt)("a",{parentName:"li",href:"https://facebook.github.io/jsx/"},"JSX")))),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5148\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-plugin-react"),"\uff0c\u518d\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"JSX"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "parserOptions": {\n        "ecmaFeature": {\n            "jsx": true\n        }\n    },\n    "extends": [\n        "plugin:react/recommended"\n    ],\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you do not use a preset you will need to specify individual rules and add extra configuration."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parserOptions": {\n    "ecmaFeatures": {\n      "jsx": true\n    }\n  },\n  "plugins": [\n    "react"\n  ],\n  "rules": {\n    // \u5b9a\u5236\u89c4\u5219\n  }\n}\n'))),(0,r.kt)("h5",{id:"env"},"env"),(0,r.kt)("p",null,"\u652f\u6301\u4e0d\u540c\u73af\u5883\u7684\u5185\u7f6e\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "env": {\n    "browser": true,\n    "commonjs": true,\n    "es2021": true\n  }\n}\n')),(0,r.kt)("h6",{id:"browser"},"browser"),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"\u7b49\u6d4f\u89c8\u5668\u73af\u5883\u53d8\u91cf"),(0,r.kt)("h6",{id:"node"},"node"),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"process"),"\u7b49node\u73af\u5883\u53d8\u91cf"),(0,r.kt)("h6",{id:"commonjs"},"commonjs"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).")),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"module"),"\u53d8\u91cf"),(0,r.kt)("h6",{id:"es2021"},"es2021"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "env": {\n    "es2021": true\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"supporting ES6 syntax is not the same as supporting new ES6 globals (e.g., new types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"). For ES6 syntax, use ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "parserOptions": { "ecmaVersion": 6 } }'),"; for new ES6 global variables, use ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "env": { "es6": true } }'),". ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "env": { "es6": true } }')," enables ES6 syntax automatically, but ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "parserOptions": { "ecmaVersion": 6 } }')," does not enable ES6 globals automatically.")),(0,r.kt)("h5",{id:"globals"},"globals"),(0,r.kt)("p",null,"\u6307\u5b9a\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "globals": {\n        "Promise": \'off\'\n  },\n}\n')),(0,r.kt)("h5",{id:"plugins"},"plugins"),(0,r.kt)("p",null,"\u5217\u51fa\u51e0\u4e2a\u5e38\u89c1\u63d2\u4ef6\u3002"),(0,r.kt)("h6",{id:"typescript-eslinteslint-plugin"},"@typescript-eslint/eslint-plugin"),(0,r.kt)("h6",{id:"eslint-plugin-react"},"eslint-plugin-react"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ecmaFeature.JSX"),"\uff0c\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"react"),"\u4ee3\u7801\u63d0\u793a"),(0,r.kt)("h6",{id:"eslint-plugin-react-hooks"},"eslint-plugin-react-hooks"),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u63d0\u793a\uff0c\u6bd4\u5982\u63d0\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u51fd\u6570\u4f9d\u8d56\u9879"),(0,r.kt)("h6",{id:"eslint-plugin-prettier"},"eslint-plugin-prettier"),(0,r.kt)("p",null,"\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"prettier"),"\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),"\u7684\u683c\u5f0f\u5316\u5de5\u5177"),(0,r.kt)("h5",{id:"rules"},"rules"),(0,r.kt)("p",null,"\u5b9a\u4e49\u89c4\u5219\uff0c\u6bcf\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),"\u89c4\u5219\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"off"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\u3002\u5206\u522b\u662f\uff1a\u5173\u95ed\uff0c\u8b66\u544a\uff0c\u62a5\u9519\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    "rules": {\n        "quotes": ["warn", "double"], // \u4e0d\u662f\u53cc\u5f15\u53f7\u5c31\u63d0\u9192\n        "semi": ["error", "always"] // \u4e0d\u5e26\u5206\u53f7\u5c31\u62a5\u9519 \n    }\n}\n')),(0,r.kt)("h2",{id:"prettier"},"Prettier"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i prettier -D\nprettier filename # \u53ea\u8f93\u51fa\u6b63\u786e\u683c\u5f0f\u7684\u6587\u4ef6\u5185\u5bb9\uff0c\u4e0d\u4fee\u6539\u6e90\u6587\u4ef6\nprettier filename --check # \u68c0\u67e5\u6587\u4ef6\u683c\u5f0f\u662f\u5426\u9519\u8bef\nprettier filename --write # \u683c\u5f0f\u5316\u6e90\u6587\u4ef6\n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"prettier"),"\u5e76\u4e0d\u5f3a\u5236\u8981\u6c42\u5b58\u5728\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0d\u8fc7\u4e3a\u4e86\u81ea\u5b9a\u4e49\u6211\u4eec\u90fd\u4f1a\u521b\u5efa\u4e2a\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// prettier.config.js or .prettierrc.js\nmodule.exports = {\n   // \u7ed3\u5c3e\u4e0d\u52a0\u5206\u53f7\n   semi: false,\n   // \u5b57\u7b26\u4e32\u5355\u5f15\u53f7\n   singleQuote: true,\n   useTabs: false,\n   // \u56db\u683c\u7f29\u8fdb\n   tabWidth: 4,\n   // \u7bad\u5934\u51fd\u6570 \u603b\u662f\u6709\u5c0f\u62ec\u53f7\n   arrowParens: 'always',\n   printWidth: 120,\n}\n")),(0,r.kt)("h2",{id:"eslint-with-prettier"},"ESLint With Prettier"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Prettier"),"\u7528\u4e8e\u5b9e\u73b0\u4ee3\u7801\u7684\u683c\u5f0f\u5316\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u867d\u7136\u4e3b\u8981\u529f\u80fd\u662f\u4ee3\u7801\u8d28\u91cf\u7684\u68c0\u67e5\uff0c\u4f46\u4e5f\u80fd\u591f\u5b9e\u73b0\u4ee3\u7801\u7684\u683c\u5f0f\u5316\u3002\u5982\u679c\u6211\u4eec\u9700\u8981\u540c\u65f6\u4f7f\u7528\u8fd9\u4e24\u4e2a\u5de5\u5177\uff0c\u90a3\u4e48\u5c31\u53ef\u80fd\u8981\u9762\u5bf9\u4e24\u4e2a\u5de5\u5177\u4ee3\u7801\u683c\u5f0f\u5316\u7684\u51b2\u7a81\uff0c\u73b0\u5728\u4e3b\u6d41\u7684\u601d\u60f3\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u53ea\u7528\u6765\u68c0\u67e5\u4ee3\u7801\u8d28\u91cf\uff0c\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Prettier"),"\u5b9e\u73b0\u683c\u5f0f\u5316\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u5e38\u6709\u4e24\u79cd\u529e\u6cd5\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u5de5\u5177\u7684\u6574\u5408\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6848\u4e00\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"prettier-eslint")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u65b9\u6848\u7684\u601d\u8def\u662f\u5148\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"prettier"),"\u683c\u5f0f\u5316\u6e90\u7801\uff0c\u518d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint --fix"),"\u6765\u5904\u7406\u4ee3\u7801\u3002\u90a3\u4e48\u8fd9\u4e2a\u65b9\u6848\u6700\u5927\u7684\u95ee\u9898\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Prettier"),"\u7684\u683c\u5f0f\u5316\u89c4\u5219\u4f1a\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"ESlint"),"\u8986\u76d6\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D prettier-eslint prettier-eslint-cli\nnpx prettier-eslint index.js\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6848\u4e8c\uff08\u63a8\u8350\uff09\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-config-prettier")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-plugin-prettier")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u65b9\u6848\u7684\u601d\u8def\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-config-prettier"),"\u5c4f\u853d",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u7684\u4ee3\u7801\u683c\u5f0f\u5316\u529f\u80fd\uff0c\u8ba9",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u4e13\u6ce8\u4e8e\u4ee3\u7801\u8d28\u91cf\u7684\u68c0\u67e5\uff0c\u540c\u65f6\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-plugin-prettier"),"\u8ba9",(0,r.kt)("inlineCode",{parentName:"p"},"prettier"),"\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u7684\u63d2\u4ef6\u6765\u5b9e\u73b0\u4ee3\u7801\u7684\u683c\u5f0f\u5316\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e24\u4e2a\u5de5\u5177\u80fd\u591f\u5206\u522b\u5355\u72ec\u4f7f\u7528\uff0c\u53ea\u662f\u4e3b\u6d41\u90fd\u4f1a\u642d\u914d\u7740\u4f7f\u7528")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D eslint-config-prettier eslint-plugin-prettier\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .eslintrc.json\n{\n    "extends": ["prettier"], // eslint-config-prettier\n    "plugins": ["prettier"], //  eslint-plugin-prettier\n    "rules": {\n        "prettier/prettier": "error" //  eslint-plugin-prettier\n    }\n}\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"extends"),"\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"prettier"),"\u9700\u8981\u653e\u7f6e\u5728\u6700\u540e")),(0,r.kt)("p",{parentName:"li"},"\u6216\u8005\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-plugin-prettier"),"\u63d0\u4f9b\u7684\u4e00\u79cd\u4fbf\u6377\u5199\u6cd5\uff0c\u6548\u679c\u51e0\u4e4e\u7b49\u540c\u4e8e\u4e0a\u8ff0\u7684\u914d\u7f6e\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .eslintrc.json\n{\n  "extends": ["plugin:prettier/recommended"]\n}\n')),(0,r.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc.js"),"\u4e2d\u914d\u7f6e\u8bed\u6cd5\u89c4\u5219\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},".prettierrc.js"),"\u4e2d\u914d\u7f6e\u4ee3\u7801\u683c\u5f0f\u5316\u89c4\u5219\u4e86\u3002"),(0,r.kt)("p",{parentName:"li"},"\u7531\u4e8e\u6211\u4eec\u5b9e\u9645\u4e0a\u4f7f\u7528\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),"\u5b9e\u73b0\u8bed\u6cd5\u68c0\u67e5\u548c\u683c\u5f0f\u5316\uff08\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"prettier"),"\u4e3a\u63d2\u4ef6\u5b9e\u73b0\uff09\uff0c\u6211\u4eec\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"VSCode"),"\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u6269\u5c55\u4e5f\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u63d0\u793a"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u683c\u5f0f\u5316\u529f\u80fd"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .vscode/setting.json\n"editor.codeActionsOnSave": {\n    "source.fixAll": true,\n},\n')))),(0,r.kt)("h2",{id:"commitlint"},"CommitLint"),(0,r.kt)("p",null,"\u5728\u6210\u719f\u7684\u9879\u76ee\u4e2d\u6211\u4eec\u9700\u8981\u4fdd\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"commit message"),"\u7684\u6574\u9f50\u548c\u4e00\u81f4\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"commitlint"),"\u53ef\u4ee5\u5bf9\u5176\u5185\u5bb9\u8fdb\u884c\u68c0\u67e5\u548c\u7ea6\u675f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D @commitlint/cli @commitlint/config-conventional\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// commitlint.config.js\nmodule.exports = {\n    extends: ['@commitlint/config-conventional']\n}\n")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5",(0,r.kt)("inlineCode",{parentName:"p"},"commitlint"),"\u4f1a\u5bf9\u6807\u51c6\u8f93\u5165\u6d41\u8fdb\u884c\u68c0\u67e5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'chore: nothing' | npx commitlint\n")),(0,r.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4f1a\u642d\u914d",(0,r.kt)("inlineCode",{parentName:"p"},"husky"),"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CommitLint"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'\ngit commit -m 'chore: nothing'\n")),(0,r.kt)("p",null,"\u5e38\u89c1\u7684\u63d0\u4ea4\u7c7b\u578b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[\n  'build', // \u6784\u5efa\u76f8\u5173\n  'chore', // \u7410\u4e8b\n  'ci', // ci\u76f8\u5173\n  'docs', // \u6587\u6863\u76f8\u5173\n  'feat', // \u65b0\u7279\u6027\n  'fix', // \u4fee\u590dbug\n  'perf', // \u6027\u80fd\u76f8\u5173\n  'refactor', // \u91cd\u6784\n  'revert', // \u56de\u9000\n  'style', // \u4ee3\u7801\u6837\u5f0f\u76f8\u5173\n  'test' // \u6d4b\u8bd5\u76f8\u5173\n]\n")),(0,r.kt)("h2",{id:"husky"},"Husky"),(0,r.kt)("p",null,"\u5f53\u9879\u76ee\u4e2d\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"prettier"),"\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u5b89\u88c5VSCode\u63d2\u4ef6\u5373\u53ef\u505a\u5230\u5bf9\u4ee3\u7801\u9519\u8bef\u7684",(0,r.kt)("strong",{parentName:"p"},"\u68c0\u67e5"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u683c\u5f0f\u5316"),"\uff0c\u9664\u6b64\u4e4b\u5916\u6211\u4eec\u8fd8\u5e0c\u671b\u80fd\u5728\u4ee3\u7801\u63d0\u4ea4\u4e4b\u524d\u505a\u4e00\u4e9b",(0,r.kt)("strong",{parentName:"p"},"\u68c0\u67e5"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u683c\u5f0f\u5316"),"\uff0c\u6216\u8005\u662f\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"commit message"),"\u683c\u5f0f\u8fdb\u884c",(0,r.kt)("strong",{parentName:"p"},"\u68c0\u67e5"),"\uff0c\u9632\u6b62\u610f\u5916\u7684\u63d0\u4ea4\u51fa\u73b0\u3002"),(0,r.kt)("p",null,"\u4e8b\u5b9e\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"\u81ea\u5e26\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"hooks"),"\u529f\u80fd\uff0c\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},".git/hook/pre-commit"),"\u5e76\u7f16\u5199\u811a\u672c\u5185\u5bb9\uff0c\u5373\u53ef\u505a\u5230\u5728\u4ee3\u7801\u63d0\u4ea4\u524d\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u3002\u4e0d\u8fc7\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},".git"),"\u6587\u4ef6\u5939\u4e0d\u4f1a\u88ab\u63d0\u4ea4\u8fdb\u4ee3\u7801\u4ed3\u5e93\uff0c\u5728\u591a\u4eba\u9879\u76ee\u534f\u4f5c\u4e0a\u8fd9\u6210\u4e3a\u4e86\u4e00\u4e2a\u75db\u70b9\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Husky"),"\u5e93\u6765\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"git hook")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm install husky -D\nnpx husky install # \u4f7f\u7528.husky\u4f5c\u4e3agit hooks\u76ee\u5f55\nnpm set-script prepare "husky install" # \u591a\u4eba\u9879\u76ee\u4e2d\u9ed8\u8ba4\u542f\u7528husky\nnpx husky add .husky/pre-commit "eslint --fix"\nnpx husky add .husky/commit-msg "commitlint"\n')),(0,r.kt)("p",null,"\u901a\u5e38",(0,r.kt)("inlineCode",{parentName:"p"},"git hook"),"\u7684\u914d\u7f6e\u90fd\u4f1a\u88ab\u653e\u8fdb",(0,r.kt)("inlineCode",{parentName:"p"},".git/hooks"),"\u6587\u4ef6\u5939\u5185\u90e8\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"\u5df2\u7ecf\u5f15\u5165\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"core/hooksPath"),"\uff0c\u5373\u80fd\u591f\u8ba9\u6211\u4eec\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"hooks"),"\u5b58\u653e\u7684\u76ee\u5f55\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"npx husky install"),"\u4f1a\u5728\u9879\u76ee\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},".husky"),"\u76ee\u5f55\u6765\u5b58\u653e",(0,r.kt)("inlineCode",{parentName:"p"},"hooks"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8001\u7248\u672c\u7684Husky\u662f\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},".huskyrc"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u8fdb\u884c\u914d\u7f6e\uff0c\u800c\u73b0\u5728\u5df2\u7ecf\u653e\u5f03\u4e86\u8fd9\u79cd\u505a\u6cd5 ",(0,r.kt)("a",{parentName:"p",href:"https://blog.typicode.com/husky-git-hooks-javascript-config/"},"Why husky has dropped conventional JS config"))),(0,r.kt)("h2",{id:"lint-staged"},"Lint-Staged"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Husky"),"\u6211\u4eec\u80fd\u591f\u5728\u63d0\u4ea4\u4ee3\u7801\u524d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u5bf9\u4ee3\u7801\u8fdb\u884c\u68c0\u67e5\uff0c\u4f46\u6b64\u65f6\u6211\u4eec\u9700\u8981\u624b\u52a8\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u4f5c\u7528\u7684\u6587\u4ef6\uff0c\u4f46\u5176\u5b9e\u6211\u4eec\u77e5\u9053\u6211\u4eec\u53ea\u60f3\u8981\u68c0\u67e5\u5df2\u7ecf",(0,r.kt)("inlineCode",{parentName:"p"},"staged"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"git add"),"\uff09\u7684\u4ee3\u7801\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Lint-Staged"),"\u5e93\u53ef\u4ee5\u8f7b\u677e\u7684\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "husky": {\n    "hooks": {\n      "pre-commit": "lint-staged"\n    }\n  },\n  "lint-staged": {\n    "*.js": "eslint --cache --fix",\n    "*.{js,css,md}": "prettier --write"\n  }\n}\n')))}d.isMDXComponent=!0}}]);