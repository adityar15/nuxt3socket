import{a,r as c,b as r,e as l,f as d,h as s,t as i,u as p,o as g}from"./entry.9bf11ddf.js";const m={class:"h-screen w-screen grid place-items-center bg-black"},u={class:"flex flex-col items-centers space-y-4"},_={class:"text-gray-100"},h=a({__name:"index",setup(f){const n=c(""),{$ws:e}=r();l(()=>{e.onopen=()=>{console.log("connected")},e.onmessage=({data:o})=>{n.value=o},e.onclose=function(){console.log("disconnected")}});const t=()=>{e.send(Math.random().toString(36).substring(7))};return(o,x)=>(g(),d("div",m,[s("span",u,[s("span",_,i(p(n)),1),s("button",{onClick:t,class:"bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg"},"Click me to send random message")])]))}});export{h as default};