/* ============ KONFIGURASI — ganti data di sini ============ */
const CONFIG = {
  bride: {
    short: "Angel",
    full: "Angelica Silitonga",
    parents: "Putri dari Bapak R.Silitonga & Ibu S. Br Hasibuan",
    bio: "Wanita yang hangat dan penuh perhatian. Ia senang berbagi kebahagiaan, menghargai hal-hal sederhana, dan selalu berusaha tumbuh menjadi pribadi yang lebih baik."
  },
  groom: {
    short: "Ronaldo",
    full: "Ronaldo Gultom",
    parents: "Putra dari Bapak B Gultom & Ibu R br Butar butar",
    bio: "Pria yang rendah hati, bertanggung jawab, dan peduli kepada orang-orang di sekitarnya. Ia menyukai hal-hal baru serta percaya pada arti kebersamaan."
  },
  weddingDate: "2027-02-14T09:00:00",
  dateShort: "28 . 12 . 2026",
  dateLabel: "Senin, 28 Desember 2026",
  quote: {
    text: "Kasih sayangku seluas lautan dan cintaku sedalam samudra. Semakin banyak cinta yang kuberikan kepadamu, semakin besar pula cinta yang tumbuh, karena cinta sejati tidak pernah kehabisan ruang untuk bertambah.",
    by: "William Shakespeare — Romeo and Juliet (1597)"
  },
  akad: {
    day: "Senin, 28 Desember 2026",
    time: "10.00–11.00 WIB",
    place: "Sampuara kabupaten Toba",
  },
  resepsi: {
    day: "Senin, 28 Desember 2026",
    time: "11.00 WIB – sampai dengan selesai",
    place: "Sampuara kabupaten Toba",
  },
  maps: {
    name: "Sampura",
    addr: "Kec. Bonatua Lunasi, Kabupaten Toba, Sumatera Utara",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.937130587943!2d99.1186015!3d2.5120255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031f94bfb303f51%3A0xba83106b55d851ff!2sSampuara%2C%20Kec.%20Bonatua%20Lunasi%2C%20Kabupaten%20Toba%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1795452584328!5m2!1sid!2sid",
    link: "https://maps.app.goo.gl/q4fBrDwtKgUXgrCz6"
  },
  rsvp: {
    whatsapp: "6282272748502",
    sheetsUrl: ""
  },
  gifts: {
    accounts: [
      {
        bank: "Bank Mandiri",
        logo: "https://www.bankmandiri.co.id/image/layout_set_logo?img_id=31567",
        accountNumber: "1820016788580",
        accountName: "RONALDO GULTOM",
        transferUrl: "https://bankmandiri.co.id/en/livin"
      }
    ]
  },
  inviters: [
    {label: "Keluarga Mempelai Wanita", names: ["Bapak R.Silitonga", "Ibu S. Br Hasibuan"]},
    {label: "Keluarga Mempelai Pria", names: ["Bapak B. Gultom", "Ibu R.br Butar butar"]},
    {label: "Dan Segenap Keluarga Besar", names: []}
  ],
  thanks: {
    text: "Merupakan kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    closing: "Dua jiwa, satu cerita — dan kini kami menuliskannya bersama."
  },
  photos: {
    couple: "photos/couple.jpeg",
    bride: "photos/bride.jpeg",
    groom: "photos/groom.jpeg",
    thanks: "photos/thanks.jpeg"
  },
  music: "music.mp3"
};

/* ============ UTIL ============ */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
const f=n=>n.toFixed(1);

