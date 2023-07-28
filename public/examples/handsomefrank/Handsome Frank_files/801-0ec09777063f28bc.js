"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{3999:function(n,e){var t=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.G=function(n){if(!n)return!1;if(n.length>254)return!1;if(!t.test(n))return!1;var e=n.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(n){return n.length>63}))}},2181:function(n,e,t){var r=t(7294);function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function i(n,e){var t={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return e-n}return{measure:function(r){return"number"===typeof n?e*Number(n):t[n](r)}}}function u(n,e){var t=Math.abs(n-e);function r(e){return e<n}function o(n){return n>e}function i(n){return r(n)||o(n)}return{constrain:function(t){return i(t)?r(t)?n:e:t},length:t,max:e,min:n,reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(n){return t?n-t*Math.ceil((n-e)/t):n}}}function a(n,e,t){var r=u(0,n),o=r.min,i=r.constrain,c=n+1,s=f(e);function f(n){return t?Math.abs((c+n)%c):i(n)}function d(){return s}function l(n){return s=f(n),p}var p={add:function(n){return l(d()+n)},clone:function(){return a(n,d(),t)},get:d,set:l,min:o,max:n};return p}function c(){var n=[];var e={add:function(t,r,o,i){return void 0===i&&(i=!1),t.addEventListener(r,o,i),n.push((function(){return t.removeEventListener(r,o,i)})),e},removeAll:function(){return n=n.filter((function(n){return n()})),e}};return e}function s(n){var e=n;function t(n){return e/=n,o}function r(n){return"number"===typeof n?n:n.get()}var o={add:function(n){return e+=r(n),o},divide:t,get:function(){return e},multiply:function(n){return e*=n,o},normalize:function(){return 0!==e&&t(e),o},set:function(n){return e=r(n),o},subtract:function(n){return e-=r(n),o}};return o}function f(n){return n?n/Math.abs(n):0}function d(n,e){return Math.abs(n-e)}function l(n,e){for(var t=[],r=0;r<n.length;r+=e)t.push(n.slice(r,r+e));return t}function p(n){return Object.keys(n).map(Number)}function g(n){return n[v(n)]}function v(n){return Math.max(0,n.length-1)}function m(n,e){var t=n.classList;e&&t.contains(e)&&t.remove(e)}function h(n,e){var t=n.classList;e&&!t.contains(e)&&t.add(e)}function x(n,e,t,r,o,i,u,a,l,p,g,v,m,h,x){var y=n.scroll,b=n.cross,w=["INPUT","SELECT","TEXTAREA"],M=s(0),S=s(0),E=s(0),A=c(),T=c(),C={mouse:2.5,touch:3.5},P={mouse:5,touch:7},k=o?5:16,D=!1,z=!1,O=!1,B=!1;function I(n){if(!(B="mousedown"===n.type)||0===n.button){var e=d(r.get(),u.get())>=2,o=B||!e,a=!function(n){var e=n.nodeName||"";return w.indexOf(e)>-1}(n.target),c=e||B&&a;D=!0,i.pointerDown(n),E.set(r),r.set(u),p.useBaseMass().useSpeed(80),function(){var n=B?document:t;T.add(n,"touchmove",L).add(n,"touchend",N).add(n,"mousemove",L).add(n,"mouseup",N)}(),M.set(i.readPoint(n,y)),S.set(i.readPoint(n,b)),m.emit("pointerDown"),o&&(O=!1),c&&n.preventDefault()}}function L(n){if(!z&&!B){if(!n.cancelable)return N();var t=i.readPoint(n,y).get(),o=i.readPoint(n,b).get(),u=d(t,M.get()),c=d(o,S.get());if(!(z=u>c)&&!O)return N()}var s=i.pointerMove(n);!O&&s&&(O=!0),a.start(),r.add(e.applyTo(s)),n.preventDefault()}function N(){var n=g.byDistance(0,!1).index!==v.get(),t=i.pointerUp()*(o?P:C)[B?"mouse":"touch"],u=function(n,e){var t=v.clone().add(-1*f(n)),r=t.get()===v.min||t.get()===v.max,i=g.byDistance(n,!o).distance;return o||Math.abs(n)<20?i:!h&&r?.6*i:x&&e?.5*i:g.byIndex(t.get(),0).distance}(e.applyTo(t),n),a=function(n,e){if(0===n||0===e)return 0;if(Math.abs(n)<=Math.abs(e))return 0;var t=d(Math.abs(n),Math.abs(e));return Math.abs(t/n)}(t,u),c=d(r.get(),E.get())>=.5,s=n&&a>.75,y=Math.abs(t)<20,b=s?10:k,w=s?1+2.5*a:1;c&&!B&&(O=!0),z=!1,D=!1,T.removeAll(),p.useSpeed(y?9:b).useMass(w),l.distance(u,!o),B=!1,m.emit("pointerUp")}function F(n){O&&n.preventDefault()}return{addActivationEvents:function(){var n=t;A.add(n,"touchmove",(function(){})).add(n,"touchend",(function(){})).add(n,"touchstart",I).add(n,"mousedown",I).add(n,"touchcancel",N).add(n,"contextmenu",N).add(n,"click",F)},clickAllowed:function(){return!O},pointerDown:function(){return D},removeAllEvents:function(){A.removeAll(),T.removeAll()}}}function y(n,e,t){var r=function(n){var e=Math.pow(10,n);return function(n){return Math.round(n*e)/e}}(2),o=s(0),i=s(0),u=s(0),a=0,c=e,d=t;function l(n){return c=n,g}function p(n){return d=n,g}var g={direction:function(){return a},seek:function(e){u.set(e).subtract(n);var t,r,s,l=(t=u.get(),(s=0)+(t-(r=0))/(100-r)*(c-s));return a=f(u.get()),u.normalize().multiply(l).subtract(o),function(n){n.divide(d),i.add(n)}(u),g},settle:function(e){var t=e.get()-n.get(),o=!r(t);return o&&n.set(e),o},update:function(){o.add(i),n.add(o),i.multiply(0)},useBaseMass:function(){return p(t)},useBaseSpeed:function(){return l(e)},useMass:p,useSpeed:l};return g}function b(n,e,t,r){var o=!1;return{constrain:function(i){if(!o&&n.reachedAny(t.get())&&n.reachedAny(e.get())){var u=i?.7:.45,a=t.get()-e.get();t.subtract(a*u),!i&&Math.abs(a)<10&&(t.set(n.constrain(t.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(n){o=!n}}}function w(n,e,t,r,o){var i=u(-e+n,t[0]),a=r.map(i.constrain);return{snapsContained:function(){if(e<=n)return[i.max];if("keepSnaps"===o)return a;var t=function(){var n=a[0],e=g(a),t=a.lastIndexOf(n),r=a.indexOf(e)+1;return u(t,r)}(),r=t.min,c=t.max;return a.slice(r,c)}()}}function M(n,e,t,r,o){var i=u(t.min+e.measure(.1),t.max+e.measure(.1)),a=i.reachedMin,c=i.reachedMax;return{loop:function(e){if(function(n){return 1===n?c(r.get()):-1===n&&a(r.get())}(e)){var t=n*(-1*e);o.forEach((function(n){return n.add(t)}))}}}}function S(n){var e=n.max,t=n.length;return{get:function(n){return(n-e)/-t}}}function E(n,e,t,r,o,i){var u=n.startEdge,a=n.endEdge,c=o.map((function(n){return r[u]-n[u]})).map(t.measure).map((function(n){return-Math.abs(n)})),s=function(){var n=l(c,i).map((function(n){return n[0]})),r=l(o,i).map((function(n){return g(n)[a]-n[0][u]})).map(t.measure).map(Math.abs).map(e.measure);return n.map((function(n,e){return n+r[e]}))}();return{snaps:c,snapsAligned:s}}function A(n,e,t,r,o){var i=r.reachedAny,u=r.removeOffset,a=r.constrain;function c(n,e){return Math.abs(n)<Math.abs(e)?n:e}function s(e,r){var o=e,i=e+t,u=e-t;if(!n)return o;if(!r)return c(c(o,i),u);var a=c(o,1===r?i:u);return Math.abs(a)*r}return{byDistance:function(t,r){var c=o.get()+t,f=function(t){var r=n?u(t):a(t);return{index:e.map((function(n){return n-r})).map((function(n){return s(n,0)})).map((function(n,e){return{diff:n,index:e}})).sort((function(n,e){return Math.abs(n.diff)-Math.abs(e.diff)}))[0].index,distance:r}}(c),d=f.index,l=f.distance,p=!n&&i(c);return!r||p?{index:d,distance:t}:{index:d,distance:t+s(e[d]-l,0)}},byIndex:function(n,t){return{index:n,distance:s(e[n]-o.get(),t)}},shortcut:s}}function T(n,e,t,r,o,i,u,a){var c=p(r),s=p(r).reverse(),f=function(){var n=o[0]-1;return g(l(s,n),"end")}().concat(function(){var n=e-o[0]-1;return g(l(c,n),"start")}());function d(n,e){return n.reduce((function(n,e){return n-r[e]}),e)}function l(n,e){return n.reduce((function(n,t){return d(n,e)>0?n.concat([t]):n}),[])}function g(n,e){var r="start"===e,o=r?-t:t,a=i.findSlideBounds(o);return n.map((function(n){var e=r?0:-t,o=r?t:0,i=a.filter((function(e){return e.index===n}))[0][r?"end":"start"];return{point:i,getTarget:function(){return u.get()>i?e:o},index:n,location:-1}}))}return{canLoop:function(){return f.every((function(n){var t=n.index;return d(c.filter((function(n){return n!==t})),e)<=0}))},clear:function(){f.forEach((function(e){var t=e.index;a[t].style[n.startEdge]=""}))},loop:function(){f.forEach((function(e){var t=e.getTarget,r=e.location,o=e.index,i=t();i!==r&&(a[o].style[n.startEdge]=i+"%",e.location=i)}))},loopPoints:f}}function C(n,e,t){var r=c(),o=r.removeAll,i=0;function u(n){9===n.keyCode&&(i=(new Date).getTime())}function a(o,u){r.add(o,"focus",(function(){if(!((new Date).getTime()-i>10)){n.scrollLeft=0;var r=Math.floor(u/t);e.index(r,0)}}),!0)}return{addActivationEvents:function(n){r.add(document,"keydown",u,!1),n.forEach(a)},removeAllEvents:o}}function P(n,e,t){var r=t.style,o="x"===n.scroll?function(n){return"translate3d("+n+"%,0px,0px)"}:function(n){return"translate3d(0px,"+n+"%,0px)"},i=!1;return{clear:function(){r.transform=""},to:function(n){i||(r.transform=o(e.applyTo(n.get())))},toggleActive:function(n){i=!n}}}function k(n,e,t,r,o){var c,f=r.align,d=r.axis,l=r.direction,m=r.startIndex,h=r.inViewThreshold,k=r.loop,D=r.speed,z=r.dragFree,O=r.slidesToScroll,B=r.skipSnaps,I=r.containScroll,L=e.getBoundingClientRect(),N=t.map((function(n){return n.getBoundingClientRect()})),F=function(n){var e="rtl"===n?-1:1;return{applyTo:function(n){return n*e}}}(l),U=function(n,e){var t="y"===n?"y":"x";return{scroll:t,cross:"y"===n?"x":"y",startEdge:"y"===t?"top":"rtl"===e?"right":"left",endEdge:"y"===t?"bottom":"rtl"===e?"left":"right",measureSize:function(n){var e=n.width,r=n.height;return"x"===t?e:r}}}(d,l),j=(c=U.measureSize(L),{measure:function(n){return 0===c?0:n/c*100},totalPercent:100}),V=j.totalPercent,H=i(f,V),R=function(n,e,t,r,o){var i=n.measureSize,u=n.startEdge,a=n.endEdge,c=r.map(i);return{slideSizes:c.map(e.measure),slideSizesWithGaps:r.map((function(n,e,r){var i=e===v(r),s=window.getComputedStyle(g(t)),f=parseFloat(s.getPropertyValue("margin-"+a));return i?c[e]+(o?f:0):r[e+1][u]-n[u]})).map(e.measure).map(Math.abs)}}(U,j,t,N,k),Z=R.slideSizes,_=R.slideSizesWithGaps,G=E(U,H,j,L,N,O),$=G.snaps,q=G.snapsAligned,W=-g($)+g(_),X=w(V,W,$,q,I).snapsContained,J=!k&&""!==I?X:q,Y=function(n,e,t){return{limit:function(){var r=e[0],o=g(e);return u(t?r-n:o,r)}()}}(W,J,k).limit,K=a(v(J),m,k),Q=K.clone(),nn=p(t),en=function(n){var e=0;function t(n,t){return function(){n===!!e&&t()}}function r(){e=window.requestAnimationFrame(n)}return{proceed:t(!0,r),start:t(!1,r),stop:t(!0,(function(){window.cancelAnimationFrame(e),e=0}))}}((function(){k||dn.scrollBounds.constrain(dn.dragHandler.pointerDown()),dn.scrollBody.seek(on).update();var n=dn.scrollBody.settle(on);n&&!dn.dragHandler.pointerDown()&&(dn.animation.stop(),o.emit("settle")),n||o.emit("scroll"),k&&(dn.scrollLooper.loop(dn.scrollBody.direction()),dn.slideLooper.loop()),dn.translate.to(rn),dn.animation.proceed()})),tn=J[K.get()],rn=s(tn),on=s(tn),un=y(rn,D,1),an=A(k,J,W,Y,on),cn=function(n,e,t,r,o,i){function u(r){var u=r.distance,a=r.index!==e.get();u&&(n.start(),o.add(u)),a&&(t.set(e.get()),e.set(r.index),i.emit("select"))}return{distance:function(n,e){u(r.byDistance(n,e))},index:function(n,t){var o=e.clone().set(n);u(r.byIndex(o.get(),t))}}}(en,K,Q,an,on,o),sn=function(n,e,t,r,o,i){var u=Math.min(Math.max(i,.01),.99),a=(o?[0,e,-e]:[0]).reduce((function(n,e){return n.concat(c(e,u))}),[]);function c(e,o){var i=t.map((function(n){return n*(o||0)}));return r.map((function(r,o){return{start:r-t[o]+i[o]+e,end:r+n-i[o]+e,index:o}}))}return{check:function(n){return a.reduce((function(e,t){var r=t.index,o=t.start,i=t.end;return-1===e.indexOf(r)&&o<n&&i>n?e.concat([r]):e}),[])},findSlideBounds:c}}(V,W,Z,$,k,h),fn=x(U,F,n,on,z,function(n,e){var t=n.scroll,r={x:"clientX",y:"clientY"},o=s(0),i=s(0),u=s(0),a=s(0),c=[],f=(new Date).getTime(),d=!1;function l(n,e){d=!n.touches;var t=r[e],o=d?n[t]:n.touches[0][t];return a.set(o)}return{pointerDown:function(n){var r=l(n,t);return o.set(r),u.set(r),e.measure(o.get())},pointerMove:function(n){var r=l(n,t),o=(new Date).getTime(),a=o-f;return a>=10&&(a>=100&&(c=[]),c.push(r.get()),f=o),i.set(r).subtract(u),u.set(r),e.measure(i.get())},pointerUp:function(){var n=(new Date).getTime()-f,t=u.get(),r=c.slice(-5).map((function(n){return t-n})).sort((function(n,e){return Math.abs(n)<Math.abs(e)?1:-1}))[0];return u.set(n>100||!r?0:r),c=[],e.measure(u.get())},readPoint:l}}(U,j),rn,en,cn,un,an,K,o,k,B),dn={animation:en,axis:U,direction:F,dragHandler:fn,pxToPercent:j,index:K,indexPrevious:Q,limit:Y,location:rn,options:r,scrollBody:un,scrollBounds:b(Y,rn,on,un),scrollLooper:M(W,j,Y,rn,[rn,on]),scrollProgress:S(Y),scrollSnaps:J,scrollTarget:an,scrollTo:cn,slideFocus:C(n,cn,O),slideLooper:T(U,V,W,_,J,sn,rn,t),slidesInView:sn,slideIndexes:nn,target:on,translate:P(U,F,e)};return dn}var D={align:"center",axis:"x",containScroll:"",direction:"ltr",dragFree:!1,draggable:!0,draggableClass:"is-draggable",draggingClass:"is-dragging",inViewThreshold:0,loop:!1,skipSnaps:!0,selectedClass:"is-selected",slidesToScroll:1,speed:10,startIndex:0};function z(n,e){var t,r,i,u,a=function(){var n={};function e(e){return n[e]||[]}var t={emit:function(n){return e(n).forEach((function(e){return e(n)})),t},off:function(r,o){return n[r]=e(r).filter((function(n){return n!==o})),t},on:function(r,o){return n[r]=e(r).concat([o]),t}};return t}(),s=c(),f=function(n,e){var t=0;return function(){window.clearTimeout(t),t=window.setTimeout(n,e)||0}}((function(){if(!g)return;var e=t.axis.measureSize(n.getBoundingClientRect());y!==e&&A();a.emit("resize")}),500),d=A,l=a.on,p=a.off,g=!1,v=o({},D),x=o({},v),y=0;function b(){if(!n)throw new Error("Missing root node \ud83d\ude22");var e=n.querySelector("*");if(!e)throw new Error("Missing container node \ud83d\ude22");i=e,u=Array.prototype.slice.call(i.children),r=function(n){var e=getComputedStyle(n,":before").content;return{get:function(){try{return JSON.parse(e.slice(1,-1).replace(/\\/g,""))}catch(n){}return{}}}}(n)}function w(e){if(b(),v=o({},v,e),x=o({},v,r.get()),t=k(n,i,u,x,a),s.add(window,"resize",f),t.translate.to(t.location),y=t.axis.measureSize(n.getBoundingClientRect()),x.loop){if(!t.slideLooper.canLoop())return E(),w({loop:!1});t.slideLooper.loop()}x.draggable&&i.offsetParent&&u.length&&(t.dragHandler.addActivationEvents(),x.draggableClass&&h(n,x.draggableClass),x.draggingClass&&a.on("pointerDown",M).on("pointerUp",M)),u.length&&t.slideFocus.addActivationEvents(u),x.selectedClass&&(S(),a.on("select",S).on("pointerUp",S)),g||(setTimeout((function(){return a.emit("init")}),0),g=!0)}function M(e){var t=x.draggingClass;"pointerDown"===e?h(n,t):m(n,t)}function S(){var n=x.selectedClass,e=T(!0);C(!0).forEach((function(e){return m(u[e],n)})),e.forEach((function(e){return h(u[e],n)}))}function E(){t.dragHandler.removeAllEvents(),t.slideFocus.removeAllEvents(),t.animation.stop(),s.removeAll(),t.translate.clear(),t.slideLooper.clear(),m(n,x.draggableClass),u.forEach((function(n){return m(n,x.selectedClass)})),a.off("select",S).off("pointerUp",S).off("pointerDown",M).off("pointerUp",M)}function A(n){if(g){var e=o({startIndex:z()},n);E(),w(e),a.emit("reInit")}}function T(n){var e=t[n?"target":"location"].get(),r=x.loop?"removeOffset":"constrain";return t.slidesInView.check(t.limit[r](e))}function C(n){var e=T(n);return t.slideIndexes.filter((function(n){return-1===e.indexOf(n)}))}function P(n,e,r){t.scrollBody.useBaseMass().useSpeed(e?100:x.speed),g&&t.scrollTo.index(n,r||0)}function z(){return t.index.get()}return w(e),{canScrollNext:function(){return t.index.clone().add(1).get()!==z()},canScrollPrev:function(){return t.index.clone().add(-1).get()!==z()},clickAllowed:function(){return t.dragHandler.clickAllowed()},containerNode:function(){return i},dangerouslyGetEngine:function(){return t},destroy:function(){g&&(E(),g=!1,a.emit("destroy"))},off:p,on:l,previousScrollSnap:function(){return t.indexPrevious.get()},reInit:d,rootNode:function(){return n},scrollNext:function(n){P(t.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){P(t.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return t.scrollProgress.get(t.location.get())},scrollSnapList:function(){return t.scrollSnaps.map(t.scrollProgress.get)},scrollTo:P,selectedScrollSnap:z,slideNodes:function(){return u},slidesInView:T,slidesNotInView:C}}e.x=function(n){void 0===n&&(n={});var e=r.useState(),t=e[0],o=e[1],i=r.useState(),u=i[0],a=i[1],c=r.useRef(n),s=r.useMemo((function(){var e,t;return e=c.current,t=n,Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((function(n){return!!Object.prototype.hasOwnProperty.call(t,n)&&e[n]===t[n]}))||(c.current=n),c.current}),[c,n]);return r.useEffect((function(){if("undefined"!==typeof window&&window.document&&window.document.createElement&&u){var n=z(u,s);return o(n),function(){return n.destroy()}}o(void 0)}),[u,s,o]),[a,t]}}}]);