(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),i=n(379),o=n(8206);e.exports=function(e){return r(e)||a(e)||i(e)||o()}},465:function(e,t,n){"use strict";var r=n(5893),a=n(1664);t.Z=function(e){var t=e.link,n=void 0!==t&&t,i=e.href,o=e.text,c=e.mode,s=void 0===c||c,l=e.w,u=void 0===l?"w-[150px]":l,d=e.onClick,p=void 0===d?void 0:d,f=[s?"bg-black hover:bg-white text-white hover:text-black hover:shadow-2xl":"bg-white hover:bg-black text-black hover:text-white","py-2 px-5 transition-colors duration-500","text-lg text-center","border border-black",u].join(" ");return n?(0,r.jsx)(a.default,{href:i,children:(0,r.jsx)("a",{className:f,children:o})}):p?(0,r.jsx)("button",{className:f,onClick:p,children:o}):(0,r.jsx)("a",{href:i,className:f,children:o})}},1333:function(e,t,n){"use strict";var r=n(5893),a=n(9008),i=n(2664);t.Z=function(e){var t=e.title,n=e.description,o=e.slug,c=void 0===o?"":o,s=e.image,l=void 0===s?"".concat(i.QK,"/social-media-card.png"):s,u=e.pubDate,d=e.cannonical,p=e.author,f=e.faviconImage,m=void 0===f?"".concat(i.QK,"/favicon-image.png"):f,h="".concat(null!==t&&void 0!==t?t:i.oc).trim(),x="".concat(null!==n&&void 0!==n?n:i.H6).trim();return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("title",{children:h}),(0,r.jsx)("meta",{name:"title",property:"title",content:h}),(0,r.jsx)("meta",{name:"og:title",property:"og:title",content:h}),(0,r.jsx)("meta",{name:"twitter:title",property:"twitter:title",content:h}),(0,r.jsx)("meta",{name:"description",property:"description",content:x}),(0,r.jsx)("meta",{name:"og:description",property:"og:description",content:x}),(0,r.jsx)("meta",{name:"twitter:description",property:"twitter:description",content:x}),(0,r.jsx)("meta",{name:"og:url",property:"og:url",content:"".concat(i.QK,"/").concat(c)}),(0,r.jsx)("meta",{name:"twitter:url",property:"twitter:url",content:"".concat(i.QK,"/").concat(c)}),(0,r.jsx)("link",{rel:"icon",href:m}),(0,r.jsx)("meta",{name:"og:image",property:"og:image",content:l}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",property:"twitter:image",content:l}),u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{property:"article:published_time",content:"".concat(new Date(u).toISOString())}),(0,r.jsx)("meta",{property:"og:type",content:"article"})]}),d&&(0,r.jsx)("link",{rel:"canonical",href:d}),p&&(0,r.jsx)("meta",{name:"author",content:p})]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},7947:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(i=n(617))&&i.__esModule?i:{default:i},s=n(3367),l=n(4287),u=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,l=m.length;s<l;s++){var u=m[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=a.props[u],p=r[u]||new Set;"name"===u&&o||!p.has(d)?(p.add(d),r[u]=p):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:i})}))}function x(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}x.rewind=function(){};var v=x;t.default=v},617:function(e,t,n){"use strict";var r=n(319),a=n(4575),i=n(3913),o=(n(1506),n(2205)),c=n(8585),s=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},8474:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1333),i=n(465),o=n(2664);t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{cannonical:"".concat(o.jW)}),(0,r.jsxs)("div",{className:"pt-8 flex flex-col items-center text-center space-y-8",children:[(0,r.jsx)("h1",{className:"text-4xl sm:text-6xl text-black",children:"Arian Architects"}),(0,r.jsx)("h2",{className:"text-4xl sm:text-6xl text-gray-500",children:"Redefining your lifestyle."}),(0,r.jsxs)("div",{className:"pt-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8",children:[(0,r.jsx)(i.Z,{href:"mailto:arianarchitects@gmail.com",link:!1,mode:!0,text:"Get in touch"}),(0,r.jsx)(i.Z,{href:"/projects",link:!0,mode:!1,text:"Projects"})]})]}),(0,r.jsxs)("div",{className:"mt-10 py-10 bg-black grid grid-cols-1 lg:grid-cols-2 gap-4",children:[(0,r.jsx)("span",{className:"px-12 md:px-24 md:leading-[60px] w-full h-full text-white text-2xl sm:text-4xl md:text-5xl flex flex-col items-center justify-center",children:"Building modest and intelligent responses based buildings."}),(0,r.jsx)("span",{className:"px-12 md:px-24 w-full h-full text-white text-xl md:text-2xl flex flex-col items-center justify-center",children:"A leading architecture studio in Delhi which practices making architecture, interiors and furniture focusing on building services, appealing aesthetics and client experience. We are committed to the process of creating spaces which responds to the users, expanding their aura in the form of architecture."})]}),(0,r.jsxs)("div",{className:"mt-10 flex flex-col items-center space-y-10",children:[(0,r.jsx)("span",{className:"text-center font-semibold px-12 md:px-24 md:leading-[60px] w-full h-full text-black text-4xl md:text-5xl flex flex-col items-center justify-center",children:"Building <workspace> for <requirement>"}),(0,r.jsxs)("div",{className:"relative flex flex-col items-center text-center w-[75vw] md:w-[50vw] h-[150px] sm:h-[300px] md:h-[500px]",children:[(0,r.jsx)("img",{decoding:"async",loading:"lazy",className:"fit-cover shadow-lg absolute w-[75vw] md:w-[50vw] h-[150px] sm:h-[300px] md:h-[500px]",src:"https://cdn.statically.io/gh/Arian-Architects/arian-architects.github.io/gh-pages/Rakesh%20Kohli,%20Inderpuri/1.jpg"}),(0,r.jsx)("div",{className:"bg-gray-300 w-[75vw] md:w-[50vw] h-[150px] sm:h-[300px] md:h-[500px]"})]}),(0,r.jsx)(i.Z,{href:"/projects",w:"w-[250px]",link:!0,mode:!0,text:"View Projects"}),(0,r.jsx)("div",{className:"h-[1px] px-4 md:px-32 bg-gray-300 w-[75vw]"}),(0,r.jsx)("div",{className:"pb-10 flex flex-col items-start w-[75vw]",children:(0,r.jsxs)("div",{className:"flex flex-col items-start space-y-8",children:[(0,r.jsx)("h2",{className:"text-4xl sm:text-6xl text-black",children:"Wanna redefine your lifestyle?"}),(0,r.jsx)("h2",{className:"text-4xl sm:text-6xl text-gray-500",children:"Let\u2019s talk!"}),(0,r.jsx)(i.Z,{href:"mailto:arianarchitects@gmail.com",link:!1,mode:!1,text:"Get in touch"})]})})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8474)}])},9008:function(e,t,n){e.exports=n(7947)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);