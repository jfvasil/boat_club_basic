if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MTouchChannelPayloadRouter",["ChannelEventType","MMercurySyncDispatcher","Stratcom"],function(a,b,c,d,e,f,g){"use strict";function a(a){if(h(a)||j(a)||k(a))return;else if(i(a)){var b=a.queue.toString();c("MMercurySyncDispatcher").getForFBID(b).process(a.delta,"cp")}else c("Stratcom").invoke(a.type,null,a)}function h(a){return(a.type===d("ChannelEventType").MESSAGE||a.type===d("ChannelEventType").PAGES_MESSAGE)&&a.message}function i(a){return a.type===d("ChannelEventType").DELTA}function j(a){return(a.type===d("ChannelEventType").MESSAGE||a.type===d("ChannelEventType").PAGES_MESSAGE)&&a.event==="read"}function k(a){return a.type===d("ChannelEventType").PAGES_MESSAGE&&a.event===d("ChannelEventType").PAGE_THREAD_FLAG_CHANGED}g.route=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);