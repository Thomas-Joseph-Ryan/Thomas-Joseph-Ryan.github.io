const t=new WeakMap;function e(e,n,i,s){var o,a;if(!e&&!t.has(n))return!1;const r=null!==(o=t.get(n))&&void 0!==o?o:new WeakMap;if(t.set(n,r),!e&&!t.has(n))return!1;const l=null!==(a=r.get(i))&&void 0!==a?a:new Set;r.set(i,l);const c=l.has(s);return e?l.add(s):l.delete(s),c&&e}var n=function t(n,i,s,o,a){if("string"==typeof n&&(n=document.querySelectorAll(n)),"function"!=typeof n.addEventListener){const e=Array.prototype.map.call(n,(e=>t(e,i,s,o,a)));return{destroy(){for(const t of e)t.destroy()}}}const r=n instanceof Document?n.documentElement:n,l=Boolean("object"==typeof a?a.capture:a),c=t=>{const e=function(t,e){let n=t.target;if(n instanceof Text&&(n=n.parentElement),n instanceof Element&&t.currentTarget instanceof Element){const i=n.closest(e);if(i&&t.currentTarget.contains(i))return i}}(t,i);e&&(t.delegateTarget=e,o.call(r,t))};"object"==typeof a&&delete a.once;const h=JSON.stringify({selector:i,type:s,capture:l}),d={destroy(){r.removeEventListener(s,c,a),e(!1,r,o,h)}};return e(!0,r,o,h)||r.addEventListener(s,c,a),d};const i=(t,e)=>String(t).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||e||"",s=function(t){let{hash:e}=void 0===t?{}:t;return location.pathname+location.search+(e?location.hash:"")},o=function(t,e){void 0===e&&(e={});const n={url:t=t||s({hash:!0}),random:Math.random(),source:"swup",...e};history.pushState(n,"",t)},a=function(t,e){void 0===t&&(t=null),void 0===e&&(e={}),t=t||s({hash:!0});const n={...history.state,url:t,random:Math.random(),source:"swup",...e};history.replaceState(n,"",t)},r=function(t,e,i,s){let{base:o=document,...a}=void 0===s?{}:s;const r=n(o,t,e,i,a);return{destroy:()=>r.destroy()}},l=function(t,e){return void 0===e&&(e=document),e.querySelector(t)},c=function(t,e){return void 0===e&&(e=document),Array.from(e.querySelectorAll(t))},h=t=>1e3*Number(t.slice(0,-1).replace(",",".")),d=(t,e)=>{const n={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},{url:i,method:s,headers:o,data:a}={...n,...t},r=new XMLHttpRequest;return r.onreadystatechange=function(){4===r.readyState&&e(r)},r.open(s,i,!0),Object.entries(o).forEach((t=>{let[e,n]=t;r.setRequestHeader(e,n)})),r.send(a),r};class u extends URL{constructor(t,e){void 0===e&&(e=document.baseURI),super(t.toString(),e)}get url(){return this.pathname+this.search}static fromElement(t){const e=t.getAttribute("href")||t.getAttribute("xlink:href");return new u(e)}static fromUrl(t){return new u(t)}}const m=t=>/^to-/.test(t)||["is-changing","is-rendering","is-popstate"].includes(t),g=()=>{const t=document.documentElement.className.split(" ").filter(m);document.documentElement.classList.remove(...t)};class p{constructor(t){this.pages={},this.last=null,this.swup=void 0,this.swup=t}getCacheUrl(t){return this.swup.resolveUrl(u.fromUrl(t).url)}cacheUrl(t){t.url=this.getCacheUrl(t.url),t.url in this.pages==0&&(this.pages[t.url]=t),t.responseURL=this.getCacheUrl(t.responseURL),this.last=this.pages[t.url],this.swup.log(`Cache (${Object.keys(this.pages).length})`,this.pages)}getPage(t){return t=this.getCacheUrl(t),this.pages[t]}getCurrentPage(){return this.getPage(s())}exists(t){return(t=this.getCacheUrl(t))in this.pages}empty(){this.pages={},this.last=null,this.swup.log("Cache cleared")}remove(t){delete this.pages[this.getCacheUrl(t)]}}const v=function(t){let{event:e,skipTransition:n}=void 0===t?{}:t;if(n)return this.triggerEvent("transitionEnd",e),this.cleanupAnimationClasses(),[Promise.resolve()];(t=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t()}))}))})((()=>{this.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating")}));const i=this.getAnimationPromises("in");return Promise.all(i).then((()=>{this.triggerEvent("animationInDone"),this.triggerEvent("transitionEnd",e),this.cleanupAnimationClasses()})),i},f=t=>t?("#"===t.charAt(0)&&(t=t.substring(1)),t=(t=>window.CSS&&window.CSS.escape?CSS.escape(t):t)(t=decodeURIComponent(t)),l(`#${t}`)||l(`a[name='${t}']`)):null;let w="transition",E="transitionend",y="animation",S="animationend";function L(t){const e=this.options.animationSelector;if(!1===e)return[Promise.resolve()];const n=c(e,document.body);return n.length?n.map((t=>function(t,e,n){void 0===n&&(n=null);const{type:i,timeout:s,propCount:o}=function(t,e){void 0===e&&(e=null);const n=window.getComputedStyle(t),i=`${w}Duration`,s=`${y}Delay`,o=`${y}Duration`,a=n[`${w}Delay`].split(", "),r=(n[i]||"").split(", "),l=b(a,r),c=(n[s]||"").split(", "),h=(n[o]||"").split(", "),d=b(c,h);let u="",m=0,g=0;return"transition"===e?l>0&&(u="transition",m=l,g=r.length):"animation"===e?d>0&&(u="animation",m=d,g=h.length):(m=Math.max(l,d),u=m>0?l>d?"transition":"animation":null,g=u?"transition"===u?r.length:h.length:0),{type:u,timeout:m,propCount:g}}(t,n);return i&&s?new Promise((e=>{const n="transition"===i?E:S,a=performance.now();let r=0;const l=()=>{t.removeEventListener(n,c),e()},c=e=>{if(e.target===t){if(!(t=>!!t.elapsedTime)(e))throw new Error("Not a transition or animation event.");(performance.now()-a)/1e3<e.elapsedTime||++r>=o&&l()}};setTimeout((()=>{r<o&&l()}),s+1),t.addEventListener(n,c)})):(console.warn(`[swup] No CSS transition duration defined for element of selector ${e}`),Promise.resolve())}(t,e))):(console.warn(`[swup] No animated elements found by selector ${e}`),[Promise.resolve()])}function b(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map(((e,n)=>h(e)+h(t[n]))))}void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(w="WebkitTransition",E="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(y="WebkitAnimation",S="webkitAnimationEnd");const P=function(t){const e=((t,e)=>{let n=document.createElement("html");n.innerHTML=t;let i=[];e.forEach((t=>{if(null==l(t,n))return console.warn(`[swup] Container ${t} not found on page.`),null;c(t).length!==c(t,n).length&&console.warn("[swup] Mismatched number of containers found on new page."),c(t).forEach(((e,s)=>{c(t,n)[s].setAttribute("data-swup",String(i.length)),i.push(c(t,n)[s].outerHTML)}))}));const s=l("title",n)?.innerText||"",o=l("body",n)?.className;return n.innerHTML="",n=null,{title:s,pageClass:o,blocks:i,originalContent:t}})(t.responseText,this.options.containers);return e?{...e,responseURL:t.responseURL||window.location.href}:(console.warn("[swup] Received page is invalid."),null)};function I(t){const e=this.options.requestHeaders,{url:n}=t;return this.cache.exists(n)?(this.triggerEvent("pageRetrievedFromCache"),Promise.resolve(this.cache.getPage(n))):new Promise(((i,s)=>{d({...t,headers:e},(t=>{if(500===t.status)return this.triggerEvent("serverError"),void s(n);const e=this.getPageData(t);if(!e||!e.blocks.length)return void s(n);const o={...e,url:n};this.cache.cacheUrl(o),this.triggerEvent("pageLoaded"),i(o)}))}))}const k=function(t){let{event:e,skipTransition:n}=void 0===t?{}:t;const i=e instanceof PopStateEvent;if(n)return this.triggerEvent("animationSkipped"),[Promise.resolve()];this.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing","is-leaving","is-animating"),i&&document.documentElement.classList.add("is-popstate");const s=this.getAnimationPromises("out");return Promise.all(s).then((()=>{this.triggerEvent("animationOutDone")})),s};function C(t){const{url:e}=t;this.shouldIgnoreVisit(e)?window.location.href=e:this.performPageLoad(t)}function x(t){const{url:e,event:n,customTransition:a}=t??{},r=n instanceof PopStateEvent,l=this.shouldSkipTransition({url:e,event:n});this.triggerEvent("transitionStart",n),this.updateTransition(s(),e,a),null!=a&&document.documentElement.classList.add(`to-${i(a)}`);const c=this.leavePage({event:n,skipTransition:l});r||o(e+(this.scrollToElement||"")),this.currentPageUrl=s();const h=this.fetchPage(t);Promise.all([h,...c]).then((t=>{let[e]=t;this.renderPage(e,{event:n,skipTransition:l})})).catch((t=>{void 0!==t&&(this.options.skipPopStateHandling=()=>(window.location=t,!0),history.go(-1))}))}const U=function(t){let{blocks:e,title:n}=t;return e.forEach(((t,e)=>{document.body.querySelector(`[data-swup="${e}"]`).outerHTML=t})),document.title=n,Promise.resolve()};function T(t,e){const n=this._handlers[t];n?n.push(e):console.warn(`Unsupported event ${t}.`)}function A(t,e){if(t&&e){const n=this._handlers[t];n.includes(e)?this._handlers[t]=n.filter((t=>t!==e)):console.warn(`Handler for event '${t}' not found.`)}else t?this._handlers[t]=[]:Object.keys(this._handlers).forEach((t=>{this._handlers[t]=[]}))}function N(t,e){this._handlers[t].forEach((t=>{try{t(e)}catch(t){console.error(t)}}));const n=new CustomEvent(`swup:${t}`,{detail:t});document.dispatchEvent(n)}const R=function(t){if(t?.isSwupPlugin){if(t.swup=this,!t._checkRequirements||t._checkRequirements())return t._beforeMount&&t._beforeMount(),t.mount(),this.plugins.push(t),this.plugins}else console.error("Not a swup plugin instance",t)};function q(t){const e=this.findPlugin(t);if(e)return e.unmount(),e._afterUnmount&&e._afterUnmount(),this.plugins=this.plugins.filter((t=>t!==e)),this.plugins;console.error("No such plugin",e)}function H(t){return this.plugins.find((e=>e===t||e.name===t))}const M=function(t,e){let{event:n,skipTransition:i}=void 0===e?{}:e;if(document.documentElement.classList.remove("is-leaving"),!this.isSameResolvedUrl(s(),t.url))return;const{url:o}=u.fromUrl(t.responseURL);this.isSameResolvedUrl(s(),o)||(this.cache.cacheUrl({...t,url:o}),this.currentPageUrl=s(),a(o)),i||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",n),this.replaceContent(t).then((()=>{this.triggerEvent("contentReplaced",n),this.triggerEvent("pageView",n),this.options.cache||this.cache.empty(),this.enterPage({event:n,skipTransition:i}),this.scrollToElement=null}))};function $(t,e,n){this.transition={from:t,to:e,custom:n}}function B(t){let{event:e}=t;return!(!(e instanceof PopStateEvent)||this.options.animateHistoryBrowsing)}var W=class{constructor(){this.leftNav=document.getElementById("left-nav"),this.centerNav=document.getElementById("center-nav"),this.rightNav=document.getElementById("right-nav"),this.launching=!0,this.initialize()}initialize(){const t=sessionStorage.getItem("activateAnimation");console.log(window.location.pathname),null===t?(sessionStorage.setItem("activateAnimation","true"),window.addEventListener("load",(()=>{console.log("first time on page, doing whole animation"),this.leftNav.dataset.status="waiting",this.centerNav.dataset.status="waiting",this.rightNav.dataset.status="waiting"})),this.rightNav.onanimationend=()=>{this.launching&&(this.leftNav.dataset.status="activating",this.centerNav.dataset.status="activating",this.rightNav.dataset.status="activating",console.log("status changed to activating"),this.launching=!1)},document.getElementById("right-nav-right-box").onanimationend=()=>{console.log("Intro animations completed"),this.leftNav.dataset.status="activated",this.centerNav.dataset.status="activated",this.rightNav.dataset.status="activated",document.getElementById("name-wrapper").dataset.status="activated"},window.addEventListener("beforeunload",(()=>{(window.location.pathname.endsWith("/")||window.location.pathname.endsWith("/index.html"))&&sessionStorage.removeItem("activateAnimation")}))):(this.leftNav.dataset.status="activated",this.centerNav.dataset.status="activated",this.rightNav.dataset.status="activated",document.getElementById("name-wrapper").dataset.status="activated")}destroy(){window.removeEventListener("load",(()=>{console.log("first time on page, doing whole animation"),this.leftNav.dataset.status="waiting",this.centerNav.dataset.status="waiting",this.rightNav.dataset.status="waiting"})),window.removeEventListener("beforeunload",(()=>{(window.location.pathname.endsWith("/")||window.location.pathname.endsWith("/index.html"))&&sessionStorage.removeItem("activateAnimation")})),this.rightNav.onanimationend=null,document.getElementById("right-nav-right-box").onanimationend=null,this.leftNav.dataset.status="",this.centerNav.dataset.status="",this.rightNav.dataset.status=""}};var _=class{constructor(){this.row=document.querySelector(".row"),this.images=document.querySelectorAll(".photo"),this.focusedIndex=null,this.intervalId=null,this.isPaused=!1,this.focusRandomImage=this.focusRandomImage.bind(this),this.toggleAnimation=this.toggleAnimation.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.initialize()}focusRandomImage(){let t;null!==this.focusedIndex&&this.images[this.focusedIndex].classList.remove("focused");do{t=Math.floor(Math.random()*this.images.length)}while(t===this.focusedIndex);this.images[t].classList.add("focused"),this.focusedIndex=t}toggleAnimation(){this.isPaused?(this.intervalId=setInterval(this.focusRandomImage,3e3),this.toggleButton.textContent="Pause Animation",this.isPaused=!1):(clearInterval(this.intervalId),null!==this.focusedIndex&&this.images[this.focusedIndex].classList.remove("focused"),this.toggleButton.textContent="Resume Animation",this.isPaused=!0)}handleMouseEnter(){clearInterval(this.intervalId),null!==this.focusedIndex&&this.images[this.focusedIndex].classList.remove("focused")}handleMouseLeave(){this.isPaused||(this.intervalId=setInterval(this.focusRandomImage,3e3))}initialize(){this.row.addEventListener("mouseenter",this.handleMouseEnter),this.row.addEventListener("mouseleave",this.handleMouseLeave),this.intervalId=setInterval(this.focusRandomImage,3e3)}destroy(){clearInterval(this.intervalId),this.row.removeEventListener("mouseenter",this.pauseAnimation),this.row.removeEventListener("mouseleave",this.resumeAnimation)}};var O=class{constructor(){this.projects=document.querySelectorAll(".project"),this.generateTails(),console.log("BorderGenerator generated"),this.initCollapsibleList()}generateTails(){this.projects.forEach((t=>{["top","right","bottom","left"].forEach((e=>{const n=document.createElement("div");n.classList.add("tail",e),t.appendChild(n)}))}))}initCollapsibleList(){document.querySelectorAll(".collapsible").forEach((t=>{const e=t.querySelector(".collapsible-content"),n=t.querySelector(".collapsible-toggle"),i=t.querySelector(".list-down-arrow"),s=t.querySelector(".expand-icon"),o=t.querySelector(".expand-text");n.addEventListener("click",(()=>{e.classList.contains("open")?(e.classList.remove("open"),i&&i.classList.remove("list-arrow-rotate"),s&&s.classList.remove("expanded-icon"),o&&(o.textContent="See more"),e.style.maxHeight=null):(e.classList.add("open"),i&&!s&&i.classList.add("list-arrow-rotate"),s&&s.classList.add("expanded-icon"),o&&(o.textContent="See less"),e.style.maxHeight=1.3*e.scrollHeight+"px"),console.log(e.classList.toString())}))}))}};var D=class{constructor(t,e){this.element=document.getElementById(t),this.text=e,this.emailIcon=document.getElementById("email-icon"),this.emailMessage=document.getElementById("email-message"),this.element.addEventListener("click",(()=>{this.copyToClipboard(),this.hideEmailIcon(),setTimeout((()=>{this.showEmailIcon()}),4e3)}))}copyToClipboard(){navigator.clipboard.writeText(this.text).then((()=>{console.log("Copied to clipboard: "+this.text)})).catch((t=>{console.error("Failed to copy to clipboard: "+t)}))}hideEmailIcon(){this.emailIcon.style.opacity=0,this.emailMessage.style.opacity=1}showEmailIcon(){this.emailIcon.style.opacity=1,this.emailMessage.style.opacity=0}};const j=new class{constructor(t){void 0===t&&(t={}),this.version="3.0.4",this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.options=void 0,this.plugins=[],this.transition={},this.cache=void 0,this.currentPageUrl=s(),this.delegatedListeners={},this.boundPopStateHandler=void 0,this.loadPage=C,this.performPageLoad=x,this.leavePage=k,this.renderPage=M,this.replaceContent=U,this.enterPage=v,this.triggerEvent=N,this.delegateEvent=r,this.on=T,this.off=A,this.updateTransition=$,this.shouldSkipTransition=B,this.getAnimationPromises=L,this.getPageData=P,this.fetchPage=I,this.getAnchorElement=f,this.log=()=>{},this.use=R,this.unuse=q,this.findPlugin=H,this.getCurrentUrl=s,this.cleanupAnimationClasses=g,this.defaults={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',cache:!0,containers:["#swup"],ignoreVisit:function(t,e){let{el:n}=void 0===e?{}:e;return!!n?.closest("[data-no-swup]")},linkSelector:"a[href]",plugins:[],resolveUrl:t=>t,requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},skipPopStateHandling:t=>"swup"!==t.state?.source},this.options={...this.defaults,...t},this.boundPopStateHandler=this.popStateHandler.bind(this),this.cache=new p(this),this.enable()}enable(){"undefined"!=typeof Promise?(this.delegatedListeners.click=r(this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.boundPopStateHandler),((t,e)=>{let n=0;e.forEach((e=>{null==l(e,t)?console.warn(`[swup] Container ${e} not found on page.`):c(e).forEach(((i,s)=>{c(e,t)[s].setAttribute("data-swup",String(n)),n++}))}))})(document.documentElement,this.options.containers),this.options.plugins.forEach((t=>this.use(t))),a(),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")):console.warn("Promise is not supported")}destroy(){this.delegatedListeners.click.destroy(),window.removeEventListener("popstate",this.boundPopStateHandler),this.cache.empty(),this.options.plugins.forEach((t=>{this.unuse(t)})),c("[data-swup]").forEach((t=>{t.removeAttribute("data-swup")})),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}shouldIgnoreVisit(t,e){let{el:n}=void 0===e?{}:e;const{origin:i,url:s,hash:o}=u.fromUrl(t);return i!==window.location.origin||!(!n||!this.triggerWillOpenNewWindow(n))||!!this.options.ignoreVisit(s+o,{el:n})}linkClickHandler(t){const e=t.delegateTarget,{href:n,url:i,hash:o}=u.fromElement(e);if(this.shouldIgnoreVisit(n,{el:e}))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return void this.triggerEvent("openPageInNewTab",t);if(0!==t.button)return;if(this.triggerEvent("clickLink",t),t.preventDefault(),!i||i===s())return void this.handleLinkToSamePage(i,o,t);if(this.isSameResolvedUrl(i,s()))return;this.scrollToElement=o||null;const a=e.getAttribute("data-swup-transition")||void 0;this.performPageLoad({url:i,customTransition:a})}handleLinkToSamePage(t,e,n){if(e){if(this.triggerEvent("samePageWithHash",n),!f(e))return console.warn(`Element for offset not found (#${e})`);a(t+e)}else this.triggerEvent("samePage",n)}triggerWillOpenNewWindow(t){return!!t.matches('[download], [target="_blank"]')}popStateHandler(t){if(this.options.skipPopStateHandling(t))return;if(this.isSameResolvedUrl(s(),this.currentPageUrl))return;const e=t.state?.url??location.href;if(this.shouldIgnoreVisit(e))return;const{url:n,hash:i}=u.fromUrl(e);i?this.scrollToElement=i:t.preventDefault(),this.triggerEvent("popState",t),this.options.animateHistoryBrowsing||(document.documentElement.classList.remove("is-animating"),g()),this.performPageLoad({url:n,event:t})}resolveUrl(t){if("function"!=typeof this.options.resolveUrl)return console.warn("[swup] options.resolveUrl expects a callback function."),t;const e=this.options.resolveUrl(t);return e&&"string"==typeof e?e.startsWith("//")||e.startsWith("http")?(console.warn("[swup] options.resolveUrl needs to return a relative url"),t):e:(console.warn("[swup] options.resolveUrl needs to return a url"),t)}isSameResolvedUrl(t,e){return this.resolveUrl(t)===this.resolveUrl(e)}}({});let V,F;function z(){document.querySelector("#nav-wrapper")&&(console.log("On index page"),V=new W),document.querySelector("#about-me-text")&&(console.log("On about me page"),F=new _),document.querySelector("#contact-page-area")&&(console.log("On contact page"),new D("email","tjryan13579@gmail.com")),document.querySelector("#project-container")&&(console.log("On projects page"),new O)}"complete"===document.readyState?z():document.addEventListener("DOMContentLoaded",(()=>z())),j.on("contentReplaced",z),j.on("willReplaceContent",(function(){document.querySelector("#nav-wrapper")&&V.destroy(),document.querySelector("#about-me-text")}));
//# sourceMappingURL=index.be76f444.js.map