(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{295:function(e,a,s){"use strict";s.d(a,"a",(function(){return m}));var t=s(5),i=s(49),n=s(50),c=s(52),o=s(51),r=s(1),l=s(0),d=s.n(l),g=s(11),u=s(15),j=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var a=function(a){Object(c.a)(l,a);var s=Object(o.a)(l);function l(){return Object(i.a)(this,l),s.apply(this,arguments)}return Object(n.a)(l,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(t.a)({},this.props)):Object(r.jsx)(g.a,{to:"/login"})}}]),l}(d.a.Component);return Object(u.b)(j)(a)}},296:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1HoGu",dialogs_item:"Dialogs_dialogs_item__2E-6K",active:"Dialogs_active__mBY7r",dialog:"Dialogs_dialog__jNF3W",messages:"Dialogs_messages__1JAHD",message:"Dialogs_message__3cYkW",avatar:"Dialogs_avatar__JQPbr",name:"Dialogs_name__ETDH6",text:"Dialogs_text__1Rg8i"}},308:function(e,a,s){"use strict";s.r(a);s(0);var t=s(127),i=s(1),n=s(296),c=s.n(n),o=s(14),r=function(e){var a="/dialogs/".concat(e.id);return Object(i.jsx)("div",{className:c.a.dialog,children:Object(i.jsx)(o.b,{to:a,activeClassName:c.a.active,children:e.name})})},l=function(e){return Object(i.jsxs)("div",{className:c.a.message,children:[Object(i.jsx)("div",{className:c.a.avatar,children:Object(i.jsx)("img",{src:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",alt:"avatar"})}),Object(i.jsx)("div",{className:c.a.name,children:"Sergey"}),Object(i.jsx)("div",{className:c.a.text,children:e.message})]})},d=s(128),g=s(129),u=s(53),j=s(74),m=s(64),b=Object(m.a)(50),_=Object(g.a)({form:"dialogs"})((function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.jsx)(d.a,{autoFocus:!0,placeholder:"New message...",validate:[m.b,b],name:"newMessageBody",component:j.a}),Object(i.jsx)("button",{children:"New Message"})]})})),O=function(e){var a=e.dialogsPage.messagesData.map((function(e){return Object(i.jsx)(l,{message:e.message},e.id)})),s=e.dialogsPage.dialogsData.map((function(e){return Object(i.jsx)(r,{name:e.name,id:e.id},e.id)}));return Object(i.jsxs)("div",{className:c.a.dialogs,children:[Object(i.jsx)("div",{className:c.a.dialogs_item,children:s}),Object(i.jsxs)("div",{className:c.a.messages,children:[a,Object(i.jsx)(_,{onSubmit:function(a){e.sendMessage(Object(u.a)(a.newMessageBody))}})]})]})},f=s(15),h=s(295),v=s(10),x=Object(v.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){return e(Object(t.b)(a))}}})),h.a)(O);a.default=x}}]);
//# sourceMappingURL=5.d9c4d996.chunk.js.map