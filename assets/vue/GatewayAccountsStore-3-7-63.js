import{o as n,c,u as s,h as u,aa as p,g as i,b as d,l}from"./vendor-3-7-63.js";import{a as o}from"./ajax-3-7-63.js";const _={key:0,class:"bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg flex gap-1 items-center h-6 max-h-max"},w={key:1,class:"text-slate-600 bg-slate-200 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg flex gap-1 items-center h-6 max-h-max"},x={__name:"NeedBadge",props:{type:{required:!1,type:String,default:"pro"}},setup(t){const e=window.gpos.is_pro_active,m=window.gpos.is_form_active,r=t;return(g,a)=>(n(),c("div",null,[!s(e)&&r.type==="pro"?(n(),c("span",_,[u(s(p),{class:"w-3 h-3"}),a[0]||(a[0]=i("Pro"))])):d("",!0),!s(m)&&r.type==="form"?(n(),c("span",w,[u(s(p),{class:"w-3 h-3"}),a[1]||(a[1]=i("Business"))])):d("",!0)]))}},v=l("GatewayAccounts",{state:()=>({virtualPOSAccounts:window.gpos.virtual_pos_accounts||[],alternativeAccounts:window.gpos.alternative_payment_accounts||[],commonFormAccounts:window.gpos.common_form_accounts||[],iFrameAccounts:window.gpos.iframe_accounts||[]}),actions:{async addGatewayAccount(t){return await o.post("add_gateway_account",{gateway:t})},async getGatewayAccounts(){const t=await o.get("get_gateway_accounts");this.virtualPOSAccounts=t},updateActiveStatus(t,e){o.post("update_active_status",{id:t,status:e})},async updateDefaultStatus(t,e){return await o.post("update_default_status",{id:t,default:e})}}});export{x as _,v as u};
