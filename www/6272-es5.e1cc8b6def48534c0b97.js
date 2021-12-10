!function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(self.webpackChunkAppMovil=self.webpackChunkAppMovil||[]).push([[6272],{6272:function(n,o,r){r.r(o),r.d(o,{ion_menu:function(){return m},ion_menu_button:function(){return w},ion_menu_toggle:function(){return C}});var a=r(4553),s=r(3150),d=r(7585),l=r(7807),u=r(960),h=r(2377),c=r(5554),p=r(1269),m=function(){function n(t){e(this,n),(0,s.r)(this,t),this.ionWillOpen=(0,s.e)(this,"ionWillOpen",7),this.ionWillClose=(0,s.e)(this,"ionWillClose",7),this.ionDidOpen=(0,s.e)(this,"ionDidOpen",7),this.ionDidClose=(0,s.e)(this,"ionDidClose",7),this.ionMenuChange=(0,s.e)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=u.G.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return i(n,[{key:"typeChanged",value:function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-".concat(e)),n.classList.add("menu-content-".concat(t)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=(0,h.m)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function e(){var n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t.type&&(t.type=d.c.get("menuType","overlay")),n=t.el.parentNode,void 0===t.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),!(i=void 0!==t.contentId?document.getElementById(t.contentId):n&&n.querySelector&&n.querySelector("[main]"))||!i.tagName){e.next=16;break}return t.contentEl=i,i.classList.add("menu-content"),t.typeChanged(t.type,void 0),t.sideChanged(),c.m._register(t),e.next=12,Promise.resolve().then(r.bind(r,9461));case 12:t.gesture=e.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:function(e){return t.canStart(e)},onWillStart:function(){return t.onWillStart()},onStart:function(){return t.onStart()},onMove:function(e){return t.onMove(e)},onEnd:function(e){return t.onEnd(e)}}),t.updateState(),e.next=17;break;case 16:console.error('Menu: must have a "content" element to listen for drag events on.');case 17:case"end":return e.stop()}},e)}))()}},{key:"componentDidLoad",value:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.ionMenuChange.emit({disabled:t.disabled,open:t._isOpen}),t.updateState();case 1:case"end":return e.stop()}},e)}))()}},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),c.m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,t)}},{key:"toggle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,t)}},{key:"setOpen",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return c.m._setOpen(this,t,e)}},{key:"_setOpen",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this;return(0,a.Z)(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(i.t0=!n._isActive()||n.isAnimating||t===n._isOpen,i.t0){i.next=9;break}return n.beforeAnimation(t),i.next=5,n.loadAnimation();case 5:return i.next=7,n.startAnimation(t,e);case 7:n.afterAnimation(t),i.t0=0;case 9:return i.abrupt("return",!i.t0);case 10:case"end":return i.stop()}},i)}))()}},{key:"loadAnimation",value:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.menuInnerEl.offsetWidth,e.t0=n===t.width&&void 0!==t.animation,e.t0){e.next=10;break}return t.width=n,t.animation&&(t.animation.destroy(),t.animation=void 0),e.next=7,c.m._createAnimation(t.type,t);case 7:t.animation=e.sent,d.c.getBoolean("animated",!0)||t.animation.duration(0),t.animation.fill("both");case 10:case"end":return e.stop()}},e)}))()}},{key:"startAnimation",value:function(t,e){var n=this;return(0,a.Z)(regeneratorRuntime.mark(function i(){var o,r,a,s,l;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o=!t,r=(0,d.b)(n),a="ios"===r?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",s="ios"===r?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",l=n.animation.direction(o?"reverse":"normal").easing(o?s:a).onFinish(function(){"reverse"===l.getDirection()&&l.direction("normal")}),!e){i.next=6;break}return i.next=4,l.play();case 4:i.next=7;break;case 6:l.play({sync:!0});case 7:case"end":return i.stop()}},i)}))()}},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!c.m._getOpenSync()&&f(window,t.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,h.l)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(t){if(this.isAnimating&&this.animation){var e=g(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else(0,h.l)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=g(t.deltaX,n,i),r=this.width,a=o/r,s=t.velocityX,d=r/2,u=s>=0&&(s>.2||t.deltaX>d),c=s<=0&&(s<-.2||t.deltaX<-d),p=n?i?u:c:i?c:u,m=!n&&p;n&&!p&&(m=!0),this.lastOnEnd=t.currentTime;var f=p?.001:-.001;f+=(0,l.g)([0,0],[.4,0],[.6,1],[1,1],(0,h.j)(0,a<0?.01:a,.9999))[0]||0;var b=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(function(){return e.afterAnimation(m)},{oneTimeCallback:!0}).progressEnd(b?1:0,this._isOpen?1-f:f,300)}else(0,h.l)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(t){(0,h.l)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(b),this.backdropEl&&this.backdropEl.classList.add(v),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(t){(0,h.l)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(k),this.ionDidOpen.emit()):(this.el.classList.remove(b),this.contentEl&&this.contentEl.classList.remove(k),this.backdropEl&&this.backdropEl.classList.remove(v),this.animation&&this.animation.stop(),this.ionDidClose.emit())}},{key:"updateState",value:function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||c.m._setActiveMenu(this),(0,h.l)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){(0,h.l)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}},{key:"render",value:function(){var e,n=this,i=this.isEndSide,o=this.type,r=this.disabled,a=this.isPaneVisible,l=(0,d.b)(this);return(0,s.h)(s.H,{role:"navigation",class:(e={},t(e,l,!0),t(e,"menu-type-".concat(o),!0),t(e,"menu-enabled",!r),t(e,"menu-side-end",i),t(e,"menu-side-start",!i),t(e,"menu-pane-visible",a),e)},(0,s.h)("div",{class:"menu-inner",part:"container",ref:function(t){return n.menuInnerEl=t}},(0,s.h)("slot",null)),(0,s.h)("ion-backdrop",{ref:function(t){return n.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}}]),n}(),g=function(t,e,n){return Math.max(0,e!==n?-t:t)},f=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},b="show-menu",v="show-backdrop",k="menu-content-open";m.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};var x,y=(x=(0,a.Z)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.m.get(e);case 2:if(n=t.sent,t.t0=!n,t.t0){t.next=8;break}return t.next=7,n.isActive();case 7:t.t0=!t.sent;case 8:return t.abrupt("return",!t.t0);case 9:case"end":return t.stop()}},t)})),function(t){return x.apply(this,arguments)}),w=function(){function n(t){e(this,n);var i=this;(0,s.r)(this,t),this.inheritedAttributes={},this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=(0,a.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.m.toggle(i.menu));case 1:case"end":return t.stop()}},t)}))}return i(n,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,h.i)(this.el,["aria-label"])}},{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.menu);case 2:t.visible=e.sent;case 3:case"end":return e.stop()}},e)}))()}},{key:"render",value:function(){var e,n=this.color,i=this.disabled,o=this.inheritedAttributes,r=(0,d.b)(this),a=d.c.get("menuIcon","ios"===r?"menu-outline":"menu-sharp"),l=this.autoHide&&!this.visible,u={type:this.type},h=o["aria-label"]||"menu";return(0,s.h)(s.H,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":l?"true":null,class:(0,p.c)(n,(e={},t(e,r,!0),t(e,"button",!0),t(e,"menu-button-hidden",l),t(e,"menu-button-disabled",i),t(e,"in-toolbar",(0,p.h)("ion-toolbar",this.el)),t(e,"in-toolbar-color",(0,p.h)("ion-toolbar[color]",this.el)),t(e,"ion-activatable",!0),t(e,"ion-focusable",!0),e))},(0,s.h)("button",Object.assign({},u,{disabled:i,class:"button-native",part:"native","aria-label":h}),(0,s.h)("span",{class:"button-inner"},(0,s.h)("slot",null,(0,s.h)("ion-icon",{part:"icon",icon:a,mode:r,lazy:!1,"aria-hidden":"true"}))),"md"===r&&(0,s.h)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function(){return(0,s.i)(this)}}]),n}();w.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var C=function(){function n(t){var i=this;e(this,n),(0,s.r)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return c.m.toggle(i.menu)}}return i(n,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.menu);case 2:t.visible=e.sent;case 3:case"end":return e.stop()}},e)}))()}},{key:"render",value:function(){var e,n=(0,d.b)(this),i=this.autoHide&&!this.visible;return(0,s.h)(s.H,{onClick:this.onClick,"aria-hidden":i?"true":null,class:(e={},t(e,n,!0),t(e,"menu-toggle-hidden",i),e)},(0,s.h)("slot",null))}}]),n}();C.style=":host(.menu-toggle-hidden){display:none}"}}])}();