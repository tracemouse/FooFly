(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{OlGY:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("mrSG"),o=t("ZZ/e"),i=t("aR35"),r=function(){function l(l,n,t,u){this.httpClient=l,this.alertController=n,this.navController=t,this.translateService=u,this.versionApp=i.a.version,this.versionPlugin=i.a.settings.versionPlugin,this.reading=!1,this.officalSite="musicbee-fly.tracemouse.top"}return l.prototype.ngOnInit=function(){var l=this;this.translateService.get("message").subscribe(function(n){l.message=n})},l.prototype.ionViewDidEnter=function(){this.versionApp=i.a.version,this.versionPlugin=i.a.settings.versionPlugin},l.prototype.checkUpdate=function(){return e.b(this,void 0,void 0,function(){var l,n=this;return e.e(this,function(t){return this.reading=!0,this.httpClient.get(l=i.a.fooflyOffical+"version.json").subscribe(function(l){return n.reading=!1,console.log(l),n.versionApp==l.app?void n.presentAlert(n.message.info,"",n.message["info-update-msg1"],n.message.ok):void n.presentAlert(n.message.info,"",n.message["info-update-msg5"],n.message.ok)},function(t){n.reading=!1,console.log("failed to get the json file from "+l),n.presentAlert(n.message.error,"",n.message["err-update-fail"],n.message.ok)}),[2]})})},l.prototype.presentAlert=function(l,n,t,u,o){return void 0===o&&(o=null),e.b(this,void 0,void 0,function(){var i;return e.e(this,function(e){switch(e.label){case 0:return[4,this.alertController.create({header:l,subHeader:n,message:t,buttons:[u]})];case 1:return(i=e.sent()).onDidDismiss().then(function(l){o&&o()}),[4,i.present()];case 2:return e.sent(),[2]}})})},l.prototype.reload=function(){window.location.reload()},l.prototype.back=function(){this.navController.back()},l}(),s=function(){return function(){}}(),b=t("pMnS"),a=t("oBZk"),c=t("A7o+"),g=t("Ip0R"),p=t("t/Na"),h=u.rb({encapsulation:0,styles:[[".header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.logo[_ngcontent-%COMP%]{width:100px}.logo-box[_ngcontent-%COMP%]{margin:20px auto 0;text-align:center}.logo-title[_ngcontent-%COMP%]{text-align:center;font-size:1.2rem;font-weight:700;height:18px}.logo-subtitle[_ngcontent-%COMP%]{text-align:center;font-size:.7rem;height:10px}"]],data:{}});function f(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,1,"ion-spinner",[["name","lines-small"],["slot","end"]],null,null,null,a.mb,a.C)),u.sb(1,49152,null,0,o.rb,[u.h,u.k,u.z],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"lines-small")},null)}function m(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,11,"ion-header",[["mode","ios"]],null,null,null,a.T,a.j)),u.sb(1,49152,null,0,o.B,[u.h,u.k,u.z],{mode:[0,"mode"]},null),(l()(),u.tb(2,0,null,0,9,"ion-toolbar",[["class","header-toolbar"]],null,null,null,a.tb,a.J)),u.sb(3,49152,null,0,o.Bb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,1,"ion-title",[],null,null,null,a.rb,a.H)),u.sb(5,49152,null,0,o.zb,[u.h,u.k,u.z],null,null),(l()(),u.tb(6,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,a.N,a.d)),u.sb(7,49152,null,0,o.l,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,3,"ion-button",[["color","danger"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.back()&&u),u},a.M,a.c)),u.sb(9,49152,null,0,o.k,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(10,0,null,0,1,"ion-icon",[["name","ios-arrow-back"]],null,null,null,a.U,a.k)),u.sb(11,49152,null,0,o.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.tb(12,0,null,null,30,"ion-content",[],null,null,null,a.R,a.h)),u.sb(13,49152,null,0,o.u,[u.h,u.k,u.z],null,null),(l()(),u.tb(14,0,null,0,1,"div",[["class","logo-box"]],null,null,null,null,null)),(l()(),u.tb(15,0,null,null,0,"img",[["class","logo"],["src","assets/img/logo.jpg"]],null,null,null,null,null)),(l()(),u.tb(16,0,null,0,1,"p",[["class","logo-title"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Foofly"])),(l()(),u.tb(18,0,null,0,1,"p",[["class","logo-subtitle"]],null,null,null,null,null)),(l()(),u.Mb(19,null,["Version : "," "])),(l()(),u.tb(20,0,null,0,4,"p",[["class","logo-subtitle"]],null,null,null,null,null)),(l()(),u.Mb(21,null,[""," : "])),u.Hb(131072,c.i,[c.j,u.h]),(l()(),u.tb(23,0,null,null,1,"a",[["href","mailto:"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["tracemouse"])),(l()(),u.tb(25,0,null,0,17,"ion-list",[["lines","none"]],null,null,null,a.bb,a.q)),u.sb(26,49152,null,0,o.O,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(l()(),u.tb(27,0,null,0,1,"ion-item",[],null,null,null,a.Y,a.o)),u.sb(28,49152,null,0,o.H,[u.h,u.k,u.z],null,null),(l()(),u.tb(29,0,null,0,7,"ion-item",[["button",""],["target","_blank"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.checkUpdate()&&u),u},a.Y,a.o)),u.sb(30,49152,null,0,o.H,[u.h,u.k,u.z],{button:[0,"button"],target:[1,"target"]},null),(l()(),u.tb(31,0,null,0,3,"ion-label",[],null,null,null,a.Z,a.p)),u.sb(32,49152,null,0,o.N,[u.h,u.k,u.z],null,null),(l()(),u.Mb(33,0,["",""])),u.Hb(131072,c.i,[c.j,u.h]),(l()(),u.ib(16777216,null,0,1,null,f)),u.sb(36,16384,null,0,g.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(37,0,null,0,5,"ion-item",[["button",""],["href","https://github.com/tracemouse/FooFly"],["target","_blank"]],null,null,null,a.Y,a.o)),u.sb(38,49152,null,0,o.H,[u.h,u.k,u.z],{button:[0,"button"],href:[1,"href"],target:[2,"target"]},null),(l()(),u.tb(39,0,null,0,3,"ion-label",[],null,null,null,a.Z,a.p)),u.sb(40,49152,null,0,o.N,[u.h,u.k,u.z],null,null),(l()(),u.Mb(41,0,["",""])),u.Hb(131072,c.i,[c.j,u.h])],function(l,n){var t=n.component;l(n,1,0,"ios"),l(n,9,0,"danger"),l(n,11,0,"ios-arrow-back"),l(n,26,0,"none"),l(n,30,0,"","_blank"),l(n,36,0,t.reading),l(n,38,0,"","https://github.com/tracemouse/FooFly","_blank")},function(l,n){l(n,19,0,n.component.versionApp),l(n,21,0,u.Nb(n,21,0,u.Fb(n,22).transform("tab4.author"))),l(n,33,0,u.Nb(n,33,0,u.Fb(n,34).transform("tab4.lbl-update"))),l(n,41,0,u.Nb(n,41,0,u.Fb(n,42).transform("tab4.lbl-help")))})}function d(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,1,"app-about",[],null,null,null,m,h)),u.sb(1,114688,null,0,r,[p.c,o.b,o.Hb,c.j],null,null)],function(l,n){l(n,1,0)},null)}var k=u.pb("app-about",r,d,{},{},[]),v=t("gIcY"),D=t("ZYCi");t.d(n,"AboutPageModuleNgFactory",function(){return z});var z=u.qb(s,[],function(l){return u.Cb([u.Db(512,u.j,u.bb,[[8,[b.a,k]],[3,u.j],u.x]),u.Db(4608,g.l,g.k,[u.u,[2,g.v]]),u.Db(4608,v.o,v.o,[]),u.Db(4608,o.c,o.c,[u.z,u.g]),u.Db(4608,o.Gb,o.Gb,[o.c,u.j,u.q]),u.Db(4608,o.Kb,o.Kb,[o.c,u.j,u.q]),u.Db(1073742336,g.b,g.b,[]),u.Db(1073742336,v.n,v.n,[]),u.Db(1073742336,v.d,v.d,[]),u.Db(1073742336,o.Db,o.Db,[]),u.Db(1073742336,c.g,c.g,[]),u.Db(1073742336,D.o,D.o,[[2,D.t],[2,D.m]]),u.Db(1073742336,s,s,[]),u.Db(1024,D.k,function(){return[[{path:"",component:r}]]},[])])})}}]);