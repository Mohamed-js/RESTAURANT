(()=>{"use strict";const e=(e,n,t)=>{let i=document.createElement(`${e}`);return i.textContent=`${n}`,i.classList.add(`${t}`),i};function n(){const n=e("h1","PIZZA CIAO","head"),t=e("h5","Because you deserve the best,","slogan1"),i=e("h6","You deserve us.","slogan2"),a=e("div","","home");return a.appendChild(n),a.appendChild(t),a.appendChild(i),a}let t=[{name:"Pizza Ciao",price:"40",img:"ciao"},{name:"Pizza Mashroom",price:"50",img:"mashroom"},{name:"Pizza Chicken",price:"50",img:"chicken"},{name:"Pizza Meat",price:"50",img:"meat"},{name:"Pizza Chicken",price:"50",img:"chicken"},{name:"Pizza Meat",price:"50",img:"meat"},{name:"Pizza Mashroom",price:"50",img:"mashroom"},{name:"Pizza Ciao",price:"40",img:"ciao"}];function i(){const n=e("h1","Our Menu","head"),i=e("div","","menu");return i.appendChild(n),i.appendChild(function(n){const t=e("section","","menu");for(var i=0;i<n.length;i+=1){let a=e("div","","card"),o=e("img","","item-img");o.setAttribute("alt",`${n[i].img}`),o.setAttribute("src",`/assets/imgs/${n[i].img}.png`);let d=e("h4",`${n[i].name}`,"item-name"),c=e("p",`${n[i].price} -EGP`,"item-price");a.appendChild(o),a.appendChild(d),a.appendChild(c),t.appendChild(a)}return t}(t)),i}function a(){const n=e("h1","Contact","head"),t=e("h5","Phone: +201100086711","slogan1"),i=e("a","Portfolio","slogan2");i.classList.add("port"),i.setAttribute("href","https://mohamed-js.github.io/Portfolio/");const a=e("div","","contact");return a.appendChild(n),a.appendChild(t),a.appendChild(i),a}const o=document.getElementById("content");o.appendChild(function(){const n=e("ul","","navbar");for(var t=0;t<arguments.length;t+=1){let i=e("li",`${arguments[t]}`,"nav-item");n.appendChild(i)}return n}("Home","Menu","Contact")),o.appendChild(function(){const n=e("div","","main");return n.id="main",n}());let d=document.getElementById("main");document.querySelectorAll(".nav-item").forEach((e=>{e.onclick=()=>{if("Home"===e.textContent)var t=n;"Menu"===e.textContent&&(t=i),"Contact"===e.textContent&&(t=a),d.innerHTML="",d.appendChild(t())}})),d.appendChild(n())})();