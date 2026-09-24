// Turma prototype: icons, shared chrome, mock interactions. Pages only hold content.
const P={
home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
cal:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>',
bag:'<path d="M4 7h16l-1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14.3c2.2.7 3.5 2.6 3.5 5.7"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
bell:'<path d="M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7M10 20a2 2 0 0 0 4 0"/>',
chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
heart:'<path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20z"/>',
pin:'<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
filter:'<path d="M4 6h9M19 6h1M4 12h3M13 12h7M4 18h11M21 18h-1"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
check:'<path d="m5 12 5 5 9-10"/>',
shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
share:'<path d="M12 15V3M7 8l5-5 5 5M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
more:'<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
back:'<path d="m15 5-7 7 7 7"/>',
x:'<path d="M6 6l12 12M18 6 6 18"/>',
like:'<path d="M7 11v9H4v-9zM7 11l4-8c1.7 0 2.5 1.2 2.2 3L13 9h6a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7"/>',
repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
send:'<path d="M22 3 11 14M22 3l-7 19-4-8-8-4z"/>',
star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
ticket:'<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
flame:'<path d="M12 22c4 0 7-2.8 7-7 0-3-2-5-3-7-1 1.5-2 2-3 2 0-3-1-6-4-8 0 4-4 6-4 12 0 4.2 3 8 7 8z"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
book:'<path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-7v16h7z"/>',
music:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
run:'<circle cx="14" cy="4.5" r="2"/><path d="m9 21 3-6-3-3 2-5 4 3 3 1M6 12l3-3"/>',
camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
code:'<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
fridge:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 10h12M9 5v2M9 13v3"/>',
bike:'<circle cx="6" cy="16" r="4"/><circle cx="18" cy="16" r="4"/><path d="M6 16l4-8h5l3 8M10 8 9 5H7"/>',
ball:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
heartfill:'<path fill="currentColor" d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20z"/>',
verified:'<path fill="currentColor" stroke="none" d="M12 2.5l2.4 1.8 3 .1.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .1L12 21.5l-2.4-1.8-3-.1-.9-2.9-2.4-1.8.9-2.9-.9-2.9 2.4-1.8.9-2.9 3-.1z"/><path stroke="#fff" stroke-width="2.2" d="m8.5 12 2.5 2.5 4.5-5"/>',
google:'<path fill="currentColor" stroke="none" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4z"/><path fill="currentColor" stroke="none" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="currentColor" stroke="none" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z"/><path fill="currentColor" stroke="none" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z"/>'
};
const ic=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
const icons=(r=document)=>r.querySelectorAll('i[data-i]').forEach(e=>{e.className=('ic '+e.className).trim();e.innerHTML=ic(e.dataset.i);e.removeAttribute('data-i');});
const VT='<i class="vt" data-i="verified" title="Verified BC student"></i>';

/* Sidebar + mobile tab bar destinations. Notifications and Settings are reached from the
   bell dropdown / gear icon next to the profile picture instead of their own nav slot —
   see the "Notifications" note in docs/style-guide.md. */
const NAV=[['home','Home','home','02-home.html'],['calendar','Calendar','cal','11-calendar.html'],['events','Events','ticket','04-events.html'],['market','Market','bag','06-marketplace.html'],['clubs','Clubs','users','05-clubs.html'],['profile','Profile','user','08-profile.html']];
const HUB=[['index.html','Overview'],['01-onboarding.html','Onboarding'],['02-home.html','Home'],['11-calendar.html','Calendar'],['04-events.html','Events'],['05-clubs.html','Clubs'],['06-marketplace.html','Market'],['07-messaging.html','Messages'],['08-profile.html','Profile'],['09-notifications-settings.html','Settings'],['10-flows.html','Flows']];
const cur=location.pathname.split('/').pop()||'index.html';

/* Notifications: each row links straight into the page it's about instead of a
   standalone alerts list. Shared by the desktop dropdown and the mobile sheet. */
const NOTIFS=[
  ['c2','users','Dana L. sent you a connection request','Connections · 5m ago','07-messaging.html#conns-m',1],
  ['c3','ticket','Amara K. is going to Study break: pancakes','RSVP to your event · 30m ago','04-events.html#ev-detail',1],
  ['c4','ticket','Acoustic Night starts at 7pm','Event reminder · 2h ago','04-events.html#ev-detail',1],
  ['c5','SK','Sarah: “See you at O’Neill at 5”','Market message · 10m ago','07-messaging.html',1],
  ['c3','RC','Running Club posted 3 updates','Club · Yesterday','05-clubs.html#club-page',0],
];
const notifList=id=>`<div class="between row" style="padding:12px 14px 4px"><b class="h2">Notifications</b><button class="link sm" data-sheet="${id}">Close</button></div><div class="list">${NOTIFS.map(([c,av,t,m,h,u])=>`<a class="item" href="${h}">${/^[a-z]+$/.test(av)?`<span class="av ${c}"><i data-i="${av}"></i></span>`:`<span class="av ${c}">${av}</span>`}<div class="grow"><b class="sm">${t}</b><span class="xs muted">${m}</span></div>${u?'<span class="unread"></span>':''}</a>`).join('')}</div><a class="link sm" href="09-notifications-settings.html" style="display:block;text-align:center;padding:10px">Notification settings</a>`;