/* ============ BOTANICAL GENERATOR — premium watercolor edition ============ */
let botanicalId = 0;
const petalPath = (turn = 0) => {
  const w = 6 + rnd() * 3;
  const x = 8 + rnd() * 3;
  return `M0 0 C-${f(w)} -${f(8 + rnd() * 5)} -${f(x)} -${f(24 + rnd() * 6)} 0 -${f(34 + rnd() * 7)} C${f(x)} -${f(24 + rnd() * 6)} ${f(w)} -${f(8 + rnd() * 5)} 0 0Z`;
};
function bloom(cx, cy, R, layers, cols, stroke, rot = 0) {
  botanicalId++;
  let g = `<g transform="translate(${cx} ${cy}) rotate(${rot})" filter="url(#petalShadow)">`;
  for (let l = 0; l < layers; l++) {
    const n = 7 + l * 2;
    const r = R * (1 - l * 0.72 / layers);
    const c = cols[Math.min(l, cols.length - 1)];
    const c2 = cols[Math.min(l + 1, cols.length - 1)];
    const off = l * 31 + rnd() * 24;
    g += `<defs><radialGradient id="botanical${botanicalId}-${l}" cx="35%" cy="28%" r="76%"><stop offset="0" stop-color="#fffaf4" stop-opacity=".82"/><stop offset=".35" stop-color="${c}" stop-opacity=".96"/><stop offset="1" stop-color="${c2}" stop-opacity=".72"/></radialGradient></defs>`;
    for (let i = 0; i < n; i++) {
      const a = off + i * (360 / n) + rnd() * 7 - 3.5;
      const s = r * (.78 + rnd() * .24);
      const stretch = .84 + rnd() * .28;
      g += `<path d="${petalPath()}" transform="rotate(${f(a)}) scale(${f(s / 34)} ${f(s * stretch / 34)})" fill="url(#botanical${botanicalId}-${l})" fill-opacity="${f(.78 + rnd() * .16)}" stroke="${stroke}" stroke-opacity=".28" stroke-width=".55" vector-effect="non-scaling-stroke"/>`;
    }
  }
  g += `<circle r="${R * .075}" fill="#c7a85d" fill-opacity=".72"/><circle r="${R * .025}" fill="#6d5535" fill-opacity=".82"/>`;
  return g + `</g>`;
}
const rose = (x, y, R) => bloom(x, y, R, 6, ["#f1d8d4", "#ddaead", "#c98f91", "#b97577", "#a86267"], "#8d5b58", rnd() * 360);
const peony = (x, y, R) => bloom(x, y, R, 8, ["#fff5ed", "#f0d0c9", "#dfb1aa", "#d09a96", "#b87d7b"], "#9b6864", rnd() * 360);
const ranunc = (x, y, R) => bloom(x, y, R, 9, ["#fbebd7", "#efd2ad", "#dfb789", "#d09f72", "#b9875d"], "#9b7249", rnd() * 360);
function anemone(x, y, R) {
  botanicalId++;
  let g = `<g transform="translate(${x} ${y}) rotate(${rnd() * 360})" filter="url(#petalShadow)">`;
  for (let i = 0; i < 9; i++) {
    const s = R * (.82 + rnd() * .24);
    g += `<path d="${petalPath()}" transform="rotate(${i * 40 + rnd() * 5}) scale(${f(s / 34)})" fill="#fbf8ef" fill-opacity="${f(.76 + rnd() * .2)}" stroke="#a89b87" stroke-opacity=".48" stroke-width=".55" vector-effect="non-scaling-stroke"/>`;
  }
  g += `<circle r="${R * .18}" fill="#454447"/><circle r="${R * .11}" fill="#5a4d3b" fill-opacity=".92"/>`;
  for (let i = 0; i < 18; i++) {
    const a = i * 20 * Math.PI / 180;
    g += `<circle cx="${f(Math.cos(a) * R * (.18 + rnd() * .15))}" cy="${f(Math.sin(a) * R * (.18 + rnd() * .15))}" r="${f(.75 + rnd() * .9)}" fill="${i % 3 ? "#c7a85d" : "#77705b"}" fill-opacity=".82"/>`;
  }
  return g + `</g>`;
}
function jasmine(x, y, R) {
  let g = `<g transform="translate(${x} ${y}) rotate(${rnd() * 72})" filter="url(#petalShadow)">`;
  for (let i = 0; i < 5; i++) {
    g += `<path d="M0 0C-${f(R * .3)} -${f(R * .32)} -${f(R * .28)} -${f(R * .86)} 0 -${R}C${f(R * .28)} -${f(R * .86)} ${f(R * .3)} -${f(R * .32)} 0 0Z" transform="rotate(${i * 72 + rnd() * 4}) scale(.88 1)" fill="#fffdf8" fill-opacity="${f(.82 + rnd() * .16)}" stroke="#bdb39e" stroke-opacity=".46" stroke-width=".55"/>`;
  }
  g += `<circle r="${f(R * .14)}" fill="#d8bd7e"/><circle r="${f(R * .055)}" fill="#a88a45"/>`;
  return g + `</g>`;
}
function branch(x0, y0, x1, y1, bend, n, col) {
  const mx = (x0 + x1) / 2 + bend;
  const my = (y0 + y1) / 2 - bend;
  let g = `<path d="M${x0} ${y0}Q${mx} ${my} ${x1} ${y1}" fill="none" stroke="#69744f" stroke-width="1.35" stroke-opacity=".82"/><path d="M${x0 + 1} ${y0 + 1}Q${mx + 1} ${my + 1} ${x1 + 1} ${y1 + 1}" fill="none" stroke="#c7a85d" stroke-width=".28" stroke-opacity=".42"/>`;
  for (let i = 1; i <= n; i++) {
    const t = i / (n + 1), u = 1 - t;
    const px = u * u * x0 + 2 * u * t * mx + t * t * x1;
    const py = u * u * y0 + 2 * u * t * my + t * t * y1;
    const tx = 2 * u * (mx - x0) + 2 * t * (x1 - mx);
    const ty = 2 * u * (my - y0) + 2 * t * (y1 - my);
    const a = Math.atan2(ty, tx) * 180 / Math.PI;
    const side = i % 2 ? 1 : -1;
    const sz = 10 + rnd() * 13;
    const sy = sz * (.34 + rnd() * .18);
    const color = i % 4 === 0 ? "#c1cbad" : col[i % col.length];
    g += `<g transform="translate(${f(px)} ${f(py)}) rotate(${f(a + side * (48 + rnd() * 18))})"><ellipse cx="${f(sz * .48)}" rx="${f(sz * .52)}" ry="${f(sy)}" fill="${color}" fill-opacity="${f(.82 + rnd() * .12)}" stroke="#5d6848" stroke-opacity=".38" stroke-width=".45"/><path d="M0 ${f(sy * .15)}Q${f(sz * .48)} ${f(sy * .05)} ${sz} 0" fill="none" stroke="#66744f" stroke-opacity=".42" stroke-width=".38"/><circle cx="${sz}" cy="0" r=".7" fill="#b8975a" fill-opacity=".58"/></g>`;
  }
  return g;
}
function cluster(v) {
  seed = 101 + v * 19;
  const sage = ["#8fa181", "#9da98e", "#b1baa0", "#7d9072"];
  const olive = ["#69764f", "#5d6945", "#7d8661"];
  let s = `<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg"><defs><filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1.2" dy="2" stdDeviation="1.8" flood-color="#5d5144" flood-opacity=".16"/><feGaussianBlur stdDeviation=".08"/></filter></defs><g filter="url(#wc)">`;
  s += branch(-18, -12, 392, 92, 38, 12, sage);
  s += branch(-14, 0, 76, 410, -42, 14, sage);
  s += branch(410, 0, 270, 260, 58, 9, olive);
  s += branch(10, 402, 205, 356, -35, 7, sage);
  s += peony(118, 112, 82);
  s += rose(244, 72, 48);
  s += ranunc(176, 188, 42);
  s += anemone(304, 138, 34);
  s += rose(54, 250, 44);
  s += peony(330, 300, 30);
  s += ranunc(82, 342, 26);
  [[200, 92], [278, 212], [146, 278], [360, 96], [102, 300], [224, 322], [44, 138], [360, 198]].forEach(([x, y], i) => s += jasmine(x, y, 9 + (i % 4) * 2));
  for (let i = 0; i < 14; i++) {
    const x = 44 + rnd() * 315, y = 42 + rnd() * 310;
    s += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(.8 + rnd() * 1.25)}" fill="${i % 3 === 0 ? "#b8975a" : "#c99a98"}" fill-opacity="${f(.52 + rnd() * .28)}"/>`;
  }
  s += `<path d="M32 380C92 356 132 378 172 348C218 314 258 342 310 302" fill="none" stroke="#b8975a" stroke-width=".7" stroke-opacity=".65"/>`;
  return s + `</g></svg>`;
}
let CL;
function smallCluster() {
  seed = 303;
  let s = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1" dy="1.5" stdDeviation="1.4" flood-color="#5d5144" flood-opacity=".14"/></filter></defs><g filter="url(#wc)">`;
  s += branch(194, 194, 42, 54, -24, 8, ["#9aa98d", "#7f9076"]);
  s += branch(196, 196, 65, 180, 28, 7, ["#a9b69c", "#69764f"]);
  s += peony(122, 128, 46);
  s += rose(72, 154, 28);
  s += anemone(154, 78, 25);
  s += jasmine(96, 82, 10);
  s += jasmine(52, 112, 9);
  s += jasmine(166, 148, 8);
  s += `<path d="M28 176C78 150 112 162 158 112" fill="none" stroke="#b8975a" stroke-width=".55" stroke-opacity=".58"/>`;
  return s + `</g></svg>`;
}

