!function(){"use strict";(self.webpackChunkAppMovil=self.webpackChunkAppMovil||[]).push([[1296],{1296:function(t,n,e){e.r(n),e.d(n,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return y},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return a},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return s},trackViewportChanges:function(){return v}});var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},f=!1,a=function(){r={},u={},f=!1},s=function(t){c(t),t.visualViewport&&(u=y(t.visualViewport),t.visualViewport.onresize=function(){v(t),p()||b(t)?d(t):g(t)&&h(t)})},c=function(t){t.addEventListener("keyboardDidShow",function(n){return d(t,n)}),t.addEventListener("keyboardDidHide",function(){return h(t)})},d=function(t,n){w(t,n),f=!0},h=function(t){l(t),f=!1},p=function(){return!f&&r.width===u.width&&(r.height-u.height)*u.scale>150},b=function(t){return f&&!g(t)},g=function(t){return f&&u.height===t.innerHeight},w=function(t,n){var e=new CustomEvent(i,{detail:{keyboardHeight:n?n.keyboardHeight:t.innerHeight-u.height}});t.dispatchEvent(e)},l=function(t){var n=new CustomEvent(o);t.dispatchEvent(n)},v=function(t){r=Object.assign({},u),u=y(t.visualViewport)},y=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}])}();