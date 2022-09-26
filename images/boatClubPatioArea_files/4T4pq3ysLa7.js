if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d("IntersectionObserverFallback",["FBLogger","TimeSlice","containsNode","getElementRect","performanceNow","setInterval","throttle"],function(a,b,c,d,e,f){"use strict";var g,h=document.documentElement,i=[];function j(a,b){var c=Math.max(a.top,b.top),d=Math.min(a.bottom,b.bottom),e=Math.max(a.left,b.left);a=Math.min(a.right,b.right);b=a-e;var f=d-c;return b>=0&&f>=0?{top:c,bottom:d,left:e,right:a,width:b,height:f}:void 0}function k(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}var l=function(a){this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||k();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect.width*this.intersectionRect.height;a?this.intersectionRatio=Number((b/a).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0};a=function(){function a(a,c){var d=this;this.THROTTLE_TIMEOUT=100;this.POLL_INTERVAL=null;this.$12=b("TimeSlice").guard(b("throttle")(function(){var a=d.$14(),c=a?d.$15():k();d.$6.forEach(function(e){var f=e.element,h=b("getElementRect")(f),i=d.$16(f),j=e.entry,k=a&&i&&!d.$2&&d.$17(f,c);e.entry=new l({intersectionRect:k,target:f,time:(g||(g=b("performanceNow")))(),boundingClientRect:h,rootBounds:c});k=e.entry;!j?d.$7.push(k):a&&i?d.$18(j,k)&&d.$7.push(k):j&&j.isIntersecting&&d.$7.push(k)});d.$7.length&&d.$1(d.takeRecords(),d)},this.THROTTLE_TIMEOUT),"IntersectionObserverFallback: checkForIntersections");this.$2=!1;try{}catch(a){this.$2=!0}c=(c=c)!=null?c:{};this.$1=a;this.$4=!1;this.$6=[];this.$7=[];this.$8=this.$9(c.rootMargin);this.thresholds=this.$10(c.threshold);this.root=(a=c.root)!=null?a:null;this.rootMargin=this.$8.map(function(a){return a.value+a.unit}).join(" ")}var c=a.prototype;c.$10=function(a){a=(a=a)!=null?a:[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(a,b,c){return a!==c[b-1]})};c.$9=function(a){a=a||"0px";a=a.split(/\s+/).map(function(a){a=/^(-?\d*\.?\d+)(px|%)$/.exec(a);return{value:parseFloat(a[1]),unit:a[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};c.$11=function(){this.$4||(this.$4=!0,this.$12(),this.POLL_INTERVAL?this.$5=b("setInterval")(this.$12,this.POLL_INTERVAL):(window.addEventListener("resize",this.$12,!0),document.addEventListener("scroll",this.$12,!0),"MutationObserver"in window&&(this.$3=new MutationObserver(this.$12),this.$3.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))};c.$13=function(){this.$4&&(this.$4=!1,this.$5&&(clearInterval(this.$5),this.$5=void 0),window.removeEventListener("resize",this.$12,!0),document.removeEventListener("scroll",this.$12,!0),this.$3&&(this.$3.disconnect(),this.$3=void 0))};c.$17=function(a,c){var d=window.getComputedStyle(a);if(!d||d.display=="none")return void 0;d=b("getElementRect")(a);d=d;a=a.parentElement;var e=!1;while(!e){var f,g=null;f=((f=a)==null?void 0:f.nodeType)==1?window.getComputedStyle(a):{};if(f.display=="none")return void 0;a==this.root||a==document?(e=!0,g=c):a!=document.body&&a!=document.documentElement&&f.overflow!="visible"&&(g=b("getElementRect")(a));if(g){d=j(g,d);if(!d)break}a=a&&a.parentElement}return d};c.$15=function(){var a;if(this.root)a=b("getElementRect")(this.root);else{var c=document.documentElement,d=document.body,e=(c==null?void 0:c.clientWidth)||(d==null?void 0:d.clientWidth);c=(c==null?void 0:c.clientHeight)||(d==null?void 0:d.clientHeight);a={top:0,left:0,right:e,width:e,bottom:c,height:c}}return this.$19(a)};c.$19=function(a){var b=this.$8.map(function(b,c){return b.unit=="px"?b.value:b.value*(c%2?a.width:a.height)/100});b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3],width:0,height:0};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};c.$18=function(a,b){a=a&&a.isIntersecting?a.intersectionRatio||0:-1;b=b.isIntersecting?b.intersectionRatio||0:-1;if(a===b)return!1;for(var c=0;c<this.thresholds.length;c++){var d=this.thresholds[c];if(d==a||d==b||d<a!==d<b)return!0}return!1};c.$14=function(){return!this.root||b("containsNode")(h,this.root)};c.$16=function(a){var c=this.root||h;return b("containsNode")(c,a)};c.$20=function(){i.indexOf(this)<0&&i.push(this)};c.$21=function(){var a=i.indexOf(this);a!=-1&&i.splice(a,1)};c.observe=function(a){if(!a){b("FBLogger")("io").warn("IntersectionObserverFallback target does not exist");return}if(this.$6.some(function(b){return b.element==a}))return;this.$20();this.$6.push({element:a,entry:null});this.$11();this.$12()};c.unobserve=function(a){this.$6=this.$6.filter(function(b){return b.element!=a}),this.$6.length||(this.$13(),this.$21())};c.disconnect=function(){this.$6=[],this.$13(),this.$21()};c.takeRecords=function(){var a=this.$7.slice();this.$7=[];return a};return a}();e.exports=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("IntersectionObserver",["IntersectionObserverFallback"],function(a,b,c,d,e,f,g){"use strict";a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;b=a?window.IntersectionObserver:c("IntersectionObserverFallback");g["default"]=b},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MAudioButton",["DOM","Event","IntersectionObserver","MAudioController","MAudioLoggingUtils","MAudioUIUtil","MAudioUtil","Stratcom","intersectionObserverEntryIsIntersecting"],function(a,b,c,d,e,f,g){"use strict";function h(a){return a.parentNode!==null&&!(a.parentNode instanceof DocumentFragment)}var i=600;a=function(){function a(a,b,e,f,g,i){var j=this;this.canPlayAudioCallback=function(a){d("MAudioLoggingUtils").logAudioEvent(j.$4,a?"autoplay_test_success":"autoplay_test_fail",j.$5),a&&j.playAudio(!1)};this.audioPlayEnded=function(a){j.shouldProcessEvent(a)&&d("MAudioLoggingUtils").logAudioEvent(j.$4,"audio_play_completed",j.$5)};this.$1=a;this.$2=b;this.$3=e;this.$4=f;this.$5=g;this.$6=i;this.$7=null;this.$8=!1;this.$9=!1;c("Event").listen(this.$2,"click",function(a){j.$8=!1,d("MAudioLoggingUtils").logAudioEvent(f,"play_button_press",g,j.$2.getAttribute("audio_extra_data")),d("MAudioUIUtil").isButtonInit(j.$2)?d("MAudioUIUtil").clearButtonAnimationFlag(j.$2):d("MAudioUIUtil").isButtonInit(j.$1)&&(d("MAudioUIUtil").clearButtonAnimationFlag(j.$1),d("MAudioUIUtil").prepButtonForAnimation(j.$3)),a.isTrusted?j.playAudio(!0):d("MAudioUtil").tryPlaying(j.canPlayAudioCallback)});c("Event").listen(this.$3,"click",function(){if(!h(j.$3))return;j.$8=!0;c("Stratcom").invoke(d("MAudioUtil").MAudioEvents.AUDIO_STOP,null);d("MAudioLoggingUtils").logAudioEvent(f,"stop_button_press",g)});b=new(c("IntersectionObserver"))(function(a){a.forEach(function(a){c("intersectionObserverEntryIsIntersecting")(a)?d("MAudioLoggingUtils").logAudioEvent(f,"audio_button_view",g):j.$3.click()})},{});b.observe(a);c("Stratcom").listen(d("MAudioUtil").MAudioEvents.AUDIO_ENDED,null,this.audioPlayEnded)}var b=a.prototype;b.audioStepIndex=function(){return this.$5+":"+this.$4.audio_file_name};b.loadAudio=function(){this.$9||(this.$7=window.performance&&window.performance.now?window.performance.now():null,c("MAudioController").prepare(this.audioStepIndex(),{audio:this.$4.audio_link}),d("MAudioLoggingUtils").logAudioEvent(this.$4,"audio_file_download",this.$5),this.$9=!0)};b.playAudio=function(a){var b=this;this.loadAudio();window.setTimeout(function(){if(!b.$8){c("MAudioController").play(b.audioStepIndex(),"audio");var e=b.$7!=null&&b.$7>0?window.performance.now()-b.$7:0;b.$7=null;d("MAudioLoggingUtils").logAudioEvent(b.$4,"audio_play_started",b.$5,JSON.stringify({timeElapsed:e.toString()}));a||d("MAudioLoggingUtils").logAudioEvent(b.$4,"autoplay_started",b.$5)}},i);h(this.$2)&&d("DOM").replace(this.$2,this.$3);var e=d("DOM").scry(this.$3,"*","audio_stop_button_image")[0];e!=null&&d("MAudioUIUtil").animateSpeakerLoopIn(this.$3,this.$2,e)};b.shouldProcessEvent=function(a){return this.$4.audio_link===a.getData().audioLink};return a}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("XHeaderUpdateOptInStatusController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/header_settings/update/",{redirect_url:{type:"String"},opt_in:{type:"Bool",defaultValue:!1}})}),null);
__d("MHeaderTransparencyChangeSettings",["Event","XAsyncRequest","XHeaderUpdateOptInStatusController"],function(a,b,c,d,e,f){"use strict";var g={_updateOptInStatus:function(a){a=b("XHeaderUpdateOptInStatusController").getURIBuilder().setBool("opt_in",a).getURI();new(b("XAsyncRequest"))(a).setResponseHandler(g._goBack).send()},_goBack:function(){history.length>1&&window.history.go(-1)},monitorBackButton:function(a){b("Event").listen(a,"click",function(){return g._goBack()})},monitorOptInButton:function(a){b("Event").listen(a,"click",function(){return g._updateOptInStatus(!0)})},monitorOptOutButton:function(a){b("Event").listen(a,"click",function(){return g._updateOptInStatus(!1)})}};e.exports=g},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("observeIntersection",["invariant","ErrorGuard","IntersectionObserver"],function(a,b,c,d,e,f,g,h){"use strict";var i=typeof WeakMap==="function",j={__noRoot:!0},k=i?new WeakMap():new Map();function l(a){var b=a.threshold;if(Array.isArray(b)){var c={};b.forEach(function(a){c[String(a)]=!0});b=Object.keys(c).sort()}var d=babelHelpers["extends"]({},a,{threshold:b}),e={};Object.keys(d).sort().forEach(function(a){e[a]=d[a]});return JSON.stringify(e)}function a(a,b,d){d===void 0&&(d={});var e=l({rootMargin:d.rootMargin,threshold:d.threshold}),f=d.root||j,g=k.get(f);g==null&&(g={},k.set(f,g));var m=g[e];if(m==null){d=new(c("IntersectionObserver"))(function(a){a.forEach(function(a){m!=null||h(0,2439);var b=m.targetToCallbacksMap.get(a.target);b&&b.length>0&&b.forEach(function(b){c("ErrorGuard").applyWithGuard(b,null,[a],{name:"observeIntersection"})})})},d);m={intersectionObserver:d,referenceCount:0,targetToCallbacksMap:i?new WeakMap():new Map()};g[e]=m}d=m.targetToCallbacksMap.get(a);d==null&&(m.intersectionObserver.observe(a),m.referenceCount+=1,d=[],m.targetToCallbacksMap.set(a,d));d.push(b);var n=!1,o=function(){if(n)return;var c=m.targetToCallbacksMap.get(a);c!=null||h(0,2440);if(c.length===1)m.intersectionObserver.unobserve(a),m.targetToCallbacksMap["delete"](a),m.referenceCount-=1,a=null;else{var d=c.indexOf(b);d!==-1||h(0,2441);c.splice(d,1)}m.referenceCount===0&&(g!=null||h(0,2442),delete g[e],f&&Object.keys(g).length===0&&k["delete"](f));b=null;a=null;f=null;n=!0};return{remove:function(){o&&(o(),o=null)}}}f.exports=a},34,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("OnVisible.react",["FBLogger","ReactDOM","intersectionObserverEntryIsIntersecting","observeIntersection","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=null,c.$2=!1,c.$3=null,c.state={visible:!1},b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.componentDidMount=function(){this.$2=!0,this.$4()};e.componentDidUpdate=function(a){this.$4(a)};e.componentWillUnmount=function(){this.$2=!1,this.$5()};e.$4=function(a){var b=this,e;try{e=d("ReactDOM").findDOMNode(this)}catch(a){return}this.$3&&(!a||a.buffer!==this.props.buffer||e!==this.$1)&&this.$5();if(!this.$3){if(!(e instanceof Element)){this.$1=null;return}this.$1=e;this.$3=c("observeIntersection")(e,function(a){a=c("intersectionObserverEntryIsIntersecting")(a);var d=a?b.props.onVisible:b.props.onHidden;b.setState({visible:a});d&&d()},{rootMargin:this.props.buffer!=null?this.props.buffer+"px":"0px"})}};e.$5=function(){this.$3&&(this.$3.remove(),this.$3=null)};e.check=function(){c("FBLogger")("onvisible").mustfix("Deprecated method `check()` was called. Remove the call immediately.")};e.reset=function(){if(this.$2===!1)return;this.$5();this.$4()};e.render=function(){var a=this.props.children;a=typeof a==="function"?a(this.state.visible):a;return h.Children.only(a)};return b}(h.Component);g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("ReactDispatcher_DEPRECATED",["Dispatcher_DEPRECATED","ReactDOM"],function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.dispatch=function(b){var c=this;d("ReactDOM").unstable_batchedUpdates(function(){a.prototype.dispatch.call(c,b)})};return b}(c("Dispatcher_DEPRECATED"));g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("GroupsLoggedOutEventEmitter",["EventEmitter"],function(a,b,c,d,e,f,g){"use strict";a=new(c("EventEmitter"))();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("GroupsLoggedOutInViewController",["csx","CSS","GroupsLoggedOutEventEmitter","IntersectionObserver","Run","Style","intersectionObserverEntryIsIntersecting"],function(a,b,c,d,e,f,g,h){a=function(){b.create=function(a){return new b(a)};var a=b.prototype;a.setTransitionDelay=function(a,b){c("Style").set(a,"transitionDelay",b+"s"),setTimeout(function(){c("Style").set(a,"transitionDelay",null)},b*1e3)};function b(a){var b=this;this.$6=!1;this.onIntersect=function(a){var e=b.$4;a.forEach(function(a,f){var g=c("intersectionObserverEntryIsIntersecting")(a);if(g){c("GroupsLoggedOutEventEmitter").emit("in_view",a);if(!a.target.classList.contains(e)){d("CSS").addClass(a.target,e);b.$5&&b.setTransitionDelay(a.target,b.$5[f]||f*b.$5);if(b.$6){g=Array.from(a.target.querySelectorAll("._8wos"))[0];f=g.getAttribute("data-src");f!==null&&g.setAttribute("src",f)}}}else c("GroupsLoggedOutEventEmitter").emit("out_of_view",a)})};this.$4=a.className;this.$1=a.els;this.$3=a.observerOpts;a.stagger&&(this.$5=a.stagger);a.hasImages!==null&&a.hasImages!==void 0&&(this.$6=a.hasImages);d("Run").onAfterLoad(function(){b.createObserver(),d("Run").onUnload(function(){b.$2&&(b.$2.destroy(),b.$1=[])})})}a.createObserver=function(){var a=this;this.$2=new(c("IntersectionObserver"))(this.onIntersect,this.$3);this.$1.forEach(function(b){return a.observe(b)})};a.observe=function(a){this.$2&&this.$2.observe(a)};return b}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("errorDesc",["fbt","invariant"],function(a,b,c,d,e,f,g,h,i){"use strict";function a(a){i(0,3625)}a.withParams=function(a,b){i(0,3625)};a._=function(a,b){return a(h,b)};b=a;g["default"]=b},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MessengerMarketingBannerPosition",["cx","CSS","Event","throttle"],function(a,b,c,d,e,f,g,h){"use strict";a={init:function(a){var b=a.root;c("Event").listen(window,"scroll",c("throttle")(function(){e(b)},100));function e(a){var b=window.document.body.getBoundingClientRect();b=window.innerHeight-parseInt(b.height+b.top,10);d("CSS").conditionClass(a,"_9gb4",b===0||b===1)}}};f.exports=a},34,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MessengerMarketingClose",["CSS","Event"],function(a,b,c,d,e,f){"use strict";a={init:function(a){b("Event").listen(a.closeButton,"click",function(){b("CSS").hide(a.root)})}};e.exports=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PagesInsightsDataDispatcher",["ReactDispatcher_DEPRECATED"],function(a,b,c,d,e,f,g){a=new(c("ReactDispatcher_DEPRECATED"))();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);