/* ============ ICONS ============ */
const ICONS={
 opening:'<rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/>',
 quotes:'<path d="M9 7H6v5h3v3c0 1-1 2-2 2M18 7h-3v5h3v3c0 1-1 2-2 2"/>',
 couple:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6M15 14c4-1 6 1 6 6"/>',
 acara:'<rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 10h16M9 3v4M15 3v4"/>',
 maps:'<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2"/>',
 rsvp:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
 gift:'<path d="M3 10h18v11H3zM2 6h20v4H2zM12 6v15M12 6H8.5a2.5 2.5 0 1 1 2.5-2.5V6zm0 0h3.5A2.5 2.5 0 1 0 13 3.5V6z"/>',
 mengundang:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z"/>',
 thanks:'<circle cx="12" cy="12" r="1.6"/><path d="M12 10C10 6 10 4 12 3c2 1 2 3 0 7M12 14c2 4 2 6 0 7-2-1-2-3 0-7M10 12C6 10 4 10 3 12c1 2 3 2 7 0M14 12c4 2 6 2 7 0-1-2-3-2-7 0"/>'};
const ico=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;

/* ============ INIT ============ */
let botanicalImageUrls;
let smallBotanicalImageUrl;
const turbulenceFilter='<filter id="wc" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="5"/><feGaussianBlur stdDeviation=".35"/></filter>';
function botanicalImageUrl(markup,size){
  const svg=markup
    .replace("<svg viewBox=",`<svg width="${size}" height="${size}" viewBox=`)
    .replace("<defs>",`<defs>${turbulenceFilter}`);
  return URL.createObjectURL(new Blob([svg],{type:"image/svg+xml"}));
}
function makeBotanicalImage(src){
  const image=document.createElement("img");
  image.src=src;
  image.alt="";
  image.setAttribute("aria-hidden","true");
  image.decoding="async";
  return image;
}
function initializeBotanicals(root){
  if(!CL)CL=[cluster(0),cluster(1),cluster(2)];
  if(!botanicalImageUrls)botanicalImageUrls=CL.map(markup=>botanicalImageUrl(markup,420));
  $$(".fl",root).forEach((el,i)=>{
    if(!el.firstElementChild)el.appendChild(makeBotanicalImage(botanicalImageUrls[i%3]));
  });
  const smallFlowers=$$(".fl-s",root);
  if(smallFlowers.length){
    if(!smallBotanicalImageUrl)smallBotanicalImageUrl=botanicalImageUrl(smallCluster(),200);
    smallFlowers.forEach(el=>{
      if(!el.firstElementChild)el.appendChild(makeBotanicalImage(smallBotanicalImageUrl));
    });
  }
}
const initializedPhotos=new WeakSet();
function initializePhotos(root){
  $$("[data-photo]",root).forEach(el=>{
    if(initializedPhotos.has(el))return;
    const u=CONFIG.photos[el.dataset.photo];
    if(u){
      if(el.classList.contains("oval")){
        const img=document.createElement("img");
        img.className="oval-photo";
        img.src=u;
        img.alt=el.dataset.photo==="bride"?CONFIG.bride.full:CONFIG.groom.full;
        img.decoding="async";
        img.loading="lazy";
        el.appendChild(img);
      }else{
        el.style.backgroundImage=`url(${u})`;el.classList.add("has");
      }
    }
    if(!el.classList.contains("oval")){
      const t=document.createElement("span");t.textContent=el.dataset.init;t.style.position="relative";t.style.zIndex="1";
      el.prepend(t);
    }
    initializedPhotos.add(el);
  });
}
// data
$$("[data-k]").forEach(el=>{const v=el.dataset.k.split(".").reduce((o,k)=>o&&o[k],CONFIG);if(v!=null)el.textContent=v;});
// guest dari ?to=Nama
const to=new URLSearchParams(location.search).get("to");if(to)$("#guest").textContent=to;
// links
$("#maplink").href=CONFIG.maps.link;
$("#inviters").innerHTML=CONFIG.inviters.map(g=>`<small>${g.label}</small>`+g.names.map(n=>`<p>${n}</p>`).join("")).join("");

