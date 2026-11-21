/* ============ KONFIGURASI — ganti data di sini ============ */
const CONFIG = {
  bride:{short:"Aurelia",full:"Aurelia Putri Maharani",parents:"Putri dari Bapak Hendra Maharani & Ibu Sekar Ayu",
    bio:"Seorang arsitek lanskap yang mencintai taman, kopi pagi, dan buku tua. Ia percaya bahwa cinta tumbuh seperti kebun: sabar dan dirawat setiap hari."},
  groom:{short:"Reynard",full:"Reynard Adhitama Wijaya",parents:"Putra dari Bapak Surya Wijaya & Ibu Laras Kinanti",
    bio:"Seorang dokter muda yang gemar mendaki gunung dan memotret senja. Bersamanya, ia menemukan rumah yang selama ini dicari."},
  weddingDate:"2027-02-14T09:00:00",
  dateShort:"14 . 02 . 2027",
  dateLabel:"Minggu, 14 Februari 2027",
  quote:{text:"Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan untukmu agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",by:"QS. Ar-Rum : 21"},
  live:{when:"Minggu, 14 Februari 2027 · 09.00 WIB", url:"https://www.youtube.com/@your-channel/live"},
  akad:{day:"Minggu, 14 Februari 2027",time:"09.00 – 10.30 WIB",place:"Masjid Raya Al-Mashun",addr:"Jl. Sisingamangaraja No. 61, Medan"},
  resepsi:{day:"Minggu, 14 Februari 2027",time:"11.30 – 14.00 WIB",place:"The Grand Ballroom Medan",addr:"Jl. Diponegoro No. 18, Medan"},
  maps:{name:"The Grand Ballroom Medan",addr:"Jl. Diponegoro No. 18, Medan, Sumatera Utara",
    embed:"https://www.google.com/maps?q=Medan+Grand+Ballroom&output=embed", link:"https://www.google.com/maps/search/?api=1&query=Medan+Grand+Ballroom"},
  rsvp:{whatsapp:"6281234567890", sheetsUrl:""},   // sheetsUrl: URL Google Apps Script Web App (opsional)
  inviters:[{label:"Keluarga Mempelai Wanita",names:["Bapak Hendra Maharani","Ibu Sekar Ayu"]},{label:"Keluarga Mempelai Pria",names:["Bapak Surya Wijaya","Ibu Laras Kinanti"]},{label:"Dan Segenap Keluarga Besar",names:[]}],
  thanks:{text:"Merupakan kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",closing:"Dua jiwa, satu cerita — dan kini kami menuliskannya bersama."},
  photos:{couple:"",bride:"",groom:"",live:"",thanks:""},  // isi URL foto, mis. "foto/couple.jpg"
  music:""   // isi path lagu, mis. "musik/lagu.mp3"
};

/* ============ UTIL ============ */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
const f=n=>n.toFixed(1);

/* ============ BOTANICAL GENERATOR ============ */
const P="M0 0C-.62 -.18 -.82 -.82 0 -1C.82 -.82 .62 -.18 0 0Z";
function bloom(cx,cy,R,layers,cols,stroke,rot=0){
  let g=`<g transform="translate(${cx} ${cy}) rotate(${rot})">`;
  for(let l=0;l<layers;l++){
    const n=5+Math.floor(l*1.4),r=R*(1-l*.8/layers),c=cols[Math.min(l,cols.length-1)],off=l*37+rnd()*20;
    for(let i=0;i<n;i++){const a=off+i*360/n+rnd()*8-4,s=r*(.88+rnd()*.2);
      g+=`<path d="${P}" transform="rotate(${f(a)}) scale(${f(s)})" fill="${c}" fill-opacity="${.78+l*.04}" stroke="${stroke}" stroke-opacity=".35" stroke-width=".7" vector-effect="non-scaling-stroke"/>`;}
  }
  return g+`<circle r="${R*.07}" fill="${stroke}" fill-opacity=".5"/></g>`;
}
const rose=(x,y,R)=>bloom(x,y,R,5,["#d9a9a6","#cf9490","#c58682","#b87874","#a76a67"],"#7d4745",rnd()*60);
const peony=(x,y,R)=>bloom(x,y,R,7,["#f1d5d0","#ebc3bf","#e3b2ae","#da9f9d","#cf8e8c","#c07f7d","#b27070"],"#8a5552",rnd()*60);
const ranunc=(x,y,R)=>bloom(x,y,R,8,["#f4dcc0","#efcfa9","#e8c093","#e0b07f","#d6a06e","#cc925f","#c18455","#b6794c"],"#8a5a37",rnd()*60);
function anemone(x,y,R){let g=`<g transform="translate(${x} ${y}) rotate(${rnd()*60})">`;
  for(let i=0;i<7;i++)g+=`<path d="${P}" transform="rotate(${i*51.4}) scale(${R})" fill="#fbf6ee" stroke="#a89b87" stroke-opacity=".5" stroke-width=".7" vector-effect="non-scaling-stroke"/>`;
  g+=`<circle r="${R*.2}" fill="#3a3550"/>`;
  for(let i=0;i<16;i++){const a=i*22.5*Math.PI/180;g+=`<circle cx="${f(Math.cos(a)*R*.3)}" cy="${f(Math.sin(a)*R*.3)}" r="1.1" fill="#3a3550"/>`}
  return g+"</g>";}
