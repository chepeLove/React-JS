(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__11X-b",item:"Navbar_item__2wT7c",activeLink:"Navbar_activeLink__3GejA"}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(42),i=n(3),s="UPDATE-NEW-MESSAGE-TEXT",a={messages:[{id:1,message:"Hi"},{id:2,message:"How is your react?"},{id:3,message:"Yo"}],dialogs:[{id:1,name:"Ilya"},{id:2,name:"Kirill"},{id:3,name:"Alex"},{id:4,name:"Dima"},{id:5,name:"Vika"},{id:6,name:"Natasha"}]},c=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},135:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__6sHKT"}},169:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(133),i=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ec9391ba-e5e9-485e-89d3-e761bb3874c6"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return i.post("follow/".concat(e))},unfollow:function(e){return i.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),a.getProfile(e)}},a={getProfile:function(e){return i.get("profile/"+e)},getStatus:function(e){return i.get("profile/status/"+e)},updateStatus:function(e){return i.put("profile/status",{status:e})}},c={me:function(){return i.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return i.delete("auth/login")}}},300:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=(n(97),n(66)),a=n.n(s),c=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,305)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),s(e),a(e)}))},o=n(33),u=n(34),l=n(37),d=n(36),j=(n(169),n(12)),f=n.n(j),h=n(13),b=n(90),p=n.n(b),g=n(1),O=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:p.a.sidebar,children:Object(g.jsx)("h4",{children:" Friends"})}),Object(g.jsxs)("div",{className:p.a.item,children:[Object(g.jsx)("img",{src:"https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-person-short-hair-girl-silhouette-avatar-png-image_2266253.jpg"}),Object(g.jsx)("div",{children:"Ilya"})]})]})},v=function(){return Object(g.jsxs)("nav",{className:f.a.nav,children:[Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(h.b,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(g.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(g.jsx)(h.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:"Massages"})}),Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(h.b,{to:"/users",activeClassName:f.a.activeLink,children:"Users"})}),Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(h.b,{to:"/news",activeClassName:f.a.activeLink,children:"News"})}),Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(h.b,{to:"/music",activeClassName:f.a.activeLink,children:"Music"})}),Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(h.b,{to:"/settings",activeClassName:f.a.activeLink,children:"Sattings"})}),Object(g.jsx)("div",{children:Object(g.jsx)(O,{})})]})},m=(n(178),function(){return Object(g.jsx)("div",{children:"Music"})}),x=(n(179),function(){return Object(g.jsx)("div",{children:"News"})}),C=(n(180),function(){return Object(g.jsx)("div",{children:"Settings"})}),w=n(9),S=n(17),P=n(10),E=n.n(P),I=n(19),k=n(42),F=n(3),y=n(20),U=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(F.a)(Object(F.a)({},e),r):e}))},A="FOLLOW",Q="UNFOLLOW",T="SET_USERS",M="SET_CURRENT_PAGE",N="SET_TOTAL_USERS_COUNT",L="TOGGLE_IS_FETCHING",J="TOGGLE_IS_FOLLOWING_PROGRESS",D={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},W=function(e){return{type:A,userId:e}},K=function(e){return{type:Q,userId:e}},R=function(e){return{type:M,currentPage:e}},Y=function(e){return{type:L,isFetching:e}},z=function(e,t){return{type:J,isFetching:e,userId:t}},q=function(){var e=Object(I.a)(E.a.mark((function e(t,n,r,i){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(i(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(F.a)(Object(F.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!0})});case Q:return Object(F.a)(Object(F.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!1})});case T:return Object(F.a)(Object(F.a)({},e),{},{users:t.users});case M:return Object(F.a)(Object(F.a)({},e),{},{currentPage:t.currentPage});case N:return Object(F.a)(Object(F.a)({},e),{},{totalUsersCount:t.totalUsersCount});case L:return Object(F.a)(Object(F.a)({},e),{},{isFetching:t.isFetching});case J:return Object(F.a)(Object(F.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(k.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},V=n(51),B=n(69),G=n(129),X=n(71),H=n.n(X),_=n(134),$=n.n(_),ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,i=e.currentPage,s=e.onPageChanged,a=e.portionSize,c=void 0===a?10:a,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/c),j=Object(r.useState)(1),f=Object(G.a)(j,2),h=f[0],b=f[1],p=(h-1)*c+1,O=h*c;return Object(g.jsxs)("div",{className:H.a.paginator,children:[h>1&&Object(g.jsx)("button",{onClick:function(){b(h-1)},children:"PREV"}),u.filter((function(e){return e>=p&&e<=O})).map((function(e){return Object(g.jsx)("span",{className:$()(Object(B.a)({},H.a.selectedPage,i===e),H.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>h&&Object(g.jsx)("button",{onClick:function(){b(h+1)},children:"NEXT"})]})},te=n(135),ne=n.n(te),re=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,i=e.follow;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(h.b,{to:"/profile"+t.id,children:Object(g.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",className:ne.a.userPhoto})})}),Object(g.jsx)("div",{children:t.followed?Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){i(t.id)},children:"Follow"})})]}),Object(g.jsxs)("span",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:"user.location.country"}),Object(g.jsx)("div",{children:"user.location.city"})]})]})]})},ie=["currentPage","onPageChanged","totalItemsCount","pageSize","users"],se=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,i=e.pageSize,s=e.users,a=Object(V.a)(e,ie);return Object(g.jsxs)("div",{children:[Object(g.jsx)(ee,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:i}),Object(g.jsx)("div",{children:s.map((function(e){return Object(g.jsx)(re,{user:e,followingInProgress:a.followingInProgress,unfollow:a.unfollow,follow:a.follow},e.id)}))})]})},ae=n(38),ce=n(8),oe=n(139),ue=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},de=function(e){return e.usersPage.totalUsersCount},je=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},he=function(e){return e.usersPage.currentPage},be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(ae.a,{}):null,Object(g.jsx)(se,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),pe=Object(ce.d)(Object(S.b)((function(e){return{users:ue(e),pageSize:le(e),totalUsersCount:de(e),currentPage:he(e),isFetching:je(e),followingInProgress:fe(e)}}),{follow:function(e){return function(){var t=Object(I.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q(n,e,y.c.follow.bind(e),W);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(I.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q(n,e,y.c.unfollow.bind(e),K);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:R,toggleFollowingProgress:z,getUsers:function(e,t){return function(){var n=Object(I.a)(E.a.mark((function n(r){var i;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Y(!0)),r(R(e)),n.next=4,y.c.getUsers(e,t);case 4:i=n.sent,r(Y(!1)),r((a=i.items,{type:T,users:a})),r((s=i.totalCount,{type:N,totalUsersCount:s}));case 8:case"end":return n.stop()}var s,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(be),ge=n(93),Oe=n.n(ge),ve=function(e){return Object(g.jsxs)("header",{className:Oe.a.header,children:[Object(g.jsx)("img",{src:"https://i.pinimg.com/736x/23/80/0b/23800b995292379883a15d9a4c382b22--awesome-logos-animal-logo.jpg"}),Object(g.jsx)("div",{className:Oe.a.loginBlock,children:e.isAuth?Object(g.jsxs)("div",{children:[e.login," - ",Object(g.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(g.jsx)(h.b,{to:"/login",children:"Login"})})]})},me=n(43),xe="auth/SET_USER_DATA",Ce={userId:null,email:null,login:null,isAuth:!1},we=function(e,t,n,r){return{type:xe,payload:{userId:e,email:t,login:n,isAuth:r}}},Se=function(){return function(){var e=Object(I.a)(E.a.mark((function e(t){var n,r,i,s,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,i=r.id,s=r.login,a=r.email,t(we(i,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(F.a)(Object(F.a)({},e),t.payload);default:return e}},Ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)(ve,Object(F.a)({},this.props))}}]),n}(i.a.Component),Ie=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(I.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(we(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ee),ke=n(128),Fe=n(32),ye=n(57),Ue=n(52),Ae=n.n(Ue),Qe=Object(ke.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(g.jsxs)("form",{onSubmit:t,children:[Object(Fe.c)("Email","email",[ye.b],Fe.a),Object(Fe.c)("Password","password",[ye.b],Fe.a,{type:"password"}),Object(Fe.c)(null,"rememberMe",null,Fe.a,{type:"checkbox"},"remember me"),n&&Object(g.jsx)("div",{className:Ae.a.formSummaryError,children:n}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"Login"})})]})})),Te=Object(S.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(I.a)(E.a.mark((function r(i){var s,a;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?i(Se()):(a=s.data.messages.length>0?s.data.messages[0]:"Some error",i(Object(me.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(g.jsx)(w.a,{to:"/profile"}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsx)(Qe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Me="app/INITIALIZED_SUCCESS",Ne={initialized:!1},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(F.a)(Object(F.a)({},e),{},{initialized:!0});default:return e}},Je=n(96),De=n(127),We={},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return e},Re=n(138),Ye=n(130),ze=Object(ce.c)({profilePage:Je.b,dialogsPage:De.a,sidebar:Ke,usersPage:Z,auth:Pe,form:Ye.a,app:Le}),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Ze=Object(ce.e)(ze,qe(Object(ce.a)(Re.a)));window.__store__=Ze;var Ve=Ze,Be=function(e){return function(t){return Object(g.jsx)(i.a.Suspense,{fallback:Object(g.jsx)(ae.a,{}),children:Object(g.jsx)(e,Object(F.a)({},t))})}},Ge=i.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),Xe=i.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),He=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(Ie,{}),Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"app-wrapper-content",children:[Object(g.jsx)(w.b,{path:"/dialogs",render:Be(Ge)}),Object(g.jsx)(w.b,{path:"/users",render:function(){return Object(g.jsx)(pe,{})}}),Object(g.jsx)(w.b,{path:"/profile:userId?",render:Be(Xe)}),Object(g.jsx)(w.b,{path:"/music",render:function(){return Object(g.jsx)(m,{})}}),Object(g.jsx)(w.b,{path:"/news",render:function(){return Object(g.jsx)(x,{})}}),Object(g.jsx)(w.b,{path:"/settings",render:function(){return Object(g.jsx)(C,{})}}),Object(g.jsx)(w.b,{path:"/login",render:function(){return Object(g.jsx)(Te,{})}})]})]}):Object(g.jsx)(ae.a,{})}}]),n}(i.a.Component),_e=Object(ce.d)(w.f,Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Se());Promise.all([t]).then((function(){e({type:Me})}))}}}))(He),$e=function(){return Object(g.jsxs)(h.a,{children:[Object(g.jsxs)(S.a,{store:Ve,children:[Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(_e,{})}),","]}),","]})};a.a.render(Object(g.jsx)($e,{}),document.getElementById("root")),c()},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h}));var r=n(3),i=n(51),s=(n(0),n(52)),a=n.n(s),c=n(89),o=(n(57),n(1)),u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,i=e.children,s=n&&r;return Object(o.jsxs)("div",{className:a.a.formControl+" "+(s?a.a.error:""),children:[Object(o.jsx)("div",{children:i}),s&&Object(o.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(i.a)(e,u));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(i.a)(e,l));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},h=function(e,t,n,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:i},s)),a]})}},38:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Pulse-1s-202px.a446fc09.svg",i=n(1);t.a=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:r})})}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__gdpMk",error:"FormsControls_error__2-MRc",formSummaryError:"FormsControls_formSummaryError__2UK2R"}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r=function(e){if(!e)return"Field is required"},i=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__2iKPA",pageNumber:"Paginator_pageNumber__3cDDu",selectedPage:"Paginator_selectedPage__1yR_T"}},90:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__tWxJ0",item:"Sidebar_item__2cIyP"}},93:function(e,t,n){e.exports={header:"Header_header__2kVVi",loginBlock:"Header_loginBlock__3Zb0O"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(10),i=n.n(r),s=n(19),a=n(42),c=n(3),o=n(20),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={posts:[{id:1,textPost:"Hi,how are you?",likesCount:15},{id:2,textPost:"It's my first post",likesCount:30}],profile:null,status:""},h=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(t){o.c.getProfile(e).then((function(e){var n;t((n=e.data,{type:l,profile:n}))}))}},g=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:3,textPost:t.newPostText,likesCount:Math.floor(100*Math.random())};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case j:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},97:function(e,t,n){}},[[300,1,2]]]);
//# sourceMappingURL=main.19e49023.chunk.js.map