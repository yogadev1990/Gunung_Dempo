const T=document.getElementById("navbar");window.addEventListener("scroll",()=>{T.classList.toggle("scrolled",window.scrollY>40)},{passive:!0});const v=document.getElementById("hamburger"),E=document.querySelector(".navbar");v.addEventListener("click",()=>{const t=E.classList.toggle("nav-mobile-open");v.setAttribute("aria-expanded",String(t)),v.setAttribute("aria-label",t?"Tutup menu":"Buka menu")});document.querySelectorAll(".nav-links a").forEach(t=>{t.addEventListener("click",()=>{E.classList.remove("nav-mobile-open"),v.setAttribute("aria-expanded","false"),v.setAttribute("aria-label","Buka menu")})});const $=document.querySelectorAll("section[id], footer[id]"),B=document.querySelectorAll(".nav-links a"),C=new IntersectionObserver(t=>{t.forEach(a=>{if(a.isIntersecting){const s=a.target.getAttribute("id");B.forEach(i=>{i.style.color="",i.getAttribute("href")===`#${s}`&&(i.style.color="var(--clr-emerald-700)")})}})},{threshold:.3});$.forEach(t=>C.observe(t));function w(t,a,s,i,b){let p=null;const h=String(s).includes(".");function m(n){p||(p=n);const e=n-p,r=Math.min(e/i,1),f=1-Math.pow(1-r,3),u=a+(s-a)*f;h?t.textContent=u.toFixed(1)+b:t.textContent=Math.round(u).toLocaleString("id-ID")+b,r<1&&requestAnimationFrame(m)}requestAnimationFrame(m)}const k=document.getElementById("hero");let y=!1;const W=new IntersectionObserver(t=>{if(t[0].isIntersecting&&!y){y=!0;const a=document.getElementById("stat-penduduk"),s=document.getElementById("stat-stunting"),i=document.getElementById("stat-komoditas");a&&setTimeout(()=>w(a,0,2428,1800,""),100),s&&setTimeout(()=>w(s,100,0,1200,"%"),300),i&&setTimeout(()=>w(i,0,2,800,""),500)}},{threshold:.3});k&&W.observe(k);const H=document.querySelectorAll(".reveal"),L=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("visible"),L.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});H.forEach(t=>L.observe(t));const M=document.querySelectorAll(".rw-progress-fill"),S=new IntersectionObserver(t=>{t.forEach(a=>{if(a.isIntersecting){const s=a.target,i=s.getAttribute("data-width");i&&setTimeout(()=>{s.style.width=i},200),S.unobserve(s)}})},{threshold:.5});M.forEach(t=>S.observe(t));(function(){const t={"RW 1":{color:"#b45309",fillColor:"#f59e0b",icon:"🏘️",penduduk:"~450 jiwa",luasHa:"~85 Ha",kepadatan:"Sedang",sanitasi:"88%",toga:"12 titik",catatan:"Wilayah timur berbatasan dengan lahan perkebunan teh."},"RW 2":{color:"#92400e",fillColor:"#d97706",icon:"🌿",penduduk:"~380 jiwa",luasHa:"~62 Ha",kepadatan:"Rendah",sanitasi:"90%",toga:"9 titik",catatan:"Area permukiman dekat aliran sungai kecil."},"RW 3":{color:"#065f46",fillColor:"#10b981",icon:"🏡",penduduk:"~520 jiwa",luasHa:"~78 Ha",kepadatan:"Sedang",sanitasi:"92%",toga:"15 titik",catatan:"Pusat kegiatan posyandu aktif, zero stunting terverifikasi."},"RW 4":{color:"#1e40af",fillColor:"#3b82f6",icon:"🌄",penduduk:"~610 jiwa",luasHa:"~310 Ha",kepadatan:"Sangat Rendah",sanitasi:"84%",toga:"7 titik",catatan:"Wilayah terluas, sebagian besar area perkebunan kopi & teh."},"RW 5":{color:"#7c3aed",fillColor:"#8b5cf6",icon:"🏔️",penduduk:"~280 jiwa",luasHa:"~225 Ha",kepadatan:"Sangat Rendah",sanitasi:"80%",toga:"5 titik",catatan:"Berbatasan langsung dengan kawasan hutan Gunung Dempo."},"RW 6":{color:"#be185d",fillColor:"#ec4899",icon:"🌲",penduduk:"~188 jiwa",luasHa:"~180 Ha",kepadatan:"Sangat Rendah",sanitasi:"82%",toga:"4 titik",catatan:"Wilayah selatan dengan potensi ekowisata lereng gunung."}},a={carto:{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CartoDB</a>',maxZoom:19},satellite:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"&copy; Esri, Maxar, Earthstar Geographics",maxZoom:19},osm:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',maxZoom:19}};function s(n){const e=t[n];return e?(parseInt(e.sanitasi),`
      <div class="rw-popup-inner">
        <div class="popup-header" style="background: linear-gradient(135deg, ${e.color}, ${e.fillColor});">
          <div class="popup-rw-label">Rukun Warga · Kelurahan Gunung Dempo</div>
          <div class="popup-rw-name">${e.icon} ${n}</div>
        </div>
        <div class="popup-body">
          <div class="popup-stat-grid">
            <div class="popup-stat">
              <div class="popup-stat-val">👥 ${e.penduduk}</div>
              <div class="popup-stat-lbl">Penduduk</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val">📐 ${e.luasHa}</div>
              <div class="popup-stat-lbl">Luas Wilayah</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val">📊 ${e.kepadatan}</div>
              <div class="popup-stat-lbl">Kepadatan</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val">🌿 ${e.toga}</div>
              <div class="popup-stat-lbl">Tanaman TOGA</div>
            </div>
          </div>
          <div class="popup-bar-wrap">
            <div class="popup-bar-label">
              <span>Sanitasi Layak</span>
              <span style="color: ${e.color}; font-weight: 800;">${e.sanitasi}</span>
            </div>
            <div class="popup-bar-track">
              <div class="popup-bar-fill" style="width: ${e.sanitasi}; background: linear-gradient(90deg, ${e.color}, ${e.fillColor});"></div>
            </div>
          </div>
          <p style="font-size:0.68rem;color:#6b7280;margin:0.6rem 0 0;line-height:1.5;">
            ℹ️ ${e.catatan}
          </p>
        </div>
      </div>
    `):`<div style="padding:1rem"><strong>${n}</strong></div>`}function i(){const n=document.getElementById("legend-items");n&&(n.innerHTML=Object.entries(t).map(([e,r])=>`
      <div class="peta-legend-item" data-rw="${e}" title="Klik untuk zoom ke ${e}">
        <span class="legend-dot" style="background: ${r.fillColor};"></span>
        <span>${r.icon} ${e}</span>
      </div>
    `).join(""))}function b(){const n=document.getElementById("peta-loading");if(!document.getElementById("leaflet-map"))return;const r=window.L.map("leaflet-map",{center:[-4.038,103.17],zoom:12,zoomControl:!0,scrollWheelZoom:!0,attributionControl:!0});let f=window.L.tileLayer(a.carto.url,{attribution:a.carto.attribution,maxZoom:a.carto.maxZoom,subdomains:"abcd"}).addTo(r),u=null,g=null;fetch("/kelurahan-gunung-dempo.geojson").then(c=>c.json()).then(c=>{u=window.L.geoJSON(c,{style:d=>{const o=d?.properties?.Name??"",l=t[o]??{};return{color:l.color??"#059669",weight:2.5,opacity:1,fillColor:l.fillColor??"#10b981",fillOpacity:.35}},onEachFeature:(d,o)=>{const l=d?.properties?.Name??"",I=t[l];o.bindPopup(s(l),{className:"rw-popup",maxWidth:280,autoPan:!0}),o.on("mouseover",()=>{o.setStyle({fillOpacity:.65,weight:3.5}),o.bringToFront()}),o.on("mouseout",()=>{o!==g&&o.setStyle({fillOpacity:.35,weight:2.5,color:I?.color??"#059669"})}),o.on("click",()=>{if(g&&g!==o){const x=g.feature?.properties?.Name??"",O=t[x];g.setStyle({fillOpacity:.35,weight:2.5,color:O?.color??"#059669"})}g=o,o.setStyle({fillOpacity:.7,weight:4})})}}).addTo(r),r.fitBounds(u.getBounds(),{padding:[30,30]}),document.querySelectorAll(".peta-legend-item[data-rw]").forEach(d=>{d.addEventListener("click",()=>{const o=d.getAttribute("data-rw")??"";u.eachLayer(l=>{l.feature?.properties?.Name===o&&(r.fitBounds(l.getBounds(),{padding:[40,40]}),l.openPopup())})})}),n&&setTimeout(()=>n.classList.add("hidden"),300)}).catch(c=>{console.error("GeoJSON load error:",c),n&&(n.innerHTML='<p style="color:#dc2626;font-size:0.85rem;">⚠️ Gagal memuat data peta.</p>')}),document.querySelectorAll(".basemap-btn").forEach(c=>{c.addEventListener("click",()=>{const d=c.getAttribute("data-layer"),o=a[d];o&&(r.removeLayer(f),f=window.L.tileLayer(o.url,{attribution:o.attribution,maxZoom:o.maxZoom,subdomains:d==="carto"?"abcd":"abc"}).addTo(r),u&&u.bringToFront(),document.querySelectorAll(".basemap-btn").forEach(l=>{l.classList.remove("active"),l.setAttribute("aria-pressed","false")}),c.classList.add("active"),c.setAttribute("aria-pressed","true"))})})}i();function p(){typeof window.L<"u"?b():setTimeout(p,80)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p();const h=document.querySelectorAll("#peta .reveal"),m=new IntersectionObserver(n=>{n.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),m.unobserve(e.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});h.forEach(n=>m.observe(n))})();const A=document.getElementById("scrollTop");window.addEventListener("scroll",()=>{A.classList.toggle("visible",window.scrollY>400)},{passive:!0});A.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
