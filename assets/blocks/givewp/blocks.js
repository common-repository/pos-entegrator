(()=>{"use strict";var e={287:(e,t)=>{var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,a={};function i(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}function s(){}function p(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||o}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=i.prototype;var f=p.prototype=new s;f.constructor=p,n(f,i.prototype),f.isPureReactComponent=!0;Array.isArray;var c=Object.prototype.hasOwnProperty,l=null,u={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,o){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=o;else if(1<p){for(var f=Array(p),y=0;y<p;y++)f[y]=arguments[y+2];a.children=f}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:l}}},540:(e,t,r)=>{e.exports=r(287)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}(()=>{var e=r(540);let t="";const o={id:"gpos_givewp_v3",initialize(){t=this.settings.gpos_nonce},Fields:()=>(0,e.createElement)("fieldset",null,(0,e.createElement)("div",{style:{display:"flex",justifyContent:"center"}},(0,e.createElement)("div",{id:"app"}),(0,e.createElement)("input",{type:"hidden",name:"_gpos_nonce",id:"_gpos_nonce",value:t}))),beforeCreatePayment:async e=>({_wp_refreshed_fragments:window.gpos.fragment._wp_refreshed_fragments,_wp_fragment:window.gpos.fragment._wp_fragment,_gpos_nonce:jQuery("input[name='_gpos_nonce']").val()})};window.givewp.gateways.register(o)})()})();