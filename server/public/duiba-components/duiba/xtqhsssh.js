/*! Built with http://stenciljs.com */
const{h:e}=window.duiba;var t;!function(e){e.Native="native",e.Normal="normal"}(t||(t={}));const n=864e5;class a{handleCellClick({monthResignedMap:e,monthSignedMap:t,date:n,signin:a}){e[n]||t[n]||a(n)}render(){const{currentTime:t,endTime:a,startTime:r,showHeader:i,calendarType:d,monthResignedMap:o,monthSignedMap:s,todayIndex:c,count:l,signin:u}=this;var m;m={startTime:r,endTime:a,currentTime:t,signin:u},Object.keys(m).forEach(e=>{if(null===m[e]||void 0===m[e])throw`${e} is required, but got ${m[e]}`});const g=function({startTime:e,endTime:t,currentTime:a,calendarType:r,todayIndex:i=1,count:d}){const o=new Date(+e).getTime(),s=new Date(+t).getTime(),c=new Date(+a).getTime(),l=[];if(!d&&"native"===r){const t=new Date(+e).getDay();for(let e=0;e<t;e++)l.push("")}for(let e=o;e<=s;e+=n)l.push(e);return function(e,t,n,a){if(!n)return e;if(e.length<n)return e;const r=function e(t,n,a){for(let d=0;d<t.length;d++)if(function(e,t){return new Date(+e).getFullYear()===new Date(+t).getFullYear()}(+(r=t[d]),i=a)&&function(e,t){return new Date(+e).getMonth()===new Date(+t).getMonth()}(r,i)&&function(e,t){return new Date(+e).getDate()===new Date(+t).getDate()}(r,i))return d+1!==n?e(t.slice(1),n,a):t;var r,i;return[]}(e,t,a);return r.slice(0,n-r.length)}(l,i,d,c)}({startTime:r,endTime:a,currentTime:t,calendarType:d,todayIndex:c,count:l});return e("div",{class:"calendar"},i&&e("div",{class:"calendar-header"},["日","一","二","三","四","五","六"].map(t=>e("span",{class:"calendar-header-item"},t))),e("div",{class:"calendar-body"},g.map(n=>e("span",{class:`calendar-body-cell ${function({date:e,currentTime:t,monthResignedMap:n={},monthSignedMap:a={}}){const r=[];return new Date(+t).getDate()===e&&r.push("today"),n[e]?r.concat("resign").join(" "):a[e]?r.concat("sign").join(" "):r.join("")}({date:new Date(n).getDate(),currentTime:t,monthResignedMap:o,monthSignedMap:s})}`,onClick:this.handleCellClick.bind(this,{monthResignedMap:o,monthSignedMap:s,date:new Date(n).getDate(),signin:u,currentTime:t})},n&&new Date(n).getDate()))))}static get is(){return"duiba-calendar"}static get properties(){return{calendarType:{type:String,attr:"calendar-type"},count:{type:Number,attr:"count"},currentTime:{type:"Any",attr:"current-time"},endTime:{type:"Any",attr:"end-time"},monthResignedMap:{type:"Any",attr:"month-resigned-map"},monthSignedMap:{type:"Any",attr:"month-signed-map"},showHeader:{type:"Any",attr:"show-header"},signin:{type:"Any",attr:"signin"},startTime:{type:"Any",attr:"start-time"},todayIndex:{type:Number,attr:"today-index"}}}static get style(){return".calendar{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px;text-align:center;color:#ababab;width:300px;margin:0 auto;background:#fff;border-radius:6px;border:2px solid #ababab;padding:10px}.calendar-header{text-align:left;width:300px;height:40px}.calendar-body{text-align:left;width:300px}.calendar-header-item{text-align:center;display:inline-block;width:40px;line-height:40px}.calendar-body-cell{text-align:center;display:inline-block;width:40px;line-height:40px}.sign{color:rgba(255,83,83,0);width:30px;height:30px;margin:5px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAMAAABLXLayAAAAVFBMVEUAAAD2Q0P2RET1RET2RET3RET3RET4RUX1RET2Q0P2Q0P2Q0P2Q0P2Q0P2RET2Rkb5Rkb4Rkb/RET/UFD1Q0P3RET2RET4RUX3Rkb6R0f1RET2Q0OuMIdLAAAAG3RSTlMA9sntpJR3TPHm3L2zhGU1KSASC9VeV0Q9GdOA1tzrAAAAnElEQVQoz3XR2RKDIAwFUMGNTRSwLs3//2dNlKG18T4lc8IMgeohL23GJwKAmacejtQsrQJt4GgkajiaaiTHUdBIlqasXL9pN0gyYS2PyheKM9I7UqOw7jIlia3Zz64FTHuZxUaHPNpAubGjnadM+aRL15j6eceBUEYaElsBTEdYE/X3fT3kLNVfFnGSZ39F5D2ZbIp+hU/o7tf4AGOcDufFOhC7AAAAAElFTkSuQmCC) center center no-repeat}.today{color:red}.resign{color:rgba(255,83,83,0);width:30px;height:30px;margin:5px;background-size:100% 100%;background-image:url(//yun.duiba.com.cn/h5/sign/fhNews/bu.png)}"}}export{a as DuibaCalendar};