if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MFirefoxAppDetect",[],function(a,b,c,d,e,f){function a(a,b){if(!navigator.mozApps){b();return}if(window.locationbar&&!window.locationbar.visible){a();return}if(navigator.mozApps.getSelf){var c=navigator.mozApps.getSelf();c.onsuccess=function(){c.result?a():b()};c.onerror=b}else b()}f.isFirefoxApp=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MPageHeaderLeft",["$","DOM","MFirefoxAppDetect"],function(a,b,c,d,e,f,g){var h={};function i(a){if(!h.back_button){var b=c("$")("page");h.back_button=d("DOM").find(b,"a","back-button");h.menu_button=d("DOM").find(b,"a","menu-link")}a.show_back_button?(d("DOM").hide(h.menu_button),d("DOM").show(h.back_button)):(d("DOM").hide(h.back_button),d("DOM").show(h.menu_button))}function j(a){var b=window.navigator;b.standalone||h.isMozApp?i(a):h.isMozApp===void 0&&(h.lastConfig=a,d("MFirefoxAppDetect").isFirefoxApp(function(){h.isMozApp=!0,a===h.lastConfig&&(j(a),delete h.lastConfig)},function(){h.isMozApp=!1}))}g.main=j},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MHeadMeta",[],function(a,b,c,d,e,f){"use strict";var g={isExistsByName:function(a){return!!g.getByName(a)},getByName:function(a){if(document.querySelector)return document.querySelector('head meta[name="'+a+'"]');var b=document.head||document.getElementsByTagName("head")[0];if(!b)return null;b=b.getElementsByTagName("meta");for(var c=0;c<b.length;c++){var d=b[c],e=d.getAttribute("name");if(e===a)return d}return null}};e.exports=g},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MBrowserTheme",["MHeadMeta"],function(a,b,c,d,e,f,g){"use strict";var h=null,i=!1,j=null;function k(){if(h)return h;h=d("MHeadMeta").getByName("theme-color");return h}function a(a){var b=k();b&&(j===null&&!i&&(j=b.getAttribute("content")),j!==null&&(b.setAttribute("content",a),i=!0))}function b(){if(!i)return;var a=k();if(!a)return;j!==null&&(a.setAttribute("content",j),i=!1)}g.set=a;g.restore=b},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MphotosVpvTrackingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1838986");c=b("FalcoLoggerInternal").create("mphotos_vpv_tracking",a);e.exports=c},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MPhotoViewportTracking",["DOM","FBJSON","MViewportTracking","MphotosVpvTrackingFalcoEvent","StratcomManager"],function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.init=function(a){d("StratcomManager").enableDispatch(document,"scroll"),new b().init(a)};var e=b.prototype;e.getDataFromConfig=function(a){this.relaxedMinSize=!0};e.__getStreamRoot=function(){this.$MPhotoViewportTracking1||(this.$MPhotoViewportTracking1=document.getElementById("root"));return this.$MPhotoViewportTracking1};e.getAllStories=function(){return d("DOM").scry(this.__getStreamRoot(),"div","photo-stage")};e.getStoryID=function(a){var b=a.getAttribute("data-store");if(typeof b==="string"&&b.length>0){b=d("FBJSON").parse(b);if("object_id"in b)return""+b.object_id}return a.getAttribute("id")};e.getTimeout=function(){return 250};e.getDataToLog=function(a){a=this.getStoryID(a);return{photo_id:a}};e.getTimetrackingDataToLog=function(b){var c=a.prototype.getTimetrackingDataToLog.call(this,b);b=this.getStoryID(b.story);return babelHelpers["extends"]({},c,{photo_id:b})};e.sendDataToLog=function(a){c("MphotosVpvTrackingFalcoEvent").log(function(){return{custom_data_json:JSON.stringify(a)}})};return b}(c("MViewportTracking"));g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MFullSizeLink",["EventListener","gkx","goURI"],function(a,b,c,d,e,f,g){"use strict";var h="data-full-size-href";function a(a){a=a.querySelector("["+h+"]");if(a){var b=a.getAttribute(h);b&&c("EventListener").listen(a,"click",function(){c("gkx")("676816")&&c("goURI")(b)})}}g.registerFullSizePhotoLink=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MInputFocus",["DOM","MViewport","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f){a={scrollTo:function(a,c){b("setTimeoutAcrossTransitions")(function(){b("DOM").hide(a),b("MViewport").scrollTo(0,c),b("DOM").show(a),a.setSelectionRange(a.selectionEnd,a.selectionEnd)},0)}};e.exports=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MSinglePhotoDarkView",["cx","CSS","Event","MBrowserTheme","MViewport","destroyOnUnload"],function(a,b,c,d,e,f,g){var h={init:function(){b("MViewport").toggleHeader(!1);var a=document.getElementById("MChromeHeader");a&&b("CSS").addClass(a,"_8ih-");b("MBrowserTheme").set("black");b("destroyOnUnload")(function(){b("MViewport").toggleHeader(!0),a&&b("CSS").removeClass(a,"_8ih-"),b("MBrowserTheme").restore()})},closeButtonEventListener:function(a){var c=b("Event").listen(a,"click",function(){h.navBack()});b("destroyOnUnload")(function(){c.remove()})},navBack:function(){if(history.length<=1){window.close();return}history.go(-1)}};e.exports=h},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("prefetchImage",[],function(a,b,c,d,e,f){function a(a,b){var c=!0,d=new Image();d.onload=function(){c=!1,b&&b()};d.src=a;return{cancel:function(){if(!c)return;c=!1;d.onload=null;d.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}}}f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MPhotoStage",["cx","CSS","DOM","MInputFocus","MJSEnvironment","MLegacyDataStore","MRequest","MSinglePhotoDarkView","MURI","MViewport","Stratcom","Vector","prefetchImage","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g){var h=!1,i="photo-stage",j="photo-image",k="facebox",l="new-tag-placeholder",m="photos-input-tag",n="photo-tag-loading",o="popup-nub",p="tokenizer-input",q="transfer-focus-container",r=2e3,s=200,t=null,u=null,v=null,w=null,x=!1;function y(a,c,d){var e=0,f=b("MViewport").getUseableWidth();d>f?e=d-f:c<0&&(e=c);return e===0?a:new(b("Vector"))(a.x-e,a.y)}function z(a){if(!a)return;b("CSS").conditionClass(a,"_57-n",!!v);v?(clearTimeout(v),v=null):v=b("setTimeoutAcrossTransitions")(function(){z(a)},r)}function A(){t=null;while(w.length)w.pop().remove();h=!1;v&&(clearTimeout(v),v=null)}function B(a){var c,d=(c=b("Vector")).getPos(a);a=c.getDim(a);var e=c.getPos(t);c=new c(d.x+a.x/2,d.y+a.x-e.y);d=b("DOM").find(t,"*",n);c.setPos(d);b("DOM").show(d)}function C(a,c,d){var e=new(b("MURI"))(a.write_tag_uri);e.addQueryData("id",a.owner_id);e.addQueryData("facebox_id",c.facebox_id);e.addQueryData("replace_id",l);e.addQueryData("sd_source",a.source);e.addQueryData("sd_set",a.set);a={};a["ids["+d+"]"]=d;a["x["+d+"]"]=c.facebox_center.x;a["y["+d+"]"]=c.facebox_center.y;d=new(b("MRequest"))(e.normalize().toString()).addData(a);return d}function D(a,c){var d;u=a;var e=b("DOM").find(t,"*",m),f=(d=b("Vector")).getPos(t),g=d.getPos(a);a=d.getDim(a);d=new d(g.x+a.x/2,g.y+a.y-f.y);a=y(d,d.x-s/2,d.x+s/2);f=b("DOM").find(e,"*",o);f.style.left=d.x-a.x+"px";f=b("MLegacyDataStore").get(u);f.suggestions&&(c.tokenizer.updateSuggestionsIds&&c.tokenizer.updateSuggestionsIds(f.suggestions));a.setPos(e);b("DOM").show(e);d=b("DOM").find(e,"*",p);d.focus();b("MInputFocus").scrollTo(d,g.y);v&&(clearTimeout(v),v=null)}function E(a){var c=b("DOM").find(t,"*",m);if(u){var d=b("MLegacyDataStore").get(u),e=b("MLegacyDataStore").get(t);e=C(e,d,a);B(u);e.listen("finally",function(){x&&b("MSinglePhotoDarkView").navBack();var a=b("DOM").find(t,"*",n);b("DOM").hide(a)});e.send();b("DOM").hide(u);b("DOM").hide(c);b("DOM").find(c,"*",p).blur();u=null}v=b("setTimeoutAcrossTransitions")(function(){z(t)},r)}a=function(a,c,d){if(h)return;x=d;t=a;h=!0;d="touchend";b("MJSEnvironment").IS_ANDROID&&(d="click");if(c&&c.use_faceboxes){w=[(a=b("Stratcom")).listen(d,i,function(a){if(u){var c=b("DOM").find(t,"*",m);b("DOM").find(c,"*",p).blur();b("DOM").hide(c);u=null;a.kill()}else z(a.getNode(i))}),a.listen(d,k,function(a){var c=b("DOM").find(t,"*",q),d=a.getNode(k);x?u=d:D(d,c);a.kill()}),a.listen(d,q,function(a){var c=a.getNode(q);c=b("DOM").find(c,"*",p);c.focus();u&&b("MInputFocus").scrollTo(c,b("Vector").getPos(u).y);a.kill()}),a.listen("Tokenizer-addedtoken",null,function(a){E(a.getData().rel)}),a.listen("close-on-tag",null,function(a){E(a.getData())})]}else w=[b("Stratcom").listen("touchend",i,function(a){z(a.getNode(i))})];w.push(b("Stratcom").listen("m:page:unload",null,A));c=b("DOM").scry(t,"*",j);c.length>0&&b("MLegacyDataStore").get(c[0]).imgsrc?b("prefetchImage")(b("MLegacyDataStore").get(c[0]).imgsrc,function(){return z(t)}):z(t)};f.main=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MFRXWebFunnelLogger",[],function(a,b,c,d,e,f){a={attachClickLogging:function(a,b,c,d,e){},removeStratcomListeners:function(){},attachStratcomClickLogging:function(a,b,c,d,e){},logEvent:function(a,b,c,d){}};e.exports=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MRapidReportingHelper",["DOM","MModalDialog","Stratcom"],function(a,b,c,d,e,f,g){function a(){c("Stratcom").listen("click","rr_done_sigil",function(){d("MModalDialog").close({canceled:!0,goBack:!1})})}function b(){c("Stratcom").listen("click","more-link-photo-viewer",function(){c("Stratcom").removeCurrentListener()})}function e(){var a=document.getElementById("rapid_report_confirm_done_button");a!==null&&d("DOM").show(a);c("Stratcom").listen("click","rr_done_sigil_mlite",function(){window.mliteFrxJSInterface!=null&&window.mliteFrxJSInterface.onMLiteFRXFlowNav!=null?window.mliteFrxJSInterface.onMLiteFRXFlowNav("frx_flow_close"):window.webkit!=null&&window.webkit.messageHandlers!=null&&window.webkit.messageHandlers.mliteFrxMessageHandler!=null&&window.webkit.messageHandlers.mliteFrxMessageHandler.postMessage("frx_flow_close")})}function f(){window.mliteFrxJSInterface!=null&&window.mliteFrxJSInterface.onMLiteFRXFlowNav!=null&&window.mliteFrxJSInterface.onMLiteFRXFlowNav("flytrap_flow_start")}g.initDoneButtonDialog=a;g.initMoreLink=b;g.initDoneButtonMLite=e;g.startFlytrap=f},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MModalDialogLink",["MLegacyDataStore","MModalDialog","MPageController","Stratcom"],function(a,b,c,d,e,f){var g="dialog-link";b("Stratcom").listen("click",g,function(a){a.prevent();var c=a.getNode(g);switch(c.getAttribute("rel")){case"dialog":b("MModalDialog").open(b("MLegacyDataStore").get(a.getNode(g)).dialogURI,function(a){a&&(a.redirectURI?b("MPageController").forceLoad(a.redirectURI):a.refresh&&b("MPageController").reload())},c.getAttribute("data-loading-title"));break;case"dialog-load":b("MModalDialog").load(b("MLegacyDataStore").get(a.getNode(g)).dialogURI,{dontPushState:!1,hideNavBar:!1},c.getAttribute("data-loading-title"));break;case"dialog-close":b("MModalDialog").close({redirectURI:b("MLegacyDataStore").get(a.getNode(g)).dialogURI,goBack:!0});break;case"dialog-close-and-navigate":b("MModalDialog").close({redirectURI:b("MLegacyDataStore").get(a.getNode(g)).dialogURI,goBack:!1});break;case"dialog-close-and-refresh":b("MModalDialog").close({refresh:!0,goBack:!0});break}})},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MImagePreloader",[],function(a,b,c,d,e,f){function a(a){for(var b=0;b<a.length;b++){var c=new Image();c.src=a[b]}}f.init=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MAsyncThrobber",["DOM","MLoadingIndicator","Stratcom","destroyOnUnload"],function(a,b,c,d,e,f){var g="async-throbber";a=function(){"use strict";function a(a){this.$1=b("MLoadingIndicator").init(a);if(!this.$1)return;this.$2=[b("Stratcom").listen("m:ajax:saving:start",null,this.$3.bind(this)),b("Stratcom").listen("m:ajax:saving:complete",null,this.$4.bind(this))];b("destroyOnUnload")(this.$5.bind(this))}var c=a.prototype;c.$3=function(a){a=a&&a.getData();a&&b("DOM").scry(a,"*",g)&&this.$1.willStartAnimation()};c.$4=function(a){a=a&&a.getData();a&&b("DOM").scry(a,"*",g)&&this.$1.willPauseAnimation()};c.$5=function(){while(this.$2&&this.$2.length)this.$2.pop().remove();this.$1=null};return a}();e.exports=a},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MTimestamp",["fbt","DOM","MLegacyDataStore","Stratcom","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g){var h=2e4,i=60,j=3600,k;function l(){var a=Math.floor(Date.now()/1e3),c=b("DOM").scry(document,"abbr","timestamp");for(var d=0,e=c.length;d<e;++d){var f=b("MLegacyDataStore").get(c[d]);f=m(a-f.time||0,f["short"],f.forceseconds);f&&(c[d].innerText=f)}clearTimeout(k);k=b("setTimeoutAcrossTransitions")(l,h)}function m(a,b,c){if(a>12*j)return null;if(a<2*i&&c)return g._({"*":"{number} seconds ago"},[g._param("number",a,[0])]);if(a<2*i)return g._("Just now");if(a<j){c=Math.floor(a/i);return b?g._({"*":"{number} min"},[g._param("number",c,[0])]):g._({"*":"{number} minutes ago"},[g._param("number",c,[0])])}c=Math.floor(a/j);if(b)return g._("{number} hr",[g._param("number",c)]);else if(c==1)return g._("1 hour ago");return g._({"*":"{number} hours ago"},[g._param("number",c,[0])])}l();b("Stratcom").listen("m:update-timestamps",null,function(){l()});f.renderTimestamp=m},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MActionBubbleHelper",["cx","CSS","ODS","Stratcom"],function(a,b,c,d,e,f,g,h){var i="enabled_action";function a(a,b,e,f){d("ODS").bumpEntityKey(2966,"rrsurfaces","action_bubble.toggle_action."+String(b)+"."+e+"."+f),c("CSS").conditionClass(a,"_58a0",b),b?c("Stratcom").addSigil(a,i):c("Stratcom").removeSigil(a,i)}g.toggleActionBubbleItem=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("MCommentActionsFlyout",["cx","Bootloader","CSS","DOM","MActionBubbleHelper","MLegacyDataStore","MModalDialog","MParent","MRequest","Stratcom","URI"],function(a,b,c,d,e,f,g,h){var i="ban_user_from_page_comment_sigil",j="editCommentSigil",k="editHistoryCommentSigil",l="deleteCommentSigil",m="deleteCommentAndBlockAuthorSigil",n="deleteCommentAndRemoveAuthorSigil",o="hideCommentSigil",p="muteMemberSigil",q="reportCommentSigil",r="commentFlyoutSigil",s="removeTagSigil",t=!1;function u(a,b,c){a=d("DOM").find(a,"*",b);d("MActionBubbleHelper").toggleActionBubbleItem(a,c,"MCommentActionsFlyout",b)}function v(a,b,e){var f=d("DOM").find(a,"*",b),g=!!e.groupMuteCommenterInfo;d("MActionBubbleHelper").toggleActionBubbleItem(f,g,"MCommentActionsFlyout",b);if(g&&b===p){f=d("DOM").scry(a,"*",b)[0];c("CSS").conditionClass(f,"_4ob2",!e.groupMuteCommenterInfo.is_commenter_muted)}}function w(a){a=d("MParent").bySigil(a,"comment-metadata");return a}function x(a,b){b=d("MLegacyDataStore").get(b);a.addQueryData("_ft_",b.linkdata)}function y(a,b){x(b,a);a=new(c("MRequest"))(b);a.send()}function z(a,b,c){d("MModalDialog").open(b,c)}function A(){var a=w(this.getCausalElement()),b=this.getRoot();if(a==null)return;a=d("MLegacyDataStore").get(a);u(b,j,!!a.editCommentURI);u(b,k,!!a.editHistoryCommentURI);u(b,l,!!a.deleteCommentURI);u(b,m,!!a.deleteCommentAndBlockAuthorURI);u(b,n,!!a.deleteCommentAndRemoveAuthorURI);u(b,o,!!a.hideCommentURI);v(b,p,a);u(b,q,!!a.reportCommentURI);u(b,i,!!a.banUserFromPageURIParams&&!t);u(b,s,!!a.removeTagURI&&B())}function B(){return!1}function C(a){var b=d("MLegacyDataStore").get(a.getNode(r)),e=w(b.layer.getCausalElement());if(e==null)return;var f=d("MLegacyDataStore").get(e);if(a.getNode(j))y(e,new(c("URI"))(f.editCommentURI));else if(a.getNode(k))y(e,new(c("URI"))(f.editHistoryCommentURI));else if(a.getNode(l))y(e,new(c("URI"))(f.deleteCommentURI));else if(a.getNode(m))y(e,new(c("URI"))(f.deleteCommentAndBlockAuthorURI));else if(a.getNode(n))y(e,new(c("URI"))(f.deleteCommentAndRemoveAuthorURI));else if(a.getNode(s))y(e,new(c("URI"))(f.removeTagURI));else if(a.getNode(o))y(e,new(c("URI"))(f.hideCommentURI));else if(a.getNode(p))y(e,new(c("URI"))(f.groupMuteCommenterInfo.URI));else if(a.getNode(q)){var g=new(c("URI"))(f.reportCommentURI);f.reportIsModalDialog?z(e,g):y(e,g)}else a.getNode(i)&&(f.banUserFromPageURIParams&&c("Bootloader").loadModules(["MPagesBanUserUtils"],function(a){a.banUserFromPage(f.banUserFromPageURIParams.pageID,f.banUserFromPageURIParams.userID,f.banUserFromPageURIParams.userName,function(){t=!0})},"MCommentActionsFlyout"));b.layer.hide();a.kill()}var D,E;function a(a){if(D)return;D=a;var b=a.getRoot();c("Stratcom").addSigil(b,r);E=[c("Stratcom").listen("m:page:unload",null,function(){while(E.length>0)E.pop().remove();D=null}),a.addListener("beforeshow",A,a),d("DOM").listen(b,"click",null,C)]}g.registerFlyout=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("XLiveCommentRenderController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mobile/live_comment/render/",{})}),null);
__d("MUFILiveComments",["cx","Bootloader","DOM","MLiveData","MParent","MRequest","MUFIReactionsUtils","Stratcom","SubscriptionsHandler","XLiveCommentRenderController"],function(a,b,c,d,e,f,g,h){"use strict";var i="feed-ufi-comments",j="m-ufi";a=function(){function a(a,b){var e=this;this.onNewComment=function(a){a=a.getData();var b=a.feedbackTargetID,f=a.commentToken;if(b!==e.feedbackTargetID)return;var g=e.feedbackTarget.getData();if(!e.fetchedComments[f]){a=c("XLiveCommentRenderController").getURIBuilder().getURI();a=new(c("MRequest"))(a);a.setData({comment_token:f,dom_append_id:e.rootElement.id});a.listen("postprocess",function(){var a=g.comments||[];a.push(f);d("MLiveData").update(b,{comments:a});e.updateActivityUI(g.logging_interaction_key)});a.send();e.fetchedComments[f]=!0}};this.onUnload=function(){e.handler.release(),e.liveTypersCount=null};this.rootElement=a;this.activityElement=d("DOM").create("div",{className:"_623b"});this.rootElement.parentNode&&this.rootElement.parentNode.insertBefore(this.activityElement,this.rootElement.nextSibling);this.fetchedComments={};this.feedbackTargetID=b;this.feedbackTarget=d("MLiveData").get(this.feedbackTargetID);this.liveTypersCount=null;this.handler=new(c("SubscriptionsHandler"))();this.handler.addSubscriptions(c("Stratcom").listen("m:ufi:live-comments:new-comment",null,this.onNewComment.bind(this)),c("Stratcom").listen("m:page:unload",null,this.onUnload.bind(this)));this.getIsCommentFlyout()||this.initTypingIndicatorSubscription()}var b=a.prototype;b.initTypingIndicatorSubscription=function(){var a=this;c("Bootloader").loadModules(["MUFICommentTypingSubscriptionController"],function(b){b=new b(a.feedbackTargetID,function(b){a.liveTypersCount=b,a.updateActivityUI()});b.didSubscribe()&&a.handler.addSubscriptions(b)},"MUFILiveComments")};b.getIsCommentFlyout=function(){return!!d("MParent").bySigil(this.rootElement,i)};b.getCommentElement=function(a){a=d("MUFIReactionsUtils").maybeConvertTokenToFBID(a);return a?document.getElementById(a):null};b.updateActivityUI=function(a){var b=this;c("Bootloader").loadModules(["MReactComponentRenderer","MUFILiveCommentActivity.react"],function(e,f){var g=b.feedbackTarget.getData();e(f,b.activityElement,{comments:g.comments||[],feedbackTargetID:b.feedbackTargetID,isAnyLiveTyping:b.liveTypersCount&&b.liveTypersCount>0,disablePill:b.getIsCommentFlyout()});e=g.logging_interaction_key;f=e?[e]:[];a&&a!==e&&f.push(a);c("Stratcom").invoke("m:ufi:live-comments:render",null,{ufi:d("MParent").bySigil(b.rootElement,j),logKeys:f})},"MUFILiveComments")};return a}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("Clipboard",["Promise","UserAgent"],function(a,b,c,d,e,f,g){function a(){return window.document&&window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(c("UserAgent").isBrowser("Firefox < 41")||c("UserAgent").isPlatform("iOS < 10.3"))||c("UserAgent").isBrowser("Chrome >= 43")}function h(a,b){b=b||document.body;if(!b)return!1;var d=document.activeElement,e=!0,f=document.createElement("textarea");b.appendChild(f);f.value=a;if(c("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(f);var g=window.getSelection();g.removeAllRanges();g.addRange(a);f.setSelectionRange(0,999999)}else f.select();try{e=document.execCommand("copy")}catch(a){e=!1}b.removeChild(f);d!=null&&d.focus();return e}function d(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return h(a)?b("Promise").resolve():b("Promise").reject()}g.isSupported=a;g.copy=h;g.copyAsync=d},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("SeoClickTrackerTypedLogger",["Banzai","GeneratedLoggerUtils"],function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:SeoClickTrackerLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:SeoClickTrackerLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:SeoClickTrackerLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClickedFbid=function(a){this.$1.clicked_fbid=a;return this};c.setComponent=function(a){this.$1.component=a;return this};c.setFbid=function(a){this.$1.fbid=a;return this};c.setPosition=function(a){this.$1.position=a;return this};return a}();c={clicked_fbid:!0,component:!0,fbid:!0,position:!0};f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("SeoRhsItemWrapper",["Parent","SeoClickTrackerTypedLogger"],function(a,b,c,d,e,f,g){"use strict";function a(a){a.child.addEventListener("click",i(a))}function h(a){var b=a.evt.target;if(!(b instanceof Node))return;b=b&&d("Parent").byTag(b,"a");b!==null&&b.getAttribute("href")!=="#"&&b.getAttribute("ajaxify")===null&&new(c("SeoClickTrackerTypedLogger"))().setFbid(a.page_fbid).setClickedFbid(a.component_fbid).setComponent(a.component).setPosition(a.position).log()}function i(a){return function(b){b=babelHelpers["extends"]({},a,{evt:b});h(b)}}g.log=a;g.clickHandler=h;g._onClick=i},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);