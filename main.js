(()=>{"use strict";const e=(e,t,n)=>{let i=document.createElement(`${e}`);return i.textContent=`${t}`,i.classList.add(`${n}`),i},t=()=>{const t=e("h1","PIZZA CIAO","head"),n=e("h5","Because you deserve the best,","slogan1"),i=e("h6","You deserve us.","slogan2"),a=e("div","","home");return a.appendChild(t),a.appendChild(n),a.appendChild(i),a};let n=[{name:"Pizza Ciao",price:"40",img:"ciao"},{name:"Pizza Mashroom",price:"50",img:"mashroom"},{name:"Pizza Chicken",price:"50",img:"chicken"},{name:"Pizza Meat",price:"50",img:"meat"},{name:"Pizza Chicken",price:"50",img:"chicken"},{name:"Pizza Meat",price:"50",img:"meat"},{name:"Pizza Mashroom",price:"50",img:"mashroom"},{name:"Pizza Ciao",price:"40",img:"ciao"}];const i=document.getElementById("content");i.appendChild(function(){const t=e("ul","","navbar");for(var n=0;n<arguments.length;n+=1){let i=e("li",`${arguments[n]}`,"nav-item");t.appendChild(i)}return t}("Home","Menu","Contact")),i.appendChild((()=>{const t=e("div","","main");return t.id="main",t})());let a=document.getElementById("main");document.querySelectorAll(".nav-item").forEach((i=>{i.onclick=()=>{a.innerHTML="","Home"===i.textContent&&a.appendChild(t()),"Menu"===i.textContent&&a.appendChild((()=>{const t=e("h1","Our Menu","head"),i=e("div","","menu");return i.appendChild(t),i.appendChild((t=>{const n=e("section","","menu");for(var i=0;i<t.length;i+=1){let a=e("div","","card"),d=e("img","","item-img");d.setAttribute("alt",`${t[i].img}`),d.setAttribute("src",`./imgs/${t[i].img}.png`);let o=e("h4",`${t[i].name}`,"item-name"),m=e("p",`${t[i].price} -EGP`,"item-price");a.appendChild(d),a.appendChild(o),a.appendChild(m),n.appendChild(a)}return n})(n)),i})()),"Contact"===i.textContent&&a.appendChild((()=>{const t=e("h1","Contact","head"),n=e("h5","Phone: +201100086711","slogan1"),i=e("a","Portfolio","slogan2");i.classList.add("port"),i.setAttribute("href","https://mohamed-js.github.io/Portfolio/");const a=e("div","","contact");return a.appendChild(t),a.appendChild(n),a.appendChild(i),a})())}})),a.appendChild(t())})();