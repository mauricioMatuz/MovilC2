!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkAppMovil=self.webpackChunkAppMovil||[]).push([[8959],{8959:function(t,o,c){c.r(o),c.d(o,{ProductsPageModule:function(){return m}});var i,r=c(8583),u=c(665),a=c(2859),s=c(5496),l=c(3018),f=c(4568),p=c(7556),g=c(3602),d=[{path:"",component:(i=function(){function t(e,o,c,i){n(this,t),this.barcodeScanner=e,this.auths=o,this.router=c,this.message=i}var o,c,i;return o=t,(c=[{key:"ngOnInit",value:function(){}},{key:"elQR",value:function(){console.log("Sapo"),this.barcodeScanner.scan().then(function(n){console.log("Barcode data",n)}).catch(function(n){console.log("Error",n)})}},{key:"loguts",value:function(){console.log("SI ENTRO XD "),this.auths.logut(),this.message.presentToast("LO ESPERAMOS NUEVAMENTE.."),this.router.navigate(["/home"])}}])&&e(o.prototype,c),i&&e(o,i),t}(),i.\u0275fac=function(n){return new(n||i)(l.Y36(f.m),l.Y36(p.e),l.Y36(s.F0),l.Y36(g.k))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-products"]],decls:16,vars:0,consts:[["slot","end",3,"click"],["name","exit-outline"],[2,"text-align","center !important"],["src","https://compass-ssl.xbox.com/assets/b7/6e/b76e2acc-f0da-45b6-b8c6-8ee352c53d70.jpg?n=115115115115_Super-Hero-1400_Multiplayer_1920x1080.jpg","alt",""],["expand","block",3,"click"],["slot","icon-only","name","qr-code-outline"]],template:function(n,e){1&n&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3,"Videojuegos"),l.qZA(),l.TgZ(4,"ion-button",0),l.NdJ("click",function(){return e.loguts()}),l._UZ(5,"ion-icon",1),l._uU(6," Cerrar Sesion "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content",2),l.TgZ(8,"ion-slide"),l.TgZ(9,"ion-card"),l._UZ(10,"img",3),l.qZA(),l.qZA(),l._UZ(11,"br"),l.TgZ(12,"h1"),l._uU(13," NOMBRE DEL PRODUCTO "),l.qZA(),l.TgZ(14,"ion-button",4),l.NdJ("click",function(){return e.elQR()}),l._UZ(15,"ion-icon",5),l.qZA(),l.qZA())},directives:[a.Gu,a.sr,a.wd,a.YG,a.gu,a.W2,a.A$,a.PM],styles:[""]}),i)}],h=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),e}(),Z=c(6479),m=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.ez,u.u5,a.Pc,Z.c,h]]}),e}()}}])}();