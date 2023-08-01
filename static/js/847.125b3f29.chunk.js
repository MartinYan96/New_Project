"use strict";(self.webpackChunk_31_studio=self.webpackChunk_31_studio||[]).push([[847],{8847:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var c=r(3433),i=r(9439),n=r(2791),s=r(9126),a=r(9434),o=r(5769),u=r(184),l=function(e){var t=e.filteredProducts,r=e.setFilteredProducts,l=(0,a.v9)((function(e){return e.language.language.sortProducts.sortProductsCategorie})),d=(0,a.I0)(),f=(0,n.useState)(0),p=(0,i.Z)(f,2),g=p[0],x=p[1],m=(0,n.useState)(!1),h=(0,i.Z)(m,2),j=h[0],v=h[1],P=(0,n.useState)(!1),N=(0,i.Z)(P,2),Z=N[0],M=N[1],S=l.map((function(e){return{name:e,iconMaxMin:(0,u.jsx)(s.Vjs,{}),iconMinMax:(0,u.jsx)(s.A89,{}),filterIcon:(0,u.jsx)(s.slW,{})}})),b=(0,c.Z)(t).sort((function(e,t){return t.recommended-e.recommended})),C=(0,c.Z)(t).sort((function(e,t){return e.price-t.price})),I=(0,c.Z)(t).sort((function(e,t){return t.price-e.price})),T=(0,c.Z)(t).sort((function(e,t){return e.id.localeCompare(t.id)})),k=(0,c.Z)(t).sort((function(e,t){return t.id.localeCompare(e.id)}));return(0,u.jsx)("div",{className:"sortProduct",children:S.map((function(e,t){return(0,u.jsxs)("div",{className:g===t&&4!==t?"sortButton active":"sortButton",onClick:function(){return function(e){x(e),g===e&&r(b),0===e&&r(b),2!==e||j?2===e&&j&&(r(I),v(!1)):(r(C),v(!0)),3!==e||Z?3===e&&Z&&(r(k),M(!1)):(r(T),M(!0))}(t),4===t?d((0,o.H)()):""},children:[e.name,(0,u.jsx)("div",{className:"sortIcon",id:"sortIcon".concat(t),children:(2===t&&j||3===t&&Z?e.iconMaxMin:4!==t&&e.iconMinMax)||(4!==t?e.iconMaxMin:e.filterIcon)})]},e.name)}))})},d=r(8977),f=r(2117),p=function(e){var t=e.recommended,r=e.minPriceToggle,c=e.maxPriceToggle;return t.map((function(e){if((e.price>=r||e.price>=r)&&(e.price<=c||e.price<=c))return(0,u.jsx)(f.Z,{data:e},e.id)}))},g=function(e){var t=e.product,r=e.productsThisPage,s=e.categorie,l=e.filteredProducts,d=e.setFilteredProducts,f=e.setProduct,p=e.onSaleInput,g=e.onNewInput,x=e.setMinPriceProducts,m=e.setMaxPriceProducts,h=(0,a.v9)((function(e){return e.filters.filterBarActive})),j=(0,n.useState)(!1),v=(0,i.Z)(j,2),P=v[0],N=v[1],Z=(0,n.useState)(!1),M=(0,i.Z)(Z,2),S=M[0],b=M[1],C=t.filter((function(e){return""!==e.sale})),I=t.filter((function(e){return e.news})),T=(0,a.I0)();(0,n.useEffect)((function(){f(r),N(!1),b(!1)}),[s]),(0,n.useEffect)((function(){document.body.style.overflow=h?"hidden":"auto"}),[h]);(0,n.useEffect)((function(){d(S?I:P?C:r)}),[P,S,s]);var k=l.map((function(e){return e.price})),E=Math.min.apply(Math,(0,c.Z)(k)),F=Math.max.apply(Math,(0,c.Z)(k)),y=(0,n.useState)(F),w=(0,i.Z)(y,2),B=w[0],A=w[1],L=(0,n.useState)(E),_=(0,i.Z)(L,2),R=_[0],H=_[1];(0,n.useEffect)((function(){m(B),x(R)}),[R,B]),(0,n.useEffect)((function(){A(F)}),[F]),(0,n.useEffect)((function(){H(E)}),[E]);var O=(0,n.useState)([]),W=(0,i.Z)(O,2),Y=W[0],G=W[1],V=Y.length>0?r.filter((function(e){return Y.includes(e.categorie.subcategorie.arm)||Y.includes(e.categorie.subcategorie.rus)})):r;return(0,n.useEffect)((function(){d(V)}),[Y]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:h?"effect active":"effect",onClick:function(){return T((0,o.H)())}}),(0,u.jsx)("div",{className:h?"filtersBar active":"filtersBar ",children:(0,u.jsxs)("div",{className:"productFilters",children:[(0,u.jsxs)("div",{className:"productPriceFilter",children:[(0,u.jsx)("h3",{className:"productFiltersTitle",children:"PRICE"}),(0,u.jsxs)("div",{className:"tooltipPrice",children:[(0,u.jsx)("p",{className:"tooltipPriceMin",children:"\u043e\u0442"}),(0,u.jsx)("p",{className:"tooltipPriceMax",children:"\u0434\u043e"})]}),(0,u.jsxs)("div",{className:"togglePriceInputs",children:[(0,u.jsx)("input",{type:"text",placeholder:P&&0===l.length?0:R,min:E,max:F,onChange:function(e){H(e.target.value)}}),(0,u.jsx)("input",{type:"text",placeholder:P&&0===l.length?0:B,min:E,max:F,onChange:function(e){A(e.target.value)}})]})]}),p?"":(0,u.jsx)("label",{className:"onSaleInput",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{className:"productFiltersTitle",children:"ON SALE"}),(0,u.jsx)("input",{type:"checkbox",checked:P,onChange:function(){return P?N(!1):(b(!1),void N(!0))}})]})}),g?"":(0,u.jsx)("label",{className:"onNewInput",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{className:"productFiltersTitle",children:"NEW"}),(0,u.jsx)("input",{type:"checkbox",checked:S,onChange:function(){return S?b(!1):(b(!0),void N(!1))}})]})}),(0,u.jsxs)("div",{className:"subCategoriesToggleList",children:[(0,u.jsx)("h3",{className:"productFiltersTitle",children:"CATEGORY"}),s.submenu.map((function(e,t){return(0,u.jsx)("div",{className:"subCategoriesList",children:(0,u.jsx)("div",{className:"subCategories",style:{display:"flex"},children:(0,u.jsxs)("label",{className:"subCategorieInputs",children:[(0,u.jsx)("input",{type:"checkbox",value:e.categorie,checked:Y.includes(e.categorie),onChange:function(){return t=e.categorie,void(Y.includes(t)?G(Y.filter((function(e){return e!==t}))):G([].concat((0,c.Z)(Y),[t])));var t}}),e.categorie]})})},e.categorie)}))]})]})})]})},x=function(e){var t=e.categorie,r=(e.setPage,(0,d.Z)().data.products),s=(0,n.useState)(!1),o=(0,i.Z)(s,2),f=o[0],x=o[1],m=(0,n.useState)(!1),h=(0,i.Z)(m,2),j=h[0],v=h[1],P=(0,n.useState)(),N=(0,i.Z)(P,2),Z=N[0],M=N[1],S=(0,n.useState)(),b=(0,i.Z)(S,2),C=b[0],I=b[1],T=(0,a.v9)((function(e){return e.filters.filterBarActive})),k=r.filter((function(e){return"\u0536\u0535\u0542\u0549"===t.categorie||"\u0420\u0410\u0421\u041f\u0420\u041e\u0414\u0410\u0416\u0410"===t.categorie?""!==e.sale:"\u0546\u0548\u0550"===t.categorie||"\u041d\u041e\u0412\u042b\u0415"===t.categorie?e.news:e.categorie.arm===t.categorie||e.categorie.rus===t.categorie}));(0,n.useEffect)((function(){"\u0536\u0535\u0542\u0549"===t.categorie||"\u0420\u0410\u0421\u041f\u0420\u041e\u0414\u0410\u0416\u0410"===t.categorie?x(!0):x(!1),"\u0546\u0548\u0550"===t.categorie||"\u041d\u041e\u0412\u042b\u0415"===t.categorie?v(!0):v(!1)}),[t]);var E=(0,n.useState)(k),F=(0,i.Z)(E,2),y=F[0],w=F[1],B=(0,n.useState)(k),A=(0,i.Z)(B,2),L=A[0],_=A[1],R=(0,c.Z)(L);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{setFilteredProducts:_,filteredProducts:L,categorie:t,productsThisPage:k,product:y,setProduct:w,onSaleInput:f,onNewInput:j,setMinPriceProducts:M,setMaxPriceProducts:I}),(0,u.jsx)("section",{className:T?"productSection active":"productSection",children:(0,u.jsxs)("div",{className:"productList",children:[(0,u.jsx)(l,{filteredProducts:L,setFilteredProducts:_}),(0,u.jsx)("div",{className:"products",children:(0,u.jsx)(p,{recommended:R,minPriceToggle:Z,maxPriceToggle:C})}),(0,u.jsx)("button",{className:"button",children:"TRY IT"})]})})]})}}}]);
//# sourceMappingURL=847.125b3f29.chunk.js.map