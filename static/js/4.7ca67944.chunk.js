/*! For license information please see 4.7ca67944.chunk.js.LICENSE.txt */
(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{294:function(e,r,t){"use strict";r.a=t.p+"static/media/user.d59f6bd9.jpg"},297:function(e,r,t){e.exports={users_wrapper:"Users_users_wrapper__3GiiZ",user_item:"Users_user_item__3dxSJ",left:"Users_left__18Iay",avatar:"Users_avatar__3IyOE",right:"Users_right__hyMIP",fullName:"Users_fullName__3JbSM",name:"Users_name__3cRft",location:"Users_location__JrdwW",pageNumbers:"Users_pageNumbers__yfrFB"}},298:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(95);function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,s=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(u){s=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(s)throw o}}return t}}(e,r)||Object(n.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},304:function(e,r,t){e.exports={pageNumbers:"Paginator_pageNumbers__1nuGR",pageNumber:"Paginator_pageNumber__1UQuK",selectedPage:"Paginator_selectedPage__16Poc"}},305:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=s.apply(null,n);a&&e.push(a)}else if("object"===o)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(r,[]))||(e.exports=n)}()},308:function(e,r,t){"use strict";t.r(r);var n=t(49),s=t(50),o=t(52),a=t(51),i=t(1),u=t(0),l=t.n(u),c=t(132),f=t(15),p=t(297),g=t.n(p),d=t(97),h=t(298),b=t(304),j=t.n(b),v=t(305),m=t.n(v),y=function(e){for(var r=Math.ceil(e.totalUsersCount/e.pageSize),t=[],n=1;n<=r;n++)t.push(n);var s=Math.ceil(r/10),o=Object(u.useState)(1),a=Object(h.a)(o,2),l=a[0],c=a[1],f=10*(l-1)+1,p=10*l;return Object(i.jsxs)("div",{className:j.a.pageNumbers,children:[l>1?Object(i.jsx)("button",{onClick:function(){c(l-1)},children:"Prev"}):Object(i.jsx)("button",{disabled:!0,children:"Prev"}),t.filter((function(e){return e>=f&&e<=p})).map((function(r){return t.length>30&&(t.length=30),Object(i.jsx)("span",{className:m()(Object(d.a)({},j.a.selectedPage,e.currentPage===r),j.a.pageNumber),onClick:function(t){e.onPageChanged(r)},children:r},r)})),s>l?Object(i.jsx)("button",{onClick:function(){c(l+1)},children:"Next"}):Object(i.jsx)("button",{disabled:!0,children:"Next"})]})},_=t(294),O=t(14),w=function(e){return Object(i.jsx)("div",{children:e.users.map((function(r){return Object(i.jsxs)("div",{className:g.a.user_item,children:[Object(i.jsxs)("div",{className:g.a.left,children:[Object(i.jsx)("div",{children:Object(i.jsx)(O.b,{to:"/profile/"+r.id,children:Object(i.jsx)("img",{src:null!==r.photos.small?r.photos.small:_.a,alt:"avatar",className:g.a.avatar})})}),Object(i.jsx)("div",{children:r.followed?Object(i.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===r.id})),onClick:function(){e.unfollow(r.id)},children:"Unfollow"}):Object(i.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===r.id})),onClick:function(){e.follow(r.id)},children:"Follow"})})]}),Object(i.jsxs)("div",{className:g.a.right,children:[Object(i.jsxs)("div",{className:g.a.name,children:[Object(i.jsx)(O.b,{to:"/profile/"+r.id,children:Object(i.jsx)("div",{className:g.a.fullName,children:r.name})}),Object(i.jsxs)("div",{className:g.a.status,children:[r.status," "]})]}),Object(i.jsxs)("div",{className:g.a.location,children:[Object(i.jsx)("div",{className:g.a.country,children:"u.location.country"}),Object(i.jsx)("div",{className:g.a.city,children:"u.location.city"})]})]})]},r.id)}))})},x=function(e){return Object(i.jsxs)("div",{className:g.a.users_wrapper,children:[Object(i.jsx)(y,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),Object(i.jsx)(w,{users:e.users,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})]})},P=t(62),N=t(10);function U(e,r){return e===r}function C(e,r,t){if(null===r||null===t||r.length!==t.length)return!1;for(var n=r.length,s=0;s<n;s++)if(!e(r[s],t[s]))return!1;return!0}function S(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var t=r.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return r}var I=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return function(){for(var r=arguments.length,n=Array(r),s=0;s<r;s++)n[s]=arguments[s];var o=0,a=n.pop(),i=S(n),u=e.apply(void 0,[function(){return o++,a.apply(null,arguments)}].concat(t)),l=e((function(){for(var e=[],r=i.length,t=0;t<r;t++)e.push(i[t].apply(null,arguments));return u.apply(null,e)}));return l.resultFunc=a,l.dependencies=i,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,t=null,n=null;return function(){return C(r,t,arguments)||(n=e.apply(null,arguments)),t=arguments,n}}));var k=I((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),z=function(e){return e.usersPage.pageSize},A=function(e){return e.usersPage.totalUsersCount},F=function(e){return e.usersPage.currentPage},J=function(e){return e.usersPage.isFetching},M=function(e){return e.usersPage.followingInProgress},E=function(e){Object(o.a)(t,e);var r=Object(a.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=r.call.apply(r,[this].concat(o))).onPageChanged=function(r){e.props.getUsers(r,e.props.pageSize)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(i.jsx)("div",{className:g.a.users_wrapper,children:this.props.isFetching?Object(i.jsx)(P.a,{}):Object(i.jsx)(x,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress})})}}]),t}(l.a.Component),R=Object(N.d)(Object(f.b)((function(e){return{users:k(e),pageSize:z(e),totalUsersCount:A(e),currentPage:F(e),isFetching:J(e),followingInProgress:M(e)}}),{follow:c.b,unfollow:c.d,getUsers:c.c}))(E);r.default=R}}]);
//# sourceMappingURL=4.7ca67944.chunk.js.map