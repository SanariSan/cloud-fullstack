(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{126:function(e,t,n){e.exports={root:"test_root__1el9x",ui:"test_ui__9KzYZ",segment:"test_segment__1n5ql",image:"test_image__3hNus",mini:"test_mini__3CKUY",dropdown:"test_dropdown__38RTH",floating:"test_floating__2wWZ2",menu:"test_menu__1VHBo",item:"test_item__AC-3l",button:"test_button__uSPyk",container:"test_container__2XsHE","container-fluid":"test_container-fluid__2f77s",rect:"test_rect__mSHEX"}},149:function(e,t,n){e.exports={App:"App_App__15LM-"}},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);n(171);var a,r=n(43),c=n(0),o=n.n(c),s=n(63),i=n.n(s),u=n(216),l=(n(176),n(8)),d=n(149),p=n.n(d),j=n(1),f=function(){return Object(j.jsx)("div",{className:"",children:"Not Found or No Rights to access"})},b=n(6),h=n(9),O=n.n(h),m=n(13),x=n(16),g=n(225),_=n(217),v=n(222),w=n(68),k=n(218),y=n(150),S=n(151),C=n(158),A=n(156),T=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(e){var r;return Object(y.a)(this,n),r=t.call(this,e),a=e.history,r}return Object(S.a)(n,[{key:"render",value:function(){return null}}]),n}(o.a.Component),N=Object(u.d)(T);function E(e){if(!a)throw new Error("No history Object. You probably forgot to mount ReactRouterGlobalHistory");a.push(e)}var I,B,R=function(e){var t=e.handleLogin,n=(e.errMessage,e.setErrMessage,Object(c.useState)("")),a=Object(x.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(x.a)(s,2),u=i[0],l=i[1];return Object(j.jsxs)(_.a,{children:[Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/panel")},children:[Object(j.jsx)(w.a,{name:"lock"}),"Panel"]}),Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/auth/register")},children:[Object(j.jsx)(w.a,{name:"lock"}),"Register"]}),Object(j.jsx)(k.a,{label:"login",value:r,onChange:function(e){return o(e.currentTarget.value)}}),Object(j.jsx)(k.a,{label:"password",value:u,onChange:function(e){return l(e.currentTarget.value)}}),Object(j.jsx)(g.a,{active:!0,onClick:function(){return t(r,u)},children:"Register"})]})},M=function(e){var t=e.handleRegister,n=(e.errMessage,e.setErrMessage,Object(c.useState)("")),a=Object(x.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(x.a)(s,2),u=i[0],l=i[1];return Object(j.jsxs)(_.a,{children:[Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/panel")},children:[Object(j.jsx)(w.a,{name:"lock"}),"Panel"]}),Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/auth/login")},children:[Object(j.jsx)(w.a,{name:"lock"}),"Login"]}),Object(j.jsx)(k.a,{label:"login",value:r,onChange:function(e){return o(e.currentTarget.value)}}),Object(j.jsx)(k.a,{label:"password",value:u,onChange:function(e){return l(e.currentTarget.value)}}),Object(j.jsx)(g.a,{active:!0,onClick:function(){return t(r,u)},children:"Register"})]})},G=function(e){var t=window.localStorage.getItem(e),n=null;try{n=t?JSON.parse(t):null}catch(a){console.warn("No key in local storage, please clear cookies and refresh")}return n},U=function(e,t){var n=JSON.stringify(t);window.localStorage.setItem(e,n)},F=function(){var e=G("accessToken");return{Authorization:"Bearer ".concat(e)}},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(e,"/").concat(encodeURIComponent(t))},J={accessToken:G("accessToken"),refreshToken:G("refreshToken")},z=l.Atom.of(J),L=n(21),P=function(e,t){U("accessToken",e),U("refreshToken",t),Object(L.swap)(z,(function(n){return{accessToken:e,refreshToken:t}}))},X=function(){var e=Object(m.a)(O.a.mark((function e(){var t,n,a,r,c,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(l.deref)(z),t.accessToken,!(n=t.refreshToken)){e.next=10;break}return e.next=4,$({refreshToken:n}).catch((function(e){console.warn("Could not refresh ",e)}));case 4:if(!((a=e.sent)&&a.data&&a.data.accessToken&&a.data.refreshToken)){e.next=10;break}return r=a.data,c=r.accessToken,o=r.refreshToken,P(c,o),E("/auth"),e.abrupt("return");case 10:P(null,null),E("/auth");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e.SUCCESS="3000",e.FAILURE="3001",e.INVALID_ACCESS_TOKEN="3002"}(I||(I={})),function(e){e[e.SUCCESS=200]="SUCCESS",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR"}(B||(B={}));var K=function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"!==typeof t.data){e.next=5;break}return n={code:t.data.statusCode,message:t.data.message,data:t.data.data},e.abrupt("return",n);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response){e.next=36;break}if(!(t.response.status&&t.response.data.statusCode&&t.response.data.message)){e.next=34;break}if(n={status:t.response.status,code:t.response.data.statusCode,message:t.response.data.message},console.warn(n),n.code!==I.INVALID_ACCESS_TOKEN){e.next=11;break}return e.next=7,X();case 7:throw console.log(1),n;case 11:if(n.code!==I.FAILURE){e.next=32;break}if(n.status!==B.UNAUTHORIZED){e.next=19;break}return e.next=15,X();case 15:throw console.log(2),n;case 19:if(n.status!==B.FORBIDDEN){e.next=24;break}throw console.log(3),n;case 24:if(n.status!==B.BAD_REQUEST){e.next=29;break}throw console.log(4),n;case 29:if(n.status!==B.INTERNAL_ERROR){e.next=32;break}throw console.log(5),n;case 32:e.next=36;break;case 34:console.log(6),console.error(t);case 36:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=n(116),Y=n.n(W),Q="https://storeton.herokuapp.com",V=(parseInt("3000"),Y.a.create({baseURL:"".concat(Q,"/").concat("v1"),headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4})),Z=function(e){return function(t){var n=t.path,a=t.headers,r=t.data;return e(n,r||{headers:a},{headers:a}).then(K).catch(H)}},q=function(e){var t=e.email,n=e.password;return Z(V.post)({path:D("/access/login"),data:{email:t,password:n}})},$=function(e){var t=e.refreshToken;return Z(V.put)({path:D("/access/refresh"),headers:Object(b.a)({},F()),data:{refreshToken:t}})},ee=function(e){var t=e.email,n=e.password;return Z(V.post)({path:D("/access/register"),data:{email:t,password:n}})},te=function(){var e=Object(l.useAtom)(z),t=Object(c.useState)(null),n=Object(x.a)(t,2),a=n[0],r=n[1],o=Object(c.useRef)(!0);Object(c.useEffect)((function(){return function(){o.current=!1}}),[]),Object(c.useEffect)((function(){console.log(o),!0===o.current&&e.accessToken&&e.refreshToken&&E("/panel")}),[e]);var s=function(){var e=Object(m.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.accessToken,a=t.refreshToken,!o.current){e.next=4;break}return e.next=4,P(n,a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(m.a)(O.a.mark((function e(t,n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.current){e.next=7;break}return e.next=3,q({email:t,password:n}).catch(function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.message){e.next=3;break}return e.next=3,r(t.message);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:if(!(a=e.sent)||!a.data){e.next=7;break}return e.next=7,s(Object(b.a)({},a.data.tokens));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(m.a)(O.a.mark((function e(t,n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.current){e.next=7;break}return e.next=3,ee({email:t,password:n}).catch(function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.message){e.next=3;break}return e.next=3,r(t.message);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:if(!(a=e.sent)||!a.data){e.next=7;break}return e.next=7,s(Object(b.a)({},a.data.tokens));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/auth/register",render:function(e){return Object(j.jsx)(M,Object(b.a)({handleRegister:d,errMessage:a,setErrMessage:r},e))}}),Object(j.jsx)(u.a,{path:"/auth",render:function(e){return Object(j.jsx)(R,Object(b.a)({handleLogin:i,errMessage:a,setErrMessage:r},e))}})]})},ne=n(157),ae=function(e){var t=e.handleGroupCreate,n=Object(c.useState)(""),a=Object(x.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(x.a)(s,2),u=i[0],l=i[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(k.a,{label:"Group name",value:r,onChange:function(e){return o(e.currentTarget.value)}}),Object(j.jsx)(k.a,{label:"Group password",value:u,onChange:function(e){return l(e.currentTarget.value)}}),Object(j.jsx)(g.a,{active:!0,onClick:function(){return t(r,u)},children:"Create Group"}),Object(j.jsx)("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundColor:"black",opacity:"0.8",zIndex:-1}})]})},re=function(){return Z(V.get)({path:D("/info/info-profile"),headers:Object(b.a)({},F())})},ce=function(e){var t=e.groupName,n=e.password;return Z(V.post)({path:D("/group/create"),headers:Object(b.a)({},F()),data:{groupName:t,password:n}})},oe=G("userGroupOwnage"),se=l.Atom.of(oe),ie=function(e){U("userGroupOwnage",e),Object(L.swap)(se,(function(t){return e}))},ue=G("profileInfo"),le=l.Atom.of(ue),de=function(e){U("profileInfo",e),Object(L.swap)(le,(function(t){return e}))},pe=G("userGroupsList")||[],je=l.Atom.of(pe),fe=function(e){U("userGroupsList",e),Object(L.swap)(je,(function(t){return e}))},be=function(){var e=Object(c.useRef)(!0),t=(Object(l.useAtom)(z),Object(l.useAtom)(je));Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),Object(c.useEffect)((function(){e.current&&re().then(function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,e.next=3,de(n.user);case 3:return e.next=5,fe(n.groupsList);case 5:if(!n.groupOwnage){e.next=8;break}return e.next=8,ie(n.groupOwnage);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}))}),[]);return Object(j.jsx)(ae,{handleGroupCreate:function(e,n){ce({groupName:e,password:n}).then(function(){var e=Object(m.a)(O.a.mark((function e(n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.code,n.message,a=n.data,console.log(a),e.next=4,fe([].concat(Object(ne.a)(t),[a.group]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){return E("/panel/browse")})).catch((function(e){console.warn(e)}))}})},he=function(e){var t=e.groupId,n=e.path,a=e.filename,r=D("/fs/download-file","".concat(t,"-").concat(n,"-").concat(a));return Z(V.get)({path:r,headers:Object(b.a)({},F())})},Oe=function(){var e=Object(c.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("GET"),o=Object(x.a)(r,2),s=o[0],i=o[1],u=Object(c.useState)(""),l=Object(x.a)(u,2),d=l[0],p=l[1],f=Object(c.useState)(""),h=Object(x.a)(f,2),y=h[0],S=h[1],C=function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y()({method:s,url:n,headers:Object(b.a)({},JSON.parse(d)),data:y?JSON.parse(y):void 0}).catch((function(e){console.log(e.response),console.log(e.message)}));case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(_.a,{children:[Object(j.jsx)("button",{onClick:function(){return he({groupId:"2",path:"/folder",filename:"test1.txt"})},children:"download"}),Object(j.jsx)("button",{onClick:function(){return ce({groupName:"test12",password:"test12"})},children:"createGroup"}),Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/auth")},children:[Object(j.jsx)(w.a,{name:"lock"}),"Auth"]}),"Landing head",Object(j.jsx)(k.a,{label:"url",value:n,onChange:function(e){return a(e.currentTarget.value)}}),Object(j.jsx)(k.a,{label:"method",value:s,onChange:function(e){return i(e.currentTarget.value)}}),Object(j.jsx)(k.a,{label:"headers",value:d,onChange:function(e){return p(e.currentTarget.value)}}),Object(j.jsx)(k.a,{label:"data",value:y,onChange:function(e){return S(e.currentTarget.value)}}),Object(j.jsx)(g.a,{active:!0,onClick:function(){return C()},children:"Fetch"})]})},me=function(){return Object(j.jsx)(j.Fragment,{})},xe=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Oe,{}),Object(j.jsx)(me,{})]})},ge=n(224),_e=n(223),ve=n(219),we=n(220),ke=(n(203),n(206)),ye=l.Atom.of("/"),Se=function(e){Object(L.swap)(ye,(function(t){return e}))},Ce=n(92),Ae=function(e){var t=e.id,n=e.options;return Object(j.jsx)(Ce.b,{id:t,children:n.map((function(e){var t=e.text,n=e.action;return Object(j.jsx)(Ce.a,{onClick:n,children:t})}))})},Te=n(46),Ne=n.n(Te),Ee=function(e){var t=e.iconName,n=e.entityText,a=e.entityTextAlt,r=e.onClick,c=e.onContextMenu;return Object(j.jsx)("div",{className:Ne.a.entity,onClick:r,onContextMenu:c,children:Object(j.jsxs)(_.a,{className:Ne.a.containerStyled,children:[Object(j.jsx)(ve.a,{className:Ne.a.rowTop,children:Object(j.jsx)(we.a,{className:Ne.a.colTopStyled,children:Object(j.jsx)(w.a,{size:"massive",name:t,className:Ne.a.iconTopStyled})})}),Object(j.jsxs)(ve.a,{className:Ne.a.rowBot,children:[Object(j.jsx)(w.a,{size:"large",name:t,className:Ne.a.iconBotStyled}),Object(j.jsxs)(we.a,{className:Ne.a.colBotStyled,children:[Object(j.jsx)("p",{children:n}),Object(j.jsx)("p",{children:a})]})]})]})})},Ie=function(e){var t=e.idx,n=e.menuOptions,a=e.onClick,r=e.onContextMenu,c=e.iconName,o=e.entityText,s="menuId_".concat(t),i=Object(Ce.c)({id:s}).show;return Object(j.jsxs)(we.a,{xs:10,sm:8,md:6,lg:5,xl:4,children:[Object(j.jsx)(Ee,{iconName:c,entityText:o,onClick:a,onContextMenu:function(e){return r(e,i)},entityTextAlt:""}),Object(j.jsx)(Ae,{id:s,options:n})]})},Be=n(61),Re=n.n(Be),Me=function(e){var t=e.currentPathContent,n=e.onClickFolder,a=e.onClickFile,r=e.onContextMenu,o=e.path,s=e.handleDownload,i=Object(c.useRef)(!0),u=function(e){return[{text:"download",action:function(){return s(e)}},{text:"rename",action:function(){return alert("test")}},{text:"delete",action:function(){return alert("test2")}}]};Object(c.useEffect)((function(){return function(){i.current=!1}}),[]);for(var l=t.folders.map((function(e,t){return Object(j.jsx)(Ie,{idx:t,menuOptions:[{text:"rename",action:function(e){return alert("test")}},{text:"delete",action:function(){return alert("test2")}}],onClick:function(t){return n(t,e)},onContextMenu:r,iconName:"folder open",entityText:e})})),d=t.files.map((function(e,t){return Object(j.jsx)(Ie,{idx:t,menuOptions:u(t),onClick:function(t){return a(t,e)},onContextMenu:r,iconName:"file",entityText:e})})),p=[],f=0,b=0;b<o.length;b++)"/"===o[b]&&(p.push({path:0===b?"/":o.slice(0,b),btnText:0===b?"/home":o.slice(f,b)}),f=b);p.push({path:o.slice(0),btnText:o.slice(f)});var h=p.map((function(e,t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ke.a,{basic:!0,color:"grey",onClick:function(){Se("".concat(p[t].path))},children:p[t].btnText}),">"]})}));return Object(j.jsxs)(_.a,{fluid:!0,className:Re.a.containerStyled,children:[Object(j.jsx)(ve.a,{className:Re.a.rowTopStyled,children:Object(j.jsx)(we.a,{xs:16,children:Object(j.jsx)("h1",{style:{paddingLeft:"5px"},children:"File Manager"})})}),Object(j.jsx)("hr",{className:Re.a.hrStyled}),Object(j.jsx)(ve.a,{className:Re.a.rowTopStyled,children:Object(j.jsx)(we.a,{xs:16,children:Object(j.jsx)("p",{className:Re.a.pStyled,children:h})})}),Object(j.jsx)("hr",{className:Re.a.hrStyled}),Object(j.jsxs)(ve.a,{className:Re.a.rowBotStyled,children:[l,d]})]})},Ge=n(29),Ue=n.n(Ge),Fe=n(155),De=n(221),Je=n.p+"static/media/avatar.8e7d93ca.png",ze=n(47),Le=n.n(ze),Pe=function(e){var t=e.toggleSidebar;return Object(j.jsx)(_.a,{fluid:!0,className:Le.a.panelHeader,children:Object(j.jsxs)(ve.a,{className:Le.a.row,children:[Object(j.jsx)(we.a,{xs:6,sm:3,md:2,className:Le.a.col,children:Object(j.jsx)(Fe.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAApCAYAAABwQGa5AAAHf0lEQVR4nO2c25WqPBTH/5l1nvJmC04JTAlaApYgJWgJWoKUMJagJRxLOJTw8bZf8z1kx4kYQgIMg7PyW4s1F4FcNvuaIJBIJBKJRCKRSCQSiUQikUgkEolEIvE7EW0fEKklgBzACsCSjxhuANZSirqjjdj73pFSXEPPJVIZgIX1r1pKcevbtnXfkDFEt+Xob19uv1EGRGrhG9dY/GlpfAdgh/4C6lQOJgdw6NnGGYBXOERqxW3kcIyFSNV8n6OUourZj6AxEClwW2cpxTngvgdo4zSUNfzz9Koy2BKpWkpRRlzj6t8CwBbAVkrx3vz8SUGI1Ikv6MuDchCpLfTkPCClWPO5e8c9tui2aq0PGVuqkAfsPjlEqgSw77C2BwCZ+ZvHEEMOICdSZwDFFBYQ+F0yaHBiT3IMPN/u39K0C48jeFAQ9hyjKQezQMsksXt+skBsdXzCqdqsMD8Mp+Aea674enjXHrefYRyrngNYcltTKMlvkkGTA5FaSimK0IZYef+GnPtmXbSADqv6EhpWmfaU6whsy+lWewqmArAB8MG/X3gCv5sMw+Z7ML9IBlsideFnOITg1MH2IM4YEUANIMSFlVOFDHC4drZ4sYIBAGN5FtDx+gVaQO8TjGdHpMoB+c9PMjcZrPiaUb2yrSBt7vTjBwW4DqmSsOX49JxyhRboTUpxY0FmgA4xOO/KoYWzBvAPWtCbiL7uob2oC+OdXVYxR5gBAtrzha5rhnjEWcpASnG08ghDBuBfZIjmxVaQCo+TfwBwHUE5uoQakgx20ZZo1dBJ30M4YMfdLCgzyZ/Qbr4A8EmkVhFlzJvvXCJ1hY57m2NdIVxB6piyqtX2r5IBkdpKKUopRcFjs73WAtqTbPrMVZM/3GAGrSAA16Y5lsyG1pvbkkBDQDIYQlthIWSS7BLnEsBOSrHnid+io4wJ/QBc+WcrUoqalWRIEaQXv1AGJyKVSSkKKUXJpeITvhTUKEkxtAxsPIhdjrtBa3DJ//8kUj4LN8qCW19YuV3CLQMtyAbaspvJ3fF4NyHekwUQKoShD+Es+SEZbHltaS+lOBOpCjp3sb1Y7zKwwSiIbf0ydmF2jOctbbIGl9CLPWMkSGYBKiS8a+tb0KRIKSoitcejm84BVGylfLX+C3Ro1ZkXsEd29TUmhF1yKT6GvsWTV5CBiXLWHPV8QIdods4VXQa2EUBraW7PShJS+8+5U8540wc/ZPf7Sylat7+0XL/D80rwTUrxEXmff3i2gld7MbDZV/uc5iJiA992Dm8YEFF2dVG5VocdbbyMDPi85pzcoOfxxsWCC55lcYX2SDWHlJdm+65xv/EHJZ4rMAfu8Io/aztKnggziBMrXC+4Fv/UeQ+uB6+PxXSFAjEhUcX3cB0l3Na0aioHkVoSqR0LcSi94u8XlEEGXjuRUtT8PDbHbsrAUdun7CpWgecYbomwfUYldJXkne9xIlLVGFWEAMaqebtCiWAFCfGaHDPbIZLL7Zs536O7QNDFoAQ1gjnIwCTme6vCVeNxvjPo8nFwTnJfSedEe41+g93iy2UZofdZMOqDq79jrYSHzMWqbUXaOsz6wBFfD0ERaEDWjiOE84QLtz8tA+Br4fJk8jTODZtGaIGIzZlv9h+sJO/Qlid2cjMAn3yPI3RCOcWWjQq6r3aIuCBST5vzOnD1dazqXE6kcn5gN9CLr13WfekIs2K8csiO4bGYgwyMga+g04MTcPfsG/T0ck+7eVmIBYAiIA42OzYNK1aKK7RrM/nLt8EVjjPHlv9ZH+0Q+JDwtS5hjrmD4ECkrhElcbPT1GYPXSmMSqK/m7nIwKpkXaDLwAtoT91WBu7kzfehlOLacRzxvEJrlGKNCawYkcqI1I4V27bKmbEiAbSVTsdU7qWnnRBchZRZMCcZcB/Ms5eDE3M2TNHz51WQQJqNmm0D1UR7uBbQ1jnDc/K16qpacMXNJRzzIk8XVymFsA+05wlDqlPniYoeffhpGTzAlawNtLJmGJAPj6EgzbhxBR12TbJqbG2jOLBC2klZAdzd9wNcTv1E++T1XvTkPrXlGH3f3pstc5QB96uAjnBM22dE5iL3HIQHEJtUr9DiGie2dnsAf9nNH7mcmtm7RHkf1A1fLw/5xlpheIl0D/crBCYcid3+kEcWPQa/jhrJHGVgdv1e+feS93cF5yJ2kp7BsbrYkykFY5KzArrEd38wGrtEzXvRXdTgFdeBfaq5T64t4AcidY4MQWMXX31ebHTmKAO7b41+rqG9VqfBGSPEahL6gtWosECMgE68jyw29qzBWxZG6pPvSw2mWieajDnKwIW15tfZxncoyH6i5PwJS0A53O9e+KigXw6KTQq7xlrAHfeuemw8nD0/JINorGqX18uOqSDGLU4aXjXh9t8RXv2ooePnj0irVfI13l2ibCzaPOoudm/QKzChDAbB1a4CHiVxfi9WJPcNeT1jRteEDJoks9jJW6jNl9+ZxNCs+FbQJdoYa2XeuowaKyeKZsezzQLxr/Z+B68kg9HhfVuv+L0AiUQikUgkEolEIpFIJBKJRCKR8PM/uCXjNb9GJXoAAAAASUVORK5CYII=",className:Le.a.imgStyled,onClick:function(){return E("/panel")}})}),Object(j.jsx)(we.a,{xs:1,className:Le.a.col,children:Object(j.jsx)(w.a,{link:!0,size:"large",name:"bars",onClick:t})}),Object(j.jsx)(we.a,{}),Object(j.jsxs)(we.a,{xs:7,sm:6,md:5,lg:4,xl:3,className:Ue()(Le.a.col,Le.a.right),children:[Object(j.jsx)(w.a,{link:!0,name:"bell",color:"grey",inverted:!0}),Object(j.jsx)(Fe.a,{src:Je,size:"mini"}),Object(j.jsx)("p",{className:Le.a.pStyled,children:"email@addr.com"}),Object(j.jsx)(De.a,{direction:"left",closeOnChange:!0,children:Object(j.jsxs)(De.a.Menu,{children:[Object(j.jsx)(De.a.Item,{text:"Settings",onClick:function(){return E("/panel/settings")}}),Object(j.jsx)(De.a.Item,{text:"Logout",onClick:function(){return alert("logout")}})]})})]})]})})},Xe=n(27),Ke=n.n(Xe),He=function(e){var t=e.storageInfo,n=e.groupOwnage,a=e.currentGroupInfo,r=e.selectGroupOptions,c=e.handleChange,o=e.handleUpload,s=e.handleCreateFolder;return Object(j.jsxs)(_.a,{className:Ke.a.containerCustom,children:[Object(j.jsxs)("div",{className:Ke.a.wrapTop,children:[Object(j.jsx)(ve.a,{children:Object(j.jsxs)(we.a,{className:Ke.a.col,children:[Object(j.jsx)("input",{type:"file",onChange:o,style:{width:"10px !important",position:"absolute",right:"55%",opacity:0},multiple:!0}),Object(j.jsx)(w.a,{link:!0,size:"big",name:"cloud upload"}),Object(j.jsxs)(w.a.Group,{size:"large",onClick:s,children:[Object(j.jsx)(w.a,{link:!0,size:"large",name:"folder"}),Object(j.jsx)(w.a,{size:"small",corner:!0,inverted:!0,color:"grey",name:"add"})]})]})}),Object(j.jsx)("hr",{className:Ke.a.hrStyled}),Object(j.jsx)(ve.a,{children:Object(j.jsx)(we.a,{children:Object(j.jsxs)(v.a,{secondary:!0,vertical:!0,children:[Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/panel/browse")},children:[Object(j.jsx)(w.a,{name:"file"}),"File Manager"]}),Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/panel/search")},children:[Object(j.jsx)(w.a,{name:"search"}),"Spaces search"]}),Object(j.jsxs)(v.a.Item,{as:"a",onClick:function(){return E("/panel/privelege")},children:[Object(j.jsx)(w.a,{name:"money"}),"Privelege"]})]})})})]}),Object(j.jsxs)("div",{className:Ke.a.wrapBot,children:[Object(j.jsx)("hr",{className:Ke.a.hrStyled}),Object(j.jsx)(ve.a,{children:Object(j.jsxs)(we.a,{className:Ke.a.col,children:[Object(j.jsx)(w.a,{size:"big",name:"server",className:Ke.a.iFix}),Object(j.jsx)("p",{children:t?"".concat(Math.round(t.sizeUsed)," MB of ").concat(Math.round(t.sizeMax)," MB used"):"Please, create group or join one!"})]})}),Object(j.jsx)("hr",{className:Ke.a.hrStyled}),Object(j.jsx)(ve.a,{children:Object(j.jsxs)(we.a,{className:Ue()(Ke.a.col,Ke.a.groupBot),children:[Object(j.jsx)("span",{className:Ke.a.groupInfo,children:Object(j.jsx)("p",{className:Ke.a.pStyled,children:"Current Group"})}),n&&a&&n.id===a.id&&"You own this group",Object(j.jsx)(De.a,{placeholder:"Select group",upward:!0,floating:!0,options:r,onChange:c,value:a?a.id:void 0})]})})]})]})},We=n(126),Ye=n.n(We),Qe=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(_.a,{children:Object(j.jsxs)(ve.a,{children:[Object(j.jsx)(we.a,{xs:12,md:6,lg:4,className:Ye.a.rect,children:"text text text"}),Object(j.jsx)(we.a,{xs:12,md:6,lg:4,className:Ye.a.rect,children:"text text text"}),Object(j.jsx)(we.a,{xs:12,lg:4,className:Ye.a.rect,children:"text text text"})]})})})},Ve=G("currentGroupInfo"),Ze=l.Atom.of(Ve),qe=l.Atom.of(!0),$e=function(){Object(L.swap)(qe,(function(e){return!e}))},et=G("storageInfo"),tt=l.Atom.of(et),nt=function(e){U("storageInfo",e),Object(L.swap)(tt,(function(t){return e}))},at=function(){var e=Object(c.useRef)(!0),t=Object(l.useAtom)(Ze),n=Object(l.useAtom)(ye),a=Object(l.useAtom)(qe),r=Object(c.useState)({files:[],folders:[]}),o=Object(x.a)(r,2),s=o[0],i=o[1];Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),Object(c.useEffect)((function(){e.current&&t&&Se("/")}),[t]),Object(c.useEffect)((function(){e.current&&t&&function(e){var t=e.groupId,n=e.path;return Z(V.get)({path:D("/fs/browse-folder","".concat(t,"-").concat(n)),headers:Object(b.a)({},F())})}({groupId:t.id,path:n}).then((function(e){var t=e.data;i(Object(b.a)({},t))})).catch((function(e){console.log(e)}))}),[n,t,a]);var u=function(){var e=Object(m.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(t);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)(Me,{currentPathContent:s,onClickFolder:function(e,t){e.preventDefault(),Se(n+"".concat("/"===n?"":"/").concat(t))},onClickFile:function(e,t){e.preventDefault(),alert("this is file, can't do anything yet")},onContextMenu:u,path:n,handleDownload:function(e){console.log(e),console.log(s.files),he({groupId:t.id,path:n,filename:s.files[e]}).then((function(t){console.log(t);var n=new Blob([t],{type:"binary"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download=s.files[e],a.click(),URL.revokeObjectURL(a.href)})).catch((function(e){console.log(e)}))}}):Object(j.jsx)("p",{children:"PLEASE CHOOSE GROUP TO START WORKING!"})})},rt=function(e){var t=e.visible,n=e.direction,a=e.animation,r=e.closeSidebar,o=e.mainContentRef,s=Object(c.useRef)(!0),i=Object(l.useAtom)(se),u=Object(l.useAtom)(je),d=Object(l.useAtom)(tt),p=Object(l.useAtom)(Ze),f=Object(l.useAtom)(ye);Object(c.useEffect)((function(){return function(){s.current=!1}}),[]);var h=[];u&&(h=u.map((function(e){return{key:e.id,text:e.name,value:e.id}})));return Object(j.jsx)(ge.a,{visible:t,direction:n,animation:a,onHide:r,target:o,children:Object(j.jsx)(He,{storageInfo:d,groupOwnage:i,currentGroupInfo:p,selectGroupOptions:h,handleChange:function(e,t){var n,a=t.value,r=u.filter((function(e){return e.id===a}));r&&0!==r.length&&(n={id:r[0].id,name:r[0].name},U("currentGroupInfo",n),Object(L.swap)(Ze,(function(e){return n})))},handleUpload:function(e){var t=e.currentTarget.files[0];(function(e){var t=e.groupId,n=e.path,a=e.filename,r=e.data;return Z(V.post)({path:D("/fs/upload-file","".concat(t,"-").concat(n,"-").concat(a)),headers:Object(b.a)(Object(b.a)({},F()),{},{"Content-Type":"binary"}),data:r})})({groupId:p.id,path:f,filename:t.name,data:t}).then($e).catch()},handleCreateFolder:function(){var e=prompt("Enter folder name");e&&function(e){var t=e.groupId,n=e.path,a=e.filename;return Z(V.put)({path:D("/fs/create-folder","".concat(t,"-").concat(n,"-").concat(a)),headers:Object(b.a)({},F()),data:{}})}({groupId:p.id,path:f,filename:e}).then($e).catch()}})})},ct=function(){return Object(j.jsx)(j.Fragment,{children:"Priv"})},ot=function(){return Object(j.jsx)(j.Fragment,{children:"Search"})},st=function(){return Object(j.jsx)(j.Fragment,{children:"settings"})},it=function(){var e=Object(c.useRef)(!0),t=Object(c.useState)({dimmed:!1,visible:!1,animation:"overlay",direction:"left"}),n=Object(x.a)(t,2),a=n[0],r=n[1],o=a.dimmed,s=a.visible,i=a.animation,d=a.direction,p=Object(l.useAtom)(qe),h=Object(l.useAtom)(z),g=Object(l.useAtom)(Ze),_=Object(c.useRef)(null);Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),Object(c.useEffect)((function(){e.current&&re().then(function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.code,t.message,n=t.data,console.log(n),e.next=4,de(n.user);case 4:return e.next=6,fe(n.groupsList);case 6:if(!n.groupOwnage){e.next=9;break}return e.next=9,ie(n.groupOwnage);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.code;var t=e.message;e.status;console.warn(t)}))}),[h]),Object(c.useEffect)((function(){e.current&&g&&function(e){var t=e.id;return Z(V.post)({path:D("/info/info-group"),headers:Object(b.a)({},F()),data:{id:t}})}({id:g.id}).then(function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.code,t.message,n=t.data,console.log(n),e.next=4,nt(n.storageInfo);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e)}))}),[g,p]);var v=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.current&&a.dimmed&&a.visible)){t.next=3;break}return t.next=3,r((function(e){return Object(b.a)(Object(b.a)({},e),{},{dimmed:!1,visible:!1})}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.current){t.next=3;break}return t.next=3,r((function(e){return Object(b.a)(Object(b.a)({},e),{},{dimmed:!e.dimmed,visible:!e.visible})}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Pe,{toggleSidebar:w}),Object(j.jsxs)(ge.a.Pushable,{style:{overflow:"visible",height:"calc(100% - 65px)"},children:[Object(j.jsx)(rt,{visible:s,animation:i,direction:d,closeSidebar:v,mainContentRef:_}),Object(j.jsx)(_e.a,{innerRef:_,children:Object(j.jsx)(ge.a.Pusher,{dimmed:o,style:{width:o?"90%":"100%",float:"right",transition:"width 0.5s"},children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/panel",component:at}),Object(j.jsx)(u.a,{exact:!0,path:"/panel/browse",component:at}),Object(j.jsx)(u.a,{exact:!0,path:"/panel/search",component:ot}),Object(j.jsx)(u.a,{exact:!0,path:"/panel/privelege",component:ct}),Object(j.jsx)(u.a,{exact:!0,path:"/panel/settings",component:st}),Object(j.jsx)(u.a,{exact:!0,path:"/panel/test",component:Qe}),Object(j.jsx)(u.a,{path:"/panel",component:f})]})})})]})]})},ut=(n(204),Object(r.a)());i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsxs)(u.b,{history:ut,children:[Object(j.jsx)(N,{}),Object(j.jsx)(u.c,{children:Object(j.jsx)(u.a,{path:"/",component:function(){var e=Object(l.useAtom)(je),t=Object(l.useAtom)(z);return Object(j.jsx)("div",{className:p.a.App,children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",component:xe}),Object(j.jsx)(u.a,{path:"/auth",component:te}),t&&t.accessToken&&t.refreshToken&&Object(j.jsx)(u.a,{path:"/panel",component:e&&e.length?it:be}),Object(j.jsx)(u.a,{path:"/",component:f})]})})}})})]})}),document.getElementById("root"))},27:function(e,t,n){e.exports={root:"panel-navigation_root__2Onz5",ui:"panel-navigation_ui__1770U",segment:"panel-navigation_segment__1X47s",image:"panel-navigation_image__1yVna",mini:"panel-navigation_mini__2TUdc",dropdown:"panel-navigation_dropdown__2hBm4",floating:"panel-navigation_floating__1nOpn",menu:"panel-navigation_menu__2Y_y3",item:"panel-navigation_item__396yN",button:"panel-navigation_button__nshwb",container:"panel-navigation_container__2rA6Q","container-fluid":"panel-navigation_container-fluid__3nut-",navbar:"panel-navigation_navbar__2F7ts",containerCustom:"panel-navigation_containerCustom__36ZMD",col:"panel-navigation_col__2Zwje",hrStyled:"panel-navigation_hrStyled__teZtl",wrapBot:"panel-navigation_wrapBot__N7a64",groupBot:"panel-navigation_groupBot__13vmo",pStyled:"panel-navigation_pStyled__2uOa-"}},46:function(e,t,n){e.exports={root:"panel-entity-view_root__1wuI7",ui:"panel-entity-view_ui__10HbF",segment:"panel-entity-view_segment__3nRVl",image:"panel-entity-view_image__1DrNm",mini:"panel-entity-view_mini__3UTpm",dropdown:"panel-entity-view_dropdown__1kgcB",floating:"panel-entity-view_floating__1S2yK",menu:"panel-entity-view_menu__qgiiJ",item:"panel-entity-view_item__3_yln",button:"panel-entity-view_button__VTXWB",container:"panel-entity-view_container__3cOGf","container-fluid":"panel-entity-view_container-fluid__2wNgN",entity:"panel-entity-view_entity__1KF0X",containerStyled:"panel-entity-view_containerStyled__2KPrv",rowTop:"panel-entity-view_rowTop__2g7cE",colTopStyled:"panel-entity-view_colTopStyled__2J_Yd",rowBot:"panel-entity-view_rowBot__2TP5d",iconBotStyled:"panel-entity-view_iconBotStyled__1MXHS",colBotStyled:"panel-entity-view_colBotStyled__3IflU"}},47:function(e,t,n){e.exports={root:"panel-header_root__p29ZL",ui:"panel-header_ui__1noJx",segment:"panel-header_segment__bgGP9",image:"panel-header_image__38eKb",mini:"panel-header_mini__NYMe1",dropdown:"panel-header_dropdown__3PF-k",floating:"panel-header_floating__2Nd0x",menu:"panel-header_menu__vHAvg",item:"panel-header_item__2Ry-r",button:"panel-header_button__ihCvF",container:"panel-header_container__Tpwgq","container-fluid":"panel-header_container-fluid__2BVzq",panelHeader:"panel-header_panelHeader__nh5vd",row:"panel-header_row__3Hd78",col:"panel-header_col__yf9Fj",right:"panel-header_right__3JaRW",imgStyled:"panel-header_imgStyled__2vuU7",pStyled:"panel-header_pStyled__1tQWn"}},61:function(e,t,n){e.exports={root:"panel-browse_root__T6a7P",ui:"panel-browse_ui__2GpeC",segment:"panel-browse_segment__2Oy_X",image:"panel-browse_image__3o74J",mini:"panel-browse_mini__dIH4V",dropdown:"panel-browse_dropdown__27aMV",floating:"panel-browse_floating__14Lyu",menu:"panel-browse_menu__3aoda",item:"panel-browse_item__3zor6",button:"panel-browse_button__2yu-w",container:"panel-browse_container__3GHMl","container-fluid":"panel-browse_container-fluid__13Vgh",containerStyled:"panel-browse_containerStyled__6fzl1",colStyled:"panel-browse_colStyled__2tBbk",rowTopStyled:"panel-browse_rowTopStyled__A7YmL",hrStyled:"panel-browse_hrStyled__Y4cdp",rowBotStyled:"panel-browse_rowBotStyled__1GNH1",pStyled:"panel-browse_pStyled__1idLA"}}},[[205,1,2]]]);