(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var r=t(7),a=t.n(r),s=(t(12),t(2)),n=t(1),i=t(0),o=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsxs)("div",{className:"title-wrapper",children:[Object(i.jsx)("img",{className:"logo",src:"img/critical-role.png",alt:"critrole"}),Object(i.jsx)("h1",{className:"title",children:"Memory Game"})]}),Object(i.jsx)("span",{children:"Get points by clicking on an image but don't click on any of them more than once!"})]})},j=function(e){var c=Object(n.useState)(0),t=Object(s.a)(c,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){e.score>r&&a(e.score)}),[e.score,r]),Object(i.jsxs)("div",{className:"scoreboard",children:[Object(i.jsxs)("div",{children:["Current Score: ",e.score]}),Object(i.jsxs)("div",{children:["Best Score: ",r]})]})},l=t(6),d=function(e){var c=e.character,t=c.id,r=c.character,a=c.image;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:a,alt:r,className:"card-art",onClick:function(){e.onClick(t)}}),Object(i.jsx)("span",{className:"card-text",children:r})]})},m=[{id:1,character:"Beau",image:"img/beau.png"},{id:2,character:"Caleb",image:"img/caleb.png"},{id:3,character:"Fjord",image:"img/fjord.png"},{id:4,character:"Jester",image:"img/jester.png"},{id:5,character:"Mollymauk",image:"img/mollymauk.png"},{id:6,character:"Nott",image:"img/nott.png"},{id:7,character:"Yasha",image:"img/yasha.png"}],h=function(e){var c=Object(n.useState)(m),t=Object(s.a)(c,2),r=t[0],a=t[1],o=Object(n.useState)([]),j=Object(s.a)(o,2),h=j[0],b=j[1],u=function(e){h.includes(e)?p():O(e)},O=function(e){b([].concat(Object(l.a)(h),[e])),a(g(Object(l.a)(r)))},g=function(e){for(var c=e.length-1;c>0;c--){var t=Math.floor(Math.random()*(c+1)),r=[e[t],e[c]];e[c]=r[0],e[t]=r[1]}return e},p=function(){console.log("Game Over"),b([])};return Object(n.useEffect)((function(){e.onUpdate(h.length)}),[e,h]),Object(i.jsx)("div",{className:"cards",children:r.map((function(e){return Object(i.jsx)(d,{character:e,onClick:u},e.id)}))})},b=function(){return Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("h4",{className:"about-header",children:"About"}),Object(i.jsxs)("p",{children:["Created as an assignment from"," ",Object(i.jsx)("a",{href:"https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/memory-card",children:"The Odin Project"}),"'s JavaScript curriculum"]}),Object(i.jsxs)("div",{className:"credits",children:[Object(i.jsxs)("span",{children:["Artwork: ",Object(i.jsx)("a",{href:"https://twitter.com/ornerine",children:"@ornerine"})]}),Object(i.jsxs)("span",{children:["Characters: ",Object(i.jsx)("a",{href:"https://critrole.com",children:"Critical Role"})]}),Object(i.jsxs)("span",{children:["Github: ",Object(i.jsx)("a",{href:"https://github.com/jasont01/memory-game",children:"jasont01"})]})]})]})};var u=function(){var e=Object(n.useState)(0),c=Object(s.a)(e,2),t=c[0],r=c[1];return Object(i.jsxs)("div",{className:"container bg",children:[Object(i.jsxs)("div",{className:"flex-wrapper",children:[Object(i.jsx)(o,{}),Object(i.jsx)(j,{score:t})]}),Object(i.jsx)(h,{onUpdate:function(e){return r(e)}}),Object(i.jsx)(b,{})]})};a.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85ec6f65.chunk.js.map