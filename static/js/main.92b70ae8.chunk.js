(this["webpackJsonpiconic-store"]=this["webpackJsonpiconic-store"]||[]).push([[0],{15:function(t){t.exports=JSON.parse('[{"id":0,"productName":"ARTWORK NO-1","icon":"https://source.unsplash.com/450x800/?painting/","price":3,"inventory":2},{"id":1,"productName":"ARTWORK NO-2","icon":"https://source.unsplash.com/450x800/?painting/","price":90,"inventory":3},{"id":2,"productName":"ARTWORK NO-3","icon":"https://source.unsplash.com/450x800/?painting/","price":10,"inventory":10},{"id":3,"productName":"ARTWORK NO-4","icon":"https://source.unsplash.com/450x800/?painting/","price":40,"inventory":0},{"id":4,"productName":"ARTWORK NO-5","icon":"https://source.unsplash.com/450x800/?painting/","price":7,"inventory":6},{"id":5,"productName":"ARTWORK NO-6","icon":"https://source.unsplash.com/450x800/?painting/","price":10,"inventory":0},{"id":6,"productName":"ARTWORK NO-7","icon":"https://source.unsplash.com/450x800/?painting/","price":33,"inventory":3}]')},27:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(14),i=c.n(r),o=(c(27),c(10)),s=c(4),a=c(22),j=c(8),u=c(1),d={addProduct:function(t){return{type:"ADD_PRODUCT",product:t}}},O=Object(j.b)((function(t){}),d)((function(t){var e=t.item,c=t.addProduct;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{children:[Object(u.jsxs)(o.b,{to:"/product/".concat(e.id),children:[Object(u.jsx)("h4",{children:e.productName})," \u20ac",e.price]},e.id),Object(u.jsx)("h5",{children:e.inventory>0?"x ".concat(e.inventory," prints available"):"sold out"})]}),Object(u.jsx)("img",{src:"".concat(e.icon,"/").concat(Math.floor(1e3*Math.random()))}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return c(e)},disabled:0===e.inventory,children:e.inventory>0?"Add to cart":"Sold out"})})]})})),b=Object(j.b)((function(t){return{items:Object.values(t.products)}}))((function(t){var e=t.items,c=Object(n.useState)(0),r=Object(a.a)(c,2),i=r[0],o=r[1],s=e.map((function(t){return Object(u.jsx)(O,{item:t},t.id)})),j=e.map((function(t){return Object(u.jsx)(O,{item:t},t.id)}));return console.log(),Object(u.jsxs)("div",{className:"product-list",children:[Object(u.jsxs)("div",{className:"slider-section",children:[Object(u.jsx)("button",{className:"btn-for-slider",onClick:function(){return o(i+1)},disabled:e.length-1==i,children:"\u2b05"}),Object(u.jsxs)("div",{className:"slider-pictures-section",children:[Object(u.jsxs)("div",{className:"previous",children:[j[i]," "]}),Object(u.jsxs)("div",{className:"middle",children:[" ",j[i+1]]}),Object(u.jsxs)("div",{className:"next",children:[" ",j[i+2]]})]}),Object(u.jsx)("button",{className:"btn-for-slider",onClick:function(){return o(i-1)},disabled:0==i,children:"\u27a1"})]}),Object(u.jsx)("ul",{className:"product",children:s})]})})),l=Object(j.b)((function(t){return{store:t}}))((function(t){var e=t.store,c=t.id;console.log(e);var n=e.products[c];return console.log(n),Object(u.jsxs)("div",{className:"product-info",children:[Object(u.jsx)("h2",{children:n.productName}),Object(u.jsx)("img",{src:"".concat(n.icon)}),Object(u.jsxs)("h4",{children:[n.price,"\u20ac"]}),Object(u.jsx)(o.b,{to:"/product",children:"Back"})]})})),p=function(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("li",{children:"Home"})}),Object(u.jsx)(o.b,{to:"/product",children:Object(u.jsx)("li",{children:"Product"})}),Object(u.jsx)(o.b,{to:"/cart",children:Object(u.jsx)("li",{children:"Cart"})}),Object(u.jsx)(o.b,{to:"/about",children:Object(u.jsx)("li",{children:"About"})})]})},h=function(){return Object(u.jsx)("h1",{children:"Made with \u2764\ufe0f by me "})},x=function(){return Object(u.jsx)("div",{className:"home",children:Object(u.jsx)("h3",{children:"Hey you,Welcome to my Gallery"})})},m={removeOne:function(t){return{type:"REMOVE_ONE",product:t}},removeAll:function(t){return{type:"REMOVE_ALL",product:t}}},v=Object(j.b)((function(t){return{}}),m)((function(t){var e=t.item,c=t.removeOne,n=t.removeAll;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("p",{children:[e.productName," | \u20ac ",e.price," | x ",e.quantity]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return c(e)},children:"Remove One"}),Object(u.jsx)("button",{onClick:function(){return n(e)},children:"Remove All"})]})]})})),y={checkout:function(){return{type:"CHECKOUT"}}},f=Object(j.b)((function(t){return{items:Object.values(t.cart)}}),y)((function(t){var e=t.items,c=t.checkout,r=e.map((function(t){return Object(u.jsx)(v,{item:t},t.id)}));return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("ul",{children:r}),Object(u.jsxs)("p",{children:["Total: \u20ac",e.reduce((function(t,e){return t+e.price*e.quantity}),0)]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:c,children:"Checkout"})})]})})),N=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(p,{}),Object(u.jsx)("h1",{children:"Iconic-online-store"}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/iconic-store-redux/",exact:!0,component:x}),Object(u.jsx)(s.a,{path:"/about",exact:!0,component:h}),Object(u.jsx)(s.a,{path:"/product",exact:!0,component:b}),Object(u.jsx)(s.a,{path:"/product/:id",component:function(t){var e=t.match;return Object(u.jsx)(l,{id:e.params.id})}}),Object(u.jsx)(s.a,{path:"/cart",exact:!0,component:f})]})]})},R=c(21),E=c(11),g=c(2),_=c(15),T=function(){var t,e,c,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,i=n.cart,o=n.products,s=r.product,a=s||{},j=a.id,u=a.productName,d=a.price;switch(r.type){case"ADD_PRODUCT":return t=i[j]?i[j].quantity:0,e=s.inventory>0?s.inventory-1:s.inventory,Object(g.a)(Object(g.a)({},n),{},{products:Object(g.a)(Object(g.a)({},o),{},Object(E.a)({},j,Object(g.a)(Object(g.a)({},s),{},{inventory:e}))),cart:Object(g.a)(Object(g.a)({},i),{},Object(E.a)({},j,{id:j,productName:u,price:d,quantity:t+1}))});case"CHECKOUT":return console.log("Thank you for spending all your money with us, see you soon \ud83d\ude09"),{products:_,cart:{}};case"REMOVE_ONE":return e=o[j].inventory,t=s.quantity,delete(c=Object(g.a)({},i))[j],Object(g.a)(Object(g.a)({},n),{},{cart:t>1?Object(g.a)(Object(g.a)({},i),{},Object(E.a)({},j,Object(g.a)(Object(g.a)({},s),{},{quantity:t-1}))):c,products:Object(g.a)(Object(g.a)({},o),{},Object(E.a)({},j,Object(g.a)(Object(g.a)({},s),{},{inventory:e+1})))});case"REMOVE_ALL":return e=o[j].inventory,t=s.quantity,delete(c=Object(g.a)({},i))[j],Object(g.a)(Object(g.a)({},n),{},{products:Object(g.a)(Object(g.a)({},o),{},Object(E.a)({},j,Object(g.a)(Object(g.a)({},s),{},{inventory:e+t}))),cart:c});default:return n}},A=Object(R.a)(T,{products:_,cart:{}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(u.jsx)(j.a,{store:A,children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.92b70ae8.chunk.js.map