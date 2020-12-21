(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],{38:function(n,t,e){},58:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),i=e.n(c),a=e(25),o=e.n(a),u=(e(38),e(8)),s=e(6),f=e.n(s),d=e(11),x=e(4),b=e(2),p=e(3);function l(){var n=Object(b.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: var(--primary);\n"]);return l=function(){return n},n}function j(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--primary);\n  color: var(--primary-text);\n"]);return j=function(){return n},n}var m=p.b.div(j()),h=p.b.div(l()),O=e.p+"static/media/eevee-logo.d4558f95.png";function v(){var n=Object(b.a)(["\n  width: 80px;\n  min-width: 50px;\n"]);return v=function(){return n},n}var g=p.b.div(v());function w(){return Object(r.jsx)(g,{children:Object(r.jsx)("img",{src:O,alt:"Poke Logo"})})}function y(){var n=Object(b.a)(["\n  height: 24px;\n  width: 1px;\n  background-color: white;\n  margin: 0 10px;\n"]);return y=function(){return n},n}function k(){var n=Object(b.a)(["\n  color: rgb(255 152 152);\n"]);return k=function(){return n},n}function C(){var n=Object(b.a)(["\n  color: rgb(188 255 152);\n  padding: 5px;\n  font-size: 24px;\n\n  @media (max-width: 480px) {\n    font-size: 20px;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(b.a)(["\n  padding: 5px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return z=function(){return n},n}var S=p.b.div(z()),L=p.b.p(C()),P=Object(p.b)(L)(k()),M=p.b.div(y());function B(n){var t=n.score,e=n.bestScore;return Object(r.jsxs)(S,{children:[Object(r.jsxs)(L,{children:["Score: ",t]}),Object(r.jsx)(M,{}),Object(r.jsxs)(P,{children:["Best: ",e]})]})}function E(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  min-height: 60px;\n  padding: 10px;\n  background-color: var(--secondary);\n  border-bottom: 3px solid var(--complimentary);\n  box-shadow: inset 0px 5px 6px var(--primary);\n\n  @media (max-width: 480px) {\n    h1 {\n      font-size: 28px;\n    }\n  }\n"]);return E=function(){return n},n}var G=p.b.header(E());function I(n){var t=n.score,e=n.bestScore;return Object(r.jsxs)(G,{children:[Object(r.jsx)(w,{}),Object(r.jsx)("h1",{children:"PokeMemory!"}),Object(r.jsx)(B,{score:t,bestScore:e})]})}function N(){var n=Object(b.a)(["\n  width: 100%;\n  background-color: #333;\n  height: 1px;\n"]);return N=function(){return n},n}function J(){var n=Object(b.a)(["\n      animation: "," ","ms 1;\n    "]);return J=function(){return n},n}function T(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 5px;\n  min-width: 60px;\n  position: relative;\n\n  border-radius: 5px;\n  border: 3px solid rgb(43 56 41);\n  background-color: rgb(64 81 62);\n  box-shadow: 0px 1px 4px #585858;\n  transition: all 200ms;\n\n  overflow: hidden;\n  cursor: pointer;\n\n  ","\n\n  img {\n    width: 200px;\n    height: 200px;\n  }\n\n  h3 {\n    font-size: 24px;\n    padding: 0 5px;\n    user-select: none;\n  }\n\n  @media (min-width: 975px) {\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n\n  @media (max-width: 975px) {\n    img {\n      width: 160px;\n      height: 160px;\n    }\n  }\n\n  @media (max-width: 575px) {\n    img {\n      width: 100px;\n      height: 100px;\n    }\n\n    h3 {\n      font-size: 20px;\n    }\n  }\n\n  @media (max-width: 480px) {\n    img {\n      width: 60px;\n      height: 60px;\n    }\n\n    h3 {\n      font-size: 16px;\n    }\n  }\n"]);return T=function(){return n},n}function _(){var n=Object(b.a)(["\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"]);return _=function(){return n},n}var q=Object(p.c)(_()),A=p.b.div(T(),(function(n){return n.animation&&Object(p.a)(J(),q,400)})),D=p.b.div(N());function F(n){var t=Object(c.useState)(),e=Object(x.a)(t,2),i=e[0],a=e[1],o=n.card,u=n.alt,s=void 0===u?o.name:u,f=n.onCardClick,d=n.animate,b=o.name,p=o.src,l=o.id;return Object(c.useEffect)((function(){a(!0);var n=setTimeout((function(){a(!1)}),400);return function(){clearTimeout(n)}}),[d]),Object(r.jsxs)(A,{onClick:function(){return f(l)},animation:i,children:[Object(r.jsx)("img",{src:p,alt:s,draggable:"false"}),Object(r.jsx)(D,{}),Object(r.jsx)("h3",{children:b})]})}function H(){var n=Object(b.a)(["\n  text-decoration: underline;\n\n  @media (max-width: 480px) {\n    font-size: 18px;\n  }\n"]);return H=function(){return n},n}var K=p.b.h2(H());function Q(n){var t=n.text;return Object(r.jsx)(K,{children:t})}var R=e.p+"static/media/pikaSpinner.20e5d35b.svg";function U(){var n=Object(b.a)(["\n  img {\n    animation: "," 500ms linear infinite;\n    width: 100px;\n  }\n\n  p {\n    text-align: center;\n    font-size: 28px;\n    animation: "," 500ms alternate infinite;\n  }\n\n  @media (max-width: 480px) {\n    img {\n      width: 60px;\n    }\n\n    p {\n      font-size: 20px;\n    }\n  }\n\n  z-index: 2021;\n"]);return U=function(){return n},n}function V(){var n=Object(b.a)(["\n  from {\n    transform: scale(1);\n  }\n\n  to {\n    transform: scale(1.2);\n  }\n"]);return V=function(){return n},n}function W(){var n=Object(b.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return W=function(){return n},n}var X=Object(p.c)(W()),Y=Object(p.c)(V()),Z=Object(p.b)(h)(U(),X,Y);function $(n){var t=n.text;return Object(r.jsxs)(Z,{children:[Object(r.jsx)("img",{src:R,alt:"spinner"}),t&&Object(r.jsx)("p",{children:t})]})}function nn(){var n=Object(b.a)(["\n  flex: 1 1 auto;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 10px;\n  padding: 5px;\n"]);return tn=function(){return n},n}var en=p.b.div(tn()),rn=p.b.main(nn());function cn(n){var t=n.cards,e=n.onCardClick,i=n.lvl,a=n.appLoaded,o=Object(c.useState)(),u=Object(x.a)(o,2),s=u[0],f=u[1];Object(c.useEffect)((function(){}),[s]);var d=function(n){f((function(n){return!n})),e(n)};return Object(r.jsxs)(rn,{children:[Object(r.jsx)(Q,{text:"Choose your next Pokemon! Lvl ".concat(i.nr)}),Object(r.jsx)(en,{children:t?t.map((function(n){return Object(r.jsx)(F,{card:n,onCardClick:d,animate:s},n.id)})):a&&Object(r.jsx)($,{text:"Loading Lvl ".concat(i.nr)})})]})}function an(){var n=Object(b.a)(["\n  margin-top: 20px;\n  color: var(--primary-text);\n  background-color: var(--secondary);\n  font-size: 24px;\n  padding: 5px 12px;\n  border: 0;\n  cursor: pointer;\n\n  :hover {\n    background-color: rgb(70 77 90);\n  }\n\n  @media (max-width: 480px) {\n    font-size: 18px;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(b.a)(["\n  p {\n    text-align: center;\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 44px;\n  }\n\n  @media (max-width: 480px) {\n    p {\n      font-size: 20px;\n    }\n\n    h2 {\n      font-size: 28px;\n    }\n  }\n\n  z-index: 2021;\n"]);return on=function(){return n},n}var un=Object(p.b)(h)(on()),sn=p.b.button(an());function fn(n){var t=n.score,e=n.onNewGameClick;return Object(r.jsxs)(un,{children:[Object(r.jsx)("h2",{children:"Game Over!"}),Object(r.jsxs)("p",{children:["Congratulations your Score is ",t]}),Object(r.jsx)(sn,{onClick:e,children:"New Game"})]})}var dn=new(e(32).a),xn=function(n){return Promise.all(n.map((function(n){var t=n.src;return new Promise((function(n){var e=new Image;e.src=t,e.onload=function(){return n(t)}}))})))},bn=function(n){for(var t,e,r=Object(u.a)(n),c=r.length,i=[],a=0;a<c;a+=1)e=r.length,t=Math.floor(Math.random()*e),i=[].concat(Object(u.a)(i),Object(u.a)(r.splice(t,1)));return i},pn=function(n){var t=function(n,t){return[t,n+t]}(n,function(n){return Math.floor(Math.random()*(897-n+2))+1}(n)),e=Object(x.a)(t,2);return function(n){return Promise.all(n.map((function(n){return dn.getPokemonByName(n)})))}(function(n,t){for(var e=[],r=n;r<t;r++)e.push(r);return e}(e[0],e[1]))},ln={getCardsBriefInfo:function(){var n=Object(d.a)(f.a.mark((function n(t){var e,r,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,pn(t);case 2:return e=n.sent,r=e.map((function(n){return{id:n.id,name:n.name,src:n.sprites.other["official-artwork"].front_default}})),n.next=6,xn(r);case 6:return c=bn(r),n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),shuffleCards:bn};function jn(){var n=Object(c.useState)(!1),t=Object(x.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(!1),o=Object(x.a)(a,2),s=o[0],b=o[1],p=Object(c.useState)([]),l=Object(x.a)(p,2),j=l[0],h=l[1],O=Object(c.useState)(),v=Object(x.a)(O,2),g=v[0],w=v[1],y=Object(c.useState)({cardsCount:4,nr:1}),k=Object(x.a)(y,2),C=k[0],z=k[1],S=Object(c.useState)(0),L=Object(x.a)(S,2),P=L[0],M=L[1],B=Object(c.useState)(0),E=Object(x.a)(B,2),G=E[0],N=E[1];Object(c.useEffect)(Object(d.a)(f.a.mark((function n(){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ln.getCardsBriefInfo(C.cardsCount);case 2:t=n.sent,w(t),e||i(!0);case 5:case"end":return n.stop()}}),n)}))),[C]),Object(c.useEffect)((function(){j.length&&j.length===C.cardsCount&&(z((function(n){return{cardsCount:n.cardsCount<12?n.cardsCount+2:12,nr:n.nr+1}})),h([]),w(null))}),[j]);return Object(r.jsxs)(m,{children:[!e&&Object(r.jsx)($,{text:"Loading.."}),s&&Object(r.jsx)(fn,{score:P,onNewGameClick:function(){b(!1),h([]),M(0),w(null),z({cardsCount:4,nr:1})}}),Object(r.jsx)(I,{score:P,bestScore:G}),Object(r.jsx)(cn,{cards:g,onCardClick:function(n){var t=!!j.find((function(t){return t===n}));t||(h((function(t){var e=Object(u.a)(t);return e.push(n),e})),w((function(n){return ln.shuffleCards(n)})),M((function(n){var t=n+1;return t>G&&N(t),t}))),t&&b(!0)},lvl:C,appLoaded:e})]})}o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(jn,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.fddc735d.chunk.js.map