(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[311],{395:function(e,a,t){"use strict";var r=t(4836);a.__esModule=!0,a.default=void 0;var l=r(t(7294)),n=r(t(1932)),c=r(t(2728)),s=t(970),i=function(e){return l.default.useContext(s.OptionsContext).useAutoGen?l.default.createElement(n.default,e):l.default.createElement(c.default,e)};a.default=i},1932:function(e,a,t){"use strict";var r=t(4836);a.__esModule=!0,a.default=void 0;var l=r(t(434)),n=r(t(7071)),c=r(t(7294)),s=r(t(5697)),i=t(1883),u=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],d=function(e){var a=e.title,t=e.crumbs,r=e.crumbLabel,s=e.crumbSeparator,d=e.disableLinks,m=e.hiddenCrumbs,o=(0,n.default)(e,u);return c.default.createElement(c.default.Fragment,null,a&&c.default.createElement("span",{className:"breadcrumb__title"},a),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,a){return m.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:a+"-"+e.pathname},!d.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(i.Link,(0,l.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===t.length-1?"page":null},o),r&&a===t.length-1?r:e.crumbLabel)),d.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,l.default)({className:"breadcrumb__link__disabled"},o),r&&a===t.length-1?r:e.crumbLabel)),a===t.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},s))})))))};d.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:s.default.string,crumbSeparator:s.default.oneOfType([s.default.string,s.default.element]),crumbs:s.default.arrayOf(s.default.shape({location:s.default.shape(),pathname:s.default.string.isRequired})).isRequired,crumbLabel:s.default.string,disableLinks:s.default.arrayOf(s.default.string),hiddenCrumbs:s.default.arrayOf(s.default.string)};var m=d;a.default=m},2728:function(e,a,t){"use strict";var r=t(4836);a.__esModule=!0,a.default=void 0;var l=r(t(434)),n=r(t(7071)),c=r(t(7294)),s=r(t(5697)),i=t(1883),u=t(970),d=r(t(1775)),m=["title","location","crumbLabel","crumbSeparator"],o=function(e){var a=e.title,t=e.location,r=e.crumbLabel,s=e.crumbSeparator,o=(0,n.default)(e,m),b=c.default.useContext(u.OptionsContext).usePathPrefix,f=(0,d.default)({location:(0,l.default)({},t,{pathname:b?t.pathname.replace(new RegExp("^"+b),""):t.pathname}),crumbLabel:r,crumbSeparator:s}).crumbs,p=void 0===f?[]:f;return c.default.createElement(c.default.Fragment,null,a&&c.default.createElement("span",{className:"breadcrumb__title"},a),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},p.map((function(e,a){return c.default.createElement("li",{className:"breadcrumb__item",key:a},c.default.createElement(i.Link,(0,l.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===p.length-1?"page":null},o),e.crumbLabel),a===p.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};o.defaultProps={title:"",crumbSeparator:" / "},o.propTypes={location:s.default.shape().isRequired,crumbLabel:s.default.string.isRequired,title:s.default.string,crumbSeparator:s.default.string};var b=o;a.default=b},3172:function(e,a,t){"use strict";var r=t(4836);a.__esModule=!0;var l=r(t(395));a.Breadcrumb=l.default;var n=r(t(1932));a.AutoGenCrumb=n.default;var c=t(2623);a.BreadcrumbContext=c.BreadcrumbContext,a.BreadcrumbConsumer=c.BreadcrumbConsumer,a.BreadcrumbProvider=c.BreadcrumbProvider;var s=r(t(1775));a.useBreadcrumb=s.default},1775:function(e,a,t){"use strict";var r=t(4836);a.__esModule=!0,a.default=void 0;var l=r(t(7294)),n=t(2623),c=function(e){var a=e.location,t=e.crumbLabel,r=e.crumbSeparator,c=l.default.useContext(n.BreadcrumbContext),s=c.crumbs,i=c.updateCrumbs;return l.default.useEffect((function(){i({location:a,crumbLabel:t,crumbSeparator:r})}),[a,t,r,i]),{crumbs:s}};a.default=c},3845:function(e,a,t){"use strict";var r=t(3172);a.aG=r.Breadcrumb,r.BreadcrumbContext,r.BreadcrumbConsumer,r.BreadcrumbProvider,r.useBreadcrumb,r.AutoGenCrumb},3869:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var r=t(7294),l=t(3845),n=t.p+"static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp";var c=e=>{let{title:a,crumbLabel:t,location:c,pageContext:s}=e;const{breadcrumb:{crumbs:i}}=s,u=c.pathname.toLowerCase().split("/"),d=u[u.length-1].split("-");return r.createElement("section",{className:"breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-80 bg-cover bg-bottom",style:{backgroundImage:"url("+n+")"}},r.createElement("div",{className:" text-center mt-12 transform"},r.createElement(l.aG,{title:a,crumbs:i,crumbLabel:d.join(" "),disableLinks:["/games","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/match"]}),r.createElement("span",{className:"hidden breadcrumb__title breadcrumb__list breadcrumb__separator breadcrumb__list__item breadcrumb__link__active"})))}},6551:function(e,a,t){"use strict";var r=t(7294);a.Z=e=>{let{heading:a,description:t,align:l,color:n,showDescription:c}=e;const s={showDescription:c||!1,align:l||"center",color:n||"primary"};return r.createElement("div",{className:"section-title"},r.createElement("div",{className:"container"},r.createElement("div",{align:s.align,className:"mx-auto"},r.createElement("h2",{className:"font-bold max-w-3xl"},a),s.showDescription&&r.createElement("p",{className:"max-w-xl mt-2 leading-7 text-18base"},t))))}},6279:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return f}});var r=t(7294),l=t(9680),n=t(3474),c=t(2841),s=t(3869),i=t(8032),u=t(6551),d=t(485),m=t(1883);var o=()=>r.createElement("form",{className:"form-login mt-10",action:"#"},r.createElement("div",{className:"single-fild"},r.createElement("input",{className:"px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none",type:"email",placeholder:"E-mail"})),r.createElement("div",{className:"single-fild"},r.createElement("input",{className:"px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none",type:"password",placeholder:"password"})),r.createElement("div",{className:"button text-center"},r.createElement(d.Z,{className:"text-white"},"Login",r.createElement(i.S,{className:"align-middle ml-3 transition-all group-hover:ml-5",src:"../../../data/images/icons/arrrow-icon.webp",alt:"",__imageData:t(8814)}))),r.createElement("div",{className:"account-text mt-5 text-center"},r.createElement("p",null,"Do not have any account,"," ",r.createElement(m.Link,{to:"/register",className:"text-yellow-400 font-semibold"},"Signup here"))));var b=e=>{let{data:a}=e;return r.createElement("section",{className:"login-section"},r.createElement("div",{className:"container"},r.createElement("div",{className:"grid gap-10 md:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 items-center"},r.createElement("div",{className:"image"},r.createElement(i.S,{className:"align-middle ml-3",src:"../../../data/images/others/login-thumb.png",alt:"",__imageData:t(3848)})),r.createElement("div",{className:"form-warp"},(null==a?void 0:a.section_title)&&r.createElement(u.Z,Object.assign({heading:null==a?void 0:a.section_title.heading},a.section_title)),r.createElement(o,null)))))};var f=e=>{var a;let{data:t,location:i,pageContext:u}=e;const d=(0,c.normalizedData)((null==t||null===(a=t.allGeneral)||void 0===a?void 0:a.nodes)||[]),m=(0,c.normalizedData)((null==t?void 0:t.page.content)||[]);return r.createElement(n.Z,{data:{...d.menu,...d.footer}},r.createElement(l.Z,{title:"Login Page",pathname:"/"}),r.createElement(s.Z,{pageContext:u,location:i,title:"Login"}),r.createElement(b,{data:m["login-section"]}))}},7071:function(e){e.exports=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l},e.exports.__esModule=!0,e.exports.default=e.exports},3848:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/4f45ddc87f485e0d352ef56388138e15/8488e/login-thumb.png","srcSet":"/static/4f45ddc87f485e0d352ef56388138e15/45b13/login-thumb.png 138w,\\n/static/4f45ddc87f485e0d352ef56388138e15/c52d6/login-thumb.png 275w,\\n/static/4f45ddc87f485e0d352ef56388138e15/8488e/login-thumb.png 550w","sizes":"(min-width: 550px) 550px, 100vw"},"sources":[{"srcSet":"/static/4f45ddc87f485e0d352ef56388138e15/8fcdc/login-thumb.webp 138w,\\n/static/4f45ddc87f485e0d352ef56388138e15/15c30/login-thumb.webp 275w,\\n/static/4f45ddc87f485e0d352ef56388138e15/c5263/login-thumb.webp 550w","type":"image/webp","sizes":"(min-width: 550px) 550px, 100vw"}]},"width":550,"height":550}')},8814:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2e3c2da7ae44734bcc5d97e5569536de/264f2/arrrow-icon.webp","srcSet":"/static/2e3c2da7ae44734bcc5d97e5569536de/fadb2/arrrow-icon.webp 5w,\\n/static/2e3c2da7ae44734bcc5d97e5569536de/bd5c1/arrrow-icon.webp 10w,\\n/static/2e3c2da7ae44734bcc5d97e5569536de/264f2/arrrow-icon.webp 20w","sizes":"(min-width: 20px) 20px, 100vw"},"sources":[]},"width":20,"height":20}')}}]);
//# sourceMappingURL=component---src-pages-login-jsx-15fdcc93464447a76ec4.js.map