import{p}from"./store-3-7-63.js";import{l as u,s as l,S as f}from"./vendor-3-7-63.js";const d=u("UiStore",{state:()=>({loading:!1}),actions:{async hideRatingMessage(){return await w.post("hide_notice").then(()=>{window.location.reload()})}}}),t=(e,o,r)=>{const s=window.gpos.prefix,i=window.gpos.nonce,c=`${window.gpos.ajaxurl}?action=${s}_${o}&_wpnonce=${i}`,{loading:n}=l(d(p));return window.jQuery.ajax({url:c,type:e,dataType:"json",contentType:"application/json",accept:"application/json",data:r?JSON.stringify(r):!1,beforeSend:()=>{n.value=!0},success:()=>{n.value=!1},error:a=>{n.value=!1,a.statusText!=="abort"&&f.fire({html:a.responseJSON.error_message,icon:"error",confirmButtonText:window.gpos.alert_texts.ok,confirmButtonColor:"#C81E1E"})}})},w={get(e,o){return t("GET",e,o)},post(e,o){return t("POST",e,o)},delete(e,o){return t("DELETE",e,o)},put(e,o){return t("PUT",e,o)},patch(e,o){return t("PATCH",e,o)}};export{w as a,d as u};
