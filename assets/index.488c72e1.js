import{a0 as f,a1 as v}from"./index.d93609e1.js";import{e as b,g as M,l as N}from"./a.1d79356f.js";import"./layout.f9def072.js";import"./use-notification.72cae862.js";import"./index.29264f5e.js";import"./error-messages.4f441108.js";import"./index.esm.fbd7e18b.js";import"./index.0fbc69fc.js";import"./index.397ea021.js";function L(o,w,h){var i;return f(this,void 0,void 0,function(){var s,l,c,d,a,g=this;return v(this,function(m){switch(m.label){case 0:return b()?[2,[]]:(s=M(),l=(i=w.enabledMiddleware)!==null&&i!==void 0?i:{},c=Object.entries(l).filter(function(r){r[0];var e=r[1];return e}).map(function(r){var e=r[0];return e}),d=c.map(function(r){return f(g,void 0,void 0,function(){var e,n,u,p;return v(this,function(t){switch(t.label){case 0:e=r.replace("@segment/",""),n=e,h&&(n=btoa(e).replace(/=/g,"")),u="".concat(s,"/middleware/").concat(n,"/latest/").concat(n,".js.gz"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,N(u)];case 2:return t.sent(),[2,window["".concat(e,"Middleware")]];case 3:return p=t.sent(),o.log("error",p),o.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}})})}),[4,Promise.all(d)]);case 1:return a=m.sent(),a=a.filter(Boolean),[2,a]}})})}export{L as remoteMiddlewares};
