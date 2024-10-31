import{l as x,Q as w,o as r,c as l,a as e,t as a,u as n,F as i,j as h,n as c,h as m,e as y,au as k,b as v}from"../vendor-3-7-63.js";import{i as $}from"../admin-app-3-7-63.js";import"../store-3-7-63.js";const B=x("UserTransactionsStore",{state:()=>({transactions:window.gpos.transactions||[]})}),C={class:"w-full text-center p-8 text-2xl font-bold"},S={class:"flex w-full flex-col overflow-x-auto"},j={class:"min-w-[768px]"},F={class:"flex w-full p-3 text-xl items-center font-bold"},N={class:"w-1/12 text-left"},U={class:"w-2/12 text-center"},V={class:"w-3/12 text-center"},M={class:"w-3/12 text-center"},T={class:"w-3/12 text-right"},z={class:"font-bold w-1/12"},A={class:"w-2/12"},D={class:"w-3/12 flex justify-center"},E={class:"text-right w-3/12 flex justify-center"},L={class:"flex justify-end gap-5 w-3/12 font-bold items-center"},Q=["href"],R={key:1,class:"font-bold bg-slate-200 p-4 rounded text-slate-700"},q={__name:"App",setup(G){const{transactions:d}=B(),u=window.gpos.printable,_=window.gpos.home_url;function p(t){let s="bg-gray-100 bg-gray-800";switch(t){case"gpos_started":s="bg-yellow-100 text-yellow-800";break;case"gpos_redirected":s="bg-blue-100 text-blue-800";break;case"gpos_failed":s="bg-red-300 text-red-800 ";break;case"gpos_completed":s="bg-green-200 text-green-800";break}return s}function g(t){let s="bg-gray-100 text-gray-800";switch(t){case"gpos_refund_status_cancelled":s="bg-red-100 text-red-600";break;case"gpos_refund_status_n_refunded":s="bg-gray-100 text-gray-800";break;case"gpos_refund_status_refunded":s="bg-blue-300 text-blue-800 ";break;case"gpos_refund_status_p_refunded":s="bg-yellow-200 text-yellow-600";break}return s}return(t,s)=>{const f=w("MoneyFormat");return r(),l(i,null,[e("div",C,a(t.$t("transactions")),1),e("div",S,[e("div",j,[e("div",F,[e("div",N,a(t.$t("transaction")),1),e("div",U,a(t.$t("date")),1),e("div",V,a(t.$t("status")),1),e("div",M,a(t.$t("cancel_refund_status")),1),e("div",T,a(t.$t("total")),1)]),n(d).length?(r(!0),l(i,{key:0},h(n(d),(o,b)=>(r(),l("div",{key:o.id,class:c(`flex w-full p-3 rounded items-center ${b%2==0?"bg-slate-200":"bg-white"}`)},[e("div",z," #"+a(o.id),1),e("span",A,a(o.date),1),e("span",D,[e("span",{class:c(`${p(o.status)} text-xs rounded-2xl px-4 py-2`)},a(t.$t(o.status)),3)]),e("span",E,[e("span",{class:c(`${g(o.refund_status)} text-xs rounded-2xl px-4 py-2`)},a(t.$t(o.refund_status)),3)]),e("span",L,[m(f,{number:o.total,currency:o.currency},null,8,["number","currency"]),e("a",{href:`${n(_)}/gpos-collection-receipt/?transaction_id=${o.id}`,target:"_blank"},[n(u)?(r(),y(n(k),{key:0,class:"text-blue-700 w-6 h-6 cursor-pointer"})):v("",!0)],8,Q)])],2))),128)):(r(),l("div",R," İşlem bulunamadı... "))])])],64)}}};$(q);