function jasmine(x,y,R){let g=`<g transform="translate(${x} ${y}) rotate(${rnd()*72})">`;
  for(let i=0;i<5;i++)g+=`<path d="M0 0C-.3 -.3 -.3 -.9 0 -1C.3 -.9 .3 -.3 0 0Z" transform="rotate(${i*72}) scale(${R})" fill="#fffdf7" stroke="#bdb39e" stroke-opacity=".6" stroke-width=".6" vector-effect="non-scaling-stroke"/>`;
  return g+`<circle r="1.6" fill="#d8bd7e"/></g>`;}
function branch(x0,y0,x1,y1,bend,n,col){
  const mx=(x0+x1)/2+bend,my=(y0+y1)/2-bend;
  let g=`<path d="M${x0} ${y0}Q${mx} ${my} ${x1} ${y1}" fill="none" stroke="#6b7258" stroke-width="1.6"/>`;
  for(let i=1;i<=n;i++){const t=i/(n+1),u=1-t,
    px=u*u*x0+2*u*t*mx+t*t*x1,py=u*u*y0+2*u*t*my+t*t*y1,
    tx=2*u*(mx-x0)+2*t*(x1-mx),ty=2*u*(my-y0)+2*t*(y1-my),a=Math.atan2(ty,tx)*180/Math.PI,side=i%2?1:-1,sz=15+rnd()*9;
    g+=`<g transform="translate(${f(px)} ${f(py)}) rotate(${f(a+side*(55+rnd()*15))})"><ellipse cx="${sz/2}" rx="${sz/2}" ry="${sz*.36}" fill="${col[i%col.length]}" fill-opacity=".85" stroke="#59613f" stroke-opacity=".4" stroke-width=".6"/><path d="M0 0H${sz}" stroke="#59613f" stroke-opacity=".35" stroke-width=".5"/></g>`;}
  return g;
}
function cluster(v){
  seed=11+v*5;const sage=["#9aa98d","#8a9b80","#a9b69c","#7f9076"],olive=["#6b7650","#5d6a45"];
  let s=`<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg"><g filter="url(#wc)">`;
  s+=branch(-10,-10,400,90,40,13,sage)+branch(-10,-10,70,400,-40,13,sage)+branch(-10,-10,310,240,-30,9,olive);
  s+=branch(40,10,230,-10+v*10,-20,6,sage);
  s+=peony(105,100,72)+rose(215,58,40)+rose(52,218,42)+ranunc(172,172,36)+anemone(262,128,30)+anemone(108,265,28)+peony(310,40,26)+rose(30,330,24);
  [[185,110],[250,205],[130,190],[330,95],[90,330],[215,255],[40,120],[160,32]].forEach(([x,y])=>s+=jasmine(x,y,11+rnd()*5));
  for(let i=0;i<9;i++)s+=`<circle cx="${f(60+rnd()*280)}" cy="${f(40+rnd()*200)}" r="${f(1.8+rnd()*1.6)}" fill="${i%2?"#c99a98":"#b8975a"}" fill-opacity=".8"/>`;
  return s+"</g></svg>";
}
const CL=[cluster(0),cluster(1),cluster(2)];
function smallCluster(){seed=99;let s=`<svg viewBox="0 0 200 200"><g filter="url(#wc)">`+branch(190,190,40,60,-20,7,["#9aa98d","#8a9b80"])+branch(190,190,60,180,25,6,["#7f9076","#a9b69c"]);
  s+=rose(130,130,36)+peony(80,150,28)+anemone(150,70,22)+jasmine(105,95,10)+jasmine(55,110,9)+jasmine(165,150,9);return s+"</g></svg>";}

/* ============ ICONS ============ */
const ICONS={
 opening:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/>',
 quotes:'<path d="M9 7H6v5h3v3c0 1-1 2-2 2M18 7h-3v5h3v3c0 1-1 2-2 2"/>',
 couple:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6M15 14c4-1 6 1 6 6"/>',
 live:'<circle cx="12" cy="12" r="1.6"/><path d="M8 8a5.5 5.5 0 0 0 0 8M16 8a5.5 5.5 0 0 1 0 8M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/>',
 acara:'<rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 10h16M9 3v4M15 3v4"/>',
 maps:'<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2"/>',
 rsvp:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
 mengundang:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"/>',
 thanks:'<circle cx="12" cy="12" r="1.6"/><path d="M12 10C10 6 10 4 12 3c2 1 2 3 0 7M12 14c2 4 2 6 0 7-2-1-2-3 0-7M10 12C6 10 4 10 3 12c1 2 3 2 7 0M14 12c4 2 6 2 7 0-1-2-3-2-7 0"/>'};
