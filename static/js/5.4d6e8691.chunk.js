(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{295:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1HoGu",dialogs_item:"Dialogs_dialogs_item__2E-6K",active:"Dialogs_active__mBY7r",dialog:"Dialogs_dialog__jNF3W",messages:"Dialogs_messages__1JAHD",message:"Dialogs_message__3cYkW",avatar:"Dialogs_avatar__JQPbr",name:"Dialogs_name__ETDH6",text:"Dialogs_text__1Rg8i"}},308:function(e,a,s){"use strict";s.r(a);var t=s(0),i=s.n(t),n=s(127),c=s(1),o=s(295),r=s.n(o),l=s(14),d=function(e){var a="/dialogs/".concat(e.id);return Object(c.jsx)("div",{className:r.a.dialog,children:Object(c.jsx)(l.b,{to:a,activeClassName:r.a.active,children:e.name})})},g=function(e){return Object(c.jsxs)("div",{className:r.a.message,children:[Object(c.jsx)("div",{className:r.a.avatar,children:Object(c.jsx)("img",{src:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",alt:"avatar"})}),Object(c.jsx)("div",{className:r.a.name,children:"Sergey"}),Object(c.jsx)("div",{className:r.a.text,children:e.message})]})},j=s(128),u=s(129),m=s(51),b=s(74),_=s(64),O=Object(_.a)(50),h=Object(u.a)({form:"dialogs"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)(j.a,{autoFocus:!0,placeholder:"New message...",validate:[_.b,O],name:"newMessageBody",component:b.a}),Object(c.jsx)("button",{children:"New Message"})]})})),f=function(e){var a=e.dialogsPage.messagesData.map((function(e){return Object(c.jsx)(g,{message:e.message},e.id)})),s=e.dialogsPage.dialogsData.map((function(e){return Object(c.jsx)(d,{name:e.name,id:e.id},e.id)}));return Object(c.jsxs)("div",{className:r.a.dialogs,children:[Object(c.jsx)("div",{className:r.a.dialogs_item,children:s}),Object(c.jsxs)("div",{className:r.a.messages,children:[a,Object(c.jsx)(h,{onSubmit:function(a){e.sendMessage(Object(m.a)(a.newMessageBody))}})]})]})},v=s(15),x=s(5),p=s(49),D=s(50),N=s(53),w=s(52),k=s(11),y=function(e){return{isAuth:e.auth.isAuth}},M=s(10),P=Object(M.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){return e(Object(n.b)(a))}}})),(function(e){var a=function(a){Object(N.a)(t,a);var s=Object(w.a)(t);function t(){return Object(p.a)(this,t),s.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(x.a)({},this.props)):Object(c.jsx)(k.a,{to:"/login"})}}]),t}(i.a.Component);return Object(v.b)(y)(a)}))(f);a.default=P}}]);
//# sourceMappingURL=5.4d6e8691.chunk.js.map