const CREATE_ITEMS=[
  ['c2','chat','Post','Share an update with BC','02-home.html#compose'],
  ['c4','ticket','Event','Publish in under 60s','04-events.html#ev-create'],
  ['c5','bag','Listing','Photo first','06-marketplace.html#mkt-create'],
  ['c3','users','Club or group','Public club or private group','05-clubs.html#club-create'],
];
const createList=()=>CREATE_ITEMS.map(([c,i,t,m,h])=>`<a class="item card pad" href="${h}"><span class="av ${c}"><i data-i="${i}"></i></span><div class="grow"><b>${t}</b><div class="xs muted">${m}</div></div></a>`).join('');

function chrome(){
  document.body.insertAdjacentHTML('afterbegin',`<div class="hub"><a class="logo" href="index.html"><i>t</i>turma</a><nav>${HUB.map(([h,n])=>`<a href="${h}"${h===cur?' class="on"':''}>${n}</a>`).join('')}</nav></div>`);
  let firstPhone=true;
  document.querySelectorAll('.phone').forEach(p=>{
    p.insertAdjacentHTML('afterbegin','<div class="sb"><span>9:41</span><span>5G ▮▮▮</span></div>');
    if(p.dataset.nav==='none')return;
    const t=p.dataset.tab,l=(k,n,i,h)=>`<a href="${h}" class="${t===k?'on':''}"><i data-i="${i}"></i>${n}</a>`;
    const plusBtn=firstPhone?`<button type="button" class="plus" data-sheet="createSheet"><span><i data-i="plus"></i></span></button>`:`<a class="plus" href="#"><span><i data-i="plus"></i></span></a>`;
    p.insertAdjacentHTML('beforeend',`<nav class="tabbar">${l('home','Home','home','02-home.html')}${l('events','Events','ticket','04-events.html')}${plusBtn}${l('market','Market','bag','06-marketplace.html')}${l('clubs','Clubs','users','05-clubs.html')}</nav>`);
    if(firstPhone){
      p.insertAdjacentHTML('beforeend',`<div class="scrim" id="createSheet-scrim" hidden data-sheet="createSheet"></div><div class="sheet" id="createSheet" hidden><div class="between row"><div class="h2">Create</div><button class="link" data-sheet="createSheet">Close</button></div><div class="stack">${createList()}</div></div>`);
      firstPhone=false;
    }
  });
  const THREADS=[['SK','c5','Sarah K.','Mini-fridge · “Can meet at O’Neill?”','market',1],['RC','c3','Running Club','Coach: “Sat 9am Reservoir”','club',14],['MT','c4','Mike T.','Textbook · “See you at Walsh”','market',0],['PC','c2','Photography Club','Shoot signups open','club',0]];
  document.querySelectorAll('.desk:not([data-nav=none])').forEach(d=>{
    const t=d.dataset.tab;
    d.insertAdjacentHTML('afterbegin',`<aside class="snav"><a class="logo" href="index.html"><i>t</i><span>turma</span></a>${NAV.map(([k,n,i,h])=>`<a class="side-link${t===k?' on':''}" href="${h}"><i data-i="${i}"></i><span>${n}</span></a>`).join('')}<button type="button" class="btn" data-sheet="createMenu" style="margin-top:12px"><i data-i="plus"></i><span>Create</span></button></aside><div class="dnav"><label class="search"><i data-i="search"></i><input placeholder="Search events, clubs, listings" aria-label="Search"></label><span class="sp"></span><button type="button" class="iconbtn" data-sheet="notifPanel" aria-label="Notifications"><i data-i="bell"></i><span class="dot"></span></button><a class="iconbtn" href="09-notifications-settings.html" aria-label="Settings"><i data-i="gear"></i></a><a class="av" href="08-profile.html" aria-label="Your profile">JD</a></div><div class="ndrop" id="notifPanel" hidden>${notifList('notifPanel')}</div><div class="ndrop menu" id="createMenu" hidden><div class="h3" style="padding:12px 14px 2px">Create</div><div class="stack" style="padding:6px 8px 10px">${CREATE_ITEMS.map(([c,i,t,m,h])=>`<a class="side-link" href="${h}"><i data-i="${i}"></i><span>${t}</span></a>`).join('')}</div></div>`);
    if(t==='msg')return;
    d.insertAdjacentHTML('beforeend',`<div class="dock" data-fscope><div class="dock-panel" ${d.dataset.dock==='open'?'':'hidden'}><div class="dh"><b class="sp h2">Messages</b><button class="iconbtn plain" data-dock aria-label="Close"><i data-i="x"></i></button></div><div class="seg" data-tabs><button class="on" data-f="all">All</button><button data-f="market">Market</button><button data-f="club">Clubs</button></div><div class="list"><a class="item" href="07-messaging.html#conns-d-label" style="background:var(--gold-soft)"><span class="av c4"><i data-i="users"></i></span><div class="grow"><b>Connection requests · 2</b><span class="xs muted">Dana L. and Theo B.</span></div><i data-i="arrow"></i></a>${THREADS.map(([a,c,n,m,k,u])=>`<a class="item" data-k="${k}" href="07-messaging.html"><span class="av ${c}">${a}</span><div class="grow"><b>${n}</b><span class="xs muted">${m}</span></div>${u?'<span class="unread"></span>':''}</a>`).join('')}</div></div><button class="dock-pill" data-dock><i data-i="chat"></i>Messages<span class="badge gold">3</span></button></div>`);
  });
  icons();
}
document.addEventListener('DOMContentLoaded',chrome);