const ico=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;

/* ============ INIT ============ */
// bunga
$$(".fl").forEach((el,i)=>el.innerHTML=CL[i%3]);
$$(".fl-s").forEach(el=>el.innerHTML=smallCluster());
// data
$$("[data-k]").forEach(el=>{const v=el.dataset.k.split(".").reduce((o,k)=>o&&o[k],CONFIG);if(v!=null)el.textContent=v;});
$$("[data-photo]").forEach(el=>{const u=CONFIG.photos[el.dataset.photo];
  if(u){el.style.backgroundImage=`url(${u})`;el.classList.add("has");}
  const t=document.createElement("span");t.textContent=el.dataset.init;t.style.position="relative";t.style.zIndex="1";
  el.prepend(t);});
// guest dari ?to=Nama
const to=new URLSearchParams(location.search).get("to");if(to)$("#guest").textContent=to;
// links
$("#watch").href=CONFIG.live.url;$("#maplink").href=CONFIG.maps.link;$("#mapiframe").src=CONFIG.maps.embed;
$("#inviters").innerHTML=CONFIG.inviters.map(g=>`<small>${g.label}</small>`+g.names.map(n=>`<p>${n}</p>`).join("")).join("");
// nav
const secs=$$("main section");
$("#nav").innerHTML=secs.map(s=>`<a href="#${s.id}" aria-label="${s.dataset.label}" title="${s.dataset.label}" data-id="${s.id}">${ico(s.id)}<span>${s.dataset.label}</span></a>`).join("");
$$("#nav a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();document.getElementById(a.dataset.id).scrollIntoView({behavior:"smooth"});}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$("#nav a").forEach(a=>a.classList.toggle("on",a.dataset.id===e.target.id));}),{threshold:.5});
secs.forEach(s=>io.observe(s));
// reveal
$$(".wrap > *").forEach(el=>el.classList.add("rv"));
const rvo=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rvo.unobserve(e.target);}}),{threshold:.15});
$$(".rv").forEach((el,i)=>{el.style.transitionDelay=(i%4)*.12+"s";rvo.observe(el);});
// parallax + progress
const fls=$$("main .fl svg");
function onScroll(){
  const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-innerHeight)*100;$("#progress").style.width=p+"%";
  fls.forEach(sv=>{const r=sv.parentElement.parentElement.getBoundingClientRect();const d=(r.top+r.height/2-innerHeight/2)*.06;sv.style.translate=`0 ${d.toFixed(1)}px`;});
}
addEventListener("scroll",onScroll,{passive:true});onScroll();
// music
const audio=$("#audio"),mb=$("#music");
const PLAY='<svg viewBox="0 0 24 24"><circle cx="9" cy="18" r="3"/><path d="M12 18V5l8-2v12"/><circle cx="17" cy="15" r="3"/></svg>';
mb.innerHTML=PLAY;
function setPlay(on){mb.classList.toggle("play",on);mb.setAttribute("aria-pressed",on);}
mb.onclick=()=>{if(!CONFIG.music)return;audio.paused?audio.play().then(()=>setPlay(true)).catch(()=>{}):(audio.pause(),setPlay(false));};
// open
$("#open").onclick=()=>{
  $("#cover").classList.add("gone");document.body.classList.remove("locked");
  setTimeout(()=>{$("#cover").style.display="none";},1200);
  if(CONFIG.music){audio.src=CONFIG.music;audio.play().then(()=>setPlay(true)).catch(()=>{});mb.classList.remove("hidden");}
  scrollTo(0,0);
};
// RSVP
$("#rsvpForm").addEventListener("submit",async e=>{
  e.preventDefault();const d=Object.fromEntries(new FormData(e.target)),st=$("#status");
  if(CONFIG.rsvp.sheetsUrl){try{await fetch(CONFIG.rsvp.sheetsUrl,{method:"POST",mode:"no-cors",body:JSON.stringify(d)});st.textContent="Terima kasih, konfirmasi Anda telah terkirim.";}catch{st.textContent="Pengiriman gagal. Coba lagi sebentar.";}}
  const msg=`Konfirmasi Kehadiran — ${CONFIG.bride.short} & ${CONFIG.groom.short}\nNama: ${d.nama}\nJumlah: ${d.jumlah} orang\nKehadiran: ${d.hadir}\nUcapan: ${d.ucapan||"-"}`;
  if(CONFIG.rsvp.whatsapp){window.open(`https://wa.me/${CONFIG.rsvp.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");st.textContent=st.textContent||"Melanjutkan ke WhatsApp…";}
  e.target.reset();
});
