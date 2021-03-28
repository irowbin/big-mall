(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[6],{101:function(e,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return E}));var t,n,r,c=s(29),i=s(30),l=s(32),o=s(31),d=s(1),h=s.n(d),j=s(51),b=s(6),u=s(40),m=s(3),p=function(e){var a=e.type,s=e.name,t=e.placeholder,n=e.handleChanges,r=e.handleBlur,c=Object(u.a)(e,["type","name","placeholder","handleChanges","handleBlur"]);return"textarea"===a?Object(m.jsx)("textarea",{className:"form-control",placeholder:t,onChange:n,onBlur:r,name:s,rows:"3"}):Object(m.jsx)("input",Object(b.a)({className:"form-control",type:a,name:s,placeholder:t,onChange:n,onBlur:r},c))},x=s(25),g=s(88),v=s(89),O=v.a.div(t||(t=Object(g.a)(["\n  background: rgba(255, 255, 255,.64);\n  border-radius: 5px;\n  padding: 20px;\n  box-shadow: 0 9px 20px -8px #929292;\n"]))),w=v.a.div(n||(n=Object(g.a)(["\n  display: flex;\n  height: 50px;\n  position: fixed;\n  right: 10px;\n  top: 10px;\n  max-width: 200px;\n  color: rgba(255, 255, 255, 0.83);\n  padding: 10px;\n  z-index: 1050;\n  background: #718c15;\n  box-shadow: 0 0 10px -2px #474747;\n  border-radius: 4px;\n  transition: all .2s;\n  outline: none;\n\n  &:hover {\n    background: #87a719;\n  }\n"]))),f=v.a.div(r||(r=Object(g.a)(["\n  display: inline-block;\n  transform: rotate(45deg);\n  height: 24px;\n  width: 12px;\n  border-bottom: 4px solid #fff;\n  border-right: 4px solid #fff;\n"]))),N=function(e){e.isError;var a=e.message;return Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{style:{width:"30px",padding:"0 6px"},children:Object(m.jsx)(f,{})}),Object(m.jsx)("div",{className:"ml-3",children:a}),Object(m.jsx)("div",{children:"x"})]})},C=function(e){Object(l.a)(s,e);var a=Object(o.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=a.call(this,e)).handleChanges=function(e){var a=e.target,s=a.name,n=a.value;t.setState(Object(j.a)({},s,n))},t.saveChanges=function(){var e=t.state,a=e.username,s=e.password;x.a.signInWithEmailAndPassword(a,s).then((function(){t.setState({username:"",password:"",responseMsg:{isError:!1,message:"Login Successful!"}})})).catch((function(e){var a;return"EMAIL_NOT_FOUND"===(null===(a=e.error)||void 0===a?void 0:a.message)?t.setState({responseMsg:{isError:!0,message:"Account Not Found"}}):null})),setTimeout((function(){return t.setState({responseMsg:{message:""}})}))},t.state={username:"",password:"",responseMsg:{message:""}},t}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state.responseMsg,a=e.isError,s=e.message;return Object(m.jsxs)("div",{className:"row mt-5 mx-auto w-75",children:[s?Object(m.jsx)(N,{isError:a,messgae:s}):null,Object(m.jsx)(O,{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col h5 mb-4 text-muted font-weight-bold",children:"Sign in to your account"}),Object(m.jsx)("div",{className:"col-12 mb-2",children:Object(m.jsx)(p,{placeholder:"Username",type:"text",name:"username",value:this.state.username,handleChanges:this.handleChanges})}),Object(m.jsx)("div",{className:"col-12 mb-2",children:Object(m.jsx)(p,{placeholder:"Password",type:"password",name:"password",value:this.state.password,handleChanges:this.handleChanges})}),Object(m.jsxs)("div",{className:"col-12 d-flex justify-content-end",children:[Object(m.jsx)("button",{onClick:this.saveChanges,className:"btn btn-info",children:"Login"}),Object(m.jsx)("button",{onClick:x.d,className:"btn btn-outline-danger ml-3",children:"Signin with google"})]})]})})]})}}]),s}(h.a.Component),y=s(17),P=s.n(y),k=s(36),S=function(e){Object(l.a)(s,e);var a=Object(o.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=a.call(this,e)).initialState={displayName:"",email:"",password:"",cPassword:"",isPasswordEqual:!1,isPasswordChanged:!1},t.validateEqualPassword=function(){var e=t.state.isPasswordChanged,a=t.state,s=a.password,n=a.cPassword,r=(null===s||void 0===s?void 0:s.length)>0&&(null===n||void 0===n?void 0:n.length)>0&&s===n;return r&&e?"":r||e?Object(m.jsx)("span",{className:"text-danger",children:"Password does not match"}):""},t.handleChanges=function(e){var a=e.target,s=a.name,n=a.value;"cPassword"===s&&t.setState({isPasswordChanged:!0}),t.setState(Object(j.a)({},s,n))},t.saveChanges=Object(k.a)(P.a.mark((function e(){var a,s,n,r,c,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,s=a.email,n=a.password,r=a.displayName,e.next=3,x.a.createUserWithEmailAndPassword(s,n);case 3:return c=e.sent,i=c.user,e.prev=5,e.next=8,Object(x.b)(i,{displayName:r});case 8:t.setState(Object(b.a)({},t.initialState)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[5,11]])}))),t.state=Object(b.a)({},t.initialState),t}return Object(i.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"row mt-5 mx-auto w-75",children:Object(m.jsx)(O,{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col h5 mb-4 text-muted font-weight-bold",children:"Create an account"}),Object(m.jsx)("div",{className:"col-12 mb-2",children:Object(m.jsx)(p,{placeholder:"Display Name",type:"text",name:"displayName",value:this.state.displayName,handleChanges:this.handleChanges})}),Object(m.jsx)("div",{className:"col-12 mb-2",children:Object(m.jsx)(p,{placeholder:"email",type:"email",name:"email",value:this.state.email,handleChanges:this.handleChanges})}),Object(m.jsx)("div",{className:"col-12 mb-2",children:Object(m.jsx)(p,{placeholder:"Password",type:"password",name:"password",value:this.state.password,handleChanges:this.handleChanges})}),Object(m.jsxs)("div",{className:"col-12 mb-2",children:[Object(m.jsx)(p,{placeholder:"Confirm password",type:"password",name:"cPassword",value:this.state.cPassword,handleChanges:this.handleChanges}),this.validateEqualPassword()]}),Object(m.jsx)("div",{className:"col-12 d-flex justify-content-end",children:Object(m.jsx)("button",{onClick:this.saveChanges,disabled:!!this.validateEqualPassword(),className:"btn btn-info",children:"Register"})})]})})})}}]),s}(h.a.Component),E=function(e){Object(l.a)(s,e);var a=Object(o.a)(s);function s(){return Object(c.a)(this,s),a.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)(C,{})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)(S,{})})]})})}}]),s}(d.Component)}}]);
//# sourceMappingURL=6.1ef57505.chunk.js.map