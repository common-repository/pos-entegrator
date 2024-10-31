import{o as a,c as d,r as v,b as x,a as e,t as l,n as C,y as j,e as h,f as g,g as f,h as c,u as r,Q as z,R as N,T as I,F as w,j as b,L as V,U as F,V as M,W as S,X as L,Y as A,Z as D,_ as Q}from"../vendor-3-7-63.js";import{u as T,a as E}from"../Page-3-7-63.js";import{_ as R}from"../_plugin-vue_export-helper-3-7-63.js";import{_ as U}from"../PrimaryButton-3-7-63.js";import{i as Y}from"../admin-app-3-7-63.js";import"../ajax-3-7-63.js";import"../store-3-7-63.js";const Z={},K={class:"flex flex-col gap-2 w-full rounded-lg"},O={key:0,class:"w-full bg-gray-50 p-3 rounded-t-lg text-lg"},P={class:"p-6"};function W(u,t){return a(),d("div",K,[u.$slots.header?(a(),d("span",O,[v(u.$slots,"header")])):x("",!0),e("div",P,[v(u.$slots,"default")]),e("div",null,[v(u.$slots,"footer")])])}const k=R(Z,[["render",W]]),X={class:"flex flex-col"},q={class:"text-lg"},G=["textContent"],$={__name:"Text",props:{count:{type:[Number,String],default:0},status:{type:String,default:""}},setup(u){function t(s){let o="text-gray-400";switch(s){case"gpos_started":o="text-yellow-600";break;case"gpos_failed":o="text-red-600 ";break;case"gpos_completed":o="text-green-600";break;case"total":o="text-blue-600";break}return o}return(s,o)=>(a(),d("div",X,[e("div",{class:C(`flex gap-2 items-end font-bold ${t(u.status)}`)},[e("span",q,l(u.count),1),e("span",null,l(s.$t("transaction")),1)],2),e("div",{class:"text-gray-600",textContent:l(s.$t(u.status))},null,8,G)]))}},H={class:"w-full"},J={class:"py-2 px-4 border-r w-1/2"},ee={class:"py-2 px-4"},te={class:"border-y"},se={class:"py-2 px-4 border-r w-1/2"},oe={class:"py-2 px-4"},ae={class:"py-2 px-4 border-r w-1/2"},ne={__name:"Status",setup(u){const{dashboard:t}=T(),s=j(0);return Object.keys(t.transaction_counter).forEach(o=>s.value=s.value+parseInt(t.transaction_counter[o])),(o,_)=>(a(),h(k,{class:"bg-white rounded"},{header:g(()=>[f(l(o.$t("transaction_statuses")),1)]),default:g(()=>[e("table",H,[e("tr",null,[e("td",J,[c($,{count:s.value,status:"total"},null,8,["count"])]),e("td",ee,[c($,{count:r(t).transaction_counter.gpos_completed,status:"gpos_completed"},null,8,["count"])])]),e("tr",te,[e("td",se,[c($,{count:r(t).transaction_counter.gpos_started,status:"gpos_started"},null,8,["count"])]),e("td",oe,[c($,{count:r(t).transaction_counter.gpos_failed,status:"gpos_failed"},null,8,["count"])])]),e("tr",null,[e("td",ae,[c($,{count:r(t).transaction_counter.gpos_redirected,status:"gpos_redirected"},null,8,["count"])]),_[0]||(_[0]=e("td",{class:"py-2 px-4"},null,-1))])])]),_:1}))}},re={class:"w-full flex justify-between items-center"},le={class:"flex items-center gap-1 text-[12px] underline",href:"/wp-admin/edit.php?post_type=gpos_transaction"},ce={class:"w-full text-sm text-left text-gray-500"},ie={class:"text-xs text-gray-700 bg-gray-50"},de={class:"p-2 w-1/8"},ue={key:0},_e={scope:"row",class:"p-2 w-1/8"},pe={class:"p-2 w-1/8 text-center"},ge=["href"],me={class:"w-1/8"},he={class:"w-full flex justify-center"},fe=["src"],we={class:"p-2 w-1/8 text-center"},be={class:"p-2 w-1/8 text-right"},$e={class:"p-2 w-3/8 text-right"},xe={key:1},ye={class:"bg-white border-b"},ve={class:"px-4 py-2 font-medium text-gray-900 whitespace-nowrap"},ke={__name:"LastTransactions",setup(u){const{dashboard:t}=T(),s=window.gpos.assets_url;function o(p){let n="bg-gray-100 bg-gray-800";switch(p){case"gpos_started":n="bg-yellow-100 text-yellow-800";break;case"gpos_redirected":n="bg-blue-100 text-blue-800";break;case"gpos_failed":n="bg-red-300 text-red-800 ";break;case"gpos_completed":n="bg-green-200 text-green-800";break}return n}function _(p){let n="";switch(p){case"gpos_started":n=L;break;case"gpos_redirected":n=S;break;case"gpos_common_form":n=S;break;case"gpos_completed":n=M;break;case"gpos_failed":n=F;break}return n}return(p,n)=>{const m=z("MoneyFormat");return a(),h(k,{class:"bg-white rounded"},{header:g(()=>[e("div",re,[e("span",null,l(p.$t("last_transactions")),1),e("a",le,[f(l(p.$t("all_transactions"))+" ",1),c(r(N),{class:"w-3 h-3"})])])]),default:g(()=>[e("table",ce,[e("thead",ie,[e("tr",null,[e("th",de,[c(r(I),{class:"rounded-full w-6 h-6"})]),(a(),d(w,null,b(["id","payment_gateway","type","total","date"],i=>e("th",{key:i,scope:"col",class:"px-6 py-3 text-center"},l(p.$t(i)),1)),64))])]),r(t).last_transactions.length>0?(a(),d("tbody",ue,[(a(!0),d(w,null,b(r(t).last_transactions,(i,y)=>(a(),d("tr",{key:y,class:C(`${y%2===0?"bg-white":"bg-gray-50"} border-b`)},[e("th",_e,[(a(),h(V(_(i.status)),{class:C(`${o(i.status)} rounded-full p-1 w-6 h-6`)},null,8,["class"]))]),e("td",pe,[e("a",{href:i.edit_link,class:"text-blue-700 underline"},"#"+l(i.id),9,ge)]),e("td",me,[e("div",he,[e("img",{class:"object-contain w-16",src:`${r(s)}/images/logo/${i.payment_gateway_id}.svg`},null,8,fe)])]),e("td",we,l(p.$t(i.type)),1),e("td",be,[c(m,{number:i.total,currency:i.currency},null,8,["number","currency"])]),e("td",$e,l(i.human_date_diff),1)],2))),128))])):(a(),d("tbody",xe,[e("tr",ye,[e("th",ve,l(p.$t("no_records")),1)])]))])]),_:1})}}},Ce={class:"flex flex-col gap-2 divide-y"},je=["href"],Se={class:"flex w-full"},Be={class:"w-1/2 py-2"},Me={class:"font-medium text-blue-700"},Te={class:"flex gap-2 mt-2 text-lg"},Ue={href:"tel: +902243340356",class:"flex gap-2 items-center"},ze={class:"w-1/2 p-2"},Ne={class:"font-medium text-blue-700"},Ie={class:"flex gap-6 mt-2 items-center"},Ve=["href"],Fe=["src"],Le={__name:"Support",setup(u){const t=window.gpos.assets_url,s=[{head:"gurmehub_forum",desc:"gurmehub_forum_desc",link:"https://forum.gurmehub.com/c/gurmehub/pos-entegrator/31/?utm_source=wp_plugin&utm_medium=referal&utm_campaign=baslangic"},{head:"give_feedback",desc:"gurmehub_feedback_desc",link:"https://posentegrator.com/pos-entegrator-yol-haritasi/?utm_source=wp_plugin&utm_medium=referal&utm_campaign=baslangic"},{head:"support_ticket",desc:"support_ticket_desc",link:"https://gurmehub.com/destek-talebi/?wpsc-section=ticket-list&utm_source=wp_plugin&utm_medium=referal&utm_campaign=baslangic"},{head:"docs",desc:"pos_entegrator_help",link:"https://yardim.gurmehub.com/docs/pos-entegrator/?utm_source=wp_plugin&utm_medium=referal&utm_campaign=baslangic"}],o=[{link:"https://www.youtube.com/channel/UCrZrRKMQoYBndiTMhzzNrzQ",icon:"youtube"},{link:"https://www.linkedin.com/company/gurmehub",icon:"linkedin"},{link:"https://www.instagram.com/gurmehubcom/",icon:"instagram"},{link:"https://www.tiktok.com/@gurmehubcom",icon:"tiktok"}];return(_,p)=>(a(),h(k,{class:"bg-white rounded"},{header:g(()=>[f(l(_.$t("support")),1)]),default:g(()=>[e("div",Ce,[(a(),d(w,null,b(s,n=>e("div",{key:n.head,class:"flex flex-col"},[e("a",{target:"_blank",href:n.link,class:"font-medium text-blue-700 pt-2 underline"},l(_.$t(n.head)),9,je),e("span",null,l(_.$t(n.desc)),1)])),64)),e("div",Se,[e("div",Be,[e("span",Me,l(_.$t("contact_us")),1),e("span",Te,[e("a",Ue,[c(r(A),{class:"w-4 h-4"}),p[0]||(p[0]=f(" +90 (224) 334 0 356 "))])])]),e("div",ze,[e("span",Ne,l(_.$t("follow_us")),1),e("div",Ie,[(a(),d(w,null,b(o,n=>e("a",{key:n.icon,target:"_blank",href:n.link},[e("img",{src:`${r(t)}/images/dashboard/${n.icon}.svg`,class:"w-4 h-4"},null,8,Fe)],8,Ve)),64))])])])])]),_:1}))}},Ae={class:"w-1/2 h-max"},De={class:"flex justify-center"},Qe={class:"flex gap-1 font-medium py-2 items-center"},B={__name:"ListTable",props:{properties:{type:Array,default:()=>[]}},setup(u){return(t,s)=>(a(),d("table",Ae,[e("thead",null,[e("tr",null,[e("th",null,[e("div",De,[v(t.$slots,"head")])])])]),e("tbody",null,[(a(!0),d(w,null,b(u.properties,o=>(a(),d("tr",{key:o},[e("td",null,[e("div",Qe,[c(r(M),{class:"text-green-600 w-6 h-6"}),f(" "+l(t.$t(o)),1)])])]))),128))])]))}},Ee={class:"w-full text-center mb-2 text-xl font-bold text-blue-600"},Re={class:"w-full mb-4 text-lg text-center"},Ye={class:"flex justify-around"},Ze=["src"],Ke=["src"],Oe={class:"flex w-full justify-center"},Pe={__name:"UnlockPro",setup(u){const t=window.gpos.assets_url,s=["more_gateways","givewp_integration","wcsubs_integration","edd_integration","learnpress_integration","disable_installments","saved_card_feat","gate_feat"],o=["all_pro_feats","elementor_integration","wpforms_integration","nijaforms_integration","stand_alone"];return(_,p)=>(a(),h(k,{class:"bg-white rounded"},{default:g(()=>[e("div",Ee,l(_.$t("empower_pos")),1),e("div",Re,l(_.$t("empower_desc")),1),e("div",Ye,[c(B,{class:"w-1/3",properties:s},{head:g(()=>[e("img",{src:`${r(t)}/images/pro.png`,class:"w-80 mb-2"},null,8,Ze)]),_:1}),c(B,{class:"w-1/3",properties:o},{head:g(()=>[e("img",{src:`${r(t)}/images/business.png`,class:"w-80 mb-2"},null,8,Ke)]),_:1})]),e("div",Oe,[c(U,{href:"https://posentegrator.com/?utm_source=wp_plugin&utm_medium=referral&utm_campaign=dashboard"},{default:g(()=>[f(l(_.$t("upgrade_now")),1)]),_:1})])]),_:1}))}},We={class:"flex bg-white rounded"},Xe=["src"],qe={class:"w-2/3 flex flex-col px-3 py-5 gap-4 justify-between"},Ge={class:"text-2xl text-blue-700"},He={class:""},Je={key:0,class:"flex gap-2"},et={__name:"Banners",setup(u){const t=window.gpos.dashboard.banners.dashboard,s=j(0),o=j(!1),_=()=>{s.value===0?s.value=t.length-1:s.value--},p=()=>{s.value===t.length-1?s.value=0:s.value++};return setInterval(()=>{o.value===!1&&p()},4e3),(n,m)=>r(t)?(a(),d("div",{key:0,class:"w-full relative flex items-center justify-center",onMouseenter:m[2]||(m[2]=i=>o.value=!0),onMouseleave:m[3]||(m[3]=i=>o.value=!1)},[o.value?(a(),d("div",{key:0,class:"absolute left-2 z-40 rounded-full p-2 shadow-lg bg-white cursor-pointer",onClick:m[0]||(m[0]=i=>_())},[c(r(D),{class:"w-4 h-4"})])):x("",!0),e("div",We,[e("img",{src:r(t)[s.value].image,class:"w-1/3 rounded-l object-contain"},null,8,Xe),e("div",qe,[e("div",Ge,l(r(t)[s.value].title),1),e("div",He,l(r(t)[s.value].description),1),r(t)[s.value].actions.length>0?(a(),d("div",Je,[(a(!0),d(w,null,b(r(t)[s.value].actions,(i,y)=>(a(),h(U,{key:y,href:i.href,target:"_blank"},{default:g(()=>[f(l(i.buttonText),1)]),_:2},1032,["href"]))),128))])):x("",!0)])]),o.value?(a(),d("div",{key:1,class:"absolute right-2 z-40 rounded-full p-2 shadow-lg bg-white cursor-pointer",onClick:m[1]||(m[1]=i=>p())},[c(r(Q),{class:"w-4 h-4"})])):x("",!0)],32)):x("",!0)}},tt={class:"flex w-full flex-col gap-4"},st={href:"https://kargoentegrator.com/woocommerce-kargo-entegrasyonu/?utm_source=wp_plugin&utm_medium=referral&utm_campaign=dashboard",target:"_blank",class:"p-2"},ot=["src"],at={class:"flex w-full"},nt={class:"flex w-1/2 p-2 flex-col gap-4"},rt={class:"flex w-1/2 p-2 flex-col gap-4"},lt={class:"flex w-full"},ct={__name:"App",setup(u){const t=window.gpos.assets_url;return(s,o)=>(a(),h(E,null,{default:g(()=>[e("div",tt,[e("a",st,[e("img",{src:`${r(t)}/images/kargo-entegrator-banner.png`,class:"w-full rounded"},null,8,ot)]),e("div",at,[e("div",nt,[c(ne),c(ke)]),e("div",rt,[c(et),c(Le)])]),e("div",lt,[c(Pe)])])]),_:1}))}};Y(ct);
