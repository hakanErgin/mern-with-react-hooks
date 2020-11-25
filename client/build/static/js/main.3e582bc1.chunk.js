(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),l=a.n(r),s=(a(36),a(37),a(11)),o=a(1),u=a(3),i=a.n(u),m=a(8),p=a(10),b=a(9),f=a.n(b);function h(e){var t,a=e.label,n=e.name,r=e.str,l=e.func;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:n},a),c.a.createElement("input",{id:n,name:n,type:"text",value:(t=r,t.charAt(0).toUpperCase()+t.slice(1)),onChange:l,className:"form-control",required:!0}))}function d(e){var t=e.name,a=e.nr,n=e.func;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Phone"),c.a.createElement("input",{pattern:"[+][0-9]{9,15}",name:t,type:"text",value:a,onChange:n,className:"form-control",title:"Phone number should start with a '+', consist of numbers only and be 9 to 15 digits, not contain spaces"}))}function v(e){return"+"+e.substring(1,3)+" "+e.substring(3,5)+" "+e.substring(5,e.length)}a(56);var E=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),u=o[0],b=o[1],h=Object(n.useState)([]),d=Object(p.a)(h,2),E=d[0],g=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/articles");case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){var e=new RegExp(u,"i"),t=a.filter((function(t){return t.fname.match(e)||t.lname.match(e)||t.phone.match(e)}));g(t)}),[u,a]),c.a.createElement("div",{className:"home"},c.a.createElement("input",{type:"text",value:u,onChange:function(e){b(e.target.value)},placeholder:"Find by name/surname or number",className:"input-box"}),c.a.createElement("ul",{class:"list-group list-group-flush"},E.map((function(e,t){return c.a.createElement("li",{class:"list-group-item",key:t},c.a.createElement(s.b,{to:"/articles/".concat(e._id)},e.fname," ",e.lname),v(e.phone))}))))};var g=function(e){var t=Object(n.useState)({}),a=Object(p.a)(t,2),r=a[0],l=a[1];function o(){return(o=Object(m.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.delete("/api/articles/".concat(e.match.params._id));case 3:e.history.push("/"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){function t(){return(t=Object(m.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/articles/".concat(e.match.params._id));case 3:a=t.sent,l(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.a.createElement("div",null,c.a.createElement("h2",null,r.fname," ",r.lname),c.a.createElement("p",null,"Number: ",r.phone&&v(r.phone)),c.a.createElement("br",null),c.a.createElement("div",{className:"btn-group"},c.a.createElement(s.b,{to:"/articles/".concat(r._id,"/edit"),className:"btn btn-primary"},"Edit"),c.a.createElement("button",{onClick:function(){return o.apply(this,arguments)},className:"btn btn-danger"},"Delete"),c.a.createElement(s.b,{to:"/",className:"btn btn-secondary"},"Close")))},y=a(13),j=a(14);var O=function(e){var t=e.article,a=e.handleSubmit,n=e.handleCancel,r=e.handleChange;return c.a.createElement("div",null,c.a.createElement("h1",null,"Create Contact"),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:a,"data-testid":"form"},c.a.createElement(h,{label:"First Name",name:"fname",str:t.fname,func:r}),c.a.createElement(h,{label:"Last Name",name:"lname",str:t.lname,func:r}),c.a.createElement(d,{name:"phone",nr:t.phone,func:r}),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{"data-testid":"submitButton",className:"btn btn-primary"},"Submit"),c.a.createElement("button",{"data-testid":"cancelButton",type:"button",onClick:n,className:"btn btn-secondary"},"Cancel"))))};var x=function(e){var t=Object(n.useState)({fname:"",lname:"",phone:"+"}),a=Object(p.a)(t,2),r=a[0],l=a[1];function s(){return(s=Object(m.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.post)("/api/articles",a);case 3:n=t.sent,e.history.push("/articles/".concat(n.data._id)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return c.a.createElement(O,{article:r,handleChange:function(e){l(Object(j.a)(Object(j.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),function(e){s.apply(this,arguments)}(r)},handleCancel:function(){e.history.push("/")}})};var N=function(e){var t=Object(n.useState)({fname:"",lname:"",phone:""}),a=Object(p.a)(t,2),r=a[0],l=a[1];function s(e){l(Object(j.a)(Object(j.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))}function o(){return(o=Object(m.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.patch)("/api/articles/".concat(r._id),r);case 3:e.history.push("/articles/".concat(r._id)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){function t(){return(t=Object(m.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.get)("/api/articles/".concat(e.match.params._id));case 3:a=t.sent,l(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.a.createElement("div",null,c.a.createElement("h1",null,"Edit ",r.title),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){o.apply(this,arguments)}()}},c.a.createElement(h,{label:"First Name",name:"fname",str:r.fname,func:s}),c.a.createElement(h,{label:"Last Name",name:"lname",str:r.lname,func:s}),c.a.createElement(d,{name:"phone",nr:r.phone,func:s}),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{className:"btn btn-primary"},"Update"),c.a.createElement("button",{type:"button",onClick:function(){e.history.push("/articles/".concat(r._id))},className:"btn btn-secondary"},"Cancel"))))};function k(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-4"},c.a.createElement("div",{className:"container"},c.a.createElement(s.c,{exact:!0,className:"nav-link",activeClassName:"active",to:"/"},"Phone book"),c.a.createElement(s.b,{to:"/articles/new",className:"btn btn-primary float-right"},"+")))}function w(){return c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:E}),c.a.createElement(o.a,{exact:!0,path:"/articles/new",component:x}),c.a.createElement(o.a,{exact:!0,path:"/articles/:_id",component:g}),c.a.createElement(o.a,{exact:!0,path:"/articles/:_id/edit",component:N}))}var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement(k,null),c.a.createElement("div",{className:"container"},c.a.createElement(w,null))))};l.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3e582bc1.chunk.js.map