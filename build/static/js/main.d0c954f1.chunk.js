(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],{39:function(n,t,e){},59:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e.n(c),a=e(25),o=e.n(a),u=(e(39),e(6)),s=e.n(u),f=e(7),d=e(4),b=e(2),x=e(3);function j(){var n=Object(b.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: var(--primary);\n"]);return j=function(){return n},n}function p(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--secondary);\n  color: var(--primary-text);\n"]);return p=function(){return n},n}var l=x.b.div(p()),m=x.b.div(j()),h=e.p+"static/media/eevee-logo.d4558f95.png";function O(){var n=Object(b.a)(["\n  width: 80px;\n  height: 80px;\n  padding: 4px;\n  min-height: 50px;\n  min-width: 50px;\n"]);return O=function(){return n},n}var v=x.b.div(O());function g(){return Object(r.jsx)(v,{children:Object(r.jsx)("img",{src:h,alt:"Poke Logo"})})}function w(){var n=Object(b.a)(["\n  height: 24px;\n  width: 1px;\n  background-color: white;\n  margin: 0 10px;\n"]);return w=function(){return n},n}function k(){var n=Object(b.a)(["\n  color: rgb(255 152 152);\n"]);return k=function(){return n},n}function y(){var n=Object(b.a)(["\n  color: rgb(188 255 152);\n  padding: 5px;\n  font-size: 24px;\n\n  @media (max-width: 480px) {\n    font-size: 20px;\n  }\n"]);return y=function(){return n},n}function C(){var n=Object(b.a)(["\n  padding: 5px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return C=function(){return n},n}var z=x.b.div(C()),S=x.b.p(y()),P=Object(x.b)(S)(k()),M=x.b.div(w());function B(n){var t=n.score,e=n.bestScore;return Object(r.jsxs)(z,{children:[Object(r.jsxs)(S,{children:["Score: ",t]}),Object(r.jsx)(M,{}),Object(r.jsxs)(P,{children:["Best: ",e]})]})}function E(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  min-height: 60px;\n  background-color: var(--primary);\n\n  @media (max-width: 480px) {\n    h1 {\n      font-size: 28px;\n    }\n  }\n"]);return E=function(){return n},n}var G=x.b.header(E());function I(n){var t=n.score,e=n.bestScore;return Object(r.jsxs)(G,{children:[Object(r.jsx)(g,{}),Object(r.jsx)("h1",{children:"PokeMemory!"}),Object(r.jsx)(B,{score:t,bestScore:e})]})}function L(){var n=Object(b.a)(["\n  width: 100%;\n  background-color: #333;\n  height: 1px;\n"]);return L=function(){return n},n}function N(){var n=Object(b.a)(["\n      animation: "," ","ms 1;\n    "]);return N=function(){return n},n}function J(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 5px;\n  min-width: 60px;\n  position: relative;\n\n  border-radius: 5px;\n  border: 3px solid rgb(43 56 41);\n  background-color: rgb(64 81 62);\n  box-shadow: 0px 1px 4px #585858;\n  transition: all 200ms;\n\n  overflow: hidden;\n  cursor: pointer;\n\n  ","\n\n  img {\n    width: 200px;\n    height: 200px;\n  }\n\n  h3 {\n    font-size: 24px;\n    padding: 0 5px;\n    user-select: none;\n  }\n\n  @media (min-width: 975px) {\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n\n  @media (max-width: 975px) {\n    img {\n      width: 160px;\n      height: 160px;\n    }\n  }\n\n  @media (max-width: 575px) {\n    img {\n      width: 100px;\n      height: 100px;\n    }\n\n    h3 {\n      font-size: 20px;\n    }\n  }\n\n  @media (max-width: 480px) {\n    img {\n      width: 60px;\n      height: 60px;\n    }\n\n    h3 {\n      font-size: 16px;\n    }\n  }\n"]);return J=function(){return n},n}function T(){var n=Object(b.a)(["\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"]);return T=function(){return n},n}var _=Object(x.c)(T()),q=x.b.div(J(),(function(n){return n.animation&&Object(x.a)(N(),_,400)})),A=x.b.div(L());function D(n){var t=Object(c.useState)(),e=Object(d.a)(t,2),i=e[0],a=e[1],o=n.card,u=n.alt,s=void 0===u?o.name:u,f=n.onCardClick,b=n.animate,x=o.name,j=o.src,p=o.id;return Object(c.useEffect)((function(){a(!0);var n=setTimeout((function(){a(!1)}),400);return function(){clearTimeout(n)}}),[b]),Object(r.jsxs)(q,{onClick:function(){return f(p)},animation:i,children:[Object(r.jsx)("img",{src:j,alt:s,draggable:"false"}),Object(r.jsx)(A,{}),Object(r.jsx)("h3",{children:x})]})}function F(){var n=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 1rem;\n"]);return F=function(){return n},n}function H(){var n=Object(b.a)(["\n  flex: 1 1 auto;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return H=function(){return n},n}var K=x.b.main(H()),Q=x.b.div(F());function R(n){var t=n.cards,e=n.onCardClick,i=Object(c.useState)(),a=Object(d.a)(i,2),o=a[0],u=a[1];Object(c.useEffect)((function(){}),[o]);var s=function(n){u((function(n){return!n})),e(n)};return Object(r.jsx)(K,{children:Object(r.jsx)(Q,{children:t&&t.map((function(n){return Object(r.jsx)(D,{card:n,onCardClick:s,animate:o},n.id)}))})})}var U=e.p+"static/media/pikaSpinner.20e5d35b.svg";function V(){var n=Object(b.a)(["\n  img {\n    animation: "," 500ms linear infinite;\n    width: 100px;\n  }\n\n  p {\n    text-align: center;\n    font-size: 28px;\n    animation: "," 500ms alternate infinite;\n  }\n\n  @media (max-width: 480px) {\n    img {\n      width: 60px;\n    }\n\n    p {\n      font-size: 20px;\n    }\n  }\n\n  z-index: 2021;\n"]);return V=function(){return n},n}function W(){var n=Object(b.a)(["\n  from {\n    transform: scale(1);\n  }\n\n  to {\n    transform: scale(1.2);\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(b.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return X=function(){return n},n}var Y=Object(x.c)(X()),Z=Object(x.c)(W()),$=Object(x.b)(m)(V(),Y,Z);function nn(n){var t=n.text;return n.show&&Object(r.jsxs)($,{children:[Object(r.jsx)("img",{src:U,alt:"spinner"}),t&&Object(r.jsx)("p",{children:t})]})}function tn(){var n=Object(b.a)(["\n  margin-top: 20px;\n  color: var(--primary-text);\n  background-color: var(--secondary);\n  font-size: 24px;\n  padding: 5px 12px;\n  border: 0;\n  cursor: pointer;\n\n  :hover {\n    background-color: rgb(70 77 90);\n  }\n\n  @media (max-width: 480px) {\n    font-size: 18px;\n  }\n"]);return tn=function(){return n},n}function en(){var n=Object(b.a)(["\n  p {\n    text-align: center;\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 44px;\n  }\n\n  @media (max-width: 480px) {\n    p {\n      font-size: 20px;\n    }\n\n    h2 {\n      font-size: 28px;\n    }\n  }\n\n  z-index: 2021;\n"]);return en=function(){return n},n}var rn=Object(x.b)(m)(en()),cn=x.b.button(tn());function an(n){var t=n.score,e=n.onNewGameClick;return n.show&&Object(r.jsxs)(rn,{children:[Object(r.jsx)("h2",{children:"Game Over!"}),Object(r.jsxs)("p",{children:["Congratulations your Score is ",t]}),Object(r.jsx)(cn,{onClick:e,children:"New Game"})]})}function on(){var n=Object(b.a)(["\n  margin-top: 1rem;\n  text-decoration: underline;\n  text-align: center;\n\n  @media (max-width: 480px) {\n    font-size: 18px;\n  }\n"]);return on=function(){return n},n}var un=x.b.h2(on());function sn(n){var t=n.text;return Object(r.jsx)(un,{children:t})}var fn=e(9),dn=new(e(32).a),bn=function(n){return Promise.all(n.map((function(n){var t=n.src;return new Promise((function(n){var e=new Image;e.src=t,e.onload=function(){return n(t)}}))})))},xn=function(n){for(var t,e,r=Object(fn.a)(n),c=r.length,i=[],a=0;a<c;a+=1)e=r.length,t=Math.floor(Math.random()*e),i=[].concat(Object(fn.a)(i),Object(fn.a)(r.splice(t,1)));return i},jn=function(n){var t=function(n,t){return[t,n+t]}(n,function(n){return Math.floor(Math.random()*(897-n+2))+1}(n)),e=Object(d.a)(t,2);return function(n){return Promise.all(n.map((function(n){return dn.getPokemonByName(n)})))}(function(n,t){for(var e=[],r=n;r<t;r++)e.push(r);return e}(e[0],e[1]))},pn={getCardsBriefInfo:function(){var n=Object(f.a)(s.a.mark((function n(t){var e,r,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,jn(t);case 2:return e=n.sent,r=e.map((function(n){return{id:n.id,name:n.name,src:n.sprites.other["official-artwork"].front_default}})),n.next=6,bn(r);case 6:return c=xn(r),n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),shuffleCards:xn},ln=e(33),mn={cardsCount:4,nr:1};function hn(){var n=Object(c.useState)(!0),t=Object(d.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(!1),o=Object(d.a)(a,2),u=o[0],b=o[1],x=function(){var n=Object(c.useState)([]),t=Object(d.a)(n,2),e=t[0],r=t[1];return[function(n){return!!e.find((function(t){return t===n}))},function(n){r((function(t){var e=Object(fn.a)(t);return e.push(n),e}))},function(n){return e.length===n-1},function(){r([])}]}(),j=Object(d.a)(x,4),p=j[0],m=j[1],h=j[2],O=j[3],v=function(){var n=Object(c.useState)(null),t=Object(d.a)(n,2),e=t[0],r=t[1];return[e,function(){r((function(n){return pn.shuffleCards(n)}))},function(){var n=Object(f.a)(s.a.mark((function n(t){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,pn.getCardsBriefInfo(t);case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()]}(),g=Object(d.a)(v,3),w=g[0],k=g[1],y=g[2],C=function(){var n=Object(c.useState)(mn),t=Object(d.a)(n,2),e=t[0],r=t[1];return[e,function(){r((function(n){return{cardsCount:n.cardsCount<12?n.cardsCount+2:12,nr:n.nr+1}}))},function(){r(Object(ln.a)({},mn))}]}(),z=Object(d.a)(C,3),S=z[0],P=z[1],M=z[2],B=function(){var n=Object(c.useState)(0),t=Object(d.a)(n,2),e=t[0],r=t[1],i=Object(c.useState)(0),a=Object(d.a)(i,2),o=a[0],u=a[1];return[e,o,function(n){r((function(t){var e=t+n;return e>o&&u(e),e}))},function(){r(0)}]}(),E=Object(d.a)(B,4),G=E[0],L=E[1],N=E[2],J=E[3];Object(c.useEffect)(Object(f.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y(S.cardsCount);case 2:i(!1);case 3:case"end":return n.stop()}}),n)}))),[S]);return Object(r.jsxs)(l,{children:[Object(r.jsx)(nn,{text:"Loading Lvl ".concat(S.nr),show:e}),Object(r.jsx)(an,{score:G,onNewGameClick:function(){b(!1),i(!0),O(),J(),M()},show:u}),Object(r.jsx)(I,{score:G,bestScore:L}),Object(r.jsx)(sn,{text:"Choose your next Pokemon! Lvl ".concat(S.nr)}),Object(r.jsx)(R,{cards:w,onCardClick:function(n){p(n)?b(!0):(m(n),N(1),h(S.cardsCount)?(O(),i(!0),P()):k())}})]})}o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(hn,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.d0c954f1.chunk.js.map