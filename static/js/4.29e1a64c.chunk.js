(window.webpackJsonpdemo=window.webpackJsonpdemo||[]).push([[4],{236:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);a(108);var n=a(18),r=(a(244),a(243)),c=(a(212),a(241)),o=a(214),i=a.n(o),u=a(245),s=a(216),l=a(101),m=a(1),d=a.n(m),f=a(217),p=a.n(f);var b=a(234),v=a.n(b);a(236);function j(e){var t=e.type,a=e.text;return d.a.createElement("span",null,d.a.createElement(n.a,{type:t,style:{marginRight:8}}),a)}t.default=function(e){var t=e.id,a=void 0===t?33337113:t,n=e.type,o=void 0===n?0:n,f=e.limit,b=void 0===f?10:f,O=Object(m.useState)([]),h=Object(l.a)(O,2),E=h[0],g=h[1],y=Object(m.useState)(0),w=Object(l.a)(y,2),k=w[0],S=w[1],x=Object(m.useState)(null),I=Object(l.a)(x,2),M=I[0],C=I[1],J=Object(m.useState)(!0),L=Object(l.a)(J,2),U=L[0],z=L[1],R=Object(m.useState)(!0),q=Object(l.a)(R,2),A=q[0],B=q[1];return Object(m.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.next=3,n="/comment/hot",r={id:a,offset:k,before:M,limit:b,type:o},p.a.post(n,r).then((function(e){return e.data})).then((function(e){return console.log(e),e}));case 3:t=e.sent,B(t.hasMore),g((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t.hotComments))})),z(!1);case 7:case"end":return e.stop()}var n,r}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,k,b,o,M]),d.a.createElement(v.a,{pageStart:0,initialLoad:!1,loadMore:function(){S(E.length),C(E[E.length-1].time)},hasMore:!U&&A},d.a.createElement(r.a,{itemLayout:"vertical",size:"large",dataSource:E,loading:U,renderItem:function(e){return d.a.createElement(r.a.Item,{key:e.commentId,actions:[d.a.createElement(j,{type:"star-o",text:e.startCount}),d.a.createElement(j,{type:"like-o",text:e.likedCount})],extra:d.a.createElement("img",{width:272,alt:"logo",src:e.user.avatarUrl})},d.a.createElement(r.a.Item.Meta,{avatar:d.a.createElement(c.a,{src:e.user.avatarUrl}),title:e.user.nickname,description:e.content}),e.content)}}))}}}]);
//# sourceMappingURL=4.29e1a64c.chunk.js.map