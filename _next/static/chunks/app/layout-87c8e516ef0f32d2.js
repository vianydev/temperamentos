(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9836:function(e,t,n){Promise.resolve().then(n.t.bind(n,5962,23)),Promise.resolve().then(n.t.bind(n,7477,23)),Promise.resolve().then(n.t.bind(n,2263,23)),Promise.resolve().then(n.t.bind(n,7402,23)),Promise.resolve().then(n.t.bind(n,6103,23))},5962:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(6927),i=n(5909),o=i._(n(6006)),a=r._(n(2930)),l=n(2325),u=n(6374),s=n(168);n(7653);let d=r._(n(5840)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/temperamentos/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function c(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,r,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function g(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:i,qualityInt:a,className:l,imgStyle:u,blurStyle:s,isLazy:d,fetchPriority:f,fill:c,placeholder:p,loading:h,srcString:b,config:y,unoptimized:v,loader:_,onLoadRef:w,onLoadingCompleteRef:P,setBlurComplete:S,setShowAltText:j,onLoad:E,onError:C,...O}=e;return h=d?"lazy":h,o.default.createElement("img",{...O,...g(f),loading:h,width:i,height:r,decoding:"async","data-nimg":c?"fill":"1",className:l,style:{...u,...s},...n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,b,p,w,P,S,v))},[b,p,w,P,S,C,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,p,w,P,S,v)},onError:e=>{j(!0),"blur"===p&&S(!0),C&&C(e)}})}),b=(0,o.forwardRef)((e,t)=>{var n;let r,i,{src:m,sizes:b,unoptimized:y=!1,priority:v=!1,loading:_,className:w,quality:P,width:S,height:j,fill:E,style:C,onLoad:O,onLoadingComplete:x,placeholder:k="empty",blurDataURL:M,fetchPriority:I,layout:A,objectFit:z,objectPosition:F,lazyBoundary:R,lazyRoot:N,...D}=e,U=(0,o.useContext)(s.ImageConfigContext),T=(0,o.useMemo)(()=>{let e=f||U||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[U]),W=D.loader||d.default;delete D.loader;let B="__next_img_default"in W;if(B){if("custom"===T.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:n,...r}=t;return e(r)}}if(A){"fill"===A&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!b&&(b=t)}let L="",G=p(S),V=p(j);if("object"==typeof(n=m)&&(c(n)||void 0!==n.src)){let e=c(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,i=e.blurHeight,M=M||e.blurDataURL,L=e.src,!E){if(G||V){if(G&&!V){let t=G/e.width;V=Math.round(e.height*t)}else if(!G&&V){let t=V/e.height;G=Math.round(e.width*t)}}else G=e.width,V=e.height}}let H=!v&&("lazy"===_||void 0===_);(!(m="string"==typeof m?m:L)||m.startsWith("data:")||m.startsWith("blob:"))&&(y=!0,H=!1),T.unoptimized&&(y=!0),B&&m.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(y=!0),v&&(I="high");let[q,$]=(0,o.useState)(!1),[J,Y]=(0,o.useState)(!1),K=p(P),Q=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:F}:{},J?{}:{color:"transparent"},C),X="blur"===k&&M&&!q?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:G,heightInt:V,blurWidth:r,blurHeight:i,blurDataURL:M,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),d=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:o,width:u[d]})}}({config:T,src:m,unoptimized:y,width:G,quality:K,sizes:b,loader:W}),ee=m,et=(0,o.useRef)(O);(0,o.useEffect)(()=>{et.current=O},[O]);let en=(0,o.useRef)(x);(0,o.useEffect)(()=>{en.current=x},[x]);let er={isLazy:H,imgAttributes:Z,heightInt:V,widthInt:G,qualityInt:K,className:w,imgStyle:Q,blurStyle:X,loading:_,config:T,fetchPriority:I,fill:E,unoptimized:y,placeholder:k,loader:W,srcString:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:$,setShowAltText:Y,...D};return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...er,ref:t}),v?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:D.crossOrigin,referrerPolicy:D.referrerPolicy,...g(I)})):null)}),y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(6927),i=r._(n(6006)),o=i.default.createContext({})},7290:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},2930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return m}});let r=n(6927),i=n(5909),o=i._(n(6006)),a=r._(n(9488)),l=n(4626),u=n(6436),s=n(7290);function d(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7653);let c=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2325:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r||t,u=i||n,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&i?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(6927),i=r._(n(6006)),o=n(6374),a=i.default.createContext(o.imageConfigDefault)},6374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5840:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},9488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(5909),i=r._(n(6006)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7653:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},7402:function(){},2263:function(e){e.exports={purpleFilter:"mainFooter_purpleFilter__FWkEe"}},6103:function(e){e.exports={style:{fontFamily:"'__Inter_57af35', '__Inter_Fallback_57af35'",fontStyle:"normal"},className:"__className_57af35"}}},function(e){e.O(0,[477,253,769,744],function(){return e(e.s=9836)}),_N_E=e.O()}]);