(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"f+ep":function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=l("mrSG"),i=l("ZZ/e"),u=l("aR35"),r=l("avBb"),s=l("4EUy"),a=function(){function n(n,t,l,e,o,i,r){var s=this;this.navCtrl=n,this.translateService=t,this.alertController=l,this.myDBService=e,this.activeRoute=o,this.myHttpService=i,this.loadingController=r,this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.inputPassword=u.a.settings.password,this.loginDisabled=!1,this.loadingDuration=6e4,this.bandIps=["foofly.tracemouse.top"],this.activeRoute.queryParams.subscribe(function(n){s.from=n.from})}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){return this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.inputPassword=u.a.settings.password,this.bandIps.indexOf(this.inputIp)>=0&&(this.inputIp="",this.inputPort=""),"exit"==this.from?[2]:(this.testConn(u.a.settings.rootUrl),[2])})})},n.prototype.initLoading=function(){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(t){switch(t.label){case 0:return n=this,[4,this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return n.loading=t.sent(),[2]}})})},n.prototype.logIn=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.initLoading()];case 1:return n.sent(),[4,this.loading.present()];case 2:return n.sent(),u.a.settings.ip=this.inputIp,u.a.settings.port=this.inputPort,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,this.myDBService.saveSettingsData(),this.loginDisabled=!0,this.testConn(u.a.settings.protocol+"//"+this.inputIp+":"+this.inputPort),[2]}})})},n.prototype.getIp=function(n){this.inputIp=n.value},n.prototype.getPort=function(n){this.inputPort=n.value},n.prototype.getPassword=function(n){this.inputPassword=n.value},n.prototype.testConn=function(n){return o.b(this,void 0,void 0,function(){var t;return o.e(this,function(l){return n=n+u.a.urlRoot+"assets/version.js",(t=document.createElement("script")).setAttribute("id","testConnScript"),t.onload=function(n){document.getElementById("testConnScript").remove();var t=document.getElementById("connCheckbox");t.setAttribute("conn","true"),t.shadowRoot.lastElementChild.click()},t.onerror=function(){document.getElementById("testConnScript").remove();var n=document.getElementById("connCheckbox");n.setAttribute("conn","false"),n.shadowRoot.lastElementChild.click()},t.setAttribute("src",n),document.getElementsByTagName("head")[0].appendChild(t),[2]})})},n.prototype.connChanged=function(n){var t=n.srcElement.getAttribute("conn");this.loginDisabled=!1,null!=this.loading&&this.loading.dismiss(),"true"==t?"dev"==u.a.env?this.navCtrl.navigateForward("/tabs/tab1"):location.href=u.a.settings.rootUrl+"/foofly/index.html#/tabs/tab1":this.presentConnError()},n.prototype.presentConnError=function(){return o.b(this,void 0,void 0,function(){var n,t,l=this;return o.e(this,function(e){switch(e.label){case 0:return[4,this.translateService.get("message").subscribe(function(t){n=t})];case 1:return e.sent(),[4,this.alertController.create({header:n.error,subHeader:n["err-conn-fail"],message:n["err-conn-fail-msg"],buttons:[n.ok]})];case 2:return(t=e.sent()).onDidDismiss().then(function(n){l.loginDisabled=!1}),[4,t.present()];case 3:return e.sent(),[2]}})})},n}(),c=function(){return function(){}}(),b=l("pMnS"),p=l("oBZk"),h=l("A7o+"),d=l("gIcY"),g=l("ZYCi"),m=e.rb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{padding-right:16px}.header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.lbl-button[_ngcontent-%COMP%]{margin-top:15px}.button[_ngcontent-%COMP%]{--border-radius:25px!important}.logo[_ngcontent-%COMP%]{width:100px}.logo-box[_ngcontent-%COMP%]{margin:0 auto 15px;text-align:center}"]],data:{}});function f(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,3,"ion-header",[],null,null,null,p.T,p.j)),e.sb(1,49152,null,0,i.B,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,1,"ion-toolbar",[["class","header-toolbar"],["translucent",""]],null,null,null,p.tb,p.J)),e.sb(3,49152,null,0,i.Bb,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,null,43,"ion-content",[],null,null,null,p.R,p.h)),e.sb(5,49152,null,0,i.u,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,37,"ion-list",[],null,null,null,p.bb,p.q)),e.sb(7,49152,null,0,i.O,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,1,"div",[["class","logo-box"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,null,0,"img",[["class","logo"],["src","assets/img/cover.jpg"]],null,null,null,null,null)),(n()(),e.tb(10,0,null,0,12,"ion-item",[["class","mb-input"]],null,null,null,p.Y,p.o)),e.sb(11,49152,null,0,i.H,[e.h,e.k,e.z],null,null),(n()(),e.tb(12,0,null,0,6,"ion-label",[["position","floating"]],null,null,null,p.Z,p.p)),e.sb(13,49152,null,0,i.N,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Mb(14,0,[""," "])),e.Hb(131072,h.i,[h.j,e.h]),(n()(),e.tb(16,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,p.qb,p.G)),e.sb(17,49152,null,0,i.wb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Mb(-1,0,["*"])),(n()(),e.tb(19,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","ip"],["placeholder","192.168.1.10"],["required","true"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var o=!0,i=n.component;return"ionBlur"===t&&(o=!1!==e.Fb(n,22)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Fb(n,22)._handleInputEvent(l.target)&&o),"ionBlur"===t&&(o=!1!==i.getIp(e.Fb(n,21))&&o),o},p.X,p.n)),e.Jb(5120,null,d.g,function(n){return[n]},[i.Nb]),e.sb(21,49152,[["ip",4]],0,i.G,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"],value:[5,"value"]},null),e.sb(22,16384,null,0,i.Nb,[e.k],null,null),(n()(),e.tb(23,0,null,0,12,"ion-item",[["class","mb-input"]],null,null,null,p.Y,p.o)),e.sb(24,49152,null,0,i.H,[e.h,e.k,e.z],null,null),(n()(),e.tb(25,0,null,0,6,"ion-label",[["position","floating"]],null,null,null,p.Z,p.p)),e.sb(26,49152,null,0,i.N,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Mb(27,0,[""," "])),e.Hb(131072,h.i,[h.j,e.h]),(n()(),e.tb(29,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,p.qb,p.G)),e.sb(30,49152,null,0,i.wb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Mb(-1,0,["*"])),(n()(),e.tb(32,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","tel"],["maxlength","5"],["minlength","2"],["pattern","[0-9]*"],["placeholder","8888"],["required","true"],["type","tel"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var o=!0,i=n.component;return"ionBlur"===t&&(o=!1!==e.Fb(n,35)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Fb(n,35)._handleInputEvent(l.target)&&o),"ionBlur"===t&&(o=!1!==i.getPort(e.Fb(n,34))&&o),o},p.X,p.n)),e.Jb(5120,null,d.g,function(n){return[n]},[i.Nb]),e.sb(34,49152,[["port",4]],0,i.G,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],minlength:[3,"minlength"],pattern:[4,"pattern"],placeholder:[5,"placeholder"],required:[6,"required"],type:[7,"type"],value:[8,"value"]},null),e.sb(35,16384,null,0,i.Nb,[e.k],null,null),(n()(),e.tb(36,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,p.Y,p.o)),e.sb(37,49152,null,0,i.H,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(n()(),e.tb(38,0,null,0,5,"ion-label",[["class","lbl-button"]],null,null,null,p.Z,p.p)),e.sb(39,49152,null,0,i.N,[e.h,e.k,e.z],null,null),(n()(),e.tb(40,0,null,0,3,"ion-button",[["class","button"],["color","danger"],["expand","block"],["size","default"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.logIn()&&e),e},p.M,p.c)),e.sb(41,49152,null,0,i.k,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],size:[3,"size"]},null),(n()(),e.Mb(42,0,["",""])),e.Hb(131072,h.i,[h.j,e.h]),(n()(),e.tb(44,0,null,0,3,"ion-checkbox",[["id","connCheckbox"],["style","display:none"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,t,l){var o=!0,i=n.component;return"ionBlur"===t&&(o=!1!==e.Fb(n,47)._handleBlurEvent(l.target)&&o),"ionChange"===t&&(o=!1!==e.Fb(n,47)._handleIonChange(l.target)&&o),"ionChange"===t&&(o=!1!==i.connChanged(l)&&o),o},p.P,p.f)),e.Jb(5120,null,d.g,function(n){return[n]},[i.d]),e.sb(46,49152,null,0,i.r,[e.h,e.k,e.z],null,null),e.sb(47,16384,null,0,i.d,[e.k],null,null)],function(n,t){var l=t.component;n(t,13,0,"floating"),n(t,17,0,"danger"),n(t,21,0,"","ip","192.168.1.10","true","text",e.xb(1,"",l.inputIp,"")),n(t,26,0,"floating"),n(t,30,0,"danger"),n(t,34,0,"","tel","5","2","[0-9]*","8888","true","tel",e.xb(1,"",l.inputPort,"")),n(t,37,0,"none"),n(t,41,0,"danger",e.xb(1,"",l.loginDisabled,""),"block","default")},function(n,t){n(t,14,0,e.Nb(t,14,0,e.Fb(t,15).transform("common.ip"))),n(t,27,0,e.Nb(t,27,0,e.Fb(t,28).transform("common.port"))),n(t,42,0,e.Nb(t,42,0,e.Fb(t,43).transform("login.button-text")))})}function v(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"app-login",[],null,null,null,f,m)),e.sb(1,114688,null,0,a,[i.Hb,h.j,i.b,r.a,g.a,s.a,i.Fb],null,null)],function(n,t){n(t,1,0)},null)}var C=e.pb("app-login",a,v,{},{},[]),k=l("Ip0R");l.d(t,"LoginPageModuleNgFactory",function(){return y});var y=e.qb(c,[],function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[b.a,C]],[3,e.j],e.x]),e.Db(4608,k.l,k.k,[e.u,[2,k.v]]),e.Db(4608,d.o,d.o,[]),e.Db(4608,i.c,i.c,[e.z,e.g]),e.Db(4608,i.Gb,i.Gb,[i.c,e.j,e.q]),e.Db(4608,i.Kb,i.Kb,[i.c,e.j,e.q]),e.Db(1073742336,k.b,k.b,[]),e.Db(1073742336,d.n,d.n,[]),e.Db(1073742336,d.d,d.d,[]),e.Db(1073742336,i.Db,i.Db,[]),e.Db(1073742336,h.g,h.g,[]),e.Db(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),e.Db(1073742336,c,c,[]),e.Db(1024,g.k,function(){return[[{path:"",component:a}]]},[])])})}}]);