const giftAccounts=$("#giftAccounts");
const giftStatus=$("#giftStatus");
const giftToggle=$("#giftToggle");
const giftDetails=$("#giftDetails");
function appendGiftText(parent,className,text){
  const el=document.createElement("p");
  el.className=className;
  el.textContent=text;
  parent.appendChild(el);
  return el;
}
function makeGiftAccount(account){
  const card=document.createElement("article");
  card.className="gift-account";
  const heading=document.createElement("div");
  heading.className="gift-account-heading";
  const bankNameValue=(account.bank||"").trim()||"Nama bank";
  const logo=document.createElement("span");
  logo.className="gift-bank-logo";
  logo.setAttribute("aria-hidden","true");
  const fallback=document.createElement("span");
  fallback.className="gift-bank-monogram";
  const bankWords=bankNameValue.split(/\s+/).filter(Boolean);
  fallback.textContent=bankWords.length>1
    ?bankWords.slice(0,2).map(word=>word[0]).join("").toUpperCase()
    :(bankWords[0]||"B").slice(0,2).toUpperCase();
  logo.appendChild(fallback);
  if(account.logo){
    const image=document.createElement("img");
    image.dataset.src=account.logo;
    image.alt=`Logo ${bankNameValue}`;
    image.loading="lazy";
    image.decoding="async";
    image.addEventListener("error",()=>image.remove(),{once:true});
    logo.appendChild(image);
  }
  heading.appendChild(logo);
  const bankName=document.createElement("h3");
  bankName.className="gift-bank-name";
  bankName.textContent=bankNameValue;
  heading.appendChild(bankName);
  card.appendChild(heading);
  appendGiftText(card,"gift-account-label","Nomor rekening");
  appendGiftText(card,"gift-account-number",account.accountNumber||"Nomor rekening belum tersedia");
  appendGiftText(card,"gift-account-owner",account.accountName?`a.n. ${account.accountName}`:"Nama pemilik rekening belum tersedia");

  const actions=document.createElement("div");
  actions.className="gift-account-actions";
  const copyButton=document.createElement("button");
  copyButton.type="button";
  copyButton.className="gift-action gift-copy";
  copyButton.textContent="Salin Nomor Rekening";
  copyButton.disabled=!account.accountNumber;
  copyButton.addEventListener("click",()=>copyGiftAccount(account.accountNumber));
  actions.appendChild(copyButton);

  let transferUrl="";
  if(account.transferUrl){
    try{
      const parsedUrl=new URL(account.transferUrl);
      if(parsedUrl.protocol==="https:")transferUrl=parsedUrl.href;
    }catch(error){
      transferUrl="";
    }
  }
  if(transferUrl){
    const sendLink=document.createElement("a");
    sendLink.className="gift-action gift-send";
    sendLink.href=transferUrl;
    sendLink.target="_blank";
    sendLink.rel="noopener noreferrer";
    sendLink.textContent="Kirim Hadiah";
    actions.appendChild(sendLink);
  }else{
    const sendButton=document.createElement("button");
    sendButton.type="button";
    sendButton.className="gift-action gift-send";
    sendButton.textContent="Kirim Hadiah";
    sendButton.disabled=true;
    sendButton.title="Tautan resmi transfer belum tersedia";
    actions.appendChild(sendButton);
    appendGiftText(actions,"gift-transfer-hint","Tautan resmi transfer belum tersedia.");
  }
  card.appendChild(actions);
  return card;
}
function copyGiftAccount(accountNumber){
  const fallbackCopy=()=>{
    const field=document.createElement("textarea");
    field.value=accountNumber;
    field.setAttribute("readonly","");
    field.style.position="fixed";
    field.style.opacity="0";
    document.body.appendChild(field);
    field.select();
    let copied=false;
    try{copied=document.execCommand("copy");}
    catch(error){copied=false;}
    field.remove();
    return copied;
  };
  if(navigator.clipboard&&window.isSecureContext){
    navigator.clipboard.writeText(accountNumber).then(()=>{
      giftStatus.textContent="Nomor rekening berhasil disalin.";
    },()=>{
      giftStatus.textContent=fallbackCopy()
        ?"Nomor rekening berhasil disalin."
        :"Nomor rekening tidak dapat disalin. Silakan salin secara manual.";
    });
  }else{
    giftStatus.textContent=fallbackCopy()
      ?"Nomor rekening berhasil disalin."
      :"Nomor rekening tidak dapat disalin. Silakan salin secara manual.";
  }
}
if(giftAccounts){
  const accounts=Array.isArray(CONFIG.gifts.accounts)?CONFIG.gifts.accounts:[];
  if(accounts.length){
    accounts.forEach(account=>giftAccounts.appendChild(makeGiftAccount(account)));
  }else{
    const emptyCard=document.createElement("article");
    emptyCard.className="gift-account gift-empty";
    const heading=document.createElement("h3");
    heading.className="gift-bank-name";
    heading.textContent="Informasi rekening";
    emptyCard.appendChild(heading);
    appendGiftText(emptyCard,"gift-empty-copy","Detail rekening akan ditampilkan di sini.");
    const sendButton=document.createElement("button");
    sendButton.type="button";
    sendButton.className="gift-action gift-send";
    sendButton.textContent="Kirim Hadiah";
    sendButton.disabled=true;
    sendButton.title="Tautan resmi transfer belum tersedia";
    emptyCard.appendChild(sendButton);
    appendGiftText(emptyCard,"gift-transfer-hint","Tautan resmi transfer belum tersedia.");
    giftAccounts.appendChild(emptyCard);
  }
}
giftToggle.addEventListener("click",()=>{
  const isOpen=giftToggle.getAttribute("aria-expanded")==="true";
  giftToggle.setAttribute("aria-expanded",String(!isOpen));
  giftToggle.querySelector("span").textContent=isOpen?"Buka detail rekening":"Tutup detail rekening";
  giftDetails.classList.toggle("is-open",!isOpen);
  giftDetails.setAttribute("aria-hidden",String(isOpen));
  giftDetails.inert=isOpen;
  $("#gift .gift-illustration").classList.toggle("is-open",!isOpen);
});
// nav
const secs=$$("main section");
$("#nav").innerHTML=secs.map(s=>`<a href="#${s.id}" aria-label="${s.dataset.label}" title="${s.dataset.label}" data-id="${s.id}">${ico(s.id)}<span>${s.dataset.label}</span></a>`).join("");
$$("#nav a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();showPage(a.dataset.id);}));

const nextButton=document.createElement("button");
nextButton.type="button";
nextButton.id="nextPageButton";
nextButton.className="next-page-btn";
document.body.appendChild(nextButton);
nextButton.addEventListener("click",()=>{
  if(nextButton.dataset.target)showPage(nextButton.dataset.target);
});
function updateNextButton(active){
  const index=secs.indexOf(active);
  const next=secs[(index+1)%secs.length];
  nextButton.dataset.target=next.id;
  nextButton.setAttribute("aria-label",`Lanjut ke ${next.dataset.label}`);
  nextButton.innerHTML=`<span class="next-label"><small>NEXT</small><strong>${next.dataset.label}</strong></span><span class="next-symbol">${ico(next.id)}<i></i></span>`;
  nextButton.classList.add("show");
}

// Kalender Desember 2026
const calendarGrid=$("#calendarGrid");
if(calendarGrid){
  const days=['<span class="calendar-day empty"></span>'];
  for(let day=1;day<=31;day++){
    days.push(`<span class="calendar-day${day===28?' selected':''}">${day}</span>`);
  }
  calendarGrid.insertAdjacentHTML("beforeend",days.join(""));
}

const saveDate=$("#saveDate");
const calendarMenu=$("#calendarMenu");
if(saveDate&&calendarMenu){
  saveDate.addEventListener("click",()=>{
    const open=!calendarMenu.classList.contains("open");
    calendarMenu.classList.toggle("open",open);
    saveDate.setAttribute("aria-expanded",String(open));
  });
  document.addEventListener("click",e=>{if(!e.target.closest(".calendar-save-wrap")){calendarMenu.classList.remove("open");saveDate.setAttribute("aria-expanded","false")}});
}

const calendarEvent={
  title:`Pernikahan ${CONFIG.bride.short} & ${CONFIG.groom.short}`,
  location:CONFIG.akad.place,
  start:"20261228",
  end:"20261229",
  isoStart:"2026-12-28",
  isoEnd:"2026-12-29",
  details:"Pemberkatan Pernikahan dan Resepsi - Pernikahan Angel & Ronaldo"
};

function downloadICS(){
  const now=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z");
  const ics=[
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${now}-wedding@example.com`,
    `DTSTAMP:${now}`,
    `DTSTART;VALUE=DATE:${calendarEvent.start}`,
    `DTEND;VALUE=DATE:${calendarEvent.end}`,
    `SUMMARY:${calendarEvent.title}`,
    `LOCATION:${calendarEvent.location}`,
    `DESCRIPTION:${calendarEvent.details}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  const blob=new Blob([ics],{type:"text/calendar;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const link=document.createElement("a");link.href=url;link.download="pernikahan-angel-ronaldo.ics";document.body.appendChild(link);link.click();link.remove();URL.revokeObjectURL(url);
}

if(calendarMenu){
  $$("[data-calendar]",calendarMenu).forEach(button=>button.addEventListener("click",()=>{
    const type=button.dataset.calendar;
    if(type==="google"){
      const url=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.title)}&dates=${calendarEvent.start}/${calendarEvent.end}&details=${encodeURIComponent(calendarEvent.details)}&location=${encodeURIComponent(calendarEvent.location)}&ctz=Asia/Jakarta`;
      window.open(url,"_blank","noopener");
    }else if(type==="apple")downloadICS();
    else if(type==="outlook"){
      const url=`https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(calendarEvent.title)}&startdt=${encodeURIComponent(calendarEvent.isoStart)}&enddt=${encodeURIComponent(calendarEvent.isoEnd)}&allday=true&body=${encodeURIComponent(calendarEvent.details)}&location=${encodeURIComponent(calendarEvent.location)}`;
      window.open(url,"_blank","noopener");
    }
    calendarMenu.classList.remove("open");saveDate.setAttribute("aria-expanded","false");
  }));
}

function showPage(id,deferBotanicals=false){
  const active=secs.find(s=>s.id===id);
  if(!active)return;
  initializePhotos(active);
  if(!deferBotanicals)initializeBotanicals(active);
  if(id==="maps"){
    const map=$("#mapiframe");
    if(!map.hasAttribute("src"))map.src=CONFIG.maps.embed;
  }
  if(id==="gift"){
    $$("#giftAccounts img[data-src]").forEach(image=>{
      image.src=image.dataset.src;
      image.removeAttribute("data-src");
    });
  }
  const previous=$("main section.active");
  if(previous&&previous!==active&&window.gsap&&!reducedMotion){
    gsap.to(previous,{opacity:0,y:-8,duration:.38,ease:"power3.out",onComplete:()=>{previous.style.transform="";}});
  }
  secs.forEach(s=>{
    const selected=s===active;
    s.classList.toggle("active",selected);
    s.setAttribute("aria-hidden",String(!selected));
    if(selected)$$('.rv',s).forEach(el=>el.classList.add('in'));
  });
  $$("#nav a").forEach(a=>{
    const selected=a.dataset.id===id;
    a.classList.toggle("on",selected);
    a.setAttribute("aria-current",selected?"page":"false");
  });
  const progress=$("#pageProgress");
  if(progress){
    const index=secs.indexOf(active);
    const progressValue=(index+1)/secs.length;
    if(window.gsap&&!reducedMotion){gsap.set(progress,{scaleX:progressValue});}
    else{progress.style.transform=`scaleX(${progressValue})`;}
  }
  updateNextButton(active);
  if(active&&window.gsap&&!reducedMotion){
    gsap.fromTo(active,{opacity:0,y:10,scale:.985},{opacity:1,y:0,scale:1,duration:.82,ease:"power3.out"});
    if(id==="couple"){
    const couple=$("#couple");
    if(couple)couple.scrollTop=0;
  }
  if(id==="opening"){
      gsap.timeline({defaults:{ease:"power3.out"}})
        .from("#opening .opening-eyebrow",{y:12,opacity:0,duration:.75})
        .from("#opening .opening-portrait",{scale:.86,clipPath:"ellipse(28% 28% at 50% 50%)",opacity:0,duration:1.25},"-.3")
        .from("#opening .opening-names span,#opening .opening-names .gold-ampersand",{y:18,opacity:0,duration:.78,stagger:.16},"-.55")
        .from("#opening .opening-rule",{scaleX:0,transformOrigin:"center",duration:.85},"-.45")
        .from("#opening .opening-date,#opening .opening-journey",{y:10,opacity:0,duration:.75,stagger:.12},"-.35");
    }
    if(id==="acara"){
      gsap.timeline({defaults:{ease:"power3.out"}})
        .from("#acara .acara-eyebrow,#acara .title",{y:14,opacity:0,duration:.8,stagger:.12})
        .from("#acara .akad-card",{x:-28,scale:.94,opacity:0,duration:1.05},"-.45")
        .from("#acara .vl",{scaleY:0,transformOrigin:"top",duration:.95},"-.7")
        .from("#acara .resepsi-card",{x:28,scale:.94,opacity:0,duration:1.05},"-.8")
        .from("#acara .ev .d,#acara .ev .t,#acara .ev .pl",{y:8,opacity:0,duration:.65,stagger:.08},"-.55")
        .from("#acara .calendar-panel",{rotateY:-8,scale:.94,clipPath:"inset(0 0 100% 0)",opacity:0,duration:1.2},"-.6")
        .from("#acara .calendar-day:not(.empty)",{y:8,opacity:0,duration:.45,stagger:.018},"-.45")
        .from("#acara .save-date-btn",{y:12,opacity:0,duration:.8},"-.25");
    }
  }
  active.scrollTop=0;
  requestAnimationFrame(()=>{active.scrollTop=0;});
}
// reveal
$$(".wrap > *").forEach(el=>el.classList.add("rv"));
$$(".rv").forEach((el,i)=>{el.style.transitionDelay=(i%4)*.12+"s";});
initializeBotanicals($("#cover"));
showPage("opening",true);
// music
const audio=$("#audio"),mb=$("#music");
const PLAY='<svg viewBox="0 0 24 24"><circle cx="9" cy="18" r="3"/><path d="M12 18V5l8-2v12"/><circle cx="17" cy="15" r="3"/></svg>';
mb.innerHTML=PLAY;
const savedMusicPreference=sessionStorage.getItem("weddingMusic");
let musicWanted=savedMusicPreference=== "on";
let musicPreferenceSet=savedMusicPreference!==null;
function setPlay(on){
  musicWanted=on;
  musicPreferenceSet=true;
  sessionStorage.setItem("weddingMusic",on?"on":"off");
  mb.classList.toggle("play",on);
  mb.setAttribute("aria-pressed",String(on));
}
mb.classList.toggle("play",musicWanted);
mb.setAttribute("aria-pressed",String(musicWanted));
mb.onclick=()=>{
  if(!CONFIG.music)return;
  if(audio.paused){
    audio.play().then(()=>setPlay(true)).catch(()=>setPlay(false));
  }else{
    audio.pause();
    setPlay(false);
  }
};
function pauseMusic(){
  audio.pause();
  setPlay(false);
}

// Keluar tab, ganti aplikasi, atau menutup halaman: musik mati dan tombol Off.
document.addEventListener("visibilitychange",()=>{
  if(document.hidden)pauseMusic();
});
window.addEventListener("pagehide",pauseMusic);
window.addEventListener("blur",pauseMusic);
// open
$("#open").onclick=()=>{
  void loadMotionLibraries();
  requestAnimationFrame(()=>initializeBotanicals($("#opening")));
  const cover=$("#cover");
  if(window.gsap&&!reducedMotion){
    cover.classList.add("curtain-out");
    gsap.timeline({onComplete:()=>{cover.style.display="none";}})
      .to(".cover-in",{scale:.96,opacity:0,duration:.75,ease:"power3.out"})
      .to(cover,{scale:1.08,opacity:0,duration:.72,ease:"power3.inOut"},"-.35");
  }else{cover.classList.add("gone")}
  document.body.classList.remove("locked");
  setTimeout(()=>{if(!window.gsap||reducedMotion)cover.style.display="none";},1300);
  if(CONFIG.music){
    audio.src=CONFIG.music;
    const shouldPlay=!musicPreferenceSet||musicWanted;
    mb.classList.remove("hidden");
    if(shouldPlay){
      audio.play().then(()=>setPlay(true)).catch(()=>setPlay(false));
    }else{
      setPlay(false);
    }
  }
};
// RSVP
$("#rsvpForm").addEventListener("submit",async e=>{
  e.preventDefault();const d=Object.fromEntries(new FormData(e.target)),st=$("#status");
  if(CONFIG.rsvp.sheetsUrl){try{await fetch(CONFIG.rsvp.sheetsUrl,{method:"POST",mode:"no-cors",body:JSON.stringify(d)});st.textContent="Terima kasih, konfirmasi Anda telah terkirim.";}catch{st.textContent="Pengiriman gagal. Coba lagi sebentar.";}}
  const msg=`Konfirmasi Kehadiran — ${CONFIG.bride.short} & ${CONFIG.groom.short}\nNama: ${d.nama}\nJumlah: ${d.jumlah} orang\nKehadiran: ${d.hadir}\nUcapan: ${d.ucapan||"-"}`;
  if(CONFIG.rsvp.whatsapp){window.open(`https://wa.me/${CONFIG.rsvp.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");st.textContent=st.textContent||"Melanjutkan ke WhatsApp…";}
  const success=$("#rsvpSuccess");
  if(success&&!reducedMotion){
    success.classList.add("show");
    if(window.gsap){
      gsap.fromTo(success,{y:18,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out"});
      gsap.to("#rsvpSuccess circle,#rsvpSuccess path",{strokeDashoffset:0,duration:.9,stagger:.12,ease:"power3.out"});
    }
  }
  e.target.reset();
});

/* ============ CINEMATIC PREMIUM MOTION ============ */
function loadMotionScript(src){
  return new Promise((resolve,reject)=>{
    const script=document.createElement("script");
    script.src=src;
    script.onload=resolve;
    script.onerror=()=>reject(new Error(`Unable to load motion library: ${src}`));
    document.head.appendChild(script);
  });
}
let motionLibrariesPromise;
function loadMotionLibraries(){
  if(!motionLibrariesPromise){
    motionLibrariesPromise=loadMotionScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
      .then(()=>loadMotionScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"))
      .then(()=>loadMotionScript("https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js"))
      .then(()=>{
        if(reducedMotion)return;
        gsap.registerPlugin(ScrollTrigger);
        if(window.Lenis&&!window.matchMedia("(max-width:760px)").matches){
          const lenis=new Lenis({lerp:.075,smoothWheel:true,wheelMultiplier:.82,touchMultiplier:.65});
          requestAnimationFrame(function scroll(){
            lenis.raf();
            requestAnimationFrame(scroll);
          });
          lenis.on("scroll",({scroll})=>{
            const progress=scroll/(document.body.scrollHeight-window.innerHeight);
            gsap.set("#pageProgress",{scaleX:progress});
          });
        }
      })
      .catch(error=>console.error("Motion libraries failed to load.",error));
  }
  return motionLibrariesPromise;
}
requestAnimationFrame(()=>requestAnimationFrame(()=>{void loadMotionLibraries();}));
