(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},6613:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});var r=function(e){document&&document.getElementById(e).scrollIntoView({behavior:"smooth"})}},1333:function(e,t,n){"use strict";var r=n(5893),o=n(9008),a=n(2664);t.Z=function(e){var t=e.title,n=e.description,i=e.slug,c=void 0===i?"":i,s=e.image,u=void 0===s?"".concat(a.QK,"/social-media-card.png"):s,l=e.pubDate,p=e.cannonical,d=e.author,f=e.faviconImage,m=void 0===f?"".concat(a.QK,"/favicon-image.png"):f,h="".concat(null!==t&&void 0!==t?t:a.oc).trim(),g="".concat(null!==n&&void 0!==n?n:a.H6).trim();return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("title",{children:h}),(0,r.jsx)("meta",{name:"title",property:"title",content:h}),(0,r.jsx)("meta",{name:"og:title",property:"og:title",content:h}),(0,r.jsx)("meta",{name:"twitter:title",property:"twitter:title",content:h}),(0,r.jsx)("meta",{name:"description",property:"description",content:g}),(0,r.jsx)("meta",{name:"og:description",property:"og:description",content:g}),(0,r.jsx)("meta",{name:"twitter:description",property:"twitter:description",content:g}),(0,r.jsx)("meta",{name:"og:url",property:"og:url",content:"".concat(a.QK,"/").concat(c)}),(0,r.jsx)("meta",{name:"twitter:url",property:"twitter:url",content:"".concat(a.QK,"/").concat(c)}),(0,r.jsx)("link",{rel:"icon",href:m}),(0,r.jsx)("meta",{name:"og:image",property:"og:image",content:u}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",property:"twitter:image",content:u}),l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{property:"article:published_time",content:"".concat(new Date(l).toISOString())}),(0,r.jsx)("meta",{property:"og:type",content:"article"})]}),p&&(0,r.jsx)("link",{rel:"canonical",href:p}),d&&(0,r.jsx)("meta",{name:"author",content:d})]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},s=n(3367),u=n(4287),l=n(7845);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=m.length;s<u;s++){var l=m[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var p=o.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(p)?(d.add(p),r[l]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function g(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}g.rewind=function(){};var v=g;t.default=v},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),p=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},5650:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var r=n(5893),o=n(1163),a=n(1333),i=n(2664),c=n(6613),s=!0;t.default=function(e){var t=e.slug,n=new o.useRouter,s=i.ev.filter((function(e){return e.project==t}))[0];return n.isFallback?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{slug:t,title:"".concat(t," - Arian Architects"),cannonical:"".concat(i.jW,"/projects/").concat(t)}),(0,r.jsxs)("div",{className:"pt-8 flex flex-col items-center text-center space-y-8",children:[(0,r.jsx)("h1",{className:"text-4xl sm:text-6xl text-black",children:t.split(",")[0]}),(0,r.jsx)("h2",{className:"text-4xl sm:text-6xl text-gray-500",children:t.split(",")[1]}),(0,r.jsx)("svg",{onClick:function(){return(0,c.B)("project")},xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),(0,r.jsx)("div",{id:"project",className:"mt-10 h-[1px] px-4 md:px-32 bg-gray-200 w-full"})]}),s&&(0,r.jsx)("div",{className:"py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:new Array(s.end-1).fill(0).map((function(e,n){return(0,r.jsxs)("div",{className:"relative w-full text-center flex flex-col items-center py-5",children:[(0,r.jsx)("div",{className:"rounded bg-gray-200 w-[300px] h-[250px]"}),(0,r.jsx)("img",{decoding:"async",loading:"lazy",className:"shadow absolute w-[300px] h-[250px] object-cover",src:"".concat("https://cdn.statically.io/gh/Arian-Architects/arian-architects.github.io/gh-pages/").concat(t,"/").concat(n+1,".jpg")})]},n)}))})]})})}},3872:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[slug]",function(){return n(5650)}])},9008:function(e,t,n){e.exports=n(7947)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[774,888,179],(function(){return t=3872,e(e.s=t);var t}));var t=e.O();_N_E=t}]);