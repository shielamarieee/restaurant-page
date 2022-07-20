(()=>{"use strict";!function(){const e=document.getElementById("content"),t=document.createElement("div");t.className="container",e.appendChild(t);const n=document.createElement("nav");n.className="navbar",t.appendChild(n);const a=document.createElement("h1");a.className="logo",a.textContent="Ramen",n.appendChild(a);const c=document.createElement("ul");c.className="nav-links",n.appendChild(c);const d=document.createElement("li");c.appendChild(d);const s=document.createElement("a");s.className="home",s.textContent="Home",s.setAttribute("href","#"),d.appendChild(s);const o=document.createElement("li");c.appendChild(o);const l=document.createElement("a");l.className="menu",l.textContent="Menu",l.setAttribute("href","#"),o.appendChild(l);const m=document.createElement("li");c.appendChild(m);const i=document.createElement("a");i.className="contact",i.textContent="Contact",i.setAttribute("href","#"),m.appendChild(i);const p=document.createElement("main");p.className="main",t.appendChild(p);const r=document.createElement("div");r.className="tagline",p.appendChild(r);const u=document.createElement("h1");u.textContent="Taste the world's best noodles",r.appendChild(u);const h=document.createElement("p");h.textContent="Handmade noodles with rich flavoured broth",r.appendChild(h);const C=document.createElement("button");C.className="btn",C.textContent="Order Online",r.appendChild(C);const E=document.createElement("footer");E.className="footer",t.appendChild(E);const N=document.createElement("div");N.className="my-info",E.appendChild(N);const g=document.createElement("p");g.textContent=`Copyright © ${(new Date).getFullYear()} shielamarieee`,N.appendChild(g);const x=document.createElement("a");x.setAttribute("href","https://github.com/shielamarieee"),N.appendChild(x);const f=document.createElement("i");f.className="fa-brands",f.classList.add("fa-github"),x.appendChild(f);const v=document.createElement("div");v.className="photo-info",E.appendChild(v);const b=document.createElement("p");b.textContent="Photo by",v.appendChild(b);const y=document.createElement("a");y.textContent=" Dovile Ramoskaite",y.setAttribute("href","https://unsplash.com/@dovilerm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),b.appendChild(y);const L=document.createElement("p");L.textContent="on ",v.appendChild(L);const q=document.createElement("a");q.textContent="Unsplash",q.setAttribute("href","https://unsplash.com/s/photos/ramen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),L.appendChild(q)}();const e=e=>{for(;e.lastChild;)e.removeChild(e.lastChild)};let t=document.querySelector(".main");document.querySelector(".home").addEventListener("click",(()=>{e(t),function(){const e=document.querySelector("main"),t=document.createElement("div");t.className="tagline",e.appendChild(t);const n=document.createElement("h1");n.textContent="Taste the world's best noodles",t.appendChild(n);const a=document.createElement("p");a.textContent="Handmade noodles with rich flavoured broth",t.appendChild(a);const c=document.createElement("button");c.className="btn",c.textContent="Order Online",t.appendChild(c)}(),console.log("1")})),document.querySelector(".menu").addEventListener("click",(()=>{e(t),function(){const e=document.querySelector(".main"),t=document.createElement("div");t.className="menu",t.classList.add("card"),e.appendChild(t);const n=document.createElement("div");n.className="dishes",t.appendChild(n);const a=document.createElement("div");a.className="dish",n.appendChild(a);const c=document.createElement("p");c.className="dish-name",c.textContent="Lorem Ipsum - $15",a.appendChild(c);const d=document.createElement("p");d.className="dish-details",d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",a.appendChild(d);const s=document.createElement("div");s.className="dish",n.appendChild(s);const o=document.createElement("p");o.className="dish-name",o.textContent="Lorem Ipsum - $15",s.appendChild(o);const l=document.createElement("p");l.className="dish-details",l.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",s.appendChild(l);const m=document.createElement("div");m.className="dish",n.appendChild(m);const i=document.createElement("p");i.className="dish-name",i.textContent="Lorem Ipsum - $15",m.appendChild(i);const p=document.createElement("p");p.className="dish-details",p.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",m.appendChild(p);const r=document.createElement("div");r.className="menu-center",t.appendChild(r);const u=document.createElement("p");u.className="menu-head",u.textContent="Menu",r.appendChild(u);const h=document.createElement("img");h.setAttribute("src","../src/images/noodles.png"),h.setAttribute("alt","noodles.png"),r.appendChild(h);const C=document.createElement("div");C.className="dishes",t.appendChild(C);const E=document.createElement("div");E.className="dish",C.appendChild(E);const N=document.createElement("p");N.className="dish-name",N.textContent="Lorem Ipsum - $15",E.appendChild(N);const g=document.createElement("p");g.className="dish-details",g.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",E.appendChild(g);const x=document.createElement("div");x.className="dish",C.appendChild(x);const f=document.createElement("p");f.className="dish-name",f.textContent="Lorem Ipsum - $15",x.appendChild(f);const v=document.createElement("p");v.className="dish-details",v.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",x.appendChild(v);const b=document.createElement("div");b.className="dish",C.appendChild(b);const y=document.createElement("p");y.className="dish-name",y.textContent="Lorem Ipsum - $15",b.appendChild(y);const L=document.createElement("p");L.className="dish-details",L.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",b.appendChild(L)}(),console.log("2")})),document.querySelector(".contact").addEventListener("click",(()=>{e(t),function(){const e=document.querySelector(".main"),t=document.createElement("div");t.className="contact",t.classList.add("card"),e.appendChild(t);const n=document.createElement("div");n.className="left-side",t.appendChild(n);const a=document.createElement("div");a.className="left-heading",n.appendChild(a);const c=document.createElement("p");c.textContent="say hi to the team",c.className="small",a.appendChild(c);const d=document.createElement("p");d.textContent="Contact Us",d.className="large",a.appendChild(d);const s=document.createElement("div");s.className="form",n.appendChild(s);const o=document.createElement("p");o.textContent="if you got any questions please do not hesitate to send us a message.",s.appendChild(o);const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","name"),s.appendChild(l);const m=document.createElement("input");m.setAttribute("type","email"),m.setAttribute("placeholder","email address"),s.appendChild(m);const i=document.createElement("textarea");i.setAttribute("placeholder","type your message"),s.appendChild(i);const p=document.createElement("button");p.textContent="Send Message",s.appendChild(p);const r=document.createElement("div");r.className="right-side",t.appendChild(r);const u=document.createElement("div");u.className="info",r.appendChild(u);const h=document.createElement("h3");h.textContent="opening hours",u.appendChild(h);const C=document.createElement("p");C.textContent="Monday - Friday",u.appendChild(C);const E=document.createElement("p");E.textContent="9am - 5pm",u.appendChild(E);const N=document.createElement("p");N.textContent="Weekend",u.appendChild(N);const g=document.createElement("p");g.textContent="Closed",u.appendChild(g);const x=document.createElement("div");x.className="info",r.appendChild(x);const f=document.createElement("h3");f.textContent="address",x.appendChild(f);const v=document.createElement("p");v.textContent="2890 Rockwell Lane,",x.appendChild(v);const b=document.createElement("p");b.textContent="North Carolina 27834",x.appendChild(b);const y=document.createElement("div");y.className="info",r.appendChild(y);const L=document.createElement("h3");L.textContent="support",y.appendChild(L);const q=document.createElement("p");q.textContent="example@gmail.com",y.appendChild(q);const A=document.createElement("p");A.textContent="+12 345 678 9012",y.appendChild(A)}(),console.log("3")}))})();