document.addEventListener('click',e=>{
  const g=(s)=>e.target.closest(s);
  let t;
  if(t=g('[data-tabs] button')){t.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));t.classList.add('on');}
  if((t=g('[data-chips] .chip'))&&!t.dataset.static)t.classList.toggle('on');
  if(t=g('[data-toast]')){const el=document.getElementById(t.dataset.toast);if(el){el.hidden=false;setTimeout(()=>el.hidden=true,2600);}}
  if(t=g('[data-sheet]')){document.querySelectorAll('#'+t.dataset.sheet+',#'+t.dataset.sheet+'-scrim').forEach(el=>el.hidden=!el.hidden);}
  if(t=g('.switch'))t.classList.toggle('on');
  if(t=g('.save'))t.classList.toggle('on');
  if(t=g('[data-like]')){t.classList.toggle('liked');const n=t.querySelector('b');if(n)n.textContent=(+n.textContent||0)+(t.classList.contains('liked')?1:-1);}
  if(t=g('button[data-dock]')){const p=t.closest('.dock').querySelector('.dock-panel');p.hidden=!p.hidden;}
  if(t=g('[data-f]')){const sc=t.closest('[data-fscope]');sc.querySelectorAll('[data-k]').forEach(e=>{if(e.closest('[data-fscope]')===sc)e.hidden=t.dataset.f!=='all'&&e.dataset.k!==t.dataset.f;});}
  if(t=g('[data-show]')){const box=document.getElementById(t.dataset.for);box.querySelectorAll('[data-state]').forEach(p=>{if(p.parentElement.closest('[id]')===box)p.hidden=p.dataset.state!==t.dataset.show;});}
});

/* Events: infinite feed (IntersectionObserver appends batches) */
(function(){
  const pool=[
    ['Acoustic Night at The Rat','Music Club','OCT','17','Fri 7–10pm · The Rat','g1','music','Free',42],
    ['Fall photo shoot signups','Photography Club','OCT','16','Thu 5pm · O’Neill steps','g4','camera','Free',12],
    ['Intro to Pandas workshop','Data Science Society','OCT','22','Wed 6pm · Fulton 310','g2','code','Free',58],
    ['Watch party vs. Wake Forest','Athletics Fan Club','OCT','18','Sat 8pm · Mods','g3','ball','$5',120],
    ['Service day at Brighton Food Pantry','Service Club','OCT','25','Sat 10am · Shuttle from Lower','g3','users','Free',31],
    ['Saturday long run','BC Running Club','OCT','18','Sat 9am · Reservoir','g5','run','Free',54],
    ['Study break: pancakes','Late Night Crew','OCT','15','Wed 9pm · O’Neill lobby','g5','book','Free',77],
    ['Involvement Fair','Student Programs','OCT','19','Sun 12pm · Quad','g1','spark','Free',640],
  ];
  const html=(p,n)=>`<article class="card evcard"><div class="flyer"><div class="art ${p[5]}"><i data-i="${p[6]}"></i></div><div class="top"><div class="date"><small>${p[2]}</small><b>${p[3]}</b></div><span class="price${p[7]==='Free'?' free':''}">${p[7]}</span></div></div>
  <div class="pad row"><div class="sp"><b>${p[0]}</b><div class="xs muted">${p[1]} · ${p[4]}</div><div class="going" style="margin-top:6px"><span class="faces"><span class="av s">JD</span><span class="av s c2">AK</span></span>${p[8]+n} going</div></div><button class="btn sm">I’m going</button></div></article>`;
  document.addEventListener('DOMContentLoaded',()=>document.querySelectorAll('[data-feed]').forEach(feed=>{
    const sent=feed.nextElementSibling,root=feed.closest('.pbody')||feed.closest('.col');let idx=0,batch=0,busy=false;
    const more=()=>{if(busy||batch>=6)return;busy=true;setTimeout(()=>{let h='';for(let k=0;k<3;k++)h+=html(pool[(idx+k)%pool.length],idx+k);idx+=3;feed.insertAdjacentHTML('beforeend',h);icons(feed);
      if(++batch>=6)sent.innerHTML='You’re all caught up.';busy=false;},500);};
    more();
    new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)more();}),{root,rootMargin:'300px'}).observe(sent);
  }));
})();
