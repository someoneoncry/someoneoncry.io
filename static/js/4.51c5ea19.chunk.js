(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);n(135);var a=n(104),r=(n(224),n(223)),o=(n(142),n(222)),c=n(144),l=n.n(c),i=n(225),u=n(146),s=n(226),m=n(0),p=n.n(m),d=n(147),f=n.n(d);var h=n(164),v=n.n(h),b=(n(166),n(167));function g(e){var t=e.type,n=e.text;return p.a.createElement("span",null,p.a.createElement(a.a,{type:t,style:{marginRight:8}}),n)}Object(b.mock)("/comment/hot",{topComments:[],hasMore:!0,"hotComments|10":[{user:{locationInfo:null,liveInfo:null,userId:493560737,vipType:10,nickname:"@cname",userType:0,vipRights:{associator:null,musicPackage:{vipCode:220,rights:!0},redVipAnnualCount:-1},expertTags:null,remarkName:null,authStatus:0,avatarUrl:"https://placem.at/people?w=200&h=200&random=@string",experts:null},beReplied:[],pendantData:null,showFloorComment:null,status:0,commentId:1316406400,content:"@cparagraph",time:1543756574394,likedCount:"@integer(100, 10000)",startCount:"@integer(1000, 10000)",expressionUrl:null,commentLocationType:0,parentCommentId:0,decoration:null,repliedMark:null,liked:!1}],total:76,code:200});t.default=function(e){var t=e.id,n=void 0===t?33337113:t,a=e.type,c=void 0===a?0:a,d=e.limit,h=void 0===d?10:d,b=Object(m.useState)([]),j=Object(s.a)(b,2),O=j[0],k=j[1],y=Object(m.useState)(0),w=Object(s.a)(y,2),C=w[0],E=w[1],x=Object(m.useState)(null),I=Object(s.a)(x,2),S=I[0],M=I[1],T=Object(m.useState)(!0),U=Object(s.a)(T,2),L=U[0],R=U[1],J=Object(m.useState)(!0),z=Object(s.a)(J,2),A=z[0],D=z[1];return Object(m.useEffect)(function(){!function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,a="/comment/hot",r={id:n,offset:C,before:S,limit:h,type:c},f.a.post(a,r).then(function(e){return e.data}).then(function(e){return console.log(e),e});case 3:t=e.sent,D(t.hasMore),k(function(e){return[].concat(Object(i.a)(e),Object(i.a)(t.hotComments))}),R(!1);case 7:case"end":return e.stop()}var a,r},e)}));return function(){return e.apply(this,arguments)}}()()},[n,C,h,c,S]),p.a.createElement(v.a,{pageStart:0,initialLoad:!1,loadMore:function(){E(O.length),M(O[O.length-1].time)},hasMore:!L&&A},p.a.createElement(r.a,{itemLayout:"vertical",size:"large",dataSource:O,loading:L,renderItem:function(e){return p.a.createElement(r.a.Item,{key:e.commentId,actions:[p.a.createElement(g,{type:"star-o",text:e.startCount}),p.a.createElement(g,{type:"like-o",text:e.likedCount})],extra:p.a.createElement("img",{width:272,alt:"logo",src:e.user.avatarUrl})},p.a.createElement(r.a.Item.Meta,{avatar:p.a.createElement(o.a,{src:e.user.avatarUrl}),title:e.user.nickname,description:e.content}),e.content)}}))}}}]);
//# sourceMappingURL=4.51c5ea19.chunk.js.map