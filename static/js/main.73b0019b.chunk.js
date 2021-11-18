(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1I-Eb",contactForm__label:"ContactForm_contactForm__label__3Emvt"}},13:function(t,e,n){t.exports={contactList__item:"ContactList_contactList__item__1__8m",contactList__name:"ContactList_contactList__name__3Wc9W",contactList__number:"ContactList_contactList__number__1ukRz"}},19:function(t,e,n){t.exports={filter__input:"Filter_filter__input__1QrFC"}},26:function(t,e,n){},27:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(17),o=n.n(c),r=(n(26),n(20)),s=n(7),l=n(8),d=n(11),u=n(10),m=(n(27),n(5)),_=n.n(m),b=n(0);function h(t){return Object(b.jsxs)("div",{className:_.a.container,children:[" ",t.children]})}var j=n(9),f=n(2),p=n(50),O=(n(29),n(12)),g=n.n(O),C={name:"",number:""},x=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state=Object(f.a)({},C),t.handleChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(j.a)({},a,i))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.clearInput()},t.clearInput=function(){t.setState(Object(f.a)({},C))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{action:"",onSubmit:this.handleSubmit,className:g.a.contactForm,children:[Object(b.jsxs)("label",{className:g.a.contactForm__label,htmlFor:"",children:["Name",Object(b.jsx)("input",{type:"text",name:"name",placeholder:"John Snow",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(b.jsxs)("label",{className:g.a.contactForm__label,htmlFor:"",children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",placeholder:"+38(093)9995040",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(b.jsx)(p.a,{type:"submit",children:"Add contact"})]})})}}]),n}(i.a.Component),v=n(19),F=n.n(v);function S(t){var e=t.name,n=t.onChange;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("label",{htmlFor:"",children:["Find contacts by name",Object(b.jsx)("input",{className:F.a.filter__input,type:"text",name:e,placeholder:"find by name..",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n})]})})}var y=n(13),N=n.n(y);function L(t){var e=t.contacts,n=t.deleteContact;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsxs)("li",{className:N.a.contactList__item,children:[Object(b.jsx)("span",{className:N.a.contactList__name,children:t.name}),Object(b.jsx)("span",{className:N.a.contactList__number,children:t.number}),Object(b.jsx)(p.a,{variant:"danger",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})}var A=n(51),k=n(3),I=n.n(k),w=(n(46),n(47),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).onDeleteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))}),k.store.addNotification({title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f!",message:"\u041a\u043e\u043d\u0441\u0442\u0430\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",type:"warning",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2e3,onScreen:!0},touchSlidingExit:{swipe:{duration:400,timingFunction:"ease-out",delay:0},fade:{duration:400,timingFunction:"ease-out",delay:0}}})},t.duplicationCheck=function(e){return t.state.contacts.find((function(t){return t.name===e}))},t.addContact=function(e){return console.log(e),t.duplicationCheck(e.name)?void k.store.addNotification({title:"\u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430...!",message:"\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c",type:"danger",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2e3,onScreen:!0},touchSlidingExit:{swipe:{duration:400,timingFunction:"ease-out",delay:0},fade:{duration:400,timingFunction:"ease-out",delay:0}}}):(t.setState({contacts:[{id:Object(A.a)(),name:e.name,number:e.number}].concat(Object(r.a)(t.state.contacts))}),void k.store.addNotification({title:"Congratulations!",message:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}}))},t.setFilter=function(e){t.setState({filter:e.currentTarget.value.trim()})},t.getFilteredResult=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&(console.log("contacts have been updated"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(I.a,{}),Object(b.jsxs)(h,{children:[Object(b.jsx)("h1",{className:_.a.container__label,children:"Phonebook"}),Object(b.jsx)(x,{onSubmit:this.addContact}),Object(b.jsx)("h2",{className:_.a.container__contacts,children:"Contacts"}),Object(b.jsx)(S,{name:this.state.filter,onChange:this.setFilter}),Object(b.jsx)(L,{contacts:this.getFilteredResult(),deleteContact:this.onDeleteContact})]})]})}}]),n}(i.a.Component)),z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),z()},5:function(t,e,n){t.exports={container:"Container_container__3e1Mh",container__label:"Container_container__label__1-Z_y",container__contacts:"Container_container__contacts__BVr4P"}}},[[48,1,2]]]);
//# sourceMappingURL=main.73b0019b.chunk.js.map