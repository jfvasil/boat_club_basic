if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MutationObserver",[],function(a,b,c,d,e,f){b=function(){function a(a){}var b=a.prototype;b.observe=function(a,b){};b.disconnect=function(){};b.takeRecords=function(){return[]};return a}();e=(d=(c=a.MutationObserver)!=null?c:a.WebKitMutationObserver)!=null?d:b;c=e;f["default"]=c},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MOverlay",["csx","cx","CSS","CancelableEventListener","DOM","FBLogger","Locale","MBlockingTouchable","MJSEnvironment","MLayer","MViewport","MobileAppDetect","MutationObserver","Scroll","Stratcom","clearInterval","clearTimeout","ge","joinClasses","nullthrows","setInterval","setTimeout","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i){var j=28,k=0,l=0,m=0,n="m-overlay-layer",o=[n,"tag:textarea"],p="m-overlay-scrollable";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,e){var f;b.fullscreen&&(b.useContentHeight=!1);f=a.call(this,b)||this;f.updatePosition=function(){if(f.$MOverlay4)return!1;c("clearInterval")(f.$MOverlay5);f.$MOverlay5=null;!f.isSmallScreen()?(f.config||c("FBLogger")("MOverlayBug").mustfix("updatePosition was called with a null config."),f.config.useContentHeight||(f.getContentRoot().style.height=f.getHeight()+"px"),f.getRoot().style.top=f.getTop()+"px"):f.config.bottomAlign&&(f.getRoot().style.top=Math.abs(f.getTop())+"px");c("clearTimeout")(f.$MOverlay8);f.$MOverlay8=null;c("clearTimeout")(f.$MOverlay7);f.$MOverlay7=null;return!0};f.onTouchMove=function(a){var b=f.$MOverlay9,c=a.getNode(p);c||(c=a.getTarget());if(!c||!(c instanceof HTMLElement)||b==null)a.prevent();else{var e=a.getTouch().clientY;b=b-e;e=c.scrollHeight-c.offsetHeight;e<=0||b<0&&d("Scroll").getTop(c)<=0||b>0&&d("Scroll").getTop(c)>=e?a.prevent():a.stop()}};f.$MOverlay11=function(a){f.$MOverlay9=a.getTouch().clientY};f.$MOverlay12=function(){f.$MOverlay9=null};f.onScroll=function(){c("clearTimeout")(f.$MOverlay8),f.$MOverlay8=c("setTimeoutAcrossTransitions")(f.updatePosition.bind(babelHelpers.assertThisInitialized(f)),100)};f.onResize=function(){c("clearTimeout")(f.$MOverlay7),f.$MOverlay7=c("setTimeoutAcrossTransitions")(f.updatePosition.bind(babelHelpers.assertThisInitialized(f)),100)};f.onFocus=function(){f.$MOverlay4=!0};f.onBlur=function(){f.$MOverlay4=!1,f.updatePosition(),f.$MOverlay6=c("setTimeoutAcrossTransitions")(f.updatePosition.bind(babelHelpers.assertThisInitialized(f)),1e3)};f.$MOverlay4=!1;f.$MOverlay9=null;f.shownListeners=null;f.mutationObserver=null;f.fullscreen=b.fullscreen;f.centered=b.centered;f.fullscreen?f.$MOverlay10(0,0,0,0):f.$MOverlay10(b.paddingTop,b.paddingBottom,b.paddingLeft,b.paddingRight);if(b.isModal){b=c("ge")("modalDialog");f.setInsertParent(b)}f.init(e);return f}var e=b.prototype;e.$MOverlay10=function(a,b,c,d){this.paddingTop=a!=null?a:k,this.paddingBottom=b!=null?b:j,this.paddingLeft=c!=null?c:m,this.paddingRight=d!=null?d:l};e.getPaddingTop=function(){return this.paddingTop};e.getPaddingBottom=function(){return this.paddingBottom};e.buildWrapper=function(a,b){this.$MOverlay1=d("DOM").create("div",{className:c("joinClasses")("_5m_s",a.backgroundClassName)});b=d("DOM").create("div",{className:"_5m_t"},b);this.$MOverlay2=d("DOM").create("div",{className:c("joinClasses")("_5m_u",a.containerClassName)},[this.$MOverlay1,b]);d("Locale").isRTL()&&(this.getContentRoot().style.direction="rtl");a=(this.fullscreen?"_4sc_":"")+(this.centered?" _7teu":"")+(!this.fullscreen&&!this.centered?" _5m_v":"");this.$MOverlay3=d("DOM").create("div",{className:a,sigil:n},this.$MOverlay2);this.fullscreen||(this.$MOverlay3.style.paddingTop=this.paddingTop+"px",this.$MOverlay3.style.paddingBottom=this.paddingBottom+"px",this.$MOverlay3.style.paddingRight=this.paddingRight+"px",this.$MOverlay3.style.paddingLeft=this.paddingLeft+"px");b=d("DOM").create("div",{className:"_5m_w",sigil:"m-overlay-modal"});d("MBlockingTouchable").init(b);return d("DOM").create("div",{className:"_5m_x"},[this.$MOverlay3,b])};e.getContentRoot=function(){return c("nullthrows")(this.$MOverlay2)};e.isSmallScreen=function(){return!this.fullscreen&&(c("MobileAppDetect").is_kaios||d("MViewport").getHeight()<=this.getHeight()||this.getHeight()===0)};e.show=function(){var b=this;if(this.isShown())return this;this.isSmallScreen()&&(this.getRoot().style.top=d("MViewport").getScrollTop()+"px",this.getContentRoot().style.marginTop="0px");a.prototype.show.call(this);this.isShown()&&!this.shownListeners&&(this.shownListeners=[d("CancelableEventListener").listen(this.getContentRoot(),"touchstart",o,this.$MOverlay11.bind(this)),d("CancelableEventListener").listen(this.getContentRoot(),"touchend",o,this.$MOverlay12.bind(this)),d("CancelableEventListener").listen(this.getContentRoot(),"touchstart",p,this.$MOverlay11.bind(this)),d("CancelableEventListener").listen(this.getContentRoot(),"touchend",p,this.$MOverlay12.bind(this)),c("Stratcom").listen("m:viewport:orientation-change",null,function(){var a=b.updatePosition.bind(b);c("Stratcom").listen("resize",null,function(){a(),c("Stratcom").removeCurrentListener()})}),c("Stratcom").listen("focus",o,this.onFocus.bind(this)),c("Stratcom").listen("blur",o,this.onBlur.bind(this))],this.config.suppressScrollHandler||this.shownListeners.push(c("Stratcom").listen("scroll",null,this.onScroll.bind(this))),this.config.suppressTouchMoveHandler||this.shownListeners.push(d("CancelableEventListener").listen(this.getContentRoot(),"touchmove",n,this.onTouchMove.bind(this))),this.config.useResizeHandler&&this.shownListeners.push(c("Stratcom").listen(["m:viewport:orientation-change","resize"],null,this.onResize.bind(this))),this.config.useMutationObserver&&(this.mutationObserver=new(c("MutationObserver"))(this.updatePosition.bind(this)),this.mutationObserver.observe(this.getContentRoot(),{childList:!0,attributes:!0,subtree:!0})));return this};e.finishHide=function(){while(this.shownListeners&&this.shownListeners.length)this.shownListeners.pop().remove();this.shownListeners=null;this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=null);this.$MOverlay9=null;c("clearTimeout")(this.$MOverlay6);c("clearInterval")(this.$MOverlay5);this.$MOverlay6=null;this.$MOverlay5=null;return a.prototype.finishHide.call(this)};e.setBlockUpdatePosition=function(a){this.$MOverlay4=a};e.getTop=function(){var a=this.getHeight(),b=d("MViewport").getHeight();if(this.config.useContentHeight&&this.config.centerVerticalAlign)return d("MViewport").getScrollTop()+Math.floor((b-a)/2);else if(this.config.useContentHeight&&this.config.bottomAlign){var c=this.getStickyHeaderHeight();return d("MViewport").getScrollTop()+Math.floor(b-a-c)}return d("MViewport").getScrollTop()};e.getStickyHeaderHeight=function(){var a=document.querySelector(["._3wo2","#header"].join(" "));return a?a.offsetHeight:0};e.getHeight=function(){var a=this;if(this.config.useContentHeight){var b=this.getContentRoot();b=b.getBoundingClientRect();return b.height}var e=d("MViewport").getHeight();b=this.getPaddingBottom();if(c("MJSEnvironment").IS_APPLE_WEBKIT_IOS&&c("MJSEnvironment").OS_VERSION===7){var f=d("MViewport").isLandscape()?screen.availWidth:screen.availHeight;f=f-e<=19;b=f?44:10;f&&(this.$MOverlay5=c("setInterval")(function(){var b=d("MViewport").getHeight();b!==e&&(c("clearInterval")(a.$MOverlay5),a.$MOverlay5=null,c("setTimeout")(a.updatePosition.bind(a),100))},500));c("CSS").conditionClass(this.getRoot(),"_5rpc",!f)}f=this.getStickyHeaderHeight();return e-this.getPaddingTop()-b-f};e.getUpdatePositionBlocked=function(){return this.$MOverlay4};e.getInsertParent=function(){var b=this.insertParent;b||(b=c("ge")("page"));return b||a.prototype.getInsertParent.call(this)};return b}(c("MLayer"));g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MVideoHomeSearchForm",["cx","DOM","Stratcom","SubscriptionsHandler","URI","ge","getActiveElement","goURI"],function(a,b,c,d,e,f,g,h){"use strict";var i="watch-search-form-root-sigil";a=function(){function a(a){var b=this;this.$9=function(){b.$8()};this.$11=function(){b.$8()};this.$10=function(){b.$8()};this.$12=function(){b.$3.value="",b.$8()};this.$13=function(a){a.prevent();a=b.$3.value;if(a==="")return;b.$3.blur();a=c("URI").getRequestURI();a.setPath("/watch/search/");a.addQueryData("q",b.$3.value);c("goURI")(a)};this.$1=new(c("SubscriptionsHandler"))();this.$2=c("ge")(i);this.$3=d("DOM").find(this.$2,"input","search-small-box");this.$4=d("DOM").find(this.$2,"form","search-typeahead-form");this.$5=this.$2.getElementsByClassName("_5-ly")[0];this.$6=d("DOM").find(this.$2,"button","search-submit-button");this.setQuery((a=a.initialQuery)!=null?a:"");this.$7();this.$8()}var b=a.prototype;b.destroy=function(){this.$1.release()};b.setQuery=function(a){this.$3.value=a};b.$7=function(){this.$1.addSubscriptions(d("DOM").listen(this.$3,"focus",null,this.$9),d("DOM").listen(this.$3,"blur",null,this.$10),d("DOM").listen(this.$3,"input",null,this.$11),d("DOM").listen(this.$5,"mousedown",null,this.$12),d("DOM").listen(this.$5,"touchstart",null,this.$12),d("DOM").listen(this.$4,"submit",null,this.$13))};b.$8=function(){this.$3.value?d("DOM").show(this.$6):d("DOM").hide(this.$6);var a=c("getActiveElement")()===this.$3;a&&this.$3.value?d("DOM").show(this.$5):d("DOM").hide(this.$5)};a.initialize=function(b){var d=new a(b);c("Stratcom").listen("m:page:unload",null,function(){d.destroy(),c("Stratcom").removeCurrentListener()})};return a}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MLoggedOutVideoHomeSearchOverlay",["DOM","MOverlay","MVideoHomeSearchForm","Stratcom","ge"],function(a,b,c,d,e,f,g){"use strict";var h=["/watch?","/watch/","/videos/","/videos/?"],i=["/watch","/videos"],j="search_jewel_container_sigil",k="watch-search-icon-container",l="watch-search-overlay-content",m="watch-search-icon",n="watch-search-overlay-back",o="watch-search-form-page-header",p="search-small-box";a=function(){function a(a){var b=this;this.searchOverlay=a.searchOverlay;this.searchOverlayConfig=this.searchOverlay.config;this.initialQuery=a.initialQuery;a=this.searchOverlay.getContentRoot();this.searchOverlayContent=c("DOM").find(a,"div",l);this.existingSearchFormInPageHeader=c("ge")(o);this.watchSearchEntrypoint=c("ge")(k,null,"div");this.nonWatchSearchEntrypoint=c("ge")(j,null,"div");this.existingSearchFormInPageHeader!=null?this.searchInput=c("DOM").find(this.existingSearchFormInPageHeader,"input",p):this.searchInput=c("DOM").find(this.searchOverlayContent,"input",p);this.searchFormInitalized=!1;this.$1();this.$2();c("Stratcom").listen("m:page:beforeloading",null,function(){b.$2()})}var b=a.prototype;b.$1=function(){var a=this;c("Stratcom").listen("click",m,function(b){b.prevent(),a.existingSearchFormInPageHeader==null?(a.searchOverlay.isDestroyed()===!0&&(a.searchOverlay=new(c("MOverlay"))(a.searchOverlayConfig,a.searchOverlayContent),a.searchFormInitalized=!1,a.existingSearchFormInPageHeader=c("ge")(o),a.existingSearchFormInPageHeader!=null?a.searchInput=c("DOM").find(a.existingSearchFormInPageHeader,"input",p):a.searchInput=c("DOM").find(a.searchOverlayContent,"input",p)),a.searchOverlay.show()):a.searchInput.focus()});c("Stratcom").listen("Layer:show",null,function(){a.searchFormInitalized!==!0&&(c("MVideoHomeSearchForm").initialize({initialQuery:a.initialQuery}),a.searchFormInitalized=!0);var b=a.searchInput;window.setTimeout(function(){b.focus()},1)});c("Stratcom").listen("click",[l,n],function(b){b.prevent(),a.searchOverlay.hide()})};b.$2=function(){var a=window.location.href,b=h.some(function(b){return a.includes(b)})||i.some(function(b){return a.endsWith(b)});b?(this.watchSearchEntrypoint.style.display="block",this.nonWatchSearchEntrypoint.style.display="none"):(this.watchSearchEntrypoint.style.display="none",this.nonWatchSearchEntrypoint.style.display="block")};return a}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("shield",[],function(a,b,c,d,e,f){function a(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if(typeof a!=="function")throw new TypeError("shield expects a function as the first argument");return function(){return a.apply(b,d)}}f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("BrowserSupportCore",["getVendorPrefixedName"],function(a,b,c,d,e,f){"use strict";a={hasCSSAnimations:function(){return!!b("getVendorPrefixedName")("animationName")},hasCSSTransforms:function(){return!!b("getVendorPrefixedName")("transform")},hasCSS3DTransforms:function(){return!!b("getVendorPrefixedName")("perspective")},hasCSSTransitions:function(){return!!b("getVendorPrefixedName")("transition")}};c=a;f["default"]=c},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("intersectionObserverEntryIsIntersecting",[],function(a,b,c,d,e,f){"use strict";function a(a){return a.isIntersecting!=null?a.isIntersecting:a.intersectionRatio>0||a.intersectionRect&&(a.intersectionRect.height>0||a.intersectionRect.width>0)}f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PagesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setConnectionClass=function(a){this.$1.connection_class=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventLocation=function(a){this.$1.event_location=a;return this};c.setEventTarget=function(a){this.$1.event_target=a;return this};c.setLogSource=function(a){this.$1.log_source=a;return this};c.setNavAttributionIDV2Key=function(a){this.$1.nav_attribution_id_v2_key=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setRawClientTime=function(a){this.$1.raw_client_time=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setTags=function(a){this.$1.tags=b("GeneratedLoggerUtils").serializeVector(a);return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={connection_class:!0,event:!0,event_location:!0,event_target:!0,log_source:!0,nav_attribution_id_v2_key:!0,page_id:!0,raw_client_time:!0,sessionid:!0,tags:!0};f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PagesLoggerEventEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SAVE:"save",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UNSAVE:"unsave",UPDATE:"update"})}),null);
__d("UserAgent_DEPRECATED",[],function(a,b,c,d,e,f){var g=!1,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;function x(){if(g)return;g=!0;var a=navigator.userAgent,b=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),c=/(Mac OS X)|(Windows)|(Linux)/.exec(a);s=/\b(iPhone|iP[ao]d)/.exec(a);t=/\b(iP[ao]d)/.exec(a);q=/Android/i.exec(a);u=/FBAN\/\w+;/i.exec(a);v=/FBAN\/mLite;/i.exec(a);w=/Mobile/i.exec(a);r=!!/Win64/.exec(a);if(b){h=b[1]?parseFloat(b[1]):b[5]?parseFloat(b[5]):NaN;h&&document&&document.documentMode&&(h=document.documentMode);var d=/(?:Trident\/(\d+.\d+))/.exec(a);m=d?parseFloat(d[1])+4:h;i=b[2]?parseFloat(b[2]):NaN;j=b[3]?parseFloat(b[3]):NaN;k=b[4]?parseFloat(b[4]):NaN;k?(b=/(?:Chrome\/(\d+\.\d+))/.exec(a),l=b&&b[1]?parseFloat(b[1]):NaN):l=NaN}else h=i=j=l=k=NaN;if(c){if(c[1]){d=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);n=d?parseFloat(d[1].replace("_",".")):!0}else n=!1;o=!!c[2];p=!!c[3]}else n=o=p=!1}function y(){return x()||h}function a(){return x()||m>h}function b(){return y()&&r}function c(){return x()||i}function d(){return x()||j}function z(){return x()||k}function e(){return z()}function A(){return x()||l}function B(){return x()||o}function C(){return x()||n}function D(){return x()||p}function E(){return x()||s}function F(){return x()||s||t||q||w}function G(){return x()||v!=null?null:u}function H(){return x()||q}function I(){return x()||t}f.ie=y;f.ieCompatibilityMode=a;f.ie64=b;f.firefox=c;f.opera=d;f.webkit=z;f.safari=e;f.chrome=A;f.windows=B;f.osx=C;f.linux=D;f.iphone=E;f.mobile=F;f.nativeApp=G;f.android=H;f.ipad=I},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("BrowserSupport",["BrowserSupportCore","ExecutionEnvironment","UserAgent_DEPRECATED","getVendorPrefixedName","memoize"],function(a,b,c,d,e,f,g){var h=null;function i(){if(c("ExecutionEnvironment").canUseDOM){h||(h=document.createElement("div"));return h}return null}b=function(a){return c("memoize")(function(){var b=i();return!b?!1:a(b)})};e=b(function(a){a.style.cssText="position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";return/sticky/.test(a.style.position)});f=b(function(a){return"scrollSnapType"in a.style||"webkitScrollSnapType"in a.style||"msScrollSnapType"in a.style});var j=b(function(a){return"scrollBehavior"in a.style});b=b(function(a){if(!("pointerEvents"in a.style))return!1;a.style.cssText="pointer-events:auto";return a.style.pointerEvents==="auto"});var k=c("memoize")(function(){return!(d("UserAgent_DEPRECATED").webkit()&&!d("UserAgent_DEPRECATED").chrome()&&d("UserAgent_DEPRECATED").windows())&&"FileList"in window&&"FormData"in window}),l=c("memoize")(function(){return!!a.blob}),m=c("memoize")(function(){return c("ExecutionEnvironment").canUseDOM&&document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","foreignObject").toString().includes("SVGForeignObject")}),n=c("memoize")(function(){return!!window.MutationObserver}),o=c("memoize")(function(){var a={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd"},b=c("getVendorPrefixedName")("transition");return a[b]||null}),p=function(){return!!window.CanvasRenderingContext2D};g.hasCSSAnimations=c("BrowserSupportCore").hasCSSAnimations;g.hasCSSTransforms=c("BrowserSupportCore").hasCSSTransforms;g.hasCSS3DTransforms=c("BrowserSupportCore").hasCSS3DTransforms;g.hasCSSTransitions=c("BrowserSupportCore").hasCSSTransitions;g.hasPositionSticky=e;g.hasScrollSnapPoints=f;g.hasScrollBehavior=j;g.hasPointerEvents=b;g.hasFileAPI=k;g.hasBlobFactory=l;g.hasSVGForeignObject=m;g.hasMutationObserver=n;g.getTransitionEndEvent=o;g.hasCanvasRenderingContext2D=p},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PagesLogger",["PagesLoggerEventEnum","PagesTypedLogger"],function(a,b,c,d,e,f){var g="extra_data_",h={log:function(a,c,d,e,f,h){e===void 0&&(e=null);f===void 0&&(f=[]);var i={},j=h||{};Object.keys(j||{}).forEach(function(a){var b=j[a];(b instanceof Array||b instanceof Object)&&(b=JSON.stringify(b));i[g+a]=b});new(b("PagesTypedLogger"))().setPageID(a).setEvent(c).setEventTarget(d).setEventLocation(e).setLogSource("pages_logger").setTags(f).updateExtraData(i).log()},registerLogOnClick:function(a,c,d,e,f,g){e===void 0&&(e=null),f===void 0&&(f=[]),g===void 0&&(g={}),a.addEventListener("click",function(){h.log(c,b("PagesLoggerEventEnum").CLICK,d,e,f,g)})}};e.exports=h},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("CheckpointStepIconSwitcher",["CSS"],function(a,b,c,d,e,f){var g=null,h=null;function i(a){g!=null&&(h!=null&&b("CSS").hide(g[h]),b("CSS").show(g[a])),h=a}e.exports={init:function(a){g=a.icons;var b=h;h=a.selected;b!=null&&i(b)},show:function(a){i(a)}}},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("LiveChatPluginCloseButtonSVG.react",["react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return h.jsx("svg",{width:"10px",height:"10px",viewBox:"0 0 14 14",children:h.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:h.jsx("g",{transform:"translate(-419.000000, -413.000000)",children:h.jsx("g",{transform:"translate(164.000000, 396.000000)",children:h.jsx("g",{children:h.jsx("g",{transform:"translate(250.000000, 12.000000)",children:h.jsx("g",{children:h.jsxs("g",{children:[h.jsx("rect",{opacity:"0.200000003",x:"0",y:"0",width:"24",height:"24"}),h.jsxs("g",{transform:"translate(4.000000, 4.000000)",fill:"#000000",children:[h.jsx("rect",{transform:"translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) ",x:"7",y:"-1",width:"2",height:"18",rx:"1"}),h.jsx("rect",{transform:"translate(8.000000, 8.000000) rotate(135.000000) translate(-8.000000, -8.000000) ",x:"7",y:"-1",width:"2",height:"18",rx:"1"})]})]})})})})})})})})};return b}(h.PureComponent);g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("abstractMethod",["invariant"],function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){h(0,1537,a,b)}g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],function(a,b,c,d,e,f,g){function a(a,b,d,e,f){b===void 0&&(b=100);var g=function(a,b,d){return c("setTimeout")(a,b,d,!e)};return c("debounceCore")(a,b,d,g,c("clearTimeout"),f)}g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("getByPath",[],function(a,b,c,d,e,f){"use strict";function a(a,b,c){a=a;for(var d=0;d<b.length;d++){var e=b[d];if(a&&typeof a!=="string"&&typeof a!=="number"&&e in a)a=a[e];else return c}return a}f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("VideoHomeClickLogger",["VideoHomeEvents","VideoHomeTypedLogger"],function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.target,d=a.id,e=a.clickPoint,f=a.playerOrigin;f=f===void 0?"video_home":f;a=a.eventTargetInfo;a=a===void 0?null:a;new(c("VideoHomeTypedLogger"))().setEvent(c("VideoHomeEvents").CLICK).setEventTarget(b).setEventTargetID(d).setClickPoint(e).setPlayerOrigin(f).setEventTargetInfo(a).log()}function a(a,b){a.addEventListener("click",function(){h(b)})}g.logClick=h;g.init=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("cssVar",[],function(a,b,c,d,e,f){function a(a){throw new Error('cssVar("'+a+'"): Unexpected class transformation.')}f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);