(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7)),i=function(e){var t=e.inputText,a=e.setInputText,o=e.todos,c=e.setTodos,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{value:t,onChange:function(e){console.log(e.target.value),a(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),c([].concat(Object(r.a)(o),[{text:t,completed:!1,id:1e3*Math.random()}])),a("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},m=a(4),u=function(e){var t=e.text,a=(e.id,e.todos),o=e.setTodos,c=e.todo;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(c.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){o(a.map((function(e){return e.id===c.id?Object(m.a)(Object(m.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){o(a.filter((function(e){return e.id!==c.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(u,{todo:e,setTodos:a,todos:t,text:e.text,key:e.id})}))))},f=function(){return n.a.createElement("footer",null,n.a.createElement("h2",null,"\xa9 Sameer Jha ("," ",n.a.createElement("a",{href:"https://sameer-jha.github.io"},n.a.createElement("i",{className:"fas fa-globe"}))," ","|"," ",n.a.createElement("a",{href:"https://github.com/Sameer-Jha"},n.a.createElement("i",{className:"fab fa-github"}))," ",")"))};var p=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),m=r[0],u=r[1],p=Object(o.useState)("all"),E=Object(s.a)(p,2),h=E[0],b=E[1],g=Object(o.useState)([]),v=Object(s.a)(g,2),N=v[0],O=v[1];return Object(o.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));u(e)}}()}),[]),Object(o.useEffect)((function(){!function(){switch(h){case"completed":O(m.filter((function(e){return!0===e.completed})));break;case"uncompleted":O(m.filter((function(e){return!1===e.completed})));break;default:O(m)}}(),localStorage.setItem("todos",JSON.stringify(m))}),[m,h]),n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"My Todo List")),n.a.createElement(i,{inputText:a,setInputText:c,todos:m,setTodos:u,setStatus:b}),n.a.createElement(d,{todos:m,setTodos:u,filteredTodos:N}),n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e12e325c.chunk.js.map