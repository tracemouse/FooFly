(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{OlGY:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("mrSG"),o=t("ZZ/e"),i=t("aR35"),s=function(){function l(l,n,t){this.httpClient=l,this.alertController=n,this.translateService=t,this.versionApp=i.a.version,this.versionPlugin=i.a.settings.versionPlugin,this.reading=!1,this.officalSite="musicbee-fly.tracemouse.top"}return l.prototype.ngOnInit=function(){var l=this;this.translateService.get("message").subscribe(function(n){l.message=n})},l.prototype.ionViewDidEnter=function(){this.versionApp=i.a.version,this.versionPlugin=i.a.settings.versionPlugin},l.prototype.checkUpdate=function(){return e.b(this,void 0,void 0,function(){var l,n=this;return e.e(this,function(t){return this.reading=!0,this.httpClient.get(l=i.a.fooflyOffical+"assets/version.json").subscribe(function(l){return n.reading=!1,console.log(l),n.versionApp==l.app?void n.presentAlert(n.message.info,"",n.message["info-update-msg1"],n.message.ok):void n.presentAlert(n.message.info,"",n.message["info-update-msg5"],n.message.ok)},function(t){n.reading=!1,console.log("failed to get the json file from "+l),n.presentAlert(n.message.error,"",n.message["err-update-fail"],n.message.ok)}),[2]})})},l.prototype.presentAlert=function(l,n,t,u,o){return void 0===o&&(o=null),e.b(this,void 0,void 0,function(){var i;return e.e(this,function(e){switch(e.label){case 0:return[4,this.alertController.create({header:l,subHeader:n,message:t,buttons:[u]})];case 1:return(i=e.sent()).onDidDismiss().then(function(l){o&&o()}),[4,i.present()];case 2:return e.sent(),[2]}})})},l.prototype.reload=function(){window.location.reload()},l}(),r=function(){return function(){}}(),b=t("pMnS"),a=t("oBZk"),c=t("ZYCi"),g=t("Ip0R"),h=t("A7o+"),p=t("t/Na"),f=u.rb({encapsulation:0,styles:[[".header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.logo[_ngcontent-%COMP%]{width:100px}.logo-box[_ngcontent-%COMP%]{margin:20px auto 0;text-align:center}.logo-title[_ngcontent-%COMP%]{text-align:center;font-size:1.2rem;font-weight:700;height:18px}.logo-subtitle[_ngcontent-%COMP%]{text-align:center;font-size:.7rem;height:10px}"]],data:{}});function m(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,1,"ion-spinner",[["name","lines-small"],["slot","end"]],null,null,null,a.mb,a.C)),u.sb(1,49152,null,0,o.rb,[u.h,u.k,u.z],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"lines-small")},null)}function d(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,14,"ion-header",[["mode","ios"]],null,null,null,a.T,a.j)),u.sb(1,49152,null,0,o.B,[u.h,u.k,u.z],{mode:[0,"mode"]},null),(l()(),u.tb(2,0,null,0,12,"ion-toolbar",[["class","header-toolbar"]],null,null,null,a.tb,a.J)),u.sb(3,49152,null,0,o.Bb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,1,"ion-title",[],null,null,null,a.rb,a.H)),u.sb(5,49152,null,0,o.zb,[u.h,u.k,u.z],null,null),(l()(),u.tb(6,0,null,0,8,"ion-buttons",[["slot","start"]],null,null,null,a.N,a.d)),u.sb(7,49152,null,0,o.l,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,6,"ion-button",[["color","danger"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Fb(l,10).onClick()&&e),"click"===n&&(e=!1!==u.Fb(l,12).onClick(t)&&e),e},a.M,a.c)),u.sb(9,49152,null,0,o.k,[u.h,u.k,u.z],{color:[0,"color"]},null),u.sb(10,16384,null,0,c.n,[c.m,c.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Gb(11,1),u.sb(12,737280,null,0,o.Lb,[g.g,o.Hb,u.k,c.m,[2,c.n]],null,null),(l()(),u.tb(13,0,null,0,1,"ion-icon",[["name","ios-arrow-back"]],null,null,null,a.U,a.k)),u.sb(14,49152,null,0,o.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.tb(15,0,null,null,30,"ion-content",[],null,null,null,a.R,a.h)),u.sb(16,49152,null,0,o.u,[u.h,u.k,u.z],null,null),(l()(),u.tb(17,0,null,0,1,"div",[["class","logo-box"]],null,null,null,null,null)),(l()(),u.tb(18,0,null,null,0,"img",[["class","logo"],["src","assets/img/cover.jpg"]],null,null,null,null,null)),(l()(),u.tb(19,0,null,0,1,"p",[["class","logo-title"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Foofly"])),(l()(),u.tb(21,0,null,0,1,"p",[["class","logo-subtitle"]],null,null,null,null,null)),(l()(),u.Mb(22,null,["Version : "," "])),(l()(),u.tb(23,0,null,0,4,"p",[["class","logo-subtitle"]],null,null,null,null,null)),(l()(),u.Mb(24,null,[""," : "])),u.Hb(131072,h.i,[h.j,u.h]),(l()(),u.tb(26,0,null,null,1,"a",[["href","mailto:"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["tracemouse"])),(l()(),u.tb(28,0,null,0,17,"ion-list",[["lines","none"]],null,null,null,a.bb,a.q)),u.sb(29,49152,null,0,o.O,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(l()(),u.tb(30,0,null,0,1,"ion-item",[],null,null,null,a.Y,a.o)),u.sb(31,49152,null,0,o.H,[u.h,u.k,u.z],null,null),(l()(),u.tb(32,0,null,0,7,"ion-item",[["button",""],["target","_blank"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.checkUpdate()&&u),u},a.Y,a.o)),u.sb(33,49152,null,0,o.H,[u.h,u.k,u.z],{button:[0,"button"],target:[1,"target"]},null),(l()(),u.tb(34,0,null,0,3,"ion-label",[],null,null,null,a.Z,a.p)),u.sb(35,49152,null,0,o.N,[u.h,u.k,u.z],null,null),(l()(),u.Mb(36,0,["",""])),u.Hb(131072,h.i,[h.j,u.h]),(l()(),u.ib(16777216,null,0,1,null,m)),u.sb(39,16384,null,0,g.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(40,0,null,0,5,"ion-item",[["button",""],["href","https://github.com/tracemouse/FooFly"],["target","_blank"]],null,null,null,a.Y,a.o)),u.sb(41,49152,null,0,o.H,[u.h,u.k,u.z],{button:[0,"button"],href:[1,"href"],target:[2,"target"]},null),(l()(),u.tb(42,0,null,0,3,"ion-label",[],null,null,null,a.Z,a.p)),u.sb(43,49152,null,0,o.N,[u.h,u.k,u.z],null,null),(l()(),u.Mb(44,0,["",""])),u.Hb(131072,h.i,[h.j,u.h])],function(l,n){var t=n.component;l(n,1,0,"ios"),l(n,9,0,"danger");var u=l(n,11,0,"/tabs/tab4");l(n,10,0,u),l(n,12,0),l(n,14,0,"ios-arrow-back"),l(n,29,0,"none"),l(n,33,0,"","_blank"),l(n,39,0,t.reading),l(n,41,0,"","https://github.com/tracemouse/FooFly","_blank")},function(l,n){l(n,22,0,n.component.versionApp),l(n,24,0,u.Nb(n,24,0,u.Fb(n,25).transform("tab4.author"))),l(n,36,0,u.Nb(n,36,0,u.Fb(n,37).transform("tab4.lbl-update"))),l(n,44,0,u.Nb(n,44,0,u.Fb(n,45).transform("tab4.lbl-help")))})}function k(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,1,"app-about",[],null,null,null,d,f)),u.sb(1,114688,null,0,s,[p.c,o.b,h.j],null,null)],function(l,n){l(n,1,0)},null)}var v=u.pb("app-about",s,k,{},{},[]),D=t("gIcY");t.d(n,"AboutPageModuleNgFactory",function(){return z});var z=u.qb(r,[],function(l){return u.Cb([u.Db(512,u.j,u.bb,[[8,[b.a,v]],[3,u.j],u.x]),u.Db(4608,g.l,g.k,[u.u,[2,g.v]]),u.Db(4608,D.o,D.o,[]),u.Db(4608,o.c,o.c,[u.z,u.g]),u.Db(4608,o.Gb,o.Gb,[o.c,u.j,u.q]),u.Db(4608,o.Kb,o.Kb,[o.c,u.j,u.q]),u.Db(1073742336,g.b,g.b,[]),u.Db(1073742336,D.n,D.n,[]),u.Db(1073742336,D.d,D.d,[]),u.Db(1073742336,o.Db,o.Db,[]),u.Db(1073742336,h.g,h.g,[]),u.Db(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),u.Db(1073742336,r,r,[]),u.Db(1024,c.k,function(){return[[{path:"",component:s}]]},[])])})}}]);