(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[773],{395:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(7294)),c=r(a(1932)),n=r(a(2728)),s=a(970),u=function(e){return l.default.useContext(s.OptionsContext).useAutoGen?l.default.createElement(c.default,e):l.default.createElement(n.default,e)};t.default=u},1932:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(434)),c=r(a(7071)),n=r(a(7294)),s=r(a(5697)),u=a(1883),m=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],d=function(e){var t=e.title,a=e.crumbs,r=e.crumbLabel,s=e.crumbSeparator,d=e.disableLinks,i=e.hiddenCrumbs,o=(0,c.default)(e,m);return n.default.createElement(n.default.Fragment,null,t&&n.default.createElement("span",{className:"breadcrumb__title"},t),n.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},n.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return i.includes(e.pathname)?null:n.default.createElement(n.default.Fragment,{key:t+"-"+e.pathname},!d.includes(e.pathname)&&n.default.createElement("li",{className:"breadcrumb__list__item"},n.default.createElement(u.Link,(0,l.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},o),r&&t===a.length-1?r:e.crumbLabel)),d.includes(e.pathname)&&n.default.createElement("li",{className:"breadcrumb__list__item"},n.default.createElement("span",(0,l.default)({className:"breadcrumb__link__disabled"},o),r&&t===a.length-1?r:e.crumbLabel)),t===a.length-1?null:n.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},s))})))))};d.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:s.default.string,crumbSeparator:s.default.oneOfType([s.default.string,s.default.element]),crumbs:s.default.arrayOf(s.default.shape({location:s.default.shape(),pathname:s.default.string.isRequired})).isRequired,crumbLabel:s.default.string,disableLinks:s.default.arrayOf(s.default.string),hiddenCrumbs:s.default.arrayOf(s.default.string)};var i=d;t.default=i},2728:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(434)),c=r(a(7071)),n=r(a(7294)),s=r(a(5697)),u=a(1883),m=a(970),d=r(a(1775)),i=["title","location","crumbLabel","crumbSeparator"],o=function(e){var t=e.title,a=e.location,r=e.crumbLabel,s=e.crumbSeparator,o=(0,c.default)(e,i),b=n.default.useContext(m.OptionsContext).usePathPrefix,f=(0,d.default)({location:(0,l.default)({},a,{pathname:b?a.pathname.replace(new RegExp("^"+b),""):a.pathname}),crumbLabel:r,crumbSeparator:s}).crumbs,p=void 0===f?[]:f;return n.default.createElement(n.default.Fragment,null,t&&n.default.createElement("span",{className:"breadcrumb__title"},t),n.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},n.default.createElement("ol",{className:"breadcrumb__list"},p.map((function(e,t){return n.default.createElement("li",{className:"breadcrumb__item",key:t},n.default.createElement(u.Link,(0,l.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===p.length-1?"page":null},o),e.crumbLabel),t===p.length-1?null:n.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};o.defaultProps={title:"",crumbSeparator:" / "},o.propTypes={location:s.default.shape().isRequired,crumbLabel:s.default.string.isRequired,title:s.default.string,crumbSeparator:s.default.string};var b=o;t.default=b},3172:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0;var l=r(a(395));t.Breadcrumb=l.default;var c=r(a(1932));t.AutoGenCrumb=c.default;var n=a(2623);t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider;var s=r(a(1775));t.useBreadcrumb=s.default},1775:function(e,t,a){"use strict";var r=a(4836);t.__esModule=!0,t.default=void 0;var l=r(a(7294)),c=a(2623),n=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,n=l.default.useContext(c.BreadcrumbContext),s=n.crumbs,u=n.updateCrumbs;return l.default.useEffect((function(){u({location:t,crumbLabel:a,crumbSeparator:r})}),[t,a,r,u]),{crumbs:s}};t.default=n},3845:function(e,t,a){"use strict";var r=a(3172);t.aG=r.Breadcrumb,r.BreadcrumbContext,r.BreadcrumbConsumer,r.BreadcrumbProvider,r.useBreadcrumb,r.AutoGenCrumb},9091:function(e,t,a){"use strict";var r=a(7294),l=a(1883),c=a(8032);t.Z=e=>{let{title:t,date:n,slug:s,dateSlug:u,image1:m}=e;return r.createElement("div",{className:"single_blog flex sm:flex-row md:flex-row items-center mt-7"},r.createElement("div",{className:"blog_thumb w-28 justify-center items-center sm:w-28 md:w-28 lg:w-48 flex-shrink-0"},r.createElement(l.Link,{to:"/"+s,className:"block"},m?r.createElement(c.G,{className:"rounded-4xl",image:(0,c.c)(m),alt:t}):r.createElement(c.S,{className:"rounded-4xl",src:"../../assets/images/placeholder-image.png",alt:t,__imageData:a(3112)}))),r.createElement("div",{className:"blog_content ml-4 md:ml-4 lg:ml-9"},r.createElement("div",{className:"blog_date"},r.createElement(l.Link,{to:"/date/"+u,className:"mb-2 block"},r.createElement("i",{className:"icofont-calendar text-primary mr-2"}),n)),r.createElement("h3",{className:"font-bold uppercase mb-1 md:mb-3 md:text-18base lg:text-md"},r.createElement(l.Link,{to:"/"+s,className:"hover:text-primary"},t||"Blog Title")),r.createElement(l.Link,{to:"/"+s,className:"pl-11 text-sm font-medium sm:uppercase hover:text-primary relative  text-white  after:absolute content-after after:bg-primary after:w-8  after:h-0.5 after:z-0  after:top-1/2  after:left-0  after:transform  after:-translate-y-2/4  after:transition  after:opacity-100"},"More Deatails")))}},3869:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(7294),l=a(3845),c=a.p+"static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp";var n=e=>{let{title:t,crumbLabel:a,location:n,pageContext:s}=e;const{breadcrumb:{crumbs:u}}=s,m=n.pathname.toLowerCase().split("/"),d=m[m.length-1].split("-");return r.createElement("section",{className:"breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-80 bg-cover bg-bottom",style:{backgroundImage:"url("+c+")"}},r.createElement("div",{className:" text-center mt-12 transform"},r.createElement(l.aG,{title:t,crumbs:u,crumbLabel:d.join(" "),disableLinks:["/games","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/match"]}),r.createElement("span",{className:"hidden breadcrumb__title breadcrumb__list breadcrumb__separator breadcrumb__list__item breadcrumb__link__active"})))}},6693:function(e,t,a){"use strict";var r=a(7294),l=a(9091),c=a(8847);t.Z=e=>{let{data:t}=e;return r.createElement("section",{className:"blog-section"},r.createElement("div",{className:"container"},r.createElement("div",{className:"grid md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-12"},r.createElement("div",{className:"md:col-span-5 lg:col-span-4 row-start-2 md:row-auto "},r.createElement(c.Z,null)),r.createElement("div",{className:"md:col-span-7 lg:col-span-8 row-start-1 md:row-auto"},(null==t?void 0:t.items)&&(null==t?void 0:t.items.map((e=>r.createElement(l.Z,{key:"blog-post-"+e.title,title:e.title,author:e.author,date:e.postedAt.date,dateSlug:e.postedAt.slug,slug:e.slug,image1:e.image.src}))))))))}},8847:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(7294),l=a(1883),c=a(2841);var n=()=>{const e=(0,l.useStaticQuery)("3083715435").allArticle.edges,t=(0,c.flatDeep)(e.map((e=>e.node.categories)));let a=[];return t.forEach((e=>{const t={title:e.title,slug:e.slug,count:1},r=(0,c.containsObject)(t,a);if(-1!==r){const t=a[r].count;a[r]={title:e.title,slug:e.slug,count:t+1}}else a.push(t)})),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.slug,className:"mb-5 last:mb-0"},r.createElement(l.Link,{to:"/category/"+e.slug,className:"px-5 py-4 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"},r.createElement("i",{className:"icofont-rounded-double-right"})," ",e.title)))))};var s=()=>r.createElement("form",{action:"#",className:"relative"},r.createElement("input",{className:"px-5 h-14 border-secondary-90 bg-secondary-100 border-2 border-solid rounded-md w-full focus:outline-none",placeholder:"Search here",type:"text"}),r.createElement("button",{type:"submit",className:"absolute px-5 top-0 right-0 bg-primary hover:bg-primary-90 transition-all rounded-md inline-block h-full"},r.createElement("i",{className:"icofont-search-1"})));var u=()=>{const e=(0,l.useStaticQuery)("1298158337").allArticle.edges,t=(0,c.flatDeep)(e.map((e=>e.node.tags)));let a=[];return t.forEach((e=>{const t={title:e.title,slug:e.slug,count:1},r=(0,c.containsObject)(t,a);if(-1!==r){const t=a[r].count;a[r]={title:e.title,slug:e.slug,count:t+1}}else a.push(t)})),r.createElement("div",{className:"all-tags"},a.map((e=>r.createElement(l.Link,{key:e.slug,to:"/tags/"+e.slug,className:"inline-block mr-2 my-1 border-secondary-90 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-lg py-3 px-6 xl:px-8"},e.title))))};var m=()=>{const e="px-5 md:px-4 lg:px-7 xl:px-9 py-7 border-secondary-90 bg-secondary-100 border-2 border-solid rounded-lg mb-10 last:mb-0";return r.createElement("div",{className:"post-sidebar mt-8"},r.createElement("div",{className:e},r.createElement("h3",{className:"uppercase font-bold mb-7"},"SEARCH HERE"),r.createElement(s,null)),r.createElement("div",{className:e},r.createElement("h3",{className:"uppercase font-bold mb-7"},"POST CATEGORY"),r.createElement(n,null)),r.createElement("div",{className:e},r.createElement("h3",{className:"uppercase font-bold mb-7"},"TAGS"),r.createElement(u,null)))}},5203:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(9680),c=a(3474),n=a(3869),s=a(6693),u=a(2841);t.default=e=>{var t;let{data:a,location:m,pageContext:d}=e;const i=(0,u.normalizedData)((null==a||null===(t=a.allGeneral)||void 0===t?void 0:t.nodes)||[]);return r.createElement(c.Z,{data:{...i.menu,...i.footer}},r.createElement(l.Z,{title:"Blog Categories",pathname:"/"}),r.createElement(n.Z,{pageContext:d,location:m,title:"Blog Categories"}),r.createElement(s.Z,{data:{items:a.allArticle.nodes}}))}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(l[a]=e[a]);return l},e.exports.__esModule=!0,e.exports.default=e.exports},3112:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/83cd44f1190394b57de798f5c9bd7931/ec333/placeholder-image.png","srcSet":"/static/83cd44f1190394b57de798f5c9bd7931/a8b52/placeholder-image.png 120w,\\n/static/83cd44f1190394b57de798f5c9bd7931/87351/placeholder-image.png 240w,\\n/static/83cd44f1190394b57de798f5c9bd7931/ec333/placeholder-image.png 480w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/83cd44f1190394b57de798f5c9bd7931/507b0/placeholder-image.webp 120w,\\n/static/83cd44f1190394b57de798f5c9bd7931/8d565/placeholder-image.webp 240w,\\n/static/83cd44f1190394b57de798f5c9bd7931/21b1a/placeholder-image.webp 480w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":480}')}}]);
//# sourceMappingURL=component---src-templates-categories-post-index-jsx-9e9d1923cd790ff75154.js.map