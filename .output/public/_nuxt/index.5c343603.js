import{a,r as c,b as l,e as r,f as d,h as o,t as p,u as i,o as m}from"./entry.1762e17d.js";const g={class:"h-screen w-screen grid place-items-center bg-black"},u={class:"flex flex-col items-centers space-y-4"},_={class:"text-gray-100"},b=a({__name:"index",setup(f){const n=c(""),{$ws:e}=l();r(()=>{e.onopen=()=>{console.log("connected")},e.onmessage=({data:s})=>{console.log("data",s),n.value=s},e.onclose=function(){console.log("disconnected")}});const t=()=>{e.send(Math.random()+"")};return(s,x)=>(m(),d("div",g,[o("span",u,[o("span",_,p(i(n)),1),o("button",{onClick:t,class:"bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg"},"Click me to send random message")])]))}});export{b as default};
