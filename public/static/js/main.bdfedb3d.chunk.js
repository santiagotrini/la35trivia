(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(31),i=c.n(r),a=(c(37),c(2)),j=c(3),o=c(8),l=c(0),u=function(e){var t=e.user,c=e.setUser,n=Object(j.f)();return Object(l.jsx)("div",{className:"Navbar",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/",children:"Inicio"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/register",children:"Registrarse"})}),Object(l.jsx)("li",{children:t?Object(l.jsx)("button",{onClick:function(e){localStorage.removeItem("token"),c(!1),n.push("/")},children:"Logout"}):Object(l.jsx)(o.b,{to:"/login",children:"Ingresar"})})]})})},b=function(e){var t=e.user,c=e.setUser,n=t.firstName;return Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsx)("h3",{children:"la35trivia"}),t&&Object(l.jsxs)("p",{children:["Hola de nuevo, ",n]}),Object(l.jsx)(u,{user:t,setUser:c})]})},d=c(12),h=c(6),O=c(5),x=c.n(O),p=function(e){var t=Object(n.useState)({username:"",password:"",firstName:"",lastName:""}),c=Object(a.a)(t,2),s=c[0],r=c[1],i=s.username,j=s.password,o=s.firstName,u=s.lastName,b=function(e){var t=e.target.name,c=e.target.value;r(Object(h.a)(Object(h.a)({},s),{},Object(d.a)({},t,c)))};return Object(l.jsxs)("div",{className:"Register",children:[Object(l.jsx)("h1",{children:"Registrarse"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/api/users",s).then((function(e){console.log(e.data),r({username:"",password:"",firstName:"",lastName:""})})).catch((function(e){return console.log(e)}))},children:[Object(l.jsx)("label",{children:"Usuario"}),Object(l.jsx)("input",{type:"text",name:"username",value:i,onChange:b}),Object(l.jsx)("label",{children:"Contrase\xf1a"}),Object(l.jsx)("input",{type:"password",name:"password",value:j,onChange:b}),Object(l.jsx)("label",{children:"Nombre"}),Object(l.jsx)("input",{type:"text",name:"firstName",value:o,onChange:b}),Object(l.jsx)("label",{children:"Apellido"}),Object(l.jsx)("input",{type:"text",name:"lastName",value:u,onChange:b}),Object(l.jsx)("button",{type:"submit",children:"Registrarse"})]})]})},m=function(e){var t=Object(j.f)(),c=Object(n.useState)({username:"",password:""}),s=Object(a.a)(c,2),r=s[0],i=s[1],o=r.username,u=r.password,b=function(e){var t=e.target.name,c=e.target.value;i(Object(h.a)(Object(h.a)({},r),{},Object(d.a)({},t,c)))};return Object(l.jsxs)("div",{className:"Login",children:[Object(l.jsx)("h1",{children:"Ingresar"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r),x.a.post("/api/users/login",r).then((function(e){console.log(e.data.token),localStorage.setItem("token",e.data.token),i({username:"",password:""}),t.push("/dashboard")})).catch((function(e){return console.log(e)}))},children:[Object(l.jsx)("label",{children:"Usuario"}),Object(l.jsx)("input",{type:"text",name:"username",value:o,onChange:b}),Object(l.jsx)("label",{children:"Contrase\xf1a"}),Object(l.jsx)("input",{type:"password",name:"password",value:u,onChange:b}),Object(l.jsx)("button",{type:"submit",children:"Ingresar"})]})]})},g=c(16),f=function(e){var t=e.user,c=e.setShow;return Object(l.jsxs)("div",{className:"Sidebar",children:[Object(l.jsx)("h2",{children:"Sidebar"}),Object(l.jsx)("button",{onClick:function(){return c("play")},children:"Jugar"}),Object(l.jsx)("button",{onClick:function(){return c("profile")},children:"Perfil"}),"student"!==t.role&&Object(l.jsx)("button",{onClick:function(){return c("new")},children:"Nueva trivia"}),"admin"===t.role&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Administraci\xf3n"}),Object(l.jsx)("button",{onClick:function(){return c("users")},children:"Usuarios"}),Object(l.jsx)("button",{onClick:function(){return c("quizzes")},children:"Trivias"}),Object(l.jsx)("button",{onClick:function(){return c("scores")},children:"Puntajes"})]})]})},v=function(e){var t=e.quiz,c=e.setPlaying,n=t.title,s=t.subject,r=t.topic,i=t.questions;return Object(l.jsxs)("div",{className:"QuizCard",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsxs)("p",{children:["Materia: ",s]}),Object(l.jsxs)("p",{children:["Tema: ",r]}),Object(l.jsxs)("p",{children:["Preguntas: ",i.length]}),Object(l.jsx)("button",{onClick:function(){return c(t)},children:"Jugar"})]})},N=function(e){var t=e.quiz,c=t.title,s=t.questions,r=Object(n.useState)(0),i=Object(a.a)(r,2),j=i[0],u=i[1],b=Object(n.useState)(0),d=Object(a.a)(b,2),h=d[0],O=d[1],p=function(e){console.log(s[j]),console.log("index: ",parseInt(e.target.id));var t=parseInt(e.target.id);u((function(e){return e+1})),t===s[j].correctAnswer&&O((function(e){return e+1}))};return Object(n.useEffect)((function(){if(j===s.length){console.log("DEBUG"),console.log("USER ID",t._id),console.log("Pregunta: ",j),console.log("Score: ",h);var e={quiz:t._id,score:h};x.a.post("/api/scores",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}})),Object(l.jsxs)("div",{className:"Quiz",children:[Object(l.jsxs)("h3",{children:["Trivia: ",c]}),j<s.length&&Object(l.jsxs)("div",{className:"QuizQuestion",children:[Object(l.jsx)("p",{children:s[j].description}),Object(l.jsx)("form",{children:s[j].options.map((function(e,t){return Object(l.jsx)("button",{onClick:p,type:"button",id:t,children:e},t)}))})]}),j===s.length&&Object(l.jsxs)("div",{className:"QuizFinished",children:[Object(l.jsxs)("p",{children:["Puntaje: ",h]}),Object(l.jsx)(o.b,{to:"/dashboard",children:"Volver"})]})]})},S=function(e){var t=e.quizzes;console.log(t);var c=Object(n.useState)(!1),s=Object(a.a)(c,2),r=s[0],i=s[1];return Object(l.jsxs)("div",{className:"Play",children:[!r&&Object(l.jsx)("div",{className:"QuizList",children:t.map((function(e){return Object(l.jsx)(v,{quiz:e,setPlaying:i},e._id)}))}),r&&Object(l.jsx)(N,{quiz:r})]})},z=function(e){var t=e.user,c=e.userScores,n=t.username,s=t.firstName,r=t.lastName,i=t.role;return Object(l.jsxs)("div",{className:"Profile",children:[Object(l.jsx)("h2",{children:"Perfil"}),Object(l.jsx)("h3",{children:n}),Object(l.jsxs)("p",{children:["Nombre y apellido: ",s," ",r]}),Object(l.jsxs)("p",{children:["Rol: ",i]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:"Puntajes:"}),c.map((function(e){return Object(l.jsxs)("p",{children:[e.quiz.title,": ",e.score]},e._id)}))]})},C=function(e){var t=e.addQuiz,c=Object(n.useState)({title:"",subject:"",topic:"",questions:[]}),s=Object(a.a)(c,2),r=s[0],i=s[1],j=Object(n.useState)({description:"",options:["","","",""],correctAnswer:0}),o=Object(a.a)(j,2),u=o[0],b=o[1],O=r.title,x=r.subject,p=r.topic,m=r.questions,f=u.description,v=u.options,N=function(e){var t=e.target.name,c=e.target.value;if("title"===t||"subject"===t||"topic"===t)i(Object(h.a)(Object(h.a)({},r),{},Object(d.a)({},t,c)));else if("description"===t)b(Object(h.a)(Object(h.a)({},u),{},Object(d.a)({},t,c)));else if("correctAnswer"===t)b(Object(h.a)(Object(h.a)({},u),{},Object(d.a)({},t,parseInt(c))));else if("options"===t){var n=parseInt(e.target.id),s=Object(g.a)(v);s[n]=c,b(Object(h.a)(Object(h.a)({},u),{},{options:s}))}};return Object(l.jsxs)("div",{className:"AddQuiz",children:[Object(l.jsx)("h2",{children:"Nueva trivia"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),i({title:"",subject:"",topic:"",questions:[]})},children:[Object(l.jsx)("label",{children:"T\xedtulo"}),Object(l.jsx)("input",{type:"text",name:"title",value:O,onChange:N}),Object(l.jsx)("label",{children:"Materia"}),Object(l.jsx)("input",{type:"text",name:"subject",value:x,onChange:N}),Object(l.jsx)("label",{children:"Tema"}),Object(l.jsx)("input",{type:"text",name:"topic",value:p,onChange:N}),Object(l.jsxs)("p",{children:["Preguntas: ",m.length]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"Question",children:[Object(l.jsx)("label",{children:"Pregunta"}),Object(l.jsx)("textarea",{name:"description",rows:"6",value:f,onChange:N}),Object(l.jsx)("label",{children:"Opci\xf3n A"}),Object(l.jsx)("input",{type:"text",name:"options",id:"0",value:v[0],onChange:N}),Object(l.jsx)("label",{children:"Opci\xf3n B"}),Object(l.jsx)("input",{type:"text",name:"options",id:"1",value:v[1],onChange:N}),Object(l.jsx)("label",{children:"Opci\xf3n C"}),Object(l.jsx)("input",{type:"text",name:"options",id:"2",value:v[2],onChange:N}),Object(l.jsx)("label",{children:"Opci\xf3n D"}),Object(l.jsx)("input",{type:"text",name:"options",id:"3",value:v[3],onChange:N}),Object(l.jsx)("p",{children:"Respuesta correcta"}),Object(l.jsxs)("div",{className:"Answers",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:0,onChange:N,type:"radio",name:"correctAnswer"}),Object(l.jsx)("label",{children:"A"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:1,onChange:N,type:"radio",name:"correctAnswer"}),Object(l.jsx)("label",{children:"B"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:2,onChange:N,type:"radio",name:"correctAnswer"}),Object(l.jsx)("label",{children:"C"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:3,onChange:N,type:"radio",name:"correctAnswer"}),Object(l.jsx)("label",{children:"D"})]})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{onClick:function(e){i(Object(h.a)(Object(h.a)({},r),{},{questions:[].concat(Object(g.a)(m),[u])})),b({description:"",options:["","","",""],correctAnswer:0})},type:"button",children:"Agregar pregunta"}),Object(l.jsx)("button",{className:"primary",type:"submit",children:"Guardar trivia"})]})]})},y=function(e){var t=e.user,c=e.updateUser,n=e.deleteUser;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t._id}),Object(l.jsx)("td",{children:t.username}),Object(l.jsx)("td",{children:t.firstName}),Object(l.jsx)("td",{children:t.lastName}),Object(l.jsx)("td",{children:t.role}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{onClick:function(e){console.log("Editar usuario");var n=prompt("Nombre?")||t.firstName,s=prompt("Apellido?")||t.lastName,r=prompt("Rol?")||t.role;c(t._id,{firstName:n,lastName:s,role:r})},children:"Editar"}),Object(l.jsx)("button",{onClick:function(){return n(t._id)},children:"Borrar"})]})]})},A=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),s=c[0],r=c[1];Object(n.useEffect)((function(){x.a.get("/api/users",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),r(e.data)})).catch((function(e){return console.log(e)}))}),[]);var i=function(e){console.log("borrando ",e),x.a.delete("/api/users/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){console.log(t.data),r(s.filter((function(t){return t._id!==e})))})).catch((function(e){return console.log(e)}))},j=function(e,t){console.log(e,t),x.a.put("/api/users/"+e,t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){console.log(t.data);var c=s.map((function(c){return c._id===e?t.data:c}));r(c)})).catch((function(e){return console.log(e)}))};return Object(l.jsxs)("div",{className:"UsersTable",children:[Object(l.jsx)("h2",{children:"UsersTable"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Nombre de usuario"}),Object(l.jsx)("th",{children:"Nombre"}),Object(l.jsx)("th",{children:"Apellido"}),Object(l.jsx)("th",{children:"Rol"}),Object(l.jsx)("th",{children:"Acciones"})]})}),Object(l.jsx)("tbody",{children:s.map((function(e){return Object(l.jsx)(y,{user:e,updateUser:j,deleteUser:i},e._id)}))})]})]})},k=function(e){var t=e.quizzes;return Object(l.jsxs)("div",{className:"QuizzesTable",children:[Object(l.jsx)("h2",{children:"QuizzesTable"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"T\xedtulo"}),Object(l.jsx)("th",{children:"Materia"}),Object(l.jsx)("th",{children:"Tema"}),Object(l.jsx)("th",{children:"Preguntas"}),Object(l.jsx)("th",{children:"Acciones"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e._id}),Object(l.jsx)("td",{children:e.title}),Object(l.jsx)("td",{children:e.subject}),Object(l.jsx)("td",{children:e.topic}),Object(l.jsx)("td",{children:e.questions.length}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{children:"Editar"}),Object(l.jsx)("button",{children:"Borrar"})]})]},e._id)}))})]})]})},w=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){x.a.get("/api/scores",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{className:"ScoresTable",children:[Object(l.jsx)("h2",{children:"ScoresTable"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Trivia"}),Object(l.jsx)("th",{children:"Usuario"}),Object(l.jsx)("th",{children:"Puntaje"}),Object(l.jsx)("th",{children:"Acciones"})]})}),Object(l.jsx)("tbody",{children:s.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e._id}),Object(l.jsx)("td",{children:e.quiz.title}),Object(l.jsx)("td",{children:e.user.username}),Object(l.jsx)("td",{children:e.score}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{children:"Editar"}),Object(l.jsx)("button",{children:"Borrar"})]})]},e._id)}))})]})]})},I=function(e){var t=e.user,c=e.setUser,s=Object(n.useState)("play"),r=Object(a.a)(s,2),i=r[0],j=r[1],o=Object(n.useState)([]),u=Object(a.a)(o,2),b=u[0],d=u[1];Object(n.useEffect)((function(){console.log("Fetch profile..."),x.a.get("/api/users/me",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),c(e.data)})).catch((function(e){console.log(e),c(!1)}))}),[c]),Object(n.useEffect)((function(){x.a.get("/api/quizzes",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),d(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=Object(n.useState)([]),O=Object(a.a)(h,2),p=O[0],m=O[1];Object(n.useEffect)((function(){console.log("FETCHING USER SCORES",t._id),x.a.get("/api/scores/"+t._id,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log("USER SCORES"),console.log(e.data),m(e.data)})).catch((function(e){return console.log(e)}))}),[t._id]);return Object(l.jsxs)("div",{className:"Dashboard",children:[Object(l.jsx)(f,{user:t,setShow:j}),"play"===i&&Object(l.jsx)(S,{quizzes:b}),"profile"===i&&Object(l.jsx)(z,{userScores:p,user:t}),"new"===i&&Object(l.jsx)(C,{addQuiz:function(e){x.a.post("/api/quizzes",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),d([].concat(Object(g.a)(b),[e.data]))})).catch((function(e){return console.log(e)}))}}),"users"===i&&Object(l.jsx)(A,{}),"quizzes"===i&&Object(l.jsx)(k,{quizzes:b}),"scores"===i&&Object(l.jsx)(w,{})]})},q=function(e){return Object(l.jsxs)("div",{className:"Landing",children:[Object(l.jsx)("h1",{children:"la35trivia"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, diam quis cursus fermentum, diam risus luctus ligula, quis mollis diam turpis ut purus."}),Object(l.jsx)(o.b,{className:"primary",to:"/register",children:"Registrarse"}),Object(l.jsx)(o.b,{to:"/login",children:"Ya tengo usuario"})]})},U=function(e){var t=e.user,c=e.setUser;return Object(l.jsx)("div",{className:"Main",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/register",children:Object(l.jsx)(p,{})}),Object(l.jsx)(j.a,{path:"/login",children:Object(l.jsx)(m,{})}),Object(l.jsx)(j.a,{path:"/dashboard",children:Object(l.jsx)(I,{user:t,setUser:c})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(q,{})})]})})},E=function(e){return Object(l.jsx)("div",{className:"Footer",children:Object(l.jsx)("h1",{children:"Footer"})})},_=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{setUser:s,user:c}),Object(l.jsx)(U,{user:c,setUser:s}),Object(l.jsx)(E,{})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(_,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.bdfedb3d.chunk.js.map