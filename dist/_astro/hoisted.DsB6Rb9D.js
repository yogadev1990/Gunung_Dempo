const V=document.getElementById("navbar");window.addEventListener("scroll",()=>{V.classList.toggle("scrolled",window.scrollY>40)},{passive:!0});const A=document.getElementById("hamburger"),P=document.querySelector(".navbar");A.addEventListener("click",()=>{const o=P.classList.toggle("nav-mobile-open");A.setAttribute("aria-expanded",String(o)),A.setAttribute("aria-label",o?"Tutup menu":"Buka menu")});document.querySelectorAll(".nav-links a").forEach(o=>{o.addEventListener("click",()=>{P.classList.remove("nav-mobile-open"),A.setAttribute("aria-expanded","false"),A.setAttribute("aria-label","Buka menu")})});const Z=document.querySelectorAll("section[id], footer[id]"),X=document.querySelectorAll(".nav-links a"),Q=new IntersectionObserver(o=>{o.forEach(u=>{if(u.isIntersecting){const n=u.target.getAttribute("id");X.forEach(r=>{r.style.color="",r.getAttribute("href")===`#${n}`&&(r.style.color="var(--clr-emerald-700)")})}})},{threshold:.3});Z.forEach(o=>Q.observe(o));function H(o,u,n,r,_){let p=null;const B=String(n).includes(".");function $(f){p||(p=f);const c=f-p,x=Math.min(c/r,1),E=1-Math.pow(1-x,3),k=u+(n-u)*E;B?o.textContent=k.toFixed(1)+_:o.textContent=Math.round(k).toLocaleString("id-ID")+_,x<1&&requestAnimationFrame($)}requestAnimationFrame($)}const N=document.getElementById("hero");let G=!1;const ee=new IntersectionObserver(o=>{if(o[0].isIntersecting&&!G){G=!0;const u=document.getElementById("stat-penduduk"),n=document.getElementById("stat-stunting"),r=document.getElementById("stat-komoditas");u&&setTimeout(()=>H(u,0,2428,1800,""),100),n&&setTimeout(()=>H(n,100,0,1200,"%"),300),r&&setTimeout(()=>H(r,0,2,800,""),500)}},{threshold:.3});N&&ee.observe(N);(function(){const o="https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnTCV_rOINifo-eMc4SrWQ4ihhSv8as4Zolw8_dv-S9tFT1Xbz5g4r7Pp0h0YDIGDLiJBxUNnj6V1dFFpDjXgDKvpOR56WUBYIf--6blufGgCUeyAXkVs80vjtEPPGgBxebHY0_6bgKGhWVEr4LFAxcX0igCDzl0O7_xs-2QaA6yRpGT3bixoH1sI5Nt9xHlPopxhA76fHeoljx2cMpvknGNea21r5yZA5CwLo3mvX8LYrOnvjapqZJJdmPviYToU9b34RiUPpiDKOcDbfk_0EWbEGJAVQ&lib=MDLAdFgRGOJVJ01oTM4DbJHdi3ZE4dG0b";function u(n){const r=document.getElementById("kes-stats-grid"),_=document.getElementById("kes-api-status");if(!r)return;let p=0,B=0,$=0,f=0,c=0,x=0;n.forEach(I=>{p++,B+=Number(I.anggota_keluarga)||0,I.kondisi_jamban==="Baik/Layak"&&$++,I.keluhan_nyeri_gigi==="Ya"&&f++,I.tindakan_medis_gigi==="Pernah ke Dokter Gigi"&&c++,I.tindakan_medis_gigi==="Membeli Obat Saja"&&x++});const E=p?Math.round($/p*100):0,k=p?Math.round(f/p*100):0,y=p?Math.round(c/p*100):0,M=p?Math.round(x/p*100):0;_&&(_.innerHTML=`🟢 Live · ${p} KK`),r.innerHTML=`
      <div class="kes-stat-card">
        <div class="kes-stat-icon">🏠</div>
        <div class="kes-stat-val" style="color:#059669">${p}</div>
        <div class="kes-stat-lbl">KK Tersurvei</div>
        <span class="kes-stat-badge ks-green">Data Lapangan</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">👥</div>
        <div class="kes-stat-val" style="color:#1d4ed8">${B}</div>
        <div class="kes-stat-lbl">Jiwa Terdata</div>
        <span class="kes-stat-badge ks-blue">Akumulatif</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">💧</div>
        <div class="kes-stat-val" style="color:${E>=90?"#059669":"#f97316"}">${E}%</div>
        <div class="kes-stat-lbl">Sanitasi Layak</div>
        <span class="kes-stat-badge ${E>=90?"ks-green":"ks-yellow"}">${E>=90?"✅ Sangat Baik":"⚠️ Perlu Perhatian"}</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">🦷</div>
        <div class="kes-stat-val" style="color:#dc2626">${k}%</div>
        <div class="kes-stat-lbl">Keluhan Nyeri Gigi</div>
        <span class="kes-stat-badge ks-red">⚠️ Ironi Klinis</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">🏥</div>
        <div class="kes-stat-val" style="color:${y>=30?"#059669":"#dc2626"}">${y}%</div>
        <div class="kes-stat-lbl">Akses ke Dokter</div>
        <span class="kes-stat-badge ${y>=30?"ks-green":"ks-red"}">${y>=30?"✅ Cukup":"🆘 Kritis"}</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">💊</div>
        <div class="kes-stat-val" style="color:#f97316">${M}%</div>
        <div class="kes-stat-lbl">Obat Warung</div>
        <span class="kes-stat-badge ks-yellow">💊 Swamedikasi</span>
      </div>
    `}fetch(o).then(n=>n.json()).then(n=>{const r=Array.isArray(n)?n:n.survei??[];u(r)}).catch(()=>{const n=document.getElementById("kes-api-status"),r=document.getElementById("kes-stats-grid");n&&(n.innerHTML="🟡 Offline"),r&&(r.innerHTML='<p style="padding:1rem;color:#9ca3af;font-size:.8rem;text-align:center;">Data tidak tersedia saat ini.</p>')})})();const te=document.querySelectorAll(".reveal"),C=new IntersectionObserver(o=>{o.forEach(u=>{u.isIntersecting&&(u.target.classList.add("visible"),C.unobserve(u.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});te.forEach(o=>C.observe(o));const ae=document.querySelectorAll(".rw-progress-fill"),J=new IntersectionObserver(o=>{o.forEach(u=>{if(u.isIntersecting){const n=u.target,r=n.getAttribute("data-width");r&&setTimeout(()=>{n.style.width=r},200),J.unobserve(n)}})},{threshold:.5});ae.forEach(o=>J.observe(o));(function(){const o="https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnTCV_rOINifo-eMc4SrWQ4ihhSv8as4Zolw8_dv-S9tFT1Xbz5g4r7Pp0h0YDIGDLiJBxUNnj6V1dFFpDjXgDKvpOR56WUBYIf--6blufGgCUeyAXkVs80vjtEPPGgBxebHY0_6bgKGhWVEr4LFAxcX0igCDzl0O7_xs-2QaA6yRpGT3bixoH1sI5Nt9xHlPopxhA76fHeoljx2cMpvknGNea21r5yZA5CwLo3mvX8LYrOnvjapqZJJdmPviYToU9b34RiUPpiDKOcDbfk_0EWbEGJAVQ&lib=MDLAdFgRGOJVJ01oTM4DbJHdi3ZE4dG0b",u={"RW 3":[{rw:"3",url_foto:"https://placehold.co/400x280/10b981/ffffff?text=📋+Survei+Sanitasi",keterangan:"Survei kondisi jamban warga RW 3",kegiatan:"Survei Sanitasi",tanggal:"2026-07-01"},{rw:"3",url_foto:"https://placehold.co/400x280/059669/ffffff?text=🦷+Penyuluhan+Gigi",keterangan:"Edukasi kesehatan gigi & mulut door-to-door",kegiatan:"Edukasi Kesgi",tanggal:"2026-07-02"},{rw:"3",url_foto:"https://placehold.co/400x280/0284c7/ffffff?text=👶+Posyandu",keterangan:"Pendampingan posyandu balita bersama kader",kegiatan:"Posyandu",tanggal:"2026-07-03"}]};let n={};const r={"RW 1":{color:"#92400e",fillBase:"#f59e0b",icon:"🏘️",luasHa:"~85 Ha"},"RW 2":{color:"#92400e",fillBase:"#d97706",icon:"🌿",luasHa:"~62 Ha"},"RW 3":{color:"#065f46",fillBase:"#10b981",icon:"🏡",luasHa:"~78 Ha"},"RW 4":{color:"#1e40af",fillBase:"#3b82f6",icon:"🌄",luasHa:"~310 Ha"},"RW 5":{color:"#7c3aed",fillBase:"#8b5cf6",icon:"🏔️",luasHa:"~225 Ha"},"RW 6":{color:"#be185d",fillBase:"#ec4899",icon:"🌲",luasHa:"~180 Ha"}},_={carto:{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",sub:"abcd",attr:'&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CartoDB</a>'},satellite:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",sub:"abc",attr:"&copy; Esri World Imagery"}};function p(t){if(!t)return"";let e="";const s=t.match(/[?&]id=([^&?\s]+)/);if(s&&(e=s[1]),!e){const i=t.match(/\/file\/d\/([^/?]+)/);i&&(e=i[1])}if(!e){const i=t.match(/\/d\/([^/?]+)/);i&&(e=i[1])}return e?`https://drive.google.com/thumbnail?id=${e}&sz=w800`:t}function B(t){if(!t)return"";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return t}}function $(t){const e=n[t]??[];if(e.length===0)return`
        <div class="popup-gallery-wrap">
          <div class="popup-gallery-label">📸 Dokumentasi Kegiatan</div>
          <p class="popup-gallery-empty">Belum ada foto. Tim KKNT sedang mendokumentasikan kegiatan di ${t}.</p>
        </div>`;const s=e.slice(0,4),i=e.length>4?e.length-4:0,a=s.map((m,g)=>`
      <div class="popup-gallery-thumb" data-galeri-rw="${t}" data-galeri-idx="${g}" title="${m.keterangan}" role="button" tabindex="0">
        <img src="${m.url_foto}" alt="${m.keterangan}" loading="lazy" onerror="this.src='https://placehold.co/62x52/f3f4f6/9ca3af?text=📷'">
        <div class="thumb-overlay">🔍</div>
      </div>`).join("");return`
      <div class="popup-gallery-wrap">
        <div class="popup-gallery-label">
          📸 Dokumentasi Kegiatan
          <span>${e.length} foto</span>
        </div>
        <div class="popup-gallery-strip">
          ${a}
          ${i>0?`<div class="popup-gallery-thumb" style="display:flex;align-items:center;justify-content:center;background:#f3f4f6;font-size:.7rem;font-weight:800;color:#6b7280;cursor:pointer;" data-galeri-rw="${t}" data-galeri-idx="4">+${i}</div>`:""}
        </div>
      </div>`}let f=[],c=0;function x(t,e){f=t,c=e;const s=document.getElementById("lb-overlay");s.style.display="flex",document.body.style.overflow="hidden",k(),y()}function E(){const t=document.getElementById("lb-overlay");t.style.display="none",document.body.style.overflow=""}function k(){const t=f[c];if(!t)return;const e=document.getElementById("lb-img"),s=document.getElementById("lb-img-loader"),i=document.getElementById("lb-caption"),a=document.getElementById("lb-date"),m=document.getElementById("lb-activity"),g=document.getElementById("lb-rw-badge"),b=document.getElementById("lb-counter"),T=document.getElementById("lb-prev"),L=document.getElementById("lb-next");e.classList.add("loading"),s.classList.remove("hidden"),e.onload=()=>{e.classList.remove("loading"),s.classList.add("hidden")},e.onerror=()=>{e.src="https://placehold.co/800x500/f3f4f6/9ca3af?text=Foto+tidak+tersedia",s.classList.add("hidden")},e.src=t.url_foto,e.alt=t.keterangan,i.textContent=t.keterangan,a.textContent=t.tanggal?`📅 ${t.tanggal}`:"",m.textContent=t.kegiatan?`🏷️ ${t.kegiatan}`:"",g.textContent=`RW ${t.rw}`,b.textContent=`${c+1} / ${f.length}`,T.disabled=c===0,L.disabled=c===f.length-1,document.querySelectorAll("#lb-strip .lb-thumb").forEach((l,v)=>{l.classList.toggle("active",v===c)});const d=document.querySelector("#lb-strip .lb-thumb.active");d&&d.scrollIntoView({behavior:"smooth",inline:"center"})}function y(){const t=document.getElementById("lb-strip");t.innerHTML=f.map((e,s)=>`
      <div class="lb-thumb ${s===c?"active":""}" data-idx="${s}" role="listitem">
        <img src="${e.url_foto}" alt="${e.keterangan}" loading="lazy" onerror="this.src='https://placehold.co/56x56/222/555?text=📷'">
      </div>`).join(""),t.querySelectorAll(".lb-thumb").forEach(e=>{e.addEventListener("click",()=>{c=Number(e.getAttribute("data-idx")),k(),y()})})}function M(){document.getElementById("lb-close")?.addEventListener("click",E),document.getElementById("lb-prev")?.addEventListener("click",()=>{c>0&&(c--,k(),y())}),document.getElementById("lb-next")?.addEventListener("click",()=>{c<f.length-1&&(c++,k(),y())}),document.getElementById("lb-overlay")?.addEventListener("click",t=>{t.target.id==="lb-overlay"&&E()}),document.addEventListener("keydown",t=>{const e=document.getElementById("lb-overlay");!e||e.style.display==="none"||(t.key==="Escape"&&E(),t.key==="ArrowLeft"&&c>0&&(c--,k(),y()),t.key==="ArrowRight"&&c<f.length-1&&(c++,k(),y()))})}document.addEventListener("click",t=>{const e=t.target.closest("[data-galeri-rw]");if(!e)return;const s=e.getAttribute("data-galeri-rw")??"",i=Number(e.getAttribute("data-galeri-idx")??0),a=n[s]??[];a.length>0&&x(a,Math.min(i,a.length-1))});function I(t){const e={};t.forEach(s=>{const i=`RW ${s.rw}`;e[i]||(e[i]={total_kk:0,total_jiwa:0,jamban_layak:0,nyeri_gigi:0,ke_dokter:0,obat_warung:0,sampah_bakar:0,balita_lansia:0});const a=e[i];a.total_kk+=1,a.total_jiwa+=Number(s.anggota_keluarga)||0,s.kondisi_jamban==="Baik/Layak"&&(a.jamban_layak+=1),s.keluhan_nyeri_gigi==="Ya"&&(a.nyeri_gigi+=1),s.tindakan_medis_gigi==="Pernah ke Dokter Gigi"&&(a.ke_dokter+=1),s.tindakan_medis_gigi==="Membeli Obat Saja"&&(a.obat_warung+=1),s.pengelolaan_sampah==="Dibakar"&&(a.sampah_bakar+=1),(s.kelompok_rentan==="Bayi/Balita"||s.kelompok_rentan==="Lansia")&&(a.balita_lansia+=1)});for(const s in e){const i=e[s],a=i.total_kk;i.persen_sanitasi=a?Math.round(i.jamban_layak/a*100):0,i.persen_nyeri=a?Math.round(i.nyeri_gigi/a*100):0,i.persen_dokter=a?Math.round(i.ke_dokter/a*100):0,i.persen_obat_warung=a?Math.round(i.obat_warung/a*100):0,i.persen_sampah_bakar=a?Math.round(i.sampah_bakar/a*100):0}return e}function O(t,e){return e==="sanitasi"?t>=90?"#059669":t>=70?"#10b981":t>=50?"#fbbf24":"#ef4444":t>=70?"#dc2626":t>=50?"#f97316":t>=30?"#fbbf24":"#22c55e"}function F(t,e,s){const i=r[t]??{color:"#059669",fillBase:"#10b981",icon:"🏘️"};if(!e)return`
        <div>
          <div class="popup-header" style="background: linear-gradient(135deg, ${i.color}, ${i.fillBase});">
            <div class="popup-rw-label">Kelurahan Gunung Dempo · KKNT 103</div>
            <div class="popup-rw-name">${i.icon} ${t}</div>
            <div class="popup-data-tag">⏳ Belum ada data survei</div>
          </div>
          <div class="popup-body">
            <p class="popup-no-data">Data survei untuk ${t} belum tersedia. Tim KKNT sedang melakukan pengumpulan data di lapangan.</p>
          </div>
        </div>`;const a=O(e.persen_sanitasi,"sanitasi");O(e.persen_obat_warung,"medis");const m=e.persen_nyeri>=40?`⚠️ <strong>Ironi klinis:</strong> ${e.persen_nyeri}% warga mengeluh nyeri gigi, namun ${e.persen_obat_warung}% hanya membeli obat warung.`:`✅ ${e.persen_nyeri}% warga mengalami keluhan nyeri gigi.`;return`
      <div>
        <div class="popup-header" style="background: linear-gradient(135deg, ${i.color}, ${i.fillBase});">
          <div class="popup-rw-label">Kelurahan Gunung Dempo · KKNT 103</div>
          <div class="popup-rw-name">${i.icon} ${t}</div>
          <div class="popup-data-tag">📊 ${e.total_kk} KK · ${e.total_jiwa} Jiwa Terdata</div>
        </div>
        <div class="popup-body">
          <div class="popup-stat-grid">
            <div class="popup-stat">
              <div class="popup-stat-val">🏠 ${e.total_kk} KK</div>
              <div class="popup-stat-lbl">KK Tersurvei</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val">👥 ${e.total_jiwa}</div>
              <div class="popup-stat-lbl">Jiwa Terdata</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val" style="color:${a}">💧 ${e.persen_sanitasi}%</div>
              <div class="popup-stat-lbl">Sanitasi Layak</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val" style="color:${e.balita_lansia>0?"#f97316":"#059669"}">
                👶 ${e.balita_lansia} KK
              </div>
              <div class="popup-stat-lbl">Balita/Lansia</div>
            </div>
          </div>

          <div class="popup-bar-wrap">
            <div class="popup-bar-row">
              <span>🚿 Sanitasi Layak</span>
              <span style="color:${a};font-weight:800">${e.persen_sanitasi}%</span>
            </div>
            <div class="popup-bar-track">
              <div class="popup-bar-fill" style="width:${e.persen_sanitasi}%;background:${a};"></div>
            </div>

            <div class="popup-bar-row">
              <span>🦷 Ke Dokter Gigi</span>
              <span style="color:${e.persen_dokter>=50?"#059669":"#ef4444"};font-weight:800">${e.persen_dokter}%</span>
            </div>
            <div class="popup-bar-track">
              <div class="popup-bar-fill" style="width:${e.persen_dokter}%;background:${e.persen_dokter>=50?"#059669":"#ef4444"};"></div>
            </div>

            <div class="popup-bar-row">
              <span>🔥 Sampah Dibakar</span>
              <span style="color:${e.persen_sampah_bakar>=50?"#f97316":"#059669"};font-weight:800">${e.persen_sampah_bakar}%</span>
            </div>
            <div class="popup-bar-track">
              <div class="popup-bar-fill" style="width:${e.persen_sampah_bakar}%;background:${e.persen_sampah_bakar>=50?"#f97316":"#6ee7b7"};"></div>
            </div>
          </div>

          <div class="popup-insight">${m}</div>
          ${$(t)}
        </div>
      </div>`}function z(){const t=document.getElementById("legend-items");t&&(t.innerHTML=Object.entries(r).map(([e,s])=>`
      <div class="peta-legend-item" data-rw="${e}" title="Klik untuk zoom ke ${e}">
        <span class="legend-dot" style="background:${s.fillBase};"></span>
        <span>${s.icon} ${e}</span>
      </div>`).join(""))}function R(t){const e=document.getElementById("peta-loading");if(document.getElementById("api-status-text"),!document.getElementById("leaflet-map"))return;let i="sanitasi";const a=window.L.map("leaflet-map",{center:[-4.038,103.17],zoom:12,zoomControl:!0,scrollWheelZoom:!0});let m=window.L.tileLayer(_.satellite.url,{attribution:_.satellite.attr,maxZoom:19,subdomains:_.satellite.sub}).addTo(a),g=null,b=null;function T(L,d){`RW ${L?.properties?.Name?.replace("RW ","")??""}`.trim();const w=`RW ${(L?.properties?.Name??"").replace("RW ","").trim()}`,h=t[w],U=r[w]??{color:"#6b7280"};let W;if(!h)W="#d1d5db";else{const Y=d==="sanitasi"?h.persen_sanitasi:h.persen_obat_warung;W=O(Y,d)}return{color:U.color,weight:2.5,opacity:1,fillColor:W,fillOpacity:.65}}fetch("/kelurahan-gunung-dempo.geojson").then(L=>L.json()).then(L=>{g=window.L.geoJSON(L,{style:d=>T(d,i),onEachFeature:(d,l)=>{const h=`RW ${(d?.properties?.Name??"").replace("RW ","").trim()}`;l.bindPopup(()=>F(h,t[h]),{className:"rw-popup",maxWidth:300,autoPan:!0}),l.on("mouseover",()=>{l.setStyle({fillOpacity:.85,weight:4}),l.bringToFront()}),l.on("mouseout",()=>{l!==b&&l.setStyle({fillOpacity:.65,weight:2.5})}),l.on("click",()=>{b&&b!==l&&b.setStyle({fillOpacity:.65,weight:2.5}),b=l,l.setStyle({fillOpacity:.85,weight:4})})}}).addTo(a),a.fitBounds(g.getBounds(),{padding:[30,30]}),e&&setTimeout(()=>e.classList.add("hidden"),300),document.querySelectorAll(".peta-legend-item[data-rw]").forEach(d=>{d.addEventListener("click",()=>{const l=d.getAttribute("data-rw")??"";g.eachLayer(v=>{`RW ${(v.feature?.properties?.Name??"").replace("RW ","").trim()}`===l&&(a.fitBounds(v.getBounds(),{padding:[40,40]}),v.openPopup())})})}),document.querySelectorAll(".layer-btn").forEach(d=>{d.addEventListener("click",()=>{const l=d.getAttribute("data-mode");i=l,g.eachLayer(h=>{h.setStyle(T(h.feature,l))}),b&&b.setStyle({fillOpacity:.85,weight:4});const v=document.getElementById("choro-title");v&&(v.textContent=l==="sanitasi"?"% Sanitasi Layak":"% Warga Obat Warung");const w=document.getElementById("choro-scale");w&&(l==="sanitasi"?w.innerHTML='<div class="choro-bar" style="background:linear-gradient(90deg,#ef4444,#fbbf24,#10b981);"></div>':w.innerHTML='<div class="choro-bar" style="background:linear-gradient(90deg,#22c55e,#fbbf24,#ef4444);"></div>'),document.querySelectorAll(".layer-btn").forEach(h=>{h.classList.remove("active"),h.setAttribute("aria-pressed","false")}),d.classList.add("active"),d.setAttribute("aria-pressed","true")})}),document.querySelectorAll(".basemap-btn").forEach(d=>{d.addEventListener("click",()=>{const l=d.getAttribute("data-layer"),v=_[l];v&&(a.removeLayer(m),m=window.L.tileLayer(v.url,{attribution:v.attr,maxZoom:19,subdomains:v.sub}).addTo(a),g&&g.bringToFront(),document.querySelectorAll(".basemap-btn").forEach(w=>{w.classList.remove("active"),w.setAttribute("aria-pressed","false")}),d.classList.add("active"),d.setAttribute("aria-pressed","true"))})})}).catch(L=>{console.error("GeoJSON error:",L),e&&(e.innerHTML='<p style="color:#dc2626">⚠️ Gagal memuat peta.</p>')})}z();const S=document.getElementById("api-status-text"),j=document.getElementById("loading-text");function D(){if(typeof window.L>"u"){setTimeout(D,80);return}M(),fetch(o).then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}).then(t=>{let e,s=[];Array.isArray(t)?e=t:(e=t.survei??[],s=t.galeri??[]),s.length>0?s.forEach(a=>{const m=String(a.rw).trim(),g=`RW ${m}`,b={...a,rw:m,url_foto:p(String(a.url_foto??"")),tanggal:B(String(a.tanggal??""))};n[g]||(n[g]=[]),n[g].push(b)}):n={...u};const i=I(e);if(S){const a=Object.keys(i).length,m=Object.values(i).reduce((g,b)=>g+b.total_kk,0);S.innerHTML=`🟢 Live · ${m} KK dari ${a} RW`}R(i)}).catch(t=>{console.warn("API fetch gagal, menggunakan data statis:",t),S&&(S.innerHTML="🟡 Offline · Data Statis"),j&&(j.textContent="Memuat peta (mode offline)…"),R({})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",D):D();const K=document.querySelectorAll("#peta .reveal");new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.12,rootMargin:"0px 0px -40px 0px"}).observe?(()=>{const t=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});K.forEach(e=>t.observe(e))})():K.forEach(t=>t.classList.add("visible"))})();const q=document.getElementById("scrollTop");window.addEventListener("scroll",()=>{q.classList.toggle("visible",window.scrollY>400)},{passive:!0});q.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
