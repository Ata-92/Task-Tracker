(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(6),r=a.n(n),l=(a(13),a(14),a(0)),i=function(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsx)("h1",{children:"Task Tracker"})})},o=a(8),d=a(2),j=function(e){var t=e.addTask,a=Object(c.useState)(""),s=Object(d.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),j=o[0],b=o[1];return Object(l.jsx)("div",{className:"AddTask",children:Object(l.jsxs)("form",{className:"form",action:"/",method:"get",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("label",{htmlFor:"task",className:"form-label",children:"Task"}),Object(l.jsx)("input",{id:"task",className:"form-control",type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"AddTask",required:!0})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("label",{htmlFor:"dt",className:"form-label",children:"Day & Time"}),Object(l.jsx)("input",{id:"dt",className:"form-control",type:"text",value:j,onChange:function(e){return b(e.target.value)},placeholder:"Add Day & Time"})]}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("button",{className:"btn text-light w-100 saveButton",type:"button",onClick:function(){t(n,j),r(""),b("")},children:"Save Task"})})]})})},b=a(7),u=function(e){var t=e.task,a=e.deleteTask,s=Object(c.useState)(!1),n=Object(d.a)(s,2),r=n[0],i=n[1];return Object(l.jsxs)("div",{className:"Task ".concat(r," mx-2 mt-3"),onDoubleClick:function(){return i(!r)},children:[Object(l.jsxs)("h5",{className:"task px-2 pt-1",children:[t.task," ",Object(l.jsx)(b.a,{className:"text-danger closeIcon float-end",role:"button",onClick:function(){a(t.id)}})]}),Object(l.jsx)("p",{className:"dayTime px-2 pb-1",children:t.dayTime})]})};var m=function(e){var t=e.tasks,a=e.deleteTask;return Object(l.jsx)("div",{className:"Tasks",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)(u,{task:e,deleteTask:a},t)}))})},x=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(d.a)(n,2),i=r[0],b=r[1],u=function(e){console.log(e),b(i.filter((function(t){return t.id!==e})))},x=function(){s(!a)};return Object(l.jsx)("div",{className:"Button",children:a?Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("button",{className:"btn btn-danger px-3 text-light d-block mx-auto closeButton",onClick:x,children:"Close Add Task Bar"}),Object(l.jsx)(j,{addTask:function(e,t){var a=Math.floor(1e3*Math.random())+1;b([].concat(Object(o.a)(i),[{id:a,task:e,dayTime:t}]))}}),Object(l.jsx)(m,{tasks:i,deleteTask:u})]}):Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("button",{className:"btn text-light px-3 d-block mx-auto showButton",onClick:x,children:"Show Add Task Bar"}),Object(l.jsx)(m,{tasks:i,deleteTask:u})]})})};var O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"container my-5",children:[Object(l.jsx)(i,{}),Object(l.jsx)(x,{})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9fb80ed5.chunk.js.map