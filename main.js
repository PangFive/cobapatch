!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e71ca7a3-2945-4f4e-a33f-ab723e137ba1",e._sentryDebugIdIdentifier="sentry-dbid-e71ca7a3-2945-4f4e-a33f-ab723e137ba1")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"6f5105eba6a6fcb75f0fb4f397fc4789cb9d8b0a"},(()=>{var e,t,n,r,o,s,a,i,l,c={71992:(e,t,n)=>{"use strict";var r={};n.r(r),n.d(r,{clear:()=>pt,getItem:()=>ht,removeItem:()=>mt,setItem:()=>gt});var o=n(73790),s=n(96677),a=n(2933),i=n(75083),l=n(69828),c=n(33478),d=n(57968),u=n(64251),p=n(12550),h=n(99589),m=n(2543),g=n.n(m);const f="undefined"==typeof window;function y(...e){for(let t of e)if(m.isArray(t)&&m.isFunction(t[0])){const[e,n]=t;if(e()&&n)return n}else if(t)return t}function v(e){return t=>e.includes(t)}function b(e){try{return JSON.parse(e)}catch(e){return}}function x(e,t,n=void 0){return m.isArray(e)?e.map((e=>x(e,t))):m.isPlainObject(e)?m.mapValues(e,((e,n)=>x(e,t,n))):t(e,n)}var w=n(22451),E=n(86123);function C(e){return new Promise((t=>setTimeout(t,e)))}function T(){let e,t,n=new Promise(((n,r)=>{e=n,t=r}));return{resolve:e,reject:t,promise:n}}function S(e){const t=(0,E.Sx)(e),n=t.then;t.then=function(){return S(n.apply(this,arguments))};const r=t.catch;return t.catch=function(){return S(r.apply(this,arguments))},t}function P(e){return"object"==typeof e&&"then"in e&&"catch"in e&&"case"in e&&"value"in e&&"state"in e}function k(){let e,t;const n=S(new Promise(((n,r)=>{e=n,t=r})));return{resolve:e,reject:t,promise:n}}function R(e){const{resolve:t,promise:n}=T(),r=S(n.then(e));["then","catch","case"].forEach((e=>{const n=r[e];r[e]=function(){return t(),n.apply(this,arguments)}}));let o=w.observable.box();Object.defineProperty(r,"value",{get:()=>(t(),o.get()),set:e=>{t(),o.set(e)}});let s=w.observable.box();return Object.defineProperty(r,"state",{get:()=>(t(),s.get()),set:e=>{t(),s.set(e)}}),r}function O(e,t){let n;return function(){return n?n.atom.reportObserved():(n={value:e.apply(this),atom:(0,w.createAtom)("DebounceAtom")},setTimeout((()=>{const{atom:e}=n;n=void 0,e.reportChanged()}),t)),n.value}}function H(e,t,n){var r;let o,s,a;return"number"==typeof e?(s=e,a=null!==(r=t)&&void 0!==r?r:{},(e,t,n)=>{if(!n.get)throw new Error("debounceComputed requires a getter");return(0,w.computed)(a)(e,t,Object.assign(Object.assign({},n),{get:O(n.get,s)}))}):(o=e,s=t,a=null!=n?n:{},(0,w.computed)(O(o,s),a))}const A=new class{constructor(){this.atom=(0,w.createAtom)("Clock",(()=>this.startTicking()),(()=>this.stopTicking())),this.intervalHandler=null,this.currentDateTime=Date.now()}getTime(){return this.atom.reportObserved()?this.currentDateTime:Date.now()}tick(){this.currentDateTime=Date.now(),this.atom.reportChanged()}startTicking(){this.tick(),this.intervalHandler=setInterval((()=>this.tick()),50)}stopTicking(){null!=this.intervalHandler&&(clearInterval(this.intervalHandler),this.intervalHandler=null)}};class q extends Error{constructor(e,t,n,r){var o,s;super(`API error during ${t}: ${e}`),this.operationName=t,this.errorCode=n,this.apiError=r,r&&(this.cause=new Error(null!==(o=null==r?void 0:r.message)&&void 0!==o?o:"[Unknown API error]"),this.cause.code=null!==(s=null==r?void 0:r.code)&&void 0!==s?s:"unknown",this.cause.stack="(From server API)")}}class $ extends Error{constructor(e,t,n,r){super(`Failed to activate interceptor ${e}: ${t}`),this.interceptorId=e,this.failureMessage=t,this.errorCode=n,this.cause=r}}class I extends Error{constructor(e,t){super(`Interceptor ${e} activation ran unsuccessfully`),this.interceptorId=e,this.metadata=t}}var j=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};class D{constructor(e){this.authToken=e}graphql(e,t,n){return j(this,void 0,void 0,(function*(){const r=yield fetch("http://127.0.0.1:45457",{method:"POST",headers:Object.assign(Object.assign({},this.authToken?{Authorization:`Bearer ${this.authToken}`}:{}),{"content-type":"application/json"}),body:JSON.stringify({operationName:e,query:t,variables:n})}).catch((t=>{var n;throw new q(`fetch failed with '${null!==(n=t.message)&&void 0!==n?n:t}'`,e)}));if(!r.ok)throw console.error(r),new q(`unexpected status ${r.status} ${r.statusText}`,e,r.status);const{data:o,errors:s}=yield r.json();if(s&&s.length){console.error(s);const t=s.length>1?`s (${s.length})`:"";throw new q(`GraphQL error${t}: ${s.map((e=>`${e.message} at ${e.path.join(".")}`)).join(", ")}`,e)}return o}))}getServerVersion(){return j(this,void 0,void 0,(function*(){return(yield this.graphql("getVersion","\n            query getVersion {\n                version\n            }\n        ",{})).version}))}getConfig(e){return j(this,void 0,void 0,(function*(){const t=yield this.graphql("getConfig",`\n            ${te(yield Z,de)?"query getConfig($proxyPort: Int!) {":"query getConfig {"}\n                config {\n                    certificatePath\n                    ${te(yield Z,oe)?"\n                        certificateContent\n                        certificateFingerprint\n                    ":""}\n                }\n\n                ${te(yield Z,oe)?"networkInterfaces":""}\n\n                ${te(yield Z,le)?"systemProxy {\n                    proxyUrl\n                    noProxy\n                }":""}\n\n                ${te(yield Z,de)?"\n                    dnsServers(proxyPort: $proxyPort)\n                    ruleParameterKeys\n                ":""}\n            }\n        `,{proxyPort:e});return Object.assign(Object.assign({},t.config),{networkInterfaces:t.networkInterfaces||{},systemProxy:t.systemProxy,dnsServers:t.dnsServers||[],ruleParameterKeys:t.ruleParameterKeys||[]})}))}getNetworkInterfaces(){return j(this,void 0,void 0,(function*(){return te(yield Z,oe)?(yield this.graphql("getNetworkInterfaces","\n            query getNetworkInterfaces {\n                networkInterfaces\n            }\n        ",{})).networkInterfaces:{}}))}getInterceptors(e){return j(this,void 0,void 0,(function*(){return(yield this.graphql("getInterceptors",`\n            query getInterceptors($proxyPort: Int!) {\n                interceptors {\n                    id\n                    version\n                    isActive(proxyPort: $proxyPort)\n                    isActivable\n\n                    ${te(yield Z,se)?"metadata":""}\n                }\n            }\n        `,{proxyPort:e})).interceptors}))}getDetailedInterceptorMetadata(e,t){return j(this,void 0,void 0,(function*(){if(te(yield Z,ie)){if(t)throw new Error("Metadata subqueries cannot be used with GraphQL API client");return(yield this.graphql("getDetailedInterceptorMetadata","\n            query getDetailedInterceptorMetadata($id: ID!) {\n                interceptor(id: $id) {\n                    metadata(type: DETAILED)\n                }\n            }\n        ",{id:e})).interceptor.metadata}}))}activateInterceptor(e,t,n){return j(this,void 0,void 0,(function*(){const r=(yield this.graphql("Activate","\n            mutation Activate($id: ID!, $proxyPort: Int!, $options: Json) {\n                activateInterceptor(id: $id, proxyPort: $proxyPort, options: $options)\n            }\n        ",{id:e,proxyPort:t,options:n})).activateInterceptor;return m.isBoolean(r)?{success:r,metadata:void 0}:r}))}triggerServerUpdate(){return j(this,void 0,void 0,(function*(){yield this.graphql("TriggerUpdate","\n            mutation TriggerUpdate {\n                triggerUpdate\n            }\n        ",{})}))}}var M=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))},B=n(48287).Buffer,F=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};class N{constructor(e){this.authToken=e}apiRequest(e,t,n={},r,o){var s,a,i;return F(this,void 0,void 0,(function*(){const l=`${e} ${t}`,c=yield fetch(`http://127.0.0.1:45457${t}${Object.keys(n).length?"?"+new URLSearchParams(m.mapValues(n,(e=>e.toString()))).toString():""}`,{method:e,headers:Object.assign(Object.assign({},this.authToken?{Authorization:`Bearer ${this.authToken}`}:{}),{"content-type":"application/json"}),body:r?JSON.stringify(r):void 0,signal:null==o?void 0:o.abortSignal}).catch((e=>{var t;const n=null!==(t=e.message)&&void 0!==t?t:e;throw new q(`fetch failed with '${n}'`,l)}));if(!c.ok){const e=yield c.json().catch((e=>null));console.error(c.status,e);const t=null!==(a=null===(s=null==e?void 0:e.error)||void 0===s?void 0:s.message)&&void 0!==a?a:"[unknown]",n=null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.code;throw new q(`unexpected ${c.status} ${c.statusText} - ${n?`${n} -`:""}`,l,c.status,{message:t,code:n})}return c}))}apiJsonRequest(e,t,n={},r){return F(this,void 0,void 0,(function*(){return yield(yield this.apiRequest(e,t,n,r)).json()}))}apiNdJsonRequest(e,t,n={},r,o){return F(this,void 0,void 0,(function*(){const s=yield this.apiRequest(e,t,n,r,o);return s.body?function(e){let t;return new ReadableStream({start(){t=e.getReader()},pull(e){return M(this,void 0,void 0,(function*(){const{done:n,value:r}=yield t.read();if(n)return e.close();e.enqueue(JSON.parse(r))}))},cancel(e){t.cancel(e)}})}(function(e){const t=/\r?\n/,n=new TextDecoder;let r,o="";return new ReadableStream({start(){r=e.getReader()},pull(e){var s;return M(this,void 0,void 0,(function*(){const{done:a,value:i}=yield r.read();a&&(o.length>0&&e.enqueue(o),e.close());const l=n.decode(i,{stream:!0});o+=l;const c=o.split(t);o=null!==(s=c.pop())&&void 0!==s?s:"";for(const t of c)e.enqueue(t)}))},cancel(e){r.cancel(e)}})}(s.body)):new ReadableStream({start(e){e.close()}})}))}getServerVersion(){return F(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("get","/version")).version}))}getConfig(e){return F(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/config",{proxyPort:e})).config}))}getNetworkInterfaces(){return F(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/config/network-interfaces")).networkInterfaces}))}getInterceptors(e){return F(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/interceptors",{proxyPort:e})).interceptors}))}getDetailedInterceptorMetadata(e,t){return F(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET",`/interceptors/${e}/metadata/${t||""}`)).interceptorMetadata}))}activateInterceptor(e,t,n){return F(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("POST",`/interceptors/${e}/activate/${t}`,{},n)).result}))}sendRequest(e,t,n){var r;return F(this,void 0,void 0,(function*(){const o=Object.assign(Object.assign({},e),{rawBody:null===(r=e.rawBody)||void 0===r?void 0:r.toString("base64")}),s=Object.assign(Object.assign({},t),t.clientCertificate?{clientCertificate:Object.assign(Object.assign({},t.clientCertificate),{pfx:t.clientCertificate.pfx.toString("base64")})}:{}),a=yield this.apiNdJsonRequest("POST","/client/send",{},{request:o,options:s},n),i=a.getReader();return new ReadableStream({pull(e){return F(this,void 0,void 0,(function*(){const{done:t,value:n}=yield i.read();if(t)return e.close();"response-body-part"===n.type?e.enqueue(Object.assign(Object.assign({},n),{rawBody:B.from(n.rawBody,"base64")})):e.enqueue(n)}))},cancel(e){a.cancel(e)}})}))}triggerServerUpdate(){return F(this,void 0,void 0,(function*(){yield this.apiJsonRequest("POST","/update")}))}}var L=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function U(){var e;return L(this,void 0,void 0,(function*(){if(!f)return Promise.resolve(null!==(e=new URLSearchParams(window.location.search).get("authToken"))&&void 0!==e?e:void 0);return(yield o.getItem("latest-auth-token"))||void 0}))}const W=T(),z=()=>W.promise,_=L(void 0,void 0,void 0,(function*(){let e;for(f?yield C(5e3):yield z();!e;){const t=yield U(),n=new N(t),r=new D(t);if(e=yield n.getServerVersion().catch((()=>(console.log("Couldn't get version from REST API"),r.getServerVersion().catch((()=>{console.log("Couldn't get version from GraphQL API")}))))),e)return te(e,he)?n:r;yield C(100)}throw new Error(`Unreachable error: got version ${e} but couldn't pick an API client`)}));function V(){return L(this,void 0,void 0,(function*(){return(yield _).getServerVersion()}))}function J(e,t){return L(this,void 0,void 0,(function*(){return(yield _).getDetailedInterceptorMetadata(e,t)}))}var G;function K(e){return t=this,n=void 0,o=function*(){return"undefined"==typeof window?"service-worker":e in window?window[e]:new Promise((t=>{window.addEventListener("message",(n=>{n.data[e]&&t(n.data[e])}))}))},new((r=void 0)||(r=Promise))((function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,i)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o}const Q=null!==(G=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{}).desktopApi)&&void 0!==G?G:{};const Y="6f5105eba6a6fcb75f0fb4f397fc4789cb9d8b0a",X=R((()=>{return e=void 0,t=void 0,r=function*(){return K("httpToolkitDesktopVersion")},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r})),Z=R((()=>z().then(V).then((e=>(o.setItem("last-server-version",e),e))))),ee=o.getItem("last-server-version").then((e=>e||f?e:localStorage.getItem("last-server-version")));function te(e,t){return"string"==typeof e&&h.satisfies(e,t,{includePrerelease:!0})}function ne(e){return!e||"*"===e||"fulfilled"===Z.state&&te(Z.value,e)}const re="^0.1.28 || ^1.0.0",oe="^0.1.30 || ^1.0.0",se="^0.1.31 || ^1.0.0",ae="^1.1.4",ie="^1.2.0",le="^1.4.1",ce="^1.4.2",de="^1.5.0",ue="^1.9.0",pe="^1.11.0",he="^1.13.0",me="^1.13.0";let ge=!1;function fe(e,t){ge&&d.o5().setTag(e,t)}function ye(e,t={}){console.log("Reporting error:",e,t),ge&&d.v4((n=>{n.setExtras(t),"string"==typeof e?u.wd(e):e instanceof Error?u.Cp(e):(console.warn("Reporting non-error",e),u.wd(`Non-error thrown: ${e}`))}))}var ve=n(96540),be=n(40961),xe=n(6359),we=n(64612),Ee=n(13863),Ce=(n(76035),n(55175),n(85202),n(42800));n(25833);const Te={textInputFontSize:"13px",textSize:"14.5px",subHeadingSize:"17px",headingSize:"20px",largeHeadingSize:"24px",loudHeadingSize:"38px",screamingHeadingSize:"80px"},Se=1100,Pe="#f1971f",ke="#f1971f40",Re="#e1421f",Oe="#16181e",He="#1e2028",Ae="#32343B",qe="#53565e",$e="#818490",Ie="#9a9da8",je="#f2f2f2",De="#ffffff",Me="#2d4cbd",Be="#6284fa",Fe={"editorWarning.foreground":"#ff0000"},Ne={light:Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:"#fafafa",mainLowlightBackground:je,mainColor:He,highlightBackground:De,highlightColor:He,lowlightTextOpacity:.65,boxShadowAlpha:.3,pillContrast:.9,pillDefaultColor:Ie,primaryInputBackground:Me,primaryInputColor:De,secondaryInputBorder:Be,secondaryInputColor:Me,inputBackground:De,inputHoverBackground:je,inputBorder:qe,inputColor:He,inputPlaceholderColor:qe,inputWarningPlaceholder:"#8c5c1d",popColor:Re,warningColor:Pe,warningBackground:ke,containerBackground:"#e4e8ed",containerWatermark:$e,containerBorder:Ie,linkColor:"#0000EE",visitedLinkColor:"#551A8B",monacoTheme:"vs-custom",monacoThemeBase:"vs",monacoThemeOverrides:Fe,modalGradient:"radial-gradient(#40404b, #111118)"},Te),{globalCss:""}),dark:Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:Ae,mainLowlightBackground:"#25262e",mainColor:De,highlightBackground:qe,highlightColor:De,lowlightTextOpacity:.65,boxShadowAlpha:.4,pillContrast:.85,pillDefaultColor:Ie,primaryInputBackground:Me,primaryInputColor:De,secondaryInputBorder:Me,secondaryInputColor:Be,inputBackground:Oe,inputHoverBackground:He,inputBorder:qe,inputColor:De,inputPlaceholderColor:$e,inputWarningPlaceholder:"#e8b978",popColor:Re,warningColor:Pe,warningBackground:ke,containerBackground:He,containerWatermark:Ie,containerBorder:"#000000",linkColor:"#8699ff",visitedLinkColor:"#ac7ada",monacoTheme:"vs-dark-custom",monacoThemeBase:"vs-dark",monacoThemeOverrides:Object.assign(Object.assign({},Fe),{"editor.background":Oe}),modalGradient:`radial-gradient(${De}, ${Ie})`},Te),{globalCss:we.css`
        @supports (color-scheme: dark) {
            :root {
                color-scheme: dark;
            }
        }

        @supports not (color-scheme: dark) {
            ::-webkit-scrollbar {
                background-color: ${e=>Ee.e$(.2,e.theme.containerBackground)};
            }

            ::-webkit-scrollbar-thumb {
                background-color: ${e=>Ee.a(.2,e.theme.containerBackground)};
            }

            /* Standard, but poorly supported: */
            scrollbar-color: dark;
        }
    `}),"high-contrast":Object.assign(Object.assign({fontFamily:'"DM Sans", Arial, sans-serif',titleTextFamily:'Saira, "DM Sans", Arial, sans-serif',monoFontFamily:'"DM Mono", monospace',mainBackground:"#000000",mainLowlightBackground:"#262626",mainColor:"#ffffff",highlightBackground:"#ffffff",highlightColor:"#000",lowlightTextOpacity:.8,boxShadowAlpha:.1,pillContrast:.95,pillDefaultColor:$e,primaryInputBackground:Me,primaryInputColor:"#ffffff",secondaryInputBorder:"#ffffff",secondaryInputColor:"#ffffff",inputBackground:"#ffffff",inputHoverBackground:"#ddd",inputBorder:"#aaa",inputColor:"#000000",inputPlaceholderColor:"#444",inputWarningPlaceholder:"#e1b374",popColor:Re,warningColor:Pe,warningBackground:ke,containerBackground:Ae,containerWatermark:"#a0a0b0",containerBorder:"#000000",linkColor:"#8699ff",visitedLinkColor:"#ac7ada",monacoTheme:"hc-black-custom",monacoThemeBase:"hc-black",monacoThemeOverrides:Fe,modalGradient:"#f0f0f0"},Te),{globalCss:""})},{default:Le,css:Ue,createGlobalStyle:We,keyframes:ze,ThemeProvider:_e,StyleSheetManager:Ve}=we,Je=We`
    ${Ce.Ay};

    body {
        font-family: ${e=>e.theme.fontFamily};
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.containerBackground};
    }

    input {
        font-family: ${e=>e.theme.fontFamily};
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: bold;
    }

    :active {
        outline: none;
    }

    .slow-spin {
        animation: fa-spin 5s infinite linear;
    }

    /* Override Auth0's style choices to match the rest of the UI */
    .auth0-lock {
        font-family: ${e=>e.theme.fontFamily} !important;

        .auth0-lock-overlay {
            display: none; /* We have our own overlay we'll use instead */
        }

        .auth0-lock-widget {
            box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha}) !important;
            overflow: visible !important;
        }

        .auth0-lock-form {
            .auth0-lock-name {
                font-size: ${Te.headingSize} !important;
            }

            p, .auth0-lock-social-button-text {
                font-size: ${Te.textSize} !important;
            }
        }
    }

    /* Override some Monaco CSS internals */
    .monaco-editor {
        /* Our editors don't have real filenames, so hide that from error popups: */
        .zone-widget .filename {
            display: none;
        }
    }

    .phosphor-icon {
        /* Ensures icons line up with FontAwesome & neighbouring text */
        vertical-align: -0.125em;
    }

    ${e=>e.theme.globalCss}
`;var Ge=n(83624),Ke=n(17705);const Qe="1"!==navigator.doNotTrack,Ye=(0,Ke.format)(new Date,"YYYY-MM-DD"),Xe=null===localStorage.getItem("first-run-date")&&null===localStorage.getItem("theme-background-color"),Ze=localStorage.getItem("first-run-date"),et=null!=Ze?Ze:Ye;Ze||localStorage.setItem("first-run-date",et);const tt=localStorage.getItem("last-run-date")!==Ye;tt&&localStorage.setItem("last-run-date",Ye);const nt=()=>({"first-run":Xe,"first-run-today":tt,"ui-version":Y,"server-version":"fulfilled"===Z.state?Z.value:void 0,"desktop-version":"fulfilled"===X.state?X.value:void 0}),rt=["Interceptors"],ot=[];function st(e){if(!Qe)return;if(rt.includes(e.category)){const t=`${e.category}${e.action}${e.value}`;if(ot.includes(t))return;ot.push(t)}const t=location.href.replace(/\/view\/[a-z0-9\-]+/,"/view").replace(/\/modify\/[a-z0-9\-]+/,"/modify").replace(/\?.*/,"");Ge.bC.capture(`${e.category}:${e.action}`,{value:e.value,$current_url:t,$set_once:Object.assign({},nt())})}var at=n(22894),it=n(40202);const lt=at.parse(window.location.search.replace(/^\?/,"")),ct=(0,it.nS)((()=>{let e=window.history.state,t=window.location;window.addEventListener("popstate",(()=>{e=window.history.state,t=window.location}));const n=m.throttle(((...e)=>window.history.pushState.apply(window.history,e)),250,{leading:!0,trailing:!0}),r=m.throttle(((...e)=>window.history.replaceState.apply(window.history,e)),250,{leading:!0,trailing:!0});return{get location(){return t},addEventListener:window.addEventListener.bind(window),removeEventListener:window.removeEventListener.bind(window),history:{get state(){return e},pushState(e,r,o){n(e,r,o);let[s,a=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:a})},replaceState(e,n,o){r(e,n,o);let[s,a=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:a})}}}})()),dt=ct.navigate.bind(ct);ct.navigate=function(e,t={}){const[n,r]=e.split("?"),o=at.parse(r);return dt(n+"?"+at.stringify(Object.assign(Object.assign({},o),lt)),t)};var ut=n(22166);function pt(){return new Promise(((e,t)=>{try{window.localStorage.clear(),e(null)}catch(e){t(e)}}))}function ht(e){return new Promise(((t,n)=>{try{t(window.localStorage.getItem(e))}catch(e){n(e)}}))}function mt(e){return new Promise(((t,n)=>{try{window.localStorage.removeItem(e),t(null)}catch(e){n(e)}}))}function gt(e,t){return new Promise(((n,r)=>{try{window.localStorage.setItem(e,t),n(null)}catch(e){r(e)}}))}function ft(e){return"object"==typeof e&&e&&Object.keys(e).map((t=>ft(e[t]))),e}function yt(e){return e?(0,ut.Ik)(e):(0,ut.Ie)(ft,(e=>e))}const vt={object:yt,list:function(e){return(0,ut.p_)(yt(e))},map:function(e){return(0,ut.Tj)(yt(e))}};function bt(e,t){const n=xt(t);return(0,ut.U8)(e,n),e}function xt(e){const t={};return Object.keys(e).forEach((n=>{"object"==typeof e[n]?e[n].type in vt&&("object"==typeof e[n].schema?t[n]=vt[e[n].type](xt(e[n].schema)):t[n]=vt[e[n].type](e[n].schema)):!0===e[n]&&(t[n]=!0)})),(0,ut.gt)(t)}function wt(...e){const[t,n]=e;return t in vt?(0,ut.sU)(vt[t](n)):1===e.length?e=>bt(e,t):ut.sU.apply(null,e)}function Et(e){return t=this,n=void 0,s=function*(){const{key:t,store:n,storage:o,jsonify:s,dataTransform:a,customArgs:i}=m.defaults(e,{customArgs:{},storage:r,jsonify:!0,dataTransform:m.identity}),l=(0,ut.Yu)(n),c=yield o.getItem(t);if(c){const e=s?JSON.parse(c):c;e&&"object"==typeof e&&(0,w.runInAction)((()=>{(0,ut.yo)(l,n,a(e),void 0,i)}))}(0,w.reaction)((()=>(0,ut.lK)(l,n)),(e=>o.setItem(t,s?JSON.stringify(e):e)))},new((o=void 0)||(o=Promise))((function(e,r){function a(e){try{l(s.next(e))}catch(e){r(e)}}function i(e){try{l(s.throw(e))}catch(e){r(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}l((s=s.apply(t,n||[])).next())}));var t,n,o,s}function Ct(e){return"object"==typeof e&&(e instanceof Error||e.message||e.code||e.stack)}function Tt(e){return Ct(e)?e:new Error(e.message||e.toString())}class St extends Error{constructor(e,t=(e=>e)){super(`Unhandled case value: ${t(e)}`)}}const Pt=(e,t=(e=>e))=>{throw new St(e,t)},kt=(e,t=(e=>e))=>{console.warn(`Unhandled case value: ${t(e)}`)};function Rt(e,t=", ",n=" and "){return 1===e.length?e[0]:e.slice(0,-1).join(t)+n+e[e.length-1]}const Ot=["a","e","i","o","u","y"];var Ht=n(48287).Buffer;function At(e){return{byteLength:e}}const qt=new TextEncoder,$t=new TextDecoder("utf8",{fatal:!0}),It=new TextDecoder("utf8",{fatal:!1}),jt=new TextDecoder("latin1",{fatal:!1});function Dt(e){let t;if(e.byteLength>1028){const n=e.slice(1024,1028).findIndex((e=>128!=(192&e)));if(-1===n)return!1;const r=1024+n;t=e.slice(0,r)}else t=e;try{return $t.decode(t),!0}catch(e){return!1}}function Mt(e,t="utf8"){if("utf8"===t)return Ht.from(qt.encode(e));if("binary"===t)return Ht.from(e,t);throw new Error(`Cannot decode string from unrecogized encoding: ${t}`)}function Bt(e,t="utf8"){if("detect-encoding"===t)return Dt(e)?Bt(e,"utf8"):Bt(e,"binary");if("utf8"===t)return It.decode(e);if("binary"===t)return jt.decode(e);throw new Error(`Cannot convert buffer to unrecogized encoding: ${t}`)}function Ft(e){return e&&"Buffer"===e.type&&!!e.data}function Nt(e){return e?Ht.isBuffer(e)?e:"string"==typeof e?Mt(e):Ft(e)?Ht.from(e.data):Ht.from(e.buffer,e.byteOffset,e.byteLength):Ht.from([])}function Lt(e){return e?"string"==typeof e?new Blob([e]).size:Ft(e)?e.data.length:e.length:0}function Ut(e,t=!0){const n=Ht.isBuffer(e)?e.byteLength:"string"==typeof e?e.length:e;let r=t?1e3:1024,o=t?["bytes","kB","MB","GB","TB","PB","EB","ZB","YB"]:["bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],s=0===n?0:Math.floor(Math.log(n)/Math.log(r)),a=1===n?"byte":o[s];return(n/Math.pow(r,s)).toFixed(1).replace(/\.0$/,"")+" "+a}const Wt={100:{name:"100 Continue",mdnSlug:"Web/HTTP/Status/100",summary:"The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished."},101:{name:"101 Switching Protocols",mdnSlug:"Web/HTTP/Status/101",summary:"The HTTP 101 Switching Protocols response code indicates the protocol the server is switching to as requested by a client which sent the message including the Upgrade request header."},103:{name:"103 Early Hints",mdnSlug:"Web/HTTP/Status/103",summary:"The HTTP 103 Early Hints information response status code is primarily intended to be used with the Link header to allow the user agent to start preloading resources while the server is still preparing a response."},200:{name:"200 OK",mdnSlug:"Web/HTTP/Status/200",summary:"The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default."},201:{name:"201 Created",mdnSlug:"Web/HTTP/Status/201",summary:"The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the Location header."},202:{name:"202 Accepted",mdnSlug:"Web/HTTP/Status/202",summary:"The HTTP 202 Accepted response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place."},203:{name:"203 Non-Authoritative Information",mdnSlug:"Web/HTTP/Status/203",summary:"The HTTP 203 Non-Authoritative Information response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server's 200 (OK) response ."},204:{name:"204 No Content",mdnSlug:"Web/HTTP/Status/204",summary:"The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page. A 204 response is cacheable by default. An ETag header is included in such a response."},205:{name:"205 Reset Content",mdnSlug:"Web/HTTP/Status/205",summary:"The HTTP 205 Reset Content response status tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI."},206:{name:"206 Partial Content",mdnSlug:"Web/HTTP/Status/206",summary:"The HTTP 206 Partial Content success status response code indicates that the request has succeeded and has the body contains the requested ranges of data, as described in the Range header of the request."},300:{name:"300 Multiple Choices",mdnSlug:"Web/HTTP/Status/300",summary:"The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible responses. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used."},301:{name:"301 Moved Permanently",mdnSlug:"Web/HTTP/Status/301",summary:"The HTTP 301 Moved Permanently redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL)."},302:{name:"302 Found",mdnSlug:"Web/HTTP/Status/302",summary:"The HTTP 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don't update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL)."},303:{name:"303 See Other",mdnSlug:"Web/HTTP/Status/303",summary:"The HTTP 303 See Other redirect status response code indicates that the redirects don't link to the newly uploaded resources, but to another page (such as a confirmation page or an upload progress page). This response code is usually sent back as a result of PUT or POST. The method used to display this redirected page is always GET."},304:{name:"304 Not Modified",mdnSlug:"Web/HTTP/Status/304",summary:"The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is safe, like a GET or a HEAD request, or when the request is conditional and uses a If-None-Match or a If-Modified-Since header."},307:{name:"307 Temporary Redirect",mdnSlug:"Web/HTTP/Status/307",summary:'The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give an answer to a PUT method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ").'},308:{name:"308 Permanent Redirect",mdnSlug:"Web/HTTP/Status/308",summary:"The request method and the body will not be altered, whereas 301 may incorrectly sometimes be changed to a GET method."},400:{name:"400 Bad Request",mdnSlug:"Web/HTTP/Status/400",summary:"The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{name:"401 Unauthorized",mdnSlug:"Web/HTTP/Status/401",summary:"The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource."},402:{name:"402 Payment Required",mdnSlug:"Web/HTTP/Status/402",summary:"The HTTP 402 Payment Required is a nonstandard client error status response code that is reserved for future use."},403:{name:"403 Forbidden",mdnSlug:"Web/HTTP/Status/403",summary:"The HTTP 403 Forbidden client error status response code indicates that the server understood the request but refuses to authorize it."},404:{name:"404 Not Found",mdnSlug:"Web/HTTP/Status/404",summary:"The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot."},405:{name:"405 Method Not Allowed",mdnSlug:"Web/HTTP/Status/405",summary:"The HTTP 405 Method Not Allowed response status code indicates that the request method is known by the server but is not supported by the target resource."},406:{name:"406 Not Acceptable",mdnSlug:"Web/HTTP/Status/406",summary:"The HTTP 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers, and that the server is unwilling to supply a default representation."},407:{name:"407 Proxy Authentication Required",mdnSlug:"Web/HTTP/Status/407",summary:"The HTTP 407 Proxy Authentication Required  client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource."},408:{name:"408 Request Timeout",mdnSlug:"Web/HTTP/Status/408",summary:"The HTTP 408 Request Timeout response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client."},409:{name:"409 Conflict",mdnSlug:"Web/HTTP/Status/409",summary:"The HTTP 409 Conflict response status code indicates a request conflict with current state of the target resource."},410:{name:"410 Gone",mdnSlug:"Web/HTTP/Status/410",summary:"The HTTP 410 Gone client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."},411:{name:"411 Length Required",mdnSlug:"Web/HTTP/Status/411",summary:"The HTTP 411 Length Required client error response code indicates that the server refuses to accept the request without a defined Content-Length header."},412:{name:"412 Precondition Failed",mdnSlug:"Web/HTTP/Status/412",summary:"The HTTP 412 Precondition Failed client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back."},413:{name:"413 Payload Too Large",mdnSlug:"Web/HTTP/Status/413",summary:"The HTTP 413 Payload Too Large response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a Retry-After header field."},414:{name:"414 URI Too Long",mdnSlug:"Web/HTTP/Status/414",summary:"The HTTP 414 URI Too Long response status code indicates that the URI requested by the client is longer than the server is willing to interpret."},415:{name:"415 Unsupported Media Type",mdnSlug:"Web/HTTP/Status/415",summary:"The HTTP 415 Unsupported Media Type client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format."},416:{name:"416 Range Not Satisfiable",mdnSlug:"Web/HTTP/Status/416",summary:"The HTTP 416 Range Not Satisfiable error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the Range header value, though syntactically correct, doesn't make sense."},417:{name:"417 Expectation Failed",mdnSlug:"Web/HTTP/Status/417",summary:"The HTTP 417 Expectation Failed client error response code indicates that the expectation given in the request's Expect header could not be met."},418:{name:"418 I'm a teapot",mdnSlug:"Web/HTTP/Status/418",summary:"The HTTP 418 I'm a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014."},422:{name:"422 Unprocessable Entity",mdnSlug:"Web/HTTP/Status/422",summary:"The HTTP 422 Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions."},425:{name:"425 Too Early",mdnSlug:"Web/HTTP/Status/425",summary:"The HTTP 425 Too Early response status code indicates that the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack."},426:{name:"426 Upgrade Required",mdnSlug:"Web/HTTP/Status/426",summary:"The HTTP 426 Upgrade Required client error response code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."},428:{name:"428 Precondition Required",mdnSlug:"Web/HTTP/Status/428",summary:"The HTTP 428 Precondition Required response status code indicates that the server requires the request to be conditional."},429:{name:"429 Too Many Requests",mdnSlug:"Web/HTTP/Status/429",summary:'The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").'},431:{name:"431 Request Header Fields Too Large",mdnSlug:"Web/HTTP/Status/431",summary:"The HTTP 431 Request Header Fields Too Large response status code indicates that the server refuses to process the request because the request’s HTTP headers are too long."},451:{name:"451 Unavailable For Legal Reasons",mdnSlug:"Web/HTTP/Status/451",summary:"The HTTP 451 Unavailable For Legal Reasons client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued."},500:{name:"500 Internal Server Error",mdnSlug:"Web/HTTP/Status/500",summary:"The HTTP 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."},501:{name:"501 Not Implemented",mdnSlug:"Web/HTTP/Status/501",summary:"The HTTP 501 Not Implemented server error response code means that the server does not support the functionality required to fulfill the request."},502:{name:"502 Bad Gateway",mdnSlug:"Web/HTTP/Status/502",summary:"The HTTP 502 Bad Gateway server error response code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server."},503:{name:"503 Service Unavailable",mdnSlug:"Web/HTTP/Status/503",summary:"The HTTP 503 Service Unavailable server error response code indicates that the server is not ready to handle the request."},504:{name:"504 Gateway Timeout",mdnSlug:"Web/HTTP/Status/504",summary:"The HTTP 504 Gateway Timeout server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request."},505:{name:"505 HTTP Version Not Supported",mdnSlug:"Web/HTTP/Status/505",summary:"The HTTP 505 HTTP Version Not Supported response status code indicates that the HTTP version used in the request is not supported by the server."},506:{name:"506 Variant Also Negotiates",mdnSlug:"Web/HTTP/Status/506",summary:"The HTTP 506 Variant Also Negotiates response status code may be given in the context of Transparent Content Negotiation (see RFC 2295). This protocol enables a client to retrieve the best variant of a given resource, where the server supports multiple variants."},507:{name:"507 Insufficient Storage",mdnSlug:"Web/HTTP/Status/507",summary:"The HTTP 507 Insufficient Storage response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol (see RFC 4918)."},508:{name:"508 Loop Detected",mdnSlug:"Web/HTTP/Status/508",summary:"The HTTP 508 Loop Detected response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol."},510:{name:"510 Not Extended",mdnSlug:"Web/HTTP/Status/510",summary:"The HTTP  510 Not Extended response status code is sent in the context of the HTTP Extension Framework, defined in RFC 2774."},511:{name:"511 Network Authentication Required",mdnSlug:"Web/HTTP/Status/511",summary:"The HTTP 511 Network Authentication Required response status code indicates that the client needs to authenticate to gain network access."}},zt={1e3:{name:"Normal Closure",summary:"A normal WebSocket closure, meaning that the purpose for which the connection was established has been fulfilled."},1001:{name:"Going Away",summary:'An endpoint is "going away", such as a server going down or a browser having navigated away from a page.'},1002:{name:"Protocol Error",summary:"An endpoint terminated the connection due to a protocol error"},1003:{name:"Unsupported Data",summary:"An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)."},1004:{name:"Reserved",summary:"This close code is not used. A specific meaning might be defined in future."},1005:{name:"No Close Code Received",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that no status code was actually present."},1006:{name:"Abnormal Closure",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed abnormally, e.g., without sending or receiving a Close control frame."},1007:{name:"Invalid Frame Payload Data",summary:"An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 data within a text message)."},1008:{name:"Policy Violation",summary:"An endpoint is terminating the connection because it has received a message that violates its policy. This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy."},1009:{name:"Message Too Large",summary:"An endpoint is terminating the connection because it has received a message that is too big for it to process."},1010:{name:"Mandatory Extension",summary:"The client is terminating the connection because it has expected the server to negotiate one or more extensions, but the server didn't return them in the response message of the WebSocket handshake.  The list of extensions that are needed SHOULD appear in the /reason/ part of the Close frame."},1011:{name:"Internal Error",summary:"The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."},1012:{name:"Service Restart",summary:"The server is terminating the connection because it is restarting."},1013:{name:"Try Again Later",summary:"The server is terminating the connection due to a temporary condition, such as being overloaded."},1014:{name:"Bad Gateway",summary:"The server was acting as a gateway or proxy, and received an invalid response from an upstream server."},1015:{name:"TLS Handshake",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."}},_t={accept:{mdnSlug:"Web/HTTP/Headers/Accept",name:"Accept",summary:"The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand."},"accept-ch":{mdnSlug:"Web/HTTP/Headers/Accept-CH",name:"Accept-CH",summary:"The Accept-CH header is set by the server to specify which Client Hints headers a client should include in subsequent requests."},"accept-ch-lifetime":{mdnSlug:"Web/HTTP/Headers/Accept-CH-Lifetime",name:"Accept-CH-Lifetime",summary:"The Accept-CH-Lifetime header is set by the server to specify the persistence of Accept-CH header value that specifies for which Client Hints headers client should include in subsequent requests."},"accept-charset":{mdnSlug:"Web/HTTP/Headers/Accept-Charset",name:"Accept-Charset",summary:"The Accept-Charset request HTTP header advertises which character encodings the client understands."},"accept-encoding":{mdnSlug:"Web/HTTP/Headers/Accept-Encoding",name:"Accept-Encoding",summary:"The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand."},"accept-language":{mdnSlug:"Web/HTTP/Headers/Accept-Language",name:"Accept-Language",summary:"The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred."},"accept-patch":{mdnSlug:"Web/HTTP/Headers/Accept-Patch",name:"Accept-Patch",summary:"The Accept-Patch response HTTP header advertises which media-type the server is able to understand."},"accept-ranges":{mdnSlug:"Web/HTTP/Headers/Accept-Ranges",name:"Accept-Ranges",summary:"The Accept-Ranges response HTTP header is a marker used by the server to advertise its support of partial requests."},"access-control-allow-credentials":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Credentials",name:"Access-Control-Allow-Credentials",summary:"The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request's credentials mode (Request.credentials) is include."},"access-control-allow-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Headers",name:"Access-Control-Allow-Headers",summary:"The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request."},"access-control-allow-methods":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Methods",name:"Access-Control-Allow-Methods",summary:"The Access-Control-Allow-Methods response header specifies the method or methods allowed when accessing the resource in response to a preflight request."},"access-control-allow-origin":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Origin",name:"Access-Control-Allow-Origin",summary:"The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin."},"access-control-expose-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Expose-Headers",name:"Access-Control-Expose-Headers",summary:"The Access-Control-Expose-Headers response header indicates which headers can be exposed as part of the response by listing their names."},"access-control-max-age":{mdnSlug:"Web/HTTP/Headers/Access-Control-Max-Age",name:"Access-Control-Max-Age",summary:"The Access-Control-Max-Age response header indicates how long the results of a preflight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers) can be cached."},"access-control-request-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Headers",name:"Access-Control-Request-Headers",summary:"The Access-Control-Request-Headers request header is used by browsers when issuing a preflight request, to let the server know which HTTP headers the client might send when the actual request is made."},"access-control-request-method":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Method",name:"Access-Control-Request-Method",summary:"The Access-Control-Request-Method request header is used by browsers when issuing a preflight request, to let the server know which HTTP method will be used when the actual request is made."},age:{mdnSlug:"Web/HTTP/Headers/Age",name:"Age",summary:"The Age header contains the time in seconds the object has been in a proxy cache."},allow:{mdnSlug:"Web/HTTP/Headers/Allow",name:"Allow",summary:"The Allow header lists the set of methods supported by a resource."},"alt-svc":{mdnSlug:"Web/HTTP/Headers/Alt-Svc",name:"Alt-Svc",summary:"The Alt-Svc HTTP response header is used to advertise alternative services through which the same resource can be reached."},authorization:{mdnSlug:"Web/HTTP/Headers/Authorization",name:"Authorization",summary:"The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header."},"cache-control":{mdnSlug:"Web/HTTP/Headers/Cache-Control",name:"Cache-Control",summary:"The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses."},"clear-site-data":{mdnSlug:"Web/HTTP/Headers/Clear-Site-Data",name:"Clear-Site-Data",summary:"The Clear-Site-Data header clears browsing data (cookies, storage, cache) associated with the requesting website."},connection:{mdnSlug:"Web/HTTP/Headers/Connection",name:"Connection",summary:"The Connection general header controls whether or not the network connection stays open after the current transaction finishes."},"content-disposition":{mdnSlug:"Web/HTTP/Headers/Content-Disposition",name:"Content-Disposition",summary:"In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page, or as an attachment, that is downloaded and saved locally."},"content-encoding":{mdnSlug:"Web/HTTP/Headers/Content-Encoding",name:"Content-Encoding",summary:"The Content-Encoding entity header is used to compress the media-type."},"content-language":{mdnSlug:"Web/HTTP/Headers/Content-Language",name:"Content-Language",summary:"The Content-Language entity header is used to describe the language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language."},"content-length":{mdnSlug:"Web/HTTP/Headers/Content-Length",name:"Content-Length",summary:"The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient."},"content-location":{mdnSlug:"Web/HTTP/Headers/Content-Location",name:"Content-Location",summary:"The Content-Location header indicates an alternate location for the returned data."},"content-range":{mdnSlug:"Web/HTTP/Headers/Content-Range",name:"Content-Range",summary:"The Content-Range response HTTP header indicates where in a full body message a partial message belongs."},"content-security-policy":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy",name:"Content-Security-Policy",summary:"The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page."},"content-security-policy-report-only":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy-Report-Only",name:"Content-Security-Policy-Report-Only",summary:"The HTTP Content-Security-Policy-Report-Only response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects."},"content-type":{mdnSlug:"Web/HTTP/Headers/Content-Type",name:"Content-Type",summary:"The Content-Type entity header is used to indicate the media type of the resource."},cookie:{mdnSlug:"Web/HTTP/Headers/Cookie",name:"Cookie",summary:"The Cookie HTTP request header contains stored HTTP cookies previously sent by the server with the Set-Cookie header."},cookie2:{mdnSlug:"Web/HTTP/Headers/Cookie2",name:"Cookie2",summary:'The obsolete Cookie2 HTTP request header used to advise the server that the user agent understands "new-style" cookies, but nowadays user agents will use the Cookie header instead, not this one.'},"cross-origin-embedder-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Embedder-Policy",name:"Cross-Origin-Embedder-Policy",summary:"The HTTP Cross-Origin-Embedder-Policy (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS)."},"cross-origin-opener-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Opener-Policy",name:"Cross-Origin-Opener-Policy",summary:"The HTTP Cross-Origin-Opener-Policy (COOP) response header allows you to ensure a top-level document does not share a browsing context group with cross-origin documents."},"cross-origin-resource-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Resource-Policy",name:"Cross-Origin-Resource-Policy",summary:"The HTTP Cross-Origin-Resource-Policy response header conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource."},dnt:{mdnSlug:"Web/HTTP/Headers/DNT",name:"DNT",summary:"The DNT (Do Not Track) request header indicates the user's tracking preference."},dpr:{mdnSlug:"Web/HTTP/Headers/DPR",name:"DPR",summary:"The DPR header is a Client Hints headers which represents the client device pixel ratio (DPR), which is the the number of physical device pixels corresponding to every CSS pixel."},date:{mdnSlug:"Web/HTTP/Headers/Date",name:"Date",summary:"The Date general HTTP header contains the date and time at which the message was originated."},"device-memory":{mdnSlug:"Web/HTTP/Headers/Device-Memory",name:"Device-Memory",summary:"The Device-Memory header is a Device Memory API header that works like Client Hints header which represents the approximate amount of RAM client device has."},digest:{mdnSlug:"Web/HTTP/Headers/Digest",name:"Digest",summary:"The Digest response HTTP header provides a digest of the requested resource."},etag:{mdnSlug:"Web/HTTP/Headers/ETag",name:"ETag",summary:"The ETag HTTP response header is an identifier for a specific version of a resource."},"early-data":{mdnSlug:"Web/HTTP/Headers/Early-Data",name:"Early-Data",summary:"The Early-Data header is set by an intermediary to indicate that the request has been conveyed in TLS early data, and also indicates that the intermediary understands the 425 (Too Early) status code."},expect:{mdnSlug:"Web/HTTP/Headers/Expect",name:"Expect",summary:"The Expect HTTP request header indicates expectations that need to be fulfilled by the server in order to properly handle the request."},"expect-ct":{mdnSlug:"Web/HTTP/Headers/Expect-CT",name:"Expect-CT",summary:"The Expect-CT header lets sites opt in to reporting and/or enforcement of Certificate Transparency requirements, to prevent the use of misissued certificates for that site from going unnoticed."},expires:{mdnSlug:"Web/HTTP/Headers/Expires",name:"Expires",summary:"The Expires header contains the date/time after which the response is considered stale."},"feature-policy":{mdnSlug:"Web/HTTP/Headers/Feature-Policy",name:"Feature-Policy",summary:"The HTTP Feature-Policy header provides a mechanism to allow and deny the use of browser features in its own frame, and in content within any <iframe> elements in the document."},forwarded:{mdnSlug:"Web/HTTP/Headers/Forwarded",name:"Forwarded",summary:"The Forwarded header contains information from the reverse proxy servers that is altered or lost when a proxy is involved in the path of the request."},from:{mdnSlug:"Web/HTTP/Headers/From",name:"From",summary:"The From request header contains an Internet email address for a human user who controls the requesting user agent."},host:{mdnSlug:"Web/HTTP/Headers/Host",name:"Host",summary:"The Host request header specifies the host and port number of the server to which the request is being sent."},"if-match":{mdnSlug:"Web/HTTP/Headers/If-Match",name:"If-Match",summary:"The If-Match HTTP request header makes the request conditional."},"if-modified-since":{mdnSlug:"Web/HTTP/Headers/If-Modified-Since",name:"If-Modified-Since",summary:"The If-Modified-Since request HTTP header makes the request conditional: the server will send back the requested resource, with a 200 status, only if it has been last modified after the given date."},"if-none-match":{mdnSlug:"Web/HTTP/Headers/If-None-Match",name:"If-None-Match",summary:"The If-None-Match HTTP request header makes the request conditional."},"if-range":{mdnSlug:"Web/HTTP/Headers/If-Range",name:"If-Range",summary:"The If-Range HTTP request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a 206 Partial Content answer with the appropriate body."},"if-unmodified-since":{mdnSlug:"Web/HTTP/Headers/If-Unmodified-Since",name:"If-Unmodified-Since",summary:"The If-Unmodified-Since request HTTP header makes the request conditional: the server will send back the requested resource, or accept it in the case of a POST or another non-safe method, only if it has not been last modified after the given date."},"keep-alive":{mdnSlug:"Web/HTTP/Headers/Keep-Alive",name:"Keep-Alive",summary:"The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests."},"large-allocation":{mdnSlug:"Web/HTTP/Headers/Large-Allocation",name:"Large-Allocation",summary:"The non-standard Large-Allocation response header tells the browser that the page being loaded is going to want to perform a large allocation."},"last-modified":{mdnSlug:"Web/HTTP/Headers/Last-Modified",name:"Last-Modified",summary:"The Last-Modified response HTTP header contains the date and time at which the origin server believes the resource was last modified."},link:{mdnSlug:"Web/HTTP/Headers/Link",name:"Link",summary:"The HTTP Link entity-header field provides a means for serialising one or more links in HTTP headers."},location:{mdnSlug:"Web/HTTP/Headers/Location",name:"Location",summary:"The Location response header indicates the URL to redirect a page to."},nel:{mdnSlug:"Web/HTTP/Headers/NEL",name:"NEL",summary:"The HTTP NEL response header is used to configure network request logging."},origin:{mdnSlug:"Web/HTTP/Headers/Origin",name:"Origin",summary:"The Origin request header indicates where a fetch originates from."},pragma:{mdnSlug:"Web/HTTP/Headers/Pragma",name:"Pragma",summary:"The Pragma HTTP/1.0 general header is an implementation-specific header that may have various effects along the request-response chain."},"proxy-authenticate":{mdnSlug:"Web/HTTP/Headers/Proxy-Authenticate",name:"Proxy-Authenticate",summary:"The HTTP Proxy-Authenticate response header defines the authentication method that should be used to gain access to a resource behind a proxy server."},"proxy-authorization":{mdnSlug:"Web/HTTP/Headers/Proxy-Authorization",name:"Proxy-Authorization",summary:"The HTTP Proxy-Authorization request header contains the credentials to authenticate a user agent to a proxy server, usually after the server has responded with a 407 Proxy Authentication Required status and the Proxy-Authenticate header."},"public-key-pins":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins",name:"Public-Key-Pins",summary:"The HTTP Public-Key-Pins response header used to associate a specific cryptographic public key with a certain web server to decrease the risk of MITM attacks with forged certificates, however, it has been removed from modern browsers and is no longer supported."},"public-key-pins-report-only":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins-Report-Only",name:"Public-Key-Pins-Report-Only",summary:"The HTTP Public-Key-Pins-Report-Only response header was used to send reports of pinning violation to the report-uri specified in the header but, unlike Public-Key-Pins still allows browsers to connect to the server if the pinning is violated."},range:{mdnSlug:"Web/HTTP/Headers/Range",name:"Range",summary:"The Range HTTP request header indicates the part of a document that the server should return."},referer:{mdnSlug:"Web/HTTP/Headers/Referer",name:"Referer",summary:"The Referer request header contains the address of the page making the request."},"referrer-policy":{mdnSlug:"Web/HTTP/Headers/Referrer-Policy",name:"Referrer-Policy",summary:"The Referrer-Policy HTTP header controls how much referrer information (sent via the Referer header) should be included with requests."},"retry-after":{mdnSlug:"Web/HTTP/Headers/Retry-After",name:"Retry-After",summary:"The Retry-After response HTTP header indicates how long the user agent should wait before making a follow-up request."},"save-data":{mdnSlug:"Web/HTTP/Headers/Save-Data",name:"Save-Data",summary:"The Save-Data header field is a boolean which, in requests, indicates the client's preference for reduced data usage."},"sec-fetch-dest":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Dest",name:"Sec-Fetch-Dest",summary:"The Sec-Fetch-Dest fetch metadata header indicates the request's destination, that is how the fetched data will be used."},"sec-fetch-mode":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Mode",name:"Sec-Fetch-Mode",summary:"The Sec-Fetch-Mode fetch metadata header indicates the request's mode."},"sec-fetch-site":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Site",name:"Sec-Fetch-Site",summary:"The Sec-Fetch-Site fetch metadata header indicates the relationship between a request initiator's origin and the origin of the resource."},"sec-fetch-user":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-User",name:"Sec-Fetch-User",summary:"The Sec-Fetch-User fetch metadata header indicates whether or not a navigation request was triggered by a user activation."},"sec-websocket-accept":{mdnSlug:"Web/HTTP/Headers/Sec-WebSocket-Accept",name:"Sec-WebSocket-Accept",summary:"The Sec-WebSocket-Accept header is used in the websocket opening handshake."},server:{mdnSlug:"Web/HTTP/Headers/Server",name:"Server",summary:"The Server header describes the software used by the origin server that handled the request — that is, the server that generated the response."},"server-timing":{mdnSlug:"Web/HTTP/Headers/Server-Timing",name:"Server-Timing",summary:"The Server-Timing header communicates one or more metrics and descriptions for a given request-response cycle."},"set-cookie":{mdnSlug:"Web/HTTP/Headers/Set-Cookie",name:"Set-Cookie",summary:"The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent, so the user agent can send it back to the server later."},"set-cookie2":{mdnSlug:"Web/HTTP/Headers/Set-Cookie2",name:"Set-Cookie2",summary:"The obsolete Set-Cookie2 HTTP response header used to send cookies from the server to the user agent, but has been deprecated by the specification."},sourcemap:{mdnSlug:"Web/HTTP/Headers/SourceMap",name:"SourceMap",summary:"The SourceMap HTTP response header links generated code to a source map, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger."},"strict-transport-security":{mdnSlug:"Web/HTTP/Headers/Strict-Transport-Security",name:"Strict-Transport-Security",summary:"The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) lets a web site tell browsers that it should only be accessed using HTTPS, instead of using HTTP."},te:{mdnSlug:"Web/HTTP/Headers/TE",name:"TE",summary:"The TE request header specifies the transfer encodings the user agent is willing to accept."},"timing-allow-origin":{mdnSlug:"Web/HTTP/Headers/Timing-Allow-Origin",name:"Timing-Allow-Origin",summary:"The Timing-Allow-Origin response header specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions."},tk:{mdnSlug:"Web/HTTP/Headers/Tk",name:"Tk",summary:"The Tk response header indicates the tracking status that applied to the corresponding request."},trailer:{mdnSlug:"Web/HTTP/Headers/Trailer",name:"Trailer",summary:"The Trailer response header allows the sender to include additional fields at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent, such as a message integrity check, digital signature, or post-processing status."},"transfer-encoding":{mdnSlug:"Web/HTTP/Headers/Transfer-Encoding",name:"Transfer-Encoding",summary:"The Transfer-Encoding header specifies the form of encoding used to safely transfer the payload body to the user."},"upgrade-insecure-requests":{mdnSlug:"Web/HTTP/Headers/Upgrade-Insecure-Requests",name:"Upgrade-Insecure-Requests",summary:"The HTTP Upgrade-Insecure-Requests request header sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests CSP directive."},"user-agent":{mdnSlug:"Web/HTTP/Headers/User-Agent",name:"User-Agent",summary:"The User-Agent request header is a characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent."},vary:{mdnSlug:"Web/HTTP/Headers/Vary",name:"Vary",summary:"The Vary HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server."},via:{mdnSlug:"Web/HTTP/Headers/Via",name:"Via",summary:"The Via general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers."},"www-authenticate":{mdnSlug:"Web/HTTP/Headers/WWW-Authenticate",name:"WWW-Authenticate",summary:"The HTTP WWW-Authenticate response header defines the authentication method that should be used to gain access to a resource."},"want-digest":{mdnSlug:"Web/HTTP/Headers/Want-Digest",name:"Want-Digest",summary:"The Want-Digest HTTP header is primarily used in a HTTP request, to ask the responder to provide a digest of the requested resource using the Digest response header."},warning:{mdnSlug:"Web/HTTP/Headers/Warning",name:"Warning",summary:"The Warning general HTTP header contains information about possible problems with the status of the message."},"x-content-type-options":{mdnSlug:"Web/HTTP/Headers/X-Content-Type-Options",name:"X-Content-Type-Options",summary:"The X-Content-Type-Options response HTTP header is a marker used by the server to indicate that the MIME types advertised in the Content-Type headers should not be changed and be followed."},"x-dns-prefetch-control":{mdnSlug:"Web/HTTP/Headers/X-DNS-Prefetch-Control",name:"X-DNS-Prefetch-Control",summary:"The X-DNS-Prefetch-Control HTTP response header controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth."},"x-forwarded-for":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-For",name:"X-Forwarded-For",summary:"The X-Forwarded-For (XFF) header is a de-facto standard header for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or a load balancer."},"x-forwarded-host":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Host",name:"X-Forwarded-Host",summary:"The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the original host requested by the client in the Host HTTP request header."},"x-forwarded-proto":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Proto",name:"X-Forwarded-Proto",summary:"The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer."},"x-frame-options":{mdnSlug:"Web/HTTP/Headers/X-Frame-Options",name:"X-Frame-Options",summary:"The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>."},"x-xss-protection":{mdnSlug:"Web/HTTP/Headers/X-XSS-Protection",name:"X-XSS-Protection",summary:"The HTTP X-XSS-Protection response header is a feature of Internet Explorer, Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks."}},Vt={connect:{mdnSlug:"Web/HTTP/Methods/CONNECT",name:"CONNECT",summary:"The HTTP CONNECT method starts two-way communications with the requested resource."},delete:{mdnSlug:"Web/HTTP/Methods/DELETE",name:"DELETE",summary:"The HTTP DELETE request method deletes the specified resource."},get:{mdnSlug:"Web/HTTP/Methods/GET",name:"GET",summary:"The HTTP GET method requests a representation of the specified resource."},head:{mdnSlug:"Web/HTTP/Methods/HEAD",name:"HEAD",summary:"The HTTP HEAD method requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method."},options:{mdnSlug:"Web/HTTP/Methods/OPTIONS",name:"OPTIONS",summary:"The HTTP OPTIONS method requests permitted communication options for a given URL or server."},patch:{mdnSlug:"Web/HTTP/Methods/PATCH",name:"PATCH",summary:"The HTTP PATCH request method applies partial modifications to a resource."},post:{mdnSlug:"Web/HTTP/Methods/POST",name:"POST",summary:"The HTTP POST method sends data to the server."},put:{mdnSlug:"Web/HTTP/Methods/PUT",name:"PUT",summary:"The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload."},trace:{mdnSlug:"Web/HTTP/Methods/TRACE",name:"TRACE",summary:"The HTTP TRACE method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism."}};function Jt(e,t){const n=e[t];if(n)return{url:`https://developer.mozilla.org/en-US/docs/${n.mdnSlug}`,name:n.name,summary:n.summary}}function Gt(e){return Jt(_t,e.toLowerCase())}function Kt(e){const t=Jt(Wt,e.toString());if(t)return t.message=t.name.split(" ").slice(1).join(" "),t}function Qt(e){if(!e)return"";const t=Wt[e.toString()];return t?t.name.slice(4):""}var Yt=n(73662);const Xt="^[!#$%&'*+\\-.^_`\\|~A-Za-z0-9]+$",Zt=new RegExp(Xt),en=e=>Object.entries(e||{}).reduce(((e,[t,n])=>(Array.isArray(n)?e=e.concat(n.map((e=>[t,e]))):e.push([t,n||""]),e)),[]),tn=e=>e.reduce(((e,[t,n])=>{const r=t.toLowerCase(),o=e[r];return void 0===o?e[r]=n:"string"==typeof o?e[r]=[o,n]:o.push(n),e}),{}),nn=(e,t)=>{if(Array.isArray(e)){t=t.toLowerCase();const n=m.findLast(e,(([e])=>e.toLowerCase()===t));return null==n?void 0:n[1]}{const n=e[t];return Array.isArray(n)?n[n.length-1]:n}},rn=(e,t)=>{if(Array.isArray(e))return t=t.toLowerCase(),e.filter((([e])=>e.toLowerCase()===t)).map((([e,t])=>t));{const n=e[t];return Array.isArray(n)?n:void 0!==n?[n]:[]}},on=(e,t,n,r={})=>{const o=t.toLowerCase();if(Array.isArray(e)){const s=m.findLast(e,(([e])=>e.toLowerCase()===o));s?s[1]=n:r.prepend?e.unshift([t,n]):e.push([t,n])}else e[Object.keys(e).find((e=>e.toLowerCase()===o))||t]=n},sn=(e,t)=>{const n=t.toLowerCase();if(Array.isArray(e)){const t=m.findLastIndex(e,(([e])=>e.toLowerCase()===n));-1!==t&&e.splice(t,1)}else delete e[Object.keys(e).find((e=>e.toLowerCase()===n))||t]},an=(e,t)=>(e=m.cloneDeep(e),Object.entries(t).forEach((([t,n])=>on(e,t,n))),e);function ln(e){return Array.isArray(e)?e[e.length-1]:e}function cn(e,t=","){return Array.isArray(e)?m.flatMap(e,(e=>e.split(t).map((e=>e.trim())))):e?e.split(t).map((e=>e.trim())):[]}var dn=n(19381),un=n(78559);function pn(e){if(e.length<2)return!1;const t=e[0]>>>3,n=7&e[0];return t>=1&&t<=3&&[0,1,2,5].includes(n)}const hn=dn.Ay;var mn=n(48287).Buffer;const gn=e=>{const t=(e||"").split(";")[0];let[n,r]=t.split(/\/(.+)/);if(!r)return n;if(fn[r]&&(r=`${r}+${fn[r]}`),vn[n+"/"+r])return n+"/"+r;const o=r.split("+").map((e=>n+"/"+e));return m.find(o,(e=>!!vn[e]))||m.last(o)},fn={grpc:"proto"},yn=["text","json","xml","html","css","javascript"],vn={"application/json":"json","text/json":"json","application/xml":"xml","text/xml":"xml","application/rss":"xml","application/javascript":"javascript","application/x-javascript":"javascript","application/ecmascript":"javascript","text/javascript":"javascript","text/plain":"text","text/csv":"text","application/x-www-form-urlencoded":"url-encoded","text/markdown":"markdown","text/x-markdown":"markdown","text/x-yaml":"yaml","text/yaml":"yaml","application/yaml":"yaml","image/png":"image","image/gif":"image","image/jpg":"image","image/jpeg":"image","image/svg":"image","image/tiff":"image","image/webp":"image","image/avif":"image","image/x-icon":"image","image/vnd.microsoft.icon":"image","text/css":"css","text/html":"html","application/xhtml":"html","application/protobuf":"protobuf","application/x-protobuf":"protobuf","application/vnd.google.protobuf":"protobuf","application/x-google-protobuf":"protobuf","application/proto":"protobuf","application/x-protobuffer":"protobuf","application/grpc+proto":"grpc-proto","application/grpc+protobuf":"grpc-proto","application/grpc-proto":"grpc-proto","application/grpc-protobuf":"grpc-proto","application/octet-stream":"raw"};function bn(e){const t=gn(e);return vn[t]}function xn(e){if(yn.includes(e))return e}function wn(e){const t=gn(e);return xn(vn[t])}function En(e){return"raw"===e?"Hex":"json"===e?"JSON":"css"===e?"CSS":"url-encoded"===e?"URL-Encoded":"grpc-proto"===e?"gRPC":m.capitalize(e)}function Cn(e){return m.findKey(vn,(t=>t===e))}function Tn(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||61===e}function Sn(e){return 43===e||47===e||Tn(e)}function Pn(e){return 45===e||95===e||Tn(e)}function kn(e,t,n,r){let o=new Set([e]);n&&!mn.isBuffer(n)&&(n=n.decoded);const s=n&&n.slice(0,1).toString("ascii");return"{"!==s&&"["!==s||o.add("json"),"<"===s&&o.add("xml"),n&&!o.has("protobuf")&&!o.has("grpc-proto")&&pn(n)&&n.length<1e5&&(e=>{try{return hn(e),!0}catch(e){return!1}})(n)&&o.add("protobuf"),n&&!o.has("grpc-proto")&&((e,t)=>{if(e.byteLength<7)return!1;const n=e.readUInt8(),r=e.readUInt32BE(1),o=e.slice(5,5+r);return r>=2&&o.length==r&&(0==n&&pn(o)||1==n&&Object.keys(t).includes("grpc-encoding"))})(n,null!=r?r:{})&&n.length<1e5&&((e,t)=>{try{const n=((e,t)=>{var n;const r=ln(null!==(n=t["grpc-encoding"])&&void 0!==n?n:"identity").toLocaleLowerCase(),o="gzip"==r?un.gunzipSync:"deflate"==r?un.inflateSync:void 0,s=[];let a=0,i=0;for(;e.length>0;){const t=`gRPC message #${i} @${a}: `,n=e.readUInt8(),l=e.readUInt32BE(1);let c=e.slice(5,5+l);if(c.length!=l)throw new Error(`${t}length of message is corrupted`);switch(n){case 0:break;case 1:if(!o)throw new Error(`${t}not expected to be compressed`);try{c=o(c)}catch(e){throw new Error(`${t}failed decompression (from ${r})`)}break;default:throw new Error(`${t}unsupported compression flag (0x${n.toString(16).padStart(2,"0")})`)}s.push(c),e=e.subarray(5+l),a+=5+l,i++}return s})(e,t);return n.forEach((e=>hn(e))),!0}catch(e){return!1}})(n,null!=r?r:{})&&o.add("grpc-proto"),t&&t.startsWith("image/svg")&&o.add("xml"),n&&!o.has("base64")&&n.length>=8&&n.length<1e5&&(n.every(Sn)||n.every(Pn))&&o.add("base64"),o.add("text"),o.add("raw"),Array.from(o)}const Rn=e=>{var t;return((null===(t=ln(e.headers.accept))||void 0===t?void 0:t.split(","))||[]).map((e=>gn(e)))},On=e=>gn(ln(e.headers["content-type"])),Hn=e=>m.includes(["POST","PATCH","PUT","DELETE"],e.request.method),An=["application/json","application/xml","application/rss","text/plain","text/xml","text/json","multipart/form-data","application/x-www-form-urlencoded","application/x-protobuf"];function qn(e){const t=In(e);return`${m.startCase(m.findKey($n,(e=>e===t)))}: ${{mutative:"a request that might affect the server state (unlike a GET request)",incomplete:"an incomplete request",aborted:"an aborted request",image:"a request for an image",js:"a request for JavaScript",css:"a request for CSS",html:"a request for HTML",font:"a request for a font file",data:"an API request",websocket:"a WebSocket stream","rtc-data":"a WebRTC data stream","rtc-media":"a WebRTC media stream",unknown:"an unknown type of request"}[e]}`}const $n={black:"#000",grey:"#888",red:"#ce3939",lightGreen:"#4caf7d",brightGreen:"#409309",orange:"#ff8c38",yellow:"#e9f05b",lightBlue:"#2fb4e0",darkBlue:"#5a80cc",purple:"#6e40aa",pink:"#dd3a96"};function In(e){switch("string"==typeof e?e:e.category){case"incomplete":case"aborted":return $n.black;case"mutative":return $n.red;case"data":case"rtc-data":return $n.purple;case"websocket":return $n.lightBlue;case"image":return $n.lightGreen;case"font":case"rtc-media":return $n.brightGreen;case"js":return $n.orange;case"css":return $n.yellow;case"html":return $n.darkBlue;case"unknown":return $n.grey}}function jn(e,t){return!e||"aborted"===e||e<100||e>=600?t.mainColor:e>=500?$n.red:e>=400?$n.orange:e>=300?$n.darkBlue:e>=200?$n.lightGreen:101===e?$n.lightBlue:e>=100?$n.grey:$n.black}function Dn(e,t){return e&&"aborted"!==e?1e3===e||1001===e?$n.lightGreen:e>=1002&&e<=3e3?$n.red:e>=3e3?$n.orange:$n.black:t.mainColor}function Mn(e){return"GET"===e?$n.lightGreen:"POST"===e?$n.orange:"DELETE"===e?$n.red:"PUT"===e?$n.purple:"PATCH"===e?$n.pink:"HEAD"===e?$n.darkBlue:"OPTIONS"===e?$n.lightBlue:$n.grey}var Bn=n(48287).Buffer,Fn=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Nn{constructor(e,t,n){this.messageIndex=t,this.subprotocol=n,this.cache=w.observable.map(new Map,{deep:!1}),this.inputMessage=e}get direction(){return this.inputMessage.direction}get content(){return Nt(this.inputMessage.content)}get isBinary(){return this.inputMessage.isBinary}get contentType(){var e,t;if(this.inputMessage.isBinary)return(null===(e=this.subprotocol)||void 0===e?void 0:e.includes("proto"))?"protobuf":"raw";const n=this.content.slice(0,10).toString("utf-8").trim();return n.includes("{")||n.includes("[")||(null===(t=this.subprotocol)||void 0===t?void 0:t.includes("json"))?"json":"text"}get timestamp(){return this.inputMessage.eventTimestamp}cleanup(){this.inputMessage.content=Bn.from([]),this.cache.clear()}}Fn([w.observable],Nn.prototype,"inputMessage",void 0),Fn([w.computed],Nn.prototype,"content",null);var Ln=n(77232),Un=n(25214),Wn=n(26101),zn=n(85692),_n=n(84578),Vn=n(10124),Jn=n(4455),Gn=n(70112),Kn=n(48246),Qn=n(37430),Yn=n(6154),Xn=n(17023),Zn=n(86061),er=n(15451),tr=n(57289),nr=n(35179),rr=n(64178),or=n(5805),sr=n(86429),ar=n(7612),ir=n(59841),lr=n(81021),cr=n(61145),dr=n(31393),ur=n(25796),pr=n(15201),hr=n(18633),mr=n(52169),gr=n(19179),fr=n(86419),yr=n(31226),vr=n(62672),br=n(6151),xr=n(29332),wr=n(64992),Er=n(35177),Cr=n(41607),Tr=n(28045),Sr=n(14133),Pr=n(34496),kr=n(35532),Rr=n(62882),Or=n(14190),Hr=n(42456),Ar=n(83070),qr=n(83383),$r=n(98808),Ir=n(50726),jr=n(19616),Dr=n(80961),Mr=n(61087),Br=n(59095),Fr=n(76638),Nr=n(78967),Lr=n(97879),Ur=n(54123),Wr=n(23608),zr=n(22017),_r=n(34213),Vr=n(22085),Jr=n(10518),Gr=n(77312),Kr=n(5709),Qr=n(50912),Yr=n(31304),Xr=n(900),Zr=n(43594),eo=n(22777),to=n(91651),no=n(81617),ro=n(488),oo=n(25936),so=n(29338),ao=n(64479),io=n(33348),lo=n(38217),co=n(86342),uo=n(35540),po=n(57589),ho=n(62110),mo=n(58437),go=n(98152),fo=n(50915),yo=n(20579),vo=n(35406),bo=n(17842),xo=n(83720),wo=n(27064),Eo=n(11564),Co=n(46784);const To=ve.memo((e=>{const{icon:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["icon"]),r=So[e.icon];return ve.createElement(r,Object.assign({},n,{className:"phosphor-icon "+(e.className||"")}))})),So={Plugs:Wn.w,MagnifyingGlass:zn.e,Pencil:_n.g,PaperPlaneTilt:Vn.M,GearSix:Jn._,Star:Gn.F,ChatText:Kn.o,Pause:Qn.v,Plug:Yn.F,QuestionMark:Xn.a,ArrowLeft:Zn.n,MagicWand:er.a,Sun:tr.b,Moon:nr.A,CircleHalf:rr.e,Swatches:or.l};sr.Yv.add({prefix:"fac",iconName:"spinner-arc",icon:[50,50,[],"","M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"]},lr.Ce,ar.z1,ir.Be,cr.Mj,dr.Qt,ur.Ni,pr.Ar,hr.MN,mr.Ev,gr.GR,fr.w2,yr.Jt,vr.Df,br.DN,xr.np,wr.tK,Er.jP,Cr.A,Tr.QL,Sr.EZ,Pr.zp,kr.bx,Rr.rC,Or.dB,Hr.yy,Ar.nE,qr.oM,$r.PJ,Ir.Rp,jr.Jm,Dr.cb,Mr.ij,Br.G1,Fr.R7,Nr.SZ,Lr.S9,Ur.U2,Wr.hS,zr.Uj,_r.KK,Vr.MT,Jr._v,Gr.XR,Kr.oZ,Qr.l0,Yr.vJ,Xr.pS,Zr.xB,eo.ec,to.$3,no.e6,ro.rr,oo.is,so.EK,ao.lC,io._y,lo.VL,co.qK,uo.Ck,po.RI,ho.yb,mo.ny,{prefix:"fac",iconName:"brave-browser",icon:[11.1,13.23,[],"","m 5.53752561206,8.23273389478 c 0.07589,0 0.562136,0.174874 0.952332,0.380547 0.39017,0.205699 0.672941,0.351155 0.76334,0.408778 0.09038,0.05764 0.03526,0.166326 -0.04706,0.225614 -0.08235,0.05928 -1.188755,0.932071 -1.296127,1.028532 -0.107394,0.09649 -0.265189,0.255822 -0.372477,0.255822 -0.107288,0 -0.265105,-0.159332 -0.372478,-0.255822 -0.107393,-0.09646 -1.213784,-0.969245 -1.296127,-1.028532 -0.08235,-0.05928 -0.137439,-0.167962 -0.04706,-0.225614 0.09041,-0.05761 0.37317,-0.203079 0.763368,-0.408778 0.390141,-0.205673 0.876414,-0.380547 0.952305,-0.380547 z m 0.0059,-6.216331 c 0.03726,0.001 0.247208,0.01141 0.547814,0.113516 0.332248,0.112822 0.692182,0.253848 0.858305,0.253848 0.166126,0 1.398212,-0.239745 1.398212,-0.239745 0,0 1.460117,1.798085 1.460117,2.182382 0,0.384295 -0.183677,0.485723 -0.368352,0.6855 -0.184673,0.199778 -0.991233,1.072279 -1.094811,1.18431 -0.103578,0.112061 -0.319207,0.28194 -0.192371,0.587712 0.126834,0.305775 0.313945,0.694866 0.105872,1.089514 -0.208099,0.394647 -0.564572,0.658056 -0.792993,0.614507 -0.228419,-0.04357 -0.764862,-0.329155 -0.962134,-0.459604 -0.197272,-0.130452 -0.822508,-0.655744 -0.822508,-0.856734 0,-0.200962 0.646305,-0.561821 0.765694,-0.643814 0.119441,-0.08196 0.664051,-0.399302 0.67521,-0.523856 0.01115,-0.124579 0.0069,-0.161108 -0.153831,-0.468883 -0.160725,-0.307805 -0.450169,-0.71853 -0.401992,-0.991811 0.04818,-0.273252 0.514985,-0.415351 0.848119,-0.543515 0.333078,-0.128132 0.974454,-0.370165 1.054553,-0.407791 0.08015,-0.03766 0.05946,-0.07349 -0.183289,-0.09695 -0.24268,-0.02344 -0.93143,-0.11657 -1.241942,-0.0284 -0.310514,0.08816 -0.841003,0.222315 -0.883974,0.293448 -0.04297,0.07114 -0.08088,0.07353 -0.03675,0.318918 0.0441,0.245385 0.271308,1.422841 0.293347,1.631983 0.02206,0.209143 0.06521,0.347404 -0.156157,0.398964 -0.221387,0.05155 -0.594031,0.141082 -0.722085,0.141082 -0.128053,0 -0.500724,-0.08953 -0.722085,-0.141082 -0.221388,-0.05155 -0.178251,-0.189821 -0.156185,-0.398964 0.02207,-0.209142 0.249242,-1.386598 0.293376,-1.631983 0.0441,-0.245386 0.0061,-0.247783 -0.03675,-0.318918 -0.04297,-0.07114 -0.573487,-0.205278 -0.884001,-0.293448 -0.310513,-0.08816 -0.999234,0.005 -1.241942,0.0284 -0.242707,0.02344 -0.263418,0.05928 -0.18329,0.09695 0.08012,0.03762 0.721504,0.279654 1.054581,0.407791 0.333108,0.128171 0.799944,0.270263 0.848119,0.543515 0.04818,0.273281 -0.241294,0.684006 -0.401992,0.991811 -0.160724,0.307775 -0.164988,0.3443 -0.153829,0.468883 0.01115,0.124552 0.555766,0.441892 0.675182,0.523856 0.119415,0.08199 0.765693,0.442852 0.765693,0.643814 0,0.20099 -0.625209,0.726284 -0.822481,0.856734 -0.197272,0.130452 -0.733713,0.416028 -0.962134,0.459604 -0.22842,0.04355 -0.584894,-0.21986 -0.792992,-0.614507 -0.20807,-0.394648 -0.02096,-0.783739 0.105846,-1.089514 0.126835,-0.305772 -0.08877,-0.475652 -0.192372,-0.587712 -0.103552,-0.112035 -0.910138,-0.984532 -1.094811,-1.18431 -0.184675,-0.199777 -0.368325,-0.301205 -0.368325,-0.6855 0,-0.384297 1.460119,-2.182382 1.460119,-2.182382 0,0 1.232086,0.239745 1.39821,0.239745 0.166123,0 0.526058,-0.141026 0.858306,-0.253848 0.300606,-0.102072 0.510551,-0.112467 0.547815,-0.113516 z m 5.143909,1.157116 0.304561,-0.761542 c 0,0 -0.387622,-0.423078 -0.858308,-0.902568 -0.470683,-0.479489 -1.467428,-0.197436 -1.467428,-0.197436 l -1.135179,-1.311968 h -1.993525 -1.993488 l -1.135179,1.311968 c 0,0 -0.996745,-0.282053 -1.467428,0.197436 -0.470686,0.47949 -0.858308,0.902568 -0.858308,0.902568 l 0.304561,0.761542 -0.387622,1.128209 c 0,0 1.140025,4.398751 1.273616,4.935921 0.263029,1.057696 0.442998,1.466672 1.190555,2.002574 0.747558,0.535898 2.104237,1.466672 2.325735,1.607698 0.221498,0.141026 0.498373,0.38125 0.747558,0.38125 0.249185,0 0.52606,-0.240224 0.747558,-0.38125 0.221498,-0.141026 1.578177,-1.0718 2.325735,-1.607698 0.747557,-0.535902 0.927525,-0.944878 1.190555,-2.002574 0.133563,-0.53717 1.273616,-4.935921 1.273616,-4.935921 z"]},{prefix:"fac",iconName:"arc-browser",icon:[56.4,67.36,[],"","m 58.458706,45.75 -3.5,-7.36 -6.63,-13.95 -0.01,0.01 c 0,0 0,-0.01 0.01,-0.01 l -9.64,-20.28 a 7.292,7.292 0 0 0 -6.58,-4.16 c -2.81,0 -5.37,1.62 -6.58,4.16 l -9.83,20.68 c 2.76,3.65 7.64,6.65 12.49,7.68 l 3.18,-6.68 c 0.3,-0.63 1.2,-0.63 1.5,0 l 3.11,6.54 h 0.02 -0.02 l 6.33,13.32 3.11,6.54 a 7.28,7.28 0 0 0 6.59,4.16 c 0.65,0 1.3,-0.09 1.94,-0.27 4.39,-1.21 6.47,-6.26 4.51,-10.38 m -22.49,-13.37 c -1.42,0.34 -2.87,0.52 -4.32,0.52 -1.13,0 -2.3,-0.13 -3.47,-0.38 -4.85,-1.03 -9.73,-4.03 -12.49,-7.68 -0.69,-0.91 -1.25,-1.86 -1.64,-2.83 -1.51,-3.73 -5.7600005,-5.53 -9.4900005,-4.03 -3.73000009,1.51 -5.53000009,5.76 -4.03000009,9.49 C 2.2387054,31.71 5.2587055,35.6 9.0487055,38.8 a 37.84,37.84 0 0 0 12.7700005,7.08 c 3.21,1.03 6.54,1.6 9.82,1.6 3.64,0 7.23,-0.63 10.65,-1.78 z m 25.54,-23.1800005 a 7.29,7.29 0 0 0 -8.58,5.7200005 c -0.7,3.5 -2.34,6.759999 -4.6,9.53 l 6.63,13.96 c 6.12,-5.31 10.64,-12.54 12.26,-20.63 0.79,-3.96 -1.77,-7.8000005 -5.71,-8.5800005 M 9.0487055,38.8 l -3.32,6.98 c -1.69,3.549999 -0.42,7.92 3.06,9.769999 3.6900005,1.96 8.2300005,0.43 10.0100005,-3.299999 l 3.03,-6.37 A 37.885,37.885 0 0 1 9.0487055,38.8"]},go.Xb,fo.lS,yo.H,vo.Ou,bo.ar,xo.RS,wo.Bw,Eo.SY);const Po={Chrome:{icon:["fab","chrome"],color:"#1da462"},Chromium:{icon:["fab","chrome"],color:"#4489f4"},Firefox:{icon:["fab","firefox"],color:"#e66000"},Safari:{icon:["fab","safari"],color:"#448aff"},Edge:{icon:["fab","edge"],color:"#2c75be"},IE:{icon:["fab","internet-explorer"],color:"#00baf0"},Opera:{icon:["fab","opera"],color:"#cb0b1e"},Brave:{icon:["fac","brave-browser"],color:"#fb542b"},Arc:{icon:["fac","arc-browser"],color:"#ff536a"},Git:{icon:["fas","code-branch"],color:"#f05033"},Php:{icon:["fab","php"],color:"#8892bf"},Ruby:{icon:["fas","gem"],color:"#CC342D"},Faraday:{icon:["fas","gem"],color:"#CC342D"},Excon:{icon:["fas","gem"],color:"#CC342D"},Typhoeus:{icon:["fas","gem"],color:"#CC342D"},Rubybindings:{icon:["fas","gem"],color:"#CC342D"},Npm:{icon:["fab","npm"],color:"#cc3534"},Node:{icon:["fab","node-js"],color:"#3c873a"},Got:{icon:["fab","node-js"],color:"#3c873a"},Axios:{icon:["fab","node-js"],color:"#3c873a"},Nodebindings:{icon:["fab","node-js"],color:"#3c873a"},Pip:{icon:["fab","python"],color:"#646464"},Python:{icon:["fab","python"],color:"#4584b6"},Urlfetch:{icon:["fab","python"],color:"#4584b6"},Pycurl:{icon:["fab","python"],color:"#4584b6"},Pythonbindings:{icon:["fab","python"],color:"#4584b6"},Java:{icon:["fab","java"],color:"#007396"},Reactornetty:{icon:["fab","java"],color:"#007396"},Jetty:{icon:["fab","java"],color:"#007396"},Jakarta:{icon:["fab","java"],color:"#007396"},Akka:{icon:["fab","java"],color:"#007396"},Intellij:{icon:["fab","java"],color:"#007396"},Ktor:{icon:["fab","java"],color:"#007396"},Ahc:{icon:["fab","java"],color:"#007396"},Android:{icon:["fab","android"],color:"#78C257"},Okhttp:{icon:["fab","android"],color:"#78C257"},Fbandroidsdk:{icon:["fab","android"],color:"#78C257"},Iphone:{icon:["fab","apple"],color:"#000"},iOS:{icon:["fab","apple"],color:"#000"},Ios:{icon:["fab","apple"],color:"#000"},Ipad:{icon:["fab","apple"],color:"#000"},Darwin:{icon:["fab","apple"],color:"#000"},Docker:{icon:["fab","docker"],color:"#0db7ed"},Terminal:{icon:["fas","terminal"],color:"#20c20e"},Network:{icon:["fas","network-wired"],color:"#888"},Electron:{icon:["fas","atom"],color:"#9FEAF9"},Desktop:{icon:["fas","desktop"],color:"#888"},Unknown:{icon:["fas","question"],color:"#888"}},ko=ve.memo(Co.g),Ro=e=>Array.isArray(e.icon)?ve.createElement(ko,Object.assign({},e,{size:e.size,icon:e.icon})):ve.createElement(To,{icon:e.icon,onClick:e.onClick,onKeyPress:e.onKeyPress,color:e.color,size:e.size||"1.25em",className:e.className,alt:e.title}),Oo=Le(ko).attrs((()=>({icon:["fas","lightbulb"]})))`
    margin: 0 6px;
    color: #2fb4e0;
`,Ho=Io({prefix:"fas",iconName:"lightbulb"},{styles:{margin:"0 6px",color:"#2fb4e0"}}),Ao=Le(ko).attrs((()=>({icon:["fas","exclamation-triangle"]})))`
    margin: 0 6px;
    color: ${e=>e.theme.warningColor};
`,qo=Io({prefix:"fas",iconName:"exclamation-triangle"},{styles:{margin:"0 6px",color:Pe}}),$o=Le(ko).attrs((()=>({fixedWidth:!0,icon:["fas","arrow-left"]})))`
    ${e=>"right"===e.direction?"transform: rotate(180deg);":""}
    padding: 0 15px;
`;function Io(e,t){return(0,sr.Kk)(e,t).html.join("")}function jo(e){return e?" "+e.split(".").slice(0,2).join(".").replace(/\.0$/,""):""}const Do=e=>{const t=m(e.os).values().some(),n=m(e.browser).values().some(),r=m.upperFirst(e.ua.split(" ")[0]);if(t||n){const o=t?` (${m.upperFirst(e.os.name)}${jo(e.os.version)})`:"";return(n?(e.browser.name||"")+jo(e.browser.version):r)+o}return r};function Mo(e){const t=e[0].toLowerCase();return"a"===t||"e"===t||"i"===t||"o"===t||"u"===t?"an ":"a "}const Bo=e=>{if(!e.browser.name&&!e.os.name&&!e.device.type)return;const t=e.browser.name?e.browser.name+jo(e.browser.version)+(e.engine.name?`, based on the ${e.engine.name}${"Blink"!==e.engine.name?jo(e.engine.version):""} engine`:""):e.engine.name?`a browser built on the ${e.engine.name}${jo(e.engine.version)} engine`:"",n=(e.device.vendor?`${e.device.vendor} `:"")+(e.device.model?`${e.device.model} `:"")+(e.device.type?"mobile"===e.device.type?"mobile phone":e.device.type+" ":""),r=e.os.name?`running ${e.os.name}${jo(e.os.version)}`:"",o=e.cpu.architecture?`${Mo(e.cpu.architecture)}${e.cpu.architecture} CPU`:"",s=(n?`${Mo(n)}${n}`:"")+(n&&r?", ":"")+r+(o?(n||r?", with ":" using ")+o:"");return`This request came from ${t?t+(s?". The device is "+s:""):n?s:"a device "+s}.`},Fo=e=>!(!e||!m.has(Po,e)),No=e=>{const t=(0,Un.Jt)(e,"browser","name");if(Fo(t))return Po[t];const n=e.ua.match(/[A-Za-z]+/g)||[],r=m.find(n.map((e=>m.upperFirst(e.toLowerCase()))),(e=>Fo(e)));return r?Po[r]:Po.Unknown},Lo={ua:"",summary:"Unknown client",icon:Po.Unknown},Uo={ua:"",summary:"HTTP Toolkit (Send)",description:"Sent manually from HTTP Toolkit",icon:{icon:"PaperPlaneTilt",color:Re}},Wo=e=>{if(!e)return Lo;const t=new Ln.UAParser(e).getResult();return function(e){const t=e.ua.match(/Electron\/(\S+)/);t&&(e.engine=e.browser||e.engine,e.browser={name:"Electron",version:t[1],major:t[1].split(".")[0]})}(t),{ua:t.ua,summary:Do(t),description:Bo(t),icon:No(t)}};var zo=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class _o{constructor(){this.searchIndex="",this.pinned=!1,this.cache=w.observable.map(new Map,{deep:!1})}isHttp(){return!1}isWebSocket(){return!1}isTlsFailure(){return!1}isTlsTunnel(){return!1}isRTCConnection(){return!1}isRTCDataChannel(){return!1}isRTCMediaTrack(){return!1}get category(){return function(e){if(e.isHttp()){if(!e.isCompletedExchange())return Hn(e)?"mutative":"incomplete";if(!e.isSuccessfulExchange())return"aborted";if(e.isWebSocket())return"websocket";if(Hn(e))return"mutative";if((e=>{const t=Rn(e.request);return!!(t.length>0&&t.every((e=>e.startsWith("image/"))))||"image"===e.request.headers["sec-fetch-dest"]||On(e.response).startsWith("image/")})(e))return"image";if("script"===(t=e).request.headers["sec-fetch-dest"]||m.includes(["text/javascript","application/javascript","application/x-javascript","application/ecmascript"],On(t.response)))return"js";if((e=>"style"===e.request.headers["sec-fetch-dest"]||m.includes(["text/css"],On(e.response)))(e))return"css";if((e=>"document"===e.request.headers["sec-fetch-dest"]||"text/html"===On(e.response))(e))return"html";if((e=>"font"===e.request.headers["sec-fetch-dest"]||On(e.response).startsWith("font/")||m.includes(["application/font-woff","application/x-font-woff","application/font-otf","application/font","application/vnd.ms-fontobject","application/x-font-ttf","application/x-font-typetype","application/x-font-opentype"],On(e.response)))(e))return"font";if((e=>{const t=Rn(e.request);return!!(t.length>0&&t.every((e=>An.includes(e))))||m.includes(An,On(e.response))})(e))return"data"}else{if(e.isRTCDataChannel())return"rtc-data";if(e.isRTCMediaTrack())return"rtc-media"}var t;return"unknown"}(this)}}zo([w.computed],_o.prototype,"category",null),zo([w.observable],_o.prototype,"searchIndex",void 0),zo([w.observable],_o.prototype,"pinned",void 0);var Vo=n(88483);const Jo=Object.values(Vo.IT).filter((e=>"string"==typeof e));var Go=n(48287).Buffer;const Ko=e=>ut.Ie(e,(()=>ut._Z)),Qo=ut.Ie((e=>({source:e.source,flags:e.flags})),(e=>new RegExp(e.source,e.flags))),Yo=ut.Ie((e=>void 0!==e?Nt(e).toString("base64"):void 0),(e=>void 0!==e?Go.from(e,"base64"):void 0)),Xo="__http_toolkit_undefined_placeholder__",Zo=ut.Ie((e=>e?JSON.stringify(e,((e,t)=>void 0===t?Xo:t)):void 0),(e=>e?x(JSON.parse(e),(e=>e===Xo?void 0:e)):void 0));function es(e,t,n){let r,o;if(e.deserializer(t,((e,t)=>{e?o=e:r=t}),n,void 0),o)throw o;return r}const ts=e=>!!ut.Yu(e);function ns(e){return m.isObject(e)&&"items"in(e||{})}function rs(e){return ns(e)&&"isRoot"in e&&!0===e.isRoot}function os(e,t){return ss(e,t.slice(0,-1))}function ss(e,t){return t.reduce(((e,n,r)=>{if(!ns(e))throw new Error(`Invalid path ${t} at step #${r}, found ${e}`);return e.items[n]}),e)}function as(e,t,n){const r=t.slice(0,-1),o=m.last(t),s=r.length?ss(e,r):e;return s.items[o]=n,s}function is(e,t){const n=os(e,t),r=m.last(t);n.items.splice(r,1),0!==n.items.length||rs(n)||is(e,t.slice(0,-1))}function ls(e,t){return m.isMatch(e,t)?e:m.reduce(e.items,((e,n)=>e||(ns(n)?ls(n,t):m.isMatch(n,t)?n:void 0)),void 0)}function cs(e,t,n=[]){return m.isMatch(e,t)?n:m.reduce(e.items,((e,r,o)=>e||(ns(r)?cs(r,t,n.concat(o)):m.isMatch(r,t)?n.concat(o):void 0)),void 0)}ut.gt({"*":!0});const ds=e=>us(e,(e=>e));function us(e,t,n=[],r=0){return e.items.reduce(((e,o,s)=>{const a=r+s;return ns(o)?e.concat(us(o,t,n.concat(s),a)):e.concat([t(o,n.concat(s),a)])}),[])}function ps(e){return ns(e)?(n=e,Object.assign(Object.assign({},n),{items:n.items.map((e=>ps(e))),collapsed:!0,id:p()})):(t=e,(0,w.observable)(Object.assign(Object.assign({},t),{matchers:[...t.matchers],id:p()})));var t,n}const hs=(e,t)=>ns(e)?!!ns(t)&&ms(e,t):!ns(t)&&fs(e,t),ms=(e,t)=>e.id===t.id&&e.title===t.title&&m.isEqualWith(e.items,t.items,hs),gs=Symbol("custom-rule-is-equals"),fs=(e,t)=>e&&t&&e[gs]&&e[gs]===t[gs]?(0,e[gs])(e,t):m.isFunction(e)&&m.isFunction(t)?e.toString()===t.toString():m.isObject(e)&&m.isObject(t)&&(Object.values(e).includes(void 0)||Object.values(t).includes(void 0))?m.isEqualWith(m.omitBy(e,(e=>void 0===e)),m.omitBy(t,(e=>void 0===e)),fs):void 0;var ys=n(48287).Buffer;const vs=m.reduce(Jo,((e,t)=>(e[t]=class extends Vo.yN.MethodMatcher{constructor(){super(Vo.IT[t]),this.uiType=t}explain(){return`${Vo.IT[this.method]} requests`}},e)),{});class bs extends Vo.yN.WildcardMatcher{explain(){return"Any requests"}}class xs extends Vo.yN.WildcardMatcher{constructor(){super(...arguments),this.uiType="default-wildcard"}explain(){return"Any other requests"}}class ws extends Vo.yN.RegexPathMatcher{constructor(){super(/^https?:\/\/amiusing\.httptoolkit\.tech\/?$/),this.uiType="am-i-using"}explain(){return"for amiusing.httptoolkit.tech"}}class Es extends Vo.S6.SimpleHandlerDefinition{explain(){return`respond with status ${this.status}${Lt(this.data)?" and static content":""}`}}ut.PL(Es,{data:ut.Ie((e=>!e||"string"==typeof e||Ft(e)?e:{type:"Buffer",data:[...e]}),(e=>e?"string"==typeof e?e:ys.from(e.data):void 0)),"*":Object.assign(ut.Ie((e=>e),(e=>e)),{pattern:{test:e=>"data"!==e}})},(()=>new Es(200)));class Cs extends Vo.S6.FileHandlerDefinition{explain(){return`respond with status ${this.status} and content from ${this.filePath||"a file"}`}}class Ts extends Vo.S6.PassThroughHandlerDefinition{constructor(e){super(e.activePassthroughOptions)}}ut.PL(Ts,{type:ut.MY()},(e=>new Ts(e.args.rulesStore)));class Ss extends Vo.S6.PassThroughHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},n.activePassthroughOptions),{forwarding:{targetHost:e,updateHostHeader:t}})),this.uiType="forward-to-host"}}ut.PL(Ss,{uiType:Ko((()=>"forward-to-host")),type:ut.MY(),forwarding:ut.Tj(ut.MY())},(e=>{const t=e.json;return new Ss(t.forwarding.targetHost,t.forwarding.updateHostHeader,e.args.rulesStore)}));class Ps extends Vo.S6.PassThroughHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},e.activePassthroughOptions),{transformRequest:t,transformResponse:n})),this.uiType="req-res-transformer"}explain(){const e=m.pickBy(this.transformRequest||{},(e=>void 0!==e)),t=m.pickBy(this.transformResponse||{},(e=>void 0!==e));return m.isEmpty(e)&&m.isEmpty(t)?super.explain():m.isEmpty(e)||m.isEmpty(t)?m.isEmpty(e)?"automatically transform the response from the target host":"automatically transform the request then pass it through to the target host":"automatically transform the request and response"}[gs](e,t){return m.isEqual(e.transformRequest,t.transformRequest)&&m.isEqual(e.transformResponse,t.transformResponse)}}ut.PL(Ps,{uiType:Ko((()=>"req-res-transformer")),transformRequest:ut.Ik(ut.gt({updateHeaders:Zo,updateJsonBody:Zo,replaceBody:Yo,matchReplaceBody:ut.p_(ut.Ie((([e,t])=>[{source:e.source,flags:e.flags},t]),(([e,t])=>[new RegExp(e.source,e.flags),t]))),"*":Object.assign(ut.lS(),{pattern:{test:()=>!0}})})),transformResponse:ut.Ik(ut.gt({updateHeaders:Zo,updateJsonBody:Zo,replaceBody:Yo,matchReplaceBody:ut.p_(ut.Ie((([e,t])=>[{source:e.source,flags:e.flags},t]),(([e,t])=>[new RegExp(e.source,e.flags),t]))),"*":Object.assign(ut.lS(),{pattern:{test:()=>!0}})}))},(e=>{const t=e.json;return new Ps(e.args.rulesStore,t.transformRequest,t.transformResponse)}));class ks extends Vo.S6.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint})),this.uiType="request-breakpoint"}explain(){return"manually rewrite the request before it's forwarded"}}ut.PL(ks,{uiType:Ko((()=>"request-breakpoint")),type:ut.MY()},(e=>new ks(e.args.rulesStore)));class Rs extends Vo.S6.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeResponse:e.triggerResponseBreakpoint})),this.uiType="response-breakpoint"}explain(){return"manually rewrite the response before it's returned"}}ut.PL(Rs,{uiType:Ko((()=>"response-breakpoint")),type:ut.MY()},(e=>new Rs(e.args.rulesStore)));class Os extends Vo.S6.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint,beforeResponse:e.triggerResponseBreakpoint})),this.uiType="request-and-response-breakpoint"}explain(){return"manually rewrite the request and response"}}ut.PL(Os,{uiType:Ko((()=>"request-and-response-breakpoint")),type:ut.MY()},(e=>new Os(e.args.rulesStore)));const Hs=Vo.S6.TimeoutHandlerDefinition,As=Vo.S6.CloseConnectionHandlerDefinition,qs=Vo.S6.ResetConnectionHandlerDefinition,$s=Object.assign(Object.assign(Object.assign({},m.omit(Vo.yN.MatcherLookup,["method"])),vs),{wildcard:bs,"default-wildcard":xs,"am-i-using":ws}),Is=[bs,...Object.values(vs)],js=Object.assign(Object.assign({},Vo.S6.HandlerDefinitionLookup),{passthrough:Ts,simple:Es,file:Cs,"forward-to-host":Ss,"req-res-transformer":Ps,"request-breakpoint":ks,"response-breakpoint":Rs,"request-and-response-breakpoint":Os}),{EchoWebSocketHandlerDefinition:Ds,RejectWebSocketHandlerDefinition:Ms,ListenWebSocketHandlerDefinition:Bs}=Vo.GP;class Fs extends bs{constructor(){super(...arguments),this.uiType="ws-wildcard"}explain(){return"Any WebSocket"}}class Ns extends bs{constructor(){super(...arguments),this.uiType="default-ws-wildcard"}explain(){return"Any other WebSockets"}}class Ls extends Vo.yN.MethodMatcher{explain(){return`started with ${Vo.IT[this.method]}`}}class Us extends Vo.GP.PassThroughWebSocketHandlerDefinition{constructor(e){super(e.activePassthroughOptions)}}ut.PL(Us,{type:ut.MY()},(e=>new Us(e.args.rulesStore)));class Ws extends Vo.GP.PassThroughWebSocketHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},n.activePassthroughOptions),{forwarding:{targetHost:e,updateHostHeader:t}})),this.uiType="ws-forward-to-host"}}ut.PL(Ws,{uiType:Ko((()=>"ws-forward-to-host")),type:ut.MY(),forwarding:ut.Tj(ut.MY())},(e=>{const t=e.json;return new Ws(t.forwarding.targetHost,t.forwarding.updateHostHeader,e.args.rulesStore)}));const zs=Object.assign(Object.assign({},m.omit($s,Jo)),{method:Ls,"ws-wildcard":Fs,"default-ws-wildcard":Ns}),_s=[Fs],Vs=Object.assign(Object.assign({},Vo.GP.WsHandlerDefinitionLookup),{"ws-passthrough":Us,"ws-forward-to-host":Ws});var Js=n(52405);const Gs=Js.D.encode.bind(Js.D),Ks=["bool","int","uint",...m.flatMap(m.range(8,257,8),(e=>[`int${e}`,`uint${e}`])),"address","string","bytes",...m.range(1,33).map((e=>`bytes${e}`))],Qs={eth_call:"Call a contract method (without a transaction)",eth_sendRawTransaction:"Submit a signed transaction",eth_sendTransaction:"Submit an unsigned transaction",eth_getTransactionReceipt:"Return the receipt of a submitted transaction",eth_getBalance:"Return the balance of an account",eth_gasPrice:"Return the current gas price",eth_blockNumber:"Return the latest block number",eth_getBlockByNumber:"Return information about a block by number",eth_getBlockByHash:"Return information about a block by hash"};class Ys extends Vo.yN.JsonBodyFlexibleMatcher{constructor(e="eth_call"){super({jsonrpc:"2.0",method:e}),this.methodName=e,this.uiType="eth-method"}explain(){return`Ethereum ${this.methodName} requests`}}class Xs extends Vo.yN.JsonBodyFlexibleMatcher{constructor(e){super({params:e}),this.params=e,this.uiType="eth-params"}explain(){return`matching ${JSON.stringify(this.params)}`}}class Zs extends js["json-rpc-response"]{constructor(e,t){super({result:Gs(e,t)}),this.outputTypes=e,this.values=t,this.uiType="eth-call-result"}explain(){return this.values.length?`Return an eth_call result of ${this.values.join(", ")}`:"Return an empty eth_call result"}}class ea extends js["json-rpc-response"]{constructor(e){super({result:`0x${e.toString(16)}`}),this.value=e,this.uiType="eth-number-result"}explain(){return`Return ${this.value}`}}class ta extends js["json-rpc-response"]{constructor(e){super({result:e}),this.value=e,this.uiType="eth-hash-result"}explain(){return`Return transaction hash ${this.value}`}}class na extends js["json-rpc-response"]{constructor(e={status:"0x1",transactionHash:"012345",blockNumber:"0x100",blockHash:"0x1",from:"0x0",to:"0x0",cumulativeGasUsed:"0x1",gasUsed:"0x1",effectiveGasPrice:"0x0",contractAddress:null,logs:[],logsBloom:"0x0",type:"0x0"}){super({result:e}),this.receiptValue=e,this.uiType="eth-receipt-result"}explain(){return"Return a fixed transaction receipt"}}class ra extends js["json-rpc-response"]{constructor(e={difficulty:"0x1",extraData:"0x0",gasLimit:"0x1",gasUsed:"0x1",hash:"0x1234",logsBloom:"0x0",miner:"0x1",mixHash:"0x0",nonce:"0x0",number:"0x0",parentHash:"0x1",receiptsRoot:"0x1",sha3Uncles:"0x1",size:"0x1",stateRoot:"0x1",timestamp:"0x1",totalDifficulty:"0x1",transactions:["0x1234"],transactionsRoot:"0x1",uncles:[]}){super({result:e}),this.blockValue=e,this.uiType="eth-block-result"}explain(){return"Return fixed block data"}}class oa extends js["json-rpc-response"]{constructor(e,t="0x",n=-32099,r=void 0){super({error:{message:e,data:t,code:n,name:r}}),this.message=e,this.data=t,this.code=n,this.name=r,this.uiType="eth-error"}explain(){return"Fail with "+(this.message?`"${this.message}"`:`code ${this.code}`)}}const sa={"eth-method":Ys,"eth-params":Xs,protocol:Vo.yN.ProtocolMatcher,host:Vo.yN.HostMatcher,hostname:Vo.yN.HostnameMatcher,port:Vo.yN.PortMatcher,"simple-path":Vo.yN.SimplePathMatcher,"regex-path":Vo.yN.RegexPathMatcher,header:Vo.yN.HeaderMatcher,query:Vo.yN.QueryMatcher,"exact-query-string":Vo.yN.ExactQueryMatcher,cookie:Vo.yN.CookieMatcher},aa=[Ys],ia={"eth-call-result":Zs,"eth-number-result":ea,"eth-hash-result":ta,"eth-receipt-result":na,"eth-block-result":ra,"eth-error":oa,passthrough:js.passthrough,"forward-to-host":js["forward-to-host"],timeout:js.timeout,"close-connection":js["close-connection"],"request-breakpoint":js["request-breakpoint"],"response-breakpoint":js["response-breakpoint"],"request-and-response-breakpoint":js["request-and-response-breakpoint"]},la={cat:"Read IPFS content",add:"Add a file or directory to IPFS","name/resolve":"Resolve an IPNS name","name/publish":"Publish an IPNS name","pin/add":"Pin some IPFS content","pin/rm":"Unpin some IPFS content","pin/ls":"List the pinned IPFS content"};class ca extends Vo.yN.SimplePathMatcher{constructor(e="cat"){super(`/api/v0/${e}`),this.interactionName=e,this.uiType="ipfs-interaction"}explain(){return`IPFS ${this.interactionName} requests`}}const da={cat:{argType:"IPFS path",placeholder:"The path to the IPFS object(s) to be read"},"name/resolve":{argType:"IPNS name",placeholder:"The IPNS name to resolve"},"name/publish":{argType:"IPFS path",placeholder:"The IPFS path of the object to be published"},"pin/add":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be pinned"},"pin/rm":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be unpinned"}};class ua extends Vo.yN.QueryMatcher{constructor(e,t=void 0){super(t?{arg:t}:{}),this.interaction=e,this.argValue=t,this.uiType="ipfs-arg"}explain(){var e,t,n;return`for ${null!==(e=this.argValue)&&void 0!==e?e:`any ${null!==(n=null===(t=da[this.interaction])||void 0===t?void 0:t.argType)&&void 0!==n?n:"value"}`}`}}const pa=e=>Object.assign({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8"},void 0!==e?{"content-length":Lt(e).toString()}:{}),ha=()=>({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8","transfer-encoding":"chunked","x-chunked-output":"1"}),ma=ut.Yu(js.simple);class ga extends js.simple{constructor(e){super(200,void 0,e,pa(e)),this.result=e,this.uiType="ipfs-cat-text"}explain(){return"Return fixed IPFS content"}}ut.PL(ga,ma.props,(()=>new ga("")));class fa extends js.file{constructor(e){super(200,void 0,e,pa()),this.path=e,this.uiType="ipfs-cat-file"}explain(){return`Return IPFS content from ${this.path||"a file"}`}}class ya extends js.simple{constructor(e=[{Name:"uploaded-file.txt",Hash:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map((e=>JSON.stringify(e))).join("\n"),ha()),this.result=e,this.uiType="ipfs-add-result"}explain(){return`Return ${0===this.result.length?"an empty":"fixed"} IPFS add result${this.result.length>1?"s":""}`}}ut.PL(ya,ma.props,(()=>new ya));class va extends js.simple{constructor(e={Path:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),pa(JSON.stringify(e))),this.result=e,this.uiType="ipns-resolve-result"}explain(){return"Return a fixed IPNS resolved address"}}ut.PL(va,ma.props,(()=>new va));class ba extends js.simple{constructor(e={Name:"QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",Value:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),pa(JSON.stringify(e))),this.result=e,this.uiType="ipns-publish-result"}explain(){return"Return a fixed IPNS resolve result"}}ut.PL(ba,ma.props,(()=>new ba));class xa extends js.simple{constructor(e={Pins:["QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"]}){super(200,void 0,JSON.stringify(e),pa(JSON.stringify(e))),this.result=e,this.uiType="ipfs-pins-result"}explain(){return"Return fixed IPFS pinning results"}}ut.PL(xa,ma.props,(()=>new xa));class wa extends js.simple{constructor(e=[{Type:"direct",Cid:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map((e=>JSON.stringify(e))).join("\n"),ha()),this.result=e,this.uiType="ipfs-pin-ls-result"}explain(){return"Return fixed list of IPFS pins"}}ut.PL(wa,ma.props,(()=>new wa));const Ea={"ipfs-interaction":ca,"ipfs-arg":ua,query:Vo.yN.QueryMatcher,"exact-query-string":Vo.yN.ExactQueryMatcher,protocol:Vo.yN.ProtocolMatcher,host:Vo.yN.HostMatcher,hostname:Vo.yN.HostnameMatcher,port:Vo.yN.PortMatcher,header:Vo.yN.HeaderMatcher,cookie:Vo.yN.CookieMatcher},Ca=[ca],Ta={"ipfs-cat-text":ga,"ipfs-cat-file":fa,"ipfs-add-result":ya,"ipns-publish-result":ba,"ipns-resolve-result":va,"ipfs-pins-result":xa,"ipfs-pin-ls-result":wa,passthrough:js.passthrough,"forward-to-host":js["forward-to-host"],timeout:js.timeout,"close-connection":js["close-connection"],"request-breakpoint":js["request-breakpoint"],"response-breakpoint":js["response-breakpoint"],"request-and-response-breakpoint":js["request-and-response-breakpoint"]};var Sa=n(56095);const{Serializable:Pa}=Vo.PluggableAdmin.Serialization;class ka extends Pa{constructor(){super(...arguments),this.type="rtc-wildcard"}explain(){return"WebRTC connections"}}const{HasDataChannelMatcherDefinition:Ra,HasVideoTrackMatcherDefinition:Oa,HasAudioTrackMatcherDefinition:Ha,HasMediaTrackMatcherDefinition:Aa}=Sa.MatcherDefinitions,qa=Object.assign(Object.assign({},Sa.MatcherDefinitions.MatcherDefinitionLookup),{"rtc-wildcard":ka}),$a=[ka],{DynamicProxyStepDefinition:Ia,EchoStepDefinition:ja,CloseStepDefinition:Da,WaitForMediaStepDefinition:Ma,WaitForDurationStepDefinition:Ba,WaitForChannelStepDefinition:Fa,WaitForMessageStepDefinition:Na,CreateChannelStepDefinition:La,SendStepDefinition:Ua}=Sa.HandlerStepDefinitions,Wa=Object.assign({},Sa.HandlerStepDefinitions.StepDefinitionLookup),za=e=>{var t;return null!==(t=e.uiType)&&void 0!==t?t:e.type},_a={host:"^0.1.22 || ^1.0.0","raw-body":ae,"raw-body-regexp":ae,"raw-body-includes":ae,"json-body":ae,"json-body-matching":ae,"eth-method":"^1.11.0","rtc-wildcard":pe,file:re,"req-res-transformer":"^1.4.0","ws-echo":ue,"ws-listen":ue,"ws-reject":ue,"reset-connection":"^1.12.0"},Va={http:$s,websocket:zs,ethereum:sa,ipfs:Ea,webrtc:qa},Ja=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Va.http),Va.websocket),Va.ethereum),Va.ipfs),Va.webrtc),Ga=new Map(Object.entries(Ja).map((([e,t])=>[t,e]))),Ka={http:js,websocket:Vs,ethereum:ia,ipfs:Ta,webrtc:Wa},Qa=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Ka.http),Ka.websocket),Ka.ethereum),Ka.ipfs),Ka.webrtc),Ya=Object.assign({},Wa),Xa=new Map(Object.entries(Qa).map((([e,t])=>[t,e]))),Za=(e,t)=>{const n=za(e),r=ti(t),o=Ka[r][n],s=si[n];return!(void 0!==s&&!s(t))&&void 0!==o},ei=[...Is,..._s,...aa,...Ca,...$a],ti=e=>{const t=m.isString(e)?Ja[e]:e.constructor;if(Is.includes(t))return"http";if(_s.includes(t))return"websocket";if(aa.includes(t))return"ethereum";if(Ca.includes(t))return"ipfs";if($a.includes(t))return"webrtc";throw new Error(`Unknown type for initial matcher class: ${t.name}`)},ni=["callback","am-i-using","default-wildcard","default-ws-wildcard","multipart-form-data","raw-body-regexp","regex-url","hostname","port","protocol","form-data","cookie","rtc-page-hostname","rtc-page-regex","rtc-user-agent-regex"],ri=e=>ni.includes(e),oi=["json-rpc-response","rtc-peer-proxy","callback","stream","wait-for-rtc-track"],si={"eth-call-result":e=>e instanceof Ys&&"eth_call"===e.methodName,"eth-number-result":e=>e instanceof Ys&&["eth_getBalance","eth_blockNumber","eth_gasPrice"].includes(e.methodName),"eth-hash-result":e=>e instanceof Ys&&["eth_sendRawTransaction","eth_sendTransaction"].includes(e.methodName),"eth-receipt-result":e=>e instanceof Ys&&"eth_getTransactionReceipt"===e.methodName,"eth-block-result":e=>e instanceof Ys&&["eth_getBlockByHash","eth_getBlockByNumber"].includes(e.methodName),"ipfs-cat-text":e=>e instanceof ca&&"cat"===e.interactionName,"ipfs-cat-file":e=>e instanceof ca&&"cat"===e.interactionName,"ipfs-add-result":e=>e instanceof ca&&"add"===e.interactionName,"ipns-resolve-result":e=>e instanceof ca&&"name/resolve"===e.interactionName,"ipns-publish-result":e=>e instanceof ca&&"name/publish"===e.interactionName,"ipfs-pins-result":e=>e instanceof ca&&["pin/add","pin/rm"].includes(e.interactionName),"ipfs-pin-ls-result":e=>e instanceof ca&&"pin/ls"===e.interactionName},ai=["echo-rtc","rtc-peer-proxy","rtc-dynamic-proxy","close-rtc-connection"],ii=[Es,Cs,Ss,Ps,Hs,As,qs,Ds,Ms,Bs],li=(e,t)=>("http"===e||"websocket"===e)&&m.some(ii,(e=>t instanceof e)),ci=(...e)=>t=>e.includes(t),di=e=>t=>e(t.type),ui=ci("http","ethereum","ipfs"),pi=di(ui),hi=di(ci("websocket")),mi=di(ci("webrtc")),gi=mi;var fi;!function(e){e[e.FALLBACK=0]="FALLBACK",e[e.DEFAULT=1]="DEFAULT",e[e.OVERRIDE=2]="OVERRIDE"}(fi||(fi={}));var yi=n(63282),vi=n.n(yi),bi=n(68182),xi=n.n(bi);n(36623);const wi=(e,t)=>0===t.length?e:wi(e[t[0]],t.slice(1));function Ei(e,t,n=m.identity){var r;const o=(null===(r=t.instancePath)||void 0===r?void 0:r.length)?wi(e,t.instancePath.slice(1).split("/")):e;return(n(t.instancePath)||"Document")+` (${s=JSON.stringify(o),50,s.length<=50?s:s.slice(0,47)+"..."}) ${t.message}${"enum"===t.keyword?` (${Rt(t.params.allowedValues,", ",", or ")})`:""}.`;var s}var Ci=n(27681),Ti=n(42838);const Si=new Ci({html:!0,linkify:!0,linkTarget:"_blank"}),Pi=new Ci({html:!0,linkify:!1});function ki(e,t){if(e){const n=((null==t?void 0:t.linkify)?Si:Pi).render(e).replace(/\n$/,"");return{__html:Ti.sanitize(n)}}}function Ri(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([\\`*_{}\[\]()#+\-.!~|])/g,"\\$1")}Ti.addHook("afterSanitizeAttributes",(function(e){(e.hasAttribute("target")||"target"in e)&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer")),e.hasAttribute("target")||!e.hasAttribute("xlink:href")&&!e.hasAttribute("href")||e.setAttribute("xlink:show","new")})),Ti.addHook("afterSanitizeAttributes",(function(e){if(e.hasAttribute("href")){const t=e.getAttribute("href");(null==t?void 0:t.startsWith("/"))&&e.removeAttribute("href")}}));const Oi=new(vi())({coerceTypes:"array",strict:!1,strictSchema:!1,formats:new Proxy({},{get:(e,t)=>!(t in e)||e[t]})});function Hi(e,t,n){if(!t||!n||"aborted"===n)return{};const r=ln(n.headers["content-type"])||"*/*",o=t.content;if(!o)return{};const s=m.sortBy(Object.keys(o),(e=>m.sumBy(e,(e=>"*"===e?1:0)))),a=m.find(s,(e=>null!==new RegExp("^"+e.replace(/\*/g,".*").replace(/;.*/g,"")).exec(r)));return a?Object.assign({description:t.description,components:e.components},o[a].schema):{}}function Ai(e,t){const{parsedUrl:n}=t,r=`${n.protocol}//${n.hostname}${n.pathname}`,o=e.serverMatcher.exec(r);return o?r.slice(o[0].length):n.pathname}function qi(e){return e?e.replace(/(<([^>]+)>)/gi,""):e}xi()(Oi);class $i{constructor(e,t){this.isBuiltInApi=!0===e.spec.info["x-httptoolkit-builtin-api"];const{request:n}=t;this.service=new Ii(e.spec),this._spec=e.spec,this._opSpec=ji(e,n),this.operation=new Di(this._opSpec),this.request=new Mi(e.spec,this._opSpec,n),t.response&&this.updateWithResponse(t.response)}updateWithResponse(e){"aborted"!==e&&void 0!==e&&(this.response=new Bi(this._spec,this._opSpec,e))}matchedOperation(){return this._opSpec.matched}}class Ii{constructor(e){var t,n,r;const{info:o}=e;this.name=o.title,this.shortName=null!==(t=o["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=o["x-logo"])||void 0===n?void 0:n.url,this.description=ki(o.description,{linkify:!0}),this.docsUrl=null===(r=null==e?void 0:e.externalDocs)||void 0===r?void 0:r.url}}function ji(e,t){const n=function(e,t){const{parsedUrl:n}=t,r=`${n.protocol}//${n.host}${n.pathname}`;if(e.serverMatcher.exec(r))for(let t of e.requestMatchers.keys())if(t.pathMatcher.exec(r)&&m.every(t.queryMatcher,((e,t)=>{const r=n.searchParams.getAll(t);return e?"string"==typeof e?m.includes(r,e):m.intersection(r,e).length===e.length:r.length>0})))return e.requestMatchers.get(t)}(e,t),{pathSpec:r,path:o}=n||{pathSpec:{},path:Ai(e,t)},s=(ln(t.headers["x-http-method-override"])||t.method).toLowerCase();let a=(0,Un.Jt)(r,s);return a||"head"!==s||(a=(0,Un.Jt)(r,"get")),{method:s,path:o,pathSpec:r,spec:a||{},matched:void 0!==a}}class Di{constructor(e){this.warnings=[],this.name=qi(ki(y([()=>((0,Un.Jt)(e.spec,"summary","length")||1/0)<40,e.spec.summary],(0,Un.Jt)(e.spec,"operationId"),[()=>((0,Un.Jt)(e.spec,"description","length")||1/0)<40,e.spec.description],e.pathSpec.summary)||`${e.method.toUpperCase()} ${e.path}`,{linkify:!0}).__html),this.description=ki(y([()=>(0,Un.Jt)(e.spec,"description")!==this.name,(0,Un.Jt)(e.spec,"description")],[()=>(0,Un.Jt)(e.spec,"summary")!==this.name,(0,Un.Jt)(e.spec,"summary")],e.pathSpec.description),{linkify:!0}),e.matched||this.warnings.push(`Unknown operation '${this.name}'.`),e.spec.deprecated&&this.warnings.push(`The '${this.name}' operation is deprecated.`),this.docsUrl=(0,Un.Jt)(e.spec,"externalDocs","url"),this.warnings=this.warnings.map((e=>qi(e)))}}class Mi{constructor(e,t,n){this.parameters=function(e,t,n){if(!t)return[];const r=n.parsedUrl.searchParams;return m.uniqBy(t,(e=>`${e.name}::${e.in}`)).map((t=>{const o=t.schema,s={specParam:t,name:t.name,in:t.in,description:ki(t.description,{linkify:!0}),required:t.required||"path"===t.in,type:o&&o.type,defaultValue:o&&o.default,enum:o&&(o.enum||o.items&&o.items.enum),deprecated:t.deprecated||!1,warnings:[]};switch(t.in){case"query":let o=r.getAll(t.name);return s.type&&"boolean"===s.type&&t.allowEmptyValue&&(o=o.map((e=>""===e||e))),Object.assign(Object.assign({},s),{value:y([()=>o.length>1,o],[()=>1===o.length,o[0]])});case"path":const a=new RegExp(e.replace(`{${t.name}}`,"([^/]+)").replace(/\{[^\}]+\}/g,"[^/]+")+"$","i").exec(n.parsedUrl.pathname);return Object.assign(Object.assign({},s),{value:a?a[1]:void 0});case"header":return Object.assign(Object.assign({},s),{value:n.headers[t.name.toLowerCase()]});default:return Object.assign(Object.assign({},s),{value:void 0})}})).map((e=>{const{specParam:t}=e,n=t.style||{query:"form",path:"simple",header:"simple",cookie:"form"}[t.in];if("array"===e.type&&(("simple"===n||"form"===n&&!1===t.explode)&&(e.value=m.isString(e.value)?e.value.split(","):e.value),"spaceDelimited"===n&&(e.value=m.isString(e.value)?e.value.split(" "):e.value),"pipeDelimited"===n&&(e.value=m.isString(e.value)?e.value.split("|"):e.value)),e.required&&void 0===e.value&&void 0===e.defaultValue&&e.warnings.push(`The '${e.name}' ${t.in} parameter is required.`),e.deprecated&&void 0!==e.value&&e.warnings.push(`The '${e.name}' ${t.in} parameter is deprecated.`),t.schema&&void 0!==e.value){const n={value:e.value};!Oi.validate({type:"object",properties:{value:t.schema}},n)&&Oi.errors&&e.warnings.push(...Oi.errors.map((t=>Ei(n,t,(t=>t.replace(/^\/value/,e.name)))))),e.value=n.value}return Object.assign(Object.assign({},e),{warnings:e.warnings.map((e=>qi(e)))})}))}(t.path,(t.pathSpec.parameters||[]).concat(t.spec.parameters||[]),n),this.bodySchema=Hi(e,t.spec.requestBody,n)}}class Bi{constructor(e,t,n){const r=t.spec.responses?t.spec.responses[n.statusCode.toString()]||t.spec.responses.default:void 0;this.description=r&&r.description!==n.statusMessage?ki(r.description,{linkify:!0}):void 0,this.bodySchema=Hi(e,r,n)}}class Fi{constructor(e,t,n){var r,o;this._rpcMethod=n,this.isBuiltInApi=!0===e.spec.info["x-httptoolkit-builtin-api"],this.service=new Ni(e),Ct(n)?(this.operation={name:"Unrecognized request to JSON-RPC API",warnings:[null!==(r=n.message)&&void 0!==r?r:n.toString()]},this.request={parameters:[]}):(this.operation=new Li(n,null===(o=e.spec.externalDocs)||void 0===o?void 0:o["x-method-base-url"]),this.request=new Wi(n,t))}updateWithResponse(e){"aborted"===e||void 0===e||Ct(this._rpcMethod)||(this.response=new zi(this._rpcMethod))}matchedOperation(){return this._rpcMethod&&!Ct(this._rpcMethod)}}class Ni{constructor(e){var t,n,r;this.name=e.spec.info.title,this.shortName=null!==(t=e.spec.info["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=e.spec.info["x-logo"])||void 0===n?void 0:n.url,this.description=ki(e.spec.info.description,{linkify:!0}),this.docsUrl=null===(r=e.spec.externalDocs)||void 0===r?void 0:r.url}}class Li{constructor(e,t){var n,r;this.warnings=[];const{methodSpec:o}=e;this.name=o.name,this.description=ki([o.summary,o.description].filter((e=>!!e)).join("\n\n"),{linkify:!0}),this.docsUrl=null!==(r=null===(n=o.externalDocs)||void 0===n?void 0:n.url)&&void 0!==r?r:t?t+o.name.toLowerCase():void 0,o.deprecated&&this.warnings.push(`The '${this.name}' method is deprecated.`)}}const Ui=e=>e?e.charAt(0).toUpperCase()+e.slice(1):void 0;class Wi{constructor(e,t){const{methodSpec:n,parsedBody:r}=e;this.parameters=n.params.map(((e,t)=>{var n,o;const s=e.schema;return{name:e.name,description:ki([e.summary,e.description,Ui(null==s?void 0:s.title),...(null===(n=null==s?void 0:s.oneOf)||void 0===n?void 0:n.length)?["One of:",s.oneOf.map((e=>`* ${Ui(e.title)}: ${e.description||e.type||"unknown"}`)).join("\n")]:[]].filter((e=>!!e)).join("\n\n"),{linkify:!0}),in:"body",required:!!e.required,deprecated:!!e.deprecated,type:null==s?void 0:s.type,value:r.params[t],defaultValue:null==s?void 0:s.default,enum:(null==s?void 0:s.enum)||(null===(o=null==s?void 0:s.items)||void 0===o?void 0:o.enum),warnings:[...e.deprecated?[`The '${e.name}' parameter is deprecated.`]:[],...e.required&&void 0===r.params[t]&&s&&void 0===s.default?[`The '${e.name}' parameter is required.`]:[]]}}))}}class zi{constructor(e){const t=e.methodSpec.result;this.description=ki(t.description,{linkify:!0}),this.bodySchema={type:"object",properties:{id:{type:"number"},jsonrpc:{type:"string",enum:["2.0"]},result:t.schema,error:{type:"object",properties:{code:{type:"number"},message:{type:"string"}}}},required:["id","jsonrpc"]}}}var _i=n(12875),Vi=n.n(_i),Ji=n(37007),Gi=n(48287).Buffer,Ki=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const Qi=new Worker(new URL(n.p+n.u("src_services_ui-worker_ts"),n.b));let Yi=0;const Xi=new Ji.EventEmitter;function Zi(e,t=[]){const n=Yi++;return new Promise(((r,o)=>{Qi.postMessage(Object.assign({id:n},e),t),Xi.once(n.toString(),(e=>{e.error?o(Vi()(e.error)):r(e)}))}))}function el(e,t){return Ki(this,void 0,void 0,(function*(){if(0===t.length||1===t.length&&"identity"===t[0]||0===e.length)return{encoded:e,decoded:e};try{const n=yield Zi({type:"decode",buffer:e.buffer,encodings:t},[e.buffer]);return{encoded:Gi.from(n.inputBuffer),decoded:Gi.from(n.decodedBuffer)}}catch(e){throw e.inputBuffer&&(e.inputBuffer=Gi.from(e.inputBuffer)),e}}))}function tl(e,t){return Ki(this,void 0,void 0,(function*(){return(yield Zi({type:"build-api",spec:e,baseUrlOverrides:t})).api}))}function nl(e,t){return Ki(this,void 0,void 0,(function*(){return(yield Zi({type:"validate-pkcs12",buffer:e,passphrase:t})).result}))}function rl(e,t,n){return Ki(this,void 0,void 0,(function*(){return(yield Zi({type:"format",buffer:e,format:t,headers:n})).formatted}))}Qi.addEventListener("message",(e=>{Xi.emit(e.data.id.toString(),e.data)}));var ol=n(49644),sl=n.n(ol),al=n(48287).Buffer,il=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class ll{constructor(e,t,n,r={}){var o;this.getHeaders=n,this.options=r,this.updateEncodedBody=(0,w.action)((()=>{if(this._throttledEncodingDeferred)return this._throttledEncodingDeferred.promise;const e=this._throttledEncodingDeferred=k();return this._runThrottledEncodingPromise(),e.promise})),this._runThrottledEncodingPromise=m.throttle((()=>{return e=this,t=void 0,r=function*(){if(!this._throttledEncodingDeferred)throw new Error("_runThrottledEncodingPromise should not be called without a queued promise target");const e=this._throttledEncodingDeferred;(0,w.runInAction)((()=>{this._encodingPromise=e.promise,this._throttledEncodingDeferred=void 0}));const t=this.contentEncodings;try{const n=yield function(e,t){return Ki(this,void 0,void 0,(function*(){if(0===t.length||1===t.length&&"identity"===t[0])return e;const n=yield Zi({type:"encode",buffer:e.buffer,encodings:t});return Gi.from(n.encodedBuffer)}))}(this._decodedBody,t);(0,w.runInAction)((()=>{this._encodingPromise===e.promise&&(this._lastEncodedBody=this._lastEncodingResult=n)})),e.resolve(n)}catch(t){(0,w.runInAction)((()=>{this._encodingPromise===e.promise&&(this._lastEncodingResult=t)})),e.reject(t)}},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}),null!==(o=this.options.throttleDuration)&&void 0!==o?o:500,{leading:!0,trailing:!0}),this._decodedBody=e,t?(this._lastEncodedBody=this._lastEncodingResult=t,this._encodingPromise=S(Promise.resolve(t))):(this._lastEncodedBody=this._lastEncodingResult=void 0,this._encodingPromise=this.updateEncodedBody()),(0,w.reaction)((()=>this._decodedBody),(()=>this.updateEncodedBody())),(0,w.reaction)((()=>this.contentEncodings),(()=>this.updateEncodedBody()))}get contentEncodings(){return cn(rn(this.getHeaders(),"content-encoding"))}updateDecodedBody(e){this._decodedBody=e}get latestEncodedLength(){var e;return null===(e=this._lastEncodedBody)||void 0===e?void 0:e.byteLength}get latestEncodingResult(){return al.isBuffer(this._lastEncodingResult)?{state:"fulfilled",value:this._lastEncodingResult}:void 0===this._lastEncodingResult?{state:"pending"}:{state:"rejected",value:this._lastEncodingResult}}get encodingPromise(){var e,t;return null!==(t=null===(e=this._throttledEncodingDeferred)||void 0===e?void 0:e.promise)&&void 0!==t?t:this._encodingPromise}get encodingBestEffortPromise(){return this.encodingPromise.catch((()=>this._decodedBody))}get decoded(){return this._decodedBody}}il([w.observable.ref],ll.prototype,"_decodedBody",void 0),il([w.observable.ref],ll.prototype,"_lastEncodedBody",void 0),il([w.observable.ref],ll.prototype,"_lastEncodingResult",void 0),il([w.observable.ref],ll.prototype,"_encodingPromise",void 0),il([w.observable.ref],ll.prototype,"_throttledEncodingDeferred",void 0),il([w.computed.struct],ll.prototype,"contentEncodings",null),il([w.action],ll.prototype,"updateDecodedBody",null),il([w.computed],ll.prototype,"latestEncodedLength",null),il([w.computed],ll.prototype,"latestEncodingResult",null);var cl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},dl=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function ul(e){return el(e.body.buffer,cn(e.headers["content-encoding"])).catch((e=>{ye(e);const t=sl()`
            HTTP TOOLKIT ERROR: Could not decode body, \
            check content-encoding
        `;return{encoded:Mt(t),decoded:Mt(t)}}))}class pl{constructor(e,t,n){this.resume=()=>dl(this,void 0,void 0,(function*(){var e;this.deferred.resolve(Object.assign(Object.assign(Object.assign({},this.resultMetadata),te(yield Z,"^1.9.0")?{rawBody:yield this.editableBody.encodingBestEffortPromise}:{body:yield this.editableBody.encodingBestEffortPromise}),{headers:(e=tn(this.resultMetadata.rawHeaders),m.omitBy(e,((e,t)=>t.startsWith(":"))))}))})),this.deferred=T(),this.resultMetadata=e,this.editableBody=new ll(t,n,(()=>this.resultMetadata.rawHeaders)),(0,w.observe)(this.editableBody,"latestEncodedLength",(({oldValue:e,newValue:t})=>{var n;const{rawHeaders:r}=this.resultMetadata;parseInt(nn(r,"Content-Length")||"",10)===e&&this.updateMetadata({rawHeaders:an(r,{"Content-Length":null!==(n=null==t?void 0:t.toString())&&void 0!==n?n:"0"})})}));let r=nn(this.resultMetadata.rawHeaders,"Content-Length");(0,w.reaction)((()=>nn(this.resultMetadata.rawHeaders,"Content-Length")),(e=>{var t,n;if(void 0===r&&""===e){const{rawHeaders:e}=this.resultMetadata;this.updateMetadata({rawHeaders:an(e,{"Content-Length":null!==(n=null===(t=this.editableBody.latestEncodedLength)||void 0===t?void 0:t.toString())&&void 0!==n?n:"0"})})}r=e}))}get inProgressResult(){return Object.assign({body:this.editableBody},this.resultMetadata)}updateMetadata(e){this.resultMetadata=Object.assign(Object.assign({},this.resultMetadata),m.omit(e,"body","rawBody"))}updateBody(e){this.editableBody.updateDecodedBody(e)}waitForCompletedResult(){return this.deferred.promise}reject(e){this.deferred.reject(e)}}cl([w.observable.shallow],pl.prototype,"resultMetadata",void 0),cl([w.action.bound],pl.prototype,"updateMetadata",null),cl([w.action.bound],pl.prototype,"updateBody",null);class hl extends pl{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve({response:"close"})}}respondDirectly(e){this.deferred.resolve({response:e})}}class ml extends pl{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve("close")}}}var gl=n(48287).Buffer,fl=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},yl=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function vl(e){try{return Object.assign(new URL(e.url,`${e.protocol}://${e.hostname||"unknown.invalid"}`),{parseable:!0})}catch(t){console.log("Unparseable URL:",e.url)}}function bl(e){try{return Object.assign(new URL("/[unparseable]",`${e.protocol}://${e.hostname||"unknown.invalid"}`),{parseable:!1})}catch(e){return Object.assign(new URL("http://unparseable.invalid/"),{parseable:!1})}}class xl{constructor(e,t){this.decodedPromise=R((()=>yl(this,void 0,void 0,(function*(){if(this._decoded)return this._decoded;const e=this.encoded,t=e.byteLength;this._encoded=At(t);try{const{decoded:t,encoded:n}=yield el(e,this._contentEncoding);return this._encoded=n,t}catch(e){return ye(e),e.inputBuffer&&(this._encoded=e.inputBuffer),void(0,w.runInAction)((()=>{this.decodingError=e}))}})))),"body"in e&&e.body?"buffer"in e.body?this._encoded=e.body.buffer:(this._encoded=At(e.body.encodedLength),this._decoded=e.body.decoded):this._encoded=Mt(""),this._contentEncoding=cn(t["content-encoding"])}get encoded(){return this._encoded}get decoded(){return this.decodedPromise.value}cleanup(){const e=gl.from([]);this._decoded=void 0,this._encoded=e,this.decodingError=void 0,this.decodedPromise=S(Promise.resolve(e))}}fl([w.observable],xl.prototype,"decodingError",void 0);class wl extends _o{constructor(e,t){super(),this.hideErrors=!1,this._apiPromise=R((()=>yl(this,void 0,void 0,(function*(){const e=yield this._apiMetadataPromise;if(e){yield(0,w.when)((()=>this.isCompletedRequest()));try{if("openapi"===e.type)return new $i(e,this);if("openrpc"===e.type)return yield function(e,t){return n=this,r=void 0,s=function*(){try{const n=yield t.request.body.decodedPromise;if(!(null==n?void 0:n.length))throw new Error("No JSON-RPC request body");let r,o;try{if(r=JSON.parse(null==n?void 0:n.toString()),"2.0"!==r.jsonrpc)throw new Error(`JSON-RPC request body had bad 'jsonrpc' field: ${r.jsonrpc}`);o=r.method}catch(e){throw console.warn(e),new Error("Could not parse JSON-RPC request body")}const s=e.requestMatchers[o];if(!s)throw new Error(`Unrecognized JSON-RPC method name: ${o}`);return new Fi(e,t,{methodSpec:s,parsedBody:r})}catch(n){return new Fi(e,t,n)}},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{l(s.next(e))}catch(e){t(e)}}function i(e){try{l(s.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}l((s=s.apply(n,r||[])).next())}));var n,r,o,s}(e,this);throw console.log("Unknown API metadata type for host",this.request.parsedUrl.hostname),console.log(e),new St(e,(e=>e.type))}catch(e){throw ye(e),e}}})))),this.request=function(e){try{return Object.assign(e,{parsedUrl:vl(e)||bl(e),source:e.tags.includes("httptoolkit:manually-sent-request")?Uo:Wo(e.headers["user-agent"]),body:new xl(e,e.headers),contentType:bn(ln(e.headers["content-type"]))||"text",cache:w.observable.map(new Map,{deep:!1})})}catch(t){throw console.log(`Failed to parse request for ${e.url} (${e.protocol}://${e.hostname})`),t}}(t),this.timingEvents=t.timingEvents,this.tags=this.request.tags,this.id=this.request.id,this.searchIndex=[this.request.url,this.request.parsedUrl.protocol+"//"+this.request.parsedUrl.hostname+this.request.parsedUrl.pathname+this.request.parsedUrl.search].concat(...m.map(this.request.headers,((e,t)=>`${t}: ${e}`))).concat(...m.map(this.request.trailers,((e,t)=>`${t}: ${e}`))).concat(this.request.method).join("\n").toLowerCase(),this._apiMetadataPromise=e.getApi(this.request)}get httpVersion(){return"2.0"===this.request.httpVersion?2:1}isHttp(){return!0}isCompletedRequest(){return void 0!==this.matchedRule}isCompletedExchange(){return!!this.response}isSuccessfulExchange(){return this.isCompletedExchange()&&"aborted"!==this.response}hasRequestBody(){return this.isCompletedRequest()&&this.request.body.encoded.byteLength>0}hasResponseBody(){return this.isSuccessfulExchange()&&this.response.body.encoded.byteLength>0}updateFromCompletedRequest(e,t){if(e.body instanceof xl)throw new Error("Can't update from already-processed request");this.request.body=new xl(e,e.headers),this.matchedRule=!!t&&("handler"in t?{id:t.id,handlerStepTypes:[za(t.handler)]}:{id:t.id,handlerStepTypes:t.steps.map(za)}),Object.assign(this.timingEvents,e.timingEvents),this.tags=m.union(this.tags,e.tags)}markAborted(e){var t;this.response="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=m.union(this.tags,e.tags),"error"in e&&(null===(t=e.error)||void 0===t?void 0:t.message)&&(this.abortMessage=e.error.message),this.requestBreakpoint&&(this.requestBreakpoint.reject(new Error("Request aborted whilst breakpointed at request")),this._requestBreakpoint=void 0),this.responseBreakpoint&&(this.responseBreakpoint.reject(new Error("Request aborted whilst breakpointed at response")),this._responseBreakpoint=void 0)}setResponse(e){this.response=function(e){return Object.assign(e,{body:new xl(e,e.headers),contentType:bn(ln(e.headers["content-type"]))||"text",cache:w.observable.map(new Map,{deep:!1})})}(e),Object.assign(this.timingEvents,e.timingEvents),this.tags=m.union(this.tags,e.tags),this.searchIndex=[this.searchIndex,e.statusCode.toString(),e.statusMessage.toString(),...m.map(e.headers,((e,t)=>`${t}: ${e}`)),...m.map(e.trailers,((e,t)=>`${t}: ${e}`))].join("\n").toLowerCase();const t=this._apiPromise;this._apiPromise=R((()=>t.then((e=>(e&&e.updateWithResponse(this.response),e)))))}cleanup(){this.cache.clear(),this.request.cache.clear(),this.request.body.cleanup(),this.isSuccessfulExchange()&&(this.response.cache.clear(),this.response.body.cleanup())}get api(){if("fulfilled"===this._apiPromise.state)return this._apiPromise.value}get requestBreakpoint(){return this._requestBreakpoint}get responseBreakpoint(){return this._responseBreakpoint}get isBreakpointed(){return this.requestBreakpoint||this.responseBreakpoint}triggerRequestBreakpoint(e){return yl(this,void 0,void 0,(function*(){const t=yield function(e){var t;return dl(this,void 0,void 0,(function*(){const{encoded:n,decoded:r}=yield ul(e);return(0,w.observable)(e.headers),new hl({method:e.method,url:e.url,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:en(e.headers)},r,n)}))}(e);(0,w.runInAction)((()=>{this._requestBreakpoint=t}));const n=yield t.waitForCompletedResult();return this._requestBreakpoint===t&&(0,w.runInAction)((()=>{this._requestBreakpoint=void 0})),n}))}triggerResponseBreakpoint(e){return yl(this,void 0,void 0,(function*(){const t=yield function(e){var t;return dl(this,void 0,void 0,(function*(){const n=Qt(e.statusCode)===e.statusMessage?void 0:e.statusMessage,{encoded:r,decoded:o}=yield ul(e);return new ml({statusCode:e.statusCode,statusMessage:n,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:en(e.headers)},o,r)}))}(e);(0,w.runInAction)((()=>{this._responseBreakpoint=t}));const n=yield t.waitForCompletedResult();return this._responseBreakpoint===t&&(0,w.runInAction)((()=>{this._responseBreakpoint=void 0})),n}))}respondToBreakpointedRequest(){var e;this._responseBreakpoint=(e=this.httpVersion,new ml({statusCode:200,statusMessage:void 0,rawHeaders:2===e?[[":status","200"]]:[]},Mt(""),Mt("")));const t=this.requestBreakpoint;this._requestBreakpoint=void 0,this._responseBreakpoint.waitForCompletedResult().then((0,w.action)((e=>{t.respondDirectly(e),this._responseBreakpoint=void 0})))}}fl([w.observable],wl.prototype,"matchedRule",void 0),fl([w.observable],wl.prototype,"tags",void 0),fl([w.observable],wl.prototype,"hideErrors",void 0),fl([w.computed],wl.prototype,"httpVersion",null),fl([w.observable],wl.prototype,"timingEvents",void 0),fl([w.observable.ref],wl.prototype,"response",void 0),fl([w.observable],wl.prototype,"abortMessage",void 0),fl([w.observable.ref],wl.prototype,"_apiPromise",void 0),fl([w.observable.ref],wl.prototype,"_requestBreakpoint",void 0),fl([w.observable.ref],wl.prototype,"_responseBreakpoint",void 0),fl([w.computed],wl.prototype,"isBreakpointed",null),fl([w.action.bound],wl.prototype,"respondToBreakpointedRequest",null);var El=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Cl extends wl{constructor(e,t){super(e,t),this.accepted=!1,this.messages=[],this.searchIndex+="\nwebsocket"}isWebSocket(){return!0}setAccepted(e){const t=e.headers["sec-websocket-protocol"];m.isString(t)&&(this.subprotocol=t),this.accepted=!0,Object.assign(this.timingEvents,e.timingEvents)}wasAccepted(){return this.accepted}get selectedSubprotocol(){return this.subprotocol}addMessage(e){this.messages.push(new Nn(e,this.messages.length,this.selectedSubprotocol))}markClosed(e){this.closeData=e,Object.assign(this.timingEvents,e.timingEvents)}get closeState(){return this.closeData}markAborted(e){if(!this.wasAccepted())return super.markAborted(e);this.closeData="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=m.union(this.tags,e.tags)}cleanup(){super.cleanup(),this.messages.forEach((e=>e.cleanup())),this.messages.length=0}}function Tl(e,t,n){let r,o=n,s=0,a=!0,i=0,l=n;for(r=0;r<e.length&&o<=t.length&&a;r++){const n=e[r].match(t,o);if(!n)return;a="full"===n.type,n.consumed>0&&(i=r,l=o),o+=n.consumed,s+=a?n.consumed:0}return{type:r===e.length&&a?"full":"partial",fullyConsumed:s,partiallyConsumed:o-n,partsMatched:r,lastConsumingPartSyntaxIndex:i,lastConsumingPartStringIndex:l}}function Sl(e,t,n,r){const o=e.map((({key:e,syntax:r})=>({key:e,syntax:r,match:Tl(r,t,n)}))).filter((({match:e})=>!!e&&n+e.partiallyConsumed===t.length)),[s,a]=m.partition(o,(({match:e})=>"full"===e.type));if(s.length)return m.flatMap(s,(({key:e,syntax:n,match:o})=>{const s=n.length-1,a=s===o.lastConsumingPartSyntaxIndex?o.lastConsumingPartStringIndex:t.length;return n[s].getSuggestions(t,a,r.context).map((t=>({key:e,suggestion:t})))}));const i=m.max(a.map((({match:e})=>e.partsMatched))),l=a.filter((e=>e.match.partsMatched===i)),c=m.flatMap(l,(({key:e,syntax:n,match:o})=>{const s=o.lastConsumingPartSyntaxIndex,a=o.lastConsumingPartStringIndex,i=n[s],l=s===n.length-1;return i.getSuggestions(t,a,r.context).map((t=>({key:e,syntax:n,syntaxPartIndex:s,suggestion:Object.assign(Object.assign({},t),{matchType:"full"===t.matchType?l?"full":"partial":t.matchType})})))}));if(1!==c.length||!1===r.canExtend)return c.map((({key:e,suggestion:t})=>({key:e,suggestion:t})));const{key:d,syntax:u,suggestion:p}=c[0];let h,g=c[0].syntaxPartIndex+1,f=[p];for(;1===f.length&&g<u.length;){const e=f[0];h||(h="template"===e.matchType?e:void 0);const n=Pl(t,e),o=u[g].getSuggestions(n,n.length,r.context);if(h&&o.length>1)break;if(f=o.map((t=>({value:e.value+t.value,showAs:e.showAs+t.showAs,index:e.index,matchType:t.matchType}))),f.some((e=>"partial"===e.matchType)))break;g+=1}const y=g===u.length;return h?[{key:d,suggestion:Object.assign(Object.assign({},h),{showAs:f[0].showAs})}]:f.map((e=>({key:d,suggestion:Object.assign(Object.assign({},e),{matchType:"full"!==e.matchType||y?e.matchType:"partial"})})))}function Pl(e,t){return e.slice(0,t.index)+t.value}function kl(e,t){return t?[e.charCodeAt(0),t.charCodeAt(0)]:[e.charCodeAt(0),e.charCodeAt(0)]}El([w.observable],Cl.prototype,"accepted",void 0),El([w.observable],Cl.prototype,"subprotocol",void 0),El([w.action],Cl.prototype,"setAccepted",null),El([w.observable],Cl.prototype,"messages",void 0),El([w.action],Cl.prototype,"addMessage",null),El([w.observable],Cl.prototype,"closeData",void 0),El([w.action],Cl.prototype,"markClosed",null);const Rl=[kl("a","z"),kl("A","Z")],Ol=kl("0","9"),Hl=[...Rl,Ol];function Al(e,t){return e>=t[0]&&e<=t[1]}const ql=(e,t)=>$l(e,t,[Il]);function $l(e,t,n){let r;for(r=t;r<e.length;r++){const t=e.charCodeAt(r);if(!m.some(n,(e=>Al(t,e))))break}return r!==t?e.substring(t,r):r===e.length?"":void 0}const Il=[48,57];function jl(e,t,n){const r=e.match(t,n);if(!r||"full"!==r.type)throw console.log("Unparseable expected-parseable input",t),new Error("Can't parse expected-parseable value");return t.slice(n,n+r.consumed)}function Dl(e,t,n,r,o,s){if(!n||!o)return[];const a=(r||"").toLowerCase();return o(e,t,n).filter((e=>(!a||e.toLowerCase().startsWith(a))&&s)).slice(0,10).map((e=>({showAs:e,index:t,value:e,matchType:"full"})))}class Ml{constructor(e){this.matcher=e}match(e,t){const n=this.matcher.toLowerCase();let r;for(r=t;r-t<this.matcher.length&&r<e.length;r++)if(n[r-t]!==e[r].toLowerCase())return;const o=r-t;return{type:o===this.matcher.length?"full":"partial",consumed:o}}getSuggestions(e,t){return[{showAs:this.matcher,index:t,value:this.matcher,matchType:"full"}]}parse(e,t){return jl(this,e,t),this.matcher}}class Bl{constructor(e,t={}){this.templateText=e,this.options=t,this.allowedCharRanges=t.allowedChars||Bl.AnyAsciiExceptSpaces,this.allowEmpty=t.allowEmpty||(()=>!1)}match(e,t){const n=$l(e,t,this.allowedCharRanges);if(void 0===n)return;const r=n.length;return{type:r>0||this.allowEmpty(e,t)?"full":"partial",consumed:r}}getSuggestions(e,t,n){const r=$l(e,t,this.allowedCharRanges),o=Dl(e,t,n,r,this.options.suggestionGenerator,(e=>![...e].map((e=>e.charCodeAt(0))).some((e=>!this.allowedCharRanges.some((t=>Al(e,t)))))));return r?[{showAs:r,index:t,value:r,matchType:"full"},...o.filter((e=>e.value!==r))]:[{showAs:`{${this.templateText}}`,index:t,value:"",matchType:"template"},...this.allowEmpty(e,t)&&""===r?[{showAs:"",index:t,value:"",matchType:"full"}]:[],...o]}parse(e,t){return jl(this,e,t)}}Bl.AnyAsciiExceptSpaces=[kl("!","~")];class Fl{constructor(e,t,n={}){this.wrapper=e,this.wrappedSyntax=t,this.optional=!!n.optional}match(e,t){let n,r=t;if(void 0===e[r])return{type:"partial",consumed:0};if(e[r]===this.wrapper[0])r+=1,n=!0;else{if(!this.optional)return;n=!1}const o=n?this.wrapper[1]:" ",s=e.slice(r).indexOf(o),a=-1!==s?e.slice(0,r+s):e,i=this.wrappedSyntax.match(a,r);if(i){if(r+=i.consumed,"full"!==i.type)return{type:"partial",consumed:r-t};if(n){if(void 0===e[r])return{type:"partial",consumed:r-t};if(e[r]!==this.wrapper[1])return;r+=1}return{type:"full",consumed:r-t}}}getSuggestions(e,t,n){const r=e[t]===this.wrapper[0],o=!this.optional||r?this.wrapper[1]:" ",s=e.slice(t).indexOf(o),a=-1!==s?e.slice(0,t+s):e,i=r?t+1:t;return this.wrappedSyntax.getSuggestions(a,i,n).map((t=>{const n=!this.optional||t.value.includes(" "),o=n&&!r,s=(n||r)&&"full"===t.matchType?this.wrapper[1]:"",a=!n&&!r||"full"!==t.matchType&&"template"!==t.matchType?"":this.wrapper[1];if(o){const n=this.wrapper[0]+e.slice(i,t.index)+t.value+s,r=this.wrapper[0]+e.slice(i,t.index)+t.showAs+a;return Object.assign(Object.assign({},t),{showAs:r,value:n,index:i})}return Object.assign(Object.assign({},t),{showAs:t.showAs+a,value:t.value+s})}))}parse(e,t){const n=e[t]===this.wrapper[0],r=-1!==e.slice(t).indexOf(this.wrapper[1]),o=!this.optional||n&&r,s=o?this.wrapper[1]:" ",a=e.slice(t).indexOf(s),i=-1!==a?e.slice(0,t+a):e;return this.wrappedSyntax.parse(i,o?t+1:t)}}class Nl{constructor(e="number"){this.stringSyntax=new Bl(e,{allowedChars:[Il]})}match(e,t){return this.stringSyntax.match(e,t)}getSuggestions(e,t){return this.stringSyntax.getSuggestions(e,t)}parse(e,t){const n=this.stringSyntax.parse(e,t);return parseInt(n,10)}}class Ll{constructor(e){this.options=e}match(e,t){const n=this.options.map((n=>n.match(e,t))).filter((e=>!!e)),[r,o]=m.partition(n,{type:"full"}),s=r.length?r:o;return m.maxBy(s,(e=>e.consumed))}getSuggestions(e,t,n){const r=this.options.map((n=>({option:n,match:n.match(e,t)}))).filter((({match:e})=>!!e));if(r.some((({match:e})=>"full"===e.type))){const o=r.filter((({match:e})=>"full"===e.type));return m.maxBy(o,(({match:e})=>e.consumed)).option.getSuggestions(e,t,n)}return m.flatMap(r,(({option:o})=>r.length>1&&o instanceof Wl?o.getSuggestions(e,t,Object.assign({},n,{canExtend:!1})):o.getSuggestions(e,t,n)))}parse(e,t){const n=this.options.map((n=>({option:n,match:n.match(e,t)}))).filter((({match:e})=>"full"===(null==e?void 0:e.type)));return m.maxBy(n,(({match:e})=>e.consumed)).option.parse(e,t)}}class Ul extends Ll{constructor(e){super(e.map((e=>new Ml(e))))}}class Wl{constructor(...e){this.subParts=e}match(e,t){const n=Tl(this.subParts,e,t);return n?{type:null==n?void 0:n.type,consumed:null==n?void 0:n.partiallyConsumed}:void 0}getSuggestions(e,t,n){return Sl([{key:null,syntax:this.subParts}],e,t,{context:n,canExtend:null==n?void 0:n.canExtend}).map((({suggestion:e})=>e))}parse(e,t){return m.reduce(this.subParts,((n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n}),[])}}class zl{constructor(e){this.filterString=e}serialize(){return this.filterString}get filterDescription(){return this.constructor.filterDescription(this.filterString,!1)}}const _l=()=>[new Vl("")];class Vl extends zl{constructor(e=""){super(e),this.filter=e}matches(e){if(""===this.filter)return!0;const t=this.filter.toLocaleLowerCase();return e.searchIndex.includes(t)}toString(){return`"${this.filter}"`}}const Jl={"=":(e,t)=>e===t,"!=":(e,t)=>e!==t},Gl=Object.assign(Object.assign({},Jl),{">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t}),Kl=Object.assign(Object.assign({},Jl),{"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.startsWith(t),"$=":(e,t)=>e.endsWith(t)}),Ql={"=":(e,t)=>e.equals(t),"!=":(e,t)=>!e.equals(t),"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.slice(0,t.length).equals(t),"$=":(e,t)=>e.slice(-t.length).equals(t)},Yl={"=":"equal to","!=":"not equal to",">":"greater than",">=":"greater than or equal to","<":"less than","<=":"less than or equal to","*=":"containing","^=":"starting with","$=":"ending with"},Xl=Object.assign(Object.assign({},Yl),{">":"larger than",">=":"larger than or equal to","<":"smaller than","<=":"smaller than or equal to"});function Zl(e,t){let n=0;const r=[];for(let o of e.filterSyntax)r.push(o.parse(t,n)),n+=o.match(t,n).consumed;return r}function ec(e,t){return tc(t,...e.filterSyntax)}function tc(e,...t){let n=0;const r=[];for(let o of t){const t=o.match(e,n);if(!t||"full"!==t.type)break;r.push(o.parse(e,n)),n+=t.consumed}return r}class nc extends zl{static filterDescription(e){var t;const[,n,r]=ec(nc,e);if(!n||"="==n&&!r)return"responses with a given status code";if(r){const e=null===(t=Kt(r))||void 0===t?void 0:t.message,o="="!==n&&"!="!==n||!e?"":` (${e})`;return"="===n?`responses with status ${r}${o}`:`responses with a status ${Yl[n]} ${r}${o}`}return`responses with a status ${Yl[n]} a given value`}constructor(e){super(e),[,this.op,this.status]=Zl(nc,e),this.predicate=Gl[this.op]}matches(e){return e.isHttp()&&e.isSuccessfulExchange()&&this.predicate(e.response.statusCode,this.status)}toString(){return`Status ${this.op} ${this.status}`}}nc.filterSyntax=[new Ml("status"),new Ul(["=","!=",">=",">","<=","<"]),new class{constructor(e,t={}){this.requiredLength=e,this.options=t}match(e,t){const n=ql(e,t);if(void 0===n)return;const r=n.length;return r===this.requiredLength?{type:"full",consumed:r}:r<this.requiredLength?{type:"partial",consumed:r}:void 0}getSuggestions(e,t,n){const r=ql(e,t),o=Dl(e,t,n,r,this.options.suggestionGenerator,(e=>e.length===this.requiredLength&&![...e].map((e=>e.charCodeAt(0))).some((e=>!Al(e,Il)))));if(r){if(o.length)return o;{const e=r+m.repeat("0",this.requiredLength-r.length);return[{showAs:e,index:t,value:e,matchType:"full"}]}}return[{showAs:`{${this.requiredLength}-digit number}`,index:t,value:"",matchType:"template"},...o]}parse(e,t){const n=jl(this,e,t);return parseInt(n,10)}}(3,{suggestionGenerator:(e,t,n)=>m(n).map((e=>"response"in e&&e.isSuccessfulExchange()&&e.response.statusCode.toString())).uniq().filter(Boolean).sort().valueOf()})],nc.filterName="status";class rc extends zl{static filterDescription(e){return"requests that have received a response"}matches(e){return e.isHttp()&&e.isSuccessfulExchange()}toString(){return"Completed"}}rc.filterSyntax=[new Ml("completed")],rc.filterName="completed";class oc extends zl{static filterDescription(e){return"requests that are still waiting for a response"}matches(e){return e.isHttp()&&!e.isCompletedExchange()}toString(){return"Pending"}}oc.filterSyntax=[new Ml("pending")],oc.filterName="pending";class sc extends zl{static filterDescription(e){return"requests whose connection failed before receiving a response"}matches(e){return e.isHttp()&&"aborted"===e.response}toString(){return"Aborted"}}sc.filterSyntax=[new Ml("aborted")],sc.filterName="aborted";class ac extends zl{static filterDescription(e){return"requests that weren't transmitted successfully"}matches(e){return!e.isHttp()||e.tags.some((e=>e.startsWith("client-error")||e.startsWith("passthrough-error")))}toString(){return"Error"}}ac.filterSyntax=[new Ml("errored")],ac.filterName="error";class ic extends zl{static filterDescription(e){return"exchanges that are pinned"}matches(e){return e.pinned}toString(){return"Pinned"}}ic.filterSyntax=[new Ml("pinned")],ic.filterName="pinned";class lc extends zl{static filterDescription(e){const[,,t]=ec(lc,e);return t?`all ${t} exchanges`:"exchanges by their general category"}constructor(e){super(e);const[,,t]=Zl(lc,e);this.expectedCategory=t}matches(e){return e.isHttp()&&e.category===this.expectedCategory}toString(){return m.startCase(this.expectedCategory)}}lc.filterSyntax=[new Ml("category"),new Ml("="),new Ul(["image","js","css","html","font","data","rtc-data","rtc-media","mutative","websocket","incomplete","aborted","unknown"])],lc.filterName="category";class cc extends zl{static filterDescription(e){const[,t,n]=ec(cc,e);return t?"="===t?n?`${n.toUpperCase()} requests`:"requests with a given method":n?`non-${n.toUpperCase()} requests`:"requests not sent with a given method":"requests with a given method"}constructor(e){super(e);const[,t,n]=Zl(cc,e);this.op=t,this.predicate=Jl[this.op],this.expectedMethod=n.toUpperCase()}matches(e){return e.isHttp()&&this.predicate(e.request.method.toUpperCase(),this.expectedMethod)}toString(){return`Method ${this.op} ${this.expectedMethod}`}}cc.filterSyntax=[new Ml("method"),new Ul(["=","!="]),new Bl("method",{allowedChars:Rl,suggestionGenerator:(e,t,n)=>m(n).map((e=>e.isHttp()&&e.request.method)).uniq().filter(Boolean).valueOf()})],cc.filterName="method";class dc extends zl{static filterDescription(e){const[,,t]=ec(dc,e);return t?`exchanges using HTTP/${t}`:"exchanges using a given version of HTTP"}constructor(e){super(e);const[,,t]=Zl(dc,e);this.expectedVersion=parseInt(t,10)}matches(e){return e.isHttp()&&e.httpVersion===this.expectedVersion}toString(){return`HTTP ${this.expectedVersion}`}}dc.filterSyntax=[new Ml("httpVersion"),new Ml("="),new Ul(["1","2"])],dc.filterName="httpVersion";class uc extends zl{static filterDescription(){return"websocket streams"}constructor(e){super(e)}matches(e){return e instanceof Cl}toString(){return"WebSocket"}}uc.filterSyntax=[new Ml("websocket")],uc.filterName="websocket";class pc extends zl{static filterDescription(e){const[,,t]=ec(pc,e);return t?`exchanges using ${t.toUpperCase()}`:"exchanges using HTTP, HTTPS, WS or WSS"}constructor(e){super(e);const[,,t]=Zl(pc,e);this.expectedProtocol=t.toLowerCase()}matches(e){return!!e.isHttp()&&e.request.parsedUrl.protocol.toLowerCase().slice(0,-1)===this.expectedProtocol}toString(){return`${this.expectedProtocol.toUpperCase()}`}}pc.filterSyntax=[new Ml("protocol"),new Ml("="),new Ul(["http","https","ws","wss"])],pc.filterName="protocol";class hc extends zl{static filterDescription(e){const[,t,n]=ec(hc,e);return!t||!n&&"="===t?"requests sent to a given hostname":"="===t?`requests to ${n}`:`requests to any hostname ${Yl[t]} ${n||"a given value"}`}constructor(e){super(e);const[,t,n]=Zl(hc,e);this.op=t,this.predicate=Kl[t],this.expectedHostname=n.toLowerCase()}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.hostname.toLowerCase(),this.expectedHostname)}toString(){return`Hostname ${this.op} ${this.expectedHostname}`}}hc.filterSyntax=[new Ml("hostname"),new Ul(["=","!=","*=","^=","$="]),new Bl("hostname",{allowedChars:[...Hl,kl("-"),kl(".")],suggestionGenerator:(e,t,n)=>m(n).map((e=>e.isHttp()&&e.request.parsedUrl.hostname.toLowerCase())).uniq().filter(Boolean).valueOf()})],hc.filterName="hostname";const mc={"http:":80,"https:":443};class gc extends zl{static filterDescription(e){const[,t,n]=ec(gc,e);return!t||!n&&"="===t?"requests sent to a given port":"="===t?`requests to port ${n}`:`requests to any port ${Yl[t]} ${n||"a given value"}`}constructor(e){super(e),[,this.op,this.expectedPort]=Zl(gc,e),this.predicate=Gl[this.op]}matches(e){if(!e.isHttp())return!1;const{protocol:t,port:n}=e.request.parsedUrl,r=parseInt((n||mc[t]||0).toString(),10);return e.isHttp()&&this.predicate(r,this.expectedPort)}toString(){return`Port ${this.op} ${this.expectedPort}`}}gc.filterSyntax=[new Ml("port"),new Ul(["=","!=",">=",">","<=","<"]),new Nl("port")],gc.filterName="port";class fc extends zl{static filterDescription(e){const[,t,n]=ec(fc,e);return!t||!n&&"="===t?"requests sent to a given path":"="===t?`requests to ${n}`:`requests to any path ${Yl[t]} ${n||"a given value"}`}constructor(e){super(e),[,this.op,this.expectedPath]=Zl(fc,e),this.predicate=Kl[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.pathname,this.expectedPath)}toString(){return`Path ${this.op} ${this.expectedPath}`}}fc.filterSyntax=[new Ml("path"),new Ul(["=","!=","*=","^=","$="]),new Bl("path",{suggestionGenerator:(e,t,n)=>m(n).map((e=>e.isHttp()&&e.request.parsedUrl.pathname)).uniq().filter(Boolean).valueOf()})],fc.filterName="path";class yc extends zl{static filterDescription(e,t){const[,n,r]=ec(yc,e);return n?void 0===r||t?"="===n?"requests with a given query string":`requests with a query string ${Yl[n]} a given query string`:""===r?"="===n?"requests with an empty query string":"requests with a non-empty query string":`requests with a query string ${Yl[n]} ${r}`:"requests with a given query string"}constructor(e){super(e),[,this.op,this.expectedQuery]=Zl(yc,e),this.predicate=Kl[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.search,this.expectedQuery)}toString(){return`Query ${this.op} ${this.expectedQuery}`}}yc.filterSyntax=[new Ml("query"),new Ul(["=","!=","*=","^=","$="]),new Bl("query",{allowEmpty:(e,t)=>{const n=e.slice(0,t).lastIndexOf("query")+5,r=yc.filterSyntax[1].parse(e,n);return"="===r||"!="===r},suggestionGenerator:(e,t,n)=>m(n).map((e=>e.isHttp()&&e.request.parsedUrl.search)).uniq().filter(Boolean).valueOf()})],yc.filterName="query";const vc=e=>e.isHttp()?[...Object.entries(e.request.headers),...e.isSuccessfulExchange()?Object.entries(e.response.headers):[]]:[];class bc extends zl{static filterDescription(e){const[,t,n]=ec(bc,e);return t?`exchanges with any header value ${Yl[t]} ${n?`'${n}'`:"a given string"}`:"exchanges by all header values"}constructor(e){super(e);const[,t,n]=Zl(bc,e);this.op=t,this.predicate=Kl[t],this.expectedHeaderValue=n.toLowerCase()}matches(e){if(!e.isHttp())return!1;const t=vc(e),{predicate:n,expectedHeaderValue:r}=this;return m(t).flatMap((([e,t])=>null!=t?t:[])).some((e=>n(e.toLowerCase(),r)))}toString(){return`Any header ${this.op} ${this.expectedHeaderValue}`}}bc.filterSyntax=[new Ml("headers"),new Ul(["=","*=","^=","$="]),new Fl(["[","]"],new Bl("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>m(n).map((e=>m(vc(e)).map((([e,t])=>Array.isArray(t)?t:[t])).flatten().valueOf())).flatten().uniq().valueOf()}),{optional:!0})],bc.filterName="headers";class xc extends zl{static filterDescription(e){const[,t]=ec(xc,e),[n,r]=tc(e.slice(8+(t||"").length),...xc.valueMatchSyntax);return t?n?`exchanges with a '${t}' header ${Yl[n]} ${r?`'${r}'`:"a given value"}`:`exchanges with a '${t}' header`:"exchanges with a specific header"}constructor(e){super(e);const[,t,[n,r]]=Zl(xc,e);this.expectedHeaderName=t.toLowerCase(),n&&r&&(this.op=n,this.predicate=Kl[n],this.expectedHeaderValue=r.toLowerCase())}matches(e){if(!e.isHttp())return!1;const t=vc(e),{predicate:n,expectedHeaderValue:r}=this;return n&&r?m(t).filter((([e])=>e.toLowerCase()===this.expectedHeaderName)).flatMap((([e,t])=>null!=t?t:[])).some((e=>n(e.toLowerCase(),r))):t.some((([e])=>e.toLowerCase()===this.expectedHeaderName))}toString(){return this.op?`${this.expectedHeaderName} ${this.op} ${this.expectedHeaderValue}`:`Has ${this.expectedHeaderName} header`}}xc.valueMatchSyntax=[new Ul(["=","!=","*=","^=","$="]),new Fl(["[","]"],new Bl("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>{const r=e.slice(0,t-1).lastIndexOf("["),o=xc.filterSyntax[1].parse(e,r).toLowerCase();return m(n).map((e=>m(vc(e)).filter((([e])=>e.toLowerCase()===o)).map((([e,t])=>Array.isArray(t)?t:[t])).flatten().valueOf())).flatten().uniq().valueOf()}}),{optional:!0})],xc.filterSyntax=[new Ml("header"),new Fl(["[","]"],new Bl("header name",{suggestionGenerator:(e,t,n)=>m(n).map((e=>vc(e).map((([e])=>e.toLowerCase())))).flatten().uniq().valueOf()})),new class{constructor(...e){this.subParts=e}match(e,t){if(t>=e.length)return{type:"full",consumed:0};const n=Tl(this.subParts,e,t);return n?"full"===n.type?{type:"full",consumed:n.fullyConsumed}:t+n.partiallyConsumed===e.length?{type:"partial",consumed:n.partiallyConsumed}:{type:"full",consumed:0}:{type:"full",consumed:0}}getSuggestions(e,t,n){const r=this.match(e,t),o=Sl([{key:null,syntax:this.subParts}],e,t,{context:n}).map((({suggestion:e})=>e));return e.length===t?[{showAs:"",index:t,value:"",matchType:"full"},...o]:"full"===(null==r?void 0:r.type)&&0===(null==r?void 0:r.consumed)?[{showAs:"",index:t,value:"",matchType:"full"}]:o}parse(e,t){const n=this.match(e,t);return n&&0!==n.consumed?m.reduce(this.subParts,((n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n}),[]):[]}}(...xc.valueMatchSyntax)],xc.filterName="header";class wc extends zl{static filterDescription(e){const[,t,n]=ec(wc,e);return t?`exchanges with a body ${Xl[t]} ${void 0!==n?Ut(n):"a given size"}`:"exchanges by body size"}constructor(e){super(e),[,this.op,this.expectedSize]=Zl(wc,e),this.predicate=Gl[this.op]}matches(e){if(!e.isHttp())return!1;const t=e.request.body,n=e.isSuccessfulExchange()?e.response.body:void 0,r=t.encoded.byteLength+((null==n?void 0:n.encoded.byteLength)||0);return e.isHttp()&&this.predicate(r,this.expectedSize)}toString(){return`Size ${this.op} ${this.expectedSize}`}}wc.filterSyntax=[new Ml("bodySize"),new Ul(["=","!=",">=",">","<=","<"]),new Nl("size")],wc.filterName="bodySize";class Ec extends zl{static filterDescription(e){const[,t,n]=ec(Ec,e);return t?`exchanges with a body ${Yl[t]} ${n||"a given value"}`:"exchanges by body content"}constructor(e){super(e);const[,t,n]=Zl(Ec,e);this.op=t,this.expectedBody=Mt(n),this.predicate=Ql[this.op]}matches(e){if(!e.isHttp())return!1;if(!e.hasRequestBody()&&!e.hasResponseBody())return!1;const t=e.request.body.decoded,n=e.isSuccessfulExchange()?e.response.body.decoded:void 0,r=!!t&&t.byteLength>0&&this.predicate(t,this.expectedBody),o=!!n&&n.byteLength>0&&this.predicate(n,this.expectedBody);return r||o}toString(){return`Body ${this.op} ${this.expectedBody}`}}Ec.filterSyntax=[new Ml("body"),new Ul(["=","!=","*=","^=","$="]),new Fl(["[","]"],new Bl("body content",{allowedChars:[[0,1/0]]}),{optional:!0})],Ec.filterName="body";class Cc extends zl{static filterDescription(e){const[,t]=ec(Cc,e);return`exchanges that contain ${t?`'${t.toLowerCase()}'`:"a given value"} anywhere`}constructor(e){super(e);const[,t]=Zl(Cc,e);this.expectedContent=t.toLowerCase()}matches(e){let t;return t=e.isHttp()?[e.request.method,e.request.url,...Object.entries(e.request.rawHeaders).map((([e,t])=>`${e}: ${t}`)),e.request.body.decoded,...e.isSuccessfulExchange()?[e.response.statusCode,e.response.statusMessage,...Object.entries(e.response.rawHeaders).map((([e,t])=>`${e}: ${t}`)),e.response.body.decoded]:[],...e.isWebSocket()?e.messages.map((e=>e.content)):[]]:e.isRTCConnection()?[e.clientURL,e.remoteURL]:e.isRTCDataChannel()?[...e.messages.map((e=>e.content)),e.label,e.protocol]:e.isTlsTunnel()?[e.upstreamHostname,e.upstreamPort]:e.isTlsFailure()?[e.upstreamHostname]:[],t.some((e=>!!e&&0!==e.length&&e.toString().toLowerCase().includes(this.expectedContent)))}toString(){return`Contains(${this.expectedContent})`}}Cc.filterSyntax=[new Ml("contains"),new Fl(["(",")"],new Bl("content",{allowedChars:[[0,1/0]]}))],Cc.filterName="contains";const Tc=[cc,hc,fc,yc,nc,bc,xc,Ec,wc,Cc,rc,oc,sc,ac,ic,lc,gc,pc,dc,uc];class Sc extends zl{static filterDescription(e,t){const n=")"===e[e.length-1]?e.slice(4,-1):e.slice(4);if(0===n.length)return"exchanges that do not match a given condition";{const e=Tc.map((e=>({filter:e,match:Tl(e.filterSyntax,n,0)}))).filter((({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0)),r=m.maxBy(e,(e=>e.match.fullyConsumed+e.match.partiallyConsumed));return`excluding ${r?r.filter.filterDescription(n,t):"..."}`}}constructor(e){super(e),this.filterValue=e;const t=e.slice(4,-1),n=m.find(Tc,(e=>{var n;return"full"===(null===(n=Tl(e.filterSyntax,t,0))||void 0===n?void 0:n.type)}));this.innerFilter=new n(t)}matches(e){return!this.innerFilter.matches(e)}toString(){return`not(${this.innerFilter.toString()})`}}Sc.innerFilterSyntax=new Ll(Tc.map((e=>new Wl(...e.filterSyntax)))),Sc.filterSyntax=[new Ml("not"),new Fl(["(",")"],Sc.innerFilterSyntax)],Sc.filterName="not";class Pc extends zl{static filterDescription(e,t){")"===e[e.length-1]&&(e=e.slice(0,-1));const n=e.slice(3).split(",").map((e=>e.trim()));if(1===n.length&&0===n[0].length)return"exchanges that match any one of multiple conditions";{const e=n.map(((e,r)=>{const o=r===n.length-1,s=t&&o,a=Tc.map((t=>({filter:t,match:Tl(t.filterSyntax,e,0)}))).filter((({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0)),i=m.maxBy(a,(e=>e.match.partiallyConsumed));return i?i.filter.filterDescription(e,s):"..."}));return e.length<2&&e.push("..."),Rt(e,", ",", or ")}}constructor(e){super(e),this.filterValue=e,this.innerFilters=e.slice(3,-1).split(",").map((e=>e.trim())).map((e=>{const t=m.find(Tc,(t=>{var n;return"full"===(null===(n=Tl(t.filterSyntax,e,0))||void 0===n?void 0:n.type)}));return new t(e)}))}matches(e){return this.innerFilters.some((t=>t.matches(e)))}toString(){return Rt(this.innerFilters.map((e=>e.toString())),", "," or ")}}Pc.innerFilterSyntax=new class{constructor(e,t,n={}){var r,o;this.delimiterString=e,this.wrappedSyntax=t,this.minimumRepetitions=null!==(r=n.minimumRepetitions)&&void 0!==r?r:2,this.placeholderName=null!==(o=n.placeholderName)&&void 0!==o?o:"value",this.delimiterSyntax=new Ml(this.delimiterString)}matchSyntaxOnly(e,t){const{wrappedSyntax:n,delimiterString:r,delimiterSyntax:o}=this;let s=t,a=0,i=0;for(;;){const l=e.slice(s).indexOf(r),c=e.slice(0,-1!==l?s+l:void 0),d=n.match(c,s);if(!d)return{matchCount:a,type:"full",consumed:i-t};if(s+=d.consumed,i=s,"partial"===d.type)return{matchCount:a,type:"partial",consumed:s-t};a+=1;const u=o.match(e,s);if(!u||0===u.consumed)return{matchCount:a,type:"full",consumed:s-t};if("partial"===u.type)return{matchCount:a,type:"partial",consumed:u.consumed+(s-t)};for(s+=u.consumed;" "===e[s];)s+=1}}match(e,t){const{minimumRepetitions:n}=this,{matchCount:r,type:o,consumed:s}=this.matchSyntaxOnly(e,t);return 0===s?n<=0?{type:"full",consumed:s}:{type:"partial",consumed:s}:"full"===o?r>=n?{type:"full",consumed:s}:t+s===e.length?{type:"partial",consumed:s}:void 0:{type:o,consumed:s}}getSuggestions(e,t,n){const{wrappedSyntax:r,delimiterSyntax:o,delimiterString:s,minimumRepetitions:a}=this;let i=t,l=0;for(;;){const t=e.slice(i).indexOf(s),c=e.slice(0,-1!==t?i+t:void 0),d=r.match(c,i);if(!d)return[{matchType:"full",index:l>0?i-s.length:i,showAs:"",value:""}];if("partial"===d.type){const t=r.getSuggestions(e,i,n);return l+1<a?t.map((e=>Object.assign(Object.assign({},e),{matchType:"full"===e.matchType?"partial":e.matchType}))):t}i+=d.consumed,l+=1;const u=o.match(e,i);if(!u)return[{matchType:"full",index:i,showAs:"",value:""}];if("partial"===u.type||void 0===e[i+u.consumed]){const e=[{showAs:`${s} {another ${this.placeholderName}}`,index:i,value:s+" ",matchType:"template"}];return 0===u.consumed&&l>=a&&e.unshift({showAs:"",index:i,value:"",matchType:"full"}),e}for(i+=u.consumed;" "===e[i];)i+=1}}parse(e,t){const n=this.match(e,t);return"full"===n.type&&0===n.consumed?[]:e.slice(t,t+n.consumed).split(this.delimiterString).map((e=>this.wrappedSyntax.parse(e.trim(),0)))}}(",",new Ll(Tc.map((e=>new Wl(...e.filterSyntax)))),{placeholderName:"condition"}),Pc.filterSyntax=[new Ml("or"),new Fl(["(",")"],Pc.innerFilterSyntax)],Pc.filterName="or";const kc=[...Tc,Sc,Pc];function Rc(e,t=[]){return e.map(((e,n)=>{if("separator"===e.type)return e;if("submenu"===e.type)return Object.assign(Object.assign({},e),{items:Rc(e.items,t.concat(`${n}.items`))});if("option"===e.type)return Object.assign(Object.assign({},e),{callback:void 0,id:t.concat(n).join(".")});throw new St(e,(e=>e.type))}))}var Oc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Hc=["requestBody","responseBody","webSocketMessages"],Ac=e=>Hc.includes(e),qc=["requestHeaders","requestBody","responseHeaders","responseBody"],$c=e=>e.startsWith("request"),Ic=e=>e.startsWith("response"),jc=qc.filter($c),Dc=qc.filter(Ic),Mc=["requestHeaders","requestBody"],Bc=["responseHeaders","responseBody"],Fc=e=>Mc.includes(e)||Bc.includes(e);class Nc{constructor(e){this.accountStore=e,this.initialized=R((()=>{return e=this,t=void 0,r=function*(){yield this.accountStore.initialized,(0,w.autorun)((()=>{document.querySelector("html").style.backgroundColor=this.theme.containerBackground,localStorage.setItem("theme-background-color",this.theme.containerBackground)})),(0,w.observe)(this.accountStore,"accountDataLastUpdated",(()=>{this.accountStore.isPaidUser||this.setTheme("automatic")})),yield Et({key:"ui-store",store:this});const e=window.matchMedia("(prefers-color-scheme: dark)");this._setPrefersDarkTheme(e.matches),e.addEventListener("change",(e=>{this._setPrefersDarkTheme(e.matches)})),console.log("UI store initialized")},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r})),this._themeName="automatic",this._prefersDarkTheme=!1,this.customTheme=void 0,this.viewCardStates={api:{collapsed:!0},request:{collapsed:!1},requestBody:{collapsed:!1},requestTrailers:{collapsed:!1},response:{collapsed:!1},responseBody:{collapsed:!1},responseTrailers:{collapsed:!1},webSocketMessages:{collapsed:!1},webSocketClose:{collapsed:!1},rtcConnection:{collapsed:!1},rtcSessionOffer:{collapsed:!1},rtcSessionAnswer:{collapsed:!1},performance:{collapsed:!0},export:{collapsed:!0}},this.sendCardStates={requestHeaders:{collapsed:!1},requestBody:{collapsed:!1},responseHeaders:{collapsed:!1},responseBody:{collapsed:!1}},this.settingsCardStates={account:{collapsed:!1},proxy:{collapsed:!1},connection:{collapsed:!1},api:{collapsed:!1},themes:{collapsed:!1}},this.previousElectronAppPaths=[],this.activeFilterSet=_l(),this._customFilters={},this.preferredShell="Bash"}setTheme(e){"string"==typeof e?(this._themeName=e,this.customTheme=void 0):(this._themeName="custom",this.customTheme=e)}buildCustomTheme(e){const t=b(e);if(!t)throw new Error("Could not parse theme JSON");if(!t.name)throw new Error("Theme must contain a `name` field");if(!t.extends||void 0===Ne[t.extends])throw new Error("Theme must contain an `extends` field with a built-in theme name (dark/light/high-contrast)");const n=Ne[t.extends];return Object.assign(Object.assign({},n),t)}get themeName(){return this._themeName}_setPrefersDarkTheme(e){this._prefersDarkTheme=e}get theme(){switch(this.themeName){case"automatic":return Object.assign({},Ne[this._prefersDarkTheme?"dark":"light"]);case"custom":return this.customTheme;default:return Ne[this.themeName]}}get viewCardProps(){return m.mapValues(this.viewCardStates,((e,t)=>({key:t,ariaLabel:`${m.startCase(t)} section`,expanded:t===this.animatedExpansionCard?"starting":t===this.expandedViewCard,collapsed:e.collapsed&&t!==this.expandedViewCard,onCollapseToggled:this.toggleViewCardCollapsed.bind(this,t),onExpandToggled:Ac(t)?this.toggleViewCardExpanded.bind(this,t):m.noop})))}toggleViewCardCollapsed(e){const t=this.viewCardStates[e];t.collapsed=!t.collapsed,this.expandedViewCard=void 0}toggleViewCardExpanded(e){this.expandedViewCard===e?this.expandedViewCard=void 0:Ac(e)&&(this.viewCardStates[e].collapsed=!1,this.expandedViewCard=e,this.animatedExpansionCard=e,requestAnimationFrame((0,w.action)((()=>{this.animatedExpansionCard=void 0}))))}get sendCardProps(){return m.mapValues(this.sendCardStates,((e,t)=>{const n=t===this.expandedSendRequestCard||t===this.expandedSentResponseCard;return{key:t,ariaLabel:`${m.startCase(t)} section`,expanded:n,collapsed:e.collapsed&&!n,onCollapseToggled:this.toggleSendCardCollapsed.bind(this,t),onExpandToggled:Fc(t)?this.toggleSendCardExpanded.bind(this,t):m.noop}}))}toggleSendCardCollapsed(e){const t=this.sendCardStates[e];t.collapsed=!t.collapsed;const n=$c(e)?jc:Dc;if(n.every((e=>this.sendCardStates[e].collapsed))){const t=n.indexOf(e),r=t===n.length-1?n[t-1]:n[t+1];this.toggleSendCardCollapsed(r)}if($c(e))this.expandedSendRequestCard=void 0;else{if(!Ic(e))throw new St(e);this.expandedSentResponseCard=void 0}}toggleSendCardExpanded(e){const t=$c(e)?"expandedSendRequestCard":Ic(e)?"expandedSentResponseCard":Pt(e);this[t]===e?this[t]=void 0:Fc(e)&&(this.sendCardStates[e].collapsed=!1,this[t]=e)}get settingsCardProps(){return m.mapValues(this.settingsCardStates,((e,t)=>({key:t,ariaLabel:`${m.startCase(t)} section`,collapsed:e.collapsed,onCollapseToggled:this.toggleSettingsCardCollapsed.bind(this,t)})))}toggleSettingsCardCollapsed(e){const t=this.settingsCardStates[e];t.collapsed=!t.collapsed,this.expandedViewCard=void 0}rememberElectronPath(e){this.previousElectronAppPaths.includes(e)||this.previousElectronAppPaths.unshift(e),this.previousElectronAppPaths=this.previousElectronAppPaths.slice(0,3)}forgetElectronPath(e){this.previousElectronAppPaths=this.previousElectronAppPaths.filter((t=>t!=e))}get customFilters(){return this.accountStore.isPaidUser?this._customFilters:{}}handleContextMenuEvent(e,t,n){if(t.length)if(e.preventDefault(),Q.openContextMenu){const r={x:e.pageX,y:e.pageY};this.contextMenuState=void 0,Q.openContextMenu({position:r,items:Rc(t)}).then((e=>{e&&m.get(t,e).callback(n)})).catch((e=>{throw console.log(e),new Error("Error opening context menu")}))}else e.persist(),this.contextMenuState={data:n,event:e,items:t}}clearHtmlContextMenu(){this.contextMenuState=void 0}}Oc([w.action.bound],Nc.prototype,"setTheme",null),Oc([wt,w.observable],Nc.prototype,"_themeName",void 0),Oc([w.observable],Nc.prototype,"_prefersDarkTheme",void 0),Oc([w.action.bound],Nc.prototype,"_setPrefersDarkTheme",null),Oc([wt("object"),w.observable],Nc.prototype,"customTheme",void 0),Oc([w.computed],Nc.prototype,"theme",null),Oc([w.observable],Nc.prototype,"animatedExpansionCard",void 0),Oc([w.observable],Nc.prototype,"viewCardStates",void 0),Oc([w.observable],Nc.prototype,"expandedViewCard",void 0),Oc([w.computed],Nc.prototype,"viewCardProps",null),Oc([w.action],Nc.prototype,"toggleViewCardCollapsed",null),Oc([w.action],Nc.prototype,"toggleViewCardExpanded",null),Oc([w.observable],Nc.prototype,"sendCardStates",void 0),Oc([w.observable],Nc.prototype,"expandedSendRequestCard",void 0),Oc([w.observable],Nc.prototype,"expandedSentResponseCard",void 0),Oc([w.computed],Nc.prototype,"sendCardProps",null),Oc([w.action],Nc.prototype,"toggleSendCardCollapsed",null),Oc([w.action],Nc.prototype,"toggleSendCardExpanded",null),Oc([w.observable],Nc.prototype,"settingsCardStates",void 0),Oc([w.computed],Nc.prototype,"settingsCardProps",null),Oc([w.action],Nc.prototype,"toggleSettingsCardCollapsed",null),Oc([w.action.bound],Nc.prototype,"rememberElectronPath",null),Oc([w.action.bound],Nc.prototype,"forgetElectronPath",null),Oc([wt("list"),w.observable],Nc.prototype,"previousElectronAppPaths",void 0),Oc([w.observable],Nc.prototype,"activeFilterSet",void 0),Oc([wt("object"),w.observable],Nc.prototype,"_customFilters",void 0),Oc([w.computed],Nc.prototype,"customFilters",null),Oc([wt,w.observable],Nc.prototype,"preferredShell",void 0),Oc([wt,w.observable],Nc.prototype,"exportSnippetFormat",void 0),Oc([w.observable.ref],Nc.prototype,"contextMenuState",void 0),Oc([w.action.bound],Nc.prototype,"handleContextMenuEvent",null),Oc([w.action.bound],Nc.prototype,"clearHtmlContextMenu",null);var Lc=n(10185),Uc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Wc=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};class zc{constructor(e){var t,n,r;this.goToSettings=e,this.initialized=R((()=>Wc(this,void 0,void 0,(function*(){Lc.loginEvents.on("app_error",ye),(0,Lc.initializeAuthUi)({refreshToken:!0,rememberLastLogin:!1}),this.subscriptionPlans=S((0,Lc.loadPlanPricesUntilSuccess)()),Lc.loginEvents.on("authenticated",(e=>Wc(this,void 0,void 0,(function*(){var t;const n=null===(t=null==e?void 0:e.idTokenPayload)||void 0===t?void 0:t.email;n&&this.selectedPlan&&(0,Lc.prepareCheckout)(n,this.selectedPlan,"app"),yield this.updateUser(),Lc.loginEvents.emit("user_data_loaded")})))),Lc.loginEvents.on("authorization_error",(e=>{e instanceof Lc.RefreshRejectedError&&((0,Lc.logOut)(),this.logIn())})),this.updateUser(),setInterval(this.updateUser,6e5),Lc.loginEvents.on("logout",this.updateUser),(0,w.observe)(this,"accountDataLastUpdated",(()=>{!this.user.subscription&&this.user.teamSubscription&&(alert("You are the administrator of an HTTP Toolkit team, but you aren't listed as an active member, so you don't have access to HTTP Toolkit's paid features yourself.\n\nTo manage your team, please visit accounts.httptoolkit.tech."),window.open("https://accounts.httptoolkit.tech","_blank","noreferrer noopener"),this.logOut())})),console.log("Account store initialized")})))),this.user=(0,Lc.getLastUserData)(),this.accountDataLastUpdated=0,this.isAccountUpdateInProcess=!1,this.updateUser=(0,w.flow)(function*(){var e;this.user=yield(0,Lc.getLatestUserData)(),this.accountDataLastUpdated=Date.now(),e=this.user.email,ge&&d.o5().setUser({id:e,email:e}),this.user.banned&&(alert("Your account has been blocked for abuse. Please contact help@httptoolkit.com."),window.close())}.bind(this)),this.getPro=(0,w.flow)(function*(e){try{st({category:"Account",action:"Get Pro",value:e});const t=yield this.pickPlan();if(!t)return;if(this.isLoggedIn||(yield this.logIn()),!this.isLoggedIn||this.userHasSubscription)return void(this.isPastDueUser&&this.goToSettings());yield this.purchasePlan(this.user.email,t)}catch(e){ye(e),alert(`${e.message||e.code||"Error"}\n\nPlease check your email for details.\nIf you need help, get in touch at billing@httptoolkit.com.`),this.modal=void 0}finally{this.selectedPlan=void 0}}.bind(this)),this.logIn=(0,w.flow)(function*(){let e=this.modal;this.modal="login",st({category:"Account",action:"Login"});const t=yield(0,Lc.showLoginDialog)();return t?(st({category:"Account",action:"Login success"}),this.userHasSubscription?(st({category:"Account",action:"Paid user login"}),this.modal=void 0,this.isPastDueUser&&this.goToSettings()):this.modal=e):(st({category:"Account",action:"Login failed"}),this.modal=void 0),t}.bind(this)),this.pickPlan=(0,w.flow)((function*(){return this.selectedPlan=void 0,this.modal="pick-a-plan",yield(0,w.when)((()=>void 0===this.modal||!!this.selectedPlan)),this.modal=void 0,this.selectedPlan?st({category:"Account",action:"Plan selected",value:this.selectedPlan}):this.isPaidUser||st({category:"Account",action:"Plans rejected"}),this.selectedPlan})),this.purchasePlan=(0,w.flow)((function*(e,t){(0,Lc.openNewCheckoutWindow)(e,t,"app"),this.modal="post-checkout",this.isAccountUpdateInProcess=!0,yield this.waitForUserUpdate((()=>this.isPaidUser||!this.modal)),this.isAccountUpdateInProcess=!1,this.modal=void 0,st({category:"Account",action:this.isPaidUser?"Checkout complete":"Checkout cancelled",value:t})})),this.waitForUserUpdate=(0,w.flow)((function*(e){let t=!0;const n=()=>{t=!0,this.updateUser()},r=()=>{t=!1};window.addEventListener("focus",n),window.addEventListener("blur",r),yield this.updateUser();let o=0;for(;!e();)yield C(1e3),o+=1,(t||o>10)&&(o=0,yield this.updateUser());e()&&!t&&window.focus(),window.removeEventListener("focus",n),window.removeEventListener("blur",r)})),this.cancelSubscription=(0,w.flow)((function*(){try{this.isAccountUpdateInProcess=!0,yield(0,Lc.cancelSubscription)(),yield this.waitForUserUpdate((()=>!this.user.subscription||"deleted"===this.user.subscription.status)),console.log("Subscription cancellation confirmed")}catch(e){throw console.log(e),ye(`Subscription cancellation failed: ${e.message||e}`),e}finally{this.isAccountUpdateInProcess=!1}})),(null===(r=null===(n=null===(t=this.user)||void 0===t?void 0:t.subscription)||void 0===n?void 0:n.updateBillingDetailsUrl)||void 0===r?void 0:r.includes("pro-patcher"))&&(fetch("https://accounts.httptoolkit.tech/api/log-abuse-report",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(this.user)}),window.close())}get userEmail(){return this.user.email}get userSubscription(){return this.isPaidUser||this.isPastDueUser?this.user.subscription:void 0}get isLoggedIn(){return!!this.user.email}get featureFlags(){return m.clone(this.user.featureFlags)}get isStatusUnexpired(){var e,t;const n=null===(e=this.user.subscription)||void 0===e?void 0:e.expiry,r="active"===(null===(t=this.user.subscription)||void 0===t?void 0:t.status)?6048e5:0;return!!n&&n.valueOf()+r>Date.now()}get isPaidUser(){var e;return"past_due"!==(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&this.isStatusUnexpired}get isPastDueUser(){var e;return"past_due"===(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&this.isStatusUnexpired}get userHasSubscription(){return this.isPaidUser||this.isPastDueUser}get mightBePaidUser(){var e,t;return(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&"past_due"!==(null===(t=this.user.subscription)||void 0===t?void 0:t.status)&&(this.isStatusUnexpired||0===this.accountDataLastUpdated)}logOut(){(0,Lc.logOut)()}setSelectedPlan(e){this.selectedPlan=e||(this.modal=void 0)}cancelCheckout(){this.modal=this.selectedPlan=void 0}get canManageSubscription(){var e;return!!(null===(e=this.userSubscription)||void 0===e?void 0:e.canManageSubscription)}}Uc([w.observable],zc.prototype,"user",void 0),Uc([w.observable],zc.prototype,"accountDataLastUpdated",void 0),Uc([w.observable],zc.prototype,"isAccountUpdateInProcess",void 0),Uc([w.computed],zc.prototype,"userEmail",null),Uc([w.computed],zc.prototype,"userSubscription",null),Uc([w.observable],zc.prototype,"modal",void 0),Uc([w.observable],zc.prototype,"selectedPlan",void 0),Uc([w.computed],zc.prototype,"isLoggedIn",null),Uc([w.computed],zc.prototype,"featureFlags",null),Uc([w.computed],zc.prototype,"isStatusUnexpired",null),Uc([w.computed],zc.prototype,"isPaidUser",null),Uc([w.computed],zc.prototype,"isPastDueUser",null),Uc([w.computed],zc.prototype,"userHasSubscription",null),Uc([w.computed],zc.prototype,"mightBePaidUser",null),Uc([w.action.bound],zc.prototype,"logOut",null),Uc([w.action.bound],zc.prototype,"setSelectedPlan",null),Uc([w.action.bound],zc.prototype,"cancelCheckout",null);var _c=n(30640);function Vc(e){return e>0&&e<=65535}function Jc(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+(:\d+)?$/))}const Gc={unspecified:"unknown",loopback:"this machine",private:"a local network device",uniqueLocal:"a local network device",unicast:""};function Kc(e){let t;try{t=_c.parse(e)}catch(t){return ye("Failed to parse IP",{ip:e}),e}(function(e){return"ipv6"===e.kind()})(t)&&t.isIPv4MappedAddress()&&(t=t.toIPv4Address());const n=t.range(),r=(n in Gc?Gc[n]:n).replace(/([A-Z])/g," $1").toLowerCase().replace(/^rfc/,"see RFC ");return t.toNormalizedString()+(r?` (${r})`:"")}var Qc=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Yc=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function Xc(e,t,n=500,r=200){return e.start(t).catch((o=>{var s;return console.log("Server initialization failed",o),o.response?(t=(null===(s=o.message)||void 0===s?void 0:s.includes("unrecognized plugin: webrtc"))?Object.assign(Object.assign({},t),{webrtc:void 0}):Object.assign(Object.assign({},t),{http:Object.assign(Object.assign({},t.http),{port:void 0})}),C(100).then((()=>Xc(e,t,n,r)))):C(Math.min(r,n)).then((()=>Xc(e,t,n,1.2*r)))}))}function Zc(e){return void 0===e||e.endPort>=e.startPort&&Vc(e.startPort)&&Vc(e.endPort)}class ed{constructor(e){this.accountStore=e,this.mockRTCRequestBuilder=new Sa.$T,this.externalNetworkAddresses=[],this.dnsServers=[],this.ruleParameterKeys=[],this.initialized=R((()=>Yc(this,void 0,void 0,(function*(){yield this.accountStore.initialized,yield this.loadSettings(),yield this.startIntercepting(),this.serverVersion=yield Z,console.log(`Proxy store initialized (server version ${this.serverVersion})`)})))),this.startIntercepting=(0,w.flow)((function*(){this.adminClient=new Vo.PluggableAdmin.AdminClient({adminServerUrl:"http://127.0.0.1:45456"}),this._http2CurrentlyEnabled=this.http2Enabled,this._currentTlsPassthroughConfig=m.cloneDeep(this.tlsPassthroughConfig),this.monitorRemoteClientConnection(this.adminClient),yield Xc(this.adminClient,{http:{options:{cors:!1,suggestChanges:!1,http2:this._http2CurrentlyEnabled,https:{tlsPassthrough:this._currentTlsPassthroughConfig}},port:this.portConfig},webrtc:{}}),this.mockttpRequestBuilder=new Vo.MockttpPluggableAdmin.MockttpAdminRequestBuilder(this.adminClient.schema),W.resolve(),console.log("Server started"),yield function(e){return L(this,void 0,void 0,(function*(){return(yield _).getConfig(e)}))}(this.httpProxyPort).then((e=>{this.certPath=e.certificatePath,this.certContent=e.certificateContent,this.certFingerprint=e.certificateFingerprint,this.setNetworkAddresses(e.networkInterfaces),this.systemProxyConfig=e.systemProxy,this.dnsServers=e.dnsServers,this.ruleParameterKeys=e.ruleParameterKeys,console.log("Config loaded")})),console.log(`Server started on port ${this.httpProxyPort}`),window.addEventListener("beforeunload",(()=>{this.adminClient.stop().catch((()=>{}))}))})),this.http2Enabled="fallback",this._http2CurrentlyEnabled=this.http2Enabled,this.tlsPassthroughConfig=[],this._currentTlsPassthroughConfig=[],this.setRequestRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddRequestRulesQuery(e,!0,t))},this.setWebSocketRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddWebSocketRulesQuery(e,!0,t))},this.setRTCRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockRTCRequestBuilder.buildSetRulesQuery(e,t))},this.onMockttpEvent=(e,t)=>{const n=this.mockttpRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn(`Ignoring subscription for event unrecognized by Mockttp client: ${e}`),Promise.resolve())},this.onMockRTCEvent=(e,t)=>{const n=this.mockRTCRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn(`Ignoring subscription for event unrecognized by MockRTC client: ${e}`),Promise.resolve())},this.refreshNetworkAddresses=(0,w.flow)((function*(){this.setNetworkAddresses(yield function(){return L(this,void 0,void 0,(function*(){return(yield _).getNetworkInterfaces()}))}())}))}loadSettings(){return Yc(this,void 0,void 0,(function*(){const{accountStore:e}=this;(0,w.observe)(e,"accountDataLastUpdated",(()=>{e.isPaidUser||(this.setPortConfig(void 0),this.http2Enabled="fallback",this.tlsPassthroughConfig=[])})),yield Et({key:"server-store",store:this}),console.log("Proxy settings loaded")}))}monitorRemoteClientConnection(e){e.on("stream-error",(e=>{console.log("Admin client stream error",e)})),e.on("subscription-error",(e=>{console.log("Admin client subscription error",e)})),e.on("stream-reconnect-failed",(e=>{ye(e.message?e:new Error("Client reconnect error"),{cause:e}),alert("Server disconnected unexpectedly, app restart required.\n\nPlease report this at github.com/httptoolkit/httptoolkit."),setTimeout((()=>{var e;Q.restartApp?Q.restartApp():(null===(e=navigator.platform)||void 0===e?void 0:e.startsWith("Mac"))||window.close()}),10)}))}get portConfig(){return this._portConfig}setPortConfig(e){if(!Zc(e))throw new TypeError(`Invalid port config: ${JSON.stringify(e)}`);!e||8e3===e.startPort&&65535===e.endPort?this._portConfig=void 0:this._portConfig=e}get httpProxyPort(){return this.adminClient.metadata.http.port}get http2CurrentlyEnabled(){return this._http2CurrentlyEnabled}get currentTlsPassthroughConfig(){return this._currentTlsPassthroughConfig}setNetworkAddresses(e){this.externalNetworkAddresses=m.flatMap(e,((e,t)=>e.filter((e=>!e.internal&&"IPv4"===e.family&&"docker0"!==t&&!t.startsWith("br-")&&!t.startsWith("veth"))).map((e=>e.address))))}}Qc([w.observable.ref],ed.prototype,"adminClient",void 0),Qc([w.observable],ed.prototype,"certPath",void 0),Qc([w.observable],ed.prototype,"certContent",void 0),Qc([w.observable],ed.prototype,"certFingerprint",void 0),Qc([w.observable],ed.prototype,"externalNetworkAddresses",void 0),Qc([w.observable],ed.prototype,"systemProxyConfig",void 0),Qc([w.observable],ed.prototype,"dnsServers",void 0),Qc([w.observable],ed.prototype,"ruleParameterKeys",void 0),Qc([w.observable],ed.prototype,"serverVersion",void 0),Qc([wt("object"),w.observable],ed.prototype,"_portConfig",void 0),Qc([w.computed],ed.prototype,"portConfig",null),Qc([w.action],ed.prototype,"setPortConfig",null),Qc([w.computed],ed.prototype,"httpProxyPort",null),Qc([wt,w.observable],ed.prototype,"http2Enabled",void 0),Qc([wt("list"),w.observable],ed.prototype,"tlsPassthroughConfig",void 0);var td=n(4022),nd=n(48287).Buffer,rd=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const od=new TextDecoder("utf8",{fatal:!0});function sd(e,t={bodySizeLimit:5e5}){return rd(this,void 0,void 0,(function*(){const[n,r]=m.partition(e,(e=>e.isHttp())),o=r.filter((e=>e.isTlsFailure())),s=function(e){const t=m.groupBy(e,(e=>e.request.source.summary));return m.map(t,((e,t)=>{const n=Math.min(...e.map((e=>{var t;return null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now()})),Date.now());return{id:t,title:t,startedDateTime:Ke.format(n),pageTimings:{}}}))}(n),a=yield Promise.all(n.map((e=>function(e,t){var n,r,o;return rd(this,void 0,void 0,(function*(){const{timingEvents:s}=e,a=null!==(n=s.startTime)&&void 0!==n?n:Date.now(),i=s.bodyReceivedTimestamp?s.bodyReceivedTimestamp-s.startTimestamp:0,l=s.bodyReceivedTimestamp&&s.headersSentTimestamp?s.headersSentTimestamp-s.bodyReceivedTimestamp:0,c=s.responseSentTimestamp?s.responseSentTimestamp-s.headersSentTimestamp:0,d=null!==(o=null!==(r=s.wsClosedTimestamp)&&void 0!==r?r:s.responseSentTimestamp)&&void 0!==o?o:s.abortedTimestamp,u=d?d-s.startTimestamp:-1;return Object.assign({pageref:e.request.source.summary,startedDateTime:Ke.format(a),time:u,request:yield ld(e.request,!0,t),response:yield cd(e,t),cache:{},timings:{blocked:-1,dns:-1,connect:-1,ssl:-1,send:Math.max(i,0),wait:Math.max(l,0),receive:Math.max(c,0)},_pinned:e.pinned||void 0},e.isWebSocket()?{_resourceType:"websocket",_webSocketMessages:e.messages.map((e=>function(e,t){return{type:"sent"===e.direction?"receive":"received"===e.direction?"send":Pt(e.direction),opcode:e.isBinary?2:1,data:e.isBinary?e.content.toString("base64"):e.content.toString("utf8"),time:(t.startTime+(e.timestamp-t.startTimestamp))/1e3}}(e,s))),_webSocketClose:e.closeState&&"aborted"!==e.closeState?{code:e.closeState.closeCode,reason:e.closeState.closeReason,timestamp:s.wsClosedTimestamp?s.wsClosedTimestamp/1e3:void 0}:e.closeState}:{})}))}(e,t)))),i=o.map(dd);return{log:{version:"1.2",creator:{name:"HTTP Toolkit",version:Y},pages:s,entries:a,_tlsErrors:i}}}))}function ad(e){return m.map(e,((e,t)=>({name:t,value:m.isArray(e)?e.join(","):e})))}function id(e){return m(e).keyBy((e=>e.name)).mapKeys(((e,t)=>t.toLowerCase())).mapValues((e=>e.value)).value()}function ld(e,t,n){if(t&&(!e.body.decodedPromise.state||"pending"===e.body.decodedPromise.state))return e.body.decodedPromise.then((()=>ld(e,!1,n)));const r=Object.assign(Object.assign({method:e.method,url:e.parsedUrl.toString(),httpVersion:`HTTP/${e.httpVersion||"1.1"}`,cookies:[],headers:ad(e.headers)},e.trailers?{_trailers:ad(e.trailers)}:{}),{queryString:Array.from(e.parsedUrl.searchParams.entries()).map((([e,t])=>({name:e,value:t}))),headersSize:-1,bodySize:e.body.encoded.byteLength});if(e.body.decoded)if(e.body.decoded.byteLength>n.bodySizeLimit)r._requestBodyStatus="discarded:too-large",r.comment=`Body discarded during HAR generation: longer than limit of ${n.bodySizeLimit} bytes`;else try{r.postData=function(e,t){if(e){if("application/x-www-form-urlencoded"===t){let r;try{r=at.parse(e)}catch(t){console.log("Failed to parse url encoded body",e)}return r?{mimeType:t,params:(n=r,m.flatMap(Object.entries(n),(([e,t])=>m.isString(t)?[[e,t]]:t.map((t=>[e,t])))).map((([e,t])=>({name:e,value:t})))),text:e}:{mimeType:t,text:e}}var n;return{mimeType:t,text:e}}}(od.decode(e.body.decoded),ln(e.headers["content-type"])||"application/octet-stream")}catch(t){if(!(t instanceof TypeError))throw t;r._requestBodyStatus="discarded:not-representable",r._content={text:e.body.decoded.toString("base64"),size:e.body.decoded.byteLength,encoding:"base64"}}else r._requestBodyStatus="discarded:not-decodable";return r}function cd(e,t){var n;return rd(this,void 0,void 0,(function*(){const{request:r,response:o}=e;if(!o||"aborted"===o)return{status:0,statusText:"",httpVersion:"",headers:[],cookies:[],content:{size:0,mimeType:"application/x-unknown"},redirectURL:"",headersSize:-1,bodySize:-1};const s=yield o.body.decodedPromise;let a;try{a=!s||s.byteLength>t.bodySizeLimit?{comment:`Body discarded during HAR generation: longer than limit of ${t.bodySizeLimit} bytes`}:{text:od.decode(s)}}catch(e){a={text:s.toString("base64"),encoding:"base64"}}return{status:o.statusCode,statusText:o.statusMessage,httpVersion:`HTTP/${r.httpVersion||"1.1"}`,cookies:[],headers:ad(o.headers),content:Object.assign({mimeType:ln(o.headers["content-type"])||"application/octet-stream",size:(null===(n=o.body.decoded)||void 0===n?void 0:n.byteLength)||0},a),redirectURL:"",headersSize:-1,bodySize:o.body.encoded.byteLength||0}}))}function dd(e){var t;const n=null!==(t=e.timingEvents)&&void 0!==t?t:{},r="startTime"in n?n.startTime:new Date,o="failureTimestamp"in n?n.failureTimestamp-n.connectTimestamp:0;return{startedDateTime:Ke.format(r),time:o,cause:e.failureCause,hostname:e.upstreamHostname,clientIPAddress:e.remoteIpAddress,clientPort:e.remotePort,tlsMetadata:e.tlsMetadata}}const ud=(e,...t)=>m.sumBy(t,(t=>{const n=Number(e[t]);return!n||n<0?0:n}));function pd(e,t){if(!e)return t.some((({name:e})=>e.startsWith(":")))?"2.0":"1.1";const n=/^(HTTP\/)?([\d\.]+)$/i.exec(e);if(n)return n[2];throw TypeError(`Invalid HTTP version: ${e}`)}function hd(e){if(nd.isEncoding(e.encoding))return nd.from(e.text,e.encoding);throw TypeError("Invalid encoding")}function md(e,t,n){var r,o,s;return{id:e,timingEvents:n,tags:[],statusCode:t.status,statusMessage:t.statusText,headers:id(t.headers),rawHeaders:t.headers.map((e=>[e.name,e.value])),body:{decoded:nd.from(t.content.text||"",t.content.encoding||"utf8"),encodedLength:t.bodySize&&-1!==t.bodySize?t.bodySize:0},rawTrailers:null!==(o=null===(r=t._trailers)||void 0===r?void 0:r.map((e=>[e.name,e.value])))&&void 0!==o?o:[],trailers:id(null!==(s=t._trailers)&&void 0!==s?s:[])}}class gd extends _o{constructor(e){super(),this.failureEvent=e,this.id=p(),this.upstreamHostname=this.failureEvent.hostname,this.remoteIpAddress=this.failureEvent.remoteIpAddress,this.remotePort=this.failureEvent.remotePort,this.failureCause=this.failureEvent.failureCause,this.tags=this.failureEvent.tags,this.timingEvents=this.failureEvent.timingEvents,this.tlsMetadata=this.failureEvent.tlsMetadata,this.searchIndex=[e.hostname,e.remoteIpAddress].filter((e=>!!e)).join("\n")}isTlsFailure(){return!0}}class fd extends _o{constructor(e){super(),this.openEvent=e,this.id=this.openEvent.id,this.remoteIpAddress=this.openEvent.remoteIpAddress,this.remotePort=this.openEvent.remotePort,this.upstreamHostname=this.openEvent.hostname,this.upstreamPort=this.openEvent.upstreamPort,this.tags=this.openEvent.tags,this.timingEvents=this.openEvent.timingEvents,this.open=!0,this.searchIndex=[e.hostname,e.remoteIpAddress].filter((e=>!!e)).join("\n")}isTlsTunnel(){return!0}markClosed(e){this.timingEvents.disconnectTimestamp=e.timingEvents.disconnectTimestamp,this.open=!1}isOpen(){return this.open}}!function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);s>3&&a&&Object.defineProperty(t,n,a)}([w.observable],fd.prototype,"open",void 0);var yd=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const vd=e=>`${e.protocol}://${e.address}:${e.port}`;class bd extends _o{constructor(e){super(),this.connectionEvent=e,this.id=this.connectionEvent.sessionId,this.streams=w.observable.array([],{deep:!1})}isRTCConnection(){return!0}get peerId(){return this.connectionEvent.peerId}get localSessionDescription(){return this.connectionEvent.localSessionDescription}get remoteSessionDescription(){return this.connectionEvent.remoteSessionDescription}get source(){return Wo(this.connectionEvent.metadata.userAgent)}get sourceURL(){if(this.connectionEvent.metadata.sourceURL)try{return new URL(this.connectionEvent.metadata.sourceURL)}catch(e){return}}get clientURL(){return vd(this.connectionEvent.selectedRemoteCandidate)}attachExternalPeer(e,t){this.attachedConnection={externalConnection:e.externalConnection,otherHalf:t}}isOtherHalfOf(e){if(!this.attachedConnection)return!1;const{externalConnection:t}=this.attachedConnection,{externalConnection:n}=e,r=vd(t.selectedLocalCandidate),o=vd(t.selectedRemoteCandidate),s=vd(n.selectedLocalCandidate);return r===vd(n.selectedRemoteCandidate)&&s===o}connectOtherHalf(e){this.attachedConnection.otherHalf=e}get remoteCandidate(){if(!this.attachedConnection)return this.connectionEvent.selectedLocalCandidate;const{externalConnection:e,otherHalf:t}=this.attachedConnection;return t?t.connectionEvent.selectedRemoteCandidate:e.selectedRemoteCandidate}get remoteURL(){return vd(this.remoteCandidate)}addStream(e){this.streams.push(e)}removeStream(e){this.streams.remove(e)}markClosed(e){this.closeData=e}get closeState(){return this.closeData}}yd([w.computed],bd.prototype,"source",null),yd([w.computed],bd.prototype,"sourceURL",null),yd([w.computed],bd.prototype,"clientURL",null),yd([w.observable],bd.prototype,"attachedConnection",void 0),yd([w.action],bd.prototype,"attachExternalPeer",null),yd([w.action],bd.prototype,"connectOtherHalf",null),yd([w.computed],bd.prototype,"remoteCandidate",null),yd([w.computed],bd.prototype,"remoteURL",null),yd([w.action],bd.prototype,"addStream",null),yd([w.action],bd.prototype,"removeStream",null),yd([w.observable],bd.prototype,"closeData",void 0),yd([w.action],bd.prototype,"markClosed",null);var xd=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class wd extends _o{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":data:"+this.channelId,this.messages=[],this.pinned=!1}isRTCDataChannel(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get channelId(){return this.openEvent.channelId}get label(){return this.openEvent.channelLabel}get protocol(){return this.openEvent.channelProtocol}addMessage(e){this.messages.push(new Nn(e,this.messages.length))}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.messages.forEach((e=>e.cleanup())),this.messages.length=0}}xd([w.observable],wd.prototype,"messages",void 0),xd([w.action],wd.prototype,"addMessage",null),xd([w.observable],wd.prototype,"closeData",void 0),xd([w.action],wd.prototype,"markClosed",null),xd([w.observable],wd.prototype,"pinned",void 0);var Ed=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Cd extends _o{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":media:"+this.mid,this.stats=[],this._totalBytesSent=0,this._totalBytesReceived=0,this.pinned=!1}isRTCMediaTrack(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get mid(){return this.openEvent.trackMid}get direction(){return this.openEvent.trackDirection}get type(){return this.openEvent.trackType}addStats(e){const t=this.stats[this.stats.length-1];(null==t?void 0:t.timestamp)<e.eventTimestamp-1500&&Math.round((e.eventTimestamp-t.timestamp)/1e3)-1>0&&this.stats.push(...g().range(t.timestamp+1e3,e.eventTimestamp-500,1e3).map((e=>({timestamp:e,sentDelta:0,receivedDelta:0})))),this.stats.push({timestamp:e.eventTimestamp,sentDelta:e.totalBytesSent-this.totalBytesSent,receivedDelta:e.totalBytesReceived-this.totalBytesReceived}),this._totalBytesSent=e.totalBytesSent,this._totalBytesReceived=e.totalBytesReceived}get totalBytesSent(){return this._totalBytesSent}get totalBytesReceived(){return this._totalBytesReceived}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.stats.length=0}}Ed([w.observable],Cd.prototype,"stats",void 0),Ed([w.action],Cd.prototype,"addStats",null),Ed([w.observable],Cd.prototype,"_totalBytesSent",void 0),Ed([w.observable],Cd.prototype,"_totalBytesReceived",void 0),Ed([w.observable],Cd.prototype,"closeData",void 0),Ed([w.action],Cd.prototype,"markClosed",null),Ed([w.observable],Cd.prototype,"pinned",void 0);var Td=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Sd=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const Pd=["request-initiated","request","response","websocket-request","websocket-accepted","websocket-message-received","websocket-message-sent","websocket-close","abort","tls-client-error","tls-passthrough-opened","tls-passthrough-closed","client-error"],kd=["peer-connected","peer-disconnected","external-peer-attached","data-channel-opened","data-channel-message-sent","data-channel-message-received","data-channel-closed","media-track-opened","media-track-stats","media-track-closed"];class Rd{constructor(e,t,n){this.proxyStore=e,this.apiStore=t,this.rulesStore=n,this.initialized=R((()=>Sd(this,void 0,void 0,(function*(){yield Promise.all([this.proxyStore.initialized,this.apiStore.initialized,this.rulesStore.initialized]),Pd.forEach((e=>{this.proxyStore.onMockttpEvent(e,(t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())}))})),kd.forEach((e=>{this.proxyStore.onMockRTCEvent(e,(t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())}))})),console.log("Events store initialized")})))),this.isPaused=!1,this.eventQueue=[],this.orphanedEvents={},this.isFlushQueued=!1,this.events=w.observable.array([],{deep:!1}),this.updateFromQueuedEvent=e=>{try{switch(e.type){case"request-initiated":return this.addInitiatedRequest(e.event),this.checkForOrphan(e.event.id);case"request":return this.addCompletedRequest(e.event),this.checkForOrphan(e.event.id);case"response":return this.setResponse(e.event);case"websocket-request":return this.addWebSocketRequest(e.event),this.checkForOrphan(e.event.id);case"websocket-accepted":return this.addAcceptedWebSocketResponse(e.event);case"websocket-message-received":case"websocket-message-sent":return this.addWebSocketMessage(e.event);case"websocket-close":return this.markWebSocketClosed(e.event);case"abort":return this.markRequestAborted(e.event);case"tls-passthrough-opened":return this.addTlsTunnel(e.event),this.checkForOrphan(e.event.id);case"tls-passthrough-closed":return this.markTlsTunnelClosed(e.event);case"tls-client-error":return this.addFailedTlsRequest(e.event);case"client-error":return this.addClientError(e.event);case"peer-connected":return this.addRTCPeerConnection(e.event);case"external-peer-attached":return this.attachExternalRTCPeer(e.event);case"peer-disconnected":return this.markRTCPeerDisconnected(e.event);case"data-channel-opened":return this.addRTCDataChannel(e.event);case"data-channel-message-sent":case"data-channel-message-received":return this.addRTCDataChannelMessage(e.event);case"data-channel-closed":return this.markRTCDataChannelClosed(e.event);case"media-track-opened":return this.addRTCMediaTrack(e.event);case"media-track-stats":return this.addRTCMediaTrackStats(e.event);case"media-track-closed":return this.markRTCMediaTrackClosed(e.event)}}catch(e){ye(e)}}}queueEventFlush(){this.isFlushQueued||(this.isFlushQueued=!0,requestAnimationFrame(this.flushQueuedUpdates))}get exchanges(){return this.events.filter((e=>e.isHttp()))}get websockets(){return this.exchanges.filter((e=>e.isWebSocket()))}get rtcConnections(){return this.events.filter((e=>e.isRTCConnection()))}get rtcDataChannels(){return this.events.filter((e=>e.isRTCDataChannel()))}get rtcMediaTracks(){return this.events.filter((e=>e.isRTCMediaTrack()))}get activeSources(){return m(this.exchanges).map((e=>e.request.source)).uniqBy((e=>e.summary)).value()}flushQueuedUpdates(){this.isFlushQueued=!1,this.eventQueue.forEach(this.updateFromQueuedEvent),this.eventQueue=[]}checkForOrphan(e){const t=this.orphanedEvents[e];t&&(delete this.orphanedEvents[e],this.updateFromQueuedEvent(t))}togglePause(){this.isPaused=!this.isPaused}addInitiatedRequest(e){if(-1===m.findIndex(this.events,{id:e.id})){const t=new wl(this.apiStore,e);this.events.push(t)}}getMatchedRule(e){if(!e.matchedRuleId)return!1;const t=ls(this.rulesStore.rules,{id:e.matchedRuleId});if(!t)return!1;if(ns(t))throw new Error("Request event unexpectedly matched rule group");return t}addCompletedRequest(e){const t=m.findIndex(this.events,{id:e.id});let n;t>=0?n=this.events[t]:(n=new wl(this.apiStore,Object.assign({},e)),this.events.push(n)),n.updateFromCompletedRequest(e,this.getMatchedRule(e))}markRequestAborted(e){const t=m.find(this.exchanges,{id:e.id});t?t.markAborted(e):this.orphanedEvents[e.id]={type:"abort",event:e}}setResponse(e){const t=m.find(this.exchanges,{id:e.id});t?t.setResponse(e):this.orphanedEvents[e.id]={type:"response",event:e}}addWebSocketRequest(e){const t=new Cl(this.apiStore,Object.assign({},e));t.updateFromCompletedRequest(e,this.getMatchedRule(e)),this.events.push(t)}addAcceptedWebSocketResponse(e){const t=m.find(this.websockets,{id:e.id});t?(t.setResponse(e),t.setAccepted(e)):this.orphanedEvents[e.id]={type:"websocket-accepted",event:e}}addWebSocketMessage(e){const t=m.find(this.websockets,{id:e.streamId});t?t.addMessage(e):this.orphanedEvents[e.streamId]={type:`websocket-message-${e.direction}`,event:e}}markWebSocketClosed(e){const t=m.find(this.websockets,{id:e.streamId});t?t.markClosed(e):this.orphanedEvents[e.streamId]={type:"websocket-close",event:e}}addTlsTunnel(e){this.events.push(new fd(e))}markTlsTunnelClosed(e){const t=m.find(this.events,{id:e.id});t?t.markClosed(e):this.orphanedEvents[e.id]={type:"tls-passthrough-closed",event:close}}addFailedTlsRequest(e){m.some(this.events,(t=>t.isTlsFailure()&&t.upstreamHostname===e.hostname&&t.remoteIpAddress===e.remoteIpAddress))||this.events.push(new gd(e))}addClientError(e){if("ECONNRESET"===e.errorCode&&!e.request.method&&!e.request.url)return;if("ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"===e.errorCode)return;const t=new wl(this.apiStore,Object.assign(Object.assign({},e.request),{protocol:e.request.protocol||"",method:e.request.method||"",url:e.request.url||`${e.request.protocol||"http"}://`,path:e.request.path||"/",headers:e.request.headers}));"aborted"===e.response?t.markAborted(e.request):t.setResponse(e.response),this.events.push(t)}addRTCPeerConnection(e){this.events.push(new bd(e))}attachExternalRTCPeer(e){const t=this.rtcConnections.find((t=>t.id===e.sessionId)),n=this.rtcConnections.find((t=>t.isOtherHalfOf(e)));t?(t.attachExternalPeer(e,n),n&&n.connectOtherHalf(t)):this.orphanedEvents[e.sessionId]={type:"external-peer-attached",event:e}}markRTCPeerDisconnected(e){const t=this.rtcConnections.find((t=>t.id===e.sessionId));t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"peer-disconnected",event:e}}addRTCDataChannel(e){const t=this.rtcConnections.find((t=>t.id===e.sessionId));if(t){const n=new wd(e,t);this.events.push(n),t.addStream(n)}else this.orphanedEvents[e.sessionId]={type:"data-channel-opened",event:e}}addRTCDataChannelMessage(e){const t=this.rtcDataChannels.find((t=>t.sessionId===e.sessionId&&t.channelId===e.channelId));t?t.addMessage(e):this.orphanedEvents[e.sessionId]={type:`data-channel-message-${e.direction}`,event:e}}markRTCDataChannelClosed(e){const t=this.rtcDataChannels.find((t=>t.sessionId===e.sessionId&&t.channelId===e.channelId));t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"data-channel-closed",event:e}}addRTCMediaTrack(e){const t=this.rtcConnections.find((t=>t.id===e.sessionId));if(t){const n=new Cd(e,t);this.events.push(n),t.addStream(n)}else this.orphanedEvents[e.sessionId]={type:"media-track-opened",event:e}}addRTCMediaTrackStats(e){const t=this.rtcMediaTracks.find((t=>t.sessionId===e.sessionId&&t.mid===e.trackMid));t?t.addStats(e):this.orphanedEvents[e.sessionId]={type:"media-track-stats",event:e}}markRTCMediaTrackClosed(e){const t=this.rtcMediaTracks.find((t=>t.sessionId===e.sessionId&&t.mid===e.trackMid));t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"media-track-closed",event:e}}deleteEvent(e){this.events.remove(e),e.isRTCDataChannel()||e.isRTCMediaTrack()?e.rtcConnection.removeStream(e):e.isRTCConnection()&&[...e.streams].forEach((e=>this.deleteEvent(e))),"cleanup"in e&&e.cleanup()}clearInterceptedData(e){const[t,n]=m.partition(this.events,e?()=>!1:e=>e.pinned);this.events.clear(),n.forEach((e=>{"cleanup"in e&&e.cleanup()})),this.events.push(...t),this.orphanedEvents={},"gc"in window&&window.gc()}loadFromHar(e){return Sd(this,void 0,void 0,(function*(){const{events:t,pinnedIds:n}=yield function(e){return rd(this,void 0,void 0,(function*(){const t=yield td.G(function(e){var t,n,r,o;return(null!==(n=null===(t=null==e?void 0:e.log)||void 0===t?void 0:t.entries)&&void 0!==n?n:[]).forEach((e=>{var t,n,r,o,s,a,i,l,c,d,u,p,h,g,f,y,v,b;if(delete e.serverIPAddress,e.request&&(null!==(t=(d=e.request).headersSize)&&void 0!==t||(d.headersSize=-1),e.request.postData&&(null!==(n=(u=e.request.postData).mimeType)&&void 0!==n||(u.mimeType="application/octet-stream")),e.request.cookies=[]),e.timings&&(null!==(r=(p=e.timings).send)&&void 0!==r||(p.send=-1),null!==(o=(h=e.timings).wait)&&void 0!==o||(h.wait=-1),null!==(s=(g=e.timings).receive)&&void 0!==s||(g.receive=-1)),e.response){if(null!==(a=(f=e.response).redirectURL)&&void 0!==a||(f.redirectURL=""),null!==(i=(y=e.response).headersSize)&&void 0!==i||(y.headersSize=-1),null==e.response.statusText&&(e.response.statusText=Qt(e.response.status)),null===e.response.bodySize){const t=m.find(e.response.headers||[],(({name:e})=>"content-length"===e.toLowerCase()));e.response.bodySize=t?parseInt(t.value,10):-1}e.response.content&&(null!==(l=(v=e.response.content).size)&&void 0!==l||(v.size=-1),null!==(c=(b=e.response.content).mimeType)&&void 0!==c||(b.mimeType="application/octet-stream")),e.response.cookies=[]}e.cache={}})),(null!==(o=null===(r=null==e?void 0:e.log)||void 0===r?void 0:r.pages)&&void 0!==o?o:[]).forEach((e=>{void 0===e.title&&(e.title=e.id),e.pageTimings={}})),e}(e)),n=m.random(1e6)+"-",r=[],o=[];return t.log.entries.forEach(((e,t)=>{var s,a,i;const l=n+t,c="websocket"===e._resourceType,d={startTime:Ke.parse(e.startedDateTime).getTime(),startTimestamp:0,bodyReceivedTimestamp:ud(e.timings,"blocked","dns","connect","send"),headersSentTimestamp:ud(e.timings,"blocked","dns","connect","send","wait")};Object.assign(d,0!==e.response.status?{responseSentTimestamp:e.time}:{abortedTimestamp:e.time},c?{wsAcceptedTimestamp:d.headersSentTimestamp,wsClosedTimestamp:e.time}:{});const u=function(e,t,n){var r,o,s;const a=new URL(t.url);return{id:e,timingEvents:n,tags:[],matchedRuleId:!1,httpVersion:pd(t.httpVersion,t.headers),protocol:t.url.split(":")[0],method:t.method,url:t.url,path:a.pathname,hostname:a.hostname,headers:id(t.headers),rawHeaders:t.headers.map((e=>[e.name,e.value])),body:{decoded:t._content?hd(t._content):(i=t.postData,(null==i?void 0:i.text)?Mt(i.text,"utf8"):(null==i?void 0:i.params)?Mt(at.stringify(m(i.params).groupBy((({name:e})=>e)).mapValues((e=>e.map((e=>e.value||"")))).valueOf())):Mt("")),encodedLength:t.bodySize},rawTrailers:null!==(o=null===(r=t._trailers)||void 0===r?void 0:r.map((e=>[e.name,e.value])))&&void 0!==o?o:[],trailers:id(null!==(s=t._trailers)&&void 0!==s?s:[])};var i}(l,e.request,d);if(r.push({type:c?"websocket-request":"request",event:u}),0!==e.response.status?r.push({type:c&&101===e.response.status?"websocket-accepted":"response",event:md(l,e.response,d)}):r.push({type:"abort",event:u}),c){r.push(...null!==(a=null===(s=e._webSocketMessages)||void 0===s?void 0:s.map((e=>({type:"websocket-message-"+("send"===e.type?"received":"sent"),event:{streamId:u.id,direction:"send"===e.type?"received":"sent",isBinary:2===e.opcode,content:nd.from(e.data,2===e.opcode?"base64":"utf8"),eventTimestamp:1e3*e.time-d.startTime,timingEvents:d,tags:[]}}))))&&void 0!==a?a:[]);const t=e._webSocketClose;t&&"aborted"!==t?r.push({type:"websocket-close",event:{streamId:u.id,closeCode:t.code,closeReason:null!==(i=t.reason)&&void 0!==i?i:"",timingEvents:d,tags:[]}}):r.push({type:"abort",event:u})}e._pinned&&o.push(l)})),t.log._tlsErrors&&r.push(...t.log._tlsErrors.map((e=>{var t;return{type:"tls-client-error",event:{failureCause:e.cause,hostname:e.hostname,remoteIpAddress:e.clientIPAddress,remotePort:e.clientPort,tlsMetadata:null!==(t=e.tlsMetadata)&&void 0!==t?t:{},tags:[],timingEvents:{startTime:Ke.parse(e.startedDateTime).getTime(),connectTimestamp:0,failureTimestamp:e.time}}}}))),{events:r,pinnedIds:o}}))}(e).catch((e=>{throw e.errors?e.errors.forEach((e=>{console.log(e)})):console.log(e),e})),[r,o]=m.partition(t,(({type:e})=>"request"===e||"websocket-request"===e||"tls-client-error"===e));this.eventQueue.push(...m.sortBy(r,(e=>e.event.timingEvents.startTime))),this.eventQueue.push(...o),this.queueEventFlush(),n.length&&requestAnimationFrame((0,w.action)((()=>n.forEach((e=>{this.events.find((t=>t.id===e)).pinned=!0})))))}))}recordSentRequest(e){const t=new wl(this.apiStore,Object.assign({},e));return t.updateFromCompletedRequest(e,!1),this.events.push(t),t}}Td([w.observable],Rd.prototype,"isPaused",void 0),Td([w.computed.struct],Rd.prototype,"exchanges",null),Td([w.computed.struct],Rd.prototype,"websockets",null),Td([w.computed.struct],Rd.prototype,"rtcConnections",null),Td([w.computed.struct],Rd.prototype,"rtcDataChannels",null),Td([w.computed.struct],Rd.prototype,"rtcMediaTracks",null),Td([w.computed.struct],Rd.prototype,"activeSources",null),Td([w.action.bound],Rd.prototype,"flushQueuedUpdates",null),Td([w.action.bound],Rd.prototype,"togglePause",null),Td([w.action],Rd.prototype,"addInitiatedRequest",null),Td([w.action],Rd.prototype,"addCompletedRequest",null),Td([w.action],Rd.prototype,"markRequestAborted",null),Td([w.action],Rd.prototype,"setResponse",null),Td([w.action],Rd.prototype,"addWebSocketRequest",null),Td([w.action],Rd.prototype,"addAcceptedWebSocketResponse",null),Td([w.action],Rd.prototype,"addWebSocketMessage",null),Td([w.action],Rd.prototype,"markWebSocketClosed",null),Td([w.action],Rd.prototype,"addTlsTunnel",null),Td([w.action],Rd.prototype,"markTlsTunnelClosed",null),Td([w.action],Rd.prototype,"addFailedTlsRequest",null),Td([w.action],Rd.prototype,"addClientError",null),Td([w.action],Rd.prototype,"addRTCPeerConnection",null),Td([w.action],Rd.prototype,"attachExternalRTCPeer",null),Td([w.action],Rd.prototype,"markRTCPeerDisconnected",null),Td([w.action],Rd.prototype,"addRTCDataChannel",null),Td([w.action],Rd.prototype,"addRTCDataChannelMessage",null),Td([w.action],Rd.prototype,"markRTCDataChannelClosed",null),Td([w.action],Rd.prototype,"addRTCMediaTrack",null),Td([w.action],Rd.prototype,"addRTCMediaTrackStats",null),Td([w.action],Rd.prototype,"markRTCMediaTrackClosed",null),Td([w.action.bound],Rd.prototype,"deleteEvent",null),Td([w.action.bound],Rd.prototype,"clearInterceptedData",null),Td([w.action],Rd.prototype,"recordSentRequest",null);var Od=n(53371);const Hd='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <link rel=\'shortcut icon\' type=\'image/x-icon\' href=\'/favicon.ico\' />\n  <script type="application/json" id="amiusing">\n    { "amiusing": true }\n  <\/script>\n  <title>\n    Are you using HTTP Toolkit? Yes!\n  </title>\n  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n  <style>\n    html {\n      height: 100%;\n    }\n\n    body {\n      min-height: 100%;\n      box-sizing: border-box;\n      margin: 0;\n      padding: 8px;\n\n      background-color: #fafafa;\n      color: #1e2028;\n\n      font-family: "DM Sans", Arial, sans-serif;\n      letter-spacing: -0.5px;\n      line-height: 1.3;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .content {\n      max-width: 600px;\n    }\n\n    h1 {\n      font-size: 48px;\n      letter-spacing: -2px;\n    }\n\n    p {\n      font-size: 24px;\n    }\n\n    .logo {\n      display: block;\n      margin: 40px auto;\n      height: 200px;\n      width: 200px;\n    }\n\n    @media (prefers-color-scheme: dark) {\n      body {\n        background-color: #32343B;\n        color: #ffffff;\n      }\n    }\n\n    @media not (prefers-color-scheme: dark) {\n      body {\n        background-color: #fafafa;\n        color: #1e2028;\n      }\n    }\n  </style>\n</head>\n<body>\n  <div class="content">\n    <h1>You\'re being intercepted by HTTP Toolkit</h1>\n    <p>\n      This response came from HTTP Toolkit, which is currently intercepting this connection.\n    </p>\n    <p>\n      All requests made by this browser will be recorded by HTTP Toolkit.\n      Take a look at the \'View\' tab there now to see the request & response\n      that brought you this page, or start browsing elsewhere to collect more data.\n    </p>\n  </div>\n  <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet">\n</body>\n</html>';function Ad(e,t){switch(e){case"http":case"ethereum":case"ipfs":return new Ts(t);case"websocket":return new Us(t);case"webrtc":return new Ia}}function qd(e){const t=!!e.body.decoded&&e.body.decoded.length<1e4,n=t&&"json"===e.contentType&&b(e.body.decoded.toString())?[new Vo.yN.JsonBodyMatcher(b(e.body.decoded.toString()))]:t?[new Vo.yN.RawBodyMatcher(e.body.decoded.toString())]:[],r=e.parsedUrl.toString().split("?"),o=r[0],s=r.length>1?[new Vo.yN.QueryMatcher(at.parse(r.slice(1).join("?")))]:[];return[new(vs[e.method]||bs),new Vo.yN.SimplePathMatcher(o),...s,...n]}const $d=e=>({id:"default-group",title:"Default rules",collapsed:!0,items:e}),Id=(e,t)=>[{id:"default-amiusing",type:"http",activated:!0,priority:fi.OVERRIDE,matchers:[new vs.GET,new ws],completionChecker:new Vo.zO.Always,handler:new Es(200,void 0,Hd,{"content-type":"text/html","cache-control":"no-store","httptoolkit-active":"true"})},...te(t.serverVersion,re)?[{id:"default-certificate",type:"http",activated:!0,priority:fi.OVERRIDE,matchers:[new vs.GET,new Vo.yN.SimplePathMatcher("amiusing.httptoolkit.tech/certificate")],completionChecker:new Vo.zO.Always,handler:new Cs(200,void 0,t.certPath,{"content-type":"application/x-x509-ca-cert"})}]:[],{id:"default-wildcard",type:"http",activated:!0,matchers:[new xs],completionChecker:new Vo.zO.Always,handler:new Ts(e)},{id:"default-ws-wildcard",type:"websocket",activated:!0,matchers:[new Ns],completionChecker:new Vo.zO.Always,handler:new Us(e)}],jd=(e,t)=>({id:"root",title:"HTTP Toolkit Rules",isRoot:!0,items:[$d(Id(e,t))]});function Dd(e){if(!e)return e;if(void 0!==e.version)throw new Error(ol`
            Could not migrate rules from unknown format (${e.version}).
            Please restart HTTP Toolkit to update.
        `);if(e.rules){e.id="root",e.title="HTTP Toolkit Rules",e.isRoot=!0;const[t,n]=m.partition(e.rules,(e=>e.id.startsWith("default-")));t.length?e.items=[...n,$d(t)]:e.items=n,delete e.rules}return e.items=e.items.map(Md),e}function Md(e){return ns(e)?e.items=e.items.map(Md):e=function(e){void 0===e.type&&(e.type="http");const{handler:t}=e;return"passthrough"===(null==t?void 0:t.type)&&t.forwardToLocation&&!t.forwarding&&(t.forwarding={targetHost:t.forwardToLocation,updateHostHeader:!0}),e}(e),e}const Bd=(e,t,n)=>{const r=za(e),o=t[r];if(!o)throw new Error(`Can't load unrecognized rule type: ${r}`);return ts(o)?ut.iu(o,e,(()=>{}),n):m.create(o.prototype,e)},Fd=ut.Ie((e=>{const t=m.cloneDeep((0,w.toJS)(e));return t.matchers=t.matchers.map((e=>ts(e)?ut.lK(e):e)),"steps"in t?t.steps=t.steps.map((e=>ts(e)?ut.lK(e):e)):(ts(t.handler)&&(t.handler=ut.lK(t.handler)),"completionChecker"in t&&ts(t.completionChecker)&&(t.completionChecker=ut.lK(t.completionChecker))),t}),((e,t)=>Object.assign(Object.assign({id:e.id,type:e.type,title:e.title,activated:e.activated,priority:"priority"in e?e.priority:void 0,matchers:e.matchers.map((e=>Bd(e,Ja,t.args)))},"steps"in e?{steps:e.steps.map((e=>Bd(e,Qa,t.args)))}:{handler:Bd(e.handler,Qa,t.args)}),{completionChecker:"completionChecker"in e&&Bd(e.completionChecker,Vo.zO.CompletionCheckerLookup,t.args)}))),Nd=ut.Ie((e=>ns(e)?ut.lK(Ld,e):Fd.serializer(e)),((e,t,n,r)=>{if(ns(e)){const n=ut.iu(Ld,e,r,t.args);return n.collapsed=!0,n}return Fd.deserializer(e,r,t,n)})),Ld=ut.gt({id:ut.MY(),title:ut.MY(),items:ut.p_(Nd)}),Ud=ut.gt({id:ut.MY(),title:ut.MY(),version:Ko((()=>{})),isRoot:ut.lq(ut.MY()),items:ut.p_(Nd)}),Wd=e=>ut.lK(Ud,e),zd=(e,t)=>ut.iu(Ud,Dd(e),void 0,t);var _d=n(48287).Buffer,Vd=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Jd=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const Gd=ut.gt({passphrase:ut.MY(),filename:ut.MY(),pfx:ut.Ie(Od.l,Od.D)}),Kd=(e,t)=>zd(Wd(e),{rulesStore:t}),Qd=e=>`docker-tunnel-proxy-${e}`;class Yd{constructor(e,t,n){this.accountStore=e,this.proxyStore=t,this.jumpToExchange=n,this.initialized=R((()=>Jd(this,void 0,void 0,(function*(){yield Promise.all([this.accountStore.initialized,this.proxyStore.initialized]),yield this.loadSettings();const{setRequestRules:e,setWebSocketRules:t,setRTCRules:n,serverVersion:r}=this.proxyStore;(0,w.reaction)((()=>this.activePassthroughOptions),(()=>{this.rules=Kd(this.rules,this),this.draftRules=Kd(this.draftRules,this)})),(0,w.reaction)((()=>this.upstreamProxyType),(e=>{"direct"!==e&&"system"!==e||(this.upstreamProxyHost=void 0)})),yield new Promise((o=>{(0,w.reaction)((()=>m.cloneDeep(ds(this.rules).filter((e=>e.activated&&e.matchers.length)))),(s=>Jd(this,void 0,void 0,(function*(){try{yield Promise.all([e(...s.filter(pi)),...h.satisfies(r,"^1.1.3")?[t(...s.filter(hi))]:[],...h.satisfies(r,pe)?[n(...s.filter(mi).map((({matchers:e,steps:t})=>({matchers:e.slice(1),steps:t}))))]:[]]),o()}catch(e){console.log("Failed to activate stored rules",e,JSON.stringify(s)),ye("Failed to activate configured ruleset"),alert("Configured rules could not be activated, so were reset to default."),this.resetRulesToDefault()}}))),{fireImmediately:!0})})),console.log("Rules store initialized")})))),this.upstreamProxyType="system",this.upstreamProxyHost=void 0,this.upstreamNoProxyHosts=[],this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.additionalCaCertificates=[],this.triggerRequestBreakpoint=e=>this.triggerBreakpoint(e.id,(t=>t.triggerRequestBreakpoint(e))),this.triggerResponseBreakpoint=e=>this.triggerBreakpoint(e.id,(t=>t.triggerResponseBreakpoint(e))),this.triggerBreakpoint=(0,w.flow)((function*(e,t){const n=yield this.jumpToExchange(e);return yield t(n)}))}loadSettings(){var e;return Jd(this,void 0,void 0,(function*(){const{accountStore:t}=this;yield Et({key:"rules-store",store:this,dataTransform:e=>m.omit(e,"rules")});try{const t=JSON.parse(null!==(e=localStorage.getItem("rules-store"))&&void 0!==e?e:"{}");(0,w.runInAction)((()=>{"draftWhitelistedCertificateHosts"in t&&(this.whitelistedCertificateHosts=t.draftWhitelistedCertificateHosts),"draftClientCertificateHostMap"in t&&(this.clientCertificateHostMap=t.draftClientCertificateHostMap)}))}catch(e){ye(e)}t.mightBePaidUser?(yield Et({key:"rules-store",store:this,dataTransform:e=>({rules:Dd(e.rules)}),customArgs:{rulesStore:this}}).catch((e=>{var t,n;console.log("Failed to load last-run rules",e,null===(n=JSON.parse(null!==(t=localStorage.getItem("rules-store"))&&void 0!==t?t:"{}"))||void 0===n?void 0:n.rules),ye(e),alert(`Could not load rules from last run.\n\n${e}`)})),this.rules?(this.resetRuleDrafts(),Id(this,this.proxyStore).forEach((e=>this.ensureRuleExists(e)))):this.resetRulesToDefault()):this.resetRulesToDefault(),this.ensureRuleDoesNotExist("default-forwarding-rule"),K("httpToolkitForwardingDefault").then((0,w.action)((e=>{const[t,n]=e.split("|"),r=((e,t,n)=>({id:"default-forwarding-rule",type:"http",activated:!0,matchers:[new bs,new Vo.yN.HostMatcher(e)],completionChecker:new Vo.zO.Always,handler:new Ss(t,!0,n)}))(t,n,this);this.ensureRuleExists(r)}))),"socks"===this.upstreamProxyType&&(0,w.runInAction)((()=>{this.upstreamProxyType="socks5h"})),(0,w.observe)(t,"accountDataLastUpdated",(()=>{t.isPaidUser||(this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.upstreamProxyType="system",this.upstreamNoProxyHosts=[])}))}))}get activePassthroughOptions(){const e={ignoreHostHttpsErrors:this.whitelistedCertificateHosts,additionalTrustedCAs:this.additionalCaCertificates.map((e=>({cert:e.rawPEM}))),clientCertificateHostMap:m.mapValues(this.clientCertificateHostMap,(e=>({pfx:_d.from(e.pfx),passphrase:e.passphrase}))),proxyConfig:this.proxyConfig,lookupOptions:this.proxyStore.dnsServers.length?{servers:this.proxyStore.dnsServers}:void 0,simulateConnectionErrors:!0};return m.cloneDeep(e)}get effectiveSystemProxyConfig(){const{systemProxyConfig:e}=this.proxyStore;if(!e)return;const{proxyUrl:t}=e;try{const n=new URL(t),{hostname:r}=n;return"localhost"===r||r.startsWith("127.0.0")?"ignored":Object.assign(Object.assign({},e),{additionalTrustedCAs:this.additionalCaCertificates.map((e=>({cert:e.rawPEM})))})}catch(e){return console.log("Could not parse proxy",t),ye(e),"unparseable"}}get userProxyConfig(){if("direct"!==this.upstreamProxyType){if("system"===this.upstreamProxyType){const e=this.effectiveSystemProxyConfig;return!e||m.isString(e)?void 0:e}return{proxyUrl:`${this.upstreamProxyType}://${this.upstreamProxyHost}`,noProxy:this.upstreamNoProxyHosts,additionalTrustedCAs:this.additionalCaCertificates.map((e=>({cert:e.rawPEM})))}}}get proxyConfig(){const{userProxyConfig:e}=this,{httpProxyPort:t}=this.proxyStore;if(this.proxyStore.ruleParameterKeys.includes(Qd(t))){const n={[Vo.hY]:Qd(t)};return e?[n,e]:n}return e}saveRules(){this.rules=this.draftRules,this.resetRuleDrafts()}resetRuleDrafts(){this.draftRules=m.cloneDeep(this.rules)}resetRulesToDefault(){this.rules=jd(this,this.proxyStore),this.resetRuleDrafts()}get areSomeRulesUnsaved(){return!m.isEqualWith(this.draftRules,this.rules,hs)}get areSomeRulesNonDefault(){const e=jd(this,this.proxyStore);return!m.isEqualWith(this.draftRules,e,hs)}resetRule(e){const{draftRules:t,rules:n}=this,r=ss(t,e);if(ns(r))throw new Error("Can't reset single rule group");const o=r.id,s=cs(n,{id:o});if(!s)throw new Error("Can't reset a new rule");const a=ss(n,s),i=os(n,s),l=os(t,e);let c=ls(t,{id:i.id});if(!c){let e=[i];for(;e.length;){const r=os(n,s.slice(0,-e.length)),o=ls(t,{id:r.id});o?(c=e.reduce((({draftParent:e,activeParent:t},n)=>{const r=(0,w.observable)(m.clone(Object.assign(Object.assign({},n),{items:[]}))),o=m.intersectionBy(e.items,t.items,"id"),s=m.intersectionBy(t.items,e.items.concat(n),"id"),a=m.findIndex(s,{id:n.id});if(a>0){const t=o[a-1],n=m.findIndex(e.items,{id:t.id})+1;e.items.splice(n,0,r)}else e.items.unshift(r);return{draftParent:r,activeParent:n}}),{draftParent:o,activeParent:r}).draftParent,e=[]):e.unshift(r)}}const d=m.cloneDeep(a);l.id===c.id?as(t,e,d):(m.remove(l.items,{id:d.id}),c.items.splice(0,0,d),0!==l.items.length||rs(l)||this.deleteDraftItem(cs(this.draftRules,{id:l.id})));const u=c.items,p=i.items,h=m.intersectionBy(u,p,"id"),g=m.intersectionBy(p,u,"id"),f=m.findIndex(g,{id:o});if(m.findIndex(h,{id:o})!==f)if(m.remove(u,{id:o}),m.remove(h,{id:o}),f>0){const e=h[f-1],t=m.findIndex(u,{id:e.id})+1;u.splice(t,0,d)}else u.unshift(d)}saveItem(e){const{draftRules:t,rules:n}=this,r=ss(t,e),o=os(t,e);let s=ls(n,{id:o.id});s||(s=this.saveItem(e.slice(0,-1)));const a=r.id,i=cs(n,{id:a}),l=(0,w.observable)(m.cloneDeep(m.omit(r,"items")));if(ns(r))if(i){const e=ss(n,i);l.items=m.cloneDeep(e.items)}else l.items=[];if(i){const e=os(n,i);if(e===s)as(n,i,l);else{const t=m.last(i);e.items.splice(t,1),s.items.push(l),0!==e.items.length||rs(e)||is(n,cs(n,{id:e.id}))}}else s.items.push(l);const c=m.differenceBy(s.items,o.items,"id"),d=m.intersectionBy(s.items,o.items,"id"),u=m.intersectionBy(o.items,s.items,"id");if(m.findIndex(u,{id:a})===m.findIndex(d,{id:a}))return l;const p=m.sortBy(d,(e=>m.findIndex(o.items,{id:e.id})));return c.forEach((e=>{const t=Math.min(s.items.indexOf(e),s.items.length);p.splice(t,0,e)})),s.items=p,l}addDraftItem(e,t){if(!t)return void this.draftRules.items.unshift(e);const n=os(this.draftRules,t),r=m.last(t);n.items.splice(r,0,e)}deleteDraftItem(e){is(this.draftRules,e)}moveDraftRule(e,t){const n=os(this.draftRules,e),r=os(this.draftRules,t),o=m.last(e),s=m.last(t),[a]=n.items.splice(o,1);r.items.splice(s,0,a),0!==n.items.length||rs(n)||this.deleteDraftItem(cs(this.draftRules,{id:n.id}))}combineDraftRulesAsGroup(e,t){const n=ss(this.draftRules,e),r=os(this.draftRules,t),o=m.last(t),s=r.items[o];r.items[o]={id:p(),title:"New group",items:[s,n]},this.deleteDraftItem(e)}updateGroupTitle(e,t){const n=ls(this.draftRules,{id:e}),r=ls(this.rules,{id:e});n.title=t,r&&(r.title=t)}ensureRuleExists(e){const t=cs(this.rules,{id:e.id}),n=t?ss(this.rules,t):void 0,r=cs(this.draftRules,{id:e.id}),o=r?ss(this.draftRules,r):void 0;if(hs(e,n)&&hs(e,o))return;if(r)return as(this.draftRules,r,e),void this.saveItem(r);let s=cs(this.draftRules,{id:"default-group"});s?ss(this.draftRules,s).items.unshift(e):(this.draftRules.items.push($d([e])),s=[this.draftRules.items.length-1]),this.saveItem(s.concat(0))}ensureRuleDoesNotExist(e){const t=cs(this.rules,{id:e});t&&is(this.rules,t);const n=cs(this.draftRules,{id:e});n&&is(this.draftRules,n)}loadSavedRules(e){this.rules=zd(e,{rulesStore:this}),this.resetRuleDrafts()}}Vd([w.computed.struct],Yd.prototype,"activePassthroughOptions",null),Vd([wt,w.observable],Yd.prototype,"upstreamProxyType",void 0),Vd([wt,w.observable],Yd.prototype,"upstreamProxyHost",void 0),Vd([wt("list"),w.observable],Yd.prototype,"upstreamNoProxyHosts",void 0),Vd([w.computed],Yd.prototype,"effectiveSystemProxyConfig",null),Vd([w.computed.struct],Yd.prototype,"userProxyConfig",null),Vd([w.computed.struct],Yd.prototype,"proxyConfig",null),Vd([wt("list"),w.observable],Yd.prototype,"whitelistedCertificateHosts",void 0),Vd([wt("map",Gd),w.observable],Yd.prototype,"clientCertificateHostMap",void 0),Vd([wt("list"),w.observable],Yd.prototype,"additionalCaCertificates",void 0),Vd([wt("object",Ud),w.observable],Yd.prototype,"rules",void 0),Vd([w.observable],Yd.prototype,"draftRules",void 0),Vd([w.action.bound],Yd.prototype,"saveRules",null),Vd([w.action.bound],Yd.prototype,"resetRuleDrafts",null),Vd([w.action.bound],Yd.prototype,"resetRulesToDefault",null),Vd([w.computed],Yd.prototype,"areSomeRulesUnsaved",null),Vd([w.computed],Yd.prototype,"areSomeRulesNonDefault",null),Vd([w.action.bound],Yd.prototype,"resetRule",null),Vd([w.action.bound],Yd.prototype,"saveItem",null),Vd([w.action.bound],Yd.prototype,"addDraftItem",null),Vd([w.action.bound],Yd.prototype,"deleteDraftItem",null),Vd([w.action.bound],Yd.prototype,"moveDraftRule",null),Vd([w.action.bound],Yd.prototype,"combineDraftRulesAsGroup",null),Vd([w.action.bound],Yd.prototype,"updateGroupTitle",null),Vd([w.action.bound],Yd.prototype,"ensureRuleExists",null),Vd([w.action.bound],Yd.prototype,"ensureRuleDoesNotExist",null),Vd([w.action.bound],Yd.prototype,"loadSavedRules",null);var Xd=n(6289),Zd=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function eu(e){return e&&!!e.$$typeof}const tu=(0,w.observable)({height:window.innerHeight,width:window.innerWidth});window.addEventListener("resize",(0,w.action)((()=>{tu.height=window.innerHeight,tu.width=window.innerWidth})));const nu=navigator.platform.startsWith("Mac")?"⌘":"Ctrl";function ru(e){return navigator.platform.startsWith("Mac")?e.metaKey:e.ctrlKey}const ou=e=>{if(!e)return!1;const t=e,n=t.tagName;return t.isContentEditable||"TEXTAREA"===n||"INPUT"===n||"SELECT"===n},su=(e,t,n)=>(0,Xd.v)(e,t,{filter:()=>!0},n);function au(e,t,n){const r=document.createElement("a"),o=new Blob([n],{type:t}),s=window.URL.createObjectURL(o);r.setAttribute("href",s),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout((()=>window.URL.revokeObjectURL(s)),1e4)}function iu(e="arraybuffer",t=[]){var n;if("path"===e&&!X.value)try{const e=window.prompt("Path selection can only be used from Electron. Please enter a path manually:");return Promise.resolve(e)}catch(e){if(!(null===(n=null==e?void 0:e.message)||void 0===n?void 0:n.includes("prompt() is and will not be supported")))return Promise.reject(e);console.warn("Unexpected Electron prompt() error")}const r=document.createElement("input");r.setAttribute("type","file"),t.length>0&&r.setAttribute("accept",t.join(","));const o=T();return r.addEventListener("change",(()=>{if(!r.files||!r.files.length)return o.resolve(null);const t=r.files[0];if("path"===e)o.resolve(t.path);else{const n=new FileReader;n.addEventListener("load",(()=>{o.resolve(n.result)})),n.addEventListener("error",(e=>{o.reject(e)})),"text"===e?n.readAsText(t):n.readAsArrayBuffer(t)}})),r.click(),Promise.race([o.promise,C(6e5)]).catch((()=>{})).then((()=>r.remove())),o.promise}function lu(e){return Zd(this,void 0,void 0,(function*(){if(navigator.clipboard)try{return void(yield navigator.clipboard.writeText(e))}catch(e){console.warn("Copy to clipboard with navigator.clipboard failed",e)}const t=document.createElement("textarea");try{t.value=e,t.style.position="absolute",t.style.left="-9999px",document.body.prepend(t),t.select(),document.execCommand("copy")}catch(e){throw console.warn("Copy to clipboard fallback failed",e),e}finally{t.remove()}}))}function cu(e){e.target===e.currentTarget&&"Enter"===e.key&&e.currentTarget.dispatchEvent(new MouseEvent("click",{bubbles:!0}))}const du=e=>t=>{t.stopPropagation(),e(t)},uu=(e,t)=>n=>{const r=n.value;return!r||e(r)?n.setCustomValidity(""):n.setCustomValidity(t),n.reportValidity(),n.validity.valid};const pu=Le((e=>ve.createElement(Ro,{className:e.className,icon:["fas",e.collapsed?"chevron-down":"chevron-up"],onClick:e.onClick})))`
    cursor: pointer;
    user-select: none;

    padding: 4px 10px;

    ${e=>"right"===e.headerAlignment?"margin: 0 -10px 0 -3px;":"margin: 0 -3px 0 -10px;"}

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,hu=Le.section.attrs((e=>{var t;return{onClick:e.disabled?void 0:e.onClick,onKeyDown:e.disabled?void 0:e.onKeyDown,tabIndex:e.disabled?void 0:e.tabIndex,headerAlignment:null!==(t=e.headerAlignment)&&void 0!==t?t:"right"}}))`
    box-sizing: border-box;

    ${e=>e.disabled&&"\n        opacity: 0.5;\n    "}

    ${e=>!e.disabled&&e.onClick&&Ue`
        cursor: pointer;

        &:hover {
            box-shadow: 0 2px 20px 0 rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
        }

        &:active {
            box-shadow: unset;
        }
    `}

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    position: relative;

    > header h1, > h1 {
        font-size: ${e=>e.theme.headingSize};
        font-weight: bold;
    }

    > header {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ${e=>"left"===e.headerAlignment&&"\n            flex-direction: row-reverse;\n        "}

        gap: 8px;
    }
`,mu=Le(hu)`
    padding: 15px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 15px;
    }
`,gu=Le(hu)`
    padding: 20px;
    margin-bottom: 20px;

    > header, > h1 {
        text-transform: uppercase;
        text-align: ${e=>e.headerAlignment};
        color: ${e=>e.theme.containerWatermark};

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`,fu=Le(gu)`
    padding: 30px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 30px;
    }
`;let yu=class extends ve.Component{constructor(){super(...arguments),this.cardRef=ve.createRef(),this.toggleCollapse=()=>{this.props.onCollapseToggled&&(requestAnimationFrame((()=>{this.cardRef.current&&this.cardRef.current.scrollIntoView({block:"nearest",behavior:"smooth"})})),this.props.onCollapseToggled())},this.onKeyDown=e=>{e.target===this.cardRef.current&&"Enter"===e.key&&this.toggleCollapse()}}render(){var e,t;const n=!!this.props.onCollapseToggled;return ve.createElement(vu,{className:this.props.className,collapsed:this.props.collapsed,expanded:null!==(e=this.props.expanded)&&void 0!==e&&e,direction:this.props.direction,headerAlignment:null!==(t=this.props.headerAlignment)&&void 0!==t?t:"right","aria-expanded":n?!this.props.collapsed:void 0,tabIndex:n?0:void 0,ref:this.cardRef,onKeyDown:this.onKeyDown,"aria-label":this.props.ariaLabel},this.renderChildren())}renderChildren(){const{children:e,collapsed:t,headerAlignment:n}=this.props,r=!!this.props.onCollapseToggled;return ve.Children.map(e,((e,o)=>{if(0!==o)return t?null:e;if(!r)return e;if("header"!==e.type)throw new Error(`First child of collapsible card must be a header but was ${"string"==typeof e.type?e.type:e.type.name}`);return ve.cloneElement(e,{},ve.Children.toArray(e.props.children).concat(ve.createElement(pu,{key:"collapse-icon",collapsed:t,onClick:this.toggleCollapse,headerAlignment:null!=n?n:"right"})))}))}};yu=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([xe.PA],yu);const vu=Le(gu)`
    display: flex;
    flex-direction: column;

    transition: margin-bottom 0.1s;

    ${e=>e.collapsed&&Ue`
        :not(:last-child) {
            margin-bottom: -16px;
        }
    `}

    ${e=>{return e.expanded?Ue`
            /* Override the Send container setting this to 'none', which hides non-expanded parts: */
            display: flex !important;

            height: 100%;
            width: 100%;
            border-radius: 0;
            margin: 0;

            flex-shrink: 1;
            min-height: 0;

            ${"starting"===e.expanded?"\n                    padding-top: 40px;\n                    padding-bottom: 40px;\n                ":"transition: padding 0.1s;"}
        `:"right"===(t=e.direction)?Ue`
        padding-right: 15px;
        border-right: solid 5px ${e=>e.theme.containerBorder};
    `:"left"===t?Ue`
        padding-left: 15px;
        border-left: solid 5px ${e=>e.theme.containerBorder};
    `:"";var t}}

    &:focus {
        ${pu} {
            color: ${e=>e.theme.popColor};
        }
    }

    &:focus-within {
        header h1 {
            color: ${e=>e.theme.popColor};
        }

        outline: none;
        border-color: ${e=>e.theme.popColor};
    }
`,bu=Le((e=>ve.createElement("h1",{className:e.className,onClick:e.onCollapseToggled},e.children)))`
    cursor: pointer;
    user-select: none;
`,xu=Ue`
    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
        &:hover {
            background-image: linear-gradient(transparent, rgba(0,0,0,.1) 40%, rgba(0,0,0,.2));
        }

        &:active {
            background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1) 40%, transparent);
        }

        &:focus {
            outline-offset: -1px;
        }
    }
`,wu=Le.button.attrs((()=>({type:"button"})))`
    /* Reset styles that get broken because <button> overrides them: */
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
    }
`,Eu=wu.withComponent("a"),Cu=Ue`
    -webkit-appearance: none;
    cursor: pointer;
    padding: 15px 36px;
    border-radius: 4px;
    border: none;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};

    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: inherit;
    line-height: normal;

    ${xu}
`,Tu=Le.button`
    ${Cu}

    /*
     * Need both to ensure link button colours have higher
     * specificity than the a:visited default.
     */
    &, &:visited {
        color: ${e=>e.theme.primaryInputColor};
    }

    &[disabled] {
        background-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        background-color: ${e=>e.theme.primaryInputBackground};
    }
`;Tu.defaultProps={type:"button"};const Su=Tu.withComponent("a"),Pu=Le.button.attrs((()=>({type:"button"})))`
    ${Cu}

    background-color: transparent;

    &, &:visited {
        color: ${e=>e.theme.secondaryInputColor};
    }

    border-width: 2px;
    border-style: solid;

    &[disabled] {
        color: ${e=>e.theme.containerWatermark};
        border-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        border-color: ${e=>e.theme.secondaryInputBorder};
    }
`,ku=Ue`
    border-color: ${e=>e.theme.warningColor};
    background-color: ${e=>e.theme.warningBackground};
    color: ${e=>e.theme.mainColor};

    &:hover:not(:disabled) {
        border-color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.warningBackground};
    }

    &::placeholder {
        color: ${e=>e.theme.inputWarningPlaceholder};
    }
`,Ru=Le.input.attrs((e=>({type:e.type||"text"})))`
    font-size: ${e=>e.theme.textInputFontSize};
    padding: 5px 10px;
    border-radius: 4px;
    border: solid 1px ${e=>e.theme.inputBorder};

    min-width: 20px; /* Without this, editable headers especially refuse to shrink */

    background-color: ${e=>e.theme.inputBackground};
    &:hover:not(:disabled) {
        background-color: ${e=>e.theme.inputHoverBackground};
    }

    &:focus {
        outline-offset: -1px;
    }

    color: ${e=>e.theme.inputColor};

    &:disabled {
        opacity: 0.6;
    }

    &::placeholder {
        color: ${e=>e.theme.inputPlaceholderColor};
    }

    &:invalid {
        ${ku}
    }

    &:read-only {
        cursor: default;
        outline: none;
    }

    ${e=>e.invalid&&ku}
`,Ou=Le.select`
    ${xu}

    font-size: ${e=>e.theme.headingSize};
    font-family: ${e=>e.theme.fontFamily};

    width: 100%;
    border-radius: 4px;
`,Hu=Ue`
    display: inline-block;
    border-radius: 4px;
    padding: 5px 8px 3px;

    text-align: center;
    text-transform: none;
    font-weight: bold;
    word-spacing: 3px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${e=>function(e,t,n){const r=.35+(Ee.bJ(e,t)-1)/20*(1-n)*.65;return Ee.jh(r,e,t)}(e.color||e.theme.pillDefaultColor,e.theme.mainColor,e.theme.pillContrast)};

    background-color: ${e=>{return t=e.color||e.theme.pillDefaultColor,n=e.theme.mainBackground,Ee.jh(.3,t,n);var t,n}};
`,Au=Le.span`
    ${Hu}
`,qu=Le(wu)`
    ${Hu}
    ${xu}

    line-height: 1;

    &[disabled] {
        opacity: 0.5;
    }
`,$u=Le(Au.withComponent("select"))`
    text-align: left;
    border: none;

    height: 24px;
    padding: 0 4px 0 8px;

    font-size: ${e=>e.theme.textSize};
    font-family: ${e=>e.theme.fontFamily};

    ${xu}

    * {
        background-color: ${e=>{return t=e.color||e.theme.pillDefaultColor,n=e.theme,Ee.jh(.3,t,n.mainBackground);var t,n}};
    }
`,Iu=e=>{const t=e.keyFormatter||(e=>e.toString()),n=e.nameFormatter||(e=>e.toString());return ve.createElement($u,{onChange:t=>e.onChange(t.target.value),value:t(e.value)},"options"in e?e.options.map((e=>ve.createElement("option",{key:t(e),value:t(e)},n(e)))):m.map(e.optGroups,((e,r)=>ve.createElement("optgroup",{key:r,label:r},e.map((e=>ve.createElement("option",{key:t(e),value:t(e)},n(e))))))))},ju=Le(Ro).attrs((e=>({icon:["fas","times"],size:"2x",tabIndex:0,onClick:e.onClose,onKeyPress:cu})))`
    position: absolute;
    z-index: 1;
    cursor: pointer;

    color: ${e=>e.theme.mainColor};

    &:focus-visible {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    top: ${e=>e.top||"10px"};
    right: ${e=>e.right||"15px"};

    &:hover {
        opacity: 0.6;
    }
`,Du=Le(Ro).attrs((()=>({icon:["fas","external-link-alt"]})))`
    opacity: 0.5;
    margin-left: 5px;

    &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`,Mu=Le.a`
    &[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Bu=e=>e.href?ve.createElement(Mu,Object.assign({},e,{target:"_blank",rel:"noreferrer noopener"}),e.children?ve.createElement(ve.Fragment,null,e.children," "):null,ve.createElement(Du,null)):null;var Fu=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Nu=Le.div`
    z-index: 0;

    position: absolute;
    bottom: -10px;
    right: -10px;
    z-index: 0;
    opacity: 0.3;

    > svg {
        &:not(:first-child) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`,Lu=Le(mu)`
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${e=>{if(!e.expanded||!e.uiConfig)return`order: ${e.index};`;const t=Math.min(e.uiConfig.columnWidth,e.gridWidth),n=e.uiConfig.rowHeight;return`\n            order: ${Math.max(-1,e.index-t)};\n            grid-row: span ${n};\n            grid-column: span ${t};\n        `}}

    user-select: none;

    > :not(${Nu}) {
        z-index: 1;
    }

    > h1:not(:last-child) {
        margin-bottom: 10px; /* Override LittleCard default */
    }

    > p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;

        &:not(:first-of-type) {
            margin-top: 10px;
        }
    }

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,Uu=Le.h1`
    ${e=>e.expanded?"margin-right: 20px;":""}
`,Wu=Le.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0,0,0,0.2);
    box-shadow: inset 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    display: flex;
    align-items: center;
    justify-content: center;
`,zu=Le(Au)`
    white-space: normal; /* Useful for layout in tiny screens, e.g. the 'proxy port' badge */

    margin-top: auto;
`;let _u=class extends ve.Component{constructor(e){super(e),this.expanded=!1,this.cardRef=ve.createRef(),this.onActivationStarted=(e={})=>{st({category:"Interceptors",action:"Activated",value:e.idSuffix?`${this.props.interceptor.id}-${e.idSuffix}`:this.props.interceptor.id})},this.activateInterceptor=(e={})=>{const{interceptor:t,interceptorStore:n}=this.props;return n.activateInterceptor(t.id,e)},this.onActivationSuccessful=(e={})=>{st({category:"Interceptors",action:"Successfully Activated",value:e.idSuffix?`${this.props.interceptor.id}-${e.idSuffix}`:this.props.interceptor.id}),!1!==e.showRequests&&this.props.showRequests()}}render(){const{expanded:e,onActivationStarted:t,activateInterceptor:n,onActivationSuccessful:r}=this,{interceptor:o,index:s}=this.props,a=!o.isActivable,{uiConfig:i}=o,l=null==i?void 0:i.configComponent,c=m.isArray(o.iconProps)?o.iconProps:[o.iconProps],d=tu.width>=Se?4:3,u=!!l&&!a;return ve.createElement(Lu,{ref:this.cardRef,index:s,expanded:e,uiConfig:i,gridWidth:d,role:this.expanded?"section":"button","aria-expanded":u?this.expanded:void 0,disabled:a,onKeyDown:cu,onClick:this.expanded?void 0:this.onClick,tabIndex:a||this.expanded?void 0:0},ve.createElement(Nu,null,c.map(((e,t)=>ve.createElement(Ro,Object.assign({key:t,size:"8x"},e))))),ve.createElement(Uu,{expanded:e},o.name),l&&e?ve.createElement(ve.Fragment,null,ve.createElement(ju,{title:"Close this interceptor",onClose:this.onClose}),ve.createElement(l,{interceptor:o,activateInterceptor:n,reportStarted:t,reportSuccess:r,closeSelf:this.onClose})):ve.createElement(ve.Fragment,null,o.description.map(((e,t)=>ve.createElement("p",{key:t},e))),function(e){var t,n;if(null===(t=e.uiConfig)||void 0===t?void 0:t.customPill){const t=null===(n=e.uiConfig)||void 0===n?void 0:n.customPill;return ve.createElement(t,null)}return e.isActive?ve.createElement(zu,{color:"#4caf7d"},"Activated"):e.isActivable?e.experimental?ve.createElement(zu,{color:Pe},"Experimental"):null:e.isSupported?ve.createElement(zu,null,"Not available",e.notAvailableHelpUrl?ve.createElement(Bu,{href:e.notAvailableHelpUrl}):null):ve.createElement(zu,{color:Re},"Coming soon")}(o),o.inProgress&&ve.createElement(Wu,null,ve.createElement(Ro,{icon:["fac","spinner-arc"],size:"4x",spin:!0}))))}onClick(){const{onActivationStarted:e,activateInterceptor:t,onActivationSuccessful:n}=this,{interceptor:r}=this.props;r.inProgress||(r.isActivable?r.uiConfig?(this.expanded=!0,requestAnimationFrame((()=>{var e;null===(e=this.cardRef.current)||void 0===e||e.scrollIntoView({block:"nearest",behavior:"smooth"})}))):r.customActivation?(e(),r.customActivation(r,this.activateInterceptor,e,n).catch((e=>ye(e)))):(e(),t(r.activationOptions).then((()=>n())).catch((e=>ye(e)))):e())}onClose(){this.expanded=!1}};Fu([w.observable],_u.prototype,"expanded",void 0),Fu([w.action.bound],_u.prototype,"onClick",null),Fu([w.action.bound],_u.prototype,"onClose",null),_u=Fu([(0,xe.WQ)("interceptorStore"),xe.PA],_u);const Vu=Le.h2`
    text-transform: uppercase;
    font-family: ${e=>e.theme.titleTextFamily};
    opacity: ${e=>e.theme.lowlightTextOpacity};

    display: inline-block;
    margin-right: 5px;
`,Ju=Le.div`
    display: inline-block;
`,Gu=Le(Vu)`
    padding: 3px 0 0;
    margin: 0 0 5px 0;
    min-height: 26px;
    display: block;
    box-sizing: border-box;
`,Ku=Le.div`
    padding: 3px 0 11px;
    width: 100%;

    &:last-child {
        padding-bottom: 0;
    }

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    line-height: 1.1;
`,Qu=Le(Ku)`
    display: inline;
`,Yu=Le.span`
    font-family: ${e=>e.theme.monoFontFamily};
    font-size: 90%;
    user-select: all;
    font-weight: bold;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
`,Xu=Le.div`
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    display: inline-block;
`,Zu=e=>ve.createElement(ep,Object.assign({},m.omit(e,"htmlContent"),{dangerouslySetInnerHTML:e.htmlContent})),ep=Le.div`
    line-height: 1.3;

    p, li, ul, ol, table, h1, h2, h3, h4, h5, h6, pre {
        margin-bottom: 10px;
    }

    p::first-letter,
    li::first-letter,
    h1::first-letter,
    h2::first-letter,
    h3::first-letter,
    h4::first-letter,
    h5::first-letter,
    h6::first-letter {
        text-transform: capitalize;
    }

    ol, ul {
        padding-left: 20px;
    }

    ol {
        list-style: decimal;
    }

    ul {
        list-style: circle;
    }

    table {
        border-collapse: unset;
        border-spacing: 5px;
        margin-left: -5px;
    }

    th {
        min-width: 80px;
    }

    code {
        word-break: break-all; /* Fallback for anybody without break-word */
        word-break: break-word;
        font-family: ${e=>e.theme.monoFontFamily};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        margin-bottom: 10px;
    }

    pre {
        white-space: pre-wrap;
        display: block;
        border-left: 3px solid ${e=>e.theme.containerWatermark};
        padding-left: 8px;
    }

    img {
        max-width: 100%;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }

    :last-child :last-child {
        margin-bottom: 0;
    }
`,tp=e=>e.content?ve.createElement(Zu,{htmlContent:ki(e.content.replace(/:suggestion:/g,Ho).replace(/:warning:/g,qo),{linkify:e.linkify})}):null,np=Le.div`
    display: flex;
    flex-direction: row;
    user-select: text;
    margin-top: 5px;
`,rp=Le.div`
    flex: 1 1 0;

    &:not(:last-child) {
        margin-right: 40px;
    }

    > h2 {
        font-size: ${e=>e.theme.headingSize};
        margin-bottom: 10px;
    }

    > ol {
        list-style: decimal;

        > li {
            margin-left: 20px;
            margin-bottom: 10px;
        }
    }

    > p {
        line-height: 1.3;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    strong {
        font-weight: bold;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,op=Le.span`
    white-space: nowrap;
`,sp=(0,xe.WQ)("proxyStore")((0,xe.PA)((e=>ve.createElement(zu,{color:"#4caf7d"},"Proxy port: ",e.proxyStore.httpProxyPort)))),ap=Le((e=>ve.createElement(qu,{className:e.className,onClick:()=>au("http-toolkit-ca-certificate.crt","application/x-x509-ca-cert",e.certContent)},ve.createElement(Ro,{icon:["fas","download"]})," Export CA certificate")))`
    margin: 0 0 10px 0;
`,ip={rowHeight:1,columnWidth:4,configComponent:(0,xe.WQ)("proxyStore")((e=>{ve.useEffect((()=>e.reportStarted()),[]);const{httpProxyPort:t,certPath:n,certContent:r}=e.proxyStore;return ve.createElement(xe.nu,null,(()=>ve.createElement(np,null,ve.createElement(rp,null,ve.createElement("p",null,"To intercept traffic you need to:"),ve.createElement("ol",null,ve.createElement("li",null,ve.createElement("strong",null,"send your traffic via the HTTP Toolkit proxy")),ve.createElement("li",null,ve.createElement("strong",null,"trust the certificate authority")," (if using HTTPS) ")),ve.createElement("p",null,"The steps to do this manually depend on the client, but all the details you'll need are shown here."),ve.createElement("p",null,"Want your client to be supported automatically? ",ve.createElement(op,null,ve.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"Send some feedback")),".")),ve.createElement(rp,null,ve.createElement("h2",null,"1. Send traffic via HTTP Toolkit"),ve.createElement("p",null,"To intercept an HTTP client on this machine, configure it to send traffic via"," ",ve.createElement(Yu,null,"http://localhost:",t),"."),ve.createElement("p",null,"Most tools can be configured to do so by using the above address as an HTTP or HTTPS proxy."),ve.createElement("p",null,"In other cases, it's also possible to forcibly reroute traffic using networking tools like iptables."),ve.createElement("p",null,"Remote clients (e.g. phones) will need to use the IP address of this machine, not localhost.")),ve.createElement(rp,null,ve.createElement("h2",null,"2. Trust the certificate authority"),ve.createElement("p",null,ve.createElement("em",null,"Only required to intercept traffic that uses HTTPS")),ve.createElement("p",null,"HTTP Toolkit has generated a certificate authority (CA) on your machine. All intercepted HTTPS uses certificates from this CA."),r?ve.createElement(ap,{certContent:r}):ve.createElement("p",null,"The certificate is stored on your machine at ",ve.createElement(Yu,null,n),"."),ve.createElement("p",null,"To intercept HTTPS traffic you need to configure your HTTP client to trust this certificate as a certificate authority, or to temporarily disable certificate checks entirely.")))))})),customPill:sp},lp=Le((e=>{var t;return ve.createElement(wu,{className:e.className,title:e.title,tabIndex:null!==(t=e.tabIndex)&&void 0!==t?t:e.disabled?-1:0,disabled:e.disabled,onClick:e.onClick,onKeyDown:e.onKeyDown},Array.isArray(e.icon)?ve.createElement(Ro,{icon:e.icon,size:e.iconSize,fixedWidth:!!e.fixedWidth}):ve.createElement(To,{icon:e.icon,size:e.iconSize||"1.25em"}))}))`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:disabled {
        opacity: 0.5;
    }

    &:not([disabled]) {
        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }

    .phosphor-icon {
        margin: 0 -3px; /* Fix alignment with FontAwesome in rows e.g. View right footer */
    }
`,cp=Le((e=>ve.createElement(Eu,{className:e.className,title:e.title,href:e.href,target:e.target,rel:e.rel},ve.createElement(Ro,{icon:e.icon,fixedWidth:!!e.fixedWidth}))))`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`,dp=Le(lp)`
    color: ${e=>e.theme.mainColor};

    &:hover, &:focus {
        color: ${e=>e.theme.popColor};
        outline: none;
    }

    &:active {
        color: ${e=>e.theme.mainColor};
    }
`,up=()=>{const[e,t]=ve.useState(),[n,r]=ve.useState();return[n,()=>{r(!0),e&&(clearTimeout(e),t(void 0)),t(setTimeout((()=>r(void 0)),2e3))}]},pp=e=>{const[t,n]=up();return ve.createElement(dp,{title:"Copy this to your clipboard",className:e.className,icon:t?["fas","check"]:["far","copy"],fixedWidth:!0,onClick:()=>{lu(e.content),n(),e.onClick()}})},hp=e=>{const[t,n]=up();return ve.createElement(qu,{tabIndex:0,onClick:()=>{lu(e.content),n()}},ve.createElement(Ro,{icon:t?["fas","check"]:["far","copy"],fixedWidth:!0}),e.children)};var mp=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const gp=Le((e=>ve.createElement("div",{className:e.className},ve.createElement("code",{onCopy:e.onCopy},e.children),ve.createElement(pp,{onClick:e.onCopy,content:e.children}))))`
    display: inline-block;
    margin-top: 20px;

    ${e=>e.disabled&&Ue`
        opacity: 0.5;
        pointer-events: none;
    `}

    background-color: ${e=>e.theme.inputBackground};
    &:hover {
        background-color: ${e=>e.theme.inputHoverBackground};
    }
    border: solid 1px ${e=>e.theme.inputBorder};
    color: ${e=>e.theme.inputColor};

    padding: 10px 75px 10px 20px;
    border-radius: 4px;

    > code {
        font-family: ${e=>e.theme.monoFontFamily};
        user-select: all;
    }

    position: relative;
    > button {
        padding: 10px 20px 10px 20px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;

        border-radius: 0 4px 4px 0;
        border-left: solid 1px ${e=>e.theme.containerBorder};

        background-color: ${e=>e.theme.mainLowlightBackground};

        &:active {
            background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
        }
    }

    > svg {
        margin: 1px 0 2px;
    }
`,fp=Le.div`
    user-select: text;

    > select {
        display: block;
        margin-top: 20px;
        margin-left: 0;
    }
`,yp="...";let vp=class extends ve.Component{constructor(){super(...arguments),this.reportedActivated=!1,this.shellCommands={[yp]:{command:'eval "$(curl -sS localhost:..../setup)"',description:""}},this.selectedShell=yp}get interceptCommand(){return this.shellCommands[this.selectedShell].command}get shellDescription(){return this.shellCommands[this.selectedShell].description}get shouldShowDropdown(){const e="fulfilled"!==Z.state||te(Z.value,"^1.8.0"),t=this.selectedShell===yp||Object.keys(this.shellCommands).length>1;return e&&t}selectShell(e){this.selectedShell=e,this.props.uiStore.preferredShell=e}reportActivated(){this.reportedActivated||(this.reportedActivated=!0,this.props.reportStarted())}componentDidMount(){return e=this,t=void 0,r=function*(){const{port:e,commands:t}=yield this.props.activateInterceptor();if((0,w.runInAction)((()=>{this.shellCommands=t||{Bash:{command:`eval "$(curl -sS localhost:${e}/setup)"`,description:"Bash-compatible"}};const{preferredShell:n}=this.props.uiStore;n&&n in this.shellCommands&&(this.selectedShell=n),this.shellCommands[this.selectedShell]||(this.selectedShell=Object.keys(this.shellCommands)[0])})),this.props.interceptor.isActive)this.reportedActivated=!0;else{const e=setInterval((()=>{this.props.interceptorStore.refreshInterceptors()}),2e3);(0,xe.bH)(this,(()=>clearInterval(e))),(0,w.when)((()=>this.props.interceptor.isActive),(()=>{this.reportActivated(),this.props.reportSuccess(),clearInterval(e)}))}},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}render(){return ve.createElement(fp,null,ve.createElement("p",null,"Run the command below in any ",this.shellDescription," terminal on this machine to intercept all new processes & containers launched there."),this.shouldShowDropdown?ve.createElement(Iu,{onChange:this.selectShell,value:this.selectedShell,options:Object.keys(this.shellCommands)}):null,ve.createElement(gp,{onCopy:this.reportActivated,disabled:this.selectedShell===yp},this.interceptCommand))}};mp([w.observable],vp.prototype,"reportedActivated",void 0),mp([w.observable],vp.prototype,"shellCommands",void 0),mp([w.observable],vp.prototype,"selectedShell",void 0),mp([w.computed],vp.prototype,"interceptCommand",null),mp([w.computed],vp.prototype,"shellDescription",null),mp([w.computed],vp.prototype,"shouldShowDropdown",null),mp([w.action.bound],vp.prototype,"selectShell",null),mp([w.action.bound],vp.prototype,"reportActivated",null),vp=mp([(0,xe.WQ)("interceptorStore"),(0,xe.WQ)("accountStore"),(0,xe.WQ)("uiStore"),xe.PA],vp);const bp={columnWidth:2,rowHeight:1,configComponent:vp};var xp=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const wp=Le.div`
    user-select: text;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`,Ep=Le.div`
    flex: 1 1 100%;
`,Cp=Le.hr`
    width: 100%;
    margin: 0 0 10px 0;
    border-top: solid 1px ${e=>e.theme.containerBorder};
`,Tp=Le(Tu)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    flex-shrink: 0;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Sp=Le.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    flex-shrink: 0;
`,Pp=Le(Pu)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    word-break: break-word;
`,kp=Le(wu)`
    &:hover {
        opacity: 0.6;
    }
`,Rp=navigator.platform.startsWith("Mac")?"mac":navigator.platform.startsWith("Win")?"win":navigator.platform.includes("Linux")?"linux":"unknown";let Op=class extends ve.Component{constructor(){super(...arguments),this.selectApplication=()=>xp(this,void 0,void 0,(function*(){var e;const t=null!==(e=Q.selectApplication)&&void 0!==e?e:()=>iu("path"),n=yield t();n?this.runApplication(n).then((()=>{this.props.uiStore.rememberElectronPath(n)})):this.props.closeSelf()}))}componentDidMount(){return xp(this,void 0,void 0,(function*(){const{previousElectronAppPaths:e}=this.props.uiStore;0===e.length&&(this.selectApplication(),"mac"!==Rp&&this.props.closeSelf())}))}runApplication(e){return xp(this,void 0,void 0,(function*(){const{activateInterceptor:t,reportStarted:n,reportSuccess:r}=this.props;n(),t({pathToApplication:e}).then((()=>{r()})).catch((t=>{this.props.uiStore.forgetElectronPath(e),ye(t)}))}))}render(){const e=this.props.uiStore,{previousElectronAppPaths:t,forgetElectronPath:n}=e,r="mac"===Rp?"application":"win"===Rp?"exe":"linux"===Rp?"binary":"application",o="a"===(s=r)[0]||"e"===s[0]?"an":"a";var s;return ve.createElement(wp,null,ve.createElement("p",null,"Start an Electron ",r," with HTTP Toolkit's settings injected, to intercept all its HTTP & HTTPS traffic."),"mac"===Rp&&t.length<2&&ve.createElement("p",null,"For .app bundles, you can intercept either the bundle (the .app directory) or the executable itself, typically stored in Contents/MacOS inside the bundle."),ve.createElement("p",null,t.length?`You can also rerun a previously started ${r}, using the buttons below`:`Once you've run ${o} ${r}, it'll be saved and shown here so you can rerun it later`,"."),ve.createElement(Ep,null),ve.createElement(Tp,{onClick:this.selectApplication},"Select ",o," ",r),t.length>0&&ve.createElement(Cp,null),t.map((e=>ve.createElement(Sp,{key:e},ve.createElement(Pp,{title:e,onClick:()=>this.runApplication(e)},"Start ",function(e){if("win"===Rp)return m.last(e.split("\\"));{const t=e.split("/").filter((e=>"bin"!==e&&"run"!==e)),n=m.find(t,(e=>e.endsWith(".app")));return n?n.slice(0,-4):t[t.length-1]}}(e)),ve.createElement(kp,{onClick:()=>n(e)},ve.createElement(Ro,{icon:["fas","times"]}))))))}};Op=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,xe.WQ)("uiStore"),xe.PA],Op);const Hp={columnWidth:1,rowHeight:2,configComponent:Op};var Ap=n(15286);const qp=Le.div`
    user-select: text;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    > canvas {
        margin: 0 auto;
        /* Without white padding, the QR code sometimes isn't scannable */
        padding: 5px;
        background-color: #fff;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,$p=Le.div`
    flex: 1 1 100%;
`;function Ip(e){return e.exchanges.filter((e=>"http://android.httptoolkit.tech/config"===e.request.url)).map((e=>e.id))}function jp(e,t,n,r){t.ensureRuleExists({id:"default-android-certificate",type:"http",activated:!0,priority:fi.OVERRIDE,matchers:[new vs.GET,new Vo.yN.SimplePathMatcher("http://android.httptoolkit.tech/config")],completionChecker:new Vo.zO.Always,handler:new Es(200,void 0,JSON.stringify({certificate:e}),{"content-type":"application/json"})});const o=Ip(n);(0,w.when)((()=>m.difference(Ip(n),o).length>0)).then((()=>{r()}))}let Dp=class extends ve.Component{componentDidMount(){return e=this,t=void 0,r=function*(){const e=this.props.rulesStore,t=this.props.eventsStore,n=this.props.proxyStore,{reportStarted:r,reportSuccess:o}=this.props;n.refreshNetworkAddresses().then((()=>{0===n.externalNetworkAddresses.length&&(alert("Cannot activate Android interception as no network addresses could be detected.\n\nPlease open an issue at github.com/httptoolkit/httptoolkit"),ye("Android QR activation failed - no network addresses"),this.props.closeSelf())})),jp(n.certContent,e,t,0===Ip(t).length?o:()=>o({showRequests:!1})),r()},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}render(){const{certFingerprint:e,httpProxyPort:t,externalNetworkAddresses:n}=this.props.proxyStore,r={addresses:n,port:t,certFingerprint:e},o=Mt(JSON.stringify(r)).toString("base64").replace(/\+/g,"-").replace(/\//g,"_");return ve.createElement(qp,null,ve.createElement("p",null,"Scan the QR code below on your device to install the HTTP Toolkit app, and start intercepting HTTP & HTTPS traffic."),ve.createElement("p",null,"Don't have a barcode scanner? Install the ",ve.createElement("a",{href:`https://play.google.com/store/apps/details?id=tech.httptoolkit.android.v1&referrer=${o}`,target:"_blank",rel:"noreferrer noopener"},"HTTP Toolkit app")," manually instead."),ve.createElement($p,null),ve.createElement(Ap,{size:160,value:`https://android.httptoolkit.tech/connect/?data=${o}`}),ve.createElement($p,null),ve.createElement("p",null,"Once activated, this will send all HTTP & HTTPS traffic to HTTP Toolkit, and configure the device to trust its HTTPS certificate by default."),ve.createElement("p",null,ve.createElement("strong",null,"This won't work immediately for all apps.")," Some may need changes to trust HTTP Toolkit for HTTPS traffic. ",ve.createElement("a",{href:"https://httptoolkit.com/docs/guides/android",target:"_blank",rel:"noreferrer noopener"},"See the docs")," for more details."))}};Dp=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,xe.WQ)("proxyStore"),(0,xe.WQ)("rulesStore"),(0,xe.WQ)("eventsStore"),xe.PA],Dp);const Mp={columnWidth:2,rowHeight:2,configComponent:Dp};const Bp=Le.div`
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    word-break: break-word;
    padding: 0 10px;
`,Fp=Le(Ro).attrs((()=>({icon:["fas","spinner"],spin:!0,size:"2x"})))`
    display: block;
    margin: 0 auto 10px;
`,Np=Le.div`
    overflow-y: auto;
    overscroll-behavior: contain;

    margin: 10px -15px;
    flex-grow: 1;
    flex-shrink: 1;
`,Lp=Le.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
`,Up=Le.li`
    margin-bottom: -10px;
    padding: 10px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
    }
`,Wp=Le(Tu)`
    user-select: none;
    font-size: ${e=>e.theme.textSize};
    padding: 10px;
    width: 100%;

    display: flex;
    align-items: center;

    ${e=>"active"===e.state&&"&& { background-color: #4caf7d; }"}

    > svg:first-child {
        margin-right: 10px;
        width: 15px;
    }

    position: relative;
`,zp=Le.div`
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    width: ${e=>e.progress}%;
    transition: width 0.1s linear;

    background-color: ${e=>e.theme.primaryInputBackground};
    mix-blend-mode: overlay;
    border-radius: 4px;
`,_p=Le.div`
    flex-grow: 1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;

    &, & * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    ${e=>"left"===e.ellipseDirection?"direction: rtl;":""}
`,Vp=Le.div`
    flex-basis: 25px;
    flex-shrink: 999;
`;let Jp=class extends ve.Component{render(){const{className:e,spinnerText:t,targets:n,interceptTarget:r,ellipseDirection:o}=this.props;return 0===n.length?ve.createElement(Bp,null,ve.createElement(Fp,null),t):ve.createElement(Np,{className:e},ve.createElement(Lp,null,m.map(n,(e=>ve.createElement(Gp,{key:e.id,target:e,interceptTarget:r,ellipseDirection:o})))))}};Jp=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([xe.PA],Jp);const Gp=e=>{const{target:t,interceptTarget:n,ellipseDirection:r}=e,o="activating"===t.status?ve.createElement(Ro,{icon:["fas","spinner"],spin:!0}):"active"===t.status?ve.createElement(Ro,{icon:["fas","check"]}):t.icon?t.icon:null,s=void 0!==t.progress?ve.createElement(zp,{progress:t.progress}):null;return ve.createElement(Up,null,ve.createElement(Wp,{title:t.title,state:t.status,disabled:"available"!==t.status,onClick:"available"===t.status?()=>n(t.id):m.noop},s,o,ve.createElement(_p,{ellipseDirection:r},t.content),null!==o?ve.createElement(Vp,null):null))};var Kp=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Qp=Le.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Yp=Le(Jp)`
    max-height: 280px;
`,Xp=Le.p`
    font-size: 85%;
    font-style: italic;
`;let Zp=class extends ve.Component{constructor(){super(...arguments),this.inProgressIds=[],this.onSuccess=()=>{this.props.reportSuccess({showRequests:this.deviceIds.length<=1})}}get deviceIds(){var e;return(null===(e=this.props.interceptor.metadata)||void 0===e?void 0:e.deviceIds)||[]}componentDidMount(){return e=this,t=void 0,r=function*(){1===this.deviceIds.length&&(this.interceptDevice(this.deviceIds[0]),this.props.closeSelf()),(0,xe.bH)(this,(0,w.autorun)((()=>{var e;0===(null===(e=this.deviceIds)||void 0===e?void 0:e.length)&&this.props.closeSelf()})))},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}render(){return ve.createElement(Qp,null,this.deviceIds.length>1?ve.createElement(ve.Fragment,null,ve.createElement("p",null,"There are multiple ADB devices connected. Pick which device you'd like to intercept:")):1===this.deviceIds.length?ve.createElement(ve.Fragment,null,ve.createElement("p",null,"There is one ADB device connected."),ve.createElement("p",null,"Select the device below to begin setup:")):ve.createElement(ve.Fragment,null,ve.createElement("p",null,"There are no ADB devices connected."),ve.createElement("p",null,"Connect an Android device to ADB to begin setup.")),ve.createElement(Yp,{spinnerText:"Waiting for Android devices to intercept...",targets:this.deviceIds.map((e=>{var t,n,r;const o=this.inProgressIds.includes(e),s=null!==(r=null===(n=null===(t=this.props.interceptor.metadata)||void 0===t?void 0:t.devices)||void 0===n?void 0:n[e].name)&&void 0!==r?r:e;return{id:e,title:`Intercept Android device ${s}${e!==s?` (ID: ${e})`:""}`,status:o?"activating":"available",icon:e.includes("emulator-")?ve.createElement(Ro,{icon:["far","window-maximize"]}):e.match(/\d+\.\d+\.\d+\.\d+:\d+/)?ve.createElement(Ro,{icon:["fas","network-wired"]}):ve.createElement(Ro,{icon:["fas","mobile-alt"]}),content:s}})),interceptTarget:this.interceptDevice,ellipseDirection:"right"}),ve.createElement(Xp,null,"Take a look at ",ve.createElement("a",{href:"https://httptoolkit.com/docs/guides/android/"},"the Android docs")," for a detailed setup guide."))}interceptDevice(e){const{inProgressIds:t,onSuccess:n,props:{proxyStore:r,rulesStore:o,eventsStore:s,reportStarted:a,activateInterceptor:i}}=this;jp(r.certContent,o,s,n),a();const l=i({deviceId:e});t.push(e),l.finally((0,w.action)((()=>{m.pull(t,e)})))}};Kp([w.computed],Zp.prototype,"deviceIds",null),Kp([w.observable],Zp.prototype,"inProgressIds",void 0),Kp([w.action.bound],Zp.prototype,"interceptDevice",null),Zp=Kp([(0,xe.WQ)("proxyStore"),(0,xe.WQ)("rulesStore"),(0,xe.WQ)("eventsStore"),(0,xe.WQ)("accountStore"),xe.PA],Zp);const eh={columnWidth:1,rowHeight:2,configComponent:Zp};var th=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},nh=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const rh=Le.div`
    user-select: text;

    height: 100%;
    max-height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: start;

    margin: 5px -15px -15px -15px;
    width: calc(100% + 30px);

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,oh=Le(Jp)`
    padding: 10px 0;
    margin: 0;
    max-height: unset;
`,sh=Le.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    z-index: 1;
    box-shadow: 0 0 5px 2px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
`,ah=Le.h2`
    height: 34px;
    flex-grow: 1;

    line-height: 32px;
    text-align: center;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,ih=Le(lp).attrs((()=>({icon:["fas","arrow-left"],title:"Jump to this request on the View page"})))`
    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.highlightColor};
    padding: 0 10px;
`,lh=Le.div`
    flex-basis: 34px;
    flex-shrink: 999;
    min-width: 5px;
`,ch=Le(Ru)`
    border-style: solid;
    border-width: 1px 0 1px 0;
    border-color: ${e=>e.theme.inputHoverBackground};
    border-radius: 0;

    padding: 10px 10px 8px;

    z-index: 0;
    box-shadow: 0 0 5px 2px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    :focus {
        outline: none;
        border-color: ${e=>e.theme.inputBorder};
    }
`,dh=Le.p`
    font-weight: bold;
`,uh=Le((({type:e,state:t,className:n})=>"available"===t?null:ve.createElement("p",{className:n},(({type:e,state:t})=>{if("launch-required"===t)return"Frida launch required";if("setup-required"===t)return"Frida installation required";if("unavailable"===t)return"android"===e?"Root access not available":"Device must be jailbroken and running Frida server";throw new St(t)})({type:e,state:t}))))`
    margin-top: 5px;
    font-style: italic;

    white-space: normal;
    text-wrap: balance;
`,ph=["com.apple.mobilesafari","com.google.android.googlequicksearchbox"],hh=(e,t)=>{var n;throw t instanceof $?alert(`Failed to ${e}: ${t.failureMessage} (${t.errorCode})`):alert(`Failed to ${e}: ${null!==(n=t.message)&&void 0!==n?n:t}`),t};let mh=class extends ve.Component{constructor(){super(...arguments),this.fridaTargets=[],this.updateTargets=(0,w.flow)(function*(){var e,t,n;if(!this.selectedHost)return void(this.fridaTargets=[]);const r=yield J(this.props.interceptor.id,null===(e=this.selectedHost)||void 0===e?void 0:e.id);this.fridaTargets=null!==(n=null===(t=null==r?void 0:r.targets)||void 0===t?void 0:t.filter((e=>!ph.includes(e.id))))&&void 0!==n?n:[]}.bind(this)),this.inProgressTargetIds=[],this.hostProgress={},this.searchInput=""}get fridaHosts(){var e;return(null===(e=this.props.interceptor.metadata)||void 0===e?void 0:e.hosts)||{}}setHostProgress(e,t){void 0===t?delete this.hostProgress[e]:this.hostProgress[e]=t}componentDidMount(){return nh(this,void 0,void 0,(function*(){const e=Object.values(this.fridaHosts);1===e.length&&"available"===e[0].state&&this.selectHost(e[0].id),(0,xe.bH)(this,(0,w.autorun)((()=>{var e;this.selectedHostId&&"available"!==(null===(e=this.fridaHosts[this.selectedHostId])||void 0===e?void 0:e.state)&&this.deselectHost(),0===Object.keys(this.fridaHosts).length&&this.props.closeSelf()}))),this.updateTargets();const t=setInterval(this.updateTargets,2e3);(0,xe.bH)(this,(()=>clearInterval(t)))}))}get deviceClassName(){const e=this.props.interceptor.id;if("android-frida"===e)return"Android";if("ios-frida"===e)return"iOS";throw new Error(`Unknown Frida interceptor type: ${e}`)}get selectedHost(){if(!this.selectedHostId)return;const e=this.getHost(this.selectedHostId);return"unavailable"!==(null==e?void 0:e.state)?e:void 0}getHost(e){return this.fridaHosts[e]}selectHost(e){return nh(this,void 0,void 0,(function*(){const t=this.getHost(e);if("available"!==(null==t?void 0:t.state)){if(void 0===this.hostProgress[e])if(this.hostProgress[e]=10,"launch-required"===(null==t?void 0:t.state))yield this.launchInterceptor(e);else{if("setup-required"!==(null==t?void 0:t.state))return;yield this.setupInterceptor(e)}}else this.viewHostTargets(e)}))}deselectHost(){this.selectedHostId=void 0}viewHostTargets(e){this.selectedHostId=e,this.searchInput="",this.updateTargets()}setupInterceptor(e){return nh(this,void 0,void 0,(function*(){let t=setInterval((()=>{const t=this.hostProgress[e],n=74-t;this.setHostProgress(e,t+Math.floor(n/10))}),100);try{this.props.reportStarted({idSuffix:"setup"}),yield this.props.activateInterceptor({action:"setup",hostId:e}).catch((e=>hh("setup Frida",e))),this.props.reportSuccess({idSuffix:"setup",showRequests:!1}),this.setHostProgress(e,75),yield this.launchInterceptor(e)}finally{clearInterval(t),this.setHostProgress(e,void 0)}}))}launchInterceptor(e){return nh(this,void 0,void 0,(function*(){let t=setInterval((()=>{const t=this.hostProgress[e],n=99-t;this.setHostProgress(e,t+Math.floor(n/5))}),100);try{this.props.reportStarted({idSuffix:"launch"}),yield this.props.activateInterceptor({action:"launch",hostId:e}).catch((e=>hh("launch Frida",e))),this.props.reportSuccess({idSuffix:"launch",showRequests:!1}),this.setHostProgress(e,100),yield C(10),(0,w.runInAction)((()=>{this.props.interceptor.metadata.hosts[e].state="available"})),1===Object.values(this.hostProgress).length&&this.viewHostTargets(e)}finally{clearInterval(t),this.setHostProgress(e,void 0)}}))}interceptTarget(e){const t=this.selectedHost;t&&(this.inProgressTargetIds.push(e),this.props.reportStarted({idSuffix:"app"}),this.props.activateInterceptor({action:"intercept",hostId:t.id,targetId:e}).catch((t=>hh(`intercept ${e}`,t))).then((()=>{this.props.reportSuccess({idSuffix:"app",showRequests:!0})})).finally((0,w.action)((()=>{m.pull(this.inProgressTargetIds,e)}))))}onSearchChange(e){this.searchInput=e.currentTarget.value}render(){const e=this.selectedHost;if(e){const t=this.searchInput.toLowerCase(),n=m.sortBy(this.fridaTargets.filter((({name:e})=>e.toLowerCase().includes(t))),(e=>e.name.toLowerCase())),r=this.fridaTargets.length>0&&0===n.length;return ve.createElement(rh,null,ve.createElement(sh,null,ve.createElement(ih,{onClick:this.deselectHost}),ve.createElement(ah,null,e.name),ve.createElement(lh,null)),ve.createElement(ch,{value:this.searchInput,onChange:this.onSearchChange,placeholder:"Search for a target...",autoFocus:!0}),ve.createElement(oh,{spinnerText:r?`No '${this.searchInput}' apps found...`:"Scanning for apps to intercept...",targets:n.map((e=>{const{id:t,name:n}=e,r=this.inProgressTargetIds.includes(t);return{id:t,title:`${this.deviceClassName} app: ${n} (${t})`,status:r?"activating":"available",content:n}})),interceptTarget:this.interceptTarget,ellipseDirection:"right"}))}return ve.createElement(rh,null,ve.createElement(oh,{spinnerText:`Waiting for ${this.deviceClassName} devices to attach to...`,targets:Object.values(this.fridaHosts).map((e=>{const{id:t,name:n,state:r}=e,o=void 0!==this.hostProgress[t];return{id:t,title:`${this.deviceClassName} device ${n} (${t}): ${m.startCase(r)}`,icon:t.includes("emulator-")?ve.createElement(Ro,{icon:["far","window-maximize"]}):t.match(/\d+\.\d+\.\d+\.\d+:\d+/)?ve.createElement(Ro,{icon:["fas","network-wired"]}):ve.createElement(Ro,{icon:["fas","mobile-alt"]}),status:o?"activating":"unavailable"===r?"unavailable":"available",progress:this.hostProgress[t],content:ve.createElement("div",null,ve.createElement(dh,null,n),ve.createElement(uh,{type:e.type,state:e.state}))}})),interceptTarget:this.selectHost,ellipseDirection:"right"}))}};th([w.computed],mh.prototype,"fridaHosts",null),th([w.observable],mh.prototype,"fridaTargets",void 0),th([w.observable],mh.prototype,"inProgressTargetIds",void 0),th([w.observable],mh.prototype,"hostProgress",void 0),th([w.action],mh.prototype,"setHostProgress",null),th([w.computed],mh.prototype,"deviceClassName",null),th([w.observable],mh.prototype,"selectedHostId",void 0),th([w.computed],mh.prototype,"selectedHost",null),th([w.action.bound],mh.prototype,"selectHost",null),th([w.action.bound],mh.prototype,"deselectHost",null),th([w.action],mh.prototype,"viewHostTargets",null),th([w.action.bound],mh.prototype,"interceptTarget",null),th([w.observable],mh.prototype,"searchInput",void 0),th([w.action.bound],mh.prototype,"onSearchChange",null),mh=th([(0,xe.WQ)("proxyStore"),(0,xe.WQ)("rulesStore"),(0,xe.WQ)("eventsStore"),(0,xe.WQ)("accountStore"),xe.PA],mh);const gh={columnWidth:1,rowHeight:2,configComponent:mh};function fh(e,t,n,r){return o=this,s=void 0,i=function*(){try{yield t({},!1),n()}catch(e){if(!e.metadata||!0!==e.metadata.closeConfirmRequired)throw n(),e;if(!confirm(sl()`
            Your browser is currently open, and needs to be
            restarted to enable interception. Restart it now?
        `.replace("\n"," ")))return;n(),yield t({closeConfirmed:!0})}r()},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function r(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(n,r)}l((i=i.apply(o,s||[])).next())}));var o,s,a,i}var yh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const vh=Le(Jp)`
    max-height: 282px;
`;let bh=class extends ve.Component{constructor(){super(...arguments),this.jvmTargets={},this.updateTargets=(0,w.flow)(function*(){var e;const t=yield J("attach-jvm");this.jvmTargets=null!==(e=null==t?void 0:t.jvmTargets)&&void 0!==e?e:{}}.bind(this)),this.inProgressPids=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);(0,xe.bH)(this,(()=>clearInterval(e)))}render(){const e=Object.values(this.jvmTargets).filter((e=>!e.name.startsWith("org.apache.maven.wrapper.MavenWrapperMain "))),t=this.props.proxyStore.httpProxyPort;return ve.createElement(xh,null,ve.createElement("p",null,"Pick which JVM process you'd like to intercept:"),ve.createElement(vh,{spinnerText:"Looking for JVM processes to intercept...",interceptTarget:this.interceptTarget,ellipseDirection:"left",targets:e.map((e=>{const n=this.inProgressPids.includes(e.pid),r=void 0!==e.interceptedByProxy,o=e.interceptedByProxy===t,s=e.name.split(" ")[0];let a,i;if(s.includes("/")||s.includes("\\")){const[e,...t]=s.split(/\/|\\/).reverse(),n=t.reverse().join("/");a=n?n+"/":"",i=e}else{const[e,...t]=s.split(".").reverse(),n=t.reverse().join(".");a=n?n+".":"",i=e}return{id:e.pid,title:e.name,status:n?"activating":o?"active":r?"unavailable":"available",content:ve.createElement(ve.Fragment,null,ve.createElement(Eh,null,a),ve.createElement(Ch,null,i))}}))}),ve.createElement(wh,null,"You can also launch JVM processes from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressPids:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const s=r({targetPid:e});s.then((()=>{const t=this.jvmTargets[e];t&&(t.interceptedByProxy=o.httpProxyPort),this.props.reportSuccess({showRequests:!1})})),t.push(e),s.finally((0,w.action)((()=>{m.pull(t,e)})))}};yh([w.observable.shallow],bh.prototype,"jvmTargets",void 0),yh([w.observable],bh.prototype,"inProgressPids",void 0),yh([w.action.bound],bh.prototype,"interceptTarget",null),bh=yh([(0,xe.WQ)("proxyStore"),xe.PA],bh);const xh=Le.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,wh=Le.p`
    font-size: 85%;
    font-style: italic;
`,Eh=Le.span`
    opacity: 0.6;
`,Ch=Le.span`
    font-weight: bold;
`,Th={columnWidth:1,rowHeight:2,configComponent:bh};var Sh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ph=Le.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,kh=Le(Jp)`
    max-height: 262px;
`,Rh=Le.p`
    font-size: 85%;
    font-style: italic;
`,Oh="tech.httptoolkit.docker.proxy";let Hh=class extends ve.Component{constructor(){super(...arguments),this.targets={},this.updateTargets=(0,w.flow)(function*(){var e;const t=yield J("docker-attach");this.targets=null!==(e=null==t?void 0:t.targets)&&void 0!==e?e:{}}.bind(this)),this.inProgressIds=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);(0,xe.bH)(this,(()=>clearInterval(e)))}render(){const e=this.props.proxyStore.httpProxyPort,t=Object.values(this.targets).filter((e=>!e.image.startsWith("httptoolkit/docker-socks-tunnel")));return ve.createElement(Ph,null,ve.createElement("p",null,"Pick a container to restart it with all traffic intercepted:"),ve.createElement(kh,{spinnerText:"Looking for Docker containers to intercept...",interceptTarget:this.interceptTarget,ellipseDirection:"left",targets:t.map((t=>{var n;const r=this.inProgressIds.includes(t.id),o=t.labels[Oh]===e.toString(),s=(null===(n=t.names[0])||void 0===n?void 0:n.replace(/^\//,""))||t.id.slice(0,8),a=t.id.startsWith(s)?`'${s}'`:`'${s}' (${t.id.slice(0,8)})`;return{id:t.id,title:`Container ${a}, from image '${t.image}'`,status:r?"activating":o?"active":"available",content:ve.createElement(ve.Fragment,null,ve.createElement(Ah,null,s),ve.createElement(qh,null,t.image))}}))}),ve.createElement(Rh,null,"You can also create Docker containers from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressIds:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const s=r({containerId:e});s.then((()=>{const t=this.targets[e];t&&(t.labels[Oh]=o.httpProxyPort.toString()),this.props.reportSuccess({showRequests:!1})})),t.push(e),s.finally((0,w.action)((()=>{m.pull(t,e)})))}};Sh([w.observable.shallow],Hh.prototype,"targets",void 0),Sh([w.observable],Hh.prototype,"inProgressIds",void 0),Sh([w.action.bound],Hh.prototype,"interceptTarget",null),Hh=Sh([(0,xe.WQ)("proxyStore"),xe.PA],Hh);const Ah=Le.div`
    font-weight: bold;
`,qh=Le.div`
    opacity: 0.6;
`,$h={columnWidth:1,rowHeight:2,configComponent:Hh};let Ih=class extends ve.Component{componentDidMount(){return e=this,t=void 0,r=function*(){const{eventsStore:e,reportStarted:t,reportSuccess:n,closeSelf:r}=this.props;r(),window.open("https://httptoolkit.com/docs/guides/ios/","_blank","noreferrer noopener"),t();const o=jh(e);(0,w.when)((()=>m.difference(jh(e),o).length>0)).then((()=>{n()}))},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}render(){return null}};function jh(e){return e.exchanges.filter((e=>m.isEqual(e.request.source.icon,Po.iOS))).map((e=>e.id))}Ih=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,xe.WQ)("eventsStore"),xe.PA],Ih);const Dh={columnWidth:1,rowHeight:1,configComponent:Ih},Mh=["browsers","web","pwa"],Bh=["jvm","java","scala","kotlin","clojure","groovy"],Fh=["mobile","phone","app"],Nh=["samsung","galaxy","nokia","lg","android","google","motorola",...Bh],Lh=["apple","ios","iphone","ipad"],Uh=["command line","cli","docker","bash","cmd","shell","php","ruby","node","js",...Bh],Wh=m.assign({style:{transform:"translateY(32px)"}},Po.Android),zh=(e,t)=>Object.assign(Object.assign({},e),{color:t}),_h="manual-setup",Vh=({serverVersion:e})=>({webExtensionEnabled:te(e||"","^1.10.3")}),Jh={"docker-attach":{name:"Attach to Docker Container",description:["Intercept all traffic from running Docker containers"],uiConfig:$h,iconProps:Po.Docker,tags:["bridge","services","images"]},"fresh-chrome":{name:"Chrome",description:["Intercept a fresh independent Chrome window"],iconProps:Po.Chrome,tags:Mh,getActivationOptions:Vh},"existing-chrome":{name:"Global Chrome",description:["Intercept your main Chrome profile globally","This captures all default Chrome traffic, so may interfere with normal usage"],customActivation:fh,iconProps:[Po.Chrome,{icon:["fas","globe"],color:"#fafafa",size:"2x"}],tags:Mh,getActivationOptions:Vh},"fresh-chrome-beta":{name:"Chrome (Beta)",description:["Intercept a fresh independent Chrome window"],iconProps:zh(Po.Chrome,"#DB4437"),tags:Mh,getActivationOptions:Vh},"fresh-chrome-dev":{name:"Chrome (Dev)",description:["Intercept a fresh independent Chrome window"],iconProps:zh(Po.Chrome,"#74929f"),tags:Mh,getActivationOptions:Vh},"fresh-chrome-canary":{name:"Chrome (Canary)",description:["Intercept a fresh independent Chrome window"],iconProps:zh(Po.Chrome,"#e8ab01"),tags:Mh,getActivationOptions:Vh},"fresh-chromium":{name:"Chromium",description:["Intercept a fresh independent Chromium window"],iconProps:Po.Chromium,tags:Mh,getActivationOptions:Vh},"existing-chromium":{name:"Global Chromium",description:["Intercept your main Chromium profile globally","This captures all default Chromium traffic, so may interfere with normal usage"],customActivation:fh,iconProps:[Po.Chromium,{icon:["fas","globe"],color:"#fafafa",size:"2x"}],tags:Mh,getActivationOptions:Vh},"fresh-chromium-dev":{name:"Chromium (Dev)",description:["Intercept a fresh independent Chromium window"],iconProps:zh(Po.Chromium,"#74929f"),tags:Mh,getActivationOptions:Vh},"fresh-brave":{name:"Brave",description:["Intercept a fresh independent Brave window"],iconProps:Po.Brave,tags:Mh,getActivationOptions:Vh},"fresh-firefox":{name:"Firefox",description:["Intercept a fresh independent Firefox window"],iconProps:Po.Firefox,tags:Mh,checkRequirements:({interceptorVersion:e})=>te(e,"^1.1.0")},"fresh-firefox-dev":{name:"Firefox (Dev)",description:["Intercept a fresh independent Firefox Developer window"],iconProps:zh(Po.Firefox,"#007EE7"),tags:Mh},"fresh-firefox-nightly":{name:"Firefox (Nightly)",description:["Intercept a fresh independent Firefox Nightly window"],iconProps:zh(Po.Firefox,"#1ED5E2"),tags:Mh},"existing-arc":{name:"Global Arc Browser",description:["Intercept Arc Browser globally on this machine","This captures all Arc traffic, so may interfere with normal usage"],iconProps:Po.Arc,tags:Mh,getActivationOptions:Vh,checkRequirements:({accountStore:e})=>e.featureFlags.includes("arc-browser")},"fresh-safari":{name:"Safari",description:["Intercept a fresh independent Safari window"],iconProps:Po.Safari,tags:Mh},"fresh-edge":{name:"Edge",description:["Intercept a fresh independent Edge window"],iconProps:Po.Edge,tags:Mh,getActivationOptions:Vh},"fresh-edge-beta":{name:"Edge (Beta)",description:["Intercept a fresh independent Edge window"],iconProps:zh(Po.Edge,"#50e6ff"),tags:Mh,getActivationOptions:Vh},"fresh-edge-dev":{name:"Edge (Dev)",description:["Intercept a fresh independent Edge window"],iconProps:zh(Po.Edge,"#74929f"),tags:Mh,getActivationOptions:Vh},"fresh-edge-canary":{name:"Edge (Canary)",description:["Intercept a fresh independent Edge window"],iconProps:zh(Po.Edge,"#ffc225"),tags:Mh,getActivationOptions:Vh},"fresh-opera":{name:"Opera",description:["Intercept a fresh independent Opera window"],iconProps:Po.Opera,tags:Mh,checkRequirements:({interceptorVersion:e})=>te(e,"^1.0.3"),getActivationOptions:Vh},"attach-jvm":{name:"Attach to JVM",description:["Attach to any local running JVM process, including Java, Kotlin & Clojure"],iconProps:Po.Java,uiConfig:Th,tags:Bh},"fresh-terminal":{name:"Fresh Terminal",description:["Open a new terminal that intercepts all processes & Docker containers"],iconProps:Po.Terminal,tags:Uh},"existing-terminal":{name:"Existing Terminal",description:["Intercept launched processes & Docker containers from an existing terminal window"],iconProps:zh(Po.Terminal,"#dd44dd"),uiConfig:bp,tags:Uh},"android-adb":{name:"Android Device via ADB",description:["Intercept an Android device or emulator connected to ADB","Automatically injects system HTTPS certificates into rooted devices & most emulators"],notAvailableHelpUrl:"https://httptoolkit.com/docs/guides/android/#android-device-via-adb-interception-option-is-not-available",iconProps:Wh,checkRequirements:({serverVersion:e})=>te(e||"",oe),uiConfig:eh,tags:[...Fh,...Nh,"emulator","root","adb"]},"android-device":{name:"Android Device via QR code",description:["Intercept any Android device on your network","Manual setup required for HTTPS in some apps"],iconProps:zh(Wh,"#4285F4"),checkRequirements:({serverVersion:e})=>te(e||"",oe),clientOnly:!0,uiConfig:Mp,tags:[...Fh,...Nh]},"android-frida":{name:"Android App via Frida",description:["Intercept a target Android app","This automatically disables most certificate pinning","Requires a rooted device connected to ADB"],iconProps:zh(Wh,"#ef6456"),uiConfig:gh,tags:[...Fh,...Nh],experimental:!0},"ios-frida":{name:"iOS App via Frida",description:["Intercept a target iOS app","This automatically disables most certificate pinning","Requires a jailbroken device running Frida Server"],iconProps:zh(Po.iOS,"#ef6456"),uiConfig:gh,tags:[...Fh,...Lh],experimental:!0},"manual-ios-device":{name:"iOS via Manual Setup",description:["Manually intercept all HTTP and HTTPS traffic from any iPhone or iPad"],iconProps:Po.iOS,clientOnly:!0,uiConfig:Dh,tags:[...Fh,...Lh]},"ios-device":{name:"Automatic iOS Device Setup",description:["Intercept all HTTP traffic from an iOS device on your network"],iconProps:Po.iOS,tags:[...Fh,...Lh]},"network-device":{name:"A Device on Your Network",description:["Intercept all HTTP traffic from another device on your network"],iconProps:Po.Network,tags:[...Fh,...Lh,...Nh,"lan","arp","wifi"]},"virtualbox-machine":{name:"A Virtualbox VM",description:["Intercept all traffic from a Virtualbox VM"],iconProps:Po.Desktop,tags:["virtual machine","vagrant"]},"system-proxy":{name:"Everything",description:["Intercept all HTTP traffic on this machine"],iconProps:Po.Desktop,tags:["local","machine","system","me"]},electron:{name:"Electron Application",description:["Launch an Electron application with all its traffic intercepted"],iconProps:Po.Electron,uiConfig:Hp,tags:["electron","desktop","postman"]},[_h]:{name:"Anything",description:["Manually configure any source using the proxy settings and CA certificate"],iconProps:Po.Unknown,clientOnly:!0,uiConfig:ip,tags:[]}};function Gh(e,t,n){const r=m.keyBy(e,"id");return m.mapValues(Jh,((e,o)=>{if(!e.clientOnly&&!r[o]||e.checkRequirements&&!e.checkRequirements({interceptorVersion:(r[o]||{}).version,accountStore:t,serverVersion:n}))return m.assign({},e,{id:o,isSupported:!1,isActive:!1,isActivable:!1,activationOptions:void 0});if(e.clientOnly)return m.assign({},e,{id:o,isSupported:!0,isActive:!1,isActivable:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0});{const s=r[o];return m.assign({},e,s,{id:o,isSupported:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0})}}))}var Kh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},Qh=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};class Yh{constructor(e,t){this.proxyStore=e,this.accountStore=t,this.initialized=R((()=>Qh(this,void 0,void 0,(function*(){yield Promise.all([this.proxyStore.initialized,this.accountStore.initialized]),yield this.refreshInterceptors();const e=setInterval((()=>this.refreshInterceptors()),1e4);window.addEventListener("beforeunload",(()=>{clearInterval(e)})),console.log("Interceptor store initialized")})))),this.activateInterceptor=(e,t)=>(this.interceptors[e].inProgress=!0,function(e,t,n){var r,o,s;return L(this,void 0,void 0,(function*(){try{const r=yield(yield _).activateInterceptor(e,t,n);if(r.success)return r.metadata;throw console.log("Activation result",JSON.stringify(r)),new I(e,r.metadata)}catch(t){throw t instanceof q?new $(e,null!==(o=null===(r=t.apiError)||void 0===r?void 0:r.message)&&void 0!==o?o:`Failed to activate interceptor ${e}`,null===(s=t.apiError)||void 0===s?void 0:s.code,t):t}}))}(e,this.proxyStore.httpProxyPort,t).then((e=>e||!0)).finally((0,w.action)((()=>{this.interceptors[e].inProgress=!1,this.refreshInterceptors()})))),this.interceptors=Gh([],t)}refreshInterceptors(){return Qh(this,void 0,void 0,(function*(){const e=yield function(e){return L(this,void 0,void 0,(function*(){return(yield _).getInterceptors(e)}))}(this.proxyStore.httpProxyPort),t=yield Z;(0,w.runInAction)((()=>{const n=Gh(e,this.accountStore,t);!n["fresh-chrome"].isActivable&&n["existing-chrome"].isActivable&&(n["existing-chrome"].isActivable=!1),this.interceptors=n}))}))}}Kh([w.observable],Yh.prototype,"interceptors",void 0),Kh([w.action.bound],Yh.prototype,"activateInterceptor",void 0);var Xh=n(781),Zh=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},em=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const tm=ut.gt({spec:ut.lS(),serverMatcher:Qo,requestMatchers:(nm=ut.Ik(ut.gt({pathMatcher:Qo,queryMatcher:ut.lS()})),rm=ut.Ie((({path:e})=>e),((e,t)=>({path:e,pathSpec:t.json.spec.paths[e]}))),ut.Ie((e=>Array.from(e.entries()).map((e=>[nm.serializer(e[0]),rm.serializer(e[1])]))),((e,t,n,r)=>r(null,new Map(e.map((e=>[es(nm,e[0],t),es(rm,e[1],t)])))))))});var nm,rm;const om={"localhost:5001/api/v0":"ipfs","127.0.0.1:5001/api/v0":"ipfs","localhost:5002/api/v0":"ipfs","127.0.0.1:5002/api/v0":"ipfs","ipfs.infura.io:5001/api/v0":"ipfs","localhost:8545/":"ethereum","127.0.0.1:8545/":"ethereum","mainnet.":"ethereum","ropsten.":"ethereum","rinkeby.":"ethereum","kovan.":"ethereum","goerli.":"ethereum","mainnet-":"ethereum","web3.ens.domains/v1/mainnet":"ethereum"};class sm{constructor(e){this.accountStore=e,this.initialized=R((()=>em(this,void 0,void 0,(function*(){yield this.accountStore.initialized,(0,w.observe)(this.accountStore,"accountDataLastUpdated",(()=>{this.accountStore.isPaidUser||(this.customOpenApiSpecs={})})),yield Et({storage:o,jsonify:!1,key:"api-store",store:this}),console.log("API store initialized")})))),this.customOpenApiSpecs={},this.publicApiCache={}}addCustomApi(e,t){this.customOpenApiSpecs[e]=t}deleteCustomApi(e){delete this.customOpenApiSpecs[e]}get customOpenApiInfo(){return m.mapValues(this.customOpenApiSpecs,(e=>({info:m.cloneDeep(e.spec.info)})))}get customOpenApiSpecsByUrl(){return new Map(Object.entries(this.customOpenApiSpecs).map((([e,t])=>[new URL("https://"+e.replace(/\/$/,"")),t])).sort((([e,t],[n,r])=>e.port&&!n.port?-1:n.port&&!e.port?1:n.pathname.length-e.pathname.length)))}getPrivateApi(e){const t=m.find([...this.customOpenApiSpecsByUrl.keys()],(t=>t.hostname===e.hostname&&(!t.port||t.port===e.port||"443"===t.port&&"https"===e.protocol||"80"===t.port&&"http"===e.protocol)&&e.pathname.startsWith(t.pathname)));return t?this.customOpenApiSpecsByUrl.get(t):void 0}getPublicApi(e){const{publicApiCache:t}=this;return t[e]||(t[e]=function(e){return em(this,void 0,void 0,(function*(){return(yield fetch(`/api/${e}.json`)).json()}))}(e).then(tl).catch((t=>{throw console.log(`Failed to build API ${e}`),ye(t,{apiSpecId:e}),t}))),t[e]}getApi(e){return em(this,void 0,void 0,(function*(){const{parsedUrl:t}=e;if("github.com"===t.hostname)return;let n=this.getPrivateApi(t);if(n)return Promise.resolve(n);let r=function(e){const t=(0,Xh.findApi)(e);if(t)return t;const n=Object.keys(om).find((t=>e.startsWith(t)));return n?om[n]:void 0}(`${t.host}${t.pathname}`);if(!r)return;Array.isArray(r)||(r=[r]),r=r.filter((e=>"microsoft.com/graph"!==e));const o=yield Promise.all(r.map((e=>this.getPublicApi(e))));return 1===o.length?o[0]:function(e,t){const n=e.filter((e=>"openrpc"==e.type||ji(e,t).matched));return 1===n.length?n[0]:0===n.length?m.maxBy(e,(e=>e.spec.paths.length)):(ye("Overlapping APIs",n),m.maxBy(n,(e=>Object.keys(e.spec.paths).length)))}(o,e)}))}}function am(e){try{return new URL(e).host}catch(e){return}}Zh([wt("map",tm),w.observable.shallow],sm.prototype,"customOpenApiSpecs",void 0),Zh([w.computed],sm.prototype,"customOpenApiInfo",null),Zh([w.computed],sm.prototype,"customOpenApiSpecsByUrl",null);var im=n(48287).Buffer,lm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class cm{constructor(e){this.method="GET",this.url="",this.headers=[],this.requestContentType="text",e?(this.method=e.method,this.url=e.url,this.headers=e.headers,this.requestContentType=e.requestContentType,this.rawBody=new ll(e.rawBody,void 0,(()=>this.headers))):this.rawBody=new ll(im.from([]),void 0,(()=>this.headers)),function(e,t){let n=am(e());(0,w.reaction)((()=>e()),(e=>{var r;const o=t(),s=null!==(r=nn(o,"host"))&&void 0!==r?r:"",a=am(e);s!==n&&void 0!==n||(a?on(o,"host",a,{prepend:!0}):sn(o,"host")),n=a}))}((()=>this.url),(()=>this.headers)),function(e,t){let n=e.latestEncodedLength,r=e.encodingPromise;(0,w.reaction)((()=>e.latestEncodedLength),(o=>{if(r===e.encodingPromise)return void(n=o);const s=t(),a=function(e){return nn(e,"transfer-encoding")?"transfer-encoding":nn(e,"content-length")?"content-length":void 0}(s);o?n?"content-length"===a&&n===parseInt(nn(s,"content-length"))&&on(s,"content-length",o.toString()):a&&"content-length"!==a||on(s,"content-length",o.toString()):a&&sn(s,a),n=o}))}(this.rawBody,(()=>this.headers)),function(e,t,n){let r=t();(0,w.reaction)((()=>nn(e(),"content-type")),(e=>{const t=wn(e);t&&n(t)})),(0,w.reaction)((()=>t()),(t=>{const n=nn(e(),"content-type"),o=wn(n);n&&r!==o||on(e(),"content-type",Cn(t)),r=t}))}((()=>this.headers),(()=>this.requestContentType),(e=>{this.requestContentType=e}))}}lm([w.observable],cm.prototype,"method",void 0),lm([w.observable],cm.prototype,"url",void 0),lm([w.observable],cm.prototype,"headers",void 0),lm([w.observable],cm.prototype,"requestContentType",void 0),lm([w.observable],cm.prototype,"rawBody",void 0);const dm=ut.PL(cm,{method:ut.MY(),url:ut.MY(),headers:ut.p_(ut.p_(ut.MY())),requestContentType:ut.MY(),rawBody:ut.Ie((e=>e.decoded.toString("base64")),(()=>ut._Z))},(e=>{const t=e.json,n=im.from(t.rawBody,"base64");return new cm(Object.assign(Object.assign({},t),{rawBody:n}))})),um=ut.gt({id:ut.MY(),request:ut.Ik(dm),sentExchange:!1,pendingSend:!1});var pm=n(48287).Buffer,hm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},mm=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};class gm{constructor(e,t,n){this.accountStore=e,this.eventStore=t,this.rulesStore=n,this.initialized=R((()=>mm(this,void 0,void 0,(function*(){yield Promise.all([this.accountStore.initialized,this.eventStore.initialized,this.rulesStore.initialized]),this.accountStore.mightBePaidUser&&(yield Et({key:"send-store",store:this})),0===this.sendRequests.length&&this.addRequestInput(),this.selectedRequest=this.sendRequests[this.sendRequests.length-1],console.log("Send store initialized")})))),this.sendRequests=[],this.sendRequest=e=>mm(this,void 0,void 0,(function*(){var t,n;st({category:"Send",action:"Sent request"});const r=e.request,o=k(),s=new AbortController;try{(0,w.runInAction)((()=>{e.sentExchange=void 0,e.pendingSend={promise:o.promise,abort:()=>s.abort()};const t=(0,w.action)((()=>{e.pendingSend=void 0}));e.pendingSend.promise.then(t,t)}));const a=p(),i=this.rulesStore.activePassthroughOptions,l=new URL(r.url),c=ym(l),d=`${l.hostname}:${c}`,u=(null===(t=i.clientCertificateHostMap)||void 0===t?void 0:t[d])||(null===(n=i.clientCertificateHostMap)||void 0===n?void 0:n[l.hostname])||void 0,h=this.rulesStore.additionalCaCertificates.map((e=>({cert:e.rawPEM}))),g={ignoreHostHttpsErrors:i.ignoreHostHttpsErrors,additionalCACerts:h,trustAdditionalCAs:h,clientCertificate:u,proxyConfig:vm(this.rulesStore.proxyConfig),lookupOptions:i.lookupOptions},f=yield r.rawBody.encodingBestEffortPromise,y=yield function(e,t,n){return L(this,void 0,void 0,(function*(){const r=yield _;if(!(r instanceof N))throw new Error("Requests cannot be sent via the GraphQL API client");return r.sendRequest(e,t,{abortSignal:n})}))}({url:r.url,method:r.method,headers:r.headers,rawBody:f},g,s.signal),v=this.eventStore.recordSentRequest({id:a,httpVersion:"1.1",matchedRuleId:!1,method:r.method,url:r.url,protocol:l.protocol.slice(0,-1),path:l.pathname,hostname:l.hostname,headers:tn(r.headers),rawHeaders:m.cloneDeep(r.headers),body:{buffer:f},timingEvents:{startTime:Date.now()},tags:["httptoolkit:manually-sent-request"]});fm(y,v).catch((0,w.action)((e=>{var t;if("AbortError"===e.name&&s.signal.aborted){const n=v.timingEvents.startTime,r=Date.now()-n,o=null!==(t=v.timingEvents.startTimestamp)&&void 0!==t?t:n,s=o+r;v.markAborted({id:v.id,error:{message:"Request cancelled"},timingEvents:Object.assign(Object.assign({startTimestamp:o,abortedTimestamp:s},v.timingEvents),e.timingEvents),tags:["client-error:ECONNABORTED"]})}else v.markAborted({id:v.id,error:e,timingEvents:Object.assign(Object.assign({},v.timingEvents),e.timingEvents),tags:e.code?[`passthrough-error:${e.code}`]:[]})}))).then((()=>o.resolve())),(0,w.runInAction)((()=>{e.sentExchange=v}))}catch(t){throw o.reject(t),(0,w.runInAction)((()=>{e.pendingSend=void 0,e.sentExchange=void 0})),t}}))}addRequestInput(e=new cm){const t=(0,w.observable)({id:p(),request:e,sentExchange:void 0});return this.sendRequests.push(t),this.selectedRequest=t,e}addRequestInputFromExchange(e){return mm(this,void 0,void 0,(function*(){st({category:"Send",action:"Resend exchange"}),this.addRequestInput(yield function(e){var t,n,r,o,s,a;return r=this,o=void 0,a=function*(){const r=null!==(t=yield e.request.body.decodedPromise)&&void 0!==t?t:im.from("!!! ORIGINAL REQUEST BODY COULD NOT BE DECODED !!!"),o=2===e.httpVersion?(0,Yt.h2HeadersToH1)(e.request.rawHeaders):e.request.rawHeaders;return new cm({method:e.request.method,url:e.request.url,headers:o,requestContentType:null!==(n=xn(e.request.contentType))&&void 0!==n?n:"text",rawBody:r})},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{l(a.next(e))}catch(e){t(e)}}function i(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(n,i)}l((a=a.apply(r,o||[])).next())}))}(e))}))}selectRequest(e){this.selectedRequest=e}moveSelection(e){const t=this.sendRequests.indexOf(this.selectedRequest);if(-1===t)throw new Error("Selected request is somehow not in Send requests list");const n=m.clamp(t+e,0,this.sendRequests.length-1);this.selectRequest(this.sendRequests[n])}deleteRequest(e){const t=this.sendRequests.indexOf(e);if(-1===t)throw new Error("Attempt to delete non-existent Send request");if(1===this.sendRequests.length)return this.addRequestInput(),void this.sendRequests.shift();if(this.selectedRequest==e){const e=this.sendRequests.length>t+1?t+1:t-1;this.selectRequest(this.sendRequests[e])}this.sendRequests.splice(t,1)}}hm([wt("list",um),w.observable],gm.prototype,"sendRequests",void 0),hm([w.observable],gm.prototype,"selectedRequest",void 0),hm([w.action.bound],gm.prototype,"addRequestInput",null),hm([w.action.bound],gm.prototype,"selectRequest",null),hm([w.action.bound],gm.prototype,"moveSelection",null),hm([w.action.bound],gm.prototype,"deleteRequest",null);const fm=(0,w.flow)((function*(e,t){var n,r;const o=e.getReader(),s=Object.assign({},t.timingEvents);let a,i=[],l=[];for(;;){const{done:e,value:c}=yield o.read();if(e)return;const d=c.type;switch(d){case"request-start":s.startTimestamp=c.timestamp,s.bodyReceivedTimestamp=c.timestamp;break;case"response-head":a=c,s.headersSentTimestamp=c.timestamp;break;case"response-body-part":i.push(c.rawBody);break;case"response-trailers":l.push(...c.trailers);break;case"response-end":if(!a)throw new Error("Received response-end before response-head!");s.responseSentTimestamp=c.timestamp,t.setResponse({id:t.id,statusCode:a.statusCode,statusMessage:null!==(n=a.statusMessage)&&void 0!==n?n:"",headers:tn(a.headers),rawHeaders:a.headers,body:{buffer:pm.concat(i)},trailers:tn(l),rawTrailers:l,tags:[],timingEvents:s});break;case"error":throw c.error.message?(null!==(r=s.startTimestamp)&&void 0!==r||(s.startTimestamp=c.timestamp),s.abortedTimestamp=c.timestamp,Object.assign(new Error(c.error.message+(c.error.code?` (${c.error.code})`:"")),{code:c.error.code,timingEvents:s})):(ye(`Unknown response error for sent request: ${JSON.stringify(c.error)}`),new Error("Unknown response error"));default:kt(d)}}})),ym=e=>e.port?parseInt(e.port,10):"https:"===e.protocol||"wss:"===e.protocol?443:80;function vm(e){if(e)return m.isArray(e)?e.map((e=>vm(e))):Vo.hY in e?{__rule_param_reference__:e[Vo.hY]}:e}const bm=JSON.parse('{"yp":{"httptoolkit-server":">=1.0.0","httptoolkit-desktop":">=1.1.0"}}');var xm=n(65606);const wm=()=>function(){return L(this,void 0,void 0,(function*(){return(yield _).triggerServerUpdate().catch(console.log)}))}().catch(console.warn);let Em=!1;const Cm=e=>{if(Em)return;Em=!0;const t="Initialization failed - background updates & cached/offline startup will be unavailable";ye(t,{cause:e}),alert(t)};function Tm(){alert("This HTTP Toolkit installation is now very outdated, and this version is no longer supported.\n\nYou can continue to use HTTP Toolkit, but you may experience issues & instability.\n\nPlease update to the latest version from httptoolkit.com when you can, to access the many new features, bug fixes & performance improvements available there.")}const Sm=n.p+"9357c065ca2935d0d323.svg",Pm="75px",km=Le.nav`
    width: ${Pm};
    flex-shrink: 0;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    z-index: 5;

    border-right: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;
    box-shadow: 0 0 30px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    font-size: ${e=>e.theme.textSize};
    letter-spacing: -0.3px;

    display: flex;
    flex-direction: column;
`,Rm=Ue`
    width: 72px;
    height: 72px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-sizing: border-box;
`,Om=Le.img.attrs((()=>({src:Sm,alt:"HTTP Toolkit logo"})))`
    ${Rm}
    padding: 13px;
    margin: 3px auto 4px;
`,Hm=Le(it.N_)`
    ${Rm}

    color: ${e=>e.theme.mainColor};
    text-decoration: none;
    line-height: normal;

    width: calc(100% + 2px);
    margin: 0 -1px;

    cursor: pointer;
    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
        opacity: 1;
    }

    border-width: 0 4px;
    border-style: solid;
    border-color: transparent;

    opacity: 0.8;

    ${e=>e.selected&&Ue`{
        opacity: 1;
        border-right-color: ${e=>e.theme.popColor};
    }`}

    > svg {
        margin-bottom: 5px;
    }
`,Am=Le.div`
    margin-top: auto;
`,qm=Le.a`
    ${Rm}

    ${e=>e.highlight&&Ue`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.highlight?e.theme.mainColor:e.theme.popColor};
    }

    text-decoration: none;

    margin-bottom: 5px;

    > svg {
        margin-bottom: 5px;
    }
`,$m=Le(wu)`
    ${Rm}

    opacity: 0.6;

    ${e=>e.highlight&&Ue`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    > svg {
        margin-bottom: 5px;
    }
`,Im=(0,xe.PA)((e=>{const t=e.items.map(((e,t)=>{const n=ve.createElement(ve.Fragment,null,ve.createElement(To,{icon:e.icon,size:34}),e.name);return"web"===e.type?{position:e.position,component:ve.createElement(qm,{key:e.name,title:e.title,highlight:e.highlight,href:e.url,target:"_blank"},n)}:"router"===e.type?{position:e.position,component:ve.createElement(it.YG,{key:e.name,path:`${e.url}/*`},(({match:t})=>ve.createElement(Hm,{to:e.url,title:e.title,selected:!!t},n)))}:{position:e.position,component:ve.createElement($m,{key:e.name,title:e.title,highlight:e.highlight,onClick:e.onClick},n)}}));return ve.createElement(km,null,ve.createElement(Om,{title:ol`
                UI version: ${Y.slice(0,8)}
                Desktop version: ${"fulfilled"===X.state?X.value:"Unknown"}
                Server version: ${"fulfilled"===Z.state?Z.value:"Unknown"}
            `}),t.filter((e=>"top"===e.position)).map((e=>e.component)),ve.createElement(Am,null),t.filter((e=>"bottom"===e.position)).map((e=>e.component)))})),jm=Le.div`
    &:not(:last-child) {
        margin-bottom: 30px;
    }

    font-size: ${e=>e.theme.headingSize};

    > svg {
        margin-right: 30px;
    }
`,Dm=Le((e=>ve.createElement(fu,{className:e.className},ve.createElement("h1",null,"Connected Sources"),e.activeSources.length?e.activeSources.map((e=>ve.createElement(jm,{key:e.ua,title:e.ua},ve.createElement(Ro,Object.assign({},e.icon,{size:"1.1em",fixedWidth:!0})),e.summary))):null)))``;var Mm=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Bm=Le.section`
    display: grid;

    @media (min-width: ${Se}px) {
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 320px;
        padding: 60px 40px;
    }

    @media not (min-width: ${Se}px) {
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 40px;
    }

    grid-auto-rows: minmax(210px, auto);
    grid-auto-flow: row dense;

    max-width: 1200px;
    margin: 0 auto 20px;

    > ${Dm} {
        @media not (min-width: ${Se}px) {
            display: none;
        }

        order: -1;
        grid-column: 3 / span 2;
        overflow-y: auto;
        margin-bottom: 0;
    }
`,Fm=Le.div`
    order: -1;

    @media (min-width: ${Se}px) {
        grid-column: 1 / span 2;
    }

    @media not (min-width: ${Se}px) {
        grid-column: 1 / -1;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    > h1 {
        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bold;
        margin-bottom: 40px;
    }

    > p {
        font-size: ${e=>e.theme.headingSize};

        margin-bottom: 20px;
        text-align: left;
        line-height: 1.2;
    }
`,Nm=Le(Ru)`
    width: 100%;
    padding: 15px;
    box-sizing: border-box;

    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha/2});

    font-size: ${e=>e.theme.headingSize};
`,Lm=Le(lp)`
    position: absolute;

    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`,Um=Le((e=>ve.createElement("div",{className:e.className},ve.createElement(Nm,{autoFocus:!0,value:e.value,placeholder:"Browsers, mobile, docker...","aria-label":"Filter the list of intercept options below",onChange:t=>e.onSearch(t.currentTarget.value)}),!!e.value&&ve.createElement(Lm,{icon:["fas","times"],iconSize:"2x",onClick:()=>e.onSearch(""),title:"Clear search input"}))))`
    position: relative;

    @media (min-width: ${Se}px) {
        margin: 20px 0 0;
    }
`;let Wm=class extends ve.Component{constructor(){super(...arguments),this.filter=!1,this.gridRef=ve.createRef()}render(){const{interceptors:e}=this.props.interceptorStore,{activeSources:t}=this.props.eventsStore,n=!!this.filter&&this.filter.toLocaleLowerCase(),r=m.pickBy(e,(e=>!n||m.includes(e.name.toLocaleLowerCase(),n)||m.includes(e.description.join(" ").toLocaleLowerCase(),n)||m.some(e.tags,(e=>m.includes(e.toLocaleLowerCase(),n)))));return m.some(r,(e=>e.isActivable))||(r[_h]=e[_h]),ve.createElement("div",{className:this.props.className},ve.createElement(Bm,{ref:this.gridRef},ve.createElement(Fm,null,ve.createElement("h1",null,"Intercept HTTP"),ve.createElement("p",null,"To collect & view HTTP traffic, you need to connect a source of traffic, like a browser, mobile device, or docker container."),ve.createElement("p",null,"Click an option below to connect a traffic source, or search for connectors that could work for you:"),ve.createElement(Um,{value:this.filter||"",onSearch:this.onSearchInput})),ve.createElement(Dm,{activeSources:t}),m(r).sortBy((e=>-1*(0+(n&&(e.tags.includes(n)||e.name.toLocaleLowerCase().split(" ").includes(n))?100:0)+(e.isActive||e.isActivable?50:0)+(e.isSupported?25:0)))).map(((e,t)=>ve.createElement(_u,{key:e.id,index:t,interceptor:e,showRequests:this.showRequests}))).value()))}showRequests(){this.props.navigate("/view")}onSearchInput(e){this.filter=e||!1}};Mm([w.observable],Wm.prototype,"filter",void 0),Mm([w.action.bound],Wm.prototype,"showRequests",null),Mm([w.action.bound],Wm.prototype,"onSearchInput",null),Wm=Mm([(0,xe.WQ)("interceptorStore"),(0,xe.WQ)("eventsStore"),xe.PA],Wm);const zm=Le(Wm)`
    height: 100%;
    overflow-y: auto;
    position: relative;
`;var _m=n(27104);const Vm=Le(n(63210).A)`
    .Resizer {
        background: #000;
        opacity: .5;
        z-index: 100;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-background-clip: padding;
        -webkit-background-clip: padding;
        background-clip: padding-box;
    }

    .Resizer:hover {
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0.9;
    }

    .Resizer.horizontal {
        height: 11px;
        margin: -5px 0;
        border-top: 5px solid rgba(255, 255, 255, 0);
        border-bottom: 5px solid rgba(255, 255, 255, 0);
        cursor: row-resize;
        width: 100%;
    }

    .Resizer.horizontal:hover {
        border-top: 5px solid rgba(0, 0, 0, 0.2);
        border-bottom: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.vertical {
        width: 11px;
        margin: 0 -5px;
        border-left: 5px solid rgba(255, 255, 255, 0);
        border-right: 5px solid rgba(255, 255, 255, 0);
        cursor: col-resize;
    }

    .Resizer.vertical:hover {
        border-left: 5px solid rgba(0, 0, 0, 0.2);
        border-right: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.disabled {
        cursor: not-allowed;
    }

    .Resizer.disabled:hover {
        border-color: transparent;
    }

    .Pane {
        min-width: 0; /* Don't let flexbox force panes to expand */
    }

    ${({hiddenPane:e})=>e?`\n            .Resizer {\n                display: none !important;\n            }\n\n            .Pane${e} {\n                display: none !important;\n            }\n        `:""}
`,Jm=Le((e=>ve.createElement("div",{className:e.className},ve.createElement(To,{icon:e.icon}),e.children&&ve.createElement(ve.Fragment,null,ve.createElement("br",null),e.children))))`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${e=>e.theme.containerWatermark};
    font-size: ${e=>e.theme.loudHeadingSize};
    letter-spacing: -1px;

    text-align: center;

    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    width: 100%;

    margin: auto 0;

    > svg {
        font-size: 150px;
    }
`;let Gm,Km=C(100).then((()=>Qm()));function Qm(e=5){return t=this,r=void 0,s=function*(){try{const e=yield Promise.all([n.e("monaco"),n.e("data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-1950fb")]).then(n.bind(n,76259)),t=yield Promise.all([n.e("monaco"),n.e("data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-1950fb")]).then(n.bind(n,35576));!function(e){Object.values(Ne).forEach((t=>{e.editor.defineTheme(t.monacoTheme,{base:t.monacoThemeBase,inherit:!0,rules:[],colors:t.monacoThemeOverrides})}))}(t),t.editor.onDidChangeMarkers((e=>{const n=t.editor.getModelMarkers({});(0,w.runInAction)((()=>{Ym.clear(),n.forEach((e=>{var t;const n=e.resource,r=null!==(t=Ym.get(n))&&void 0!==t?t:[];r.push(e),Ym.set(n,r)}))}))})),t.languages.register({id:"protobuf"}),t.languages.registerCodeLensProvider("protobuf",{provideCodeLenses:function(e,t){return{lenses:[{range:{startLineNumber:1,startColumn:1,endLineNumber:2,endColumn:1},id:"protobuf-decoding-header",command:{id:"",title:"Automatically decoded from raw Protobuf/gRPC data"}}],dispose:()=>{}}},resolveCodeLens:function(e,t,n){return t}}),Gm=e.default}catch(t){if(console.log("Monaco load failed",Tt(t).message),e<=0)throw console.warn("Repeatedly failed to load monaco editor, giving up"),t;return Qm(e-1)}},new((o=void 0)||(o=Promise))((function(e,n){function a(e){try{l(s.next(e))}catch(e){n(e)}}function i(e){try{l(s.throw(e))}catch(e){n(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}l((s=s.apply(t,r||[])).next())}));var t,r,o,s}const Ym=w.observable.map(),Xm=["a:not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");function Zm(e){return m.filter(e.querySelectorAll(Xm),(e=>null!==e.offsetParent))}var eg=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};function tg(e,t,n){return r=>{var o;const s=null===(o=n.current)||void 0===o?void 0:o.editor;if(!s)return;const a=s.getSelection(),i=[];t||i.push({type:"option",label:"Cut",enabled:!!a&&!a.isEmpty(),callback:()=>eg(this,void 0,void 0,(function*(){var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&(yield lu(n),s.executeEdits("clipboard",[{range:t,text:"",forceMoveMarkers:!0}]))}))}),a&&!a.isEmpty()&&i.push({type:"option",label:"Copy",enabled:!!a&&!a.isEmpty(),callback:()=>{var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&lu(n)}}),a&&navigator.clipboard&&i.push({type:"option",label:"Paste",enabled:!t,callback:()=>eg(this,void 0,void 0,(function*(){const e=s.getSelection();if(!e)return;const t=yield navigator.clipboard.readText();s.executeEdits("clipboard",[{range:e,text:t,forceMoveMarkers:!0}])}))}),e.handleContextMenuEvent(r,i)}}var ng=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const rg=Le.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto !important;\n        ":"\n            max-height: 560px;\n        "}
`;let og=class extends ve.Component{constructor(){super(...arguments),this.container=ve.createRef(),this.editor=ve.createRef(),this.onResize=m.throttle((()=>{this.editor.current&&this.editor.current.relayout()}),50,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize),this.contentHeight=0}onContentSizeChange(e){this.contentHeight=Math.min(e.contentHeight,560)}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return ve.createElement(rg,{ref:this.container,expanded:!!this.props.expanded,style:{height:this.contentHeight+"px"},onContextMenu:tg(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},ve.createElement(lg,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor,onContentSizeChange:this.onContentSizeChange})))}};ng([w.action.bound],og.prototype,"onContentSizeChange",null),ng([w.observable],og.prototype,"contentHeight",void 0),og=ng([(0,xe.WQ)("uiStore"),xe.PA],og);const sg=Le.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto !important;\n        ":"\n            height: 100%;\n        "}
`;let ag=class extends ve.Component{constructor(){super(...arguments),this.container=ve.createRef(),this.editor=ve.createRef(),this.onResize=m.throttle((()=>{this.editor.current&&this.editor.current.relayout()}),25,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize)}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return ve.createElement(sg,{ref:this.container,expanded:!!this.props.expanded,onContextMenu:tg(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},ve.createElement(lg,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor})))}};ag=ng([(0,xe.WQ)("uiStore"),xe.PA],ag);const ig=Le((e=>ve.createElement("div",{className:e.className,"aria-label":"Press enter to focus this editor, and use escape to unfocus it later",tabIndex:0,onKeyDown:e=>{const t=e.currentTarget;if(e.target===t){if("Tab"===e.key){if(e.shiftKey)return;{const n=Zm(document.body),r=m.last(t.children),o=n.indexOf(r),s=n[o+1];return s?(s.focus(),void e.preventDefault()):(n[0].focus(),void e.preventDefault())}}if("Enter"===e.key){const n=Zm(t)[0];return void(n&&(n.focus(),e.preventDefault()))}}else if(t.contains(document.activeElement)&&"Escape"===e.key)return void t.focus()}},e.children,ve.createElement("div",{tabIndex:0,onFocus:e=>{e.target===e.currentTarget&&e.currentTarget.parentElement.focus()}}))))`
    height: 100%;
    width: 100%;
`;let lg=class extends ve.Component{constructor(e){super(e),this.monacoEditorLoaded=!!Gm,this.modelUri=void 0,this.registeredSchemaUri=void 0,this.monacoEditorLoaded||Km.catch((()=>Km=Qm(0))).then((0,w.action)((()=>this.monacoEditorLoaded=!0))),(0,w.reaction)((()=>this.props.contentId),(()=>this.resetUIState()))}relayout(){if(this.editor)try{this.editor.layout()}catch(e){return void console.log("Monaco layout error:",e)}}getMarkerController(){var e;return null===(e=this.editor)||void 0===e?void 0:e.getContribution("editor.contrib.markerController")}withoutFocusingEditor(e){if(!this.editor)return;const t=this.editor.focus;this.editor.focus=()=>{},e(),this.editor.focus=t}resetUIState(){return e=this,t=void 0,r=function*(){this.editor&&this.monaco&&(this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),this.relayout(),requestAnimationFrame((()=>{var e;this.editor&&this.monaco&&this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),null===(e=this.getMarkerController())||void 0===e||e.close(!1)})))},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}onEditorDidMount(e,t){this.editor=e,this.monaco=t;const n=e.getModel();this.modelUri=null==n?void 0:n.uri,this.editor.onDidChangeModel((0,w.action)((e=>{var t;this.modelUri=null!==(t=e.newModelUrl)&&void 0!==t?t:void 0}))),this.props.onContentSizeChange&&this.editor.onDidContentSizeChange(this.props.onContentSizeChange),(0,xe.bH)(this,(0,w.reaction)((()=>{var e;return{markers:null!==(e=this.modelUri&&Ym.get(this.modelUri))&&void 0!==e?e:[]}}),(({markers:e})=>{var t;e.length&&(null===(t=this.props.options)||void 0===t?void 0:t.readOnly)&&requestAnimationFrame((()=>{this.withoutFocusingEditor((()=>{this.getMarkerController().showAtMarker(e[0])}))}))}),{equals:w.comparer.structural}))}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{var e;if(!this.editor||!this.monaco)return;const t=this.monaco.languages.json.jsonDefaults.diagnosticsOptions;let n=t.schemas||[];const r=null===(e=this.modelUri)||void 0===e?void 0:e.toString();if(r){const e=this.props.schema,o=m.find(t.schemas||[],(e=>e.uri===r));!e||o&&o.schema===e?e||(n=n.filter((e=>e!==o))):n=n.filter((e=>e!==o)).concat({uri:r,fileMatch:[r],schema:e})}this.registeredSchemaUri&&r!=this.registeredSchemaUri&&(n=n.filter((e=>e.uri!==this.registeredSchemaUri)));const o=Object.assign({},t,{validate:!0,schemas:n});m.isEqual(t,o)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(o),this.registeredSchemaUri=r})))}componentWillUnmount(){if(this.editor&&this.monaco&&this.registeredSchemaUri){const e=this.monaco.languages.json.jsonDefaults.diagnosticsOptions,t=(e.schemas||[]).filter((e=>e.uri!==this.registeredSchemaUri)),n=Object.assign({},e,{schemas:t});m.isMatch(e,n)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(n),this.registeredSchemaUri=void 0}}render(){if(!this.monacoEditorLoaded||!Gm)return ye("Monaco editor failed to load"),null;const e=Object.assign({showFoldingControls:"always",scrollbar:{alwaysConsumeMouseWheel:!1},quickSuggestions:!1,parameterHints:{enabled:!1},codeLens:!0,minimap:{enabled:!1},contextmenu:!1,scrollBeyondLastLine:!1,colorDecorators:!1,renderValidationDecorations:"on",fontSize:16,wordWrap:"on"},this.props.options);return e.readOnly?ve.createElement(Gm,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})):ve.createElement(ig,null,ve.createElement(Gm,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})))}};ng([w.observable],lg.prototype,"monacoEditorLoaded",void 0),ng([w.observable],lg.prototype,"modelUri",void 0),ng([w.action.bound],lg.prototype,"onEditorDidMount",null),lg=ng([xe.PA],lg);var cg=n(76148),dg=n(5373);function ug(e){return e[0].toUpperCase()+e.slice(1)}function pg(e){if((e=>e in vs)(e))return`${e} requests`;switch(e){case"wildcard":case"default-wildcard":return"Any requests";case"ws-wildcard":case"default-ws-wildcard":return"Any WebSocket";case"rtc-wildcard":return"Any WebRTC connection";case"method":return"Sent with HTTP method";case"host":return"For a host";case"simple-path":return"For a URL";case"regex-path":return"For URLs matching";case"query":return"With query parameters including";case"exact-query-string":return"With exact query string";case"header":return"Including headers";case"cookie":return"With cookie";case"raw-body":return"With exact body";case"raw-body-includes":return"With body including";case"form-data":return"With form data";case"json-body":return"With JSON body";case"json-body-matching":return"With JSON body including";case"protocol":return"With protocol";case"port":return"For port";case"hostname":return"For hostname";case"eth-method":return"An Ethereum interaction";case"eth-params":return"With Ethereum parameters matching";case"ipfs-interaction":return"An IPFS interaction";case"ipfs-arg":return"With IPFS argument";case"has-rtc-data-channel":return"Including a data channel";case"has-rtc-video-track":return"Including a video track";case"has-rtc-audio-track":return"Including an audio track";case"has-rtc-media-track":return"Including any media track";case"rtc-page-hostname":return"Sent from a web page on a specific hostname";case"rtc-page-regex":return"Sent from a web page matching a URL regex";case"rtc-user-agent-regex":return"Sent by a user agent matching a regex";case"am-i-using":case"callback":case"multipart-form-data":case"raw-body-regexp":case"regex-url":throw new Error(`${e} handler should not be used directly`);default:throw new St(e)}}function hg(e){switch(e){case"simple":return"fixed response";case"file":return"file response";case"forward-to-host":case"ws-forward-to-host":return"forwarding";case"passthrough":case"ws-passthrough":return"passthrough";case"req-res-transformer":return"transform";case"request-breakpoint":case"response-breakpoint":case"request-and-response-breakpoint":return"breakpoint";case"timeout":return"timeout";case"close-connection":return"connection close";case"reset-connection":return"connection reset";case"ws-reject":return"reject";case"ws-listen":return"listen";case"ws-echo":return"echo";case"eth-call-result":case"eth-number-result":case"eth-hash-result":case"eth-receipt-result":case"eth-block-result":case"ipfs-cat-text":case"ipfs-add-result":case"ipns-resolve-result":case"ipns-publish-result":case"ipfs-pins-result":case"ipfs-pin-ls-result":return"fixed result";case"eth-error":return"error";case"ipfs-cat-file":return"file";case"wait-for-duration":case"wait-for-rtc-data-channel":case"wait-for-rtc-track":case"wait-for-rtc-media":case"wait-for-rtc-message":case"create-rtc-data-channel":case"send-rtc-data-message":case"close-rtc-connection":case"echo-rtc":case"rtc-dynamic-proxy":return"WebRTC";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":throw new Error(`${e} handler should not be used directly`);default:throw new St(e)}}function mg(e){const{matchers:t}=e;return 0===t.length?"Never":1===t.length?t[0].explain():2===t.length?`${t[0].explain()} ${t[1].explain()}`:t[0].explain()+" "+t.slice(1,-1).map((e=>e.explain())).join(", ")+(t.length>3?", and ":", ")+t.slice(-1)[0].explain()}function gg(e){if("steps"in e){const t=e.steps.map((e=>e.explain()));return ug(t.length>1?t.slice(0,-1).join(", ")+" then "+t.slice(-1)[0]:t[0])}return ug(e.handler.explain())}const fg=Le((e=>ve.createElement("div",{className:e.className,title:e.status?e.message||void 0:"Waiting for response..."},"aborted"===e.status?ve.createElement(Ro,{icon:["fas","ban"]}):"WS:open"===e.status?ve.createElement(ve.Fragment,null,"WS ",ve.createElement(Ro,{icon:["fas","spinner"],spin:!0})):"WS:closed"===e.status?"WS":e.status||ve.createElement(Ro,{icon:["fas","spinner"],spin:!0}))))`
    font-weight: bold;

    display: flex;
    align-items: center;

    .fa-spinner {
        padding: 6px;
    }

    .fa-ban {
        padding: 5px;
    }

    color: ${e=>jn("WS:open"===e.status||"WS:closed"===e.status?void 0:e.status,e.theme)};
`;var yg=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const vg=(0,xe.PA)((e=>ve.createElement(lp,{icon:["far","trash-alt"],title:`Clear all (${nu}+Shift+Delete)`,disabled:e.disabled,onClick:e.onClear}))),bg=(0,xe.WQ)("accountStore")((0,xe.PA)((e=>{const{isPaidUser:t}=e.accountStore;return ve.createElement(lp,{icon:["fas","save"],title:t?"Export these exchanges as a HAR file":"With Pro: Export requests & responses as a HAR file, to save for later or share with others",disabled:!t||0===e.events.length,onClick:()=>yg(void 0,void 0,void 0,(function*(){const t=JSON.stringify(yield sd(e.events));au(`HTTPToolkit_${Ke.format(Date.now(),"YYYY-MM-DD_HH-mm")}.har`,"application/har+json;charset=utf-8",t)}))})}))),xg=(0,xe.WQ)("eventsStore","accountStore")((0,xe.PA)((e=>{const{isPaidUser:t}=e.accountStore;return ve.createElement(lp,{icon:["fas","folder-open"],title:t?"Import exchanges from a HAR file":"With Pro: Import requests & responses from HAR files, to examine past recordings or data from other tools",disabled:!t,onClick:()=>yg(void 0,void 0,void 0,(function*(){const t=yield iu("text",[".har","application/har","application/har+json"]);if(t){let n;try{n=JSON.parse(t),yield e.eventsStore.loadFromHar(n)}catch(e){ye(e),"HARError"===e.name&&e.errors?alert(ol`
                                HAR file is not valid.

                                ${e.errors.map((e=>Ei(n,e))).join("\n")}
                            `):alert(ol`
                                Could not parse HAR file.

                                ${e.message||e}
                            `)}}}))})}))),wg=(0,xe.WQ)("eventsStore")((0,xe.PA)((e=>{const{isPaused:t,togglePause:n}=e.eventsStore;return ve.createElement(lp,{icon:["fas",t?"play":"pause"],title:(t?"Resume":"Pause")+" collecting intercepted exchanges",onClick:n})}))),Eg=e=>ve.createElement(lp,{icon:["fas","level-down-alt"],title:"Scroll to the bottom of the list",onClick:e.onScrollToEnd});var Cg=n(65540);function Tg(e,t){let n=t.trim(),r=[];for(;n.length>0;){const t=e.map((e=>({filterClass:e,match:Tl(e.filterSyntax,n,0)}))).filter((e=>!!e.match&&"full"===e.match.type))[0];if(!t)break;const o=t.match.fullyConsumed,s=n.slice(0,o);n=n.slice(o).trimLeft(),r.unshift(new t.filterClass(s))}return[new Vl(n),...m.flatten(r)]}function Sg(e,t){const n=Pl(e[0].filter,t);return"full"===t.matchType?[new Vl(""),...m.flatten([new t.filterClass(n.trim())]),...e.slice(1)]:[new Vl(n),...e.slice(1)]}const Pg=Le(Ro).attrs((()=>({icon:["fas","times"]})))`
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    transition: right 0.1s;
    cursor: pointer;

    padding: 6px;
    background-image: radial-gradient(
        ${e=>Ee.B3(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,kg=Le.span`
    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px;
`,Rg=Le.div`
    flex-shrink: 0;

    display: flex;
    align-items: center;

    position: relative;
    overflow: hidden;

    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;

    margin-right: 5px;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};

    border: 1px solid ${e=>e.theme.containerWatermark};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
    border-radius: 3px;

    cursor: pointer;

    &:hover, &:focus-within {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
    }

    &:hover {
        > ${Pg} {
            right: 0;
        }
    }

    &:focus-within {
        outline: none;
        border-color: ${e=>e.theme.popColor};
    }

    &.is-selected {
        background-color: ${e=>e.theme.mainLowlightBackground};
        box-shadow: inset 0 0 12px -8px #000;
    }

    & ::selection {
        background-color: transparent;
    }
`;function Og(e){3===e.detail&&e.preventDefault()}const Hg=ve.forwardRef(((e,t)=>ve.createElement(Rg,{ref:t,className:"filter-tag"+(e.isSelected?" is-selected":""),tabIndex:-1,onKeyDown:e.onKeyDown,onMouseDown:Og,title:`Match ${e.filter.filterDescription}`},ve.createElement(kg,null,e.filter.toString()),ve.createElement(Pg,{onClick:e.onDelete}))));var Ag=n(62243);const qg=Le.span`
    font-weight: bold;
`,$g=Le.span`
    opacity: 0.7;
`,Ig=Le.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};
    color: ${e=>e.isHighlighted?e.theme.highlightColor:e.theme.mainColor};

    ${e=>e.isHighlighted&&Ue`
        ${$g} {
            opacity: 1;
        }
    `}

    width: 100%;
    cursor: pointer;

    font-size: ${e=>e.theme.textSize};
`,jg=Le.p`
    padding: 8px;
`,Dg=Le(jg)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre; /* Nowrap + show spaces accurately */

    ${e=>e.isHighlighted&&Ue`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
    `}

    svg {
        margin-left: auto;
    }
`,Mg=Le(lp).attrs((()=>({icon:["far","trash-alt"]})))`
    float: right;
    padding: 4px;
    margin: -4px -4px;
`,Bg=Le(jg)`
    background-color: ${e=>e.theme.mainLowlightBackground};
    color: ${e=>e.theme.mainColor};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: italic;
`,Fg=e=>{const{suggestion:t,query:n,isHighlighted:r,onDelete:o}=e,s=function(e,...t){let n="";const r=Math.min(e.length,...t.map((e=>e.length)));for(let o=0;o<r;o++){const r=e[o];if(!t.every((e=>e[o]===r)))break;n+=r}return n}(n.slice(t.index),t.value,t.showAs).length,a=n.slice(0,t.index+s),i=t.showAs.slice(s),l=`Match ${t.filterClass.filterDescription(Pl(n,t),"template"===t.matchType)}`;return ve.createElement(Ig,{isHighlighted:r},ve.createElement(Dg,{isHighlighted:r},ve.createElement(qg,null,a),ve.createElement($g,null,i),o&&ve.createElement(Mg,{title:"Delete this custom filter shortcut",onClick:e=>{o(),e.preventDefault(),e.stopPropagation()}})),r&&ve.createElement(Bg,{title:l},l))},Ng=e=>"saveFilters"in e&&!0===e.saveFilters,Lg=Le.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};

    :not(:first-child) {
        border-top: 1px solid ${e=>e.theme.containerBorder};
    }

    ${e=>e.isHighlighted&&Ue`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,${e=>2*e.theme.boxShadowAlpha});
        font-weight: bold;
    `}

    width: 100%;
    cursor: pointer;

    padding: 8px;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg {
        margin-right: 5px;
    }
`,Ug=e=>ve.createElement(Lg,{isHighlighted:e.isHighlighted},e.isPaidUser?ve.createElement(ve.Fragment,null,ve.createElement(Ro,{icon:["fas","save"]}),"Save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"..."):ve.createElement(ve.Fragment,null,ve.createElement(Ro,{icon:["far","star"]}),"Get Pro to save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"...")),Wg=Le.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: 3px 0 4px 1px;
    border: none;
    outline: none;

    background-color: ${e=>e.theme.inputBackground};
    color: ${e=>e.theme.inputColor};
    font-size: ${e=>e.theme.textSize};

    ::placeholder {
        /*
        For some reason, I think related to react-split-pane setting 'user-select: text',
        the placeholder gets selected by selection.selectAllChildren. This stops that:
        */
        user-select: none;
    }
`,zg=Le.div`
    position: absolute;
    bottom: calc(100% + 10px);
    left: 0;
    right: 0;
    z-index: 1;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};

    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    border-radius: 4px;
    .react-autosuggest__suggestion:first-child > * {
        border-radius: 4px 4px 0 0;
    }
    .react-autosuggest__suggestion:last-child > *, .react-autosuggest__suggestion:last-child > * > * {
        border-radius: 0 0 4px 4px;
    }
    .react-autosuggest__suggestion:first-child:last-child > * {
        border-radius: 4px;
    }

    font-size: ${e=>e.theme.textSize};

    &:empty {
        display: none;
    }
`,_g=e=>ve.createElement(Wg,Object.assign({},e)),Vg=e=>ve.createElement(zg,Object.assign({},e.containerProps),e.children),Jg=e=>{var t,n;const r=null===(n=null===(t=e.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.parentElement,o=null==r?void 0:r.querySelector("[role='listbox']");return((null==o?void 0:o.children.length)||0)>0},Gg=e=>{const t=ve.useRef(null),n=ve.useMemo((()=>{return t=e.availableFilters,n=e.value,r=e.suggestionContext,Sl(t.map((e=>({key:e,syntax:e.filterSyntax}))),n,0,{context:r}).map((({key:e,suggestion:t})=>Object.assign({filterClass:e},t)));var t,n,r}),[e.availableFilters,e.value,e.suggestionContext]),r=ve.useCallback((n=>{n.suggestion&&!Ng(n.suggestion)&&Jg(t)?"full"===n.suggestion.matchType?e.onFiltersConsidered(Sg(e.activeFilters,n.suggestion)):e.onFiltersConsidered([new Vl(""),...e.activeFilters.slice(1)]):e.onFiltersConsidered(void 0)}),[e.onFiltersConsidered,e.activeFilters,t]);let o;const s=ve.useCallback(((n,r)=>{if(Jg(t))if(Ng(r.suggestion)){if(!e.value)return;e.isPaidUser?e.onFiltersSaved(e.activeFilters.slice(1),e.value):e.getPro("save-filter")}else o=Sg(e.activeFilters,r.suggestion),o.length!==e.activeFilters.length&&st({category:"Filters",action:"Create",value:r.suggestion.filterClass.filterName}),e.onFiltersChanged(o)}),[o,e.value,e.isPaidUser,e.getPro,e.activeFilters,e.onFiltersChanged]),a=ve.useCallback((()=>{const n=t.current;o&&o.length===e.activeFilters.length&&(n.justSelectedSuggestion=!1,n.revealSuggestions(),o=void 0),n.resetHighlightedSuggestion(),r({suggestion:null})}),[o,s,e.activeFilters.length,t]),i=ve.useCallback(((e,t)=>e.trim().length>0||!["input-focused","input-changed","escape-pressed"].includes(t)),[]),l=ve.useCallback((t=>Ng(t)?"":Pl(e.value,t)),[e.value]),c=ve.useCallback((t=>{t.target.value!==e.value&&e.onChange(t)}),[e.onChange,e.value]),d=ve.useMemo((()=>({type:"text",value:e.value,onChange:c,placeholder:e.placeholder,"aria-label":e.label,ref:e.searchInputRef})),[e.value,c,e.placeholder,e.searchInputRef]),u=e.activeFilters.length>1&&e.value.length>=1&&!e.value.includes(" ")&&1!==m.uniq(n.map((e=>e.filterClass))).length,p=!(u&&0===n.length),h=ve.useMemo((()=>u?n.concat({saveFilters:!0,isPaidUser:e.isPaidUser,filterCount:e.activeFilters.length-1}):n),[u,e.isPaidUser,n,e.activeFilters]),g=ve.useMemo((()=>{return t=e.onCustomFilterDeleted,n=e.value,(e,r)=>{if(Ng(e))return ve.createElement(Ug,Object.assign({},e,r,{query:n}));const{filterClass:o}=e,s=o.isCustomFilter?()=>t(o):void 0;return ve.createElement(Fg,Object.assign({suggestion:e},r,{query:n,onDelete:s}))};var t,n}),[e.onCustomFilterDeleted,e.value]);return ve.createElement(Ag,{ref:t,multiSection:!1,suggestions:h,highlightFirstSuggestion:p,shouldRenderSuggestions:i,onSuggestionsFetchRequested:m.noop,onSuggestionsClearRequested:a,onSuggestionHighlighted:r,onSuggestionSelected:s,getSuggestionValue:l,renderSuggestion:g,renderInputComponent:_g,renderSuggestionsContainer:Vg,inputProps:d})};var Kg=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Qg="30px",Yg=Le.div`
    position: relative;

    &:focus-within {
        border-color: ${e=>e.theme.highlightColor};
    }

    flex-grow: 1;
    min-width: 0; /* Don't let flexbox force this to expand given long tags */
    padding-right: ${e=>e.hasContents?Qg:"0"};

    border-radius: 4px;

    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, ${e=>e.theme.boxShadowAlpha/2});
    background-color: ${e=>e.theme.inputBackground};
    color: ${e=>e.theme.highlightColor};

    font-size: ${e=>e.theme.textSize};

    display: flex;

    &:hover, &:focus-within {
        flex-wrap: wrap;
    }
    &:not(:hover):not(:focus-within) {
        overflow: hidden;
    }

    /* Add a layer to act as a button background over non-wrapping content */
    &:after {
        content: "";
        position: absolute;
        display: block;

        z-index: 5;

        top: 4px;
        bottom: 4px;

        right: 0px;
        width: 36px;
        background: linear-gradient(
            to right,
            transparent 0%,
            ${e=>Ee.B3(e.theme.inputBackground,.9)} 25%
        );
    }

    .react-autosuggest__container {
        flex-grow: 1;
        flex-basis: 100px; /* Shrink down to this, then wrap */
    }

    padding-bottom: 4px;
    > div {
        margin: 4px 0 0 4px;
    }
`,Xg=Ue`
    width: ${Qg};
    padding: 4px 10px;
    box-sizing: border-box;

    /* This isn't needed for button, but is for buttonlink - unclear why but it works */
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    /* Appears in front of the :after background layer */
    z-index: 10;
`,Zg=Le(lp)`${Xg}`,ef=Le(cp)`
    ${Xg}
    opacity: 0.8;
`;let tf=class extends ve.Component{constructor(){super(...arguments),this.boxRef=ve.createRef(),this.tagRefs=new Map,this.selectedFilters=[],this.undoer=(0,Cg.M)((()=>this.activeFilters),(e=>this.onFiltersChanged(e))),this.updateSelectedTags=(0,w.action)((()=>{this.selectedFilters=this.getSelectedFilters()})),this.onKeyDown=e=>{var t;const n=this.boxRef.current;if(!n)return;const{onFiltersChanged:r,activeFilters:o}=this,s=(e=>{const t=document.getSelection();return!t||t.isCollapsed?[]:[...Array.from(e.querySelectorAll(".filter-tag")),e.querySelector("input")].filter((e=>t.containsNode(e,!0)))})(n);if(!n.contains(document.activeElement))return void(s&&document.getSelection().removeAllRanges());if("a"===e.key&&ru(e))return this.selectAllFilterTags(),void e.preventDefault();if("z"===e.key.toLowerCase()&&ru(e))return e.shiftKey?this.undoer.redo():this.undoer.undo(),void e.preventDefault();const a=Array.from(n.querySelectorAll(".filter-tag")),i=n.querySelector("input"),l=[...a,i],c=document.activeElement,d=l.indexOf(c);if(c!==i&&"v"===e.key&&ru(e)){i.focus();const e=i.value.length;i.setSelectionRange(e,e)}else{var u,p;if(-1!==d)if(s.length>0){if("ArrowLeft"===e.key||"ArrowRight"===e.key){const t=s["ArrowLeft"===e.key?0:s.length-1];if(document.getSelection().removeAllRanges(),t.focus(),t===i){const t="ArrowLeft"===e.key?0:i.value.length;i.setSelectionRange(t,t)}e.preventDefault()}else if("Delete"===e.key||"Backspace"===e.key){const t=l.indexOf(s[s.length-1]);this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),l.length-t<3&&(i.focus(),i.setSelectionRange(0,0)),e.preventDefault()}else if("Escape"===e.key){document.getSelection().removeAllRanges(),i.focus();const t=i.value.length;i.setSelectionRange(t,t),e.preventDefault()}else if(1===[...e.key].length&&!e.ctrlKey&&!e.altKey&&!e.metaKey){const e=i.selectionStart||i.value.length;this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),i.setSelectionRange(e,e),i.focus()}}else if(i.selectionStart===i.selectionEnd){const n=null!==(t=i.selectionStart)&&void 0!==t?t:-1,s=c===i;if("Backspace"===e.key||"Delete"===e.key){let t=s?n<=0&&"Backspace"===e.key?1:null:l.length-1-d;t&&(r((u=o,0===(p=t)||0===u.length?u:[u[0],...u.slice(1,p),...u.slice(p+1)])),1===t&&i.focus(),e.preventDefault())}else if("ArrowLeft"===e.key&&d>0&&n<=0)l[d-1].focus(),e.preventDefault();else if("ArrowRight"===e.key&&d<l.length-1){const t=l[d+1];t.focus(),t===i&&i.setSelectionRange(0,0),e.preventDefault()}}}},this.onCopy=e=>{const{activeFilters:t}=this,n=m.orderBy(this.getSelectedFilters(),(e=>t.indexOf(e)),["desc"]);n.length>0&&(lu(n.map((e=>e.serialize())).join(" ")),e.preventDefault())},this.onCut=e=>{this.onCopy(e),this.deleteSelectedFilters()},this.onPaste=e=>{var t,n;const r=this.boxRef.current,o=null==r?void 0:r.querySelector("input");if(!r||!o)return;e.preventDefault();const{selectedFilters:s,activeFilters:a,onFiltersChanged:i,props:{availableFilters:l}}=this,c=Tg(l,e.clipboardData.getData("text")),d=c[0].filter,u=null!==(t=o.selectionStart)&&void 0!==t?t:0,p=null!==(n=o.selectionEnd)&&void 0!==n?n:0,h=a[0].filter,m=s.includes(a[0])?d:h.slice(0,u)+d+h.slice(p);i([new Vl(m),...c.slice(1),...a.slice(1).filter((e=>!s.includes(e)))]),requestAnimationFrame((()=>{const e=u+d.length;o.setSelectionRange(e,e),o.focus()}))},this.onInputChanged=e=>{const{onFiltersChanged:t,activeFilters:n}=this;t([new Vl(e.target.value),...n.slice(1)])},this.onFiltersCleared=()=>{var e;this.onFiltersChanged(_l());const t=null===(e=this.boxRef.current)||void 0===e?void 0:e.querySelector("input[type=text]");null==t||t.focus()}}get activeFilters(){return this.props.uiStore.activeFilterSet}onFiltersChanged(e){this.props.uiStore.activeFilterSet=e}get availableFilters(){const e=this.props.availableFilters,t=Object.entries(this.props.uiStore.customFilters).map((([t,n])=>function(e,t,n){const r=Tg(n,t),o=""===r[0].filter?r.slice(1):r;return Object.assign((function(){return o}),{filterSyntax:[new Ml(e)],filterDescription:()=>t,filterName:e,isCustomFilter:!0})}(t,n,e)));return e.concat(t)}getSelectedFilters(){const e=document.getSelection();if(!e||e.isCollapsed)return[];const{boxRef:t,tagRefs:n,activeFilters:r}=this,o=t.current;o&&n.set(o.querySelector("input"),r[0]);const s=[];return Array.from(n.entries()).forEach((([t,r])=>{document.contains(t)?e.containsNode(t,!0)&&s.push(r):n.delete(t)})),s}componentDidMount(){this.updateSelectedTags(),document.addEventListener("selectionchange",this.updateSelectedTags),(0,xe.bH)(this,(()=>{document.removeEventListener("selectionchange",this.updateSelectedTags)}))}selectAllFilterTags(){const e=this.boxRef.current;e&&window.getSelection().setBaseAndExtent(e,0,e.querySelector("[role=listbox]"),0)}deleteSelectedFilters(){const{selectedFilters:e,onFiltersChanged:t,activeFilters:n}=this,r=e.includes(n[0])?"":n[0].filter||"";t([new Vl(r),...n.filter(((t,n)=>n>0&&!e.includes(t)))])}onFiltersSaved(e,t){const n=this.props.uiStore;n.customFilters[t]=e.map((e=>e.serialize())).reverse().join(" "),n.activeFilterSet=[new Vl(""),...n.activeFilterSet.slice(1)]}onCustomFilterDeleted(e){delete this.props.uiStore.customFilters[e.filterName]}render(){var e;const{boxRef:t,onCopy:n,onCut:r,onPaste:o,onKeyDown:s,onInputChanged:a,onFiltersCleared:i,onFiltersChanged:l,onFiltersSaved:c,onCustomFilterDeleted:d,tagRefs:u,selectedFilters:p,activeFilters:h,availableFilters:m,props:{accountStore:g,placeholder:f,searchInputRef:y,filterSuggestionContext:v,onFiltersConsidered:b}}=this,[x,...w]=h,E=null!==(e=null==x?void 0:x.filter)&&void 0!==e?e:"",C=!!E||!!w.length;return ve.createElement(Yg,{ref:t,hasContents:C,onCopy:n,onCut:r,onPaste:o,onKeyDown:s},w.reverse().map(((e,t)=>ve.createElement(Hg,{key:t,filter:e,isSelected:p.includes(e),onDelete:()=>{return l((n=e,[(t=h)[0],...t.slice(1).filter(((e,t)=>e!==n))]));var t,n},ref:t=>{t&&u.set(t,e)}}))),ve.createElement(Gg,{value:E,onChange:a,label:"Enter a string like 'hello' or a structured filter like hostname=google.com to filter the requests in the list",placeholder:0===w.length?f:"...",searchInputRef:y,onFiltersConsidered:b,onFiltersChanged:l,onFiltersSaved:c,onCustomFilterDeleted:d,activeFilters:h,availableFilters:m,suggestionContext:v,isPaidUser:g.isPaidUser,getPro:g.getPro}),C?ve.createElement(Zg,{title:"Clear all search filters",icon:["fas","times"],onClick:i}):ve.createElement(ef,{icon:["fas","question"],title:"Open filtering docs",href:"https://httptoolkit.com/docs/reference/view-page/#filtering-intercepted-traffic",target:"_blank",rel:"noreferrer noopener"}))}};Kg([w.observable.struct],tf.prototype,"selectedFilters",void 0),Kg([w.computed],tf.prototype,"activeFilters",null),Kg([w.action.bound],tf.prototype,"onFiltersChanged",null),Kg([w.computed],tf.prototype,"availableFilters",null),Kg([w.action.bound],tf.prototype,"onFiltersSaved",null),Kg([w.action.bound],tf.prototype,"onCustomFilterDeleted",null),tf=Kg([(0,xe.WQ)("uiStore"),(0,xe.WQ)("accountStore"),xe.PA],tf);const nf=Le((0,xe.PA)((e=>ve.createElement("div",{className:e.className},ve.createElement("span",{className:"count"},e.filteredEventCount,e.eventCount!==e.filteredEventCount&&` / ${e.eventCount}`),ve.createElement("span",{className:"label"},"requests")))))`
    margin-left: auto;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .count {
        font-size: 20px;
        font-weight: bold;
        white-space: nowrap;
    }

    .label {
        margin-top: -4px;
        font-size: ${e=>e.theme.textSize};
        opacity: 0.8;
        font-weight: lighter;
    }
`,rf=Le.div`
    display: flex;
`,of=Le((0,xe.PA)((e=>ve.createElement("div",{className:e.className},ve.createElement(tf,{onFiltersConsidered:e.onFiltersConsidered,availableFilters:kc,filterSuggestionContext:e.allEvents,placeholder:"Filter by method, host, headers, status...",searchInputRef:e.searchInputRef}),ve.createElement(nf,{filteredEventCount:e.filteredCount[0],eventCount:e.filteredCount[1]}),ve.createElement(rf,null,ve.createElement(wg,null),ve.createElement(Eg,{onScrollToEnd:e.onScrollToEnd}),ve.createElement(bg,{events:e.filteredEvents}),ve.createElement(xg,null),ve.createElement(vg,{disabled:0===e.allEvents.length,onClear:e.onClear}))))))`
    order: 1;

    min-height: ${38}px;
    width: 100%;
    padding-left: 2px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;
    align-items: center;
    justify-content: space-between;
`;var sf=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const af=Le(Jm)`
    position: absolute;
    top: ${38}px;
    bottom: 0;
    height: auto;

    line-height: 1.3;
`,lf=Le.div`
    display: block;
    flex-grow: 1;
    position: relative;
    width: 100%;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};

    &::after { /* Insert shadow over table contents */
        content: '';
        position: absolute;
        top: ${38}px;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 30px inset;
        pointer-events: none;
    }
`,cf=Le.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 3px 0;
`,df=Le(function(e,...t){return n=>ve.createElement(e,Object.assign({},m.omit(n,t)))}(Ro,"pinned")).attrs((e=>({icon:["fas","thumbtack"],title:e.pinned?"This exchange is pinned, and won't be deleted by default":""})))`
    font-size: 90%;
    background-color: ${e=>e.theme.containerBackground};

    /* Without this, 0 width pins create a large & invisible but still clickable icon */
    overflow: hidden;

    transition: width 0.1s, padding 0.1s, margin 0.1s;

    ${e=>e.pinned?"\n            width: auto;\n            padding: 8px 7px;\n            && { margin-right: -3px; }\n        ":"\n            padding: 8px 0;\n            width: 0 !important;\n            margin: 0 !important;\n\n            > path {\n                display: none;\n            }\n        "}
`,uf=Le(cf)`
    transition: color 0.2s;
    color: ${e=>In(e.category)};

    background-color: currentColor;

    flex-basis: 5px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    padding: 0;

    border-left: 5px solid ${e=>e.theme.containerBackground};
`,pf=Le.div`
    flex-basis: 10px;
    flex-shrink: 0;
`,hf=Le(cf)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 50px;":"flex-basis: 71px;"}

    flex-shrink: 0;
    flex-grow: 0;
`,mf=Le(cf)`
    flex-basis: 45px;
    flex-shrink: 0;
    flex-grow: 0;
`,gf=Le(cf)`
    flex-basis: 49px;
    flex-shrink: 0;
    flex-grow: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`,ff=Le(cf)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;
`,yf=Le(cf)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,vf=Le(cf)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 109px;":"flex-basis: 130px;"}

    margin-right: 6px !important;

    flex-shrink: 0;
    flex-grow: 0;
`,bf=Le(cf)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;

    > svg {
        padding-right: 0; /* Right, not left - it's rotated */
    }
`,xf=Le(cf)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,wf=Le(xf)`
    text-align: center;
`,Ef=Le(cf)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,Cf=Le.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    user-select: none;
    cursor: pointer;

    &.selected {
        background-color: ${e=>e.theme.highlightBackground};
        font-weight: bold;

        color: ${e=>e.theme.highlightColor};
        fill: ${e=>e.theme.highlightColor};
        * {
            /* Override status etc colours to ensure contrast & give row max visibility */
            color: ${e=>e.theme.highlightColor};
            fill: ${e=>e.theme.highlightColor};
        }
    }

    &:focus {
        outline: thin dotted ${e=>e.theme.popColor};
    }
`,Tf=Le(Cf)`
    background-color: ${e=>e.theme.mainBackground};

    border-width: 2px 0;
    border-style: solid;
    border-color: transparent;
    background-clip: padding-box;
    box-sizing: border-box;

    &:hover ${uf}, &.selected ${uf} {
        border-color: currentColor;
    }

    > * {
        margin-right: 10px;
    }
`,Sf=Le(Cf)`
    height: 28px !important; /* Important required to override react-window's style attr */
    margin: 2px 0;

    font-style: italic;
    justify-content: center;
    text-align: center;

    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    &.selected {
        opacity: 1;
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    }
`,Pf=Le.div`
    height: 38px;
    overflow: hidden;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;

    border-bottom: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 0 30px rgba(0,0,0,0.2);

    padding-right: 18px;
    box-sizing: border-box;

    > div[role=columnheader] {
        padding: 5px 0;
        margin-right: 10px;
        min-width: 0px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`,kf=(0,xe.PA)((e=>{var t;const{index:n,style:r}=e,{events:o,selectedEvent:s,contextMenuBuilder:a}=e.data,i=o[n],l=s===i;if(i.isTlsFailure()||i.isTlsTunnel())return ve.createElement($f,{index:n,isSelected:l,style:r,tlsEvent:i});if(i.isHttp())return(null===(t=i.api)||void 0===t?void 0:t.isBuiltInApi)&&i.api.matchedOperation()?ve.createElement(qf,{index:n,isSelected:l,style:r,exchange:i,contextMenuBuilder:a}):ve.createElement(Rf,{index:n,isSelected:l,style:r,exchange:i,contextMenuBuilder:a});if(i.isRTCConnection())return ve.createElement(Hf,{index:n,isSelected:l,style:r,event:i});if(i.isRTCDataChannel()||i.isRTCMediaTrack())return ve.createElement(Af,{index:n,isSelected:l,style:r,event:i});throw new St(i)})),Rf=(0,xe.WQ)("uiStore")((0,xe.PA)((({index:e,isSelected:t,style:n,exchange:r,contextMenuBuilder:o})=>{const{request:s,response:a,pinned:i,category:l}=r;return ve.createElement(Tf,{role:"row","aria-label":`${m.startCase(r.category)} ${s.method} request ${"aborted"===a||r.isWebSocket()?"":r.isBreakpointed?"waiting at a breakpoint":a?`with a ${a.statusCode} response`:"waiting for a response"} sent to ${s.parsedUrl.host+s.parsedUrl.pathname} by ${s.source.summary}`,"aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,onContextMenu:o.getContextMenuCallback(r),className:t?"selected":"",style:n},ve.createElement(df,{"aria-label":i?"Pinned":void 0,pinned:i}),ve.createElement(uf,{role:"cell",category:l,title:qn(l)}),ve.createElement(hf,{role:"cell",pinned:i},s.method),ve.createElement(mf,{role:"cell"},"aborted"===a?ve.createElement(fg,{status:"aborted"}):r.isBreakpointed?ve.createElement(Ao,{title:"Breakpointed, waiting to be resumed"}):r.isWebSocket()&&101===(null==a?void 0:a.statusCode)?ve.createElement(fg,{status:r.closeState?"WS:closed":"WS:open",message:(r.closeState?"A closed":"An open")+" WebSocket connection"}):ve.createElement(fg,{status:null==a?void 0:a.statusCode,message:null==a?void 0:a.statusMessage})),ve.createElement(gf,{role:"cell"},ve.createElement(Ro,Object.assign({title:s.source.summary},s.source.icon,{fixedWidth:!0})),r.matchedRule&&r.matchedRule.handlerStepTypes.some((e=>"passthrough"!==e&&"ws-passthrough"!==e&&"rtc-dynamic-proxy"!==e))&&ve.createElement(To,{icon:"Pencil",alt:`Handled by ${1===r.matchedRule.handlerStepTypes.length?hg(r.matchedRule.handlerStepTypes[0]):"multi-step"} rule`,size:"20px",color:In("mutative")})),ve.createElement(ff,{role:"cell",title:s.parsedUrl.host},s.parsedUrl.host),ve.createElement(yf,{role:"cell",title:s.parsedUrl.pathname+s.parsedUrl.search},s.parsedUrl.pathname+s.parsedUrl.search))}))),Of=Le(Ro).attrs((()=>({icon:["fas","spinner"],spin:!0,title:"Connected"})))`
    margin: 0 5px 0 0;
`,Hf=(0,xe.PA)((({index:e,isSelected:t,style:n,event:r})=>{var o;const{category:s,pinned:a}=r;return ve.createElement(Tf,{role:"row","aria-label":`${r.closeState?"Closed":"Open"} RTC connection from ${r.clientURL} to ${null!==(o=r.remoteURL)&&void 0!==o?o:"an unknown peer"} opened by ${r.source.summary}`,"aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,className:t?"selected":"",style:n},ve.createElement(df,{pinned:a}),ve.createElement(uf,{role:"cell",category:s,title:qn(s)}),ve.createElement(vf,{role:"cell"},!r.closeState&&ve.createElement(Of,null)," WebRTC"),ve.createElement(gf,{role:"cell",title:r.source.summary},ve.createElement(Ro,Object.assign({},r.source.icon,{fixedWidth:!0}))),ve.createElement(wf,{role:"cell"},r.clientURL," ",ve.createElement($o,{direction:"right"})," ",r.remoteURL||"?"))})),Af=(0,xe.PA)((({index:e,isSelected:t,style:n,event:r})=>{const{category:o,pinned:s}=r;return ve.createElement(Tf,{role:"row","aria-label":`${r.closeState?"Closed":"Open"} RTC ${r.isRTCDataChannel()?"data":"media"} stream to ${r.rtcConnection.remoteURL} opened by ${r.rtcConnection.source.summary} ${r.isRTCDataChannel()?`called ${r.label}${r.protocol?` (${r.protocol})`:""} with ${r.messages.length} message${1!==r.messages.length?"s":""}`:`for ${r.direction} ${r.type} with ${Ut(r.totalBytesSent)} sent and ${Ut(r.totalBytesReceived)} received`}`,"aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,className:t?"selected":"",style:n},ve.createElement(df,{pinned:s}),ve.createElement(uf,{role:"cell",category:o,title:qn(o)}),ve.createElement(vf,{role:"cell"},!r.closeState&&ve.createElement(Of,null)," WebRTC ",r.isRTCDataChannel()?"Data":"Media"),ve.createElement(gf,{role:"cell",title:r.rtcConnection.source.summary},ve.createElement(Ro,Object.assign({},r.rtcConnection.source.icon,{fixedWidth:!0}))),ve.createElement(bf,{role:"cell"},ve.createElement($o,{direction:"right"})," ",r.rtcConnection.remoteURL),ve.createElement(xf,{role:"cell"},r.isRTCDataChannel()?ve.createElement(ve.Fragment,null,r.label," ",ve.createElement("em",null,"(",r.protocol?`${r.protocol} - `:"",r.messages.length," message",1!==r.messages.length?"s":"",")")):ve.createElement(ve.Fragment,null,r.direction," ",r.type," ",ve.createElement("em",null,Ut(r.totalBytesSent)," sent, ",Ut(r.totalBytesReceived)," received"))))})),qf=(0,xe.PA)((e=>{const{request:t,pinned:n,category:r}=e.exchange,o=e.exchange.api,s=m.startCase(o.operation.name.replace("eth_","")),a=o.request.parameters.filter((e=>void 0!==e.value)).map((e=>`${e.name}=${JSON.stringify(e.value)}`)).join(", ");return ve.createElement(Tf,{role:"row","aria-label":`${m.startCase(r)} ${o.service.shortName} ${s}${a?` with ${a}`:""} sent by ${t.source.summary}`,"aria-rowindex":e.index+1,"data-event-id":e.exchange.id,tabIndex:e.isSelected?0:-1,onContextMenu:e.contextMenuBuilder.getContextMenuCallback(e.exchange),className:e.isSelected?"selected":"",style:e.style},ve.createElement(df,{pinned:n}),ve.createElement(uf,{role:"cell",category:r,title:qn(r)}),ve.createElement(vf,{role:"cell"},o.service.shortName,": ",s),ve.createElement(gf,{role:"cell",title:t.source.summary},ve.createElement(Ro,Object.assign({},t.source.icon,{fixedWidth:!0}))),ve.createElement(Ef,{role:"cell"},a))})),$f=(0,xe.PA)((e=>{const{tlsEvent:t}=e,n=t.isTlsTunnel()?"Tunnelled TLS ":{closed:"Aborted ",reset:"Aborted ",unknown:"Aborted ","cert-rejected":"Certificate rejected for ","no-shared-cipher":"HTTPS setup failed for "}[t.failureCause],r=t.upstreamHostname||"unknown domain";return ve.createElement(Sf,{role:"row","aria-label":`${n} connection to ${r}`,"aria-rowindex":e.index+1,"data-event-id":t.id,tabIndex:e.isSelected?0:-1,className:e.isSelected?"selected":"",style:e.style},t.isTlsTunnel()&&t.isOpen()&&ve.createElement(Of,null)," ",n," connection to ",r)}));let If=class extends ve.Component{constructor(){super(...arguments),this.listBodyRef=ve.createRef(),this.listRef=ve.createRef(),this.KeyBoundListWindow=(0,xe.PA)(ve.forwardRef(((e,t)=>ve.createElement("div",Object.assign({},e,{style:Object.assign({},e.style,{overflowY:"scroll"}),ref:t,onFocus:this.focusSelectedEvent,onKeyDown:this.onKeyDown,onMouseDown:this.onListMouseDown,tabIndex:this.isSelectedEventVisible()?-1:0}))))),this.isSelectedEventVisible=()=>{if(!this.selectedEventId)return!1;const e=this.listBodyRef.current;return!!e&&!!e.querySelector(`[data-event-id='${this.selectedEventId}']`)},this.focusSelectedEvent=()=>{this.focusEvent(this.props.selectedEvent)},this.wasListAtBottom=!0,this.updateScrolledState=()=>{requestAnimationFrame((()=>{this.wasListAtBottom=this.isListAtBottom()}))},this.onListMouseDown=e=>{if(0!==e.button)return;let t=e.target,n=null;for(;null===n&&t&&t!==this.listBodyRef.current;)n=t.getAttribute&&t.getAttribute("aria-rowindex"),t=t.parentElement;if(!n)return;const r=parseInt(n,10)-1;this.props.filteredEvents[r]!==this.props.selectedEvent?this.onEventSelected(r):this.onEventDeselected()}}get selectedEventId(){return this.props.selectedEvent?this.props.selectedEvent.id:void 0}get listItemData(){return{selectedEvent:this.props.selectedEvent,events:this.props.filteredEvents,contextMenuBuilder:this.props.contextMenuBuilder}}render(){const{events:e,filteredEvents:t,isPaused:n}=this.props;return ve.createElement(lf,{role:"table"},ve.createElement(Pf,{role:"row"},ve.createElement(pf,{role:"columnheader","aria-label":"Category"}),ve.createElement(hf,{role:"columnheader"},"Method"),ve.createElement(mf,{role:"columnheader"},"Status"),ve.createElement(gf,{role:"columnheader"},"Source"),ve.createElement(ff,{role:"columnheader"},"Host"),ve.createElement(yf,{role:"columnheader"},"Path and query")),0===e.length?n?ve.createElement(af,{icon:"Pause"},"Interception is paused, resume it to collect intercepted requests"):ve.createElement(af,{icon:"Plug"},"Connect a client and intercept some requests, and they'll appear here"):0===t.length?ve.createElement(af,{icon:"QuestionMark"},"No requests match this search filter",n?" and interception is paused":""):ve.createElement(cg.A,null,(({height:e,width:n})=>ve.createElement(xe.nu,null,(()=>ve.createElement(dg.Y1,{innerRef:this.listBodyRef,outerElementType:this.KeyBoundListWindow,ref:this.listRef,height:e-38,width:n,itemCount:t.length,itemSize:32,itemData:this.listItemData,onScroll:this.updateScrolledState},kf))))))}focusEvent(e){const t=this.listBodyRef.current;if(t)if(e){const n=t.querySelector(`[data-event-id='${e.id}']`);null==n||n.focus()}else t.parentElement.focus()}isListAtBottom(){var e;const t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement;return!t||t.scrollTop+5>=t.scrollHeight-t.offsetHeight}componentDidMount(){this.updateScrolledState()}componentDidUpdate(){var e,t,n;(null===(t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement)||void 0===t?void 0:t.contains(document.activeElement))&&this.focusSelectedEvent(),this.wasListAtBottom&&!this.isListAtBottom()&&(null===(n=this.listRef.current)||void 0===n||n.scrollToItem(this.props.events.length-1))}scrollToEvent(e){var t;const n=this.props.filteredEvents.indexOf(e);-1!==n&&(null===(t=this.listRef.current)||void 0===t||t.scrollToItem(n),requestAnimationFrame((()=>this.focusEvent(e))))}scrollToCenterEvent(e){const t=this.listRef.current,n=this.listBodyRef.current;if(!t||!n)return;const r=n.parentElement,o=this.props.filteredEvents.indexOf(e);if(-1===o)return;const s=this.props.filteredEvents.length,a=r.clientHeight,i=a/2,l=32*o,c=Math.max(0,32*s-a),d=l-i+16;t.scrollTo(m.clamp(d,0,c)),requestAnimationFrame((()=>this.focusEvent(e)))}scrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToItem(this.props.filteredEvents.length,"start")}onEventSelected(e){this.props.onSelected(this.props.filteredEvents[e])}onEventDeselected(){this.props.onSelected(void 0)}onKeyDown(e){const{moveSelection:t}=this.props;switch(e.key){case"ArrowDown":t(1);break;case"ArrowUp":t(-1);break;case"PageUp":t(-10);break;case"PageDown":t(10);break;case"Home":t(-1/0);break;case"End":t(1/0);break;default:return}e.preventDefault()}};sf([w.computed],If.prototype,"selectedEventId",null),sf([w.computed],If.prototype,"listItemData",null),sf([w.action.bound],If.prototype,"onEventSelected",null),sf([w.action.bound],If.prototype,"onEventDeselected",null),sf([w.action.bound],If.prototype,"onKeyDown",null),If=sf([xe.PA],If);var jf=n(98456);const Df=e=>{return t=void 0,n=void 0,o=function*(){const t=JSON.stringify(yield sd([e],{bodySizeLimit:1/0}));au(`${e.request.method} ${e.request.parsedUrl.hostname}.har`,"application/har+json;charset=utf-8",t)},new((r=void 0)||(r=Promise))((function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,i)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o};function Mf(e,t,n={}){if(n.waitForBodyDecoding&&("pending"===e.request.body.decodedPromise.state||void 0===e.request.body.decodedPromise.state))return e.request.body.decodedPromise.catch((()=>{})).then((()=>Mf(e,t,n)));const r=ld(e.request,!1,{bodySizeLimit:1/0}),o=Bf(r);return new jf(o).convert(t.target,t.client)}const Bf=e=>{const t=e.postData?e.postData:"discarded:not-representable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! UNREPRESENTABLE BINARY REQUEST BODY - BODY MUST BE EXPORTED SEPARATELY !!!"}:"discarded:too-large"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! VERY LARGE REQUEST BODY - BODY MUST BE EXPORTED & INCLUDED SEPARATELY !!!"}:"discarded:not-decodable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! REQUEST BODY COULD NOT BE DECODED !!!"}:void 0;return Object.assign(Object.assign({},e),{postData:t,headers:e.headers.filter((e=>"content-length"!==e.name.toLowerCase()&&!e.name.startsWith(":")&&"content-encoding"!==e.name.toLowerCase()))})},Ff=m(jf.availableTargets()).keyBy((e=>e.title)).mapValues((e=>e.clients.map((t=>({target:e.key,client:t.key,name:t.title,description:t.description,link:t.link}))))).value(),Nf="~~",Lf=`shell${Nf}curl`,Uf=e=>e.target+Nf+e.client,Wf=e=>{const[t,n]=e.split(Nf);return m(Ff).values().flatten().find({target:t,client:n})},zf=e=>({"php~~curl":"PHP ext-cURL","php~~http1":"PHP HTTP v1","php~~http2":"PHP HTTP v2","node~~native":"Node.js HTTP"}[Uf(e)]||e.name);var _f=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};class Vf{constructor(e,t,n,r,o,s){this.accountStore=e,this.uiStore=t,this.onPin=n,this.onDelete=r,this.onBuildRuleFromExchange=o,this.onPrepareToResendRequest=s,this.BaseOptions={Pin:{type:"option",label:"Toggle Pinning",callback:this.onPin},Delete:{type:"option",label:"Delete",callback:this.onDelete}}}getContextMenuCallback(e){return t=>{const{isPaidUser:n}=this.accountStore,r=this.uiStore.exportSnippetFormat?Wf(this.uiStore.exportSnippetFormat):void 0;if(e.isHttp()){const o=[this.BaseOptions.Pin,{type:"option",label:"Copy Request URL",callback:e=>lu(e.request.url)},...n?[]:[{type:"separator"},{type:"option",label:"With Pro:",enabled:!1,callback:()=>{}}],...this.onPrepareToResendRequest?[{type:"option",enabled:n,label:"Resend Request",callback:e=>this.onPrepareToResendRequest(e)}]:[],{type:"option",enabled:n,label:"Create Matching Modify Rule",callback:this.onBuildRuleFromExchange},{type:"option",enabled:n,label:"Export Exchange as HAR",callback:Df},...r&&n?[{type:"option",label:`Copy as ${zf(r)} Snippet`,callback:e=>_f(this,void 0,void 0,(function*(){lu(yield Mf(e,r,{waitForBodyDecoding:!0}))}))}]:[],{type:"submenu",enabled:n,label:"Copy as Code Snippet",items:Object.keys(Ff).map((e=>({type:"submenu",label:e,items:Ff[e].map((e=>({type:"option",label:zf(e),callback:t=>_f(this,void 0,void 0,(function*(){(0,w.runInAction)((()=>{this.uiStore.exportSnippetFormat=Uf(e)})),lu(yield Mf(t,e,{waitForBodyDecoding:!0}))}))})))})))},this.BaseOptions.Delete],s=m.sortBy(o,(e=>{var t;return"separator"===e.type||!(null===(t=e.enabled)||void 0===t||t)}));this.uiStore.handleContextMenuEvent(t,s,e)}else this.uiStore.handleContextMenuEvent(t,[this.BaseOptions.Pin,this.BaseOptions.Delete],e)}}}const Jf=v(["invalid-http-version","invalid-method","client-unparseable","client-unparseable-url","header-overflow","invalid-headers"]),Gf=v(["client-unparseable","client-unparseable-url","invalid-headers"]),Kf=v(["untrusted","expired","not-yet-valid","wrong-host","tls-error","host-not-found","host-unreachable","dns-error","connection-refused"]),Qf=v(["server-unparseable","server-timeout","connection-reset"]),Yf=v(["server-unparseable","connection-reset"]),Xf=v(["client-timeout","server-timeout"]),Zf=v(["untrusted","expired","not-yet-valid","wrong-host","tls-error"]),ey=v(["host-not-found","host-unreachable","dns-error","connection-refused","connection-reset","server-timeout"]);function ty(e){return e.includes("passthrough-error:SELF_SIGNED_CERT_IN_CHAIN")||e.includes("passthrough-error:DEPTH_ZERO_SELF_SIGNED_CERT")||e.includes("passthrough-error:UNABLE_TO_VERIFY_LEAF_SIGNATURE")||e.includes("passthrough-error:UNABLE_TO_GET_ISSUER_CERT_LOCALLY")?"untrusted":e.includes("passthrough-error:CERT_HAS_EXPIRED")?"expired":e.includes("passthrough-error:CERT_NOT_YET_VALID")?"not-yet-valid":e.includes("passthrough-error:ERR_TLS_CERT_ALTNAME_INVALID")?"wrong-host":e.filter((e=>e.startsWith("passthrough-tls-error:"))).length>0||e.includes("passthrough-error:EPROTO")||e.includes("passthrough-error:ERR_SSL_WRONG_VERSION_NUMBER")||e.includes("passthrough-error:ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC")||e.includes("passthrough-error:ERR_SSL_CIPHER_OPERATION_FAILED")||e.includes("passthrough-error:ERR_SSL_BAD_RECORD_TYPE")||e.includes("passthrough-error:ERR_SSL_INTERNAL_ERROR")?"tls-error":e.includes("passthrough-error:ENOTFOUND")?"host-not-found":e.includes("passthrough-error:EHOSTUNREACH")||e.includes("passthrough-error:ENETUNREACH")?"host-unreachable":e.includes("passthrough-error:EAI_AGAIN")?"dns-error":e.includes("passthrough-error:ECONNREFUSED")?"connection-refused":e.includes("passthrough-error:ECONNRESET")?"connection-reset":e.includes("passthrough-error:ETIMEDOUT")?"server-timeout":e.includes("passthrough-error:HPE_INVALID_CONSTANT")||e.includes("passthrough-error:ERR_INVALID_HTTP_TOKEN")||e.includes("passthrough-error:ERR_HTTP_INVALID_STATUS_CODE")||e.includes("passthrough-error:ERR_INVALID_CHAR")?"server-unparseable":e.includes("http-2")||e.includes("client-error:HPE_INVALID_VERSION")?"invalid-http-version":e.includes("client-error:HPE_INVALID_METHOD")?"invalid-method":e.includes("client-error:HPE_INVALID_URL")?"client-unparseable-url":e.includes("client-error:HPE_INVALID_CONSTANT")||e.includes("client-error:HPE_INVALID_EOF_STATE")?"client-unparseable":e.includes("client-error:HPE_HEADER_OVERFLOW")?"header-overflow":e.includes("client-error:HPE_INVALID_CONTENT_LENGTH")||e.includes("client-error:HPE_INVALID_TRANSFER_ENCODING")||e.includes("client-error:HPE_INVALID_HEADER_TOKEN")||e.includes("client-error:HPE_UNEXPECTED_CONTENT_LENGTH")||e.includes("passthrough-error:HPE_INVALID_HEADER_TOKEN")?"invalid-headers":e.includes("client-error:ERR_HTTP_REQUEST_TIMEOUT")?"client-timeout":e.includes("client-error:ECONNABORTED")||e.includes("client-error:EPIPE")?"client-abort":e.filter((e=>e.startsWith("passthrough-error:"))).length>0||e.filter((e=>e.startsWith("client-error:"))).length>0?(ye(`Unrecognized error tag ${JSON.stringify(e)}`),"unknown"):void 0}const ny=Le.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,ry=Le.div`
    position: relative;
    overflow-y: scroll;

    flex-grow: 1;
    padding: 0 20px 0 20px;

    background-color: ${e=>e.theme.containerBackground};
`,oy=Le.div`
    min-height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    /*
    * This padding could be padding on the scroll container, but doing so causes odd
    * behaviour where position: sticky headers don't take it into account, on OSX only.
    * Moving to the direct parent of the header makes that consistent, for some reason. Ew.
    */
    padding-top: 20px;
`,sy=e=>ve.createElement(ry,null,ve.createElement(oy,null,e.children)),ay=Le.div`
    overflow: hidden;
    display: flex;
    flex-direction: inherit;
`,iy=Le.div`
    position: relative;
`,ly=Le.div`
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.mainBackground};
    padding-bottom: 2px;

    opacity: 0;
    pointer-events: none;
    &:hover, &:focus-within {
        opacity: 1;
        pointer-events: auto;
    }
`,cy=Le.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;

    position: relative;
    display: flex;

    /* Try to avoid button padding expanding outer containers */
    margin: -5px -9px;

    /* Match the parent (typically card header) flex direction, but justify
       content in the opposite direction */
    flex-direction: inherit;
    justify-content: flex-start;
`,dy=Le(Ro)`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:hover + ${ly} {
        opacity: 1;
        pointer-events: auto;
    }
`;function uy(){"blur"in(document.activeElement||{})&&document.activeElement.blur()}const py=e=>{var t,n;const r=ve.useRef(null),o=function(e,t){const[n,r]=ve.useState(1/0);return ve.useEffect((()=>{const t=new ResizeObserver((()=>{const t=e.current;t?r(t.clientWidth):console.warn("Element resized, but no ref available")}));return e.current?t.observe(e.current):ye("No element to observe for resizing!"),()=>t.disconnect()}),[]),n}(r);null===(t=r.current)||void 0===t||t.children;const s=Array.from((null===(n=r.current)||void 0===n?void 0:n.querySelectorAll("button"))||[]),a=m.max(s.map((e=>e.clientWidth))),i=a?Math.max(Math.floor(o/a),1):1/0,l=ve.Children.toArray(e.children),[c,d]=i>=l.length?[l,[]]:[l.slice(0,i-1),l.slice(i-1)];return ve.createElement(cy,{ref:r,className:e.className},ve.createElement(ay,null,c),d.length>0&&ve.createElement(iy,null,ve.createElement(dy,{icon:["fas","caret-down"],title:"Show more"}),ve.createElement(ly,{onClick:uy},d)))},hy=e=>ve.createElement(lp,{icon:["fas",e.expanded?"compress-arrows-alt":"expand"],onClick:e.onClick,title:e.expanded?"Shrink this area, so you can see other details":"Expand this area to view it in more detail, hiding other areas"});var my=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const gy=Le.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 2fr;
`,fy=Le(gy)`
    grid-template-columns: 1fr 2fr min-content;

    > :last-child {
        grid-column: 2 / span 2;
    }
`,yy=Le(Tu)`
    font-size: ${e=>e.theme.textSize};
    padding: 3px 10px 5px;
`;let vy=class extends ve.Component{render(){const{pairs:e,className:t}=this.props;return ve.createElement(gy,{className:t},m.flatMap(e,(({key:e,value:t},n)=>[ve.createElement(Ru,{value:e,readOnly:!0,spellCheck:!1,key:`${n}-key`}),ve.createElement(Ru,{value:t,readOnly:!0,spellCheck:!1,key:`${n}-val`})])))}};vy=my([xe.PA],vy);let by=class extends ve.Component{constructor(){super(...arguments),this.containerRef=ve.createRef(),this.values=m.cloneDeep(this.props.pairs),this.lastValuesLength=this.values.length,this.convert=e=>this.props.convertResult?this.props.convertResult(e):m.cloneDeep(e),this.onChangeValues=e=>{const{props:{transformInput:t,onChange:n},convert:r}=this;this.values=t?t(e):e;const o=this.values.length===this.lastValuesLength+1;this.lastValuesLength=this.values.length,o&&requestAnimationFrame((()=>{const e=this.containerRef.current,t=null==e?void 0:e.querySelector("input:last-child");null==t||t.scrollIntoView({block:"nearest",behavior:"smooth"})})),n(r(this.values))}}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>this.props.pairs),(e=>{m.isEqual(this.convert(e),this.convert(this.values))||(this.values=m.cloneDeep(e),this.lastValuesLength=this.values.length)}),{equals:w.comparer.structural})),(0,xe.bH)(this,(0,w.autorun)((()=>{var e,t;const{keyValidation:n}=this.props;if(!m.isFunction(n))return;const r=null===(t=null===(e=this.containerRef)||void 0===e?void 0:e.current)||void 0===t?void 0:t.querySelectorAll("input");r&&this.values.forEach(((e,t)=>{const o=null==r?void 0:r[2*t],s=n(e.key);!0===s?(o.setCustomValidity(""),o.reportValidity()):(o.setCustomValidity(s),o.reportValidity())}))})))}render(){const{className:e,keyTitle:t,keyValidation:n,keyPlaceholder:r,valuePlaceholder:o,allowEmptyValues:s}=this.props,{values:a,onChangeValues:i,containerRef:l}=this,c="string"==typeof n?n:void 0;return ve.createElement(fy,{className:e,ref:l},m.flatMap(a,(({key:e,value:n,disabled:r},o)=>[ve.createElement(Ru,{value:e,required:!0,pattern:c,title:t,disabled:r,spellCheck:!1,key:`${o}-key`,onChange:(0,w.action)((e=>{e.target.reportValidity(),a[o].key=e.target.value,i(a)}))}),ve.createElement(Ru,{value:n,required:!s,disabled:r,spellCheck:!1,key:`${o}-val`,onChange:(0,w.action)((e=>{e.target.reportValidity(),a[o].value=e.target.value,i(a)}))}),ve.createElement(yy,{key:`${o}-del`,disabled:r,onClick:(0,w.action)((()=>{a.splice(o,1),i(a)}))},ve.createElement(Ro,{icon:["far","trash-alt"]}))])).concat([ve.createElement(Ru,{value:"",pattern:c,placeholder:r,spellCheck:!1,key:`${a.length}-key`,onChange:(0,w.action)((e=>{let t=e.target.value;t&&a.push({key:t,value:""}),i(a)}))}),ve.createElement(Ru,{value:"",placeholder:o,spellCheck:!1,key:`${a.length}-val`,onChange:(0,w.action)((e=>{e.target.value&&a.push({key:"",value:e.target.value}),i(a)}))})]))}};my([w.observable],by.prototype,"values",void 0),by=my([xe.PA],by);const xy=Le((e=>ve.createElement("img",{className:e.className,src:`data:${e.rawContentType||""};base64,${e.content.toString("base64")}`})))`
    display: block;
    max-width: 100%;
    margin: 0 auto;
    object-fit: scale-down;
`;function wy(e){return!!e.language}const Ey=e=>(t,n)=>S(rl(t,e,n)),Cy={raw:{language:"text",cacheKey:Symbol("raw"),isEditApplicable:!1,render:(e,t)=>{if(!(e.byteLength<2e3))return S(rl(e,"raw",t));try{return function(e){return e.toString("hex").replace(/(\w\w)/g,"$1 ").trimRight()}(e)}catch(e){return S(Promise.reject(e))}}},text:{language:"text",cacheKey:Symbol("text"),isEditApplicable:!1,render:e=>Bt(e)},base64:{language:"text",cacheKey:Symbol("base64"),isEditApplicable:!1,render:Ey("base64")},markdown:{language:"markdown",cacheKey:Symbol("markdown"),isEditApplicable:!1,render:Ey("markdown")},yaml:{language:"yaml",cacheKey:Symbol("yaml"),isEditApplicable:!1,render:Ey("yaml")},html:{language:"html",cacheKey:Symbol("html"),isEditApplicable:!0,render:Ey("html")},xml:{language:"xml",cacheKey:Symbol("xml"),isEditApplicable:!0,render:Ey("xml")},json:{language:"json",cacheKey:Symbol("json"),isEditApplicable:!0,render:(e,t)=>{if(!(e.byteLength<1e4))return S(rl(e,"json",t));{const t=Bt(e);try{return JSON.stringify(JSON.parse(t),null,2)}catch(e){return t}}}},javascript:{language:"javascript",cacheKey:Symbol("javascript"),isEditApplicable:!0,render:Ey("javascript")},css:{language:"css",cacheKey:Symbol("css"),isEditApplicable:!0,render:Ey("css")},protobuf:{language:"protobuf",cacheKey:Symbol("protobuf"),isEditApplicable:!1,render:Ey("protobuf")},"grpc-proto":{language:"protobuf",cacheKey:Symbol("grpc-proto"),isEditApplicable:!1,render:Ey("grpc-proto")},"url-encoded":{layout:"scrollable",Component:Le((e=>{const t=[...new URLSearchParams(e.content)].map((([e,t])=>({key:e,value:t})));return ve.createElement(vy,{className:e.className,pairs:t})})).attrs((e=>({content:Bt(e.content)})))`
            padding: 5px;
        `},image:{layout:"centered",Component:xy}},Ty=Le((e=>ve.createElement("div",{className:e.className},ve.createElement(Ro,{spin:!0,icon:["fac","spinner-arc"],size:"8x"}))))`
    ${e=>e.height&&Ue`
        height: ${e.height};
    `}

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Sy=e=>ve.createElement(yu,Object.assign({},e),e.children,ve.createElement(Ty,{height:e.height?e.height:e.expanded?"auto":"550px"}));var Py=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const ky=Le.div`
    overflow-y: auto;
    max-height: ${e=>e.expanded?"100%":"560px"}
`,Ry=Le.div`
    display: flex;
    justify-content: center;

    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            align-items: stretch;\n        ":"\n            height: 100%;\n            align-items: center;\n        "}
`,Oy=Le.div`
    padding: 10px;

    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.warningBackground};

    svg {
        margin-left: 0;
    }
`,Hy=Le(Ku)`
    padding: 0;
    margin: 10px 0 0;
`,Ay=e=>ve.createElement(Oy,null,ve.createElement("p",null,ve.createElement(Ao,null),"Failed to render ",e.contentType," content due to:"),ve.createElement(Hy,null,e.error.toString()));let qy=class extends ve.Component{constructor(e){super(e),this.editorOptions={readOnly:!0},(0,w.reaction)((()=>{try{return this.renderedContent}catch(e){}}),(e=>{e&&!P(e)&&requestAnimationFrame((()=>{var e,t;null===(t=(e=this.props).onContentRendered)||void 0===t||t.call(e)}))}),{fireImmediately:!0})}get formatter(){return Cy[this.props.contentType]||Cy.text}get contentBuffer(){return m.isString(this.props.children)?Mt(this.props.children):this.props.children}get renderedContent(){if(!wy(this.formatter))return;const{cache:e}=this.props,t=this.formatter.cacheKey,n=e.get(t),r=n||this.formatter.render(this.contentBuffer);if(n||e.set(t,r),"string"==typeof r)return r;if("fulfilled"===r.state)return r.value;if("rejected"===r.state)throw r.value;return r}render(){var e;if(!wy(this.formatter)){const t=this.formatter,n="scrollable"===t.layout?ky:"centered"===t.layout?Ry:Pt(t.layout);return ve.createElement(n,{expanded:this.props.expanded},ve.createElement(t.Component,{content:this.contentBuffer,rawContentType:ln(null===(e=this.props.headers)||void 0===e?void 0:e["content-type"])}))}try{const e=this.renderedContent;return P(e)?ve.createElement(Ty,{height:"500px"}):ve.createElement(_m.bL,{contentId:this.props.contentId,node:this.props.editorNode,options:this.editorOptions,language:this.formatter.language,value:e,schema:this.props.schema,expanded:this.props.expanded})}catch(e){return ve.createElement(Ay,{contentType:this.props.contentType,error:Tt(e)})}}};Py([w.computed],qy.prototype,"formatter",null),Py([w.computed],qy.prototype,"contentBuffer",null),Py([w.computed],qy.prototype,"renderedContent",null),qy=Py([xe.PA],qy);const $y=Le(ep)`
    ${e=>"left"===e.direction?"margin: 0 -20px 0 -15px;":"right"===e.direction?"margin: 0 -15px 0 -20px;":"margin: 0 -20px 0 -20px;"}

    padding: 10px 30px 0;

    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.warningBackground};
    border-top: solid 1px ${e=>e.theme.containerBorder};

    svg {
        margin-left: 0;
    }
`;const Iy=e=>{const{format:t,content:n,onFormatted:r}=e,o=Cy[t],s=!!o&&wy(o)&&o.isEditApplicable;return ve.createElement(lp,{className:e.className,title:s?`Format as ${En(e.format)}`:"",disabled:!s,icon:["fas","align-left"],onClick:()=>{return e=void 0,t=void 0,a=function*(){r(yield o.render(n))},new((s=void 0)||(s=Promise))((function(n,r){function o(e){try{l(a.next(e))}catch(e){r(e)}}function i(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,i)}l((a=a.apply(e,t||[])).next())}));var e,t,s,a}})},jy=Le.div`
    margin: 0 -20px -20px -20px;

    ${e=>e.showFullBorder?Ue`
            border: solid 1px ${e=>e.theme.containerBorder};
            padding-right: 1px; /* Seemingly required to show right border */
            border-radius: 0 0 3px 3px;
        `:Ue`
            border-top: solid 1px ${e=>e.theme.containerBorder};
        `}

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    .monaco-editor-overlaymessage {
        display: none;
    }

    position: relative;
    flex-grow: 1;

    /*
    Allows shrinking smaller than content, to allow scrolling overflow e.g. for
    scrollable URL param content
    */
    min-height: 0;
`;function Dy(e,t){const n=nn(t,"content-disposition")||"",r=/ filename="([^"]+)"/.exec(n);if(r){const e=r[1];return m.last(m.last(e.split("/")).split("\\"))}const o=m.last(e.split("/"));if(null==o?void 0:o.includes("."))return o}const My=e=>{const{body:t}=e;return ve.createElement(ve.Fragment,null,ve.createElement(py,null,ve.createElement(hy,{expanded:e.expanded,onClick:e.onExpandToggled}),ve.createElement(lp,{icon:["fas","download"],title:e.isPaidUser?"Save this body as a file":"With Pro: Save this body as a file",disabled:!e.isPaidUser||!t,onClick:()=>au(e.downloadFilename||"",e.mimeType||"application/octet-stream",t)})),t&&ve.createElement(Au,null,Ut(t.byteLength)),ve.createElement(Iu,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:En}),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},e.title))},By=(0,xe.PA)((e=>{const{body:t}=e;return ve.createElement(ve.Fragment,null,ve.createElement(py,null,ve.createElement(hy,{expanded:e.expanded,onClick:e.onExpandToggled}),ve.createElement(Iy,{format:e.selectedContentType,content:t.decoded,onFormatted:e.onBodyFormatted})),ve.createElement(Au,null,Ut(t.decoded)),ve.createElement(Iu,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:En}),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},e.title))})),Fy=Le(Ku)`
    padding: 0;
    margin: 10px 0;
`,Ny=e=>ve.createElement($y,{direction:e.direction},ve.createElement("p",null,ve.createElement(Ao,null)," Body ",e.type," failed for encoding '",cn(rn(e.headers,"content-encoding")),"' due to:"),ve.createElement(Fy,null,e.error.code?`${e.error.code}: `:"",e.error.message||e.error.toString()),ve.createElement("p",null,"This typically means the ",ve.createElement("code",null,"content-encoding")," header is incorrect or unsupported","decoding"===e.type?", or the body was corrupted":"",". The raw content ","decoding"===e.type?"(not decoded) is shown below":"(not encoded) will be used as-is","."));var Ly=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Uy=e=>"sent"===e.direction?"left":"right",Wy=ve.memo((e=>ve.createElement(_y,{messageDirection:Uy(e.message),onClick:()=>e.onClick(e.index),tabIndex:0,onKeyDown:t=>{var n,r,o,s;"Enter"===t.key&&e.onClick(e.index),"ArrowDown"===t.key&&(t.preventDefault(),null===(r=null===(n=t.currentTarget.nextElementSibling)||void 0===n?void 0:n.focus)||void 0===r||r.call(n)),"ArrowUp"===t.key&&(t.preventDefault(),null===(s=null===(o=t.currentTarget.previousElementSibling)||void 0===o?void 0:o.focus)||void 0===s||s.call(o))}},ve.createElement(zy,{selected:!1,messageDirection:Uy(e.message)}),ve.createElement(Vy,null,Bt(e.message.content.slice(0,200))),e.message.isBinary&&ve.createElement(Au,{color:Pe},"Binary"),ve.createElement(Au,null,Ut(e.message.content.byteLength))))),zy=Le(ve.memo((e=>ve.createElement("div",{className:e.className},ve.createElement($o,{direction:e.messageDirection})))))`
    width: 25px;
    flex-grow: 0;
    flex-shrink: 0;

    padding-right: 1px;
    box-sizing: border-box;
    margin: -4px 0;

    > svg {
        padding: 0;
        color: ${e=>e.selected?e.theme.popColor:e.theme.containerWatermark};
    }

    text-align: center;
`,_y=Le.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.containerBorder};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    cursor: pointer;
    &:hover, &:focus {
        outline: none;
        border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
        background-color: ${e=>e.theme.mainBackground};
    }

    padding: 4px 15px 4px 0;

    ${Au} {
        flex-shrink: 0;
        &:last-of-type {
            margin-right: 0;
        }
    }
`,Vy=Le(Ku)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1;
    width: auto;
    padding: 3px 0 4px;
`;let Jy=class extends ve.Component{constructor(){super(...arguments),this.containerRef=ve.createRef(),this.onEditorContentRendered=()=>{var e;if(this.containerRef.current===document.activeElement){const t=null===(e=this.containerRef.current)||void 0===e?void 0:e.querySelector(".monaco-editor textarea");null==t||t.focus()}}}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{this.props.message||this.setContentType(void 0)}))),this.onMessageChanged()}componentDidUpdate(e){(null==e?void 0:e.message.messageIndex)!==this.props.message.messageIndex&&this.onMessageChanged()}onMessageChanged(){const e=this.containerRef.current;e.scrollIntoView({behavior:"smooth"});const t=e.querySelector(".monaco-editor textarea");t?t.focus():e.focus()}setContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{message:e,isPaidUser:t,onExportMessage:n,editorNode:r,streamId:o}=this.props,s=kn(e.contentType,void 0,Nt(e.content)),a=m.includes(s,this.selectedContentType)?this.selectedContentType:e.contentType,i="sent"===e.direction?"left":"right";return ve.createElement(Gy,{ref:this.containerRef,tabIndex:-1,onKeyDown:e=>{var t,n,r,o;if(e.target===e.currentTarget)if(e.target===e.currentTarget&&"Enter"===e.key){const t=e.target.querySelector(".monaco-editor textarea");null==t||t.focus()}else"ArrowDown"===e.key?(e.preventDefault(),null===(n=null===(t=e.currentTarget.nextElementSibling)||void 0===t?void 0:t.focus)||void 0===n||n.call(t)):"ArrowUp"===e.key&&(e.preventDefault(),null===(o=null===(r=e.currentTarget.previousElementSibling)||void 0===r?void 0:r.focus)||void 0===o||o.call(r))}},ve.createElement(Ky,{messageDirection:i},ve.createElement(zy,{selected:!0,messageDirection:i}),ve.createElement(Vu,null,"sent"===e.direction?"Received from server":"Sent by client",":"),ve.createElement(lp,{icon:["fas","download"],title:t?"Save this message as a file":"With Pro: Save this message as a file",disabled:!t,onClick:()=>n(e)}),ve.createElement(Iu,{onChange:this.setContentType,value:a,options:s,nameFormatter:En}),ve.createElement(Au,null,Ut(e.content.byteLength))),ve.createElement(Qy,{showFullBorder:!1},ve.createElement(qy,{contentId:`ws-${o}-${e.messageIndex}`,editorNode:r,contentType:a,cache:e.cache,expanded:!1,onContentRendered:this.onEditorContentRendered},e.content)))}};Ly([w.observable],Jy.prototype,"selectedContentType",void 0),Ly([w.action.bound],Jy.prototype,"setContentType",null),Jy=Ly([xe.PA],Jy);const Gy=Le.div`
    background-color: ${e=>e.theme.mainBackground};
    border-bottom: 1px solid ${e=>e.theme.containerWatermark};

    display: flex;
    flex-direction: column;
`,Ky=Le.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    padding: 4px 15px 4px 0;

    cursor: pointer;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    > ${Vu} {
        flex-grow: 1;
        text-overflow: ellipsis;
        overflow: hidden;

        margin-left: -8px;
    }

    > ${lp} {
        margin: -5px 0;
    }

    ${Au}, select {
        &:last-of-type {
            margin-right: 0;
        }
    }
`,Qy=Le(jy)`
    /* Undo the whole-card specific bits of styling */
    border-top: none;
    margin: 0;
`;var Yy=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};function Xy(e,t,n){return`${e} ${n?`message ${n}`:"messages"}.${t?"bin":"txt"}`}let Zy=class extends ve.Component{constructor(){super(...arguments),this.expandedRow=void 0,this.exportMessages=()=>{au(Xy(this.props.filenamePrefix,this.someBinaryMessages),this.someBinaryMessages?"application/octet-stream":"text/plain",this.props.messages.map((e=>e.content)).join("\n\n---\n\n"))},this.exportMessage=e=>{au(Xy(this.props.filenamePrefix,e.isBinary,this.props.messages.indexOf(e)),e.isBinary?"application/octet-stream":"text/plain",e.content)}}get someBinaryMessages(){return this.props.messages.some((e=>e.isBinary))}render(){const{streamId:e,streamType:t,streamLabel:n,messages:r,isPaidUser:o,editorNode:s,collapsed:a,expanded:i,onCollapseToggled:l,onExpandToggled:c,ariaLabel:d}=this.props;return ve.createElement(yu,{collapsed:a,onCollapseToggled:l,expanded:i,ariaLabel:d},ve.createElement("header",null,ve.createElement(py,null,c&&ve.createElement(hy,{expanded:i,onClick:c}),ve.createElement(lp,{icon:["fas","download"],title:o?"Save these message as a file":"With Pro: Save these messages as a file",disabled:!o,onClick:this.exportMessages})),n&&ve.createElement(Au,{color:In("data"),title:n},n),ve.createElement(Au,null,r.length," message",1!==r.length?"s":""),ve.createElement(bu,{onCollapseToggled:l},t," messages")),ve.createElement(ev,{expanded:!!i},r.map(((t,n)=>this.expandedRow===n?ve.createElement(Jy,{key:"expanded",message:t,streamId:e,isPaidUser:o,onExportMessage:this.exportMessage,editorNode:s}):ve.createElement(Wy,{key:n,message:t,index:n,onClick:this.expandRow})))))}expandRow(e){this.expandedRow=e}};Yy([w.observable],Zy.prototype,"expandedRow",void 0),Yy([w.computed],Zy.prototype,"someBinaryMessages",null),Yy([w.action.bound],Zy.prototype,"expandRow",null),Zy=Yy([xe.PA],Zy);const ev=Le.div`
    width: calc(100% + 40px);
    margin: 0 -20px -20px -20px;

    border-top: solid 1px ${e=>e.theme.containerWatermark};
    background-color: ${e=>e.theme.mainLowlightBackground};

    display: flex;
    flex-direction: column;
    white-space: nowrap;

    position: relative;
    ${e=>e.expanded&&"\n        height: auto !important;\n        overflow-y: auto;\n    "}
`;var tv=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const nv=Le.section`
    ${e=>e.withinGrid&&Ue`
        display: contents;
    `}
`,rv=Le.span`
    margin-right: 10px;

    ${e=>e.withinGrid&&Ue`
        display: contents;
    `}
`,ov=Le.div`
    visibility: hidden;
    margin-top: -2px;
    margin-bottom: 6px;
    display: inline-block;

    max-height: 31px;
    overflow: hidden;
`;let sv=class extends ve.Component{constructor(){super(...arguments),this.open=!1}render(){const{children:e,withinGrid:t=!1}=this.props,n=t||this.props.prefixTrigger,[r,o,...s]=ve.Children.toArray(e);if(s.length)throw new Error(`Collapsible section has extra children: ${s}`);if(!eu(r))throw new Error("Collapsible section 1st child must be a summary element");const a=!!o;if(a&&!eu(o))throw new Error("Collapsible section 2nd child must be a body element");const i=o,l=ve.createElement(lv,{open:this.open,canOpen:a,withinGrid:t,onClick:this.toggleOpen}),c=ve.cloneElement(r,{open:this.open,withinGrid:t},n?ve.createElement(ve.Fragment,null,l,ve.createElement(rv,{withinGrid:t},r.props.children)):ve.createElement(ve.Fragment,null,ve.createElement(rv,{withinGrid:t},r.props.children),a&&l)),d=a&&this.open?ve.cloneElement(i,{withinGrid:t},t?i.props.children:ve.createElement(ve.Fragment,null,ve.createElement(ov,null,c),i.props.children)):null;return ve.createElement(nv,{withinGrid:t},c,d)}toggleOpen(e){e.preventDefault(),this.open=!this.open}};tv([w.observable],sv.prototype,"open",void 0),tv([w.action.bound],sv.prototype,"toggleOpen",null),sv=tv([xe.PA],sv);const av=["fas","minus"],iv=["fas","plus"],lv=Le((e=>ve.createElement("button",Object.assign({},m.omit(e,["open","canOpen","withinGrid"])),ve.createElement(Ro,{icon:e.open?av:iv}))))`
    border: none;
    background: none;

    position: relative;
    top: -1px;

    cursor: pointer;
    user-select: none;

    outline: none;
    &:focus {
        color: ${e=>e.theme.popColor};
    }
    &:hover {
        color: ${e=>e.theme.mainColor};
    }

    padding: 5px 10px;

    ${e=>e.withinGrid?Ue`
        margin: -3px 0 -5px -10px;
        align-self: baseline;
    `:Ue`
        margin: -5px 0 -5px -10px;
        vertical-align: baseline;
    `}

    scale: 0.7;
    color: ${e=>e.theme.containerWatermark};

    ${e=>!e.canOpen&&Ue`
        visibility: hidden;
    `}
`,cv=Le.header`
    ${e=>e.withinGrid?Ue`
        display: contents;
    `:Ue`
        display: inline-block;
    `}

    margin: -6px 0 0 -20px;
    padding: 9px 0 12px 20px;

    box-sizing: border-box;

    ${e=>e.open&&!e.withinGrid&&Ue`
        z-index: 1;
        position: relative;

        background-color: ${e=>e.theme.mainBackground};

        &:before {
            content: '';
            position: absolute;
            right: -1px;
            bottom: 0;
            height: 35px;
            width: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
        }

        &:after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
        }
    `}
`,dv=Le.div`
    ${e=>e.withinGrid?Ue`
        grid-column: 1 / -1; /* Full width grid row */
    `:Ue`
        margin-top: -37px; /* Pull up behind the summary section */
        margin-bottom: 10px; /* Spacing below (grid uses grid-gap) */
    `}

    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha}),
        inset 0px -8px 8px -10px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    padding: 8px 10px 10px 10px;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;

    line-height: 1.3;

    position: relative;

    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
`,uv=(0,xe.PA)((e=>{const{closeState:t,theme:n}=e,r="aborted"!==e.closeState?function(e){if(e)return zt[e.toString()]}(e.closeState.closeCode):void 0,o=r&&[ve.createElement(tp,{key:"code-docs",content:r.summary}),ve.createElement("p",{key:"docs-link"},ve.createElement(Bu,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1"},"Find out more"))];if("aborted"===t)return ve.createElement(yu,Object.assign({},e),ve.createElement("header",null,ve.createElement(Au,{color:Dn("aborted",n)},"Aborted"),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),ve.createElement("div",null,"The connection was closed abruptly, without a clean close message."));{const{closeCode:r,closeReason:s}=t;return ve.createElement(yu,Object.assign({},e),ve.createElement("header",null,ve.createElement(Au,{color:Dn(r,n)},null!=r?r:"No close code"),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"Close code: "),r?ve.createElement(Ju,null,r):ve.createElement(Xu,null,"(No close code)")),o&&ve.createElement(dv,null,o)),ve.createElement("div",null,ve.createElement(Vu,null,"Close reason: "),s?ve.createElement(Ju,null,s):ve.createElement(Xu,null,"(No reason provided)")))}}));var pv=n(48287).Buffer,hv=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const mv=["text","raw","base64","image"];let gv=class extends ve.Component{componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{this.props.message||this.onChangeContentType(void 0)})))}onChangeContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{title:e,url:t,message:n,apiBodySchema:r,direction:o,isPaidUser:s,collapsed:a,expanded:i,onCollapseToggled:l,onExpandToggled:c,ariaLabel:d}=this.props,u=kn(n.contentType,ln(n.headers["content-type"]),n.body,n.headers),p=u.includes(this.selectedContentType)?this.selectedContentType:n.contentType,h=n.body.decoded;if(h)return ve.createElement(yu,{ariaLabel:d,direction:o,collapsed:a,onCollapseToggled:l,expanded:i},ve.createElement("header",null,ve.createElement(My,{body:h,mimeType:nn(n.headers,"content-type"),downloadFilename:Dy(t,n.headers),title:e,expanded:!!i,onExpandToggled:c,onCollapseToggled:l,selectedContentType:p,contentTypeOptions:u,onChangeContentType:this.onChangeContentType,isPaidUser:s})),ve.createElement(jy,{showFullBorder:!i},ve.createElement(qy,{contentId:`${n.id}-${o}`,editorNode:this.props.editorNode,headers:n.headers,contentType:p,schema:r,expanded:!!i,cache:n.cache},h)));if(!h&&n.body.decodingError){const r=n.body.decodingError,u=pv.isBuffer(n.body.encoded)?n.body.encoded:void 0,p=mv.includes(this.selectedContentType)?this.selectedContentType:"text";return ve.createElement(yu,{ariaLabel:d,direction:o,collapsed:a,onCollapseToggled:l,expanded:i},ve.createElement("header",null,ve.createElement(My,{body:u,mimeType:"application/octet-stream",downloadFilename:Dy(t,n.headers),title:e,expanded:i,onExpandToggled:c,onCollapseToggled:l,selectedContentType:p,contentTypeOptions:mv,onChangeContentType:this.onChangeContentType,isPaidUser:s})),ve.createElement(Ny,{type:"decoding",direction:this.props.direction,error:r,headers:n.rawHeaders}),u&&ve.createElement(jy,{showFullBorder:!i},ve.createElement(qy,{contentId:`${n.id}-${o}`,editorNode:this.props.editorNode,contentType:p,expanded:!!i,cache:n.cache},u)))}return ve.createElement(Sy,{ariaLabel:d,direction:o,collapsed:a,onCollapseToggled:l,expanded:i},ve.createElement("header",null,ve.createElement(My,{body:void 0,title:e,expanded:!!i,onExpandToggled:c,onCollapseToggled:l,selectedContentType:p,contentTypeOptions:u,onChangeContentType:this.onChangeContentType,isPaidUser:s})))}};function fv(e){e.target.style.display="initial"}hv([w.observable],gv.prototype,"selectedContentType",void 0),hv([w.action.bound],gv.prototype,"onChangeContentType",null),gv=hv([xe.PA],gv);const yv=Le((0,xe.WQ)("uiStore")((e=>ve.createElement(Au,{className:e.className,color:e.uiStore.theme.popColor},e.children||"PRO"))))`
    font-size: ${e=>e.theme.textSize};

    color: ${Re};
    background-color: rgba(225,66,31,0.2);
`,vv=Le(yv)`
    margin-right: auto;
`,bv=Le(wu)`
    box-sizing: border-box;
    padding: 20px;

    margin: 0 auto;

    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-weight: bold;
    color: ${e=>e.theme.primaryInputColor};
    background-color: ${e=>e.theme.primaryInputBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});

    > svg {
        margin-bottom: 5px;
    }

    &:hover {
        background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
    }

    &:active {
        background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.05) 40%, transparent);
    }
`,xv=(0,xe.WQ)("accountStore")((0,xe.PA)((e=>ve.createElement(wv,null,e.children,ve.createElement(bv,{onClick:()=>e.accountStore.getPro(e.source)},ve.createElement(Ro,{icon:["far","star"],size:"2x"}),"Get HTTP Toolkit Pro"))))),wv=Le.div`
    padding: 20px 25%;
    margin: 0 -20px -20px -20px;
    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow: inset 0px 12px 8px -10px rgba(0,0,0,0.15);

    p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;
        font-weight: bold;
        margin-bottom: 10px;
    }

    ${bv} {
        width: 100%;
    }
`,Ev=Le.div`
    filter: blur(1px);
    opacity: 0.6;

    pointer-events: none;
    user-select: none;
`,Cv=Le.div`
    position: relative;
    min-height: 140px;
`,Tv=Le(bv)`
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;let Sv=class extends ve.Component{constructor(){super(...arguments),this.buttonRef=ve.createRef()}render(){return ve.createElement(Cv,null,ve.createElement(Tv,{ref:this.buttonRef,onClick:()=>this.props.getPro(this.props.source)},ve.createElement(Ro,{icon:["far","star"],size:"2x"}),"Get Pro"),ve.createElement(Ev,{inert:!0,ref:e=>e&&e.setAttribute("inert",""),onFocus:()=>this.buttonRef.current&&this.buttonRef.current.focus()},this.props.children))}};Sv=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([xe.PA],Sv);const Pv=Le((e=>ve.createElement("img",Object.assign({},e,{onLoad:fv,style:{display:"none"}}))))`
    float: right;
    height: 26px;

    border: 4px solid #ffffff;
    border-radius: 2px;
`,kv=Le.section`
    display: grid;
    grid-template-columns: 20px fit-content(40%) 1fr min-content;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Rv=Le(cv)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,Ov=Le.span`
    margin-right: 10px;
`,Hv=Le.span`
    font-style: italic;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    margin-right: 5px;
`,Av=Le((e=>ve.createElement("div",{className:e.className},[e.param.required?"Required":"Optional",e.param.type,e.param.in].filter((e=>!!e)).join(" ")," parameter",void 0!==e.param.defaultValue?`. Defaults to ${e.param.defaultValue}`:"",void 0!==e.param.enum&&e.param.enum.length>0?ve.createElement(ve.Fragment,null,".",ve.createElement("br",null),"Valid values: ",Rt(e.param.enum.map((e=>JSON.stringify(e))))):"",".")))`
    font-style: italic;
`,qv=Le(Ro).attrs((()=>({icon:["fas","exclamation-triangle"]})))`
    color: ${e=>e.theme.warningColor};
    line-height: 1.2;

    &:not(:first-child) {
        margin-left: 9px;
    }

    &:not(:last-child) {
        margin-right: 9px;
    }
`,$v=Le((e=>ve.createElement("div",Object.assign({},e),ve.createElement(qv,null),ve.createElement("span",null,e.children))))`
    color: ${e=>e.theme.popColor};

    :not(:last-child) {
        margin-bottom: 10px;
    }
`;function Iv(e){return"string"==typeof e?e:"number"==typeof e?e.toString(10):"boolean"==typeof e?e.toString():null==e?void 0:JSON.stringify(e)}const jv=(e,t)=>[t.length&&t.map(((e,t)=>ve.createElement($v,{key:e},e))),e&&ve.createElement(Zu,{key:"details",htmlContent:e})].filter((e=>!!e)),Dv=Le.div`
    display: grid;
    grid-template-columns: fit-content(30%) auto;
    grid-gap: 5px;
    margin-bottom: 10px;
`,Mv=Le.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,Bv=Le.pre`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,Fv=e=>ve.createElement(Dv,null,Object.entries(e.value).map((([e,t],n)=>[ve.createElement(Mv,{key:`${n}-key`},e,":"),ve.createElement(Bv,{key:`${n}-value`},t)]))),Nv=e=>{const{api:t}=e,n=t.request.parameters.filter((e=>!!e.value||e.required||e.defaultValue)),r=n.length>5?n.filter((e=>!!e.value||e.required)):n,o=jv(t.operation.description,t.operation.warnings),s=!!o.length;return ve.createElement(ve.Fragment,null,ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"Service:")," ",t.service.name,!t.service.description&&ve.createElement(Bu,{href:t.service.docsUrl})),t.service.description&&ve.createElement(dv,null,ve.createElement(Pv,{src:t.service.logoUrl,alt:""}),ve.createElement(Zu,{htmlContent:t.service.description}),ve.createElement(Bu,{href:t.service.docsUrl},"Find out more"))),ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"Operation:")," ",t.operation.name,!s&&ve.createElement(Bu,{href:t.operation.docsUrl}),t.operation.warnings.length?ve.createElement(qv,null):null),s&&ve.createElement(dv,null,o,ve.createElement(Bu,{href:t.operation.docsUrl},"Find out more"))),r.length>=1&&ve.createElement(ve.Fragment,null,ve.createElement(Gu,null,"Parameters"),ve.createElement(kv,null,r.map((e=>ve.createElement(sv,{withinGrid:!0,key:e.name},ve.createElement(Rv,null,ve.createElement(Ov,null,e.name,": "),ve.createElement("span",null,Iv(e.value)||ve.createElement(Hv,null,e.defaultValue?Iv(e.defaultValue)+" [default]":"[not set]")),e.warnings.length?ve.createElement(qv,null):ve.createElement("div",null)),ve.createElement(dv,null,jv(e.description,e.warnings),"object"===e.type&&Object.keys(e).length>1?ve.createElement(Fv,{value:e.value}):null,ve.createElement(Av,{param:e}))))))))},Lv=(0,xe.PA)((e=>{const{apiName:t,apiExchange:n}=e;return ve.createElement(yu,Object.assign({},e),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},t)),ve.createElement(Nv,{api:n}))})),Uv=(0,xe.PA)((e=>{const{apiName:t}=e;return ve.createElement(yu,Object.assign({},e),ve.createElement("header",null,ve.createElement(vv,null),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},t)),ve.createElement(xv,{source:"api"},ve.createElement("p",null,"HTTP Toolkit Pro can show you more information about this API."),ve.createElement("p",null,"Instantly understand this request with inline documentation for the endpoint, parameters, and responses."),ve.createElement("p",null,"Automatically validate that this request & its body match the API schema. See all the parameters that you're ",ve.createElement("em",null,"not")," sending too, and their default values, and get warned about deprecated or invalid endpoints and parameters.")))})),Wv=Le((({source:e,className:t})=>{if(e.icon===Po.Unknown)return null;const n=e.icon.icon;return Array.isArray(n)?ve.createElement(Ro,Object.assign({className:t,title:e.summary},e.icon,{icon:n})):ve.createElement(To,Object.assign({className:t,alt:e.summary,size:"1.25em"},e.icon,{icon:n}))}))`
    margin-left: 8px;
`,zv=Le((({request:e,className:t})=>e.httpVersion?ve.createElement(Au,{title:`The client sent this request using HTTP ${e.httpVersion}`},"HTTP/","2.0"===e.httpVersion?"2":e.httpVersion):null))``;var _v=n(34635);function Vv(e){const t=(0,Ke.format)(e,"YYYY-MM-DD [at] HH:mm:ss"),n=(0,Ke.distanceInWordsToNow)(e);return(0,Ke.isFuture)(e)?ve.createElement(ve.Fragment,null,"will expire ",ve.createElement("span",{title:t},"in ",n)):ve.createElement(ve.Fragment,null,"expired ",ve.createElement("span",{title:t},n," ago"))}const Jv=e=>{const t=(0,_v.parse)(e.value),n=e.requestUrl.pathname.replace(/\/[^\/]*$/,"")||"/";return ve.createElement(ve.Fragment,null,t.map((t=>{var r;return"none"!==(null===(r=t.sameSite)||void 0===r?void 0:r.toLowerCase())||t.secure?ve.createElement(ep,{key:t.name},ve.createElement("p",null,"Set cookie '",ve.createElement("code",null,t.name),"' to '",ve.createElement("code",null,t.value),"'"),ve.createElement("p",null,"This cookie will be sent in future",t.secure?" secure ":" secure and insecure ","requests to"," ",t.domain?ve.createElement(ve.Fragment,null,t.domain.replace(/^\./,"")," and subdomains"):ve.createElement(ve.Fragment,null,e.requestUrl.hostname,", but not its subdomains"),"/"===t.path||"/"===n?ve.createElement(ve.Fragment,null,"."):void 0!==t.path?ve.createElement(ve.Fragment,null,", for paths within '",t.path,"'."):ve.createElement(ve.Fragment,null,", for paths within '",n,"'.")),ve.createElement("p",null,"The cookie is ",t.httpOnly?"not accessible from client-side scripts":"accessible from client-side scripts running on matching pages",void 0===t.sameSite||"lax"===t.sameSite.toLowerCase()?ve.createElement(ve.Fragment,null,". Matching requests triggered from other origins will ",t.httpOnly?"however":"also"," include this cookie, if they are top-level navigations (not subresources)."):"strict"===t.sameSite.toLowerCase()&&t.httpOnly?ve.createElement(ve.Fragment,null,", or sent in requests triggered from other origins."):"strict"!==t.sameSite.toLowerCase()||t.httpOnly?"none"===t.sameSite.toLowerCase()&&t.secure?ve.createElement(ve.Fragment,null,". Matching requests triggered from other origins will ",t.httpOnly?"however":"also"," include this cookie."):ve.createElement(ve.Fragment,null,". This cookie uses an unrecognized SameSite property, which may cause issues."):ve.createElement(ve.Fragment,null,", but will not be sent in requests triggered from other origins.")),ve.createElement("p",null,"The cookie ",t.maxAge?ve.createElement(ve.Fragment,null,Vv((0,Ke.addSeconds)(new Date,t.maxAge)),t.expires&&" ('max-age' overrides 'expires')"):t.expires?Vv(t.expires):"expires at the end of the current session",".")):ve.createElement(ep,{key:t.name},ve.createElement("p",null,"This attempts to set cookie '",ve.createElement("code",null,t.name),"' to '",ve.createElement("code",null,t.value),"'"),ve.createElement("p",null,ve.createElement("strong",null,"This will fail so this cookie will not be set"),", because ",ve.createElement("code",null,"SameSite=None")," can only be used for cookies with the ",ve.createElement("code",null,"Secure")," flag."))})))},Gv=e=>{const{description:t}=Wo(e.value);return t?ve.createElement(ep,null,ve.createElement("p",null,t)):ve.createElement("p",null,Gt("user-agent").summary)},Kv=Le.section`
    display: grid;
    grid-template-columns: 20px fit-content(30%) 1fr;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Qv=Le(cv)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,Yv=[{type:"option",label:"Copy header value",callback:({value:e})=>lu(e)},{type:"option",label:"Copy header name",callback:({key:e})=>lu(e)},{type:"option",label:'Copy header as "name: value"',callback:({key:e,value:t})=>lu(`${e}: ${t}`)}],Xv=(0,xe.WQ)("uiStore")((e=>{const t=e.headerValue.length>500,[n,r]=ve.useState(!1),o=ve.useCallback((()=>r(!0)),[r]),s=ve.useCallback((()=>r(!1)),[r]),a=ve.useCallback((t=>{var n;"Range"!==(null===(n=window.getSelection())||void 0===n?void 0:n.type)&&e.uiStore.handleContextMenuEvent(t,Yv,{key:e.headerKey,value:e.headerValue})}),[e.uiStore,e.headerKey,e.headerValue]);return ve.createElement(Qv,{open:e.open,withinGrid:e.withinGrid,onContextMenu:a},e.children,ve.createElement(tb,null,e.headerKey,": "),t?n?ve.createElement("span",null,e.headerValue,ve.createElement(eb,{title:"Collapse this large header value",onClick:s},ve.createElement(Ro,{icon:["fas","minus"]}))):ve.createElement(Zv,null,e.headerValue.slice(0,490),ve.createElement(eb,{title:"Expand to show the full contents of this large header value",onClick:o},"...")):ve.createElement("span",null,e.headerValue))})),Zv=Le.span`
    position: relative;

    :after {
        content: '';
        background-image: linear-gradient(to bottom, transparent, transparent 60%, ${e=>e.theme.mainBackground});
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`,eb=Le(qu)`
    position: relative;
    z-index: 1;

    vertical-align: middle;
    padding: 2px 4px;
    font-size: 10px;
    margin-left: 4px;
`,tb=Le.span`
    margin-right: 10px;
`,nb=Le(dv)`
    line-height: 1.3;
`,rb=Le(Bu)`
    display: block;
    margin-top: 10px;
`,ob=Le.span`
    grid-column: 2 / -1;
    font-style: italic;
`,sb=Le(dv)`
    line-height: 1.3;
`,ab=(0,xe.WQ)("accountStore")((0,xe.PA)((e=>{const t=m.sortBy(e.headers,(([e])=>e.toLowerCase()));if(0===t.length)return ve.createElement(Xu,null,"(None)");let[n,r]=m.partition(t,(([t])=>e.httpVersion>=2&&t.startsWith(":")));return 0===r.length&&(r=n,n=[]),ve.createElement(Kv,null,n.length>0&&ve.createElement(sv,{withinGrid:!0},ve.createElement(cv,null,ve.createElement(ob,null,"HTTP/",e.httpVersion," pseudo-headers")),ve.createElement(sb,null,ve.createElement(ib,{headers:n}))),m.flatMap(r,(([t,n],r)=>{const o=Gt(t),s=((e,t,n,r)=>{var o;if(e=e.toLowerCase(),r){if("set-cookie"===e)return ve.createElement(Jv,{value:t,requestUrl:n});if("user-agent"===e)return ve.createElement(Gv,{value:t})}const s=null===(o=Gt(e))||void 0===o?void 0:o.summary;return s&&ve.createElement("p",null,s)})(t,n,e.requestUrl,e.accountStore.isPaidUser);return ve.createElement(sv,{withinGrid:!0,key:`${t}-${r}`},ve.createElement(Xv,{headerKey:t,headerValue:n}),s&&ve.createElement(nb,null,s,o&&ve.createElement(rb,{href:o.url},"Find out more")))})))}))),ib=(0,xe.PA)((e=>ve.createElement(Kv,null,m.flatMap(e.headers,(([e,t],n)=>ve.createElement(sv,{withinGrid:!0,key:`${e}-${n}`},ve.createElement(Xv,{headerKey:e,headerValue:t}))))))),lb=Le.div`
    display: grid;
    grid-template-columns: fit-content(50%) auto;
    grid-gap: 5px;
`,cb=Le.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,db=Le.pre`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,ub=Le(Vu)`
    margin-top: 10px;
    grid-column: 1 / span 2;
`,pb=e=>{const t=[...e.url.searchParams];let n;try{n=decodeURIComponent(e.url.pathname)}catch(t){n=e.url.pathname}return ve.createElement(lb,null,ve.createElement(cb,null,"Protocol:")," ",ve.createElement(db,null,e.url.protocol.slice(0,-1)),(e.url.username||e.url.password)&&ve.createElement(ve.Fragment,null,ve.createElement(cb,null,"Username:")," ",ve.createElement(db,null,e.url.username),ve.createElement(cb,null,"Password:")," ",ve.createElement(db,null,e.url.password)),ve.createElement(cb,null,"Host:")," ",ve.createElement(db,null,e.url.host),ve.createElement(cb,null,"Path:")," ",ve.createElement(db,null,n),t.length?ve.createElement(ub,null,"Parameters"):null,t.map((([e,t],n)=>[ve.createElement(cb,{key:`${n}-key`},e,":"),ve.createElement(db,{key:`${n}-value`},t)])))},hb=Le((0,xe.WQ)("uiStore")((e=>{const{stepTypes:t}=e.ruleData,n=1!==t.length?"multi-step":hg(t[0]);return ve.createElement(qu,{color:In("mutative"),className:e.className,disabled:"deleted"===e.ruleData.status,onClick:"deleted"!==e.ruleData.status?e.onClick:void 0,title:`This request was handled by ${r=n,Ot.includes(r[0].toLowerCase())?"an":"a"} ${n} rule${"deleted"===e.ruleData.status?" which has since been deleted":"modified-types"===e.ruleData.status?" (which has since been modified)":""}.${"deleted"!==e.ruleData.status?"\nClick here to jump to the rule on the Modify page.":""}`},ve.createElement(To,{icon:"Pencil",size:"16px"}),function(e){return e[0].toUpperCase()+e.slice(1)}(n));var r})))`
    margin-right: auto;

    text-decoration: none;
    word-spacing: 0;

    > svg {
        margin: -1px 5px 0 -1px;
    }
`,mb=e=>{const t=(n=e.request.method,Jt(Vt,n.toLowerCase()));var n;const r=[t&&ve.createElement(tp,{key:"method-docs",content:t.summary}),t&&ve.createElement("p",{key:"method-link"},ve.createElement(Bu,{href:t.url},"Find out more"))].filter((e=>!!e));return ve.createElement("div",null,ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"Method:")," ",e.request.method),r.length?ve.createElement(dv,null,r):null),ve.createElement(Gu,null,"URL"),ve.createElement(sv,{prefixTrigger:!0},ve.createElement(cv,null,ve.createElement(Qu,null,e.request.parsedUrl.parseable?e.request.parsedUrl.toString():e.request.url)),ve.createElement(dv,null,ve.createElement(pb,{url:e.request.parsedUrl}))),ve.createElement(Gu,null,"Headers"),ve.createElement(ab,{httpVersion:e.httpVersion,headers:e.request.rawHeaders,requestUrl:e.request.parsedUrl}))},gb=(0,xe.PA)((e=>{const{exchange:t,matchedRuleData:n,onRuleClicked:r}=e,{request:o}=t,s=null==n?void 0:n.stepTypes.every((e=>"passthrough"===e||"ws-passthrough"===e));return ve.createElement(yu,Object.assign({},e,{direction:"right"}),ve.createElement("header",null,n&&!s&&ve.createElement(hb,{ruleData:n,onClick:r}),ve.createElement(Wv,{source:o.source}),ve.createElement(zv,{request:o}),ve.createElement(Au,{color:In(t)},t.isWebSocket()?"WebSocket ":"",o.method," ",(o.hostname||"").replace(/\./g," . ")),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},"Request")),ve.createElement(mb,{request:o,httpVersion:t.httpVersion}))})),fb=(0,xe.PA)((e=>{const{httpVersion:t,response:n,requestUrl:r,theme:o,apiExchange:s}=e,a=(0,Un.Jt)(s,"response","description"),i=Kt(n.statusCode),l=[a&&ve.createElement(Zu,{key:"api-response-docs",htmlContent:a}),i&&ve.createElement(tp,{key:"status-docs",content:i.summary}),i&&ve.createElement("p",{key:"status-link"},ve.createElement(Bu,{href:i.url},"Find out more"))].filter((e=>!!e));return ve.createElement(yu,Object.assign({},e,{direction:"left"}),ve.createElement("header",null,ve.createElement(Au,{color:jn(n.statusCode,o)},n.statusCode),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},"Response")),ve.createElement("div",null,ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"Status:")," ",n.statusCode," ",n.statusMessage||Qt(n.statusCode)),l.length?ve.createElement(dv,null,l):null),ve.createElement(Gu,null,"Headers"),ve.createElement(ab,{httpVersion:t,headers:n.rawHeaders,requestUrl:r})))})),yb=Le(Ku)`
    margin-top: 10px;
`,vb=(0,xe.WQ)("uiStore")((0,xe.PA)((e=>ve.createElement(yu,Object.assign({},e.cardProps,{direction:"left"}),ve.createElement("header",null,ve.createElement(Au,{color:jn("aborted",e.uiStore.theme)},"Aborted"),ve.createElement(bu,{onCollapseToggled:e.cardProps.onCollapseToggled},"Response")),ve.createElement("div",null,"The connection failed before a response could be completed",e.exchange.abortMessage?ve.createElement(ve.Fragment,null," with error:",ve.createElement(yb,null,e.exchange.abortMessage)):"."))))),bb=(0,xe.PA)((e=>{const{type:t,requestUrl:n,httpVersion:r,trailers:o}=e;return ve.createElement(yu,Object.assign({},e,{direction:"left"}),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},"request"===t?"Request":"Response"," Trailers")),ve.createElement("div",null,ve.createElement(ab,{httpVersion:r,headers:o,requestUrl:n})))})),xb=Symbol("encoded-body-test");const wb=["GET","HEAD","POST"],Eb=[200,203,204,206,300,301,404,405,410,414,501],Cb=[300,301,308,410],Tb=["GET","HEAD","POST"],Sb=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];function Pb(e){return e.toLowerCase().replace(/(\b\w)/g,(e=>e.toUpperCase()))}function kb(e){return`<code>${Ri(Pb(e))}</code>`}const Rb=(0,Ke.parse)(0);function Ob(e){return(0,Ke.distanceInWordsStrict)(Rb,(0,Ke.parse)(1e3*e))}function Hb(e){return cn(e.headers["cache-control"]).reduce(((e,t)=>{const[n,r]=t.split("=");return e[n.trim()]=void 0===r||parseInt(r),e}),{})}const Ab="May be cached in both private and shared caches",qb="May only be cached in private caches";function $b(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin)return{summary:qb,explanation:ol`
                OPTIONS responses are not cached through the normal HTTP response caching mechanisms.
                Only the CORS metadata for the resource is cached, and only by HTTP clients that
                implement CORS checks, such as browsers, not by intermediate caches.
            `};const r=Hb(n);return void 0!==r.private?{summary:qb,explanation:ol`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an explicit \`private\` Cache-Control directive.
            `}:void 0!==r.public?{summary:Ab,explanation:ol`
                This response may be cached by both private HTTP client caches and shared caches
                such as CDNs and proxies, because it includes an explicit \`public\` Cache-Control
                directive.
            `}:void 0!==t.headers.authorization&&void 0===r["s-maxage"]&&void 0===r["must-revalidate"]&&void 0===r.public?{summary:qb,explanation:ol`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an Authorization header, and doesn't include the explicit
                directives that would allow it to be stored by shared caches.

                Shared caches, such as CDNs and proxies, would only be allowed to store this
                response if it contained \`s-maxage\`, \`must-revalidate\` or \`public\`
                Cache-Control directives.
            `}:void 0===r["s-maxage"]||void 0!==r["max-age"]||void 0!==n.headers.expires||void 0!==r.public||Eb.includes(n.statusCode)?{summary:Ab,explanation:ol`
            This response may be cached by both private client caches & shared
            CDN or proxy caches, because it is cacheable and does not include
            either a \`private\` Cache-Control directive or an Authorization header.
        `}:{summary:"May only be cached in shared caches",explanation:ol`
                This response may only be cached by shared caches, such as proxies & CDNs,
                not by private client caches, because it includes an \`s-maxage\` Cache-Control
                directive but is otherwise not cacheable by default, and does not include
                any other explicit caching directives.
            `}}function Ib(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin){const e=m.union(Tb,cn(n.headers["access-control-allow-methods"]).map((e=>e.toUpperCase()))),r=m.union(Sb,cn(n.headers["access-control-allow-headers"]).map(kb)),o="true"===n.headers["Access-Control-Allow-Credentials"];return{summary:"Will match corresponding future CORS requests for this URL",explanation:ol`
                The CORS configuration returned here may be used to avoid a preflight
                request for future CORS requests, when:

                * The CORS request would be sent to the same URL
                * The origin is <code>${Ri(t.headers.origin.toString())}</code>
                ${o?"":"* No credentials are being sent\n"}* The request method would be ${Ri(Rt(e,", "," or "))}
                * There are no extra request headers other than ${Rt(r)}
            `}}const r=cn(n.headers.vary),o=r.length>0,s=o?` that have the same ${Rt(r.map((e=>`'${Pb(e)}'`)))} header${r.length>1?"s":""}`:"",a=o?ol`
        , as long as those requests have ${Rt(r.map((e=>{const n=t.headers[e.toLowerCase()],r=kb(e);return void 0===n?`no ${r} header`:`a ${r} header set to <code>${Ri(n.toString())}</code>`})))}.

        ${r.length>1?"These headers are":"This header is"}
        required because ${r.length>1?"they're":"it's"} listed in
        the Vary header of the response.
    `:ol`
        , regardless of header values or other factors.

        If this response is only valid for certain header configurations (e.g.
        Accept-Encoding or Accept-Language headers), it should include a Vary header.
    `;return"POST"===t.method?{summary:`Will match future GET & HEAD requests to this URL${s}`,explanation:ol`
                The response content & headers returned here may be used for future safe requests
                for the resource updated by this POST${a}
            `}:{summary:`Will match future GET & HEAD requests to this URL${s}`,explanation:ol`
            The response content & headers returned here may be used for future safe requests
            for the same resource${a}
        `}}function jb(e){var t;const{request:n,response:r}=e;if("object"!=typeof r)return;const o=Hb(r);if("OPTIONS"===n.method){const e=ln(r.headers["access-control-max-age"]);if(e){const t=parseInt(e,10);return{summary:`Expires after ${Ob(t)}`,explanation:ol`
                    This CORS response includes an Access-Control-Max-Age header explicitly
                    set to ${t} seconds, which defines the valid lifetime for the
                    cached response. Once this expires it will immediately cease to be used.
                `}}return{summary:"Expires unpredictably, around 5 seconds",explanation:ol`
                This CORS response does not include an Access-Control-Max-Age header, so
                does not explicitly specify when it should expire. That means the
                exact expiry is left up to the client implementation. This may be a
                small number of seconds, or it may be considered expired immediately.
            `}}if(o["no-cache"])return{summary:"Must be revalidated every time it's used",explanation:ol`
                This response includes an explicit \`no-cache\` directive. This means that
                before the cached content can be used, the matching requests must always be
                forwarded to the origin server, and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const s=ln(r.headers.date),a=ln(r.headers.expires),i=o["max-age"],l=void 0!==o["s-maxage"]?o["s-maxage"]:i,c=void 0!==i||void 0!==a,d=void 0!==i?i:void 0!==a?(0,Ke.differenceInSeconds)(a,s?(0,Ke.parse)(s):(0,Ke.parse)(null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now())):void 0,u=void 0!==d&&d<=0;if(!c&&Cb.includes(r.statusCode))return{summary:"Never expires"+(l!==i?` from private caches, expires from shared caches after ${Ob(l)}`:""),explanation:ol`
                This ${r.statusCode} response is intended to describe a permanent state,
                and has no explicitly defined expiry time, so by default most clients will
                cache it forever.

                ${l!==i?ol`
                    The response does include a \`s-maxage\` directive however, set to ${l} seconds, which overrides this for shared caches such as CDNs and
                    proxies. In that specific case, the response will be considered stale
                    after ${Ob(l)}. As there is no \`proxy-revalidate\`
                    directive, it may still be used whilst stale if necessary or explicitly
                    allowed by a client.

                    If the response included a specific expiry time for private caches, e.g.
                    with a \`max-age\` Cache-Control directive, that typically would limit the
                    lifetime of this response in those caches too. In general though in that
                    case it would be better to use a more accurate status code.
                `:ol`
                    If this response did include a specific expiry time, e.g. with a max-age
                    Cache-Control directive, that would typically override this. In general
                    though in that case it would be better to use a more accurate status code.
                `}
            `};const p=l!==i?ol`
        .

        This response also includes a \`s-maxage\` directive, set to ${Ob(l)} seconds which overrides this expiry for shared caches such as CDNs or proxies.
        This means in that case, the response will become stale in ${Ob(l)}
    `:"",h=c?u?ol`
            This response expires immediately because it has ${i<=0?ol`
                    a \`max-age\` directive set to ${i} seconds
                `:s?ol`
                    an Expires header set to ${Ri(a.toString())}, which is
                    not after its Date header value (${Ri(s)})
                `:ol`
                    an Expires header set to ${Ri(a)}, which is
                    before the response was received
                `}${p}
        `:void 0!==i?ol`
            This response expires after ${i} seconds (${Ob(i)}),
            as specified by its \`max-age\` directive${p}
        `:ol`
            This response expires at ${Ri(a)} (after ${Ob(d)}),
            as specified by its Expires header${p}
        `:ol`
            ${l===i?ol`
                This response does not explicitly declare its expiry time. Caches
            `:ol`
                This response only declares an explicit expiry time for shared caches, such
                as proxies or CDNs, not for private caches. Content in shared caches will
                expire after ${Ob(l)}, as declared by the \`s-maxage\`
                Cache-Control directive, whilst content in private caches may expire
                unpredictably.

                Private caches
            `} may
            use a heuristic to decide when this response is considered stale, typically
            some percentage of the time since the content was last modified, often using
            the Last-Modified header value${r.headers["last-modified"]?` (<code>${Ri(r.headers["last-modified"].toString())}</code>)`:", although that is not explicitly defined in this response either"}
        `;if(u&&o["must-revalidate"])return{summary:"Must be revalidated every time it's used"+(l!==i?` (or after ${Ob(l)} for shared caches)`:""),explanation:ol`
                ${h}.

                In addition, it includes a \`must-revalidate\` directive.

                Together, these mean that before the cached content can be used${l!==i&&l>0?" by private caches":""} the matching requests must always be forwarded to the origin server,
                and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const m=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?"can be served stale temporarily whilst revalidating or if receiving errors":void 0!==o["stale-while-revalidate"]?`can be served stale whilst revalidating for ${Ob(o["stale-while-revalidate"])}`:void 0!==o["stale-if-error"]?`can be served stale if errors are received for ${Ob(o["stale-if-error"])}`:"",g=o["must-revalidate"]?", then must always be revalidated":o["proxy-revalidate"]&&m?`, then ${m} (but must be revalidated by shared caches)`:o["proxy-revalidate"]?", then must always be revalidated by shared caches, but may be used privately":m?`, then ${m}`:"",f=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?ol`
            The response includes both \`stale-while-revalidate\` and \`stale-if-error\`
            directives, set to ${o["stale-while-revalidate"]} seconds and ${o["stale-if-error"]} seconds respectively.

            \`stale-while-revalidate\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime, for ${Ob(o["stale-while-revalidate"])} extra.

            \`stale-if-error\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime if any errors are encountered, for ${Ob(o["stale-if-error"])} after the response expires.
        `:void 0!==o["stale-while-revalidate"]?ol`
            The response includes a \`stale-while-revalidate\` directive set to ${o["stale-while-revalidate"]} seconds. This means that after the response has expired new requests
            should trigger revalidation, but the stale content can still be served in
            the meantime for ${Ob(o["stale-while-revalidate"])} extra.
        `:void 0!==o["stale-if-error"]?ol`
            The response includes a \`stale-if-error\` directive set to ${o["stale-if-error"]} seconds. This means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be
            served in the meantime if any errors are encountered, for ${Ob(o["stale-if-error"])} after the response expires.
        `:"",y=o["must-revalidate"]?ol`
            This response includes a \`must-revalidate\` directive, which means caches must
            ensure expired content is _always_ forwarded to & revalidated by the origin server,
            and expired content must never be used, even if the server is unavailable, if
            requested explicitly, or if serving stale content has been enabled elsewhere.
        `:o["proxy-revalidate"]?ol`
            This response includes a \`proxy-revalidate\` directive, which means shared
            caches (e.g. CDNs or proxies) must ensure expired content is always forwarded
            to & revalidated by the origin server, and expired content must never be used,
            even if the server is unavailable, if requested explicitly, or if serving
            stale content has been enabled elsewhere.

            ${f||ol`
                It does not include a \`must-revalidate\` directive, so private client caches
                are still allowed to use stale responses if necessary.
            `}
        `:ol`
            ${f}

            As the response does not include a \`must-revalidate\` directive,
            expired responses may be used if explicitly requested or necessary, for
            example if the origin server is not responding.
        `;if(u)return{summary:`Expires immediately${l!==i?` (or after ${Ob(l)} for shared caches)`:""}${g}`,explanation:ol`
                ${h}.

                ${y}
            `};const v=!o.immutable&&d&&d>=31536e3;return{summary:void 0!==d?`Expires after ${Ob(d)}${l!==i?` (${Ob(l)} for shared caches)`:""}${g}`:`Expires unpredictably${l!==i?` for private caches, or after ${Ob(l)} for shared caches`:""}${g}`,type:v?"suggestion":void 0,explanation:ol`
            ${h}.

            ${y}

            ${v?ol`
                :suggestion: This expiry time is more than a year away, which suggests that the
                content never changes. This could be more effective with the \`immutable\`
                Cache-Control directive, which completely avoids revalidation
                requests for this content in extra cases, such as explicit page refreshes,
                saving validation time.
            `:""}
        `}}function Db(e,t){return e.toFixed(t)}const Mb=(0,xe.PA)((e=>{let t;return"durationMs"in e?t=e.durationMs:e.timingEvents&&(t=(e=>{var t;const n=null!==(t=e.responseSentTimestamp)&&void 0!==t?t:e.abortedTimestamp;return void 0!==e.startTimestamp&&void 0!==n?n-e.startTimestamp:void 0!==e.startTime?A.getTime()-e.startTime:void 0})(e.timingEvents)),void 0===t?null:ve.createElement(Au,{className:e.className},t<100?Db(t,1)+"ms":t<1e3?Db(t,0)+"ms":t<5e3?Db(t/1e3,2)+" seconds":t<9900?Db(t/1e3,1)+" seconds":Db(t/1e3,0)+" seconds")})),Bb=(0,xe.WQ)("accountStore")((0,xe.PA)((e=>{const{exchange:t,accountStore:n}=e,{isPaidUser:r}=n;return ve.createElement(yu,Object.assign({},e),ve.createElement("header",null,r?ve.createElement(Mb,{timingEvents:t.timingEvents}):ve.createElement(vv,null),ve.createElement(bu,{onCollapseToggled:e.onCollapseToggled},"Performance")),r?ve.createElement("div",null,ve.createElement(Jb,{exchange:t}),ve.createElement(Gb,{exchange:t})):ve.createElement(xv,{source:"performance"},ve.createElement("p",null,"See timing info, dive into the real and potential compression of every exchange, and understand how & where this response could be cached, for a full performance overview.")))})));function Fb(e){return"br"===e?"brotli":"zstd"===e?"zstandard":"gzip"===e||"x-gzip"===e?"gzip":"deflate"===e||"x-deflate"===e?"zlib":m.upperFirst(e)}const Nb=(0,xe.PA)((e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r}=e,o=r?Math.round(100*(1-n/r)):void 0;return ve.createElement(ve.Fragment,null,t.length?ve.createElement(ve.Fragment,null,"compressed with ",ve.createElement("strong",null,Rt(t,", "," and then ")),", making it ",void 0!==o&&r?ve.createElement(ve.Fragment,null,ve.createElement("strong",null,o>=0?`${o}% smaller`:-o+"% bigger")," (",Ut(r)," to ",Ut(n),")"):ve.createElement(Ro,{icon:["fas","spinner"],spin:!0})):ve.createElement("strong",null,"not compressed"))})),Lb=Le.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-right: 10px;
`,Ub=Le(Au)`
    flex-shrink: 0;
`,Wb=(0,xe.PA)((e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r,encodingTestResults:o}=e;if(!m.isEmpty(o)&&r){const e=Math.round(100*(1-n/r));return ve.createElement(Lb,null,m(o).omitBy(((e,n)=>1===t.length&&n===t[0])).map(((t,n)=>{const o=Math.round(100*(1-t/r));return ve.createElement(Ub,{key:n,title:`${Ut(r)} would compress to ${Ut(t)} using ${n}`,color:o>e&&o>0?"#4caf7d":"#888"},m.upperFirst(n),": ",o,"%")})).valueOf())}return ve.createElement(Ro,{icon:["fas","spinner"],spin:!0})})),zb=Le.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`,_b=Le.p`
    margin-bottom: 10px;
    line-height: 1.3;

    &:last-child {
        margin-bottom: 0;
    }
`,Vb=Le(_b)`
    font-style: italic;
`,Jb=(0,xe.PA)((e=>{const t=cn(e.exchange.request.headers["accept-encoding"]).map(Fb);return ve.createElement(ve.Fragment,null,["request","response"].map((n=>{const r=e.exchange[n],o=function(e){return e&&"aborted"!==e?cn(e.headers["content-encoding"]).filter((e=>!!e&&"identity"!==e)).map(Fb):[]}(r);if("object"!=typeof r||!r.body.encoded.byteLength)return null;const s=r.body.encoded,a=r.body.decoded,i=a?a.byteLength:0,l=s.byteLength,c=m.mapKeys(function(e){if(!e.body.decoded)return;const t=e.cache,n=t.get(xb);if(n)return n.get();{const n=w.observable.box();return t.set(xb,n),function(e){return Ki(this,void 0,void 0,(function*(){return(yield Zi({type:"test-encodings",decodedBuffer:e})).encodingSizes}))}(e.body.decoded).then((0,w.action)((e=>{n.set(e)}))).catch((()=>{})),n.get()}}(r),((e,t)=>Fb(t)));let d=m.minBy(Object.keys(c),(e=>c[e]));const u=i&&d&&!(1===o.length&&d===o[0])&&c[d]<Math.min(l,i);return ve.createElement(ve.Fragment,{key:n},ve.createElement(Gu,null,m.upperFirst(n)," Compression"),ve.createElement(_b,null,"The ",n," body was ",ve.createElement(Nb,{encodings:o,encodedBodyLength:l,decodedBodyLength:(0,Un.Jt)(a,"byteLength")}),"."),ve.createElement(zb,null,ve.createElement(Wb,{encodings:o,encodedBodyLength:l,decodedBodyLength:(0,Un.Jt)(a,"byteLength"),encodingTestResults:c}),ve.createElement(Vb,null,!!u&&ve.createElement(ve.Fragment,null,ve.createElement(Oo,null),"This would be ",Math.round(100*(1-c[d]/l)),"% smaller ",i!==l&&`(${Math.round(100*(1-c[d]/i))}% total compression)`," with ",d,"response"===n&&t&&!m.includes(t,d)&&" (not supported by this client)","."),!!i&&!u&&i<l&&ve.createElement(ve.Fragment,null,ve.createElement(Ao,null),"This ",n," would be smaller without compression."))))})))})),Gb=(0,xe.PA)((e=>{if("object"!=typeof e.exchange.response)return null;const t=function(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if(!wb.includes(t.method)){if("OPTIONS"===t.method&&t.headers.origin){const e=ln(n.headers["access-control-max-age"]),t=e?parseInt(e,10):void 0;return void 0!==t&&t>=1?{cacheable:!0,summary:"Cacheable",explanation:ol`
                        OPTIONS preflight requests are not normally cacheable, and don't observe
                        standard Cache-Control mechanisms, but the CORS result itself will be
                        cached if a Access-Control-Max-Age header is provided, as here.

                        This only affects CORS behaviour for cross-origin requests, and should be
                        ignored (so not cached at all) by all other clients and proxies.
                    `}:void 0!==t&&t<=0?{cacheable:!1,summary:"Not cacheable",explanation:ol`
                        OPTIONS preflight requests don't observe standard Cache-Control
                        mechanisms, but the CORS result itself can be cached if a
                        Access-Control-Max-Age header is provided.

                        In this case that header is set to ${Ri(e)}, explicitly requesting that this result should not be cached,
                        and that clients should not reuse this CORS response in future.
                    `}:{cacheable:!0,summary:"Very briefly cacheable",explanation:ol`
                    OPTIONS preflight requests are not cacheable, unless an Access-Control-Max-Age
                    header is provided. Many clients will very briefly cache the CORS response
                    though, for example Chrome will cache this for 5 seconds.
                `}}return{cacheable:!1,summary:"Not cacheable",explanation:`${Ri(t.method)} requests are never cacheable.`}}const r=Hb(n),o=n.headers.etag||n.headers["last-modified"],s=o||!n.body.encoded.byteLength||r.immutable?"":ol`
            :suggestion: This response doesn't however include any validation headers. That
            means that once it expires, the content must be requested again from scratch. If
            a Last-Modified or ETag header were included then these could be used to make
            conditional HTTP requests and revalidate cached content without re-requesting
            it, saving time and bandwidth.
        `;if(r["no-store"])return{cacheable:!1,summary:"Not cacheable",explanation:ol`
                This response includes a \`no-store\` directive in its Cache-Control
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.
            `};if(cn(n.headers.pragma).includes("no-store"))return{cacheable:!1,summary:"Not cacheable",type:"suggestion",explanation:ol`
                This response includes a \`no-store\` directive in its Pragma
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.

                :suggestion: This Pragma header is commonly supported, but officially
                deprecated. It's typically better to use \`Cache-Control: no-store\` instead.
            `};if(cn(n.headers.vary).includes("*"))return{cacheable:!1,summary:"Not cacheable",explanation:ol`
                This response includes a \`*\` value in its Vary header. This tells caches
                that the response content may vary unpredictably, possibly including factors
                outside the request's content (e.g. the client's network address),
                and so must never be cached.
            `};if("POST"===t.method){const e=ol`
            POST responses are not typically cacheable, but can be used in some
            specific circumstances to prepopulate GET & HEAD caches for the same URI.
            This is allowed by the spec, but not supported by many clients.

            A POST response may be cached and used by for future GET/HEAD requests only if:

            * Explicit freshness information is included (e.g. a \`max-age\` Cache-Control
                directive), and
            * a Content-Location header is included, set to the same
                URI as this request
        `,o=n.headers["content-location"]?new URL(ln(n.headers["content-location"]),t.url):void 0,a=!!r["max-age"]||void 0!==n.headers.expires,i=o&&o.toString().split("#")[0]===t.parsedUrl.toString().split("#")[0];return a&&i?{cacheable:!0,summary:"May be cacheable for future GET/HEAD requests",type:s?"suggestion":void 0,explanation:[e,"This response fulfills those conditions, so may be cacheable by some clients.",s].join("\n\n")}:{cacheable:!1,summary:"Not cacheable",explanation:e+"\n\nThis response does not fulfill those conditions, so is not cacheable by anybody."}}if(void 0!==r["max-age"]){let e;const t=n.headers.date?(0,Ke.parse)(ln(n.headers.date)):void 0;return t?n.headers.expires&&Math.abs((0,Ke.differenceInSeconds)((0,Ke.parse)(ln(n.headers.expires)),(0,Ke.addSeconds)(t,r["max-age"])))>60&&(e=ol`
                :warning: This response also includes an Expires header, which appears to disagree
                with the expiry time calculated from the \`max-age\` directive. The Cache-Control
                headers take precedence, so this will only be used by clients that don't
                support that, but this could cause unpredictable behaviour. It's typically
                better to ensure these values agree on a single expiry time.
            `):e=ol`
                :warning: However, this response does not include a Date header. That value
                would be used in combination with the \`max-age\` value to calculate
                the exact time to expire this content.

                Clients may infer their own expiry start time, potentially using the time they
                received this response, but it's strongly recommended to explicitly specify
                one in the response instead, to ensure this content expires reliably and
                predictably.
            `,{cacheable:!0,summary:"Cacheable",type:e?"warning":s?"suggestion":void 0,explanation:ol`
                This response is cacheable because it specifies an explicit expiry time,
                using a \`max-age\` directive in its Cache-Control header.
                ${e?"\n"+e:s?"\n"+s:""}
            `}}if(void 0!==ln(n.headers.expires))return{cacheable:!0,summary:"Cacheable",type:"suggestion",explanation:ol`
                This response is cacheable because it specifies an explicit expiry time,
                using an Expires header.

                :suggestion: The Expires header is commonly supported, but officially deprecated.
                It's typically better to use \`Cache-Control: max-age=<seconds>\` instead,
                or in addition.
            `};const a=Eb.includes(n.statusCode);if(a||r.public){if(Cb.includes(n.statusCode))return{cacheable:!0,summary:"Cacheable",explanation:ol`
                    ${n.statusCode} responses are cacheable by default. The lifetime of the
                    cached response isn't strictly specified, but since this status code is
                    intended to indicate a permanent change the overwhelming majority of clients
                    will cache it forever.
                `};const e=a?`${n.statusCode} responses are cacheable by default`:"This response includes a `public` Cache-Control directive, explicitly marking it cacheable";return o?r["no-cache"]?{cacheable:!0,summary:"Cacheable",explanation:ol`
                    ${e}.

                    The response does not include any explicit expiry information,
                    but does include a \`no-cache\` directive, meaning the cached content will
                    be revalidated with the origin server on every request, making
                    expiry irrelevant.
                `}:{cacheable:!0,summary:"Probably cacheable",type:"warning",explanation:ol`
                    ${e}. However this response does not explicitly
                    specify when it expires (e.g. with a \`max-age\` Cache-Control
                    directive), so its expiry behaviour is not well defined. Caches
                    may use a heuristic to decide when this response is no longer
                    considered fresh, and some clients may refuse to cache the response
                    entirely.

                    :warning: It's typically better to be explicit about how responses should
                    be cached and expired, rather than depending on this unpredictable behaviour.

                    If an explicit expiry time was set (e.g. using a \`max-age\` Cache-Control
                    directive), this would take precedence over any heuristics, and provide
                    reliable cache expiry. Alternatively this content would be reliably
                    excluded from caching if a \`no-store\` Cache-Control directive was present.
                `}:{cacheable:!1,summary:"Typically not cacheable",type:"warning",explanation:ol`
                    ${e}. However most caches will not store a response
                    like this, which has no explicit expiry time and no way to revalidate
                    the content in future.

                    :warning: It's typically better to be explicit about if and how responses
                    should be cached, rather than depending on the unpredictable behaviour this
                    can cause.

                    This request would be reliably cached if an explicit expiry was set (e.g.
                    with a \`max-age\` Cache-Control directive). Alternatively this would be
                    reliably excluded from caching if a \`no-store\` Cache-Control directive
                    was present.
                `}}return void 0!==r["s-maxage"]?{cacheable:!0,summary:"Not cacheable by private (HTTP client) caches",explanation:ol`
                This response is cacheable because it specifies an explicit expiry time,
                using an \`s-maxage\` Cache-Control directive. This only applies to shared
                caches (e.g. proxies and CDNs), and this response would otherwise not be
                cacheable, so it won't be cached by any HTTP user agents (e.g. browsers).
            `}:{cacheable:!1,summary:"Not cacheable",explanation:ol`
            ${n.statusCode} responses are not cacheable by default.
            This could become cacheable if explicit caching headers were added,
            such as a \`max-age\` Cache-Control directive.
        `}}(e.exchange);if(!t)return null;const n=t.cacheable?[t,Ib(e.exchange),$b(e.exchange),jb(e.exchange)]:[t];return ve.createElement(ve.Fragment,null,ve.createElement(Gu,null,"Caching"),n.map(((e,t)=>ve.createElement(sv,{prefixTrigger:!0,key:t},ve.createElement(cv,null,e.summary," ","warning"===e.type&&ve.createElement(Ao,null),"suggestion"===e.type&&ve.createElement(Oo,null)),ve.createElement(dv,null,ve.createElement(tp,{content:e.explanation}))))))}));var Kb=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Qb=Le.div`
    p {
        margin-bottom: 10px;
    }
`,Yb=Le.div`
    display: flex;
    align-items: center;

    gap: 10px;
    margin-bottom: 10px;
`,Xb=Le.div`
    margin: 0 -20px -20px -20px;

    border: solid 1px ${e=>e.theme.containerBorder};
    padding-right: 1px;
    border-radius: 0 0 3px 3px;

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
`,Zb={readOnly:!0,hover:{enabled:!1}},ex=(0,xe.PA)((e=>{const{target:t,client:n,link:r,description:o}=e.exportOption;let s;try{s=Mf(e.exchange,e.exportOption)}catch(e){console.log(`Failed to export request for ${t}--${n}`),ye(e),s=sl()`
            Could not generate a snippet for this request

            Is this unexpected? Please file a bug at github.com/httptoolkit/httptoolkit.
        `}return ve.createElement(ve.Fragment,null,ve.createElement(Qb,null,ve.createElement("p",null,ve.createElement("strong",null,zf(e.exportOption)),": ",o),ve.createElement(Yb,null,ve.createElement(Bu,{href:r},"Find out more"),ve.createElement(hp,{content:s}," ","Copy snippet"))),ve.createElement(Xb,null,ve.createElement(og,{contentId:null,value:s,language:{javascript:"javascript",node:"javascript",shell:"shell"}[t]||"text",options:Zb})))})),tx=Le((0,xe.PA)((e=>ve.createElement(qu,{className:e.className,onClick:()=>Df(e.exchange),disabled:!e.exchange.response||"aborted"===e.exchange.response},ve.createElement(Ro,{icon:["fas","download"]})," Save as HAR"))))`
    margin-right: auto;
`;let nx=class extends ve.Component{render(){const{exchange:e,accountStore:t}=this.props,{isPaidUser:n}=t;return ve.createElement(yu,Object.assign({},this.props),ve.createElement("header",null,n?ve.createElement(tx,{exchange:e}):ve.createElement(vv,null),ve.createElement(Iu,{onChange:this.setSnippetOption,value:this.snippetOption,optGroups:Ff,keyFormatter:Uf,nameFormatter:zf}),ve.createElement(bu,{onCollapseToggled:this.props.onCollapseToggled},"Export")),n?ve.createElement("div",null,ve.createElement(ex,{exchange:e,exportOption:this.snippetOption})):ve.createElement(xv,{source:"export"},ve.createElement("p",null,"Instantly export requests as code, for languages and tools including cURL, wget, JS (XHR, Node HTTP, Request, ...), Python (native or Requests), Ruby, Java (OkHttp or Unirest), Go, PHP, Swift, HTTPie, and a whole lot more."),ve.createElement("p",null,"Want to save the exchange itself? Export one or all requests as HAR (the"," ",ve.createElement("a",{href:"https://en.wikipedia.org/wiki/.har"},"HTTP Archive Format"),"), to import and examine elsewhere, share with your team, or store for future reference.")))}get snippetOption(){let e=this.props.uiStore.exportSnippetFormat||Lf;return Wf(e)}setSnippetOption(e){this.props.uiStore.exportSnippetFormat=e}};Kb([w.computed],nx.prototype,"snippetOption",null),Kb([w.action.bound],nx.prototype,"setSnippetOption",null),nx=Kb([(0,xe.WQ)("accountStore"),(0,xe.WQ)("uiStore"),xe.PA],nx);const rx=Le(gu)`
    position: sticky;
    top: -10px;
    z-index: 2;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    flex-shrink: 0;
`,ox=Ue`
    padding: 10px 15px;
    font-weight: bold;
    font-size: ${e=>e.theme.textSize};

    margin: 10px 0 0 10px;
    align-self: stretch;
`,sx=Le.p`
    width: 100%;
    margin-bottom: 10px;
    line-height: 1.3;

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,ax=Le(Tu)`${ox}`,ix=Le(Pu)`${ox}`,lx=e=>{const t="fulfilled"===X.state&&h.valid(X.value)&&te(X.value,"^0.1.20 || ^1.0.0");return ve.createElement(rx,null,ve.createElement(sx,null,ve.createElement(Ao,null)," ",Jf(e.type)?ve.createElement("strong",null,"This request could not be handled"):Kf(e.type)?ve.createElement("strong",null,"This request was not forwarded successfully"):ve.createElement("strong",null,"This exchange was not completed successfully")," ",ve.createElement(Ao,null)),ve.createElement(sx,null,Jf(e.type)?ve.createElement(ve.Fragment,null,"The client's request ","invalid-method"===e.type?"used an unsupported HTTP method":"invalid-http-version"===e.type?"used an unsupported HTTP version":"invalid-headers"===e.type?"included an invalid or unparseable header":"client-unparseable-url"===e.type?"included an unparseable URL":"header-overflow"===e.type?"headers were too large to be processed":"client-unparseable"===e.type?"could not be parsed":Pt(e.type),", so HTTP Toolkit did not handle this request."):Kf(e.type)?ve.createElement(ve.Fragment,null,"The upstream server ","wrong-host"===e.type?"responded with an HTTPS certificate for the wrong hostname":"expired"===e.type?"has an expired HTTPS certificate":"not-yet-valid"===e.type?"has an HTTPS certificate with a start date in the future":"untrusted"===e.type?"has an untrusted HTTPS certificate":"tls-error"===e.type?"could not complete a TLS handshake":"host-unreachable"===e.type?"was not reachable on your network connection":"host-not-found"===e.type||"dns-error"===e.type?"hostname could not be found":"connection-refused"===e.type?"refused the connection":Pt(e.type),", so HTTP Toolkit didn't forward the request."):Xf(e.type)?ve.createElement(ve.Fragment,null,"The request timed out ","client-timeout"===e.type?"waiting for the client to send the complete request":"server-timeout"===e.type?"waiting for a response from the server":Pt(e.type)):"client-abort"===e.type?ve.createElement(ve.Fragment,null,"The client unexpectedly disconnected during the request, so the response could not be completed."):Yf(e.type)?ve.createElement(ve.Fragment,null,"The upstream request failed because ","connection-reset"===e.type?"the connection to the server was reset":"server-unparseable"===e.type?"the response from the server was unparseable":Pt(e.type),", so HTTP Toolkit could not return a response to the client."):"unknown"===e.type?ve.createElement(ve.Fragment,null,"The request failed because of an unknown error, so HTTP Toolkit could not return a response."):Pt(e.type)),"tls-error"===e.type?ve.createElement(ve.Fragment,null,ve.createElement(sx,null,"This could be caused by the server not supporting modern ciphers or TLS versions, expecting a client certificate that wasn't provided, or TLS configuration issues in either the server or HTTP Toolkit."),ve.createElement(sx,null,e.isPaidUser?ve.createElement(ve.Fragment,null,"From the Settings page you can configure client certificates, or whitelist this host to relax security requirements and allow self-signed certificates, which may resolve some TLS issues."):ve.createElement(ve.Fragment,null,"Pro users can relax HTTPS requirements for configured hosts to accept older TLS configurations and self-signed/invalid certificates, and configure per-host client certificates for authentication."))):"host-not-found"===e.type?ve.createElement(ve.Fragment,null,ve.createElement(sx,null,"This typically means the host doesn't exist, although it could be an issue with your DNS or network configuration."),ve.createElement(sx,null,"You can define rules to handle requests like this from the Modify page, to return fake data even for servers and hostnames that don't exist.")):"host-unreachable"===e.type?ve.createElement(ve.Fragment,null,ve.createElement(sx,null,"This is typically an issue with your network connection or the host's DNS records."),ve.createElement(sx,null,"You can define rules to handle requests like this from the Modify page, to return fake data even for servers and hostnames that aren't accessible.")):"dns-error"===e.type?ve.createElement(ve.Fragment,null,ve.createElement(sx,null,"The DNS server hit an unknown error looking up this hostname. This is likely due to a issue in your DNS configuration or network connectivity, and may just be a temporary issue."),ve.createElement(sx,null,"You can define rules to handle requests like this from the Modify page, to return fake data even for servers and hostnames that don't exist or aren't accessible.")):"untrusted"===e.type?ve.createElement(sx,null,"By default unrecognized certificate authorities (CAs) are only accepted for localhost servers, but ",e.isPaidUser?"additional CAs can be trusted from the Settings page.":"Pro users can trust additional CAs or disable HTTPS validation for a host entirely."):Zf(e.type)?ve.createElement(sx,null,"By default this is only allowed for localhost servers, but ",e.isPaidUser?"other hosts can be added to the whitelist from the Settings page.":"Pro users can whitelist other custom hosts."):"connection-refused"===e.type?ve.createElement(sx,null,"This typically means the server isn't running on the port you're using, though it is possible this is an intermittent connection issue. You can either try again, or create a rule for requests like this to avoid sending them upstream at all."):"connection-reset"===e.type?ve.createElement(sx,null,"This could be due to a connection issue, or an issue with the server. This may be an intermittent issue that will be solved by retrying the request, or you can create a rule for requests like this to avoid sending them upstream at all."):"client-abort"===e.type?ve.createElement(sx,null,"This could be due to connection issues, problems within the client, or that the client simply no longer wanted to receive the response and closed the connection intentionally."):"client-timeout"===e.type?ve.createElement(sx,null,"This could be due to connection issues, problems within the client, or delays generating the complete body of the request. This might be resolved by retrying the request, or sending a simpler request with a smaller or easier to generate body."):"server-timeout"===e.type?ve.createElement(sx,null,"This could be due to connection issues, problems within the server, or issues with handling this request specifically. This might be resolved by retrying the request, or you can create a rule for requests like this to avoid sending them upstream at all."):Gf(e.type)?ve.createElement(sx,null,"This means the client sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the client, or that they're not sending HTTP at all."):"server-unparseable"===e.type?ve.createElement(sx,null,"This means the server sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the server, or that they're not sending HTTP at all."):"header-overflow"===e.type?ve.createElement(sx,null,X.value&&t?ve.createElement(ve.Fragment,null,"This means the request included more than 100KB of headers. The HTTP specification doesn't set a max length, but most servers will refuse to process anything longer than 8KB. This is likely an issue with your client, but if necessary you can increase the HTTP Toolkit limit by setting ",ve.createElement("code",null,"max-http-header-size")," using the ",ve.createElement("code",null,"HTTPTOOLKIT_NODE_OPTIONS")," environment variable."):X.value?ve.createElement(ve.Fragment,null,"In more recent HTTP Toolkit versions the built-in limit has been increased, so please update HTTP Toolkit to handle requests like these."):ve.createElement(ve.Fragment,null,"The HTTP specification doesn't set a max length for HTTP headers, but most servers will refuse to process anything longer than 8KB.")):"invalid-method"===e.type?ve.createElement(sx,null,"Because this method is unrecognized, HTTP Toolkit doesn't know how it should be handled, and cannot safely forward it on elsewhere. If you think this method should be supported, please ",ve.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"invalid-http-version"===e.type?ve.createElement(sx,null,"The client may be using a newer or experimental HTTP version that HTTP Toolkit doesn't yet support. If you think this version should be supported, please ",ve.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"unknown"===e.type?ve.createElement(sx,null,"It's not clear what's gone wrong here, but for some reason HTTP Toolkit couldn't successfully and/or securely complete this request. This might be an intermittent issue, and may be resolved by retrying the request."):Pt(e.type),Jf(e.type)&&ve.createElement(sx,null,"The data shown below is a best guess from the data that was available and parseable, and may be incomplete or inaccurate."),ve.createElement(ax,{onClick:e.ignoreError,onKeyPress:cu},"Ignore"),ey(e.type)?ve.createElement(ax,{onClick:e.createRuleFromRequest,onKeyPress:cu},"Create a rule"):Zf(e.type)?e.isPaidUser?ve.createElement(ax,{onClick:()=>e.navigate("/settings"),onKeyPress:cu},"Go to Settings"):ve.createElement(ax,{onClick:()=>e.getPro(`error-header-${e.type}`),onKeyPress:cu},"Get Pro"):null)},cx=Le.div`
    height: ${38}px;
    flex-shrink: 0;
    width: 100%;
    padding-left: 5px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;

    align-items: center;
    justify-content: center;

    z-index: 1;
    box-shadow: 0 -10px 30px -5px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,dx=(0,xe.PA)((e=>ve.createElement(lp,{icon:["fas","eye"],title:"Scroll the list to show this exchange",onClick:e.onClick}))),ux=Le((0,xe.PA)((e=>ve.createElement(lp,{className:e.className,icon:["fas","thumbtack"],title:(e.pinned?"Unpin this exchange so it can be deleted":"Pin this exchange, so it can't be deleted")+` (${nu}+P)`,onClick:e.onClick}))))`
    transition: transform 0.1s;

    ${e=>!e.pinned&&Ue`
        transform: rotate(45deg);
    `}
`,px=(0,xe.PA)((e=>ve.createElement(lp,{icon:["far","trash-alt"],title:`Delete this exchange (${nu}+Delete)`,onClick:e.onClick}))),hx=(0,xe.PA)((e=>ve.createElement(lp,{icon:"Pencil",onClick:e.onClick,title:e.isPaidUser?`Create a modify rule from this exchange (${nu}+m)`:"With Pro: create a modify rule from this exchange",disabled:!e.isExchange||!e.isPaidUser}))),mx=(0,xe.PA)((e=>ve.createElement(lp,{icon:"PaperPlaneTilt",onClick:e.onClick,title:e.isPaidUser?`Resend this request (${nu}+r)`:"With Pro: Resend this request",disabled:!e.isExchange||!e.isPaidUser}))),gx=Le((0,xe.WQ)("accountStore")((e=>ve.createElement(wu,{onClick:()=>e.accountStore.getPro("http-event-footer"),className:e.className},ve.createElement(yv,null,"With Pro:")))))`
    padding: 0;
    margin-left: 40px;
`,fx=(0,xe.WQ)("rulesStore")((0,xe.PA)((e=>{const{event:t}=e,{pinned:n}=t;return ve.createElement(cx,null,ve.createElement(dx,{onClick:()=>e.onScrollToEvent(e.event)}),ve.createElement(ux,{pinned:n,onClick:(0,w.action)((()=>{t.pinned=!t.pinned}))}),ve.createElement(px,{pinned:n,onClick:()=>e.onDelete(t)}),!e.isPaidUser&&ve.createElement(gx,null),ve.createElement(hx,{isExchange:t.isHttp()&&!t.isWebSocket(),isPaidUser:e.isPaidUser,onClick:()=>e.onBuildRuleFromExchange(e.event)}),e.onPrepareToResendRequest&&ve.createElement(mx,{isExchange:t.isHttp()&&!t.isWebSocket(),isPaidUser:e.isPaidUser,onClick:()=>e.onPrepareToResendRequest(e.event)}))}))),yx=e=>ve.createElement(rx,null,ve.createElement(sx,null,ve.createElement(Ao,null)," ",ve.createElement("strong",null,"This request is paused at a breakpoint")),ve.createElement(sx,null,te(Z.value,ce)?ve.createElement(ve.Fragment,null,"Edit the request and then resume to let your edited request continue to the target URL, respond directly to provide a response yourself, or close to immediately end the connection."):ve.createElement(ve.Fragment,null,"Respond directly to provide a response yourself, or edit the request as you'd like and then resume to let your edited request continue to the target URL.")),ve.createElement(ix,{onClick:e.onCreateResponse,onKeyPress:cu},"Respond directly"),te(Z.value,ce)?ve.createElement(ix,{onClick:e.onClose,onKeyPress:cu},"Close"):null,ve.createElement(ax,{onClick:e.onResume,onKeyPress:cu},"Resume")),vx=e=>ve.createElement(rx,null,ve.createElement(sx,null,ve.createElement(Ao,null)," ",ve.createElement("strong",null,"This response is paused at a breakpoint")),ve.createElement(sx,null,te(Z.value,ce)?ve.createElement(ve.Fragment,null,"Edit it as you'd like and resume to let the edited response continue back to the client, or close to immediately end the connection."):ve.createElement(ve.Fragment,null,"Edit it as you'd like, then resume to let the edited response continue back to the client.")),te(Z.value,ce)?ve.createElement(ix,{onClick:e.onClose,onKeyPress:cu},"Close"):null,ve.createElement(ax,{onClick:e.onResume,onKeyPress:cu},"Resume"));var bx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const xx=e=>e.map((({key:e,value:t})=>[e,t])),wx=e=>e.map((({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1):e,value:t,disabled:n}))),Ex=e=>e.map((({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1).toLowerCase():e.toLowerCase(),value:t,disabled:n}))),Cx=(0,xe.PA)((e=>{const{headers:t,onChange:n,allowEmptyValues:r,preserveKeyCase:o}=e;return ve.createElement(by,{pairs:(s=t,(e=>e.map((({key:e,value:t})=>e.startsWith(":")?{key:e,value:t,disabled:!0}:{key:e,value:t})))(s.map((([e,t])=>({key:e,value:t}))))),onChange:n,transformInput:o?wx:Ex,convertResult:xx,allowEmptyValues:r,keyValidation:Xt,keyTitle:"Header names must contain only alphanumeric characters and !#$%&'*+-.^_`|~ symbols",keyPlaceholder:"Header name",valuePlaceholder:"Header value"});var s}));let Tx=class extends ve.Component{constructor(){super(...arguments),this.rawHeaders=this.props.convertToRawHeaders(this.props.headers),this.output=this.props.headers}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>this.props.headers),(e=>{if(!m.isEqual(e,this.output)){const t=this.props.convertToRawHeaders(e);(0,w.runInAction)((()=>{this.rawHeaders=t}))}})))}onChangeRawHeaders(e){this.rawHeaders=e;const{allowEmptyValues:t,convertFromRawHeaders:n,onChange:r,onInvalidState:o}=this.props;if(t)this.output=n(e),r(this.output);else{if(e.some((([e,t])=>!t)))return null==o?void 0:o();if(e.some((([e])=>!e)))return null==o?void 0:o();this.output=n(e),r(this.output)}}render(){const{allowEmptyValues:e}=this.props,{rawHeaders:t,onChangeRawHeaders:n}=this;return ve.createElement(Cx,{headers:t,onChange:n,allowEmptyValues:e})}};bx([w.observable],Tx.prototype,"rawHeaders",void 0),bx([w.action.bound],Tx.prototype,"onChangeRawHeaders",null),Tx=bx([xe.PA],Tx);var Sx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Px=Le(Ru)`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
`,kx=Object.values(Vo.IT).filter((e=>"string"==typeof e)),Rx=Le(Ou)`
    font-size: ${e=>e.theme.textSize};
    display: inline-block;

    width: auto;
    margin-left: 8px;
    margin-bottom: 5px;
`;let Ox=class extends ve.Component{render(){const e=this.props,{exchange:t,onChange:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["exchange","onChange"]),{request:o}=t,{inProgressResult:s}=this.props.exchange.requestBreakpoint,a=s.rawHeaders||[],{method:i,url:l}=s;return ve.createElement(yu,Object.assign({},r,{direction:"right"}),ve.createElement("header",null,ve.createElement(Wv,{source:o.source}),ve.createElement(Au,{color:In(t)},i," ",(o.hostname||"").replace(/\./g," . ")),ve.createElement(bu,{onCollapseToggled:r.onCollapseToggled},"Request")),ve.createElement("div",null,ve.createElement(Vu,null,"Method:"),ve.createElement(Rx,{value:i,onChange:this.onMethodChanged},!kx.includes(i)&&ve.createElement("option",{key:i,value:void 0},i),kx.map((e=>ve.createElement("option",{key:e,value:e},e))))),ve.createElement(Gu,null,"URL"),ve.createElement(Px,{value:l,onChange:this.onUrlChanged}),ve.createElement(Gu,null,"Headers"),ve.createElement(Cx,{headers:a,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}get isHttp2(){return 2===this.props.exchange.httpVersion}onMethodChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;t!==n.method&&(this.isHttp2?this.props.onChange({method:t,rawHeaders:an(n.rawHeaders,{":method":t})}):this.props.onChange({method:t}))}onUrlChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;let r=n.rawHeaders;try{const e=new URL(t);r=this.isHttp2?an(r,{":authority":e.host,":path":e.pathname+e.search,":scheme":e.protocol.slice(0,-1)}):an(r,{host:e.host})}catch(e){}this.props.onChange({url:e.target.value,rawHeaders:r})}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}};Sx([w.computed],Ox.prototype,"isHttp2",null),Sx([w.action.bound],Ox.prototype,"onMethodChanged",null),Sx([w.action.bound],Ox.prototype,"onUrlChanged",null),Sx([w.action.bound],Ox.prototype,"onHeadersChanged",null),Ox=Sx([xe.PA],Ox);const Hx=Le.div`
    margin-top: 5px;

    display: flex;
    flex-direction: row;
    align-items: stretch;

    > :not(:last-child) {
        margin-right: 5px;
    }

    > :last-child {
        flex-grow: 1;
    }
`;function Ax(e,t){return e.toLowerCase()===Qt(t).toLowerCase()}const qx=e=>{const{statusCode:t}=e,n=void 0===e.statusMessage||2===e.httpVersion?Qt(t):e.statusMessage;return ve.createElement(Hx,{className:e.className},ve.createElement(Ru,{type:"number",min:"100",max:"999",invalid:!t,value:t,onChange:r=>{let o=""!==r.target.value?parseInt(r.target.value,10):void 0;if(m.isNaN(o))return;const s=Ax(n,t)?void 0:e.statusMessage;e.onChange(o,s)}}),ve.createElement(Ru,{disabled:2===e.httpVersion,value:n,onChange:n=>{let r=n.target.value;Ax(r,t)&&(r=void 0),e.onChange(t,r)}}))};var $x=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Ix=Le.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`,jx=Le(qx)`
    margin-left: 10px;
    margin-bottom: 5px;
    flex-basis: 100%;
`;let Dx=class extends ve.Component{render(){const e=this.props,{exchange:t,onChange:n,theme:r}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["exchange","onChange","theme"]),{inProgressResult:s}=t.responseBreakpoint,a=s.rawHeaders||[],{statusCode:i,statusMessage:l}=s;return ve.createElement(yu,Object.assign({},o,{direction:"left"}),ve.createElement("header",null,ve.createElement(Au,{color:jn(s.statusCode,r)},i),ve.createElement(bu,{onCollapseToggled:o.onCollapseToggled},"Response")),ve.createElement(Ix,null,ve.createElement(Vu,null,"Status:"),ve.createElement(jx,{httpVersion:t.httpVersion,statusCode:i,statusMessage:l,onChange:this.onStatusChange})),ve.createElement(Gu,null,"Headers"),ve.createElement(Cx,{headers:a,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}onStatusChange(e,t){var n;if(2===this.props.exchange.httpVersion){const{rawHeaders:r}=this.props.exchange.responseBreakpoint.inProgressResult;this.props.onChange({statusCode:e||NaN,statusMessage:t,rawHeaders:an(r,{":status":null!==(n=null==e?void 0:e.toString())&&void 0!==n?n:""})})}else this.props.onChange({statusCode:e||NaN,statusMessage:t})}};$x([w.action.bound],Dx.prototype,"onHeadersChanged",null),$x([w.action.bound],Dx.prototype,"onStatusChange",null),Dx=$x([xe.PA],Dx);var Mx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Bx=class extends ve.Component{constructor(){super(...arguments),this.contentType="text",this.onBodyChange=e=>{this.props.onChange(Mt(e,this.textEncoding))}}onChangeContentType(e){this.contentType=e}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>nn(this.props.rawHeaders,"content-type")),(e=>{this.contentType=wn(e)||"text"}),{fireImmediately:!0}))}get textEncoding(){return Dt(this.props.body.decoded)?"utf8":"binary"}render(){const{body:e,rawHeaders:t,title:n,exchangeId:r,direction:o,collapsed:s,expanded:a,onCollapseToggled:i,onExpandToggled:l,ariaLabel:c}=this.props,d=Bt(e.decoded,this.textEncoding);return ve.createElement(yu,{ariaLabel:c,direction:o,collapsed:s,onCollapseToggled:i,expanded:a},ve.createElement("header",null,ve.createElement(By,{body:e,onBodyFormatted:this.onBodyChange,title:n,expanded:a,onExpandToggled:l,onCollapseToggled:i,selectedContentType:this.contentType,contentTypeOptions:yn,onChangeContentType:this.onChangeContentType})),"rejected"===e.latestEncodingResult.state&&ve.createElement(Ny,{error:e.latestEncodingResult.value,headers:t,type:"encoding"}),ve.createElement(jy,{showFullBorder:!a},ve.createElement(_m.bL,{contentId:`bp-${r}-${o}`,node:this.props.editorNode,language:this.contentType,value:d,onChange:this.onBodyChange,expanded:!!a})))}};Mx([w.observable],Bx.prototype,"contentType",void 0),Mx([w.action.bound],Bx.prototype,"onChangeContentType",null),Mx([w.computed],Bx.prototype,"textEncoding",null),Bx=Mx([xe.PA],Bx);var Fx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const Nx=Le.div`
    margin-top: auto;
`;let Lx=class extends ve.Component{get cardProps(){return this.props.uiStore.viewCardProps}render(){var e,t;const{exchange:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:s,onPrepareToResendRequest:a,uiStore:i,accountStore:l,navigate:c}=this.props,{isPaidUser:d}=l,{expandedViewCard:u}=i,{requestBreakpoint:p,responseBreakpoint:h}=n,g=d||(null===(e=n.api)||void 0===e?void 0:e.isBuiltInApi)?n.api:void 0,f=(null===(t=n.api)||void 0===t?void 0:t.matchedOperation())?(e=>{const t=!e.includes(" ")&&e.length>6?m.startCase(e):e;return t.length>75?t.slice(0,72).trimRight()+"…":t})(n.api.service.name):void 0,y=this.renderHeaderCard(n);if(u)return ve.createElement(ny,null,y,this.renderExpandedCard(u,n,g));const v=p||h?this.renderBreakpointCards(n,f,g):this.renderNormalCards(n,f,g);return ve.createElement(ny,null,ve.createElement(sy,null,y,v),ve.createElement(fx,{event:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:s,onPrepareToResendRequest:a,navigate:c,isPaidUser:d}))}renderHeaderCard(e){const{accountStore:t,navigate:n}=this.props,{isPaidUser:r,getPro:o}=t,{requestBreakpoint:s,respondToBreakpointedRequest:a,responseBreakpoint:i,tags:l}=e;if(s)return ve.createElement(yx,{key:"breakpoint-header",onCreateResponse:a,onResume:s.resume,onClose:s.close});if(i)return ve.createElement(vx,{key:"breakpoint-header",onResume:i.resume,onClose:i.close});const c={key:"error-header",isPaidUser:r,getPro:o,navigate:n,createRuleFromRequest:this.createRuleFromRequest,ignoreError:this.ignoreError},d=ty(l);return d&&!e.hideErrors?ve.createElement(lx,Object.assign({type:d},c)):null}renderApiCard(e,t){return e?t?ve.createElement(Lv,Object.assign({},this.cardProps.api,{apiName:e,apiExchange:t})):ve.createElement(Uv,Object.assign({},this.cardProps.api,{apiName:e})):null}renderExpandedCard(e,t,n){return"requestBody"===e?this.renderRequestBody(t,n):"responseBody"===e&&(t.isSuccessfulExchange()||t.responseBreakpoint)?this.renderResponseBody(t,n):"webSocketMessages"===e&&t.isWebSocket()&&t.wasAccepted()?this.renderWebSocketMessages(t):(ye(`Expanded ${e}, but can't show anything`),null)}renderBreakpointCards(e,t,n){const{uiStore:r}=this.props,{requestBreakpoint:o}=e,s=[];if(o)s.push(ve.createElement(Ox,Object.assign({},this.cardProps.request,{exchange:e,onChange:o.updateMetadata}))),s.push(this.renderRequestBody(e,n));else{const o=e.responseBreakpoint;s.push(this.renderApiCard(t,n)),s.push(ve.createElement(gb,Object.assign({},this.cardProps.request,{matchedRuleData:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&s.push(this.renderRequestBody(e,n)),s.push(ve.createElement(Dx,Object.assign({},this.cardProps.response,{exchange:e,onChange:o.updateMetadata,theme:r.theme}))),s.push(this.renderResponseBody(e,n))}return s}renderNormalCards(e,t,n){var r,o,s;const{uiStore:a}=this.props,{response:i}=e,l=[];return l.push(this.renderApiCard(t,n)),l.push(ve.createElement(gb,Object.assign({},this.cardProps.request,{matchedRuleData:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&l.push(this.renderRequestBody(e,n)),(null===(r=e.request.rawTrailers)||void 0===r?void 0:r.length)&&l.push(ve.createElement(bb,Object.assign({},this.cardProps.requestTrailers,{type:"request",httpVersion:e.httpVersion,requestUrl:e.request.parsedUrl,trailers:e.request.rawTrailers}))),"aborted"===i?l.push(ve.createElement(vb,{key:this.cardProps.response.key,cardProps:this.cardProps.response,exchange:e})):i&&(l.push(ve.createElement(fb,Object.assign({},this.cardProps.response,{httpVersion:e.httpVersion,response:i,requestUrl:e.request.parsedUrl,apiExchange:n,theme:a.theme}))),e.hasResponseBody()&&l.push(this.renderResponseBody(e,n)),e.isSuccessfulExchange()&&(null===(s=null===(o=e.response)||void 0===o?void 0:o.rawTrailers)||void 0===s?void 0:s.length)&&l.push(ve.createElement(bb,Object.assign({},this.cardProps.responseTrailers,{type:"response",httpVersion:e.httpVersion,requestUrl:e.request.parsedUrl,trailers:e.response.rawTrailers})))),e.isWebSocket()?e.wasAccepted()&&(l.push(this.renderWebSocketMessages(e)),e.closeState&&l.push(ve.createElement(uv,Object.assign({},this.cardProps.webSocketClose,{theme:a.theme,closeState:e.closeState})))):e.tags.some((e=>e.startsWith("client-error:")))||(l.push(ve.createElement(Nx,{key:"divider"})),l.push(ve.createElement(Bb,Object.assign({exchange:e},this.cardProps.performance))),l.push(ve.createElement(nx,Object.assign({exchange:e},this.cardProps.export)))),l}renderRequestBody(e,t){var n;const{request:r,requestBreakpoint:o}=e;return o?ve.createElement(Bx,Object.assign({},this.requestBodyParams(),{exchangeId:e.id,body:o.inProgressResult.body,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):ve.createElement(gv,Object.assign({},this.requestBodyParams(),{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.request)||void 0===n?void 0:n.bodySchema}))}renderResponseBody(e,t){var n;const{response:r,responseBreakpoint:o}=e;return o?ve.createElement(Bx,Object.assign({},this.responseBodyParams(),{exchangeId:e.id,body:o.inProgressResult.body,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):ve.createElement(gv,Object.assign({},this.responseBodyParams(),{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.response)||void 0===n?void 0:n.bodySchema}))}renderWebSocketMessages(e){const t=e.request.url.split("/"),n=t[2].split(":")[0],r=t.length>=2?t[t.length-1]:void 0,o=`${n}${r?`- ${r}`:""} - websocket`;return ve.createElement(Zy,Object.assign({},this.cardProps.webSocketMessages,{key:`${this.cardProps.webSocketMessages.key}-${this.props.exchange.id}`,streamId:this.props.exchange.id,streamType:"WebSocket",editorNode:this.props.streamMessageEditor,isPaidUser:this.props.accountStore.isPaidUser,filenamePrefix:o,messages:e.messages}))}requestBodyParams(){return Object.assign(Object.assign({},this.cardProps.requestBody),{title:"Request Body",direction:"right",editorNode:this.props.requestEditor})}responseBodyParams(){return Object.assign(Object.assign({},this.cardProps.responseBody),{title:"Response Body",direction:"left",editorNode:this.props.responseEditor})}createRuleFromRequest(){const{exchange:e,rulesStore:t,navigate:n}=this.props,r=function(e,t){return{id:p(),type:"http",activated:!0,matchers:qd(t),handler:new ks(e),completionChecker:new Vo.zO.Always}}(t,e.request);t.draftRules.items.unshift(r),n(`/modify/${r.id}`)}get matchedRuleData(){const{exchange:e,rulesStore:t}=this.props,{matchedRule:n}=e;if(!n)return;const r=ls(t.draftRules,{id:n.id});if(!r)return{stepTypes:n.handlerStepTypes,status:"deleted"};const o=("handler"in r?[r.handler]:r.steps).map((e=>za(e)));return m.isEqual(o,n.handlerStepTypes)?{stepTypes:n.handlerStepTypes,status:"unchanged"}:{stepTypes:n.handlerStepTypes,status:"modified-types"}}jumpToRule(){const{navigate:e,exchange:t}=this.props,{matchedRule:n}=t;n&&e(`/modify/${n.id}`)}ignoreError(){const{exchange:e}=this.props;e.hideErrors=!0}};Fx([w.action.bound],Lx.prototype,"createRuleFromRequest",null),Fx([w.computed],Lx.prototype,"matchedRuleData",null),Fx([w.action.bound],Lx.prototype,"jumpToRule",null),Fx([w.action.bound],Lx.prototype,"ignoreError",null),Lx=Fx([(0,xe.WQ)("uiStore"),(0,xe.WQ)("accountStore"),(0,xe.WQ)("rulesStore"),xe.PA],Lx);const Ux=Le(Ro).attrs({icon:Po.Android.icon})`
    float: left;
    margin-right: 10px;
    margin-top: 3px;
    color: ${Po.Android.color};
`;class Wx extends ve.Component{render(){const{failure:e,certPath:t}=this.props,n=Kc(e.remoteIpAddress).split(" "),r=n[0],o=n.slice(1).join(" ");return ve.createElement(ny,null,ve.createElement(sy,null,ve.createElement(gu,null,ve.createElement("header",null,ve.createElement("h1",null,"Failed HTTPS Request")),ve.createElement(Gu,null,"Details"),ve.createElement(ep,null,ve.createElement("p",null,{closed:ve.createElement(ve.Fragment,null,"This connection was aborted and closed before any HTTP request was sent."),reset:ve.createElement(ve.Fragment,null,"This connection was aborted and reset before any HTTP request was sent."),"cert-rejected":ve.createElement(ve.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client did not trust the HTTP Toolkit certificate."),"no-shared-cipher":ve.createElement(ve.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client failed to agree on a TLS configuration."),unknown:ve.createElement(ve.Fragment,null,"This connection was aborted, before any HTTP request was sent, due to a TLS error.")}[e.failureCause]),ve.createElement("p",null,"The request was sent by ",ve.createElement(Yu,null,r)," ",o,".")),ve.createElement(Gu,null,"Cause"),ve.createElement(ep,null,"cert-rejected"===e.failureCause?ve.createElement("p",null,"This means that the client hasn't yet been fully configured to work with HTTP Toolkit. It has the proxy settings, but it doesn't trust our certificate authority (CA), so we can't we can't intercept its HTTPS traffic."):"no-shared-cipher"===e.failureCause?ve.createElement(ve.Fragment,null,ve.createElement("p",null,"This usually means that the client hasn't yet been 100% configured to work with HTTP Toolkit, although it's also possible that it has an unusual TLS setup."),ve.createElement("p",null,"The former case is much more likely. That would mean that the client has the right proxy settings, but doesn't trust our certificate authority (CA), so we can't imitate HTTPS sites and we can't collect or see its HTTPS traffic.")):ve.createElement(ve.Fragment,null,ve.createElement("p",null,"This could be caused by a few things:"),ve.createElement("ul",null,ve.createElement("li",null,"The client might no longer want to make the request"),ve.createElement("li",null,"The client might have connection issues"),ve.createElement("li",null,"The client might not trust our HTTPS certificate")))),ve.createElement(Gu,null,"Solutions"),ve.createElement(ep,null,ve.createElement("p",null,"cert-rejected"===e.failureCause?ve.createElement(ve.Fragment,null,"To resolve this, you need to configure the client to trust your HTTP Toolkit CA."):"no-shared-cipher"===e.failureCause?ve.createElement(ve.Fragment,null,"You probably need to ensure the client is configured to trust the HTTP Toolkit CA."):ve.createElement(ve.Fragment,null,"In the first two cases, this is not related to HTTP Toolkit. In the third case, you need to configure the client to trust your HTTP Toolkit CA.")),ve.createElement("p",null,"How you do this depends on the specific client. Opening the certificate file on the device may prompt you to trust it device-wide, or you may need a specific option for the HTTP library or tool that's being used."),ve.createElement("p",null,"Your HTTP Toolkit certificate is stored on your machine at ",ve.createElement(Yu,null,t)),ve.createElement(Ux,null),ve.createElement("p",null,ve.createElement("strong",null,"For Android devices"),", modern apps will not trust your installed CA certificates by default. For apps targeting API level 24+, the app must opt in to trusting user CA certificates, or you need to inject a system certificate (only possible on rooted devices and emulators)."),ve.createElement("p",null,"Trusting user CA certificates in your own app is a small & simple configuration change, see ",ve.createElement("a",{href:"https://httptoolkit.com/docs/guides/android#intercepting-traffic-from-your-own-android-app"},"the HTTP Toolkit docs"),' for more details. Alternatively HTTP Toolkit can inject the system certificate for you automatically, on devices that support this, by connecting the device with ADB and using the "Android device via ADB" interception option.'),ve.createElement("p",null,"Take a look at the ",ve.createElement("a",{href:"https://httptoolkit.com/docs/guides/android/"},"Android interception guide")," for more information.")))))}}class zx extends ve.Component{render(){const{tunnel:e}=this.props,t=Kc(e.remoteIpAddress).split(" "),n=t[0],r=t.slice(1).join(" ");return ve.createElement(ny,null,ve.createElement(sy,null,ve.createElement(gu,null,ve.createElement("header",null,ve.createElement("h1",null,"TLS Tunnel")),ve.createElement(Gu,null,"Details"),ve.createElement(ep,null,ve.createElement("p",null,"This TLS connection was not intercepted by HTTP Toolkit, as it matched a hostname that is configured for TLS passthrough in your settings.")),ve.createElement(ep,null,ve.createElement("p",null,"The connection was made from ",ve.createElement(Yu,null,n,":",e.remotePort)," ",r," to ",ve.createElement(Yu,null,e.upstreamHostname,":",e.upstreamPort),".")))))}}const _x=(0,xe.PA)((e=>{var{dataChannel:t,isPaidUser:n,streamMessageEditor:r}=e,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["dataChannel","isPaidUser","streamMessageEditor"]);return ve.createElement(Zy,Object.assign({},o,{key:t.id,streamId:t.id,streamType:"DataChannel",streamLabel:t.label,editorNode:r,isPaidUser:n,filenamePrefix:"DataChannel "+(t.label||t.channelId),messages:t.messages}))})),Vx=(0,xe.PA)((e=>ve.createElement(rx,null,ve.createElement(sx,null,"Part of a WebRTC Connection from ",ve.createElement(Yu,null,e.connection.clientURL)," to ",ve.createElement(Yu,null,e.connection.remoteURL)),ve.createElement(ix,{onClick:e.hideConnection,onKeyPress:cu},"Hide"),ve.createElement(ax,{onClick:e.jumpToConnection,onKeyPress:cu},"Jump to connection"))));var Jx=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Gx=class extends ve.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.dataChannel;this.props.navigate(`/view/${e.id}`)}}hideConnection(){this.isConnectionHidden=!0}render(){const{dataChannel:e,streamMessageEditor:t,accountStore:n}=this.props;return ve.createElement(ny,null,!this.isConnectionHidden&&ve.createElement(Vx,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),ve.createElement(_x,{dataChannel:e,isPaidUser:n.isPaidUser,streamMessageEditor:t,collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0,ariaLabel:"RTC Data Messages Section"}))}};Jx([w.observable],Gx.prototype,"isConnectionHidden",void 0),Jx([w.action.bound],Gx.prototype,"hideConnection",null),Gx=Jx([(0,xe.WQ)("accountStore"),xe.PA],Gx);var Kx=n(24919),Qx=n(18995),Yx=n(41941),Xx=n(9237),Zx=n(67694),ew=n(99150),tw=n(16491);const nw=In("data"),rw=In("rtc-media"),ow=Le.svg`
    background-color: ${e=>e.theme.mainLowlightBackground};
    color: ${e=>e.theme.mainColor};

    .axis-label {
        font-size: 15px;
    }

    .axis-tick text {
        font-size: 12px;
    }
`,sw=({width:e,height:t,graphPaddingPx:n,data:r})=>{var o;const s=n,a=t-n,i=a-s,l=85+n,c=e-l,d=(0,Qx.A)().domain([0,r.length-1]).range([0,c]),u=null!==(o=g().max(r.map((e=>Math.max(e.sent,e.received)))))&&void 0!==o?o:0,p=(0,Qx.A)().domain([0,u]).range([i/2,s]),h=(0,Qx.A)().domain([0,u]).range([i/2,a]),m=r.map((e=>e.sent)),f=r.map((e=>e.received));return ve.createElement(ow,{width:e,height:t},ve.createElement(ew.A,{left:l},ve.createElement(aw,{label:"Received",data:f,xScale:d,yScale:h,fill:rw}),ve.createElement(aw,{label:"Sent",data:m,xScale:d,yScale:p,fill:nw})))},aw=e=>ve.createElement(ve.Fragment,null,ve.createElement(tw.A,{scale:e.yScale,label:e.label,labelOffset:55,labelClassName:"axis-label",tickFormat:e=>Ut(e.valueOf()),tickClassName:"axis-tick",numTicks:6}),ve.createElement(Yx.A,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},yScale:e.yScale,fill:e.fill,curve:Zx.G}),ve.createElement(Xx.A,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},stroke:"#222",strokeWidth:1.5,curve:Zx.G}));var iw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const lw=(0,xe.PA)((e=>{const{mediaTrack:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["mediaTrack"]);return ve.createElement(yu,Object.assign({},n),ve.createElement("header",null,ve.createElement(py,null,ve.createElement(hy,{expanded:n.expanded,onClick:n.onExpandToggled})),ve.createElement(Au,{color:nw},Ut(t.totalBytesSent)," sent"),ve.createElement(Au,{color:rw},Ut(t.totalBytesReceived)," received"),ve.createElement(bu,{onCollapseToggled:n.onCollapseToggled},"RTC ",t.type)),ve.createElement(cw,null,ve.createElement(dw,{mediaTrack:t})))})),cw=Le.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};

    position: relative;
    flex-grow: 1;

    min-height: 400px;

    /* Fix the ParentSize measuring div to match our size exactly. */
    > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;let dw=class extends ve.Component{get graphData(){const{stats:e}=this.props.mediaTrack;return m.map(e,(e=>({sent:e.sentDelta,received:e.receivedDelta})))}render(){return ve.createElement(Kx.A,null,(e=>ve.createElement(xe.nu,null,(()=>ve.createElement(sw,{width:e.width,height:e.height,graphPaddingPx:10,data:this.graphData})))))}};iw([w.computed],dw.prototype,"graphData",null),dw=iw([xe.PA],dw);var uw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let pw=class extends ve.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.mediaTrack;this.props.navigate(`/view/${e.id}`)}}hideConnection(){this.isConnectionHidden=!0}render(){const{mediaTrack:e}=this.props;return ve.createElement(ny,null,!this.isConnectionHidden&&ve.createElement(Vx,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),ve.createElement(lw,{collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0,ariaLabel:"RTC Media Stream Section",key:e.id,mediaTrack:e}))}};uw([w.observable],pw.prototype,"isConnectionHidden",void 0),uw([w.action.bound],pw.prototype,"hideConnection",null),pw=uw([xe.PA],pw);var hw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let mw=class extends ve.Component{get hasData(){const{streams:e}=this.props.connection;return e.some((e=>e.isRTCDataChannel()))}get hasAudio(){const{streams:e}=this.props.connection;return e.some((e=>e.isRTCMediaTrack()&&"audio"===e.type))}get hasVideo(){const{streams:e}=this.props.connection;return e.some((e=>e.isRTCMediaTrack()&&"video"===e.type))}render(){const e=this.props,{connection:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["connection"]);return ve.createElement(yu,Object.assign({},n),ve.createElement("header",null,ve.createElement(Wv,{source:t.source}),this.hasData&&ve.createElement(Au,{color:In("data")},"Data"),this.hasVideo&&ve.createElement(Au,{color:In("image")},"Video"),this.hasAudio&&ve.createElement(Au,{color:In("css")},"Audio"),ve.createElement(bu,{onCollapseToggled:n.onCollapseToggled},"WebRTC Connection")),ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"Connection type: "),ve.createElement(Ju,null,"host"===t.remoteCandidate.type?"Direct":"relay"===t.remoteCandidate.type?"TURN-relayed":"srflx"===t.remoteCandidate.type?"STUN-directed":"Peer-reflexive"," ",t.remoteCandidate.protocol.toUpperCase()))),ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"From: "),ve.createElement(Qu,null,t.clientURL))),ve.createElement(sv,null,ve.createElement(cv,null,ve.createElement(Vu,null,"To: "),ve.createElement(Qu,null,t.remoteURL))),t.sourceURL&&ve.createElement(ve.Fragment,null,ve.createElement(Gu,null,"Source page: "),ve.createElement(sv,{prefixTrigger:!0},ve.createElement(cv,null,ve.createElement(Qu,null,t.sourceURL.toString())),ve.createElement(dv,null,ve.createElement(pb,{url:t.sourceURL})))),t.source!==Lo&&ve.createElement(ve.Fragment,null,ve.createElement(Gu,null,"Client: "),ve.createElement(sv,{prefixTrigger:!0},ve.createElement(cv,null,ve.createElement(Qu,null,t.source.ua)),ve.createElement(dv,null,ve.createElement("p",null,t.source.description)))))}};hw([w.computed],mw.prototype,"hasData",null),hw([w.computed],mw.prototype,"hasAudio",null),hw([w.computed],mw.prototype,"hasVideo",null),mw=hw([xe.PA],mw);let gw=class extends ve.Component{render(){const e=this.props,{connection:t,type:n,sessionDescription:r,editorNode:o}=e,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["connection","type","sessionDescription","editorNode"]);return ve.createElement(yu,Object.assign({},s),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:s.onCollapseToggled},"local"===n?"Sent":"Received"," Session ",m.capitalize(r.type))),ve.createElement(jy,{showFullBorder:!s.expanded},ve.createElement(qy,{contentId:`${t.id}:${n}:${r.type}:sdp`,editorNode:this.props.editorNode,contentType:"text",expanded:!1,cache:t.cache},r.sdp)))}};gw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([xe.PA],gw);var fw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let yw=class extends ve.Component{constructor(){super(...arguments),this.dataChannelEditors=this.dataChannels.map((()=>_m.KF())),this.streamCardState={}}get mediaTracks(){const{streams:e}=this.props.connection;return e.filter((e=>e.isRTCMediaTrack()))}get dataChannels(){const{streams:e}=this.props.connection;return e.filter((e=>e.isRTCDataChannel()))}toggleCollapse(e){var t,n;this.streamCardState[e]={collapsed:null===(n=!(null===(t=this.streamCardState[e])||void 0===t?void 0:t.collapsed))||void 0===n||n}}expandStream(e){this.props.navigate(`/view/${e}`)}render(){const{connection:e,uiStore:t,offerEditor:n,answerEditor:r,accountStore:o}=this.props,{localSessionDescription:s,remoteSessionDescription:a}=e,i="offer"===s.type,l=i?s:a,c=i?a:s,d=Object.assign(Object.assign({},t.viewCardProps.rtcSessionOffer),{direction:i?"right":"left"}),u=Object.assign(Object.assign({},t.viewCardProps.rtcSessionAnswer),{direction:i?"left":"right"});return ve.createElement(ny,null,ve.createElement(sy,null,ve.createElement(mw,Object.assign({},t.viewCardProps.rtcConnection,{connection:e})),ve.createElement(gw,Object.assign({},d,{connection:e,type:i?"local":"remote",sessionDescription:l,editorNode:n})),ve.createElement(gw,Object.assign({},u,{connection:e,type:i?"remote":"local",sessionDescription:c,editorNode:r})),this.mediaTracks.map((e=>{var t;return ve.createElement(lw,{key:e.id,mediaTrack:e,expanded:!1,collapsed:!!(null===(t=this.streamCardState[e.id])||void 0===t?void 0:t.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id),ariaLabel:"RTC Media Stream Section"})})),this.dataChannels.map(((e,t)=>{var n;return ve.createElement(_x,{key:e.id,dataChannel:e,isPaidUser:o.isPaidUser,streamMessageEditor:this.dataChannelEditors[t],expanded:!1,collapsed:!!(null===(n=this.streamCardState[e.id])||void 0===n?void 0:n.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id),ariaLabel:"RTC Data Messages Section"})})),this.dataChannelEditors.map(((e,t)=>ve.createElement(_m.oj,{key:t,node:e},ve.createElement(og,{contentId:null}))))))}};fw([w.computed.struct],yw.prototype,"mediaTracks",null),fw([w.computed.struct],yw.prototype,"dataChannels",null),fw([w.observable],yw.prototype,"streamCardState",void 0),fw([w.action.bound],yw.prototype,"toggleCollapse",null),yw=fw([(0,xe.WQ)("uiStore"),(0,xe.WQ)("accountStore"),xe.PA],yw);var vw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const bw=e=>{const t=e.selectedEvent;return su("j",(t=>{ou(t.target)||e.moveSelection(1)}),[e.moveSelection]),su("k",(t=>{ou(t.target)||e.moveSelection(-1)}),[e.moveSelection]),su("Ctrl+p, Cmd+p",(n=>{(null==t?void 0:t.isHttp())&&(e.onPin(t),n.preventDefault())}),[t,e.onPin]),su("Ctrl+r, Cmd+r",(n=>{e.isPaidUser&&(null==t?void 0:t.isHttp())&&!(null==t?void 0:t.isWebSocket())&&(e.onResend(t),n.preventDefault())}),[t,e.onResend,e.isPaidUser]),su("Ctrl+m, Cmd+m",(n=>{e.isPaidUser&&(null==t?void 0:t.isHttp())&&!(null==t?void 0:t.isWebSocket())&&(e.onBuildRuleFromExchange(t),n.preventDefault())}),[t,e.onBuildRuleFromExchange,e.isPaidUser]),su("Ctrl+Delete, Cmd+Delete",(n=>{ou(n.target)||t&&e.onDelete(t)}),[t,e.onDelete]),su("Ctrl+Shift+Delete, Cmd+Shift+Delete",(t=>{e.onClear(),t.preventDefault()}),[e.onClear]),su("Ctrl+f, Cmd+f",(t=>{e.onStartSearch(),t.preventDefault()}),[e.onStartSearch]),null},xw=["request","response","streamMessage"];let ww=class extends ve.Component{constructor(){super(...arguments),this.editors=xw.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:_m.KF()})),{}),this.searchInputRef=ve.createRef(),this.listRef=ve.createRef(),this.contextMenuBuilder=new Vf(this.props.accountStore,this.props.uiStore,this.onPin,this.onDelete,this.onBuildRuleFromExchange,this.onPrepareToResendRequest)}get splitDirection(){return tu.width>=Se?"vertical":"horizontal"}get confirmedSearchFilters(){return this.props.uiStore.activeFilterSet}get currentSearchFilters(){var e;return null!==(e=this.searchFiltersUnderConsideration)&&void 0!==e?e:this.confirmedSearchFilters}get filteredEventState(){const{events:e}=this.props.eventsStore,t=0===this.currentSearchFilters.length?e:e.filter((e=>this.currentSearchFilters.every((t=>t.matches(e)))));return{filteredEvents:t,filteredEventCount:[t.length,e.length]}}get selectedEvent(){return m.find(this.props.eventsStore.events,{id:this.props.eventId})}componentDidMount(){requestAnimationFrame((()=>{this.props.eventId&&this.selectedEvent?this.onScrollToCenterEvent(this.selectedEvent):this.onScrollToEnd()})),(0,xe.bH)(this,(0,w.observe)(this,"selectedEvent",(({oldValue:e,newValue:t})=>{"horizontal"===this.splitDirection&&!e&&t&&setTimeout((()=>{var e;this.selectedEvent&&(null===(e=this.listRef.current)||void 0===e||e.scrollToEvent(this.selectedEvent))}),50)}))),(0,xe.bH)(this,(0,w.autorun)((()=>{if(!this.props.eventId)return;const e=this.selectedEvent;if(!e)return void this.onSelected(void 0);const{expandedViewCard:t}=this.props.uiStore;t&&(e.isHttp()&&("requestBody"!==t||e.hasRequestBody()||e.requestBreakpoint)&&("responseBody"!==t||e.hasResponseBody()||e.responseBreakpoint)&&("webSocketMessages"!==t||e.isWebSocket()&&e.wasAccepted())||(0,w.runInAction)((()=>{this.props.uiStore.expandedViewCard=void 0})))}))),(0,xe.bH)(this,(0,w.observe)(this,"filteredEventState",(({newValue:e,oldValue:t})=>{const n=e.filteredEvents,r=null==t?void 0:t.filteredEvents;r&&r!==n&&r!==this.props.eventsStore.events&&(r.length=0)})))}isSendAvailable(){return te(Z.value,me)}render(){const{isPaused:e,events:t}=this.props.eventsStore,{certPath:n}=this.props.proxyStore,{isPaidUser:r}=this.props.accountStore,{filteredEvents:o,filteredEventCount:s}=this.filteredEventState;let a;if(this.selectedEvent)if(this.selectedEvent.isHttp())a=ve.createElement(Lx,{exchange:this.selectedEvent,requestEditor:this.editors.request,responseEditor:this.editors.response,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate,onDelete:this.onDelete,onScrollToEvent:this.onScrollToCenterEvent,onBuildRuleFromExchange:this.onBuildRuleFromExchange,onPrepareToResendRequest:this.isSendAvailable()?this.onPrepareToResendRequest:void 0});else if(this.selectedEvent.isTlsFailure())a=ve.createElement(Wx,{failure:this.selectedEvent,certPath:n});else if(this.selectedEvent.isTlsTunnel())a=ve.createElement(zx,{tunnel:this.selectedEvent});else if(this.selectedEvent.isRTCDataChannel())a=ve.createElement(Gx,{dataChannel:this.selectedEvent,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate});else if(this.selectedEvent.isRTCMediaTrack())a=ve.createElement(pw,{mediaTrack:this.selectedEvent,navigate:this.props.navigate});else{if(!this.selectedEvent.isRTCConnection())throw new St(this.selectedEvent);a=ve.createElement(yw,{connection:this.selectedEvent,offerEditor:this.editors.request,answerEditor:this.editors.response,navigate:this.props.navigate})}else a="vertical"===this.splitDirection?ve.createElement(Jm,{key:"details",icon:"ArrowLeft"},"Select an exchange to see the full details."):null;const i="vertical"===this.splitDirection?300:200;return ve.createElement("div",{className:this.props.className},ve.createElement(bw,{isPaidUser:r,selectedEvent:this.selectedEvent,moveSelection:this.moveSelection,onPin:this.onPin,onResend:this.onPrepareToResendRequest,onBuildRuleFromExchange:this.onBuildRuleFromExchange,onDelete:this.onDelete,onClear:this.onForceClear,onStartSearch:this.onStartSearch}),ve.createElement(Vm,{split:this.splitDirection,primary:"second",defaultSize:"50%",minSize:i,maxSize:-i,hiddenPane:null===a?"2":void 0},ve.createElement(Ew,null,ve.createElement(of,{searchInputRef:this.searchInputRef,allEvents:t,filteredEvents:o,filteredCount:s,onFiltersConsidered:this.onSearchFiltersConsidered,onClear:this.onClear,onScrollToEnd:this.onScrollToEnd}),ve.createElement(If,{events:t,filteredEvents:o,selectedEvent:this.selectedEvent,isPaused:e,moveSelection:this.moveSelection,onSelected:this.onSelected,contextMenuBuilder:this.contextMenuBuilder,ref:this.listRef})),null!=a?a:ve.createElement("div",null)),Object.values(this.editors).map(((e,t)=>ve.createElement(_m.oj,{key:t,node:e},ve.createElement(og,{contentId:null})))))}onSearchFiltersConsidered(e){this.searchFiltersUnderConsideration=e}onSelected(e){this.props.navigate(e?`/view/${e.id}`:"/view")}moveSelection(e){const{filteredEvents:t}=this.filteredEventState;if(0===t.length)return;const n=this.selectedEvent?m.findIndex(t,{id:this.selectedEvent.id}):-1,r=t[-1===n?e>=0?0:t.length-1:m.clamp(n+e,0,t.length-1)];this.onSelected(r),this.onScrollToEvent(r)}onPin(e){e.pinned=!e.pinned}onBuildRuleFromExchange(e){const{rulesStore:t,navigate:n}=this.props;if(!this.props.accountStore.isPaidUser)return;const r=function(e){const{statusCode:t,statusMessage:n,headers:r}=e.isSuccessfulExchange()?e.response:{statusCode:200,statusMessage:"OK",headers:{}},o=e.isSuccessfulExchange()&&e.response.body.encoded.byteLength<=1048576&&e.response.body.decoded?e.response.body.decoded:"A mock response",s=Object.assign({},r);return delete s.date,delete s.expires,delete s[":status"],delete s["content-encoding"],s["content-length"]&&(s["content-length"]=Lt(o).toString()),{id:p(),type:"http",activated:!0,matchers:qd(e.request),handler:new Es(t,n||Qt(t),o,s),completionChecker:new Vo.zO.Always}}(e);t.draftRules.items.unshift(r),n(`/modify/${r.id}`)}onPrepareToResendRequest(e){return t=this,n=void 0,o=function*(){const{sendStore:t,navigate:n}=this.props;this.props.accountStore.isPaidUser&&(yield t.addRequestInputFromExchange(e),n("/send"))},new((r=void 0)||(r=Promise))((function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,i)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o}onDelete(e){const{filteredEvents:t}=this.filteredEventState;if(e.pinned&&!confirm("Delete this pinned exchange?"))return;const n=t.indexOf(e),r=e===this.selectedEvent;if(-1!==n&&r&&t.length>0){const r=t[Math.min(n+1,t.length-1)];this.onSelected(r),(0,w.when)((()=>this.selectedEvent===r),(()=>{this.props.eventsStore.deleteEvent(e)}))}else this.props.eventsStore.deleteEvent(e)}onForceClear(){this.onClear(!1)}onClear(e=!0){const{events:t}=this.props.eventsStore,n=m.some(t,{pinned:!0}),r=t.length>0&&m.every(t,{pinned:!0});if(r){if(!confirm("Delete pinned traffic?"))return}else if(e&&t.length>0&&!confirm(n?"Delete all non-pinned traffic?":"Delete all collected traffic?"))return;this.props.eventsStore.clearInterceptedData(r)}onStartSearch(){var e;null===(e=this.searchInputRef.current)||void 0===e||e.focus()}onScrollToEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToEvent(e)}onScrollToCenterEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToCenterEvent(e)}onScrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToEnd()}};vw([w.computed],ww.prototype,"splitDirection",null),vw([w.observable],ww.prototype,"searchFiltersUnderConsideration",void 0),vw([H(250,{equals:w.comparer.structural})],ww.prototype,"currentSearchFilters",null),vw([H(10)],ww.prototype,"filteredEventState",null),vw([w.computed],ww.prototype,"selectedEvent",null),vw([w.action.bound],ww.prototype,"onSearchFiltersConsidered",null),vw([w.action.bound],ww.prototype,"onSelected",null),vw([w.action.bound],ww.prototype,"moveSelection",null),vw([w.action.bound],ww.prototype,"onPin",null),vw([w.action.bound],ww.prototype,"onBuildRuleFromExchange",null),vw([w.action.bound],ww.prototype,"onPrepareToResendRequest",null),vw([w.action.bound],ww.prototype,"onDelete",null),vw([w.action.bound],ww.prototype,"onForceClear",null),vw([w.action.bound],ww.prototype,"onClear",null),vw([w.action.bound],ww.prototype,"onStartSearch",null),vw([w.action.bound],ww.prototype,"onScrollToEvent",null),vw([w.action.bound],ww.prototype,"onScrollToCenterEvent",null),vw([w.action.bound],ww.prototype,"onScrollToEnd",null),ww=vw([(0,xe.WQ)("eventsStore"),(0,xe.WQ)("proxyStore"),(0,xe.WQ)("uiStore"),(0,xe.WQ)("accountStore"),(0,xe.WQ)("rulesStore"),(0,xe.WQ)("sendStore"),xe.PA],ww);const Ew=Le.div`
    position: relative;

    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`,Cw=Le(ww)`
    height: 100vh;
    position: relative;
`;var Tw=n(97542),Sw=n(68082);const Pw=Le.div`
    position: absolute;
    left: -31px;
    top: calc(50% - 1px);
    transform: translateY(-50%);

    cursor: row-resize;

    opacity: 0;

    :focus, :active {
        outline: none;
        opacity: 0.5;
        color: ${e=>e.theme.popColor};
    }

    && svg {
        margin: 0;
    }
`,kw=Le((e=>ve.createElement(Pw,Object.assign({},e),ve.createElement(Ro,{icon:["fas","grip-vertical"]}))))``,Rw=Le.div`
    position: absolute;
    top: ${e=>e.topOffset}px;
    right: 10px;

    display: none; /* Made flex by container, on hover/expand */
    align-items: center;
`,Ow=Le(ve.memo((e=>ve.createElement(lp,{className:e.className,icon:e.icon,title:e.title,disabled:e.disabled,onClick:e.onClick}))))`
    padding: 5px;
    margin: 0 5px;

    z-index: 10;

    font-size: 1.2em;

    > svg {
        display: block;
    }

    :disabled {
        opacity: 1;
        color: ${e=>e.theme.containerWatermark};
    }

    :not(:disabled) {
        cursor: pointer;
        color: ${e=>e.theme.secondaryInputColor};

        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }
`,Hw=Le.div`
    position: absolute;
    top: calc(50% - ${e=>3*e.index}px);
    transform: translateY(-50%);
    height: 150%;

    left: calc(-5px + ${e=>10*e.index}px);
    right: ${e=>10*e.index}px;

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    opacity: ${e=>(e.activated?1:.6)-.2*e.index};
    z-index: ${e=>9-e.index};

    border-left: 5px solid ${e=>e.borderColor};
`,Aw=Le.div`
    display: none; /* Made flex by container, on hover/expand */
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
`,qw=Le(Ow)`
    font-size: 1em;
    padding: 0;
`,$w=e=>ve.createElement(Rw,{topOffset:-2},ve.createElement(Ow,{title:e.toggleState?"Deactivate these rules":"Activate these rules",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation}),ve.createElement(Ow,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),ve.createElement(Ow,{title:"Delete these rules",icon:["far","trash-alt"],onClick:e.onDelete})),Iw=Le.header`
    ${e=>e.collapsed?"\n            margin-top: 22px;\n            margin-bottom: 17px;\n        ":"\n            margin-top: 10px;\n        "}

    width: calc(100% - 5px - ${e=>40*e.depth}px);
    margin-left: calc(5px + ${e=>40*e.depth}px);

    transition: padding 0.1s ease-out;
    padding: ${e=>e.collapsed?"5px 20px 5px 15px":"5px 20px 5px 0px"};
    box-sizing: border-box;

    display: flex;
    align-items: center;

    position: relative;

    cursor: pointer;
    &:focus {
        outline: none;
        > h2 > svg {
            color: ${e=>e.theme.popColor};
        }
    }
    &:hover, &:focus-within {
        ${kw} {
            opacity: 0.5;
        }

        ${Aw}, ${Rw} {
            display: flex;
        }

        ${e=>e.collapsed?Ue`
                > ${Hw} {
                    box-shadow: 0 2px 20px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
                }
            `:"text-shadow: 0 0 5px rgba(0,0,0,0.2);"}
    }

    ${e=>e.editingTitle&&Ue`
        ${Aw} {
            display: flex;
        }
    `}

    font-size: ${e=>e.theme.headingSize};

    > h2 {
        user-select: none;
        z-index: 10;

        > svg {
            margin-right: 10px;
        }
    }

    input[type=text] {
        margin: -7px 0;
        position: relative;
        top: -3px;
    }
`,jw=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)},Dw=e=>ds(e).every((e=>e.activated)),Mw=(0,Sw.PA)((e=>{const[t,n]=ve.useState(!1),[r,o]=ve.useState(e.group.title),s=(0,w.action)((()=>{e.group.collapsed=!e.group.collapsed})),a=()=>{n(!0),o(e.group.title)},i=e=>{o(e.target.value)},l=()=>{n(!1)},c=()=>{n(!1),e.updateGroupTitle(e.group.id,r)},d=Dw(e.group),u=du((0,w.action)((()=>{us(e.group,(e=>{e.activated=!d}))}))),p=du((()=>e.deleteGroup(e.path))),h=du((()=>e.cloneGroup(e.path)));return ve.createElement(Tw.sx,{draggableId:e.group.id,index:e.index},((n,o)=>ve.createElement(Sw.nu,null,(()=>ve.createElement(Iw,Object.assign({depth:e.path.length-1,"aria-expanded":!e.collapsed,collapsed:e.collapsed,editingTitle:t},n.draggableProps,{style:jw(n.draggableProps.style,o),ref:n.innerRef,onClick:s,onKeyPress:cu,tabIndex:0}),ve.createElement(kw,Object.assign({"aria-label":`Drag handle for the '${t?r:e.group.title}' rule group`},n.dragHandleProps)),ve.createElement("h2",null,ve.createElement(Ro,{icon:["fas",e.group.collapsed?"chevron-down":"chevron-up"]}),t?ve.createElement(Ru,{autoFocus:!0,value:r,onChange:i,onClick:e=>e.stopPropagation(),onKeyPress:e=>{"Enter"===e.key&&c()}}):e.group.title),ve.createElement(Aw,null,t?ve.createElement(ve.Fragment,null,ve.createElement(qw,{title:"Save group name",icon:["fas","save"],onClick:du(c)}),ve.createElement(qw,{title:"Reset group name",icon:["fas","undo"],onClick:du(l)})):ve.createElement(qw,{title:"Edit group name",icon:["fas","edit"],onClick:du(a)})),ve.createElement($w,{toggleState:d,onToggleActivation:u,onClone:h,onDelete:p}),e.collapsed&&e.group.items.slice(0,5).map(((e,t)=>{const n=ns(e)?void 0:e.matchers[0],r=void 0===n?void 0:n instanceof Vo.yN.MethodMatcher?Vo.IT[n.method]:"unknown",o=void 0===r?"transparent":Mn(r),s=ns(e)?Dw(e):e.activated;return ve.createElement(Hw,{key:t,index:t,borderColor:o,activated:s})})))))))})),Bw=Le.div`
    width: 100%;
    height: 30px;
    margin-bottom: -20px;
`,Fw=e=>ve.createElement(Tw.sx,{draggableId:e.group.id+"-tail",index:e.index,isDragDisabled:!0},(e=>ve.createElement(Bw,Object.assign({},e.draggableProps,{ref:e.innerRef}))));var Nw=n(41859),Lw=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};class Uw extends ve.Component{}function Ww(e){const{matcher:t}=e;if(!t)return null;const n=za(t),r={matcher:t,matcherIndex:0,onChange:e.onChange,onInvalidState:m.noop};switch(n){case"eth-method":return ve.createElement(Gw,Object.assign({},r));case"ipfs-interaction":return ve.createElement(Kw,Object.assign({},r));case"wildcard":case"ws-wildcard":case"default-wildcard":case"default-ws-wildcard":case"rtc-wildcard":case"GET":case"POST":case"PUT":case"PATCH":case"DELETE":case"HEAD":case"OPTIONS":return null;default:throw new St(n)}}function zw(e){const{matcher:t}=e,{matcherClass:n}=e;let r="matcher"in e?za(e.matcher):Ga.get(e.matcherClass);if(!r)return null;if(ri(r)){if(!t||ri(t.type))throw new Error(`Cannot configure hidden matcher type ${r}`);r=t.type}const o={matcher:t,matcherIndex:e.matcherIndex,onChange:e.onChange,onInvalidState:e.onInvalidState||m.noop};switch(r){case"method":return ve.createElement(Jw,Object.assign({},o));case"host":return ve.createElement(Qw,Object.assign({},o));case"simple-path":return ve.createElement(Yw,Object.assign({},o));case"regex-path":return ve.createElement(eE,Object.assign({},o));case"query":return ve.createElement(nE,Object.assign({},o));case"exact-query-string":return ve.createElement(rE,Object.assign({},o));case"header":return ve.createElement(oE,Object.assign({},o));case"raw-body":return ve.createElement(aE,Object.assign({},o));case"raw-body-includes":return ve.createElement(iE,Object.assign({},o));case"json-body":return ve.createElement(cE,Object.assign({},o));case"json-body-matching":return ve.createElement(dE,Object.assign({},o));case"eth-params":return ve.createElement(hE,Object.assign({},o));case"ipfs-arg":return ve.createElement(pE,Object.assign({},o));case"has-rtc-data-channel":case"has-rtc-video-track":case"has-rtc-audio-track":case"has-rtc-media-track":return ve.createElement(mE,Object.assign({matcherKey:r,matcherClass:n},o));default:throw new St(r)}}const _w=Le.label`
    margin: 5px 0;

    text-transform: uppercase;
    font-family: ${e=>e.theme.titleTextFamily};
    font-size: ${e=>e.theme.textSize};
    opacity: ${e=>e.theme.lowlightTextOpacity};
`,Vw=Le.div`
    display: flex;
    flex-direction: column;
`;let Jw=class extends Uw{constructor(){super(...arguments),this.fieldId=m.uniqueId(),this.method=Vo.IT.GET}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.method)&&void 0!==t?t:Vo.IT.GET;(0,w.runInAction)((()=>{this.method=n}))}))),this.props.matcher||this.props.onChange(new Ls(this.method))}render(){const{method:e}=this,{matcherIndex:t}=this.props,n=Vo.IT[e],r=Object.values(Vo.IT).filter((e=>!isNaN(Number(e))));return ve.createElement(Vw,{title:n?`Matches all ${n} requests`:void 0},void 0!==t&&ve.createElement(_w,{htmlFor:this.fieldId},0!==t&&"and "," with method"),ve.createElement(Ou,{id:this.fieldId,value:e,onChange:this.onChange},r.map((e=>ve.createElement("option",{value:e,key:e},Vo.IT[e])))))}onChange(e){this.method=parseInt(e.currentTarget.value,10),this.props.onChange(new Ls(this.method))}};Lw([w.observable],Jw.prototype,"method",void 0),Lw([w.action.bound],Jw.prototype,"onChange",null),Jw=Lw([xe.PA],Jw);let Gw=class extends ve.Component{constructor(){super(...arguments),this.fieldId=m.uniqueId(),this.method="eth_call"}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.methodName)&&void 0!==t?t:"eth_call";(0,w.runInAction)((()=>{this.method=n}))}))),this.props.matcher||this.props.onChange(new Ys(this.method))}render(){const{method:e}=this;return ve.createElement(Vw,{title:`Match ${e} requests to Ethereum nodes`},ve.createElement(_w,{htmlFor:this.fieldId},"Requesting a node to"),ve.createElement(Ou,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(Qs).map((e=>ve.createElement("option",{value:e,key:e},Qs[e])))))}onChange(e){this.method=e.currentTarget.value,this.props.onChange(new Ys(this.method))}};Lw([w.observable],Gw.prototype,"method",void 0),Lw([w.action.bound],Gw.prototype,"onChange",null),Gw=Lw([xe.PA],Gw);let Kw=class extends ve.Component{constructor(){super(...arguments),this.fieldId=m.uniqueId(),this.interaction="cat"}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.interactionName)&&void 0!==t?t:"cat";(0,w.runInAction)((()=>{this.interaction=n}))}))),this.props.matcher||this.props.onChange(new ca(this.interaction))}render(){const{interaction:e}=this;return ve.createElement(Vw,{title:`Match ${e} IPFS interactions`},ve.createElement(_w,{htmlFor:this.fieldId},"Requesting an IPFS node to"),ve.createElement(Ou,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(la).map((e=>ve.createElement("option",{value:e,key:e},la[e])))))}onChange(e){this.interaction=e.currentTarget.value,this.props.onChange(new ca(this.interaction))}};Lw([w.observable],Kw.prototype,"interaction",void 0),Lw([w.action.bound],Kw.prototype,"onChange",null),Kw=Lw([xe.PA],Kw);let Qw=class extends Uw{constructor(){super(...arguments),this.fieldId=m.uniqueId(),this.host=""}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const e=this.props.matcher?this.props.matcher.host:"";(0,w.runInAction)((()=>{this.host=e}))})))}render(){const{host:e}=this,{matcherIndex:t}=this.props;return ve.createElement(Vw,{title:e?`Matches all requests to ${e}, regardless of their path or protocol`:void 0},void 0!==t&&ve.createElement(_w,{htmlFor:this.fieldId},0!==t&&"and "," for host"),ve.createElement(Ru,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific host to match: example.com"}))}onChange(e){this.host=e.target.value;try{this.props.onChange(new Vo.yN.HostMatcher(this.host)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Tt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Lw([w.observable],Qw.prototype,"error",void 0),Lw([w.observable],Qw.prototype,"host",void 0),Lw([w.action.bound],Qw.prototype,"onChange",null),Qw=Lw([xe.PA],Qw);let Yw=class extends Uw{constructor(){super(...arguments),this.fieldId=m.uniqueId(),this.url=""}componentDidMount(){void 0!==this.props.matcherIndex&&(0,xe.bH)(this,(0,w.autorun)((()=>{const e=this.props.matcher?this.props.matcher.path:"";(0,w.runInAction)((()=>{this.url=e}))})))}render(){const{url:e}=this,{matcherIndex:t}=this.props,n=/(\w+:\/\/)?([^/?#]+)?(\/[^?#]*)?/.exec(e)||[],[r,o,s,a]=n;return ve.createElement(Vw,{title:s||a?`Matches ${o?o.slice(0,-3):"any"} requests to ${s?`host ${s}`:"any host"} at ${a?`path ${a}`:"path /"}`:void 0},void 0!==t&&ve.createElement(_w,{htmlFor:this.fieldId},0!==t&&"and "," for URL"),ve.createElement(Ru,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific URL to match: http://example.com/abc"}))}ensurePathIsValid(){if(!this.url)throw new Error("The URL must not be empty");this.url.match(/\w+:\//)&&new URL(this.url)}onChange(e){this.url=e.target.value.split("#")[0];try{this.ensurePathIsValid();const[t,n]=this.url.split("?");void 0===n?this.props.onChange(new Vo.yN.SimplePathMatcher(t)):(void 0!==this.props.matcherIndex&&(this.url=t),this.props.onChange(new Vo.yN.SimplePathMatcher(t),new Vo.yN.ExactQueryMatcher("?"+n))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Tt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Lw([w.observable],Yw.prototype,"error",void 0),Lw([w.observable],Yw.prototype,"url",void 0),Lw([w.action.bound],Yw.prototype,"onChange",null),Yw=Lw([xe.PA],Yw);const Xw=Le(Ru)`
    font-family: ${e=>e.theme.monoFontFamily};
`,Zw=/([^\\]|^)\\(\?|u003F|x3F)|([^\\]|^)\[[^\]]*(\?|u003F|x3F)/;let eE=class extends Uw{constructor(){super(...arguments),this.fieldId=m.uniqueId(),this.pattern=""}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const e=this.props.matcher?this.props.matcher.regexSource.replace(/\\\//g,"/"):"";(0,w.runInAction)((()=>{this.pattern=e}))})))}render(){const{matcherIndex:e}=this.props;let t=[],n="like";if(!this.error&&this.props.matcher){const{regexSource:e}=this.props.matcher,r=new RegExp(e),o=new Nw(r);o.defaultRange.subtract(32,47),o.defaultRange.subtract(58,64),o.defaultRange.subtract(123,126),o.max=10,t=m.uniq([o.gen(),o.gen(),o.gen()]).filter((e=>e.length&&e.match(r))).sort(),n=e.startsWith("^")&&e.endsWith("$")?"like":e.startsWith("^")?"that start with":e.endsWith("$")?"that end with":"including"}return ve.createElement(Vw,{title:0===t.length?void 0:1===t.length?`Would match absolute URLs ${n} ${t[0]}`:`Would match absolute URLs ${n}:\n\n${t.join("\n")}`},void 0!==e&&ve.createElement(_w,{htmlFor:this.fieldId},0!==e&&"and "," for URLs matching"),ve.createElement(Xw,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.pattern,onChange:this.onChange,placeholder:"Any regular expression: https?://abc.com/.*"}))}onChange(e){this.pattern=e.target.value;try{if(!this.pattern)throw new Error("A pattern to match is required");if(this.pattern.match(Zw))throw new Error("Query strings are matched separately, so a literal ? character will never match");this.props.onChange(new Vo.yN.RegexPathMatcher(new RegExp(this.pattern))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Tt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Lw([w.observable],eE.prototype,"error",void 0),Lw([w.observable],eE.prototype,"pattern",void 0),Lw([w.action.bound],eE.prototype,"onChange",null),eE=Lw([xe.PA],eE);const tE=e=>m.mapValues(m.groupBy(e,(({key:e})=>e)),(e=>1===e.length?e[0].value:e.map((e=>e.value))));let nE=class extends Uw{render(){const{matcherIndex:e,matcher:t}=this.props,n=(r=(null==t?void 0:t.queryObject)||{},m.flatMap(Object.entries(r),(([e,t])=>m.isArray(t)?t.map((t=>({key:e,value:t}))):{key:e,value:t})));var r;return ve.createElement(Vw,null,void 0!==e&&ve.createElement(_w,null,0!==e&&"and "," with query parameters including"),ve.createElement(by,{pairs:n,convertResult:tE,onChange:this.onChange,keyPlaceholder:"Query parameter name",valuePlaceholder:"Query parameter value",allowEmptyValues:!0}))}onChange(e){try{if(Object.keys(e).some((e=>!e)))throw new Error("Invalid query parameter; query parameter names can't be empty");0===Object.keys(e).length?this.props.onChange():this.props.onChange(new Vo.yN.QueryMatcher(e))}catch(e){console.log(e),this.props.onInvalidState()}}};Lw([w.action.bound],nE.prototype,"onChange",null),nE=Lw([xe.PA],nE);let rE=class extends Uw{constructor(){super(...arguments),this.fieldId=m.uniqueId(),this.query=""}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const e=this.props.matcher?this.props.matcher.query:"";(0,w.runInAction)((()=>{this.query=e}))})))}render(){const{matcherIndex:e}=this.props;return ve.createElement(Vw,null,void 0!==e&&ve.createElement(_w,{htmlFor:this.fieldId},0!==e&&"and "," with query"),ve.createElement(Ru,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.query,onChange:this.onChange,placeholder:"An exact query string to match, e.g. ?a=b"}))}onChange(e){this.query=e.target.value;try{this.props.onChange(new Vo.yN.ExactQueryMatcher(this.query)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Tt(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};Lw([w.observable],rE.prototype,"error",void 0),Lw([w.observable],rE.prototype,"query",void 0),Lw([w.action.bound],rE.prototype,"onChange",null),rE=Lw([xe.PA],rE);let oE=class extends Uw{render(){var e;const{matcherIndex:t}=this.props,n=(null===(e=this.props.matcher)||void 0===e?void 0:e.headers)||{};return ve.createElement(Vw,null,void 0!==t&&ve.createElement(_w,null,0!==t&&"and "," with headers including"),ve.createElement(Tx,{headers:n,convertToRawHeaders:this.convertInput,convertFromRawHeaders:this.convertResult,onChange:this.onChange,onInvalidState:this.props.onInvalidState}))}convertInput(e){return en(e)}convertResult(e){return t=tn(e),m.mapValues(m.pickBy(t,((e,t)=>e&&t)),(e=>m.isArray(e)?e.join(", "):e));var t}onChange(e){0===Object.keys(e).length?this.props.onChange():this.props.onChange(new Vo.yN.HeaderMatcher(e))}};Lw([w.action.bound],oE.prototype,"onChange",null),oE=Lw([xe.PA],oE);const sE=Le.div`
    > div {
        border-radius: 4px;
        border: solid 1px ${e=>e.theme.containerBorder};
        padding: 1px;

        ${e=>e.error&&Ue`
            border-color: ${e=>e.theme.warningColor};
        `}
    }
`;class aE extends Uw{render(){return ve.createElement(lE,Object.assign({},this.props,{matcherClass:Vo.yN.RawBodyMatcher,description:"with a decoded body exactly matching"}))}}class iE extends Uw{render(){return ve.createElement(lE,Object.assign({},this.props,{matcherClass:Vo.yN.RawBodyIncludesMatcher,description:"with a decoded body including"}))}}let lE=class extends Uw{constructor(){super(...arguments),this.content=""}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const e=this.props.matcher?this.props.matcher.content:"";(0,w.runInAction)((()=>{this.content=e}))}))),this.onBodyChange(this.content)}render(){const{content:e}=this,{matcherIndex:t}=this.props;return ve.createElement(Vw,null,void 0!==t&&ve.createElement(_w,null,0!==t&&"and "," ",this.props.description),ve.createElement(sE,null,ve.createElement(og,{contentId:null,value:e,onChange:this.onBodyChange,language:"text"})))}onBodyChange(e){this.content=e,this.props.onChange(new this.props.matcherClass(e))}};Lw([w.observable],lE.prototype,"content",void 0),Lw([w.action.bound],lE.prototype,"onBodyChange",null),lE=Lw([xe.PA],lE);class cE extends Uw{render(){return ve.createElement(uE,Object.assign({},this.props,{matcherClass:Vo.yN.JsonBodyMatcher,description:"with a JSON body equivalent to"}))}}class dE extends Uw{render(){return ve.createElement(uE,Object.assign({},this.props,{matcherClass:Vo.yN.JsonBodyFlexibleMatcher,description:"with a JSON body including"}))}}let uE=class extends Uw{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.body)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.body,null,2):"{\n    \n}"}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.body)&&void 0!==t?t:{}}),(e=>{const t=b(this.content);void 0!==t&&m.isEqual(t,e)||(0,w.runInAction)((()=>{this.content=JSON.stringify(e,null,2)}))}))),this.onBodyChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return ve.createElement(Vw,null,void 0!==n&&ve.createElement(_w,null,0!==n&&"and "," ",this.props.description),ve.createElement(sE,{error:!!t},ve.createElement(og,{contentId:null,value:e,onChange:this.onBodyChange,language:"json"})))}onBodyChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new this.props.matcherClass(t)),this.error=void 0}catch(e){console.log(e),this.error=Tt(e),this.props.onInvalidState()}}};Lw([w.observable],uE.prototype,"content",void 0),Lw([w.observable],uE.prototype,"error",void 0),Lw([w.action.bound],uE.prototype,"onBodyChange",null),uE=Lw([xe.PA],uE);let pE=class extends Uw{constructor(){super(...arguments),this.fieldId=m.uniqueId()}get interaction(){var e;return(null===(e=this.props.matcher)||void 0===e?void 0:e.interaction)||"cat"}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{var e;const t=(null===(e=this.props.matcher)||void 0===e?void 0:e.argValue)||void 0;(0,w.runInAction)((()=>{this.arg=t}))})))}render(){var e;const{matcherIndex:t}=this.props,{placeholder:n,argType:r}=null!==(e=da[this.interaction])&&void 0!==e?e:{placeholder:"",argType:"IPFS argument"};return ve.createElement(Vw,null,void 0!==t&&ve.createElement(_w,{htmlFor:this.fieldId},0!==t&&"and "," for ",r),ve.createElement(Ru,{id:this.fieldId,spellCheck:!1,value:this.arg||"",onChange:this.onChange,placeholder:n}))}onChange(e){this.arg=e.target.value,this.props.onChange(new ua(this.interaction,this.arg))}};Lw([w.observable],pE.prototype,"arg",void 0),Lw([w.computed],pE.prototype,"interaction",null),Lw([w.action.bound],pE.prototype,"onChange",null),pE=Lw([xe.PA],pE);let hE=class extends Uw{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.params)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.params,null,2):"[\n    \n]"}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.params)&&void 0!==t?t:{}}),(e=>{const t=b(this.content);void 0!==t&&m.isEqual(t,e)||(0,w.runInAction)((()=>{this.content=JSON.stringify(e,null,2)}))}))),this.onJsonChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return ve.createElement(Vw,null,void 0!==n&&ve.createElement(_w,null,0!==n&&"and "," with Ethereum parameters matching"),ve.createElement(sE,{error:!!t},ve.createElement(og,{contentId:null,value:e,onChange:this.onJsonChange,language:"json"})))}onJsonChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new Xs(t)),this.error=void 0}catch(e){console.log(e),this.error=Tt(e),this.props.onInvalidState()}}};Lw([w.observable],hE.prototype,"content",void 0),Lw([w.observable],hE.prototype,"error",void 0),Lw([w.action.bound],hE.prototype,"onJsonChange",null),hE=Lw([xe.PA],hE);let mE=class extends Uw{componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{matcher:e,matcherClass:t,onChange:n}=this.props;!e&&t&&n(new t)})))}render(){const{matcherIndex:e,matcherKey:t}=this.props;return ve.createElement(Vw,null,void 0!==e&&ve.createElement(_w,null,0!==e&&"and "," ",pg(t)))}};mE=Lw([xe.PA],mE);var gE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const fE=e=>Ga.get(e)||Ga.get(null==e?void 0:e.constructor),yE=Le.li`
    display: flex;
    flex-direction: row;
    margin: 5px 0;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`,vE=Le.div`
    flex-grow: 1;
    flex-shrink: 1;
    width: 0; /* Required to keep body editors resizing properly */
`,bE=Le(Tu)`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 10px;
    display: inline-block;
    margin-left: 5px;

    flex-grow: 0;
    flex-shrink: 0;
`,xE=Le.div`
    &:not(:empty) {
        margin-top: 5px;
    }
`,wE=ve.forwardRef(((e,t)=>{const n=ei.filter((e=>{const t=Ga.get(e);return ne(_a[t])})),[r,o]=m.partition(n,(e=>"http"===ti(fE(e))));return ve.createElement(yE,null,ve.createElement(vE,null,ve.createElement(Ou,{"aria-label":"Select the base matcher for this rule",ref:t,value:fE(e.matcher),onChange:t=>{const n=t.currentTarget.value;if(n){const t=Ja[n];e.onChange(new t)}}},void 0===e.matcher&&ve.createElement("option",{value:""},"Never"),ve.createElement(CE,{matchers:r}),o.length>0&&ve.createElement("optgroup",{label:"Experimental"},ve.createElement(CE,{matchers:o}))),ve.createElement(xE,null,ve.createElement(Ww,{matcher:e.matcher,onChange:e.onChange}))))}));let EE=class extends ve.Component{render(){const{matcher:e,onChange:t,onDelete:n,matcherIndex:r}=this.props;return ve.createElement(yE,null,ve.createElement(vE,null,ve.createElement(zw,{matcherIndex:r,matcher:e,onChange:t})),ve.createElement(bE,{onClick:n},ve.createElement(Ro,{icon:["far","trash-alt"]})))}};EE=gE([xe.PA],EE);const CE=e=>ve.createElement(ve.Fragment,null,e.matchers.map((e=>{const t=fE(e),n=pg(t);return ve.createElement("option",{key:t,value:t},n)}))),TE=Le.form`
    :not(:empty) {
        margin-top: 5px;
    }
`,SE=Le.option`
    color: ${e=>e.theme.containerWatermark};
`;let PE=class extends ve.Component{constructor(){super(...arguments),this.draftMatchers=[],this.invalidMatcherState=!1,this.dropdownRef=ve.createRef()}selectMatcher(e){const t=e.target.value;this.matcherClass=Ja[t],this.updateDraftMatcher()}updateDraftMatcher(...e){this.draftMatchers=e,this.invalidMatcherState=!1}markMatcherInvalid(){this.invalidMatcherState=!0}saveMatcher(e){if(e&&e.preventDefault(),!this.draftMatchers.length)return;this.draftMatchers.forEach((e=>this.props.onAdd(e))),this.matcherClass=void 0,this.draftMatchers=[],this.invalidMatcherState=!1;const t=this.dropdownRef.current;t&&t.focus()}render(){var e;const{availableMatchers:t}=this.props,{matcherClass:n,draftMatchers:r,updateDraftMatcher:o,invalidMatcherState:s,markMatcherInvalid:a,saveMatcher:i}=this;return ve.createElement(yE,null,ve.createElement(vE,null,ve.createElement(Ou,{"aria-label":"Select another type of matcher to add to this rule",onChange:this.selectMatcher,value:null!==(e=fE(n))&&void 0!==e?e:"",ref:this.dropdownRef},ve.createElement(SE,{value:""},"Add another matcher:"),ve.createElement(SE,{disabled:!0},"─────────────"),ve.createElement(CE,{matchers:t})),ve.createElement(TE,{onSubmit:!s&&r.length?i:e=>e.preventDefault()},r.length>=1?ve.createElement(zw,{matcherIndex:void 0,matcher:r[0],onChange:o,onInvalidState:a}):ve.createElement(zw,{matcherIndex:void 0,matcherClass:n,onChange:o,onInvalidState:a}))),ve.createElement(bE,{"aria-label":"Add this matcher to the rule",disabled:!r.length||s,onClick:i},ve.createElement(Ro,{icon:["fas","plus"]})))}};gE([w.observable],PE.prototype,"matcherClass",void 0),gE([w.observable],PE.prototype,"draftMatchers",void 0),gE([w.observable],PE.prototype,"invalidMatcherState",void 0),gE([w.action.bound],PE.prototype,"selectMatcher",null),gE([w.action.bound],PE.prototype,"updateDraftMatcher",null),gE([w.action.bound],PE.prototype,"markMatcherInvalid",null),gE([w.action.bound],PE.prototype,"saveMatcher",null),PE=gE([xe.PA],PE);const kE=e=>Xa.get(e)||Xa.get(e.constructor),RE=e=>ve.createElement(ve.Fragment,null,e.handlers.map((e=>{const t=kE(e),n=function(e){switch(e){case"simple":return"Return a fixed response";case"file":return"Return a response from a file";case"forward-to-host":return"Forward the request to a different host";case"passthrough":return"Pass the request on to its destination";case"req-res-transformer":return"Transform the real request or response automatically";case"request-breakpoint":return"Pause the request to manually edit it";case"response-breakpoint":return"Pause the response to manually edit it";case"request-and-response-breakpoint":return"Pause the request & response to manually edit them";case"timeout":return"Time out with no response";case"close-connection":return"Close the connection";case"reset-connection":return"Forcibly reset the connection";case"ws-passthrough":return"Pass the WebSocket through to its destination";case"ws-forward-to-host":return"Forward the WebSocket to a different host";case"ws-reject":return"Reject the WebSocket setup request";case"ws-listen":return"Accept the WebSocket but send no messages";case"ws-echo":return"Echo all messages";case"eth-call-result":return"Return a fixed eth_call result";case"eth-number-result":case"eth-hash-result":return"Return a fixed value";case"eth-receipt-result":return"Return a fixed transaction receipt";case"eth-block-result":return"Return fixed Ethereum block data";case"eth-error":return"Return an Ethereum error response";case"ipfs-cat-text":return"Return fixed IPFS content";case"ipfs-cat-file":return"Return IPFS content from a file";case"ipfs-add-result":return"Return a fixed IPFS add result";case"ipns-resolve-result":return"Return a fixed IPNS resolved address";case"ipns-publish-result":return"Return a fixed succesful IPNS result";case"ipfs-pins-result":return"Return a fixed IPFS pinning result";case"ipfs-pin-ls-result":return"Return a fixed list of IPFS pins";case"wait-for-duration":return"Sleep for a given duration";case"wait-for-rtc-data-channel":return"Wait for a data channel to be opened";case"wait-for-rtc-track":return"Wait for a media track to be opened";case"wait-for-rtc-media":return"Wait for any media to be received";case"wait-for-rtc-message":return"Wait for a data message to be received";case"create-rtc-data-channel":return"Create a data channel";case"send-rtc-data-message":return"Send a data message";case"close-rtc-connection":return"Close the WebRTC connection";case"echo-rtc":return"Echo all messages and media";case"rtc-dynamic-proxy":return"Proxy all traffic to the real remote peer";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":throw new Error(`${e} handler should not be used directly`);default:throw new St(e)}}(t);return ve.createElement("option",{key:t,value:t},n)}))),OE=Le(Ou)`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`,HE=(0,xe.WQ)("rulesStore","accountStore")((0,xe.PA)((e=>{let[t,n]=m.partition(e.availableHandlers,(t=>e.accountStore.isPaidUser||!((e,t)=>("http"===e||"websocket"===e)&&ii.includes(t))(e.ruleType,t)));return t=m.sortBy(t,(e=>kE(e).includes("breakpoint")?0:1)),ve.createElement(OE,{"aria-label":0===e.handlerIndex?"Select how matching requests should be handled":"Select the next step in how matching requests should be handled",value:kE(e.value),onChange:t=>{const n=((e,t)=>{switch(e){case"simple":return new Es(200);case"file":return new Cs(200,void 0,"");case"passthrough":return new Ts(t);case"forward-to-host":return new Ss("",!0,t);case"req-res-transformer":return new Ps(t,{},{});case"request-breakpoint":return new ks(t);case"response-breakpoint":return new Rs(t);case"request-and-response-breakpoint":return new Os(t);case"timeout":return new Hs;case"close-connection":return new As;case"reset-connection":return new qs;case"ws-passthrough":return new Us(t);case"ws-forward-to-host":return new Ws("",!0,t);case"ws-echo":return new Ds;case"ws-reject":return new Ms(400);case"ws-listen":return new Bs;case"eth-call-result":return new Zs([],[]);case"eth-number-result":return new ea(0);case"eth-hash-result":return new ta("0x0");case"eth-receipt-result":return new na(void 0);case"eth-block-result":return new ra(void 0);case"eth-error":return new oa("Unknown Error");case"ipfs-cat-text":return new ga("");case"ipfs-cat-file":return new fa("");case"ipfs-add-result":return new ya;case"ipns-resolve-result":return new va;case"ipns-publish-result":return new ba;case"ipfs-pins-result":return new xa;case"ipfs-pin-ls-result":return new wa;case"rtc-dynamic-proxy":return new Ia;case"echo-rtc":return new ja;case"close-rtc-connection":return new Da;case"wait-for-rtc-media":return new Ma;case"wait-for-duration":return new Ba(0);case"wait-for-rtc-data-channel":return new Fa;case"wait-for-rtc-message":return new Na;case"create-rtc-data-channel":return new La("mock-channel");case"send-rtc-data-message":return new Ua(void 0,"");default:throw new St(e)}})(t.target.value,e.rulesStore);e.onChange(n)}},ve.createElement(RE,{handlers:t}),n.length&&ve.createElement("optgroup",{label:"With HTTP Toolkit Pro:"},ve.createElement(RE,{handlers:n})))})));var AE,qE,$E=n(24221),IE=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},jE=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};class DE extends ve.Component{}const ME=Le.div`
    margin-top: 10px;
    font-size: ${e=>e.theme.textSize};
`,BE=Le.p`
    font-size: ${e=>e.theme.textSize};
    line-height: 1.3;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    overflow-wrap: break-word;

    &:not(:first-child) {
        margin-top: 10px;
    }
`;function FE(e){const{handler:t,onChange:n,onInvalidState:r}=e,o={ruleType:e.ruleType,handler:t,onChange:n,onInvalidState:r||m.noop},s=za(t);switch(s){case"simple":case"ws-reject":return ve.createElement(_E,Object.assign({},o));case"file":return ve.createElement(KE,Object.assign({},o));case"forward-to-host":case"ws-forward-to-host":return ve.createElement(YE,Object.assign({},o,{handlerKey:s}));case"passthrough":case"ws-passthrough":case"rtc-dynamic-proxy":return ve.createElement(gC,Object.assign({},o));case"req-res-transformer":return ve.createElement(rC,Object.assign({},o));case"request-breakpoint":return ve.createElement(fC,Object.assign({},o));case"response-breakpoint":return ve.createElement(yC,Object.assign({},o));case"request-and-response-breakpoint":return ve.createElement(vC,Object.assign({},o));case"timeout":return ve.createElement(bC,Object.assign({},o));case"close-connection":return ve.createElement(xC,Object.assign({},o));case"reset-connection":return ve.createElement(wC,Object.assign({},o));case"ws-echo":return ve.createElement(EC,Object.assign({},o));case"ws-listen":return ve.createElement(CC,Object.assign({},o));case"eth-call-result":return ve.createElement(SC,Object.assign({},o));case"eth-number-result":return ve.createElement(PC,Object.assign({},o));case"eth-hash-result":return ve.createElement(kC,Object.assign({},o));case"eth-receipt-result":return ve.createElement(OC,Object.assign({},o));case"eth-block-result":return ve.createElement(HC,Object.assign({},o));case"eth-error":return ve.createElement(AC,Object.assign({},o));case"ipfs-cat-text":return ve.createElement(qC,Object.assign({},o));case"ipfs-cat-file":return ve.createElement($C,Object.assign({},o));case"ipfs-add-result":return ve.createElement(IC,Object.assign({},o));case"ipns-resolve-result":return ve.createElement(jC,Object.assign({},o));case"ipns-publish-result":return ve.createElement(DC,Object.assign({},o));case"ipfs-pins-result":return ve.createElement(MC,Object.assign({},o));case"ipfs-pin-ls-result":return ve.createElement(BC,Object.assign({},o));case"echo-rtc":return ve.createElement(FC,Object.assign({},o));case"close-rtc-connection":return ve.createElement(NC,Object.assign({},o));case"wait-for-rtc-media":return ve.createElement(LC,Object.assign({},o));case"wait-for-duration":return ve.createElement(UC,Object.assign({},o));case"wait-for-rtc-data-channel":return ve.createElement(WC,Object.assign({},o));case"wait-for-rtc-message":return ve.createElement(zC,Object.assign({},o));case"create-rtc-data-channel":return ve.createElement(_C,Object.assign({},o));case"send-rtc-data-message":return ve.createElement(VC,Object.assign({},o));default:throw new St(s)}}const NE=Le.h2`
    margin-bottom: 5px;
    &:not(:first-child) {
        margin-top: 10px;
    }

    text-transform: uppercase;
    font-family: ${e=>e.theme.titleTextFamily};
    opacity: ${e=>e.theme.lowlightTextOpacity};
    width: 100%;
`,LE=Le(Ou)`
    font-size: ${e=>e.theme.textSize};
    width: auto;
`,UE=Le(Ru)`
    width: 100%;
    box-sizing: border-box;
`,WE=Le.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 5px 0;

    > ${NE} {
        align-self: flex-end;
        flex-grow: 1;
        margin-bottom: 0;
        margin: 0;
    }

    > button {
        padding-top: 0;
        padding-bottom: 0;
    }
`,zE=Le.div`
    margin-top: 5px;

    > div {
        margin-top: 5px;
        border-radius: 4px;
        border: solid 1px ${e=>e.isInvalid?e.theme.warningColor:e.theme.containerBorder};
        padding-right: 1px;
    }
`;let _E=class extends DE{constructor(){super(...arguments),this.statusCode=this.props.handler instanceof Es?this.props.handler.status:this.props.handler.statusCode,this.statusMessage=this.props.handler.statusMessage,this.rawHeaders=en(this.props.handler.headers||{}),this.contentType="text",this.body=Nt(this.props.handler instanceof Es?this.props.handler.data:this.props.handler.body)}get headers(){return tn(this.rawHeaders)}set headers(e){m.isEqual(e,this.headers)||void 0===e&&0===Object.keys(this.headers).length||(this.rawHeaders=en(e||{}))}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>JSON.stringify(m.pick(this,["statusCode","statusMessage","headers","body"]))),(()=>this.updateHandler()))),(0,xe.bH)(this,(0,w.autorun)((()=>{const{status:e,statusMessage:t}=this.props.handler instanceof Es?this.props.handler:Object.assign(Object.assign({},this.props.handler),{status:this.props.handler.statusCode});(0,w.runInAction)((()=>{this.statusCode=e,this.statusMessage=t}))}))),(0,xe.bH)(this,(0,w.autorun)((()=>{const{data:e}=this.props.handler instanceof Es?this.props.handler:{data:this.props.handler.body};(0,w.runInAction)((()=>{this.body=Nt(e)}))}))),(0,xe.bH)(this,(0,w.autorun)((()=>{const{headers:e}=this.props.handler;(0,w.runInAction)((()=>{this.headers=e}))}))),(0,xe.bH)(this,(0,w.autorun)((()=>{const e=wn(nn(this.rawHeaders,"content-type"));e&&(0,w.runInAction)((()=>{this.contentType=e}))}))),(0,xe.bH)(this,(0,w.observe)(this,"contentType",(({oldValue:e,newValue:t})=>{const n=nn(this.rawHeaders,"content-type"),r=Cn(t);n?e===wn(n)&&(0,w.runInAction)((()=>{on(this.rawHeaders,"content-type",r)})):(0,w.runInAction)((()=>{this.rawHeaders.push(["content-type",r])}))}))),(0,xe.bH)(this,(0,w.observe)(this,"body",(({oldValue:e,newValue:t})=>{const n=nn(this.rawHeaders,"content-length");n&&parseInt(n||"",10)===Lt(e)&&(0,w.runInAction)((()=>{(0,w.runInAction)((()=>{on(this.rawHeaders,"content-length",Lt(t).toString())}))}))})))}get textEncoding(){return Dt(this.body)?"utf8":"binary"}render(){const{statusCode:e,statusMessage:t,rawHeaders:n,body:r}=this,o=r.toString(this.textEncoding);return ve.createElement(ME,null,ve.createElement(NE,null,"Status"),ve.createElement(qx,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),ve.createElement(NE,null,"Headers"),ve.createElement(Cx,{headers:n,onChange:this.onHeadersChanged}),ve.createElement(WE,null,ve.createElement(NE,null,"Response body"),ve.createElement(Iy,{format:this.contentType,content:r,onFormatted:this.setBody}),ve.createElement(LE,{value:this.contentType,onChange:this.setContentType},ve.createElement("option",{value:"text"},"Plain text"),ve.createElement("option",{value:"json"},"JSON"),ve.createElement("option",{value:"xml"},"XML"),ve.createElement("option",{value:"html"},"HTML"),ve.createElement("option",{value:"css"},"CSS"),ve.createElement("option",{value:"javascript"},"JavaScript"))),ve.createElement(zE,null,ve.createElement(og,{contentId:null,language:this.contentType,value:o,onChange:this.setBody})))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.rawHeaders=e}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Mt(e,this.textEncoding)}updateHandler(){var e;if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||this.rawHeaders.some((([e])=>!e.match(Zt)))||this.rawHeaders.some((([e,t])=>!t)))return this.props.onInvalidState();this.props.onChange("http"===this.props.ruleType?new Es(this.statusCode,this.statusMessage,this.body,this.headers):new Ms(this.statusCode,null!==(e=this.statusMessage)&&void 0!==e?e:Qt(this.statusCode),this.headers,this.body))}};IE([w.observable],_E.prototype,"statusCode",void 0),IE([w.observable],_E.prototype,"statusMessage",void 0),IE([w.observable],_E.prototype,"rawHeaders",void 0),IE([w.computed],_E.prototype,"headers",null),IE([w.observable],_E.prototype,"contentType",void 0),IE([w.observable],_E.prototype,"body",void 0),IE([w.computed],_E.prototype,"textEncoding",null),IE([w.action.bound],_E.prototype,"setStatus",null),IE([w.action.bound],_E.prototype,"onHeadersChanged",null),IE([w.action.bound],_E.prototype,"setContentType",null),IE([w.action.bound],_E.prototype,"setBody",null),_E=IE([xe.PA],_E);const VE=Le.div`
    margin-top: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
`,JE=Le(Tu)`
    font-size: ${e=>e.theme.textSize};
    padding: 10px 24px;

    flex-grow: 1;
    white-space: nowrap;
`,GE=Le.div`
    margin-left: 15px;
    flex-shrink: 1;

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-word;
`;let KE=class extends DE{constructor(){super(...arguments),this.statusCode=this.props.handler.status,this.statusMessage=this.props.handler.statusMessage,this.headers=this.props.handler.headers||{},this.filePath=(this.props.handler.filePath||"").toString(),this.selectFile=()=>jE(this,void 0,void 0,(function*(){const e=yield iu("path",[]);e&&(0,w.runInAction)((()=>{this.filePath=e}))}))}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>JSON.stringify(m.pick(this,["statusCode","statusMessage","headers","filePath"]))),(()=>this.updateHandler()))),(0,xe.bH)(this,(0,w.autorun)((()=>{const{status:e,statusMessage:t,headers:n,filePath:r}=this.props.handler;(0,w.runInAction)((()=>{this.statusCode=e,this.statusMessage=t,this.headers=n||{},this.filePath=r}))})))}render(){const{statusCode:e,statusMessage:t,headers:n}=this;return ve.createElement(ME,null,ve.createElement(NE,null,"Status"),ve.createElement(qx,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),ve.createElement(NE,null,"Headers"),ve.createElement(Tx,{headers:n,convertToRawHeaders:en,convertFromRawHeaders:tn,onChange:this.onHeadersChanged}),ve.createElement(NE,null,"Response body"),ve.createElement(VE,null,ve.createElement(JE,{onClick:this.selectFile},this.filePath?"Change file":ve.createElement(ve.Fragment,null,"Select file ",ve.createElement(Ao,null))),this.filePath&&ve.createElement(GE,null,this.filePath)),ve.createElement(BE,null,"All matching requests will receive a ",this.statusCode," response, with the response body containing the contents of the selected file."),ve.createElement(BE,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.headers=e}updateHandler(){if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||m.some(Object.keys(this.headers),(e=>!e.match(Zt))))return this.props.onInvalidState();this.props.onChange(new Cs(this.statusCode,this.statusMessage,this.filePath,this.headers))}};IE([w.observable],KE.prototype,"statusCode",void 0),IE([w.observable],KE.prototype,"statusMessage",void 0),IE([w.observable],KE.prototype,"headers",void 0),IE([w.observable],KE.prototype,"filePath",void 0),IE([w.action.bound],KE.prototype,"setStatus",null),IE([w.action.bound],KE.prototype,"onHeadersChanged",null),KE=IE([xe.PA],KE);const QE=Le(Ru)`
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
`;let YE=class extends DE{constructor(){super(...arguments),this.updateHostHeader=!0}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const e=this.props.handler?this.props.handler.forwarding.targetHost:"",t=!this.props.handler||this.props.handler.forwarding.updateHostHeader;(0,w.runInAction)((()=>{this.targetHost=e,this.updateHostHeader=!!t}))})))}render(){const{targetHost:e,updateHostHeader:t,error:n,onTargetChange:r,onUpdateHeaderChange:o}=this,{targetHost:s}=this.props.handler.forwarding,a="ws-forward-to-host"===this.props.handlerKey?"WebSocket":"request";return ve.createElement(ME,null,ve.createElement(NE,null,"Replacement host"),ve.createElement(QE,{value:e||"",invalid:!!n,spellCheck:!1,onChange:r}),ve.createElement(NE,null,"Host header"),ve.createElement(LE,{value:t.toString(),onChange:o,title:ol`
                    Most servers will not accept ${a}s that arrive
                    with the wrong host header, so it's typically useful
                    to automatically change it to match the new host
                `},ve.createElement("option",{value:"true"},"Update the host header automatically (recommended)"),ve.createElement("option",{value:"false"},"Leave the host header untouched")),s&&ve.createElement(BE,null,"All matching ",a,"s will be forwarded to ",s,", keeping their existing path",s.includes("://")?"":", protocol,"," and query string.",t?" Their host header will be automatically updated to match.":""))}updateHandler(){try{if(!this.targetHost)throw new Error("A target host is required");let e;const t=this.targetHost.match(/^(\w+):\/\//);if(t){const n="ws-forward-to-host"===this.props.handlerKey?["ws","wss"]:["http","https"];if(!n.includes(t[1].toLowerCase()))throw new Error(`The protocol must be either ${n[0]} or ${n[1]}`);e=this.targetHost.slice(t[0].length)}else e=this.targetHost;if(e.includes("/"))throw new Error("The replacement host shouldn't include a path, since it won't be used");if(e.includes("?"))throw new Error("The replacement host shouldn't include a query string, since it won't be used");const n="ws-forward-to-host"===this.props.handlerKey?Ws:Ss;this.props.onChange(new n(this.targetHost,this.updateHostHeader,this.props.rulesStore)),this.error=void 0}catch(e){throw console.log(e),this.error=Tt(e),this.props.onInvalidState&&this.props.onInvalidState(),e}}onTargetChange(e){this.targetHost=e.target.value;try{this.updateHandler(),e.target.setCustomValidity("")}catch(t){e.target.setCustomValidity(Tt(t).message)}e.target.reportValidity()}onUpdateHeaderChange(e){this.updateHostHeader="true"===e.target.value;try{this.updateHandler()}catch(e){}}};IE([w.observable],YE.prototype,"error",void 0),IE([w.observable],YE.prototype,"targetHost",void 0),IE([w.observable],YE.prototype,"updateHostHeader",void 0),IE([w.action.bound],YE.prototype,"onTargetChange",null),IE([w.action.bound],YE.prototype,"onUpdateHeaderChange",null),YE=IE([(0,xe.WQ)("rulesStore"),xe.PA],YE);const XE=Le(NE)`
    margin-top: 10px;
`,ZE=Le.hr`
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    border: solid 1px ${e=>e.theme.containerWatermark};
`,eC=Le.div`
    margin: 0 0 5px;

    ${e=>e.active&&Ue`
        border-left: solid 5px ${e=>e.theme.containerWatermark};

        &:focus-within {
            border-left: solid 5px ${e=>e.theme.primaryInputBackground};
        }

        padding-left: 5px;
        margin: 10px 0 15px;
    `}
`,tC=Le.div`
    > :first-child {
        margin-top: 0;
    }

    padding-top: 5px;
`,nC=Le(Ou)`
    margin: 0;

    ${e=>"none"===e.value&&Ue`
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    `}
`;let rC=class extends DE{constructor(){super(...arguments),this.transformRequest=this.props.handler.transformRequest||{},this.transformResponse=this.props.handler.transformResponse||{},this.transformField=e=>t=>(0,w.action)((n=>{this[e]=Object.assign(Object.assign({},this[e]),{[t]:n}),this.updateHandler()}))}render(){var e,t;return ve.createElement(ME,null,ve.createElement(XE,null,"Request Transforms:"),ve.createElement(oC,{replacementMethod:null===(e=this.transformRequest)||void 0===e?void 0:e.replaceMethod,onChange:this.transformField("transformRequest")("replaceMethod")}),ve.createElement(aC,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),ve.createElement(iC,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),ve.createElement(ZE,null),ve.createElement(XE,null,"Response Transforms:"),ve.createElement(sC,{replacementStatus:null===(t=this.transformResponse)||void 0===t?void 0:t.replaceStatus,onChange:this.transformField("transformResponse")("replaceStatus")}),ve.createElement(aC,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}),ve.createElement(iC,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}))}updateHandler(){this.props.onChange(new Ps(this.props.rulesStore,this.transformRequest,this.transformResponse))}};IE([w.observable],rC.prototype,"transformRequest",void 0),IE([w.observable],rC.prototype,"transformResponse",void 0),rC=IE([(0,xe.WQ)("rulesStore"),xe.PA],rC);const oC=e=>{var t;return ve.createElement(eC,{active:!!e.replacementMethod},ve.createElement(nC,{"aria-label":"Select how the method should be transformed",value:null!==(t=e.replacementMethod)&&void 0!==t?t:"none",onChange:t=>{const n=t.target.value;"none"===n?e.onChange(void 0):e.onChange(n)}},ve.createElement("option",{value:"none"},"Pass through the real request method"),Jo.map((e=>ve.createElement("option",{key:e,value:e},"Replace the request method with ",e)))))},sC=e=>{const t=void 0!==e.replacementStatus?"replace":"none";return ve.createElement(eC,{active:"none"!==t},ve.createElement(nC,{"aria-label":"Select how the status should be transformed",value:null!=t?t:"none",onChange:t=>{"none"===t.target.value?e.onChange(void 0):e.onChange(200)}},ve.createElement("option",{value:"none"},"Pass through the real response status"),ve.createElement("option",{value:"replace"},"Replace the response status")),"replace"===t&&ve.createElement(tC,null,ve.createElement(qx,{statusCode:e.replacementStatus,onChange:e.onChange,httpVersion:2,statusMessage:void 0})))};let aC=AE=class extends ve.Component{constructor(){super(...arguments),this.convertResultFromRawHeaders=e=>"updateHeaders"===this.selected?tn(e.map((([e,t])=>[e,""===t?void 0:t]))):tn(e),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;this.clearValues(),"none"!==t&&this.props.onChange(t)({})}}get selected(){var e;return null!==(e=m.find(AE.FIELDS,(e=>void 0!==this.props.transform[e])))&&void 0!==e?e:"none"}get headers(){return"none"===this.selected?{}:this.props.transform[this.selected]||{}}render(){const{type:e}=this.props,{selected:t,convertResultFromRawHeaders:n,onTransformTypeChange:r,setHeadersValue:o}=this;return ve.createElement(eC,{active:"none"!==t},ve.createElement(nC,{"aria-label":`Select how the ${e} headers should be transformed`,value:t,onChange:r},ve.createElement("option",{value:"none"},"Pass through the real ",e," headers"),ve.createElement("option",{value:"updateHeaders"},"Update the ",e," headers"),ve.createElement("option",{value:"replaceHeaders"},"Replace the ",e," headers")),"none"!==t&&ve.createElement(tC,null,ve.createElement(Tx,{headers:this.headers,convertToRawHeaders:en,convertFromRawHeaders:n,onChange:o,allowEmptyValues:"updateHeaders"===t})))}setHeadersValue(e){this.clearValues(),"none"!==this.selected&&this.props.onChange(this.selected)(e)}clearValues(){AE.FIELDS.forEach((e=>this.props.onChange(e)(void 0)))}};aC.FIELDS=["replaceHeaders","updateHeaders"],IE([w.computed],aC.prototype,"selected",null),IE([w.computed],aC.prototype,"headers",null),IE([w.action.bound],aC.prototype,"setHeadersValue",null),IE([w.action.bound],aC.prototype,"onTransformTypeChange",void 0),IE([w.action.bound],aC.prototype,"clearValues",null),aC=AE=IE([xe.PA],aC);let iC=qE=class extends ve.Component{constructor(){super(...arguments),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;if(this.clearValues(),"updateJsonBody"===t)this.props.onChange("updateJsonBody")({});else if("patchJsonBody"===t)this.props.onChange("patchJsonBody")([]);else if("replaceBody"===t)this.props.onChange("replaceBody")("");else if("replaceBodyFromFile"===t)this.props.onChange("replaceBodyFromFile")("");else if("matchReplaceBody"===t)this.props.onChange("matchReplaceBody")([]);else{if("none"===t)return;Pt(t)}},this.selectBodyReplacementFile=()=>jE(this,void 0,void 0,(function*(){const e=yield iu("path",[]);e&&(0,w.runInAction)((()=>{this.clearValues(),this.props.onChange("replaceBodyFromFile")(e)}))}))}get bodyReplacementBuffer(){return Nt(this.props.transform.replaceBody)}render(){var e;const{type:t,transform:n}=this.props,{bodyReplacementBuffer:r,onTransformTypeChange:o,setBodyReplacement:s,selectBodyReplacementFile:a,setJsonBodyUpdate:i,setJsonBodyPatch:l}=this,c=ne("^1.18.0"),d=null!==(e=m.find(qE.FIELDS,(e=>void 0!==n[e])))&&void 0!==e?e:"none";return ve.createElement(eC,{active:"none"!==d},ve.createElement(nC,{"aria-label":`Select how the ${t} body should be transformed`,value:d,onChange:o},ve.createElement("option",{value:"none"},"Pass through the real ",t," body"),ve.createElement("option",{value:"replaceBody"},"Replace the ",t," body with a fixed value"),ve.createElement("option",{value:"replaceBodyFromFile"},"Replace the ",t," body with a file"),ve.createElement("option",{value:"updateJsonBody"},"Update a JSON ",t," body by merging data"),c&&ve.createElement(ve.Fragment,null,ve.createElement("option",{value:"patchJsonBody"},"Update a JSON ",t," body using JSON patch"),ve.createElement("option",{value:"matchReplaceBody"},"Match & replace text in the ",t," body"))),"replaceBody"===d?ve.createElement(lC,{type:t,body:r,updateBody:s}):"replaceBodyFromFile"===d?ve.createElement(tC,null,ve.createElement(VE,null,ve.createElement(JE,{onClick:a},n.replaceBodyFromFile?"Change file":ve.createElement(ve.Fragment,null,"Select file ",ve.createElement(Ao,null))),n.replaceBodyFromFile&&ve.createElement(GE,null,n.replaceBodyFromFile))):"updateJsonBody"===d?ve.createElement(dC,{type:t,body:n.updateJsonBody,updateBody:i}):"patchJsonBody"===d?ve.createElement(uC,{type:t,operations:n.patchJsonBody,updateOperations:l}):"matchReplaceBody"===d?ve.createElement(pC,{type:t,replacements:n.matchReplaceBody,updateReplacements:this.props.onChange("matchReplaceBody")}):"none"===d?null:Pt(d))}clearValues(){qE.FIELDS.forEach((e=>this.props.onChange(e)(void 0)))}setBodyReplacement(e){this.clearValues(),this.props.onChange("replaceBody")(e)}setJsonBodyUpdate(e){this.clearValues(),this.props.onChange("updateJsonBody")(e)}setJsonBodyPatch(e){this.clearValues(),this.props.onChange("patchJsonBody")(e)}};iC.FIELDS=["replaceBody","replaceBodyFromFile","updateJsonBody","patchJsonBody","matchReplaceBody"],IE([w.computed],iC.prototype,"bodyReplacementBuffer",null),IE([w.action.bound],iC.prototype,"clearValues",null),IE([w.action.bound],iC.prototype,"setBodyReplacement",null),IE([w.action.bound],iC.prototype,"setJsonBodyUpdate",null),IE([w.action.bound],iC.prototype,"setJsonBodyPatch",null),iC=qE=IE([xe.PA],iC);const lC=e=>{const[t,n]=ve.useState("text");return ve.createElement(tC,null,ve.createElement(WE,null,ve.createElement(NE,null,"Replacement ",e.type," body"),ve.createElement(Iy,{format:t,content:e.body,onFormatted:e.updateBody}),ve.createElement(LE,{value:t,onChange:e=>n(e.target.value)},ve.createElement("option",{value:"text"},"Plain text"),ve.createElement("option",{value:"json"},"JSON"),ve.createElement("option",{value:"xml"},"XML"),ve.createElement("option",{value:"html"},"HTML"),ve.createElement("option",{value:"css"},"CSS"),ve.createElement("option",{value:"javascript"},"JavaScript"))),ve.createElement(zE,null,ve.createElement(og,{contentId:null,language:t,value:Bt(e.body),onChange:e.updateBody})))},cC=Le(Iy)`
    padding-right: 0;
`,dC=e=>{const[t,n]=ve.useState(),[r,o]=ve.useState(JSON.stringify(e.body,null,2));return ve.useEffect((()=>{try{e.updateBody(JSON.parse(r)),n(void 0)}catch(e){n(Tt(e))}}),[r]),ve.createElement(tC,null,ve.createElement(WE,null,ve.createElement(NE,null,"JSON to merge into ",e.type," body"),t&&ve.createElement(Ao,{title:t.message}),ve.createElement(cC,{format:"json",content:Nt(r),onFormatted:o})),ve.createElement(zE,{isInvalid:!!t},ve.createElement(og,{contentId:null,language:"json",value:r,onChange:e=>o(e)})))},uC=e=>{const[t,n]=ve.useState(),[r,o]=ve.useState(JSON.stringify(e.operations,null,2));return ve.useEffect((()=>{try{const t=JSON.parse(r),o=(0,$E.validate)(t);if(o)throw o;e.updateOperations(t),n(void 0)}catch(e){n(Tt(e))}}),[r]),ve.createElement(tC,null,ve.createElement(WE,null,ve.createElement(NE,null,"JSON ",e.type," body patch (see ",ve.createElement("a",{href:"https://jsonpatch.com/"},"jsonpatch.com"),")"),t&&ve.createElement(Ao,{title:t.message}),ve.createElement(cC,{format:"json",content:Nt(r),onFormatted:o})),ve.createElement(zE,{isInvalid:!!t},ve.createElement(og,{contentId:null,language:"json",value:r,onChange:e=>o(e)})))},pC=e=>{const[t,n]=ve.useState(),[r,o]=ve.useState(e.replacements.map((([e,t])=>({key:e instanceof RegExp?e.source:m.escapeRegExp(e),value:t}))));return ve.useEffect((()=>{const t=r.filter((e=>!0===mC(e.key))),o=r.length-t.length;n(o>0?new Error(`${o} regular expression${1===o?" is":"s are"} invalid`):void 0),e.updateReplacements(t.map((({key:e,value:t})=>[new RegExp(e,"g"),t])))}),[r]),ve.createElement(tC,null,ve.createElement(WE,null,ve.createElement(NE,null,"Regex matchers & replacements"),t&&ve.createElement(Ao,{title:t.message})),ve.createElement(hC,{pairs:r,onChange:o,keyPlaceholder:"Regular expression to match",keyValidation:mC,valuePlaceholder:"Replacement value",allowEmptyValues:!0}))},hC=Le(by)`
    input:nth-of-type(odd) {
        font-family: ${e=>e.theme.monoFontFamily};
    }
`,mC=e=>{var t;try{return new RegExp(e,"g"),!0}catch(e){return null!==(t=e.message)&&void 0!==t?t:e.toString()}};let gC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"All matching ",ui(this.props.ruleType)?"requests":"websocket"===this.props.ruleType?"WebSockets":"webrtc"===this.props.ruleType?"data and media":Pt(this.props.ruleType)," will be transparently passed through to the upstream ","webrtc"===this.props.ruleType?"RTC peer, once one is connected":"target host","."))}};gC=IE([xe.PA],gC);let fC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"All matching traffic will breakpoint when a request is sent."),ve.createElement(BE,null,"Once a request is breakpointed, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."))}};fC=IE([xe.PA],fC);let yC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"All matching traffic will breakpoint when a response is received from the upstream server."),ve.createElement(BE,null,"Once a response is breakpointed, you can rewrite the received message, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};yC=IE([xe.PA],yC);let vC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"All matching traffic will breakpoint when a request is sent, and when a response is received."),ve.createElement(BE,null,"From a request breakpoint, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."),ve.createElement(BE,null,"From a response breakpoint, you can rewrite a received response, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};vC=IE([xe.PA],vC);let bC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"When a matching ",ui(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?(()=>{throw new Error("Not compatible with WebRTC rules")})():Pt(this.props.ruleType)," is received, the server will keep the connection open but do nothing. With no data or response, most clients will time out and abort the request after sufficient time has passed."))}};bC=IE([xe.PA],bC);let xC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"As soon as a matching ",ui(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?(()=>{throw new Error("Not compatible with WebRTC rules")})():Pt(this.props.ruleType)," is received, the connection will be cleanly closed, with no response."))}};xC=IE([xe.PA],xC);let wC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"As soon as a matching ",ui(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?(()=>{throw new Error("Not compatible with WebRTC rules")})():Pt(this.props.ruleType)," is received, the connection will be killed with a TCP RST packet (or a RST_STREAM frame, for HTTP/2 requests)."))}};wC=IE([xe.PA],wC);let EC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"The WebSocket will be opened successfully, but not forwarded upstream, and every message that's sent will be echoed back to the client until the client closes the connection."))}};EC=IE([xe.PA],EC);let CC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"The WebSocket will be opened successfully, but not forwarded upstream. All messages from the client will be accepted, but no responses will be sent."))}};CC=IE([xe.PA],CC);const TC=`(${Ks.join("|")})(\\[\\])?`;let SC=class extends DE{constructor(){super(...arguments),this.typeValuePairs=[]}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{outputTypes:e,values:t}=this.props.handler,n=t.map((e=>Array.isArray(e)?e.join(", "):null==e?void 0:e.toString()));(0,w.runInAction)((()=>{this.typeValuePairs=m.zip(e,n).map((([e,t])=>({key:e,value:t})))}))})))}render(){const{typeValuePairs:e}=this,t=this.props.handler.result.result;return ve.createElement(ME,null,ve.createElement(NE,null,"Eth_Call return values"),ve.createElement(by,{pairs:e,onChange:this.onChange,keyPlaceholder:"Return value type (e.g. string, int256, etc)",keyValidation:TC,valuePlaceholder:"Return value",allowEmptyValues:!0}),this.error?ve.createElement(ve.Fragment,null,ve.createElement(BE,null,ve.createElement(Ao,null)," Could not encode data. ",this.error.message)):ve.createElement(ve.Fragment,null,ve.createElement(BE,null,"Encoded return value:"),ve.createElement(Ku,null,t)),ve.createElement(BE,null,"All matching Ethereum JSON-RPC calls will be intercepted, and the encoded output above returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){this.typeValuePairs=e;const t=this.typeValuePairs.map((({key:e,value:t})=>"string[]"===e?{key:e,value:t.split(/,\s?/g)}:e.startsWith("bytes")||e.endsWith("[]")?{key:e,value:t.split(/,\s?/g).map((e=>parseInt(e,10)))}:{key:e,value:t}));try{this.props.onChange(new Zs(t.map((({key:e})=>e)),t.map((({value:e})=>e)))),this.error=void 0}catch(e){if(!Ct(e))throw e;if("INVALID_ARGUMENT"===e.code){const{argument:t,value:n,reason:r}=e;this.error="type"===t||"param"===t?new Error(`Invalid type: ${n}`):"value"===t?new Error(`Invalid value: '${n}' (${r})`):e}else this.error=e;this.props.onInvalidState()}}};IE([w.observable],SC.prototype,"typeValuePairs",void 0),IE([w.observable],SC.prototype,"error",void 0),IE([w.action.bound],SC.prototype,"onChange",null),SC=IE([xe.PA],SC);let PC=class extends DE{constructor(){super(...arguments),this.value=this.props.handler.value}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{value:e}=this.props.handler;(0,w.runInAction)((()=>{0===e&&""===this.value||(this.value=e)}))})))}render(){const{value:e}=this;return ve.createElement(ME,null,ve.createElement(NE,null,"Return value"),ve.createElement(UE,{type:"number",min:0,value:e,onChange:this.onChange}),ve.createElement(BE,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){const t=e.target.value,n=""!==t?parseInt(t,10):"";m.isNaN(n)||(this.value=n,this.props.onChange(new ea(n||0)))}};IE([w.observable],PC.prototype,"value",void 0),IE([w.action.bound],PC.prototype,"onChange",null),PC=IE([xe.PA],PC);let kC=class extends DE{constructor(){super(...arguments),this.value=this.props.handler.value}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{value:e}=this.props.handler;(0,w.runInAction)((()=>{this.value=e}))})))}render(){const{value:e}=this;return ve.createElement(ME,null,ve.createElement(NE,null,"Return hash value"),ve.createElement(UE,{type:"text",value:e,onChange:this.onChange}),ve.createElement(BE,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."),ve.createElement(BE,null,ve.createElement(Ao,null)," In most cases, you will also want to add a rule for transaction receipts matching this value, to mock subsequent queries for the transaction's result."))}onChange(e){const t=e.target.value;/^0x[0-9a-fA-F]*$/.test(t)&&this.props.onChange(new ta(e.target.value))}};IE([w.observable],kC.prototype,"value",void 0),IE([w.action.bound],kC.prototype,"onChange",null),kC=IE([xe.PA],kC);let RC=class extends DE{constructor(){super(...arguments),this.valueString=JSON.stringify(this.props.valueGetter(this.props.handler),null,2)}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>JSON.stringify(this.props.valueGetter(this.props.handler),null,2)),(e=>{let t;try{t=JSON.stringify(JSON.parse(this.valueString),null,2)}catch(e){}e!==t&&(0,w.runInAction)((()=>{this.valueString=e,this.error=void 0}))})))}render(){const{valueString:e,error:t}=this,{name:n,explanation:r}=this.props;return ve.createElement(ME,null,ve.createElement(WE,null,ve.createElement(NE,null,n),t&&ve.createElement(Ao,{title:t.message}),ve.createElement(cC,{format:"json",content:Nt(e),onFormatted:this.onChange})),ve.createElement(zE,{isInvalid:!!t},ve.createElement(og,{contentId:null,language:"json",value:e,onChange:this.onChange})),r.map(((e,t)=>ve.createElement(BE,{key:t},e))))}onChange(e){this.valueString=e;try{const t=JSON.parse(e);this.props.onChange(this.props.handlerFactory(t)),this.error=void 0}catch(e){if(!Ct(e))throw e;this.error=e,this.props.onInvalidState()}}};IE([w.observable],RC.prototype,"valueString",void 0),IE([w.observable],RC.prototype,"error",void 0),IE([w.action.bound],RC.prototype,"onChange",null),RC=IE([xe.PA],RC);let OC=class extends DE{render(){return ve.createElement(RC,Object.assign({name:"Ethereum Transaction Receipt",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this transaction receipt will returned directly, without forwarding the call to the real Ethereum node."],handlerFactory:e=>new na(e),valueGetter:e=>e.receiptValue},this.props))}};OC=IE([xe.PA],OC);let HC=class extends DE{render(){return ve.createElement(RC,Object.assign({name:"Ethereum Block Data",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this fixed block data will returned directly, without forwarding the call to the real Ethereum node."],handlerFactory:e=>new ra(e),valueGetter:e=>e.blockValue},this.props))}};HC=IE([xe.PA],HC);let AC=class extends DE{constructor(){super(...arguments),this.errorMessage=this.props.handler.message,this.errorCode=this.props.handler.code||"",this.errorData=this.props.handler.data,this.errorName=this.props.handler.name}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>JSON.stringify(m.pick(this,["errorMessage","errorCode","errorData","errorName"]))),(()=>this.updateHandler()))),(0,xe.bH)(this,(0,w.autorun)((()=>{const{message:e,code:t,data:n,name:r}=this.props.handler;(0,w.runInAction)((()=>{this.errorMessage=e,this.errorData=n,this.errorName=r,""===this.errorCode&&0===t||(this.errorCode=t)}))})))}render(){const{errorMessage:e,errorCode:t,errorData:n,errorName:r}=this;return ve.createElement(ME,null,ve.createElement(NE,null,"Error Message"),ve.createElement(UE,{type:"text",value:e,onChange:this.onChangeMessage}),ve.createElement(NE,null,"Error Code"),ve.createElement(UE,{type:"number",value:t,onChange:this.onChangeCode}),ve.createElement(NE,null,"Error Data"),ve.createElement(UE,{type:"text",value:n,onChange:this.onChangeData}),ve.createElement(NE,null,"Error Name"),ve.createElement(UE,{type:"text",value:r||"",onChange:this.onChangeName}),ve.createElement(BE,null,"All matching Ethereum JSON-RPC requests will be intercepted, and this error response will returned directly, without forwarding the call to the real Ethereum node."))}onChangeMessage(e){this.errorMessage=e.target.value}onChangeCode(e){const t=e.target.value;if(!t)return void(this.errorCode="");const n=parseInt(t,10);m.isNaN(n)||(this.errorCode=n)}onChangeData(e){this.errorData=e.target.value}onChangeName(e){this.errorName=e.target.value}updateHandler(){this.props.onChange(new oa(this.errorMessage,this.errorData,this.errorCode||0,this.errorName))}};IE([w.observable],AC.prototype,"inputError",void 0),IE([w.observable],AC.prototype,"errorMessage",void 0),IE([w.observable],AC.prototype,"errorCode",void 0),IE([w.observable],AC.prototype,"errorData",void 0),IE([w.observable],AC.prototype,"errorName",void 0),IE([w.action.bound],AC.prototype,"onChangeMessage",null),IE([w.action.bound],AC.prototype,"onChangeCode",null),IE([w.action.bound],AC.prototype,"onChangeData",null),IE([w.action.bound],AC.prototype,"onChangeName",null),AC=IE([xe.PA],AC);let qC=class extends DE{constructor(){super(...arguments),this.contentType="text",this.body=Nt(this.props.handler.data)}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{data:e}=this.props.handler;(0,w.runInAction)((()=>{this.body=Nt(e)}))})))}get textEncoding(){return Dt(this.body)?"utf8":"binary"}render(){const{body:e}=this,t=e.toString(this.textEncoding);return ve.createElement(ME,null,ve.createElement(WE,null,ve.createElement(NE,null,"IPFS content"),ve.createElement(Iy,{format:this.contentType,content:e,onFormatted:this.setBody}),ve.createElement(LE,{value:this.contentType,onChange:this.setContentType},ve.createElement("option",{value:"text"},"Plain text"),ve.createElement("option",{value:"json"},"JSON"),ve.createElement("option",{value:"xml"},"XML"),ve.createElement("option",{value:"html"},"HTML"),ve.createElement("option",{value:"css"},"CSS"),ve.createElement("option",{value:"javascript"},"JavaScript"))),ve.createElement(zE,null,ve.createElement(og,{contentId:null,language:this.contentType,value:t,onChange:this.setBody})))}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Mt(e,this.textEncoding),this.props.onChange(new ga(this.body))}};IE([w.observable],qC.prototype,"contentType",void 0),IE([w.observable],qC.prototype,"body",void 0),IE([w.computed],qC.prototype,"textEncoding",null),IE([w.action.bound],qC.prototype,"setContentType",null),IE([w.action.bound],qC.prototype,"setBody",null),qC=IE([xe.PA],qC);let $C=class extends DE{constructor(){super(...arguments),this.filePath=(this.props.handler.filePath||"").toString(),this.selectFile=()=>jE(this,void 0,void 0,(function*(){const e=yield iu("path",[]);e&&((0,w.runInAction)((()=>{this.filePath=e})),this.props.onChange(new fa(this.filePath)))}))}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{filePath:e}=this.props.handler;(0,w.runInAction)((()=>{this.filePath=e}))})))}render(){return ve.createElement(ME,null,ve.createElement(NE,null,"IPFS content"),ve.createElement(VE,null,ve.createElement(JE,{onClick:this.selectFile},this.filePath?"Change file":ve.createElement(ve.Fragment,null,"Select file ",ve.createElement(Ao,null))),this.filePath&&ve.createElement(GE,null,this.filePath)),ve.createElement(BE,null,"All matching requests will receive a successful response containing the contents of the selected file."),ve.createElement(BE,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}};IE([w.observable],$C.prototype,"filePath",void 0),$C=IE([xe.PA],$C);let IC=class extends DE{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{result:e}=this.props.handler;(0,w.runInAction)((()=>{this.resultPairs=e.map((({Name:e,Hash:t})=>({key:e,value:t})))}))})))}render(){const{resultPairs:e}=this;return ve.createElement(ME,null,ve.createElement(NE,null,"IPFS Add Results"),ve.createElement(by,{pairs:e,onChange:this.onChange,keyPlaceholder:"Name of the added file",valuePlaceholder:"Hash of the added file"}),ve.createElement(BE,null,"All matching IPFS Add calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new ya(this.resultPairs.map((({key:e,value:t})=>({Name:e,Hash:t})))))}};IE([w.observable],IC.prototype,"resultPairs",void 0),IE([w.action.bound],IC.prototype,"onChange",null),IC=IE([xe.PA],IC);let jC=class extends DE{render(){return ve.createElement(RC,Object.assign({name:"IPNS Resolve Result",explanation:["All matching requests will be receive this data as a successful IPNS resolution."],handlerFactory:e=>new va(e),valueGetter:e=>e.result},this.props))}};jC=IE([xe.PA],jC);let DC=class extends DE{render(){return ve.createElement(RC,Object.assign({name:"IPNS Publish Result",explanation:["All matching requests will be receive this data as a successful IPNS publish result."],handlerFactory:e=>new ba(e),valueGetter:e=>e.result},this.props))}};DC=IE([xe.PA],DC);let MC=class extends DE{render(){return ve.createElement(RC,Object.assign({name:"IPFS Pinning Result",explanation:["All matching requests will be receive this data as a successful response."],handlerFactory:e=>new xa(e),valueGetter:e=>e.result},this.props))}};MC=IE([xe.PA],MC);let BC=class extends DE{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{result:e}=this.props.handler;(0,w.runInAction)((()=>{this.resultPairs=e.map((({Type:e,Cid:t})=>({key:e,value:t})))}))})))}render(){const{resultPairs:e}=this;return ve.createElement(ME,null,ve.createElement(NE,null,"IPFS Pin Ls Results"),ve.createElement(by,{pairs:e,onChange:this.onChange,keyPlaceholder:"Type of pin (recursive, direct, indirect)",valuePlaceholder:"CID of the pinned content"}),ve.createElement(BE,null,"All matching IPFS Pin Ls calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new wa(this.resultPairs.map((({key:e,value:t})=>({Type:e,Cid:t})))))}};IE([w.observable],BC.prototype,"resultPairs",void 0),IE([w.action.bound],BC.prototype,"onChange",null),BC=IE([xe.PA],BC);let FC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"Echo all sent data messages and all streamed video and audio media back to the intercepted peer wherever possible, until the connection is closed. No data will be forwarded to any connected remote peer."),ve.createElement(BE,null,"Note that in some cases echoing isn't possible - e.g. if the client opens a one-way video stream - in which case that data will simply be dropped."))}};FC=IE([xe.PA],FC);let NC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"Immediately close the WebRTC connection, with no further response and no data forwarded to any connected remote peer."))}};NC=IE([xe.PA],NC);let LC=class extends DE{render(){return ve.createElement(ME,null,ve.createElement(BE,null,"Wait until the next WebRTC media data is sent by the client."))}};LC=IE([xe.PA],LC);let UC=class extends DE{constructor(){super(...arguments),this.duration=this.props.handler.durationMs}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{durationMs:e}=this.props.handler;(0,w.runInAction)((()=>{0===e&&""===this.duration||(this.duration=e)}))})))}render(){const{duration:e}=this;return ve.createElement(ME,null,"Wait for ",ve.createElement(Ru,{type:"number",min:"0",placeholder:"Duration (ms)",value:e,onChange:this.onChange})," milliseconds.")}onChange(e){const t=e.target.value,n=""===t?"":parseInt(t,10);m.isNaN(n)||(this.duration=n,this.props.onChange(new Ba(n||0)))}};IE([w.observable],UC.prototype,"duration",void 0),IE([w.action.bound],UC.prototype,"onChange",null),UC=IE([xe.PA],UC);let WC=class extends DE{render(){const{channelLabel:e}=this.props.handler;return ve.createElement(ME,null,ve.createElement(NE,null,"Channel Label"),ve.createElement(UE,{placeholder:"The channel to wait for, or nothing to wait for any channel",value:null!=e?e:"",onChange:this.onChange}),ve.createElement(BE,null,"Wait until the client opens a WebRTC data channel ",e?`with the label "${e}"`:"with any label","."))}onChange(e){const t=e.target.value;this.props.onChange(new Fa(t||""))}};IE([w.action.bound],WC.prototype,"onChange",null),WC=IE([xe.PA],WC);let zC=class extends DE{render(){const{channelLabel:e}=this.props.handler;return ve.createElement(ME,null,ve.createElement(NE,null,"Channel Label"),ve.createElement(UE,{placeholder:"The channel to watch for messages, or nothing to watch every channel",value:null!=e?e:"",onChange:this.onChange}),ve.createElement(BE,null,"Wait until the client sends a WebRTC data message ",e?`on a channel with the label "${e}"`:"on any data channel","."))}onChange(e){const t=e.target.value;this.props.onChange(new Na(t||""))}};IE([w.action.bound],zC.prototype,"onChange",null),zC=IE([xe.PA],zC);let _C=class extends DE{render(){const{channelLabel:e}=this.props.handler;return ve.createElement(ME,null,ve.createElement(NE,null,"Channel Label"),ve.createElement(UE,{placeholder:"A label for the channel that will be created",value:e,onChange:this.onChange}),ve.createElement(BE,null,'Create a data channel on the WebRTC connection labelled "',e,'".'))}onChange(e){const t=e.target.value;this.props.onChange(new La(t))}};IE([w.action.bound],_C.prototype,"onChange",null),_C=IE([xe.PA],_C);let VC=class extends DE{constructor(){super(...arguments),this.channelLabel=this.props.handler.channelLabel,this.contentType="text",this.message=Nt(this.props.handler.message)}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const{channelLabel:e,message:t}=this.props.handler;(0,w.runInAction)((()=>{this.channelLabel=e,this.message=Nt(t)}))})))}get textEncoding(){return Dt(this.message)?"utf8":"binary"}render(){const{channelLabel:e,message:t}=this,n=t.toString(this.textEncoding);return ve.createElement(ME,null,ve.createElement(NE,null,"Channel Label"),ve.createElement(UE,{placeholder:"The channel to send the message to, or nothing to send on all open channels",value:null!=e?e:"",onChange:this.setChannelLabel}),ve.createElement(WE,null,ve.createElement(NE,null,"Message content"),ve.createElement(Iy,{format:this.contentType,content:t,onFormatted:this.setMessage}),ve.createElement(LE,{value:this.contentType,onChange:this.setContentType},ve.createElement("option",{value:"text"},"Plain text"),ve.createElement("option",{value:"json"},"JSON"),ve.createElement("option",{value:"xml"},"XML"))),ve.createElement(zE,null,ve.createElement(og,{contentId:null,language:this.contentType,value:n,onChange:this.setMessage})),ve.createElement(BE,null,"Send ",0===t.length?"an empty":"the above"," message on ",e?`any open channel with the label "${e}"`:"every open data channel","."))}setContentType(e){const t=e.target.value;this.contentType=t}setChannelLabel(e){const t=e.target.value;this.channelLabel=t||void 0,this.updateHandler()}setMessage(e){this.message=Mt(e,this.textEncoding),this.updateHandler()}updateHandler(){this.props.onChange(new Ua(this.channelLabel,this.message.toString(this.textEncoding)))}};IE([w.observable],VC.prototype,"channelLabel",void 0),IE([w.observable],VC.prototype,"contentType",void 0),IE([w.observable],VC.prototype,"message",void 0),IE([w.computed],VC.prototype,"textEncoding",null),IE([w.action.bound],VC.prototype,"setContentType",null),IE([w.action.bound],VC.prototype,"setChannelLabel",null),IE([w.action.bound],VC.prototype,"setMessage",null),VC=IE([xe.PA],VC);const JC=Le.h2`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    flex-basis: 100%;
    width: 100%;
    box-sizing: border-box;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;

    font-style: italic;
`,GC=Le.div`
    flex-basis: 100%;
    margin: -4px;
`,KC=Le(Ru)`
    width: 30%;
    margin-right: 5px;
    margin-bottom: 10px;
`,QC=Le(Ow)`
    font-size: 1em;
    padding: 0;
    vertical-align: middle;
`,YC=e=>{var t;return ve.createElement(GC,null,ve.createElement(KC,{autoFocus:!0,value:e.value,placeholder:"A custom name for this rule",onChange:t=>{e.onEditTitle(t.target.value)},onClick:e=>e.stopPropagation(),onKeyPress:t=>{"Enter"===t.key&&e.onSave(t)}}),ve.createElement(QC,{title:"Reset changes to rule name",icon:["fas","undo"],disabled:!e.onCancel,onClick:du(null!==(t=e.onCancel)&&void 0!==t?t:()=>{})}))};var XC=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const ZC=Le(mu)`
    margin-top: 10px;

    width: calc(100% - ${e=>40*e.depth}px);
    margin-left: ${e=>40*e.depth}px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: ${e=>e.theme.headingSize};

    overflow: initial;

    ${e=>e.collapsed&&!e.disabled?Ue`
            user-select: none;

            &:hover {
                ${Rw} {
                    display: flex;
                }

                ${kw} {
                    opacity: 0.5;
                }

                box-shadow: 0 2px 15px 0 rgba(0,0,0,${e=>1.5*e.theme.boxShadowAlpha});
            }

            ${e.deactivated&&"opacity: 0.6;"}
        `:e.collapsed?"":Ue`
                ${Rw} {
                    display: flex;
                }
            `}

    border-left: 5px solid ${e=>e.borderColor};

    &:focus {
        outline: none;
        box-shadow: 0 0 1px 2px ${e=>Ee.B3(e.theme.popColor,.5)};
        background-color: ${e=>e.theme.mainBackground};
    }
`,eT=Le((e=>ve.createElement(ZC,Object.assign({collapsed:!0,borderColor:"transparent"},m.omit(e,"onAdd"),{role:"button",tabIndex:0,depth:0,onClick:e.onAdd,onKeyPress:cu}),ve.createElement(Ro,{icon:["fas","plus"]}),"Add a new rule to rewrite requests or responses")))`
    > svg {
        margin: 0 10px;
    }

    margin-top: 20px;

    justify-content: center;
    background-color: ${e=>Ee.B3(e.theme.mainBackground,.4)};
    box-shadow: 0 0 4px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,tT=Le.section`
    align-self: stretch;
    flex-grow: 1;
    flex-basis: 0;
    max-width: calc(50% - 30px);
`,nT=Le.h1`
    ${e=>!e.collapsed&&Ue`
        opacity: 0.3;
    `}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;
`,rT=Le(Ro).attrs((()=>({icon:["fas","arrow-left"]})))`
    transform: rotate(180deg);
    padding: 0 15px;
`,oT=Le.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`,sT=Le.div`
    margin-top: 20px;
    margin-bottom: 20px;
`,aT=Le(Ro).attrs((()=>({icon:["fas","exclamation"],title:"High-priority rule: this rule overrides all non-high-prority rules"})))`
    margin-right: 10px;
    align-self: baseline;
}
`,iT=Le(Rw)`
    background-image: radial-gradient(
        ${e=>Ee.B3(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );
    z-index: 1;
`,lT=e=>ve.createElement(iT,{topOffset:7},ve.createElement(Ow,{icon:["fas",e.hasUnsavedChanges?"save":e.isCollapsed?"chevron-down":"chevron-up"],title:e.hasUnsavedChanges?"Save changes to this rule":e.isCollapsed?"Show rule details":"Hide rule details",onClick:e.hasUnsavedChanges?e.onSave:e.onToggleCollapse}),ve.createElement(Ow,{title:"Revert this rule to the last saved version",icon:["fas","undo"],disabled:!e.hasUnsavedChanges||e.isNewRule,onClick:e.onReset}),ve.createElement(Ow,{title:"Give this rule a custom name",icon:["fas","edit"],disabled:e.isEditingTitle,onClick:e.onSetCustomTitle}),ve.createElement(Ow,{title:e.toggleState?"Deactivate this rule":"Activate this rule",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation}),ve.createElement(Ow,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),ve.createElement(Ow,{title:"Delete this rule",icon:["far","trash-alt"],onClick:e.onDelete})),cT=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)};let dT=class extends ve.Component{constructor(){super(...arguments),this.initialMatcherSelect=ve.createRef(),this.containerRef=null,this.saveRule=du((()=>{this.stopEditingTitle(),this.props.saveRule(this.props.path)})),this.resetRule=du((()=>{this.stopEditingTitle(),this.props.resetRule(this.props.path)})),this.deleteRule=du((()=>this.props.deleteRule(this.props.path))),this.cloneRule=du((()=>this.props.cloneRule(this.props.path))),this.toggleCollapse=du((()=>{requestAnimationFrame((()=>{var e;this.containerRef&&this.containerRef.scrollIntoView({block:"nearest",behavior:"smooth"}),this.initialMatcherSelect.current&&(this.initialMatcherSelect.current.focus(),null===(e=getSelection())||void 0===e||e.empty())})),this.props.toggleRuleCollapsed(this.props.rule.id),this.stopEditingTitle()}))}render(){const{index:e,rule:t,path:n,isNewRule:r,hasUnsavedChanges:o,collapsed:s,disabled:a}=this.props,{isPaidUser:i,getPro:l}=this.props.accountStore,c=t.type,d=t.matchers.length?t.matchers[0]:void 0;let u;if("http"===c)u=d instanceof Vo.yN.MethodMatcher?Mn(Vo.IT[d.method]):void 0!==d?Mn("unknown"):"transparent";else if("websocket"===c)u=In("websocket");else if("ethereum"===c)u=In("mutative");else if("ipfs"===c)u=In("html");else{if("webrtc"!==c)throw new St(c);u=In("rtc-data")}const p=(e=>Object.values(Va[e]).filter((e=>{const t=Ga.get(e);return!ni.includes(t)&&!ei.includes(e)&&ne(_a[t])})))(c),h=((e,t)=>Object.values(Ka[e]).filter((e=>{const n=Xa.get(e);if(oi.includes(n))return!1;const r=si[n];return!!(void 0===r||t&&r(t))&&ne(_a[n])})))(c,d),m="handler"in t?[t.handler]:t.steps,g=!s||!t.title&&!this.titleEditState,f=!!this.titleEditState&&!s,y=t.title&&!f,v=pi(t)&&t.priority&&t.priority>fi.DEFAULT?ve.createElement(aT,null):null;return ve.createElement(Tw.sx,{draggableId:t.id,index:e,isDragDisabled:!s},((e,b)=>ve.createElement(xe.nu,null,(()=>ve.createElement(ZC,Object.assign({},e.draggableProps,{borderColor:u,ref:t=>{e.innerRef(t),this.containerRef=t},"aria-expanded":!s,collapsed:s,deactivated:!t.activated,disabled:a,tabIndex:s?0:void 0,onClick:s?this.toggleCollapse:void 0,onKeyPress:cu,depth:n.length-1,style:cT(e.draggableProps.style,b)}),ve.createElement(lT,{isCollapsed:s,isNewRule:r,hasUnsavedChanges:o,onToggleCollapse:this.toggleCollapse,onSave:this.saveRule,onReset:this.resetRule,toggleState:t.activated,onToggleActivation:this.toggleActivation,onClone:this.cloneRule,onDelete:this.deleteRule,isEditingTitle:f,onSetCustomTitle:this.startEnteringCustomTitle}),ve.createElement(kw,Object.assign({"aria-label":`Drag handle for ${(y||f)&&t.title?`this '${t.title}'`:"this"} mock rule`},e.dragHandleProps)),y&&ve.createElement(JC,null,v,t.title),f&&ve.createElement(YC,{value:t.title||"",onEditTitle:this.editTitle,onSave:this.saveRule,onCancel:this.titleEditState.originalTitle!==this.props.rule.title?this.cancelEditingTitle:void 0}),ve.createElement(tT,null,g&&ve.createElement(nT,{collapsed:s,title:mg(t)},!y&&v,mg(t)),!s&&ve.createElement(oT,null,ve.createElement(sT,null,"Match:"),ve.createElement("ul",null,ve.createElement(wE,{ref:this.initialMatcherSelect,matcher:d,onChange:this.setInitialMatcher}),t.matchers.slice(1).map(((e,n)=>ve.createElement(EE,{key:`${n}/${t.matchers.length}`,matcher:e,matcherIndex:n,onChange:(...e)=>this.updateMatcher(n+1,...e),onDelete:()=>this.deleteMatcher(e)}))),t.matchers.length>0&&ve.createElement(PE,{key:t.type,availableMatchers:p,existingMatchers:t.matchers,onAdd:this.addMatcher})))),g&&ve.createElement(rT,null),ve.createElement(tT,null,g&&ve.createElement(nT,{collapsed:s,title:gg(t)},gg(t)),!s&&ve.createElement(oT,null,ve.createElement(sT,null,"Then:"),m.map(((e,t)=>ve.createElement(uT,{key:t,handler:e,handlerIndex:t,isPaidUser:i,getPro:l,ruleType:c,availableHandlers:h,updateHandler:this.updateHandler}))))))))))}toggleActivation(e){const{rule:t}=this.props;t.activated=!t.activated,e.stopPropagation()}setInitialMatcher(e){const t=this.props.rule.type,n=ti(e);var r,o,s;if(t===n?this.props.rule.matchers[0]=e:(this.props.rule.type=n,this.props.rule.matchers=(r=n,o=e,s=this.props.rule.matchers,[o,...(s||[]).slice(1).filter((e=>((e,t)=>{const n=za(e);return!!Va[t][n]})(e,r)))])),"handler"in this.props.rule?!Za(this.props.rule.handler,e):!this.props.rule.steps.every((t=>Za(t,e)))){const e=this.props.getRuleDefaultHandler(n);gi(this.props.rule)?(this.props.rule.steps=[e],delete this.props.rule.handler):(this.props.rule.handler=e,delete this.props.rule.steps)}!function(e){var t;if("ipfs"!==e.type)return;const n=null===(t=e.matchers[0])||void 0===t?void 0:t.interactionName;if(!n)return;const r=e.matchers.findIndex((e=>"ipfs-arg"===za(e)));if(o=n,Object.keys(da).includes(o)){const t=new ua(n,void 0);-1===r?e.matchers.splice(1,0,t):e.matchers.splice(r,1,t)}else-1!==r&&e.matchers.splice(r,1);var o}(this.props.rule)}addMatcher(e){this.props.rule.matchers.push(e)}updateMatcher(e,...t){this.props.rule.matchers.splice(e,1,...t)}deleteMatcher(e){const t=this.props.rule;t.matchers=t.matchers.filter((t=>t!==e))}updateHandler(e,t){const n=this.props.rule;if("handler"in n){if(0!==e)throw new Error("Single-handler rules cannot have additional steps");n.handler=t}else n.steps[e]=t,(e=>{const t=za(e);return!Object.keys(Ya).includes(t)||ai.includes(t)})(t)?n.steps=n.steps.slice(0,e+1):e===n.steps.length-1&&n.steps.push(this.props.getRuleDefaultHandler(this.props.rule.type))}startEnteringCustomTitle(e){this.titleEditState={originalTitle:this.props.rule.title},this.props.collapsed&&this.props.toggleRuleCollapsed(this.props.rule.id),e.stopPropagation()}editTitle(e){this.props.rule.title=e||void 0}cancelEditingTitle(){this.titleEditState&&(this.editTitle(this.titleEditState.originalTitle),this.titleEditState=void 0)}stopEditingTitle(){var e;this.titleEditState&&(this.props.rule.title!==this.titleEditState.originalTitle&&(this.props.rule.title=(null===(e=this.props.rule.title)||void 0===e?void 0:e.trim())||void 0),this.titleEditState=void 0)}};XC([w.observable],dT.prototype,"titleEditState",void 0),XC([w.action.bound],dT.prototype,"toggleActivation",null),XC([w.action.bound],dT.prototype,"setInitialMatcher",null),XC([w.action.bound],dT.prototype,"addMatcher",null),XC([w.action.bound],dT.prototype,"updateMatcher",null),XC([w.action.bound],dT.prototype,"deleteMatcher",null),XC([w.action.bound],dT.prototype,"updateHandler",null),XC([w.action.bound],dT.prototype,"startEnteringCustomTitle",null),XC([w.action.bound],dT.prototype,"editTitle",null),XC([w.action.bound],dT.prototype,"cancelEditingTitle",null),XC([w.action.bound],dT.prototype,"stopEditingTitle",null),dT=XC([(0,xe.WQ)("accountStore"),xe.PA],dT);let uT=class extends ve.Component{componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>this.props.handler),(()=>{this.demoHandler=void 0})))}render(){var e;const{isPaidUser:t,getPro:n,ruleType:r,availableHandlers:o,handler:s,handlerIndex:a}=this.props,i=null!==(e=this.demoHandler)&&void 0!==e?e:s,l=!t&&i&&li(r,i);return ve.createElement(ve.Fragment,null,ve.createElement(HE,{value:i,ruleType:r,onChange:this.updateHandler,availableHandlers:o,handlerIndex:a}),l?ve.createElement(Sv,{getPro:n,source:`rule-${s.type}`},ve.createElement(FE,{ruleType:r,handler:i,onChange:m.noop})):ve.createElement(FE,{ruleType:r,handler:i,onChange:this.updateHandler}))}updateHandler(e){const{isPaidUser:t,handlerIndex:n,ruleType:r,updateHandler:o}=this.props;!t&&li(r,e)?this.demoHandler=e:o(n,e)}};XC([w.observable],uT.prototype,"demoHandler",void 0),XC([w.action.bound],uT.prototype,"updateHandler",null),uT=XC([xe.PA],uT);var pT=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const hT=Le.ol`
    padding: 0 40px 20px;
    min-height: calc(100% - 40px);
`;let mT=class extends ve.Component{constructor(){super(...arguments),this.buildDragEndListener=(e,t)=>(0,w.action)((({source:n,destination:r,combine:o})=>{this.currentlyDraggingRuleId=void 0;const{draftRules:s}=this.props;if(o){const t=e[n.index],r=o.draggableId.endsWith("-tail"),a=cs(s,{id:r?o.draggableId.slice(0,-5):o.draggableId}),i=ss(s,a);return void(ns(i)?this.props.moveRule(t,a.concat(r?i.items.length:0)):this.props.combineRulesAsGroup(t,a))}if(!r)return void(this.wasGroupOpenBeforeDrag&&(ss(s,e[n.index]).collapsed=!1));const{sourcePath:a,targetPath:i}=function(e,t,n,r){const o=e[n],s=e[r],a=function(e,t){let n=0;for(;void 0!==e[n]&&void 0!==t[n];){const r=t[n]-e[n];if(0!==r)return r;n+=1}return void 0!==e[n]?-1:void 0!==t[n]?1:0}(o,s),i=os(t,s),l=m.last(s),c=i.items.length>l?ss(t,s):void 0,d=o.slice(0,-1),u=s.slice(0,-1);if(c&&ns(c)&&!c.collapsed&&a>0)return{sourcePath:o,targetPath:s.concat(0)};if(void 0===c&&a>0){const e=u.slice(0,-1),t=m.isEqual(d,e)?0:1;return{sourcePath:o,targetPath:s.slice(0,-2).concat(s[s.length-2]+t)}}if(!m.isEqual(d,u)){const e=m.last(s);return{sourcePath:o,targetPath:a<0?u.concat(e):u.concat(e+1)}}return{sourcePath:o,targetPath:s}}(e,t,n.index,r.index);this.props.moveRule(a,i),this.wasGroupOpenBeforeDrag&&(ss(s,i).collapsed=!1)}))}beforeDrag({draggableId:e}){this.currentlyDraggingRuleId=e;const t=ls(this.props.draftRules,{id:e});t&&ns(t)?(this.wasGroupOpenBeforeDrag=!t.collapsed,t.collapsed=!0):this.wasGroupOpenBeforeDrag=void 0}render(){const{draftRules:e,activeRules:t,addRule:n,saveRule:r,resetRule:o,deleteItem:s,cloneItem:a,toggleRuleCollapsed:i,updateGroupTitle:l,getRuleDefaultHandler:c,collapsedRulesMap:d}=this.props,{beforeDrag:u,buildDragEndListener:p,currentlyDraggingRuleId:h}=this,{ruleRows:m,indexMapping:g}=gT(e,t,d,h,i,r,o,a,s,l,c);return ve.createElement(Tw.JY,{onBeforeCapture:u,onDragEnd:p(g,e)},ve.createElement(Tw.gL,{isCombineEnabled:!0,droppableId:"modify-rule-list"},(e=>ve.createElement(xe.nu,null,(()=>ve.createElement(hT,Object.assign({ref:e.innerRef},e.droppableProps),ve.createElement(eT,{onAdd:n,disabled:void 0!==h}),m,e.placeholder))))))}};function gT(e,t,n,r,o,s,a,i,l,c,d,u=e,p=[],h=0){const g={toggleRuleCollapsed:o,saveRule:s,resetRule:a,cloneRule:i,deleteRule:l,getRuleDefaultHandler:d};return u.items.reduce(((u,f,y)=>{const v=p.concat(y);if(ns(f)){if(u.ruleRows.push(ve.createElement(Mw,{key:f.id,group:f,path:v,index:h+u.indexMapping.length,collapsed:!!f.collapsed,updateGroupTitle:c,cloneGroup:i,deleteGroup:l})),u.indexMapping.push(v),f.collapsed)return u;const p=gT(e,t,n,r,o,s,a,i,l,c,d,f,v,h+u.indexMapping.length);u.ruleRows.push(...p.ruleRows),u.indexMapping.push(...p.indexMapping),u.ruleRows.push(ve.createElement(Fw,{key:f.id+"-tail",group:f,index:h+u.indexMapping.length})),u.indexMapping.push(v.concat(f.items.length))}else{const o=n[f.id],s=function(e,t,n,r){const o=cs(r,{id:e.id});if(!o)return"new";const s=os(n,t),a=os(r,o),i=a.items[m.last(o)];if(a.id!==s.id)return"changed";const l=m.intersectionBy(a.items,s.items,"id"),c=m.intersectionBy(s.items,a.items,"id");return(l.indexOf(i)!==c.indexOf(e)||!m.isEqualWith(i,e,hs))&&"changed"}(f,v,e,t);u.ruleRows.push(ve.createElement(dT,Object.assign({key:f.id,index:h+u.indexMapping.length,path:v,rule:f,isNewRule:"new"===s,hasUnsavedChanges:!!s,collapsed:o,disabled:void 0!==r&&r!==f.id},g))),u.indexMapping.push(v)}return u}),{indexMapping:[],ruleRows:[]})}pT([w.observable],mT.prototype,"currentlyDraggingRuleId",void 0),pT([w.action.bound],mT.prototype,"beforeDrag",null),mT=pT([xe.PA],mT);var fT=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},yT=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const vT=Le.section`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
`,bT=Le.div`
    overflow-y: scroll;
    flex-grow: 1;
`,xT=Le.header`
    box-sizing: border-box;
    width: 100%;
    padding: 20px calc(40px + 16px) 20px 40px; /* ~16px to match scrollbar below */
    background-color: ${e=>e.theme.containerBackground};
    border-bottom: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
`,wT=Le.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    flex-grow: 1;
`,ET=Le(Tu)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;
    margin-left: 20px;

    svg {
        margin-right: 5px;
    }
`,CT=Le(Pu)`
    border: none;
    font-size: 1.2em;
    padding: 5px 10px;
    margin-left: 10px;
`;let TT=class extends ve.Component{constructor(){super(...arguments),this.containerRef=ve.createRef(),this.collapsedRulesMap=m.fromPairs(us(this.props.rulesStore.draftRules,(e=>[e.id,e.id!==this.props.initialRuleId]))),this.getRuleDefaultHandler=e=>Ad(e,this.props.rulesStore),this.importRules=()=>yT(this,void 0,void 0,(function*(){const e=yield iu("text",[".htkrules","application/json","application/htkrules+json"]);if(e)try{this.props.rulesStore.loadSavedRules(JSON.parse(e))}catch(e){ye(e),alert(`Rules could not be imported: ${e}`)}})),this.exportRules=()=>yT(this,void 0,void 0,(function*(){const e=JSON.stringify(Wd(this.props.rulesStore.draftRules));au(`HTTPToolkit_${Ke.format(Date.now(),"YYYY-MM-DD_HH-mm")}.htkrules`,"application/htkrules+json;charset=utf-8",e)}))}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const e=us(this.props.rulesStore.draftRules,(e=>e.id)),t=m.keys(this.collapsedRulesMap),n=m.difference(t,e),r=m.difference(e,t);(0,w.runInAction)((()=>{n.forEach((e=>{delete this.collapsedRulesMap[e]})),r.forEach((e=>{this.collapsedRulesMap[e]=!0}))}))})));const{initialRuleId:e}=this.props,t=this.containerRef.current;if(e&&t){const n=t.querySelector(`[data-rbd-draggable-id="${e}"]`);requestAnimationFrame((()=>null==n?void 0:n.scrollIntoView()))}}render(){const{rules:e,draftRules:t,areSomeRulesUnsaved:n,areSomeRulesNonDefault:r,deleteDraftItem:o,moveDraftRule:s,updateGroupTitle:a,combineDraftRulesAsGroup:i}=this.props.rulesStore,{isPaidUser:l}=this.props.accountStore;return ve.createElement(vT,{ref:this.containerRef},ve.createElement(xT,null,ve.createElement(wT,null,"Transform & Mock HTTP"),ve.createElement(CT,{disabled:!r,onClick:this.resetToDefaults,onKeyPress:cu,title:"Reset rules to default"},ve.createElement(Ro,{icon:["far","trash-alt"]})),ve.createElement(CT,{disabled:!l,onClick:this.importRules,onKeyPress:cu,title:l?"Import a saved set of rules":"With Pro: Import a set of saved rules, so you can build your own ready-to-use collections of predefined rules"},ve.createElement(Ro,{icon:["fas","folder-open"]})),ve.createElement(CT,{disabled:!l||!r||0===t.items.length,onClick:this.exportRules,onKeyPress:cu,title:l?"Export these rules":"With Pro: Export these rules, to save them for quick reuse later"},ve.createElement(Ro,{icon:["fas","download"]})),ve.createElement(CT,{disabled:!n,onClick:this.resetRuleDrafts,onKeyPress:cu,title:"Revert changes since the last save"},ve.createElement(Ro,{icon:["fas","undo"]})),ve.createElement(ET,{disabled:!n,onClick:this.saveAll,onKeyPress:cu,title:"Save all rule changes"},ve.createElement(Ro,{icon:["fas","save"]})," Save changes")),ve.createElement(bT,null,ve.createElement(mT,{activeRules:e,draftRules:t,collapsedRulesMap:this.collapsedRulesMap,addRule:this.addRule,saveRule:this.saveRule,resetRule:this.resetRule,cloneItem:this.cloneItem,deleteItem:o,toggleRuleCollapsed:this.toggleRuleCollapsed,updateGroupTitle:a,getRuleDefaultHandler:this.getRuleDefaultHandler,moveRule:s,combineRulesAsGroup:i})))}collapseAll(){Object.keys(this.collapsedRulesMap).forEach((e=>{this.collapsedRulesMap[e]=!0}))}saveRule(e){const t=this.props.rulesStore.saveItem(e);this.collapsedRulesMap[t.id]=!0}resetRule(e){this.props.rulesStore.resetRule(e)}cloneItem(e){const t=ps(ss(this.props.rulesStore.draftRules,e));ns(t)?t.collapsed=!0:this.collapsedRulesMap[t.id]=!0;const n=m.last(e);this.props.rulesStore.addDraftItem(t,[...e.slice(0,-1),n+1])}saveAll(){this.props.rulesStore.saveRules(),this.collapseAll()}resetToDefaults(){confirm("Reset all rules?")&&(this.props.rulesStore.resetRulesToDefault(),this.collapseAll())}resetRuleDrafts(){this.props.rulesStore.resetRuleDrafts(),this.collapseAll()}addRule(){const e=function(e){return(0,w.observable)({id:p(),type:"http",activated:!0,matchers:[],completionChecker:new Vo.zO.Always,handler:Ad("http",e)})}(this.props.rulesStore);this.collapsedRulesMap[e.id]=!1,this.props.rulesStore.addDraftItem(e),setTimeout((()=>{const e=this.containerRef.current;if(!e)return;const t=e.querySelector("ol > section:nth-child(2) select");t&&t.focus()}),100)}toggleRuleCollapsed(e){this.collapsedRulesMap[e]=!this.collapsedRulesMap[e]}};fT([w.observable],TT.prototype,"collapsedRulesMap",void 0),fT([w.action.bound],TT.prototype,"collapseAll",null),fT([w.action.bound],TT.prototype,"saveRule",null),fT([w.action.bound],TT.prototype,"resetRule",null),fT([w.action.bound],TT.prototype,"cloneItem",null),fT([w.action.bound],TT.prototype,"saveAll",null),fT([w.action.bound],TT.prototype,"resetToDefaults",null),fT([w.action.bound],TT.prototype,"resetRuleDrafts",null),fT([w.action.bound],TT.prototype,"addRule",null),fT([w.action.bound],TT.prototype,"toggleRuleCollapsed",null),TT=fT([(0,xe.WQ)("rulesStore"),(0,xe.WQ)("accountStore"),xe.PA],TT);const ST=TT,PT="38px",kT=Le.div.attrs((()=>({role:"tablist"})))`
    width: 100%;
    height: ${PT};
    box-sizing: border-box;

    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.mainLowlightBackground};

    font-size: ${e=>e.theme.textSize};

    display: flex;
    flex-direction: row;
    align-items: end;
`,RT=Le.div`
    box-sizing: border-box;

    width: 200px;
    height: ${PT};

    flex-grow: 0;
    flex-shrink: 1;
    overflow: hidden;

    display: flex;
    flex-direction: row;

    ${e=>e.selected?Ue`
            margin-bottom: -1px;

            border-bottom: 3px solid ${e=>e.theme.popColor};

            background-color: ${e=>e.theme.mainBackground};
            box-shadow: 0 0 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
            z-index: 1;
        `:Ue`
            background-color: ${e=>e.theme.mainLowlightBackground};

            border-bottom: 3px solid transparent;

            &:hover {
                background-color: ${e=>e.theme.mainBackground};
            }
        `}
`,OT=Le.span`
    color: ${e=>Mn(e.method)};
    font-size: ${e=>e.theme.textInputFontSize};
    margin-right: 5px;
`,HT=Le.span`
    &:empty::before {
        content: 'New request';
        font-style: italic;
        opacity: ${e=>e.theme.lowlightTextOpacity};
        text-align: center;
    }
`,AT=Le(lp)`
`,qT=Le(lp)`
    align-self: center;
`,$T=Le(wu).attrs((e=>({role:"tab","aria-selected":e.selected.toString(),tabindex:e.selected?"0":"-1"})))`
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;

    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    padding: 0 10px;

    :focus-visible {
        outline: none;
        font-weight: bold;

        & + ${AT} {
            color: ${e=>e.theme.popColor};
        }
    }
`,IT=(0,Sw.PA)((e=>{const{request:t}=e.sendRequest,n=ve.useCallback((()=>{e.onSelectTab(e.sendRequest)}),[e.onSelectTab,e.sendRequest]),r=ve.useCallback((t=>{1===t.button&&e.onCloseTab(e.sendRequest)}),[e.onCloseTab,e.sendRequest]),o=ve.useCallback((t=>{e.onCloseTab(e.sendRequest),t.stopPropagation()}),[e.onCloseTab,e.sendRequest]),s=ve.useCallback((t=>{e.onContextMenu(t,e.sendRequest)}),[e.onContextMenu,e.sendRequest]);return ve.createElement(RT,{selected:e.isSelectedTab,onClick:n,onAuxClick:r,onContextMenu:s},ve.createElement($T,{selected:e.isSelectedTab,tabIndex:e.isSelectedTab?0:-1},ve.createElement(OT,{method:t.method},t.method),ve.createElement(HT,null,t.url.replace(/^https?:\/\//,"")||"")),e.isSelectedTab&&ve.createElement(AT,{title:"Close this tab",icon:["fas","times"],onClick:o,tabIndex:-1}))})),jT=(0,Sw.PA)((e=>{const t=ve.useRef(null),n=ve.useCallback((()=>{const e=t.current;if(!e)return;const n=e.querySelector("[role=tab][aria-selected=true]");n&&n.focus()}),[t]),r=ve.useCallback((t=>{if("Delete"===t.key)e.onCloseTab(e.selectedTab);else if("ArrowRight"===t.key)e.onMoveSelection(1);else if("ArrowLeft"===t.key)e.onMoveSelection(-1);else if("Home"===t.key)e.onMoveSelection(-1/0);else{if("End"!==t.key)return;e.onMoveSelection(1/0)}requestAnimationFrame((()=>n()))}),[e.onCloseTab,e.selectedTab,e.onMoveSelection,n]),o=ve.useCallback((e=>{e.stopPropagation()}),[]),s=ve.useCallback(((t,n)=>{t.preventDefault(),e.onContextMenu(t,[{type:"option",label:"Duplicate Tab",callback:()=>e.onAddTab(m.cloneDeep(n.request))},{type:"option",label:"Close Tab",callback:()=>e.onCloseTab(n)},{type:"option",label:"Close Other Tabs",callback:()=>{const t=[...e.sendRequests];for(let r of t)r!==n&&e.onCloseTab(r)}}])}),[e.onAddTab,e.onCloseTab,e.sendRequests]);return ve.createElement(kT,{ref:t,onKeyDown:r},e.sendRequests.map((t=>{const n=e.selectedTab===t;return ve.createElement(IT,{key:t.id,sendRequest:t,isSelectedTab:n,onSelectTab:e.onSelectTab,onCloseTab:e.onCloseTab,onContextMenu:s})})),ve.createElement(qT,{title:"Add another tab to send a new request",icon:["fas","plus"],onKeyDown:o,onClick:()=>e.onAddTab()}))})),DT=Le.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${e=>e.hasExpandedChild&&Ue`
        > :not(.ignores-expanded) {
            /* CollapsibleCard applies its own display property to override this for the expanded card */
            display: none;
        }

        > .ignores-expanded {
            /* Some components (request line & response status) don't disappear, but they shrink */
            transition: margin-bottom 0.1s;
            margin-bottom: -10px;
            z-index: 0;
        }
    `}
`,MT=Le(yu)`
    border-radius: 0;
    margin-bottom: 0;

    flex-basis: auto;

    ${e=>e.collapsed?Ue`
                flex-grow: 0;
                flex-shrink: 0;
                min-height: 50px;
            `:Ue`
                flex-grow: 1;
                flex-shrink: 1;
                min-height: 0;
            `};

    box-shadow: 0 -2px 5px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,BT=e=>ve.createElement(MT,Object.assign({},e),e.children,ve.createElement(Ty,{height:"100%"})),FT=Le(BT)`
    ${e=>!e.collapsed&&"\n        flex-basis: 50%;\n    "}
`,NT=Le.div`
    overflow-y: auto;

    flex-grow: 1;
    flex-shrink: 1;

    margin: 0 -20px -20px -20px;
    padding: 0 20px 20px 20px;
`,LT=Le(MT)`
    /* This is required to force the editor to shrink to fit, instead of going
       beyond the limits of the column when other item is expanded and pushes it down */
    overflow-y: hidden;

    ${e=>!e.collapsed&&"\n        /* When we're open, we want space more than any siblings */\n        flex-grow: 9999999;\n        flex-shrink: 0.1;\n\n        /* If we're open, never let us get squeezed to nothing: */\n        min-height: 25vh;\n\n        /* Fixed size required to avoid editor resize thrashing */\n        flex-basis: 60%;\n    "}
`,UT=Le(jy)`
    flex-shrink: 1;
`,WT=Object.values(Vo.IT).filter((e=>"string"==typeof e)),zT=Le.form`
    background-color: ${e=>e.theme.mainBackground};
    flex-grow: 0;
    display: flex;

    z-index: 1;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,_T=Le(Ro).attrs((()=>({icon:["fas","chevron-down"]})))`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);

    color: ${e=>e.theme.mainColor};
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-size: ${e=>e.theme.textInputFontSize};

    pointer-events: none;
`,VT=Le(Ou)`
    border-radius: 0;
    border: none;
    outline: none;
    appearance: none;

    border-left: 5px solid ${e=>e.borderColor};

    padding: 5px 0 5px 15px;
    font-size: ${e=>e.theme.textInputFontSize};

    height: 100%;
    width: 100%;

    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.mainLowlightBackground};
`,JT=Le.div`
    position: relative;
    font-size: ${e=>e.theme.textSize};

    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 105px;

    &:focus-within {
        > svg {
            color: ${e=>e.theme.popColor};
            opacity: 1;
        }

        > select {
            font-weight: bold;
        }
    }
`,GT=Le(Ru)`
    flex-basis: 100%;
    flex-grow: 1;

    border-radius: 0;
    border: none;

    padding: 10px 10px 10px;

    font-size: ${e=>e.theme.textSize};

    &:focus {
        outline: none;
    }
`,KT=Le(Tu)`
    padding: 4px 18px 5px;
    border-radius: 0;

    font-size: ${e=>e.theme.textSize};

    > svg {
        padding: 0;
    }

    &:focus {
        outline: none;
        background-color: ${e=>e.theme.popColor};
    }
`,QT=e=>{const t=ve.useCallback((t=>{e.updateMethod(t.target.value)}),[e.updateMethod]),n=ve.useCallback((t=>{e.updateUrl(t.target.value)}),[e.updateUrl]),r=ve.useCallback((e=>{const t=e.target;t.value||(t.value="https://")}),[]),o=ve.useCallback((t=>(t.preventDefault(),e.sendRequest(),!1)),[e.sendRequest]),s=Mn(e.method);return ve.createElement(zT,{className:"ignores-expanded",onSubmit:o},ve.createElement(JT,null,ve.createElement(VT,{value:e.method,onChange:t,borderColor:s},WT.map((e=>ve.createElement("option",{key:e,value:e},e)))),ve.createElement(_T,null)),ve.createElement(GT,{type:"url",spellCheck:"false",placeholder:"https://example.com/hello?name=world",required:!0,value:e.url,onFocus:r,onChange:n}),ve.createElement(KT,{type:"submit",disabled:e.isSending,title:`Send this request (${nu}+Enter)`},e.isSending?ve.createElement(Ro,{spin:!0,fixedWidth:!0,icon:["fas","spinner"]}):ve.createElement($o,{direction:"right"})))};const YT=(0,xe.PA)((e=>{var{headers:t,updateHeaders:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["headers","updateHeaders"]);return ve.createElement(MT,Object.assign({},r,{headerAlignment:"left"}),ve.createElement("header",null,ve.createElement(py,null,ve.createElement(hy,{expanded:r.expanded,onClick:r.onExpandToggled})),ve.createElement(bu,{onCollapseToggled:r.onCollapseToggled},"Request Headers")),ve.createElement(NT,null,ve.createElement(Cx,{headers:t,onChange:n})))}));var XT=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let ZT=class extends ve.Component{constructor(){super(...arguments),this.updateBody=e=>{this.props.onBodyUpdated(Mt(e,this.textEncoding))}}get textEncoding(){return Dt(this.props.body.decoded)?"utf8":"binary"}render(){const{editorNode:e,expanded:t,onExpandToggled:n,onCollapseToggled:r,headers:o,contentType:s,onContentTypeUpdated:a,body:i}=this.props,l=Bt(i.decoded,this.textEncoding);return ve.createElement(LT,Object.assign({},this.props,{headerAlignment:"left"}),ve.createElement("header",null,ve.createElement(By,{body:i,onBodyFormatted:this.updateBody,title:"Request body",expanded:t,onExpandToggled:n,onCollapseToggled:r,selectedContentType:s,contentTypeOptions:yn,onChangeContentType:a})),"rejected"===i.latestEncodingResult.state&&ve.createElement(Ny,{error:i.latestEncodingResult.value,headers:o,type:"encoding"}),ve.createElement(UT,{showFullBorder:!1},ve.createElement(_m.bL,{node:e,contentId:"request",language:s,value:l,onChange:this.updateBody})))}};XT([w.computed],ZT.prototype,"textEncoding",null),ZT=XT([xe.PA],ZT);var eS=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const tS=["GET","HEAD","OPTIONS"],nS=e=>(su("Ctrl+Enter, Cmd+Enter",(t=>{e.sendRequest()}),[e.sendRequest]),null);let rS=class extends ve.Component{get cardProps(){return this.props.uiStore.sendCardProps}componentDidMount(){(0,xe.bH)(this,(0,w.reaction)((()=>this.props.requestInput.method),(e=>{if(!(this.props.requestInput.rawBody.decoded.length>0))if(tS.includes(e)){if(this.cardProps.requestBody.collapsed)return;this.cardProps.requestBody.onCollapseToggled()}else{if(!this.cardProps.requestBody.collapsed)return;this.cardProps.requestBody.onCollapseToggled()}}),{fireImmediately:!0}))}render(){const{requestInput:e,sendRequest:t,isSending:n,editorNode:r,uiStore:o}=this.props;return ve.createElement(DT,{hasExpandedChild:!!(null==o?void 0:o.expandedSendRequestCard)},ve.createElement(nS,{sendRequest:t}),ve.createElement(QT,{method:e.method,updateMethod:this.updateMethod,url:e.url,updateUrl:this.updateUrl,isSending:n,sendRequest:t}),ve.createElement(YT,Object.assign({},this.cardProps.requestHeaders,{headers:e.headers,updateHeaders:this.updateHeaders})),ve.createElement(ZT,Object.assign({},this.cardProps.requestBody,{headers:e.headers,contentType:e.requestContentType,onContentTypeUpdated:this.updateRequestContentType,body:e.rawBody,onBodyUpdated:this.updateBody,editorNode:r})))}updateMethod(e){this.props.requestInput.method=e}updateUrl(e){this.props.requestInput.url=e}updateHeaders(e){const{requestInput:t}=this.props;t.headers=e}updateRequestContentType(e){const{requestInput:t}=this.props;t.requestContentType=e}updateBody(e){const{requestInput:t}=this.props;t.rawBody.updateDecodedBody(e)}};eS([w.action.bound],rS.prototype,"updateMethod",null),eS([w.action.bound],rS.prototype,"updateUrl",null),eS([w.action.bound],rS.prototype,"updateHeaders",null),eS([w.action.bound],rS.prototype,"updateRequestContentType",null),eS([w.action.bound],rS.prototype,"updateBody",null),rS=eS([(0,xe.WQ)("rulesStore"),(0,xe.WQ)("uiStore"),xe.PA],rS);const oS=Le(MT)`
    padding-top: 7px;
    padding-bottom: 7px;
    flex-shrink: 0;
    flex-grow: 0;

    z-index: 1;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha});

    > header {
        flex-direction: row;
        justify-content: flex-start;
    }
`,sS=Le(lp).attrs((()=>({icon:["fas","search"],title:"Jump to this request on the View page"})))`
    padding: 3px 10px;
    margin-right: -10px;

    margin-left: auto;
`,aS=e=>{const t=e.exchange.response;return ve.createElement(oS,{className:"ignores-expanded",ariaLabel:"Response status section",collapsed:!1,headerAlignment:"left"},ve.createElement("header",null,ve.createElement(Au,{color:jn(t.statusCode,e.theme)},t.statusCode,": ",t.statusMessage||Qt(t.statusCode)),ve.createElement(Mb,{timingEvents:e.exchange.timingEvents}),ve.createElement(Au,{title:"The size of the raw encoded response body"},Ut(t.body.encoded.byteLength)),e.showRequestOnViewPage&&ve.createElement(sS,{onClick:e.showRequestOnViewPage})))},iS=Le(qu)`
    margin-left: auto;
    svg {
        margin-right: 5px;
    }
`,lS=(0,Sw.PA)((e=>{var t;return ve.createElement(oS,{className:"ignores-expanded",ariaLabel:"Response status section",collapsed:!1,headerAlignment:"left"},ve.createElement("header",null,ve.createElement(Au,{color:jn(void 0,e.theme)},"    ...    "),ve.createElement(Mb,{timingEvents:null!==(t=e.timingEvents)&&void 0!==t?t:{}}),e.abortRequest&&ve.createElement(iS,{color:e.theme.popColor,onClick:e.abortRequest},ve.createElement(Ro,{icon:["fas","times"]}),"Cancel request")))})),cS=e=>ve.createElement(oS,{className:"ignores-expanded",ariaLabel:"Response status section",collapsed:!1,headerAlignment:"left"},ve.createElement("header",null,ve.createElement(Au,{color:jn("aborted",e.theme)},"Failed: ",m.startCase(e.errorType)),ve.createElement(Mb,{timingEvents:e.exchange.timingEvents}),e.showRequestOnViewPage&&ve.createElement(sS,{onClick:e.showRequestOnViewPage})));var dS=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const uS=e=>{var{httpVersion:t,requestUrl:n,headers:r}=e,o=dS(e,["httpVersion","requestUrl","headers"]);return ve.createElement(MT,Object.assign({},o),ve.createElement("header",null,ve.createElement(py,null,ve.createElement(hy,{expanded:o.expanded,onClick:o.onExpandToggled})),ve.createElement(bu,{onCollapseToggled:o.onCollapseToggled},"Response Headers")),ve.createElement(NT,null,ve.createElement(ab,{httpVersion:t,requestUrl:n,headers:r})))},pS=e=>{var t=dS(e,[]);return ve.createElement(BT,Object.assign({},t),ve.createElement("header",null,ve.createElement(py,null,ve.createElement(hy,{expanded:t.expanded,onClick:t.onExpandToggled})),ve.createElement(bu,{onCollapseToggled:t.onCollapseToggled},"Response Headers")))};var hS=n(48287).Buffer,mS=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const gS=["text","raw","base64","image"];let fS=class extends ve.Component{componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{this.props.message||this.onChangeContentType(void 0)})))}onChangeContentType(e){var t;e===(null===(t=this.props.message)||void 0===t?void 0:t.contentType)?this.selectedContentType=void 0:this.selectedContentType=e}render(){var e;const{url:t,message:n,isPaidUser:r,collapsed:o,expanded:s,onCollapseToggled:a,onExpandToggled:i,ariaLabel:l}=this.props,c=n?kn(n.contentType,ln(n.headers["content-type"]),n.body,n.headers):["text"],d=m.includes(c,this.selectedContentType)?this.selectedContentType:null!==(e=null==n?void 0:n.contentType)&&void 0!==e?e:"text",u=null==n?void 0:n.body.decoded;if(u)return ve.createElement(LT,{ariaLabel:l,collapsed:o,onCollapseToggled:a,expanded:s},ve.createElement("header",null,ve.createElement(My,{body:u,mimeType:nn(n.headers,"content-type"),downloadFilename:Dy(t,n.headers),title:"Response body",expanded:s,onExpandToggled:i,onCollapseToggled:a,selectedContentType:d,contentTypeOptions:c,onChangeContentType:this.onChangeContentType,isPaidUser:r})),ve.createElement(UT,{showFullBorder:!1},ve.createElement(qy,{contentId:n.id,editorNode:this.props.editorNode,headers:n.headers,contentType:d,expanded:!!s,cache:n.cache},u)));if(!u&&(null==n?void 0:n.body.decodingError)){const e=n.body.decodingError,c=hS.isBuffer(n.body.encoded)?n.body.encoded:void 0,d=m.includes(gS,this.selectedContentType)?this.selectedContentType:"text";return ve.createElement(LT,{ariaLabel:l,collapsed:o,onCollapseToggled:a,expanded:s},ve.createElement("header",null,ve.createElement(My,{body:c,mimeType:"application/octet-stream",downloadFilename:Dy(t,n.headers),title:"Response body",expanded:s,onExpandToggled:i,onCollapseToggled:a,selectedContentType:d,contentTypeOptions:gS,onChangeContentType:this.onChangeContentType,isPaidUser:r})),ve.createElement(Ny,{type:"decoding",error:e,headers:n.rawHeaders}),c&&ve.createElement(UT,{showFullBorder:!1},ve.createElement(qy,{contentId:n.id,editorNode:this.props.editorNode,contentType:d,expanded:!!s,cache:n.cache},c)))}return ve.createElement(FT,{ariaLabel:l,collapsed:o,onCollapseToggled:a,expanded:s},ve.createElement("header",null,ve.createElement(My,{body:void 0,title:"Response body",expanded:s,onExpandToggled:i,onCollapseToggled:a,selectedContentType:d,contentTypeOptions:c,onChangeContentType:this.onChangeContentType,isPaidUser:r})))}};mS([w.observable],fS.prototype,"selectedContentType",void 0),mS([w.action.bound],fS.prototype,"onChangeContentType",null),fS=mS([xe.PA],fS);const yS=Le.p`
    margin-bottom: 10px;
    line-height: 1.3;
`,vS=Le(yS)`
    font-weight: bold;
`,bS=e=>{const{errorType:t,errorMessage:n}=e;return Kf(t)||Qf(t)||"client-abort"===t||ye(`Unexpected Send error type: ${t}`),ve.createElement(MT,{ariaLabel:"HTTP failure section",collapsed:!1},ve.createElement("header",null,ve.createElement("h1",null,"Request Failure")),ve.createElement(vS,null,ve.createElement(Ao,null)," ",Kf(t)?"This request was not sent successfully":Qf(t)?"This response was not received successfully":"client-abort"===t?"This request was cancelled":`The request failed because of an unexpected error: ${t}`," ",ve.createElement(Ao,null)),Kf(t)?ve.createElement(yS,null,"The upstream server ","wrong-host"===t?"responded with an HTTPS certificate for the wrong hostname":"expired"===t?"has an expired HTTPS certificate":"not-yet-valid"===t?"has an HTTPS certificate with a start date in the future":"untrusted"===t?"has an untrusted HTTPS certificate":"tls-error"===t?"could not complete a TLS handshake":"host-unreachable"===t?"was not reachable on your network connection":"host-not-found"===t||"dns-error"===t?"hostname could not be found":"connection-refused"===t?"refused the connection":Pt(t),", so HTTP Toolkit didn't send the request."):Qf(t)?ve.createElement(yS,null,"The upstream request failed because ","connection-reset"===t?"the connection to the server was reset":"server-unparseable"===t?"the response from the server was unparseable":"server-timeout"===t?"of a timeout waiting for a response from the server":Pt(t),"."):"client-abort"===t?ve.createElement(ve.Fragment,null,ve.createElement(yS,null,"This request was cancelled after sending, before a response was completed."),ve.createElement(yS,null,"The server may have received and could still be processing this request, but the connection has been closed so HTTP Toolkit will not receive any response.")):ve.createElement(yS,null,"It's not clear what's gone wrong here, but for some reason HTTP Toolkit couldn't successfully and/or securely complete this request. This might be an intermittent issue, and may be resolved by retrying the request."),!!n&&ve.createElement(Ku,null,"Error: ",n))};let xS=class extends ve.Component{get cardProps(){return this.props.uiStore.sendCardProps}render(){const{exchange:e,uiStore:t}=this.props;return e?ve.createElement(DT,{hasExpandedChild:!!(null==t?void 0:t.expandedSentResponseCard)},e.isSuccessfulExchange()?this.renderSuccessfulResponse(e):e.isCompletedExchange()?this.renderFailedResponse(e):this.renderInProgressResponse()):null}renderSuccessfulResponse(e){const{uiStore:t,editorNode:n,showRequestOnViewPage:r}=this.props,o=e.response;return ve.createElement(ve.Fragment,null,ve.createElement(aS,{exchange:e,showRequestOnViewPage:r,theme:t.theme}),ve.createElement(uS,Object.assign({},this.cardProps.responseHeaders,{httpVersion:e.httpVersion,requestUrl:e.request.parsedUrl,headers:o.rawHeaders})),ve.createElement(fS,Object.assign({},this.cardProps.responseBody,{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:o,editorNode:n})))}renderFailedResponse(e){const{uiStore:t,showRequestOnViewPage:n}=this.props,r=ty(e.tags);return r||ye(`Sent response failed with no error tags: ${JSON.stringify(e.tags)} (${e.abortMessage})`),ve.createElement(ve.Fragment,null,ve.createElement(cS,{exchange:e,errorType:null!=r?r:"unknown",showRequestOnViewPage:n,theme:t.theme}),ve.createElement(bS,{errorType:null!=r?r:"unknown",errorMessage:e.abortMessage}))}renderInProgressResponse(){const{uiStore:e,editorNode:t,requestInput:n,exchange:r,abortRequest:o}=this.props;return ve.createElement(ve.Fragment,null,ve.createElement(lS,{timingEvents:null==r?void 0:r.timingEvents,abortRequest:o,theme:e.theme}),ve.createElement(pS,Object.assign({},this.cardProps.responseHeaders)),ve.createElement(fS,Object.assign({},this.cardProps.responseBody,{isPaidUser:this.props.accountStore.isPaidUser,url:n.url,editorNode:t})))}};xS=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,xe.WQ)("uiStore"),(0,xe.WQ)("accountStore"),xe.PA],xS);const wS=Le.div`
    height: 100vh;
    position: relative;
    background-color: ${e=>e.theme.mainBackground};
`,ES=Le.div`
    position: relative;
    height: calc(100vh - ${PT});
    box-shadow: 0 -2px 5px 1px rgba(0,0,0,${e=>e.theme.boxShadowAlpha});
`,CS=e=>(su("Ctrl+Tab, Cmd+Tab",(()=>{e.onMoveSelection(1)}),[e.onMoveSelection]),su("Ctrl+Shift+Tab, Cmd+Shift+Tab",(()=>{e.onMoveSelection(-1)}),[e.onMoveSelection]),su("Escape",(()=>{e.onAbortRequest&&e.onAbortRequest()}),[e.onAbortRequest]),null);let TS=class extends ve.Component{constructor(){super(...arguments),this.requestEditorNode=_m.KF({attributes:{style:"height: 100%"}}),this.responseEditorNode=_m.KF({attributes:{style:"height: 100%"}}),this.sendRequest=()=>{const{sendRequest:e,selectedRequest:t}=this.props.sendStore;e(t).catch((e=>{var t,n,r;console.log(e);const o=e instanceof q&&(null===(t=e.apiError)||void 0===t?void 0:t.message)?null===(n=e.apiError)||void 0===n?void 0:n.message:null!==(r=e.message)&&void 0!==r?r:e;alert(o)}))},this.showRequestOnViewPage=()=>{const{sentExchange:e}=this.props.sendStore.selectedRequest;if(!e)return;const{navigate:t}=this.props;t(`/view/${e.id}`)}}render(){var e,t,n;const{sendRequests:r,selectRequest:o,moveSelection:s,deleteRequest:a,selectedRequest:i,addRequestInput:l}=this.props.sendStore,{handleContextMenuEvent:c}=this.props.uiStore;return ve.createElement(wS,null,ve.createElement(jT,{sendRequests:r,selectedTab:i,onSelectTab:o,onMoveSelection:s,onCloseTab:a,onAddTab:l,onContextMenu:c}),ve.createElement(CS,{onMoveSelection:s,onAbortRequest:null===(e=null==i?void 0:i.pendingSend)||void 0===e?void 0:e.abort}),ve.createElement(ES,{id:"send-tabpanel",role:"tabpanel"},ve.createElement(Vm,{split:"vertical",primary:"second",defaultSize:"50%",minSize:300,maxSize:-300},ve.createElement(rS,{requestInput:i.request,sendRequest:this.sendRequest,isSending:"pending"===(null===(t=i.pendingSend)||void 0===t?void 0:t.promise.state),editorNode:this.requestEditorNode}),ve.createElement(xS,{requestInput:i.request,exchange:i.sentExchange,abortRequest:null===(n=i.pendingSend)||void 0===n?void 0:n.abort,showRequestOnViewPage:i.sentExchange?this.showRequestOnViewPage:void 0,editorNode:this.responseEditorNode}))),ve.createElement(_m.oj,{node:this.requestEditorNode},ve.createElement(ag,{contentId:null})),ve.createElement(_m.oj,{node:this.responseEditorNode},ve.createElement(ag,{contentId:null})))}};TS=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,xe.WQ)("sendStore"),(0,xe.WQ)("uiStore"),xe.PA],TS);const SS=TS,PS=Le.div`
    display: flex;
    flex-direction: row;
`,kS=Le((e=>ve.createElement("nav",Object.assign({},(0,m.omit)(e,"isSelected"),{onClick:t=>{t.tabValue&&e.onClick(t.tabValue)}}),e.children.map((t=>ve.cloneElement(t,{key:t.props.value,selected:e.isSelected(t.props.value)}))))))`
    width: 80px;
    border-right: solid 2px ${e=>e.theme.containerBackground};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`,RS=Le((e=>ve.createElement(wu,{className:e.className,onClick:t=>{t.tabValue=e.value}},ve.createElement(Ro,{icon:e.icon}),e.children)))`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    width: 100%;
    font-size: ${e=>e.theme.textSize};
    box-sizing: border-box;

    padding: 10px 20px 10px 0;

    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    opacity: 0.6;
    ${e=>e.selected&&Ue`
        opacity: 1;
        font-weight: bold;
        border-right: solid 3px ${e.theme.popColor};
        padding-right: 22px;
        position: relative;
        right: -2px;
    `}

    > svg {
        margin-bottom: 10px;
        width: 2em;
        height: auto;
    }
`,OS=Ue`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 16px;

    ${e=>e.highlight&&Ue`
        &:not(:disabled) {
            background-color: ${e=>e.theme.popColor};
        }
    `}
`,HS=Le(Tu)`${OS}`,AS=Le(Su)`${OS}`,qS=Le.p`
    font-style: italic;
    line-height: 1.3;
`,$S=Le(Vu)`
    &:not(header + &) {
        margin-top: 40px;
    }
`;var IS=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const jS=Le.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${Ru} {
        align-self: stretch;
    }
`,DS=Le.div`
    min-width: 300px;
    font-family: ${e=>e.theme.monoFontFamily};
`;let MS=class extends ve.Component{constructor(){super(...arguments),this.inputValue=""}render(){const{values:e,onDelete:t,placeholder:n}=this.props;return ve.createElement(jS,null,e.map((e=>[ve.createElement(DS,{key:`value-${e}`},e),ve.createElement(HS,{key:`delete-${e}`,onClick:()=>t(e)},ve.createElement(Ro,{icon:["far","trash-alt"]}))])),ve.createElement(Ru,{placeholder:n,value:this.inputValue,onChange:this.changeInput}),ve.createElement(HS,{disabled:!Jc(this.inputValue)||e.includes(this.inputValue),onClick:this.addHost},ve.createElement(Ro,{icon:["fas","plus"]})))}addHost(e){this.props.onAdd(this.inputValue),this.inputValue=""}changeInput(e){this.inputValue=e.target.value,this.props.validationFn(e.target)}};IS([w.observable],MS.prototype,"inputValue",void 0),IS([w.action.bound],MS.prototype,"addHost",null),IS([w.action.bound],MS.prototype,"changeInput",null),MS=IS([xe.PA],MS);var BS=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const FS=Le(HS).attrs((()=>({children:"Restart app to activate",onClick:()=>window.location.reload()})))`
    position: absolute;
    top: 18px;
    left: 20px;
    font-weight: bold;

    &:not(:disabled) {
        background-color: ${e=>e.theme.popColor};
    }

    ${e=>!e.visible&&"display: none;"}
`,NS=Le(Ro).attrs((()=>({icon:["fas","save"]})))`
    margin-left: 10px;
    color: ${e=>e.theme.warningColor};
`,LS=Le.div`
    display: grid;
    grid-template-columns: fit-content(45%) fit-content(45%) fit-content(10%);
    align-items: baseline;

    grid-gap: 10px;
    margin-bottom: 10px;

    input {
        & + ${Ao} {
            visibility: hidden;
            align-self: center;
        }

        &:invalid + ${Ao} {
            visibility: visible;
        }
    }
`,US=Le.p`
    margin-bottom: 10px;
`,WS=Le(Ou)`
    display: inline-block;
    margin-top: 10px;
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;
`,zS=uu((function(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+$/))}),"Should be a valid hostname");let _S=class extends ve.Component{constructor(){var e,t;super(...arguments),this.minPortValue=((null===(e=this.props.proxyStore.portConfig)||void 0===e?void 0:e.startPort)||8e3).toString(),this.maxPortValue=((null===(t=this.props.proxyStore.portConfig)||void 0===t?void 0:t.endPort)||65535).toString()}onMinPortChange({target:{value:e}}){this.minPortValue=e,this.updatePortConfig()}onMaxPortChange({target:{value:e}}){this.maxPortValue=e,this.updatePortConfig()}get isCurrentPortInRange(){const{httpProxyPort:e,portConfig:t}=this.props.proxyStore;return t?e>=t.startPort&&e<=t.endPort:e>=8e3}get portConfig(){return{startPort:parseInt(this.minPortValue,10),endPort:parseInt(this.maxPortValue,10)}}get isCurrentPortConfigValid(){return Zc(this.portConfig)}updatePortConfig(){this.isCurrentPortConfigValid&&this.props.proxyStore.setPortConfig(this.portConfig)}addTlsPassthroughHostname(e){const{tlsPassthroughConfig:t}=this.props.proxyStore;t.push({hostname:e})}removeTlsPassthroughHostname(e){const{tlsPassthroughConfig:t}=this.props.proxyStore,n=m.findIndex(t,(t=>t.hostname===e));-1!==n&&t.splice(n,1)}render(){const e=this.props,{proxyStore:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["proxyStore"]),{httpProxyPort:r,http2Enabled:o,http2CurrentlyEnabled:s,tlsPassthroughConfig:a,currentTlsPassthroughConfig:i}=t;return ve.createElement(yu,Object.assign({},n),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:n.onCollapseToggled},"Proxy Settings")),ve.createElement(FS,{visible:this.isCurrentPortConfigValid&&!this.isCurrentPortInRange||o!==s||!m.isEqual(a,i)}),ve.createElement(LS,null,ve.createElement(Vu,null,"Minimum port"),ve.createElement(Ru,{type:"number",required:!0,min:"1",max:"65535",value:this.minPortValue,onChange:this.onMinPortChange}),ve.createElement(Ao,null),ve.createElement(Vu,null,"Maximum port"),ve.createElement(Ru,{type:"number",required:!0,min:this.minPortValue,max:"65535",value:this.maxPortValue,onChange:this.onMaxPortChange}),ve.createElement(Ao,null)),ve.createElement(US,null,"The proxy is currently using port ",ve.createElement("strong",null,r),this.isCurrentPortConfigValid&&!this.isCurrentPortInRange?", outside this range. Restart the app now to use this configuration.":"."),ve.createElement(qS,null,"When opening HTTP Toolkit, it will start the proxy on the first port in this range that is available. If all ports in the range are in use, the first free port above 8000 will be used instead."),te(Z.value,"^1.12.0")&&ve.createElement(ve.Fragment,null,ve.createElement($S,null,"TLS Passthrough ",!m.isEqual(a,i)&&ve.createElement(NS,null)),ve.createElement(MS,{values:a.map((e=>e.hostname)),onAdd:this.addTlsPassthroughHostname,onDelete:this.removeTlsPassthroughHostname,placeholder:"A hostname whose TLS connections should not be intercepted",validationFn:zS}),ve.createElement(qS,null,"Incoming TLS connections to these hostnames will bypass HTTP Toolkit, and will be forwarded upstream untouched instead of being intercepted. Clients will not see HTTP Toolkit's certificate, which may solve some connection issues, but traffic within these TLS connections will not be accessible.")),te(Z.value,"^0.1.44 || ^1.0.0")&&ve.createElement(ve.Fragment,null,ve.createElement($S,null,"HTTP/2 Support ",o!==s&&ve.createElement(NS,null)),ve.createElement(WS,{value:JSON.stringify(o),onChange:(0,w.action)((e=>{const n=e.currentTarget.value;n&&(t.http2Enabled=JSON.parse(n))}))},ve.createElement("option",{value:"true"},"Enabled for all clients"),ve.createElement("option",{value:'"fallback"'},"Enabled only for HTTP/2-only clients"),ve.createElement("option",{value:"false"},"Disabled for all clients"))))}};BS([w.observable],_S.prototype,"minPortValue",void 0),BS([w.observable],_S.prototype,"maxPortValue",void 0),BS([w.action.bound],_S.prototype,"onMinPortChange",null),BS([w.action.bound],_S.prototype,"onMaxPortChange",null),BS([w.computed],_S.prototype,"isCurrentPortInRange",null),BS([w.computed],_S.prototype,"portConfig",null),BS([w.computed],_S.prototype,"isCurrentPortConfigValid",null),BS([w.action.bound],_S.prototype,"addTlsPassthroughHostname",null),BS([w.action.bound],_S.prototype,"removeTlsPassthroughHostname",null),_S=BS([(0,xe.WQ)("proxyStore"),xe.PA],_S);var VS=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const JS=Le.div`
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > ${$S}, > ${qS} {
        flex-basis: 100%;
    }

    > ${Ao} {
        align-self: center;
    }

    > ${Ru} {
        flex-grow: 1;
    }

    > ${HS} {
        margin-left: 10px;
    }
`,GS=Le(Ou)`
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;

    margin-right: 10px;
`,KS=uu(Jc,"Should be a plain hostname, optionally with a specific port"),QS=e=>!!(null==e?void 0:e.match(/^([^/@]*@)?[A-Za-z0-9\-.]+(:\d+)?$/)),YS=uu(QS,"Should be a plain hostname, optionally with a specific port and/or username:password");let XS=class extends ve.Component{constructor(){super(...arguments),this.proxyType=this.props.rulesStore.upstreamProxyType,this.proxyHostInput=this.props.rulesStore.upstreamProxyHost||""}setProxyType(e){const t=e.currentTarget.value;this.proxyType=t,st({category:"Config",action:"Set Proxy",value:this.proxyType}),("direct"===t||"system"===t)&&(this.props.rulesStore.upstreamProxyType=this.proxyType)}setProxyHostInput(e){YS(e.target),this.proxyHostInput=e.target.value}saveProxyHost(){if("direct"===this.proxyType||"system"===this.proxyType)throw new Error(`Can't save proxy host for ${this.proxyType} proxy`);const e=this.props.rulesStore;e.upstreamProxyType=this.proxyType,e.upstreamProxyHost=this.proxyHostInput}addNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=[...t.upstreamNoProxyHosts,e]}removeNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=m.without(t.upstreamNoProxyHosts,e)}render(){const{effectiveSystemProxyConfig:e,upstreamProxyType:t,upstreamProxyHost:n,upstreamNoProxyHosts:r}=this.props.rulesStore,{proxyType:o,proxyHostInput:s,setProxyType:a,setProxyHostInput:i,saveProxyHost:l,addNoProxyHost:c,removeNoProxyHost:d}=this;return ve.createElement(ve.Fragment,null,ve.createElement($S,null,"Upstream Proxy"),ve.createElement(JS,null,ve.createElement(GS,{value:o,onChange:a},ve.createElement("option",{value:"system"},"Use system settings"),ve.createElement("option",{value:"direct"},"Connect directly"),ve.createElement("option",{value:"http"},"Use an HTTP proxy"),ve.createElement("option",{value:"https"},"Use an HTTPS proxy"),ve.createElement("option",{value:"socks4"},"Use a SOCKS 4 proxy"),ve.createElement("option",{value:"socks4a"},"Use a SOCKS 4a proxy"),ve.createElement("option",{value:"socks5"},"Use a SOCKS 5 proxy"),ve.createElement("option",{value:"socks5h"},"Use a SOCKS 5h proxy")),"system"===o&&("ignored"===e||"unparseable"===e)&&ve.createElement(Ao,null),"system"===o&&e&&ve.createElement(qS,null,"ignored"===e?ve.createElement(ve.Fragment,null,"The system is configured with a localhost proxy. To avoid issues with recursive proxy loops, this will be ignored and requests will be sent directly. Localhost proxies must be manually configured."):"unparseable"===e?ve.createElement(ve.Fragment,null,"The system proxy settings could not be parsed, so requests will be sent directly."):ve.createElement(ve.Fragment,null,"The configured system proxy is ",e.proxyUrl,".")),"direct"!==o&&"system"!==o&&ve.createElement(ve.Fragment,null,ve.createElement(Ru,{placeholder:`The ${o} proxy host details, e.g. example.com or user:pwd@example.com:8080`,value:s,onChange:i}),ve.createElement(HS,{disabled:!QS(s)||s===n&&o===t,onClick:l},ve.createElement(Ro,{icon:["fas","save"]})))),"direct"!==o&&"system"!==o&&ve.createElement(ve.Fragment,null,ve.createElement($S,null,"Non-proxied hosts"),ve.createElement(MS,{placeholder:"A host whose traffic should not be sent via the proxy",onAdd:c,onDelete:d,values:r,validationFn:KS}),ve.createElement(qS,null,"Requests to these hosts will always be sent directly, not via the configured proxy.")))}};VS([w.observable],XS.prototype,"proxyType",void 0),VS([w.action.bound],XS.prototype,"setProxyType",null),VS([w.observable],XS.prototype,"proxyHostInput",void 0),VS([w.action.bound],XS.prototype,"setProxyHostInput",null),VS([w.action.bound],XS.prototype,"saveProxyHost",null),VS([w.action.bound],XS.prototype,"addNoProxyHost",null),VS([w.action.bound],XS.prototype,"removeNoProxyHost",null),XS=VS([xe.PA],XS);const ZS=Le.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${Ru} {
        align-self: stretch;
    }

    input[type=file] {
        display: none;
    }
`,eP=Le.div`
    font-style: italic;
`,tP=Le.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    > :first-child {
        flex: 1 1;
    }

    > button {
        margin-left: 10px;
    }

    > svg {
        flex: 1 1 100%;
        text-align: center;
    }
`,nP=Le(Ro).attrs((()=>({icon:["fas","spinner"],spin:!0})))`
    margin: 0 auto;
`;let rP=class extends ve.Component{constructor(){super(...arguments),this.clientCertHostInput="",this.certFileInputRef=ve.createRef(),this.decryptClientCertData=(0,w.flow)((function*(){const{pfx:e,passphrase:t}=this.clientCertData;this.clientCertState="processing",this.clientCertError=void 0;const n=yield nl(e,t);this.handleClientCertValidationResult(n)}))}removeClientCertificate(e){const{clientCertificateHostMap:t}=this.props.rulesStore;delete t[e]}addClientCertificate(){const{clientCertificateHostMap:e}=this.props.rulesStore;e[this.clientCertHostInput]=this.clientCertData,st({category:"Config",action:"Add Client Cert"}),this.clientCertHostInput="",this.clientCertData=void 0,this.clientCertState=void 0}onClientCertSelected(e){const t=e.target;if(!t.files||!t.files.length)return;const n=t.files[0],r=new FileReader;r.readAsArrayBuffer(n),this.clientCertState="processing",this.clientCertError=void 0;const o=this;r.addEventListener("load",(0,w.flow)((function*(){let e;o.clientCertData={pfx:r.result,filename:n.name},e=yield nl(o.clientCertData.pfx,void 0),"invalid-passphrase"===e?(e=yield nl(o.clientCertData.pfx,""),"valid"===e&&(o.clientCertData.passphrase=""),o.handleClientCertValidationResult(e)):o.handleClientCertValidationResult(e)}))),r.addEventListener("error",(()=>{o.clientCertState="error"}))}handleClientCertValidationResult(e){this.clientCertError=void 0,"valid"===e?this.clientCertState="decrypted":"invalid-passphrase"===e?this.clientCertState="encrypted":"invalid-format"===e?(this.clientCertState="error",this.clientCertError="Parsing failed"):"missing-key"===e?(this.clientCertState="error",this.clientCertError="No private key found"):"missing-cert"===e?(this.clientCertState="error",this.clientCertError="No certificate found"):Pt(e)}dropClientCertData(){this.clientCertData=void 0,this.clientCertState=void 0}render(){const{clientCertificateHostMap:e}=this.props.rulesStore;return ve.createElement(ve.Fragment,null,ve.createElement($S,null,"Client Certificates"),ve.createElement(ZS,null,Object.entries(e).map((([e,t])=>[ve.createElement(DS,{key:`host-${e}`},e),ve.createElement(eP,{key:`filename-${e}`},t.filename),ve.createElement(HS,{key:`delete-${e}`,onClick:()=>this.removeClientCertificate(e)},ve.createElement(Ro,{icon:["far","trash-alt"]}))])),ve.createElement(Ru,{placeholder:"A host where the certificate should be used",value:this.clientCertHostInput,onChange:(0,w.action)((e=>{this.clientCertHostInput=e.target.value,KS(e.target)}))}),void 0===this.clientCertState?ve.createElement(ve.Fragment,null,ve.createElement(HS,{onClick:()=>this.certFileInputRef.current.click()},"Load a client certificate"),ve.createElement("input",{ref:this.certFileInputRef,type:"file",accept:".pfx,.p12,application/x-pkcs12",onChange:this.onClientCertSelected})):"processing"===this.clientCertState?ve.createElement(nP,null):"decrypted"===this.clientCertState?ve.createElement(tP,null,ve.createElement(eP,null,this.clientCertData.filename),ve.createElement(HS,{onClick:this.dropClientCertData},ve.createElement(Ro,{icon:["fas","undo"],title:"Deselect this certificate"}))):"encrypted"===this.clientCertState?ve.createElement(tP,null,ve.createElement(Ru,{placeholder:`The passphrase for ${this.clientCertData.filename}`,value:this.clientCertData.passphrase||"",onChange:(0,w.action)((e=>{this.clientCertData.passphrase=e.target.value}))}),ve.createElement(HS,{onClick:()=>this.decryptClientCertData()},ve.createElement(Ro,{icon:["fas","unlock"],title:"Decrypt with this passphrase"})),ve.createElement(HS,{onClick:this.dropClientCertData},ve.createElement(Ro,{icon:["fas","undo"],title:"Deselect this certificate"}))):"error"===this.clientCertState?ve.createElement(tP,null,ve.createElement("p",null,ve.createElement(Ao,null)," ",this.clientCertError||"Invalid certificate"),ve.createElement(HS,{onClick:this.dropClientCertData},ve.createElement(Ro,{icon:["fas","undo"],title:"Deselect this certificate"}))):Pt(this.clientCertState),ve.createElement(HS,{disabled:!Jc(this.clientCertHostInput)||"decrypted"!==this.clientCertState||!!e[this.clientCertHostInput],onClick:this.addClientCertificate},ve.createElement(Ro,{icon:["fas","plus"]}))),ve.createElement(qS,null,"These certificates will be used for client TLS authentication, if requested by the server, when connecting to their corresponding hostname."))}};VS([w.observable],rP.prototype,"clientCertHostInput",void 0),VS([w.action.bound],rP.prototype,"removeClientCertificate",null),VS([w.action.bound],rP.prototype,"addClientCertificate",null),VS([w.observable],rP.prototype,"clientCertData",void 0),VS([w.observable],rP.prototype,"clientCertState",void 0),VS([w.observable],rP.prototype,"clientCertError",void 0),VS([w.action.bound],rP.prototype,"onClientCertSelected",null),VS([w.action.bound],rP.prototype,"dropClientCertData",null),rP=VS([xe.PA],rP);const oP=Le.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    input[type=file] {
        display: none;
    }
`,sP=Le.div`
    font-style: italic;
`,aP=Le(HS)`
    grid-column: 1 / span 2;
`;let iP=class extends ve.Component{constructor(){super(...arguments),this.certFileButtonRef=ve.createRef(),this.addCertificate=(0,w.flow)(function*(){const{rulesStore:e}=this.props,t=this.certFileButtonRef.current;try{const n=yield iu("arraybuffer",[".pem",".crt",".cert",".der","application/x-pem-file","application/x-x509-ca-cert"]),r=yield function(e){return Ki(this,void 0,void 0,(function*(){return(yield Zi({type:"parse-cert",buffer:e})).result}))}(n);if(e.additionalCaCertificates.some((({rawPEM:e})=>e===r.rawPEM)))return t.setCustomValidity("This CA is already trusted."),void t.reportValidity();e.additionalCaCertificates.push(r)}catch(e){console.warn(e);const n=Tt(e).message;t.setCustomValidity(`Could not load certificate: ${n}${n.endsWith(".")?"":"."} File must be a PEM or DER-formatted CA certificate.`),t.reportValidity()}}.bind(this))}removeCertificate(e){const{rulesStore:t}=this.props;m.pull(t.additionalCaCertificates,e)}render(){const{additionalCaCertificates:e}=this.props.rulesStore;return ve.createElement(ve.Fragment,null,ve.createElement($S,null,"Trusted CA Certificates"),ve.createElement(oP,null,e.map((e=>{const{subject:{org:t,name:n},serial:r}=e;return[ve.createElement(sP,{key:r},[t&&(!n||n.length<=5)?t:void 0,n,r?`(serial ${r})`:void 0].filter((e=>!!e)).join(" ")),ve.createElement(HS,{key:`delete-${r}`,onClick:()=>this.removeCertificate(e)},ve.createElement(Ro,{icon:["far","trash-alt"]}))]})),ve.createElement(aP,{onClick:this.addCertificate,type:"submit",ref:this.certFileButtonRef},"Load a CA certificate")),ve.createElement(qS,null,"These Certificate Authority (CA) certificates will be considered as trusted certificate roots for all HTTPS requests, in addition to the existing set of built-in trusted CAs."))}};VS([w.action.bound],iP.prototype,"removeCertificate",null),iP=VS([xe.PA],iP);let lP=class extends ve.Component{unwhitelistHost(e){const{whitelistedCertificateHosts:t}=this.props.rulesStore,n=t.indexOf(e);n>-1&&t.splice(n,1)}addHostToWhitelist(e){this.props.rulesStore.whitelistedCertificateHosts.push(e),st({category:"Config",action:"Whitelist Host"})}render(){const e=this.props,{rulesStore:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["rulesStore"]),{whitelistedCertificateHosts:r}=t;return ve.createElement(yu,Object.assign({},n),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:n.onCollapseToggled},"Connection Settings")),m.isString(Z.value)&&te(Z.value,le)&&ve.createElement(XS,{rulesStore:t}),m.isString(Z.value)&&te(Z.value,"^1.7.0")&&ve.createElement(iP,{rulesStore:t}),m.isString(Z.value)&&te(Z.value,"^0.1.26 || ^1.0.0")&&ve.createElement(ve.Fragment,null,ve.createElement(rP,{rulesStore:t})),ve.createElement($S,null,"Host HTTPS Whitelist"),ve.createElement(MS,{placeholder:"A host to exclude from strict HTTPS checks",onAdd:this.addHostToWhitelist,onDelete:this.unwhitelistHost,values:r,validationFn:KS}),ve.createElement(qS,null,"Requests to these hosts will skip certificate validation and accept some older TLS configurations. These requests will be successful regardless of any self-signed, expired or otherwise invalid HTTPS configurations."))}};VS([w.action.bound],lP.prototype,"unwhitelistHost",null),VS([w.action.bound],lP.prototype,"addHostToWhitelist",null),lP=VS([(0,xe.WQ)("rulesStore"),xe.PA],lP);var cP=n(46670),dP=n(65),uP=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const pP=Le(HS).attrs((()=>({type:"submit"})))`
    grid-column: 1 / span 3;
`,hP=Le(Ru)`
    align-self: stretch;
`,mP=Le.div`
    font-family: ${e=>e.theme.monoFontFamily};
`,gP=Le.div`
    grid-column: 2;
    font-style: italic;

    display: flex;
    align-items: baseline;
`,fP=Le(HS)`
    margin-left: auto;
`,yP=Le(HS)``,vP=Le(HS)``,bP=Le.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;
    align-items: baseline;
`;function xP(e,t){e.setCustomValidity(t||""),e.reportValidity()}let wP=class extends ve.Component{constructor(){super(...arguments),this.uploadSpecButtonRef=ve.createRef(),this.specProcessingInProgress=!1,this.enteredBaseUrl="",this.baseUrlInputRef=ve.createRef(),this.uploadSpec=(0,w.flow)((function*(){xP(this.uploadSpecButtonRef.current);try{const e=yield iu("text",[".json",".yaml"]);if(!e)return;this.specProcessingInProgress=!0;let t,n=yield function(t){try{const t=JSON.parse(e);return Promise.resolve(t)}catch(e){return Promise.reject(e)}}().catch((()=>cP.parse(e))).catch((e=>{throw console.warn("OpenAPI spec parsing error:",e),new Error("File could not be parsed as either YAML or JSON")}));if("2.0"===n.swagger)t=yield new Promise(((e,t)=>{dP.convertObj(n,{patch:!0,resolve:!1},((n,r)=>{if(n)return t(n);r.warnings&&r.warnings.length&&(console.warn("Some issues found whilst parsing spec:"),r.warnings.forEach((e=>console.warn(e)))),e(r.openapi)}))}));else{if(!n.openapi||!h.satisfies(n.openapi,"^3"))throw new Error("This file doesn't contain an OpenAPI v3 or Swagger v2 specification");t=n}yield tl(t,["api.build.example"]),this.selectedSpec=t;const{servers:r}=t;if(r&&r.length>=1){let{url:e,variables:t}=r[0];t&&Object.entries(t).forEach((([t,n])=>{e=e.replace(`{${t}}`,n.default.toString())})),requestAnimationFrame((()=>this.onBaseUrl(e)))}}catch(e){console.log(e),xP(this.uploadSpecButtonRef.current,Tt(e).message)}finally{this.specProcessingInProgress=!1}})).bind(this),this.saveApi=(0,w.flow)((function*(){const e=this.enteredBaseUrl.replace(/https?:\/\//,""),t=yield tl(this.selectedSpec,["http://"+e,"https://"+e]);this.props.apiStore.addCustomApi(e,t),st({category:"Config",action:"Add API spec"}),this.enteredBaseUrl="",this.selectedSpec=void 0})).bind(this)}render(){const e=this.props,{apiStore:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["apiStore"]);return ve.createElement(yu,Object.assign({},n),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:n.onCollapseToggled},"API Settings")),ve.createElement(Vu,null,"OpenAPI specifications"),ve.createElement(bP,null,m.map(t.customOpenApiInfo,((e,t)=>ve.createElement(ve.Fragment,{key:t},ve.createElement(mP,null,t),ve.createElement(gP,null,e.info.title),ve.createElement(vP,{onClick:()=>this.deleteApi(t)},ve.createElement(Ro,{icon:["far","trash-alt"]}))))),this.selectedSpec?ve.createElement(ve.Fragment,null,ve.createElement(hP,{placeholder:"Base URL for requests to match against this spec",value:this.enteredBaseUrl,onChange:e=>this.onBaseUrl(e.target.value),ref:this.baseUrlInputRef}),ve.createElement(gP,null,this.selectedSpec.info.title,ve.createElement(fP,{onClick:this.resetApiInputs},ve.createElement(Ro,{icon:["fas","undo"]}))),ve.createElement(yP,{disabled:!this.selectedSpec||!this.enteredBaseUrl||!!this.baseUrlError,onClick:this.saveApi},ve.createElement(Ro,{icon:["fas","save"]}))):ve.createElement(pP,{type:"submit",onClick:this.specProcessingInProgress?void 0:this.uploadSpec,ref:this.uploadSpecButtonRef},this.specProcessingInProgress?ve.createElement(Ro,{icon:["fas","spinner"],spin:!0}):"Load an OpenAPI or Swagger spec")),ve.createElement(qS,null,"APIs here will provide documentation & validation for all matching requests within their base URL."),ve.createElement(qS,null,"HTTP Toolkit also includes built-in specifications for 2600+ popular public APIs."))}validateBaseUrl(e){if(e.startsWith("/"))throw new Error("Base URLs must specify a host");e.startsWith("http://")||e.startsWith("https://")||(e="https://"+e);const t=new URL(e);if(!["http:","https:"].includes(t.protocol))throw new Error("Base URLs must be HTTP or HTTPS");if(t.search)throw new Error("Base URLs can't contain query parameters");if(t.hash)throw new Error("Base URLs can't contain hash fragments");const n=Object.keys(this.props.apiStore.customOpenApiInfo),r=e.replace(/^https?:\/\//,"");if(n.includes(r))throw new Error("This URL is already mapped to an API")}onBaseUrl(e){this.enteredBaseUrl=e;const t=this.baseUrlInputRef.current;try{this.validateBaseUrl(e),this.baseUrlError=void 0,xP(t)}catch(e){this.baseUrlError=Tt(e),xP(t,e instanceof TypeError?"Not a valid URL":Tt(e).message)}}resetApiInputs(){this.enteredBaseUrl="",this.baseUrlError=void 0,this.selectedSpec=void 0}deleteApi(e){this.props.apiStore.deleteCustomApi(e)}};uP([w.observable.ref],wP.prototype,"selectedSpec",void 0),uP([w.observable],wP.prototype,"specProcessingInProgress",void 0),uP([w.observable],wP.prototype,"enteredBaseUrl",void 0),uP([w.observable],wP.prototype,"baseUrlError",void 0),uP([w.action.bound],wP.prototype,"onBaseUrl",null),uP([w.action.bound],wP.prototype,"resetApiInputs",null),uP([w.action.bound],wP.prototype,"deleteApi",null),wP=uP([(0,xe.WQ)("apiStore"),xe.PA],wP);const EP=Le.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`,CP=Le.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,TP=Le.section`
    margin: 0px auto 20px;
    padding: 40px;
    max-width: 800px;
    position: relative;

    * {
        transition: background-color 0.3s, margin-bottom 0.1s;
    }
`,SP=Le.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-family: ${e=>e.theme.titleTextFamily};
    font-weight: bold;
    margin-bottom: 40px;
`,PP=Le.div`
    display: grid;
    grid-template-columns: fit-content(40%) 1fr;
    grid-gap: 10px;
`,kP=Le.div`
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`,RP=Le.div`
    margin-top: 30px;

    strong {
        user-select: all;
    }
`,OP=Le.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid #999;
    margin: auto 20px;
`,HP=Le.div`
    width: 60px;
    height: 60px;
    background-color: ${e=>e.theme[e.themeColor]};
`,AP=Le.div`
    border: 3px solid #999;
    height: 300px;
    flex-grow: 1;
    margin: auto 0;
`,qP=Le(Ro).attrs((()=>({icon:["fas","spinner"],spin:!0})))`
    margin: 0 0 0 10px;
`;let $P=class extends ve.Component{constructor(){super(...arguments),this.confirmSubscriptionCancellation=()=>{const e=this.props.accountStore.userSubscription;if(!e)throw new Error("Can't cancel without a subscription");const t=Lc.SubscriptionPlans[e.sku].name;let n;if("active"===e.status)n=`It will remain usable until it expires in ${(0,Ke.distanceInWordsToNow)(e.expiry)} but will not renew.`;else{if("past_due"!==e.status)throw new Error(`Cannot cancel subscription with status ${e.status}`);n="No more renewals will be attempted and it will deactivate immediately."}confirm([`This will cancel your HTTP Toolkit ${t} subscription.`,n,"Are you sure?"].join("\n\n"))&&this.props.accountStore.cancelSubscription().catch((e=>{alert(e.message)}))}}render(){var e;const{uiStore:t}=this.props,{isPaidUser:n,isPastDueUser:r,userEmail:o,userSubscription:s,subscriptionPlans:a,isAccountUpdateInProcess:i,getPro:l,canManageSubscription:c,logOut:d}=this.props.accountStore,u=t.settingsCardProps;if(!n&&!r)return ve.createElement(EP,null,ve.createElement(Tu,{onClick:()=>l("settings-page")},"Get Pro"));const p=s;return ve.createElement(CP,null,ve.createElement(TP,null,ve.createElement(SP,null,"Settings"),ve.createElement(yu,Object.assign({},u.account),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:u.account.onCollapseToggled},"Account")),ve.createElement(PP,null,ve.createElement(Vu,null,"Account email"),ve.createElement(Ju,null,o),ve.createElement(Vu,null,"Subscription status"),ve.createElement(Ju,null,{active:"Active",trialing:"Active (trial)",past_due:ve.createElement("strong",{title:ol`
                                            Your subscription payment failed, and will be reattempted.
                                            If retried payments fail your subscription will be cancelled.
                                        `},"Past due ",ve.createElement(Ao,null)),deleted:"Cancelled"}[p.status]||"Unknown",i&&ve.createElement(qP,null)),ve.createElement(Vu,null,"Subscription plan"),ve.createElement(Ju,null,"fulfilled"===a.state?null===(e=a.value[p.sku])||void 0===e?void 0:e.name:m.startCase(p.sku)),ve.createElement(Vu,null,{active:"Next renews",trialing:"Renews",past_due:"Next payment attempt",deleted:"Ends"}[p.status]||"Current period ends"),ve.createElement(Ju,null,(0,Ke.distanceInWordsStrict)(new Date,p.expiry,{addSuffix:!0,partialMethod:"round"})," (",(0,Ke.format)(p.expiry.toString(),"Do [of] MMMM YYYY"),")")),ve.createElement(kP,null,p.lastReceiptUrl&&ve.createElement(AS,{href:p.lastReceiptUrl,target:"_blank",rel:"noreferrer noopener"},"View latest invoice"),c&&ve.createElement(ve.Fragment,null,p.updateBillingDetailsUrl&&ve.createElement(AS,{href:p.updateBillingDetailsUrl,target:"_blank",rel:"noreferrer noopener",highlight:"past_due"===p.status},"Update billing details"),ve.createElement(HS,{onClick:this.confirmSubscriptionCancellation,disabled:i},"Cancel subscription",i&&ve.createElement(qP,null))),ve.createElement(HS,{onClick:d},"Log out")),ve.createElement(RP,null,"Questions? Email ",ve.createElement("strong",null,"billing@httptoolkit.com"))),n&&ve.createElement(ve.Fragment,null,m.isString(Z.value)&&te(Z.value,"^0.1.14 || ^1.0.0")&&ve.createElement(ve.Fragment,null,ve.createElement(_S,Object.assign({},u.proxy)),ve.createElement(lP,Object.assign({},u.connection))),ve.createElement(wP,Object.assign({},u.api)),ve.createElement(yu,Object.assign({},u.themes),ve.createElement("header",null,ve.createElement(bu,{onCollapseToggled:u.themes.onCollapseToggled},"Themes")),ve.createElement(PS,null,ve.createElement(kS,{onClick:e=>{return n=this,r=void 0,s=function*(){if("custom"===e){const e=yield iu("text",[".htktheme",".htk-theme",".json"]);if(!e)return;try{const n=t.buildCustomTheme(e);t.setTheme(n)}catch(e){alert(e.message||e)}}else t.setTheme(e)},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{l(s.next(e))}catch(e){t(e)}}function i(e){try{l(s.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}l((s=s.apply(n,r||[])).next())}));var n,r,o,s},isSelected:e=>t.themeName===e},ve.createElement(RS,{icon:"MagicWand",value:"automatic"},"Automatic"),ve.createElement(RS,{icon:"Sun",value:"light"},"Light"),ve.createElement(RS,{icon:"Moon",value:"dark"},"Dark"),ve.createElement(RS,{icon:"CircleHalf",value:"high-contrast"},"High Contrast"),ve.createElement(RS,{icon:"Swatches",value:"custom"},"Custom")),ve.createElement(OP,null,ve.createElement(HP,{themeColor:"mainColor"}),ve.createElement(HP,{themeColor:"mainBackground"}),ve.createElement(HP,{themeColor:"highlightColor"}),ve.createElement(HP,{themeColor:"highlightBackground"}),ve.createElement(HP,{themeColor:"primaryInputColor"}),ve.createElement(HP,{themeColor:"primaryInputBackground"}),ve.createElement(HP,{themeColor:"containerWatermark"}),ve.createElement(HP,{themeColor:"containerBorder"}),ve.createElement(HP,{themeColor:"mainLowlightBackground"}),ve.createElement(HP,{themeColor:"containerBackground"})),ve.createElement(AP,null,ve.createElement(ag,{contentId:null,language:"html",defaultValue:Hd})))))))}};$P=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,xe.WQ)("accountStore"),(0,xe.WQ)("uiStore"),xe.PA],$P);const IP=$P,jP=Le.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: ${e=>e.theme.modalGradient};

    z-index: 10;
    opacity: ${e=>e.opacity||.9};
`,DP=Le(Pu)`
    padding: 5px 20px;
    margin: 20px auto;

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }

    border-color: rgba(255, 255, 255, 0.6);
    font-size: ${e=>e.theme.textSize};
`;var MP=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const BP=Le.dialog`
    position: absolute;

    top: 50%;
    left: 50%;

    /* There's default styling for dialog, so undo it: */
    bottom: auto;
    right: auto;

    transform: translate(-50%, -50%);
    z-index: 9999;

    display: flex;
    flex-direction: row;
    color: ${e=>e.theme.mainBackground};

    background-color: transparent;
    border: none;

    min-width: 850px;
    max-width: 980px;
    width: 90%;
`,FP=Le.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-right: 20px;
    max-width: 400px;
`,NP=Le.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    letter-spacing: -1px;
    text-align: center;
`,LP=Le(wu)`
    background: none;
    border: none;

    margin: 10px auto;
    padding: 10px 10px;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};
    color: ${e=>e.theme.mainColor};

    display: flex;
    align-items: center;
    flex-direction: row;

    > svg {
        margin: 0 10px;
        z-index: 1;
    }
`,UP=Le.span`
    padding: 10px 15px;
    border-radius: 8px;

    &:first-child {
        padding-right: 40px;
        margin-right: -40px;
    }

    &:last-child {
        padding-left: 40px;
        margin-left: -40px;
    }

    ${e=>e.selected&&Ue`
        background-color: ${e=>e.theme.mainBackground};
        border-bottom: 3px solid ${e=>e.theme.containerBorder};
        box-shadow: 0 4px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});
    `}

    ${e=>!e.selected&&Ue`
        color: ${e=>e.theme.mainBackground};
        opacity: 0.7;
    `}
`,WP=Le.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 300px;
    margin: 50px auto 0;

    > p {
        margin-bottom: 10px;
        text-align: center;
        word-break: break-word;
    }
`,zP=Le(Pu)`
    letter-spacing: -0.5px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }
`,_P=Le.span`
    white-space: nowrap;
`,VP=Le.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${e=>e.theme.mainColor};
    max-width: 830px;
`,JP=Le.section`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,${e=>e.theme.boxShadowAlpha/2});
    border-radius: 4px;
    border: 1px solid ${e=>e.theme.containerBorder};

    > * {
        padding: 0 20px;
    }

    flex: 1 1;

    ${e=>e.highlighted?Ue`
        background-color: ${e=>e.theme.mainBackground};
        color: ${e=>e.theme.mainColor};

        z-index: 1;
        margin: -15px -5px -15px 0;

        flex-basis: 1%;

        > ${GP} {
            padding: 37.5px 0;
        }
    `:Ue`
        background-color: ${e=>e.theme.mainLowlightBackground};
        opacity: 0.9;
    `}
`,GP=Le.h2`
    width: 100%;
    padding: 30px 0;
    color: ${e=>e.theme.popColor};
    text-align: center;
    font-weight: bold;
    font-size: ${e=>e.theme.loudHeadingSize};
`,KP=Le.div`
    text-align: center;
    color: ${e=>e.theme.mainColor};
    margin: 0 20px;
`,QP=Le.div`
    font-size: ${e=>e.theme.largeHeadingSize};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;
`,YP=Le.small`
    display: block;
    font-size: 80%;
    opacity: 0.8;
`,XP=Le.div`
    display: block;
    margin-top: 10px;
    font-size: ${e=>e.theme.headingSize};
`,ZP=Le.ul`
    padding: 40px 20px 30px;
    font-size: ${e=>e.theme.textSize};
    line-height: 1.2;
`,ek=Le.li`
    margin-top: 20px;
    margin-left: 0;
    list-style-type: none;

    &:first-child {
        margin-top: 0;
    }
`,tk=Le.li`
    &:not(:first-child) {
        margin-top: 20px;
    }

    strong {
        color: ${e=>e.theme.popColor};
    }
`,nk=Le(tk)`
    list-style: circle;
    margin-left: 20px;
`,rk=Le.ul`
    margin-top: 15px;

    > ${nk} {
        margin-top: 4px;
    }
`,ok=Le.div`
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: bold;

    > ${Tu} {
        text-align: center;
        width: 100%
    }
`,sk=Le.div`
    color: ${e=>e.theme.mainBackground};
    font-size: ${e=>e.theme.textSize};

    margin-top: 10px;
    text-align: center;
    line-height: 1.2;

    strong {
        font-weight: bold;
    }

    a {
        color: ${e=>e.theme.mainBackground};
    }

    p {
        margin-top: 10px;
    }
`,ak=Le.div`
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) scale(2);
    z-index: 99;

    display: flex;
    flex-direction: column;
    text-align: center;

    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: ${e=>e.theme.mainBackground};
        margin: 20px auto;
    }

    a[href] {
        color: #6e8ff4;
    }
`;let ik=class extends ve.Component{constructor(){super(...arguments),this.planCycle="monthly",this.getPlanMonthlyPrice=e=>{if(!this.isPricingAvailable)throw new Error("Can't query prices if pricing is not available");const t=this.props.plans.value[this.getSKU(e)];if("priceless"===t.prices)throw new Error("Can't show price for non-priced plan");return t.prices.monthly},this.getSKU=e=>`${e}-${this.planCycle}`,this.buyPlan=e=>{this.props.onPlanPicked(this.getSKU(e))},this.closePicker=()=>{this.props.onPlanPicked(void 0)}}render(){const{isPricingAvailable:e,planCycle:t,toggleCycle:n,buyPlan:r,closePicker:o,getPlanMonthlyPrice:s}=this,{email:a,logOut:i,logIn:l}=this.props;return e?ve.createElement(BP,{open:!0},ve.createElement(FP,null,ve.createElement(NP,null,"Choose your Plan"),ve.createElement(LP,{onClick:n},ve.createElement(UP,{selected:"monthly"===t},"Monthly"),ve.createElement(Co.g,{icon:["fas","annual"===t?"toggle-on":"toggle-off"]}),ve.createElement(UP,{selected:"annual"===t},"Annual")),ve.createElement(sk,null,ve.createElement("p",null,ve.createElement("strong",null,"Cancel in two clicks, anytime"),". ",ve.createElement("br",null),"Have questions? ",ve.createElement("strong",null,ve.createElement("a",{href:"https://httptoolkit.com/docs/guides/subscription-faq"},"Read the FAQ"))," or email billing@httptoolkit.com."),ve.createElement("p",null,"By subscribing to a paid plan, you accept ",ve.createElement(_P,null,ve.createElement("a",{href:"https://httptoolkit.com/terms-of-service"},"the HTTP Toolkit Terms of Service")),".")),ve.createElement(WP,null,a&&ve.createElement("p",null,"Logged in as ",ve.createElement(_P,null,a),"."),a?ve.createElement(zP,{onClick:i},"Log out"):ve.createElement(zP,{onClick:l},"Log into existing account"),ve.createElement(zP,{onClick:o},"Cancel"))),ve.createElement(VP,null,ve.createElement(JP,{highlighted:!0},ve.createElement(GP,null,"Professional"),ve.createElement(KP,null,ve.createElement(QP,null,s("pro")," / month"),ve.createElement(YP,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),ve.createElement(XP,{title:"Licensed for a specific individual. See the terms of service for full details."},"Personal user account")),ve.createElement(ZP,null,ve.createElement(tk,null,ve.createElement("strong",null,"Automated HTTP rewriting rules"),", including traffic redirection, mock responses, and errors & timeouts."),ve.createElement(tk,null,ve.createElement("strong",null,"Reusable Modify & Send tools"),". Persistent by default, plus import/export so you can store, reuse & share your rules & requests."),ve.createElement(tk,null,ve.createElement("strong",null,"Import/export for all traffic")," as ",ve.createElement("a",{href:"https://en.wikipedia.org/wiki/HAR_(file_format)",target:"_blank",rel:"noopener noreferrer"},"HARs")," or ready-to-use code for 20+ tools."),ve.createElement(tk,null,ve.createElement("strong",null,"Advanced HTTP debugging tools")," including compression & caching analysis, and 'resend' functionality."),ve.createElement(tk,null,ve.createElement("strong",null,"Validation & API documentation for 2600+ built-in APIs"),", from AWS to GitHub to Stripe, plus your own custom ",ve.createElement("a",{href:"https://swagger.io/docs/specification/about/",target:"_blank",rel:"noopener noreferrer"},"OpenAPI")," specs."),ve.createElement(tk,null,ve.createElement("strong",null,"Advanced customization"),", including UI themes, whitelisted & client certificates, ports, and upstream proxies."),ve.createElement(tk,null,ve.createElement("strong",null,"Support open-source development!"))),ve.createElement(ok,null,ve.createElement(Tu,{onClick:()=>r("pro")},"Get Pro Now"))),ve.createElement(JP,null,ve.createElement(GP,null,"Team"),ve.createElement(KP,null,ve.createElement(QP,null,s("team")," / user / month"),ve.createElement(YP,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),ve.createElement(XP,{title:"One team license, linked to many individuals, who can be added and removed. See the terms of service for details."},"Team account")),ve.createElement(ZP,null,ve.createElement(ek,null,ve.createElement("em",null,"All Professional features, and:")),ve.createElement(tk,null,ve.createElement("strong",null,"Centralized billing")," to simplify payment for your team"),ve.createElement(tk,null,"Licensed to your team, rather than individuals"),ve.createElement(tk,null,ve.createElement("strong",null,"Centralized control")," to easily manage your team members and subscription"),ve.createElement(tk,null,ve.createElement("strong",null,"Team workspaces")," for low-friction collaboration ",ve.createElement(_P,null,"(",ve.createElement("em",null,"coming soon"),")")),ve.createElement(ek,null,"Options available on request:"),ve.createElement(rk,null,ve.createElement(nk,null,"Self-hosted infrastructure"),ve.createElement(nk,null,"Private support"),ve.createElement(nk,null,"Training & consultancy"),ve.createElement(nk,null,"Bulk discounts"))),ve.createElement(ok,null,ve.createElement(Su,{href:"https://httptoolkit.com/contact"},"Get in touch"))))):ve.createElement(ak,null,ve.createElement("p",null,"Unable to connect to HTTP Toolkit account servers..."),ve.createElement("p",null,"Having problems? Open an issue ",ve.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"},"on GitHub")," or email ",ve.createElement("strong",null,"billing@httptoolkit.com")," to ask for help."),ve.createElement(Ro,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),ve.createElement(DP,{onClick:o},"Cancel"))}toggleCycle(){this.planCycle="annual"===this.planCycle?"monthly":"annual"}get isPricingAvailable(){return"fulfilled"===this.props.plans.state}};MP([w.observable],ik.prototype,"planCycle",void 0),MP([w.action.bound],ik.prototype,"toggleCycle",null),MP([w.computed],ik.prototype,"isPricingAvailable",null),ik=MP([xe.PA],ik);const lk=Le((e=>ve.createElement("div",{className:e.className},ve.createElement("p",null,"The checkout has been opened in your browser.",ve.createElement("br",null),"Please follow the steps there to complete your subscription."),ve.createElement("p",null,"Have questions? Take a look at ",ve.createElement("a",{href:"https://httptoolkit.com/docs/guides/subscription-faq"},"the FAQ")," or email ",ve.createElement("strong",null,"billing@httptoolkit.com"),"."),ve.createElement(Ro,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),ve.createElement(DP,{onClick:e.onCancel},"Cancel checkout"))))`
    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: #fff;
        margin: 20px auto;
    }

    a[href] {
        color: #6e8ff4;
    }

    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    z-index: 100;
`;var ck=n(63599);let dk=class extends ve.Component{constructor(){super(...arguments),this.renderItem=(e,t)=>{if("separator"===e.type)return ve.createElement(ck.wv,{key:t});if("option"===e.type)return ve.createElement(ck.q7,{key:t,onClick:()=>e.callback(this.props.menuState.data),disabled:!1===e.enabled},e.label);if("submenu"===e.type)return ve.createElement(ck.Qw,{key:t,label:e.label,disabled:!1===e.enabled},e.items.map(this.renderItem));throw new St(e,(e=>e.type))},this.onVisibilityChange=e=>{e||this.props.onHidden()}}componentDidMount(){(0,xe.bH)(this,(0,w.autorun)((()=>{const e=this.props.menuState;setTimeout((()=>{ck.He.show({id:"menu",event:e.event})}),10)})))}render(){return ve.createElement(uk,{id:"menu",onVisibilityChange:this.onVisibilityChange},this.props.menuState.items.map(this.renderItem))}};dk=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([xe.PA],dk);const uk=Le(ck.W1)`
    --contexify-menu-bgColor: ${e=>e.theme.mainLowlightBackground};
    --contexify-item-color: ${e=>e.theme.mainColor};
    --contexify-separator-color: ${e=>e.theme.containerBorder};

    --contexify-rightSlot-color: ${e=>e.theme.containerWatermark};
    --contexify-activeRightSlot-color: ${e=>e.theme.mainColor};

    --contexify-arrow-color: ${e=>e.theme.containerWatermark};
    --contexify-activeArrow-color: ${e=>e.theme.mainColor};

    --contexify-activeItem-color: #fff;
    --contexify-activeItem-bgColor: #3498db;
`;var pk=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},hk=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const mk=Le.div`
    display: flex;
    height: 100%;

    > :not(:first-child) {
        flex: 1 1;
        width: calc(100% - ${Pm});
    }
`,gk=e=>{var{children:t}=e,n=hk(e,["children"]);const{pageComponent:r}=n,o=hk(n,["pageComponent"]);return ve.createElement(n.pageComponent,Object.assign({},o),t)},fk=e=>(su("Ctrl+1,Cmd+1",(t=>{e.navigate("/intercept"),t.preventDefault()}),[e.navigate]),su("Ctrl+2,Cmd+2",(t=>{e.navigate("/view"),t.preventDefault()}),[e.navigate]),su("Ctrl+3,Cmd+3",(t=>{e.navigate("/modify"),t.preventDefault()}),[e.navigate]),su("Ctrl+9,Cmd+9",(t=>{e.canVisitSettings&&e.navigate("/settings"),t.preventDefault()}),[e.navigate,e.canVisitSettings]),null);let yk=class extends ve.Component{get canVisitSettings(){return this.props.accountStore.isPaidUser||this.props.accountStore.isPastDueUser}get canVisitSend(){return"fulfilled"!==Z.state||te(Z.value,me)}get menuItems(){return[{name:"Intercept",title:`Connect clients to HTTP Toolkit (${nu}+1)`,icon:"Plugs",position:"top",type:"router",url:"/intercept"},{name:"View",title:`View intercepted HTTP traffic (${nu}+2)`,icon:"MagnifyingGlass",position:"top",type:"router",url:"/view"},..."fulfilled"!==Z.state||te(Z.value,"^0.1.21 || ^1.0.0")?[{name:"Modify",title:`Add rules to transform & mock HTTP traffic (${nu}+3)`,icon:"Pencil",position:"top",type:"router",url:"/modify"}]:[],...this.canVisitSend?[{name:"Send",title:`Send HTTP requests directly (${nu}+4)`,icon:"PaperPlaneTilt",position:"top",type:"router",url:"/send"}]:[],this.canVisitSettings?{name:"Settings",title:`Reconfigure HTTP Toolkit and manage your account (${nu}+9)`,icon:"GearSix",position:"bottom",type:"router",url:"/settings"}:{name:"Get Pro",title:"Sign up for HTTP Toolkit Pro",icon:"Star",position:"bottom",type:"callback",onClick:()=>this.props.accountStore.getPro("sidebar")},{name:"Give feedback",title:"Suggest features or report issues",icon:"ChatText",position:"bottom",highlight:!0,type:"web",url:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"}]}render(){const{modal:e,setSelectedPlan:t,subscriptionPlans:n,userEmail:r,logIn:o,logOut:s,cancelCheckout:a}=this.props.accountStore,{contextMenuState:i,clearHtmlContextMenu:l}=this.props.uiStore;return ve.createElement(it.dP,{history:ct},ve.createElement(fk,{navigate:ct.navigate,canVisitSettings:this.canVisitSettings}),ve.createElement(mk,{"aria-hidden":!!e,inert:!!e,ref:t=>t&&(e?t.setAttribute("inert",""):t.removeAttribute("inert"))},ve.createElement(Im,{items:this.menuItems}),ve.createElement(it.Ix,null,ve.createElement(it.rd,{noThrow:!0,from:"/",to:"/intercept"}),ve.createElement(gk,{path:"/intercept",pageComponent:zm}),ve.createElement(gk,{path:"/view",pageComponent:Cw}),ve.createElement(gk,{path:"/view/:eventId",pageComponent:Cw}),ve.createElement(gk,{path:"/modify",pageComponent:ST}),ve.createElement(gk,{path:"/modify/:initialRuleId",pageComponent:ST}),ve.createElement(gk,{path:"/send",pageComponent:SS}),ve.createElement(gk,{path:"/settings",pageComponent:IP}))),!!e&&ve.createElement(jP,null),"pick-a-plan"===e&&ve.createElement(ik,{email:r,onPlanPicked:t,logOut:s,logIn:o,plans:n}),"post-checkout"===e&&ve.createElement(lk,{onCancel:a}),i&&ve.createElement(dk,{menuState:i,onHidden:l}))}};pk([w.computed],yk.prototype,"canVisitSettings",null),pk([w.computed],yk.prototype,"canVisitSend",null),pk([w.computed],yk.prototype,"menuItems",null),yk=pk([(0,xe.WQ)("accountStore"),(0,xe.WQ)("uiStore"),xe.PA],yk);const vk=yk,bk=(0,xe.WQ)("uiStore")((0,xe.PA)((e=>ve.createElement(_e,{theme:e.uiStore.theme},ve.createElement(Ve,{disableVendorPrefixes:!0},e.children)))));var xk=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const wk=Le((e=>ve.createElement("section",{className:e.className},e.children)))`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-y: auto;

    color: ${e=>e.theme.mainColor};

    h1 {
        font-size: ${e=>e.theme.screamingHeadingSize};
        font-family: ${e=>e.theme.titleTextFamily};
        font-weight: bold;
        margin-bottom: 50px;
    }

    h2 {
        font-size: ${e=>e.theme.loudHeadingSize};
        margin-bottom: 50px;
    }

    button, a {
        display: block;
        margin: 40px 40px 0;

        padding: 20px;

        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bolder;
    }
`,Ek=Le.div`
    display: flex;
    flex-wrap: wrap;
`,Ck=Le.code`
    font-family: ${e=>e.theme.monoFontFamily};
    white-space: preserve;
`;let Tk=class extends ve.Component{componentDidCatch(e,t){this.error=e,s.setExtras(t),s.captureException(e),st({category:"Error",action:"UI crashed"})}render(){var e;return this.error?ve.createElement(wk,null,ve.createElement("h1",null,"Oh no!"),ve.createElement("h2",null,"Sorry, it's all gone wrong."),Ct(this.error)&&ve.createElement(Ck,null,null!==(e=this.error.stack)&&void 0!==e?e:this.error.message),ve.createElement(Ek,null,ve.createElement(Su,{href:`https://github.com/httptoolkit/httptoolkit/issues/new?template=bug.yml&title=[UI Crash]%3A+${this.error.message||""}`},"Tell us what happened"),ve.createElement(Tu,{onClick:()=>window.location.reload()},"Reload HTTP Toolkit"))):this.props.children}};xk([w.observable],Tk.prototype,"error",void 0),xk([w.action],Tk.prototype,"componentDidCatch",null),Tk=xk([xe.PA],Tk);var Sk=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};document.dispatchEvent(new Event("load:executing")),o.config({name:"httptoolkit",version:1});const Pk=new URLSearchParams(window.location.search).get("authToken");o.setItem("latest-auth-token",Pk),function(e){a.Ts({dsn:e,release:Y,ignoreErrors:["ResizeObserver loop limit exceeded","ResizeObserver loop completed with undelivered notifications."],autoSessionTracking:!1,integrations:[i.s(),l.X(),c.c()],beforeSend:function(e,t){if(!ge)return null;const n=null==t?void 0:t.originalException;return n instanceof q&&(e.fingerprint=["{{ default }}",n.operationName,...n.errorCode?[n.errorCode.toString()]:[]]),e}}),ge=!0,Z.then((e=>fe("version:server",e))),X.then((e=>fe("version:desktop",e))),"undefined"!=typeof window&&window.addEventListener("beforeunload",(()=>{ge=!1}));const t=p();d.o5().setUser({id:t,username:`anon-${t}`})}("https://548601eca36246bdac73dc086d231db1@o202389.ingest.us.sentry.io/1316304"),console.log(`Initialising UI (version ${Y})`),w.configure({enforceActions:"observed"}),C(5e3).then((function(){var e,t,n,r,o;return t=this,n=void 0,o=function*(){if(!xm.env.DISABLE_UPDATES){wm();try{if(!(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.register))return console.warn("Service worker not supported"),void Cm("Not supported");const t=yield navigator.serviceWorker.register("/ui-update-worker.js",{scope:"/"}).catch((e=>{throw console.warn("Service worker registration failed"),Cm(e),e}));console.log("Service worker loaded"),t.update().catch(console.log),setInterval((()=>{wm(),t.update().catch(console.log)}),3e5)}catch(e){throw e}}},new((r=void 0)||(r=Promise))((function(e,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,i)}l((o=o.apply(t,n||[])).next())}))})),function(){const{yp:e}=bm;let t=!1;Z.then((n=>{te(n,e["httptoolkit-server"])||t||(Tm(),t=!0)})).catch((()=>{})),X.then((n=>{te(n,e["httptoolkit-desktop"])||t||(Tm(),t=!0)})).catch((()=>{}))}();const kk=new zc((()=>ct.navigate("/settings"))),Rk=new sm(kk),Ok=new Nc(kk),Hk=new ed(kk),Ak=new Yh(Hk,kk),qk=new Yd(kk,Hk,(function(e){return Sk(this,void 0,void 0,(function*(){let t;return yield $k.initialized,yield w.when((()=>(t=m.find($k.exchanges,{id:e}),!!t&&t.isCompletedRequest()))),ct.navigate(`/view/${e}`),t}))})),$k=new Rd(Hk,Rk,qk),Ik=new gm(kk,$k,qk),jk={accountStore:kk,apiStore:Rk,uiStore:Ok,proxyStore:Hk,eventsStore:$k,interceptorStore:Ak,rulesStore:qk,sendStore:Ik},Dk=Promise.all(Object.values(jk).map((e=>e.initialized)));Qe&&(Ge.bC.init("phc_udVvUwHxMPuAyAl5VKA5SHw2D9CdWr0AJYmu8mYd5qU",{api_host:"https://events.httptoolkit.tech",autocapture:!1,capture_pageview:!1,advanced_disable_decide:!0,disable_session_recording:!0,persistence:"memory"}),Promise.race([Z,C(1e4)]).then((()=>{Ge.bC.capture("$pageview",{$current_url:window.origin,$set_once:Object.assign({},nt())})}))),Dk.then((()=>{wm(),console.log("App started, rendering"),document.dispatchEvent(new Event("load:rendering")),be.render(ve.createElement(xe.Kq,Object.assign({},jk),ve.createElement(bk,null,ve.createElement(Tk,null,ve.createElement(Je,null),ve.createElement(vk,null)))),document.querySelector("#app"))})),Promise.race([Dk,C(1e4).then((()=>Sk(void 0,void 0,void 0,(function*(){throw console.log("Previous server version was",yield ee),Object.assign(new Error("Failed to initialize application"),{isTimeout:!0})}))))]).catch((e=>{const t=Object.assign(new Event("load:failed"),{error:e});document.dispatchEvent(t),ye(e),Dk.then((()=>{Z.then((e=>Sk(void 0,void 0,void 0,(function*(){console.log("Server version was",yield ee,"now started late with",e),ye("Successfully initialized application, but after timeout")}))))}))}))},47790:()=>{},39893:()=>{},80693:()=>{},38989:()=>{},25628:()=>{},69100:()=>{},42634:()=>{},15340:()=>{},79838:()=>{},63779:()=>{},77199:()=>{},33375:()=>{},14842:()=>{}},d={};function u(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}u.m=c,u.amdO={},e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},u.a=(o,s,a)=>{var i;a&&((i=[]).d=-1);var l,c,d,u=new Set,p=o.exports,h=new Promise(((e,t)=>{d=t,c=e}));h[t]=p,h[e]=e=>(i&&e(i),u.forEach(e),h.catch((e=>{}))),o.exports=h,s((o=>{var s;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var s=[];s.d=0,o.then((e=>{a[t]=e,r(s)}),(e=>{a[n]=e,r(s)}));var a={};return a[e]=e=>e(s),a}}var i={};return i[e]=e=>{},i[t]=o,i})))(o);var a=()=>l.map((e=>{if(e[n])throw e[n];return e[t]})),c=new Promise((t=>{(s=()=>t(a)).r=0;var n=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(s.r++,e.push(s)));l.map((t=>t[e](n)))}));return s.r?c:a()}),(e=>(e?d(h[n]=e):c(p),r(i)))),i&&i.d<0&&(i.d=0)},o=[],u.O=(e,t,n,r)=>{if(!t){var s=1/0;for(c=0;c<o.length;c++){for(var[t,n,r]=o[c],a=!0,i=0;i<t.length;i++)(!1&r||s>=r)&&Object.keys(u.O).every((e=>u.O[e](t[i])))?t.splice(i--,1):(a=!1,r<s&&(s=r));if(a){o.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=o.length;c>0&&o[c-1][2]>r;c--)o[c]=o[c-1];o[c]=[t,n,r]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);u.r(n);var r={};s=s||[null,a({}),a([]),a(a)];for(var o=2&t&&e;"object"==typeof o&&!~s.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,u.d(n,r),n},u.d=(e,t)=>{for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,n)=>(u.f[n](e,t),t)),[])),u.u=e=>e+".bundle.js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},l="httptoolkit-ui:",u.l=(e,t,n,r)=>{if(i[e])i[e].push(t);else{var o,s;if(void 0!==n)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var d=a[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==l+n){o=d;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.setAttribute("data-webpack",l+n),o.src=e),i[e]=[t];var p=(t,n)=>{o.onerror=o.onload=null,clearTimeout(h);var r=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),s&&document.head.appendChild(o)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),u.j="main",u.v=(e,t,n,r)=>{var o=fetch(u.p+""+n+".module.wasm"),s=()=>o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((t=>Object.assign(e,t.instance.exports)));return o.then((t=>"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,r).then((t=>Object.assign(e,t.instance.exports)),(e=>{if("application/wasm"!==t.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),s();throw e})):s()))},(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{u.b=document.baseURI||self.location.href;var e={main:0};u.f.j=(t,n)=>{var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var s=u.p+u.u(t),a=new Error;u.l(s,(n=>{if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,r[1](a)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[s,a,i]=n,l=0;if(s.some((t=>0!==e[t]))){for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(i)var c=i(u)}for(t&&t(n);l<s.length;l++)o=s[l],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(c)},n=self.webpackChunkhttptoolkit_ui=self.webpackChunkhttptoolkit_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),u.nc=void 0;var p=u.O(void 0,["mockttp","apis","vendors-node_modules_ajv_dist_ajv_js-node_modules_base64-js_index_js-node_modules_browserify--bb5eaa","vendors-node_modules_bn_js_lib_bn_js-node_modules_path-browserify_index_js","vendors-node_modules_ethersproject_abi_lib_esm_abi-coder_js-node_modules_fortawesome_free-bra-6b000d"],(()=>u(71992)));p=u.O(p)})();
//# sourceMappingURL=main.js.map