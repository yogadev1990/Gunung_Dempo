const de=document.getElementById("navbar");window.addEventListener("scroll",()=>{de.classList.toggle("scrolled",window.scrollY>40)},{passive:!0});const Z=document.getElementById("hamburger"),oe=document.querySelector(".navbar");Z.addEventListener("click",()=>{const p=oe.classList.toggle("nav-mobile-open");Z.setAttribute("aria-expanded",String(p)),Z.setAttribute("aria-label",p?"Tutup menu":"Buka menu")});document.querySelectorAll(".nav-links a").forEach(p=>{p.addEventListener("click",()=>{oe.classList.remove("nav-mobile-open"),Z.setAttribute("aria-expanded","false"),Z.setAttribute("aria-label","Buka menu")})});const ue=document.querySelectorAll("section[id], footer[id]"),ge=document.querySelectorAll(".nav-links a"),pe=new IntersectionObserver(p=>{p.forEach(E=>{if(E.isIntersecting){const w=E.target.getAttribute("id");ge.forEach($=>{$.style.color="",$.getAttribute("href")===`#${w}`&&($.style.color="var(--clr-emerald-700)")})}})},{threshold:.3});ue.forEach(p=>pe.observe(p));function ee(p,E,w,$,q){let C=null;const _=String(w).includes(".");function f(j){C||(C=j);const A=j-C,O=Math.min(A/$,1),B=1-Math.pow(1-O,3),k=E+(w-E)*B;_?p.textContent=k.toFixed(1)+q:p.textContent=Math.round(k).toLocaleString("id-ID")+q,O<1&&requestAnimationFrame(f)}requestAnimationFrame(f)}const se=document.getElementById("hero");let ie=!1;const me=new IntersectionObserver(p=>{if(p[0].isIntersecting&&!ie){ie=!0;const E=document.getElementById("stat-penduduk"),w=document.getElementById("stat-stunting"),$=document.getElementById("stat-komoditas");E&&setTimeout(()=>ee(E,0,2428,1800,""),100),w&&setTimeout(()=>ee(w,100,0,1200,"%"),300),$&&setTimeout(()=>ee($,0,2,800,""),500)}},{threshold:.3});se&&me.observe(se);const F=document.getElementById("video-thumbnail"),Y=document.getElementById("yt-iframe");function le(){!F||!Y||(Y.src=Y.dataset.src??"",F.style.opacity="0",F.style.pointerEvents="none",setTimeout(()=>{F.style.display="none"},400),Y.style.opacity="1")}F?.addEventListener("click",le);F?.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),le())});const ve=document.querySelectorAll(".reveal"),fe=new IntersectionObserver(p=>{p.forEach(E=>{E.isIntersecting&&E.target.classList.add("visible")})},{threshold:.12});ve.forEach(p=>fe.observe(p));(function(){const p="https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnQjZyOnFpb-cxOFHqzjoPq_m6f733zhOBiy5EW-5XySDs5NMUo4sSXUTgiDdUPyeP6doL9xmREJvuTJ4mD5AVpDqwIq94KT71syJchqgXv45vhYO_LJ3K55uW91vyV5Q5-Okzng24UyXDz-IZcc82WMgVq91t5EXTBepv1bjvlV2jg4Lc3iaTbTAzbbjXFB688ysePGnE8-ncAHUq8ZdqBV8sKiyMqDvFzMP05fIJXsaq9B_XpdTBNknCCMj1_DNoIXBrfO3vRaM7bA79XoW-8Ia08b3A&lib=MDLAdFgRGOJVJ01oTM4DbJHdi3ZE4dG0b",E={"RW 3":[{rw:"3",url_foto:"https://placehold.co/400x280/10b981/ffffff?text=📋+Survei+Sanitasi",keterangan:"Survei kondisi jamban warga RW 3",kegiatan:"Survei Sanitasi",tanggal:"2026-07-01"},{rw:"3",url_foto:"https://placehold.co/400x280/059669/ffffff?text=🦷+Penyuluhan+Gigi",keterangan:"Edukasi kesehatan gigi & mulut door-to-door",kegiatan:"Edukasi Kesgi",tanggal:"2026-07-02"},{rw:"3",url_foto:"https://placehold.co/400x280/0284c7/ffffff?text=👶+Posyandu",keterangan:"Pendampingan posyandu balita bersama kader",kegiatan:"Posyandu",tanggal:"2026-07-03"}]};let w={},$={};const q={"RW 1":{color:"#92400e",fillBase:"#f59e0b",icon:"🏘️",luasHa:"±85 Ha",rwName:"Afd. Pabrik"},"RW 2":{color:"#92400e",fillBase:"#d97706",icon:"🌿",luasHa:"±62 Ha",rwName:"Afd. 1 / Talang Darat"},"RW 3":{color:"#065f46",fillBase:"#10b981",icon:"🏡",luasHa:"±78 Ha",rwName:"Afd. 2 / Talang Beduk"},"RW 4":{color:"#1e40af",fillBase:"#3b82f6",icon:"🌄",luasHa:"±310 Ha",rwName:"Afd. 3 / Muara Perikan"},"RW 5":{color:"#7c3aed",fillBase:"#8b5cf6",icon:"🏔️",luasHa:"±225 Ha",rwName:"Afd. 4 / Muara Abadi"},"RW 6":{color:"#be185d",fillBase:"#ec4899",icon:"🌲",luasHa:"±180 Ha",rwName:"Afd. 5 / Janang"}},C={Jahe:"🫚",Kunyit:"🟡",Lengkuas:"🌱",Kencur:"🌿",Temulawak:"🌾",Sirih:"🍃",Seledri:"🥬"},_={"1zgN7jYjf4TlX87decR1sNdKAifaDSqA9":"/images/galeri/posyandu_kader.jpg","12X6-h_FEgGQx5P4IlCv2c2lLrQm5NsyR":"/images/galeri/posyandu_anak.jpg","1KqHvoTxVBG1g8Zb0nocjCfzOMSvBZP3r":"/images/galeri/modul_toga.jpg","1rnnOkHVtnBn6teA1aXELsdU9FIKANSSW":"/images/galeri/olahraga.jpg","11-uWFl8J9eXZzAaQureuND2c1Ypqpg69":"/images/galeri/gotong_royong.jpg"},f={carto:{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",sub:"abcd",attr:'&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CartoDB</a>'},satellite:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",sub:"abc",attr:"&copy; Esri World Imagery"}};function j(t){if(!t)return"";let e="";const n=t.match(/[?&]id=([^&?\s]+)/);if(n&&(e=n[1]),!e){const a=t.match(/\/file\/d\/([^/?]+)/);a&&(e=a[1])}if(!e){const a=t.match(/\/d\/([^/?]+)/);a&&(e=a[1])}return e?_[e]?_[e]:`https://drive.google.com/thumbnail?id=${e}&sz=w800`:t}function A(t){if(!t)return"";try{return new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return t}}function O(t,e="DS"){const a=(w[t]??[]).filter(v=>!v.tipe||v.tipe===e),i=e==="TOGA"?"🌿 Dokumentasi TOGA":"📸 Dokumentasi Desa Sehat";if(a.length===0){const v=e==="TOGA"?`Belum ada foto kegiatan TOGA di ${t}.`:`Belum ada foto. Tim KKNT sedang mendokumentasikan kegiatan di ${t}.`;return`
        <div class="popup-gallery-wrap">
          <div class="popup-gallery-label">${i}</div>
          <p class="popup-gallery-empty">${v}</p>
        </div>`}const S=a.slice(0,2),I=a.length>2?a.length-2:0,m=S.map((v,T)=>`
      <div class="popup-gallery-thumb" data-galeri-rw="${t}" data-galeri-idx="${T}" data-galeri-tipe="${e}" title="${v.keterangan}" role="button" tabindex="0">
        <div class="thumb-img-wrap">
          <div class="thumb-shimmer">📷</div>
          <img src="${v.url_foto}" alt="${v.keterangan}" loading="lazy"
            onload="this.previousElementSibling.style.display='none';this.style.opacity='1'"
            onerror="this.previousElementSibling.textContent='📷';this.remove()"
            style="opacity:0;transition:opacity .3s;"
          >
        </div>
        <div class="thumb-overlay">🔍</div>
      </div>`).join("");return`
      <div class="popup-gallery-wrap">
        <div class="popup-gallery-label">
          ${i}
          <span>${a.length} foto</span>
        </div>
        <div class="popup-gallery-strip">
          ${m}
          ${I>0?`<div class="popup-gallery-thumb popup-gallery-more" data-galeri-rw="${t}" data-galeri-idx="2" data-galeri-tipe="${e}">+${I}</div>`:""}
        </div>
      </div>`}let B=[],k=0;function K(t,e){B=t,k=e;const n=document.getElementById("lb-overlay");n.style.display="flex",document.body.style.overflow="hidden",s(),o()}function u(){const t=document.getElementById("lb-overlay");t.style.display="none",document.body.style.overflow=""}function s(){const t=B[k];if(!t)return;const e=document.getElementById("lb-img"),n=document.getElementById("lb-img-loader"),a=document.getElementById("lb-caption"),i=document.getElementById("lb-date"),S=document.getElementById("lb-activity"),I=document.getElementById("lb-rw-badge"),m=document.getElementById("lb-counter"),v=document.getElementById("lb-prev"),T=document.getElementById("lb-next");e.classList.add("loading"),n.classList.remove("hidden"),e.onload=()=>{e.classList.remove("loading"),n.classList.add("hidden")},e.onerror=()=>{e.src="https://placehold.co/800x500/f3f4f6/9ca3af?text=Foto+tidak+tersedia",n.classList.add("hidden")},e.src=t.url_foto,e.alt=t.keterangan,a.textContent=t.keterangan,i.textContent=t.tanggal?`📅 ${t.tanggal}`:"",S.textContent=t.kegiatan?`🏷️ ${t.kegiatan}`:"",I.textContent=`RW ${t.rw}`,m.textContent=`${k+1} / ${B.length}`,v.disabled=k===0,T.disabled=k===B.length-1,document.querySelectorAll("#lb-strip .lb-thumb").forEach((y,M)=>{y.classList.toggle("active",M===k)});const b=document.querySelector("#lb-strip .lb-thumb.active");b&&b.scrollIntoView({behavior:"smooth",inline:"center"})}function o(){const t=document.getElementById("lb-strip");t.innerHTML=B.map((e,n)=>`
      <div class="lb-thumb ${n===k?"active":""}" data-idx="${n}" role="listitem">
        <img src="${e.url_foto}" alt="${e.keterangan}" loading="lazy" onerror="this.src='https://placehold.co/56x56/222/555?text=📷'">
      </div>`).join(""),t.querySelectorAll(".lb-thumb").forEach(e=>{e.addEventListener("click",()=>{k=Number(e.getAttribute("data-idx")),s(),o()})})}function c(){document.getElementById("lb-close")?.addEventListener("click",u),document.getElementById("lb-prev")?.addEventListener("click",()=>{k>0&&(k--,s(),o())}),document.getElementById("lb-next")?.addEventListener("click",()=>{k<B.length-1&&(k++,s(),o())}),document.getElementById("lb-overlay")?.addEventListener("click",t=>{t.target.id==="lb-overlay"&&u()}),document.addEventListener("keydown",t=>{const e=document.getElementById("lb-overlay");!e||e.style.display==="none"||(t.key==="Escape"&&u(),t.key==="ArrowLeft"&&k>0&&(k--,s(),o()),t.key==="ArrowRight"&&k<B.length-1&&(k++,s(),o()))})}document.addEventListener("click",t=>{const e=t.target.closest("[data-galeri-rw]");if(!e)return;const n=e.getAttribute("data-galeri-rw")??"",a=Number(e.getAttribute("data-galeri-idx")??0),i=(e.getAttribute("data-galeri-tipe")||"").toUpperCase(),S=w[n]??[],I=i?S.filter(m=>!m.tipe||m.tipe===i):S;I.length>0&&K(I,Math.min(a,I.length-1))});function l(t){const e={};t.forEach(n=>{const a=`RW ${n.rw}`;e[a]||(e[a]={total_kk:0,total_jiwa:0,jamban_layak:0,nyeri_gigi:0,ke_dokter:0,obat_warung:0,sampah_bakar:0,balita_lansia:0});const i=e[a];i.total_kk+=1,i.total_jiwa+=Number(n.anggota_keluarga)||0,n.kondisi_jamban==="Baik/Layak"&&(i.jamban_layak+=1),n.keluhan_nyeri_gigi==="Ya"&&(i.nyeri_gigi+=1),n.tindakan_medis_gigi==="Pernah ke Dokter Gigi"&&(i.ke_dokter+=1),n.tindakan_medis_gigi==="Membeli Obat Saja"&&(i.obat_warung+=1),n.pengelolaan_sampah==="Dibakar"&&(i.sampah_bakar+=1),(n.kelompok_rentan==="Bayi/Balita"||n.kelompok_rentan==="Lansia")&&(i.balita_lansia+=1)});for(const n in e){const a=e[n],i=a.total_kk;a.persen_sanitasi=i?Math.round(a.jamban_layak/i*100):0,a.persen_nyeri=i?Math.round(a.nyeri_gigi/i*100):0,a.persen_dokter=i?Math.round(a.ke_dokter/i*100):0,a.persen_obat_warung=i?Math.round(a.obat_warung/i*100):0,a.persen_sampah_bakar=i?Math.round(a.sampah_bakar/i*100):0}return e}function d(t,e){return e==="sanitasi"?t>=90?"#059669":t>=70?"#10b981":t>=50?"#fbbf24":"#ef4444":e==="toga"?t>=80?"#15803d":t>=50?"#22c55e":t>=25?"#86efac":"#dcfce7":t>=70?"#dc2626":t>=50?"#f97316":t>=30?"#fbbf24":"#22c55e"}function r(t){const e=q[t]??{icon:"🌿",luasHa:"-",rwName:t},n=$[t]??[],a=n.reduce((m,v)=>m+v.jumlah,0),i=n.length?Math.max(...n.map(m=>m.jumlah)):1,S=n.length?n.sort((m,v)=>v.jumlah-m.jumlah).map(m=>{const v=Math.round(m.jumlah/i*100);return`
              <div style="margin-bottom:.45rem;">
                <div style="display:flex;justify-content:space-between;font-size:.65rem;color:#374151;margin-bottom:.2rem;">
                  <span>${C[m.nama_tanaman]||"🌿"} ${m.nama_tanaman}</span>
                  <strong style="color:#15803d">${m.jumlah} btg</strong>
                </div>
                <div style="height:7px;background:#dcfce7;border-radius:999px;overflow:hidden;">
                  <div style="height:100%;width:${v}%;background:linear-gradient(90deg,#16a34a,#22c55e);border-radius:999px;"></div>
                </div>
              </div>`}).join(""):`<p style="font-size:.7rem;color:#9ca3af;font-style:italic;">Data tanaman belum tersedia untuk ${t}.</p>`,I=O(t,"TOGA");return`
      <div>
        <div class="popup-header" style="background: linear-gradient(135deg, #15803d, #22c55e);">
          <div class="popup-rw-label">TOGA · Kelurahan Gunung Dempo</div>
          <div class="popup-rw-name">${e.icon} ${t}</div>
          <div class="popup-data-tag">🌿 ${n.length} Jenis · ${a} Tanaman</div>
        </div>
        <div class="popup-body">
          <div class="popup-stat-grid">
            <div class="popup-stat">
              <div class="popup-stat-val" style="color:#15803d">🗺️ ${e.luasHa}</div>
              <div class="popup-stat-lbl">Luas Wilayah</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val" style="color:#15803d">🌿 ${n.length}</div>
              <div class="popup-stat-lbl">Jenis TOGA</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val" style="color:#15803d">🪴 ${a}</div>
              <div class="popup-stat-lbl">Total Tanaman</div>
            </div>
            <div class="popup-stat">
              <div class="popup-stat-val" style="color:#15803d">📍 ${e.rwName.split("/")[0].trim()}</div>
              <div class="popup-stat-lbl">Area / Afdeling</div>
            </div>
          </div>
          <div style="margin:.5rem 0 .3rem;font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;">Sebaran Tanaman</div>
          ${S}
          ${I}
        </div>
      </div>`}function D(t,e,n){if(n==="toga")return r(t);const a=q[t]??{color:"#059669",fillBase:"#10b981",icon:"🏘️"};if(!e)return`
        <div>
          <div class="popup-header" style="background: linear-gradient(135deg, ${a.color}, ${a.fillBase});">
            <div class="popup-rw-label">Kelurahan Gunung Dempo · KKNT 103</div>
            <div class="popup-rw-name">${a.icon} ${t}</div>
            <div class="popup-data-tag">⏳ Belum ada data survei</div>
          </div>
          <div class="popup-body">
            <p class="popup-no-data">Data survei untuk ${t} belum tersedia. Tim KKNT sedang melakukan pengumpulan data di lapangan.</p>
          </div>
        </div>`;const i=d(e.persen_sanitasi,"sanitasi");d(e.persen_obat_warung,"medis");const S=e.persen_nyeri>=40?`⚠️ <strong>Catatan:</strong> ${e.persen_nyeri}% warga mengeluh nyeri gigi, namun ${e.persen_obat_warung}% hanya membeli obat warung.`:`✅ ${e.persen_nyeri}% warga mengalami keluhan nyeri gigi.`;return`
      <div>
        <div class="popup-header" style="background: linear-gradient(135deg, ${a.color}, ${a.fillBase});">
          <div class="popup-rw-label">Kelurahan Gunung Dempo · KKNT 103</div>
          <div class="popup-rw-name">${a.icon} ${t}</div>
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
              <div class="popup-stat-val" style="color:${i}">💧 ${e.persen_sanitasi}%</div>
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
              <span style="color:${i};font-weight:800">${e.persen_sanitasi}%</span>
            </div>
            <div class="popup-bar-track">
              <div class="popup-bar-fill" style="width:${e.persen_sanitasi}%;background:${i};"></div>
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

          <div class="popup-insight">${S}</div>
          ${O(t,"DS")}
        </div>
      </div>`}function g(){const t=document.getElementById("legend-items");t&&(t.innerHTML=Object.entries(q).map(([e,n])=>`
      <div class="peta-legend-item" data-rw="${e}" title="Klik untuk zoom ke ${e}">
        <span class="legend-dot" style="background:${n.fillBase};"></span>
        <span>${n.icon} ${e}</span>
      </div>`).join(""))}function h(t){const e=document.getElementById("peta-loading");if(document.getElementById("api-status-text"),!document.getElementById("leaflet-map"))return;let a="sanitasi";const i=window.L.map("leaflet-map",{center:[-4.038,103.17],zoom:12,zoomControl:!0,scrollWheelZoom:!0});let S=window.L.tileLayer(f.satellite.url,{attribution:f.satellite.attr,maxZoom:19,subdomains:f.satellite.sub}).addTo(i),I=null,m=null;function v(T,b){const P=`RW ${(T?.properties?.Name??"").replace("RW ","").trim()}`,N=t[P],H=q[P]??{color:"#6b7280"};let x;if(b==="toga"){const G=$[P]??[],Q=G.reduce((z,J)=>z+J.jumlah,0),U=Object.values($).flat().reduce((z,J)=>z+J.jumlah,0),V=U?Math.round(Q/U*100*5):0;x=G.length>0?d(Math.min(V,100),"toga"):"#d1d5db"}else if(!N)x="#d1d5db";else{const G=b==="sanitasi"?N.persen_sanitasi:N.persen_obat_warung;x=d(G,b)}return{color:H.color,weight:2.5,opacity:1,fillColor:x,fillOpacity:.65}}fetch("/kelurahan-gunung-dempo.geojson").then(T=>T.json()).then(T=>{I=window.L.geoJSON(T,{style:b=>v(b,a),onEachFeature:(b,y)=>{const N=`RW ${(b?.properties?.Name??"").replace("RW ","").trim()}`;y.bindPopup(()=>a==="toga"?r(N):D(N,t[N],a),{className:"rw-popup",maxWidth:300,autoPan:!0}),y.on("mouseover",()=>{y.setStyle({fillOpacity:.85,weight:4}),y.bringToFront()}),y.on("mouseout",()=>{y!==m&&y.setStyle({fillOpacity:.65,weight:2.5})}),y.on("click",()=>{m&&m!==y&&m.setStyle({fillOpacity:.65,weight:2.5}),m=y,y.setStyle({fillOpacity:.85,weight:4})})}}).addTo(i),i.fitBounds(I.getBounds(),{padding:[30,30]}),e&&setTimeout(()=>e.classList.add("hidden"),300),document.querySelectorAll(".peta-legend-item[data-rw]").forEach(b=>{b.addEventListener("click",()=>{const y=b.getAttribute("data-rw")??"";I.eachLayer(M=>{`RW ${(M.feature?.properties?.Name??"").replace("RW ","").trim()}`===y&&(i.fitBounds(M.getBounds(),{padding:[40,40]}),M.openPopup())})})}),document.querySelectorAll(".layer-btn").forEach(b=>{b.addEventListener("click",()=>{const y=b.getAttribute("data-mode");a=y,I.eachLayer(N=>{N.setStyle(v(N.feature,y))}),m&&m.setStyle({fillOpacity:.85,weight:4});const M=document.getElementById("choro-title"),P=document.getElementById("choro-scale");y==="toga"?(M&&(M.textContent="🌿 Kepadatan TOGA"),P&&(P.innerHTML='<div class="choro-bar" style="background:linear-gradient(90deg,#dcfce7,#86efac,#15803d);"></div>')):y==="sanitasi"?(M&&(M.textContent="% Sanitasi Layak"),P&&(P.innerHTML='<div class="choro-bar" style="background:linear-gradient(90deg,#ef4444,#fbbf24,#10b981);"></div>')):(M&&(M.textContent="% Desa Sehat"),P&&(P.innerHTML='<div class="choro-bar" style="background:linear-gradient(90deg,#22c55e,#fbbf24,#ef4444);"></div>')),document.querySelectorAll(".layer-btn").forEach(N=>{N.classList.remove("active"),N.setAttribute("aria-pressed","false")}),b.classList.add("active"),b.setAttribute("aria-pressed","true")})}),document.querySelectorAll(".basemap-btn").forEach(b=>{b.addEventListener("click",()=>{const y=b.getAttribute("data-layer"),M=f[y];M&&(i.removeLayer(S),S=window.L.tileLayer(M.url,{attribution:M.attr,maxZoom:19,subdomains:M.sub}).addTo(i),I&&I.bringToFront(),document.querySelectorAll(".basemap-btn").forEach(P=>{P.classList.remove("active"),P.setAttribute("aria-pressed","false")}),b.classList.add("active"),b.setAttribute("aria-pressed","true"))})})}).catch(T=>{console.error("GeoJSON error:",T),e&&(e.innerHTML='<p style="color:#dc2626">⚠️ Gagal memuat peta.</p>')})}g();const L=document.getElementById("api-status-text"),R=document.getElementById("loading-text");function W(){if(typeof window.L>"u"){setTimeout(W,80);return}c();function t(e,n=!1){fetch(e).then(a=>{if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.json()}).then(a=>{let i,S=[],I=[];Array.isArray(a)?i=a:(i=a.survei??[],S=a.galeri??[],I=a.toga??[]),S.length>0?S.forEach(v=>{const T=String(v.rw).trim(),b=`RW ${T}`,y={...v,rw:T,tipe:String(v.tipe??"").toUpperCase()||"DS",url_foto:j(String(v.url_foto??"")),tanggal:A(String(v.tanggal??""))};w[b]||(w[b]=[]),w[b].push(y)}):w={...E},I.forEach(v=>{const T=`RW ${v.rw}`;$[T]||($[T]=[]),$[T].push(v)});const m=l(i);if(L){const v=Object.keys(m).length,T=Object.values(m).reduce((b,y)=>b+y.total_kk,0);L.innerHTML=n?"🟢 Live · Local Mode":`🟢 Live · ${T} KK dari ${v} RW`}h(m)}).catch(a=>{console.warn(`Fetch gagal untuk ${e}:`,a),n?(L&&(L.innerHTML="🟡 Offline · Data Statis"),R&&(R.textContent="Memuat peta (mode offline)…"),h({})):(L&&(L.innerHTML="⏳ Menghubungkan ke Lokal..."),t("/data-kesehatan-fallback.json",!0))})}t(p)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",W):W();const X=document.querySelectorAll("#peta .reveal");new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.12,rootMargin:"0px 0px -40px 0px"}).observe?(()=>{const t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});X.forEach(e=>t.observe(e))})():X.forEach(t=>t.classList.add("visible"))})();document.addEventListener("DOMContentLoaded",()=>{const p=document.querySelectorAll(".reveal"),E=new IntersectionObserver(_=>{_.forEach(f=>{f.isIntersecting&&(f.target.classList.add("visible"),E.unobserve(f.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});p.forEach(_=>E.observe(_));const w=document.querySelectorAll(".rw-progress-fill"),$=new IntersectionObserver(_=>{_.forEach(f=>{if(f.isIntersecting){const j=f.target,A=j.getAttribute("data-width");A&&setTimeout(()=>{j.style.width=A},300),$.unobserve(j)}})},{threshold:.5});w.forEach(_=>$.observe(_));const q=document.querySelectorAll(".ring-animate"),C=new IntersectionObserver(_=>{_.forEach(f=>{if(f.isIntersecting){const j=f.target,A=j.getAttribute("data-offset");A&&setTimeout(()=>{j.style.strokeDashoffset=A},400),C.unobserve(j)}})},{threshold:.5});q.forEach(_=>C.observe(_))});(function(){const p="https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnQjZyOnFpb-cxOFHqzjoPq_m6f733zhOBiy5EW-5XySDs5NMUo4sSXUTgiDdUPyeP6doL9xmREJvuTJ4mD5AVpDqwIq94KT71syJchqgXv45vhYO_LJ3K55uW91vyV5Q5-Okzng24UyXDz-IZcc82WMgVq91t5EXTBepv1bjvlV2jg4Lc3iaTbTAzbbjXFB688ysePGnE8-ncAHUq8ZdqBV8sKiyMqDvFzMP05fIJXsaq9B_XpdTBNknCCMj1_DNoIXBrfO3vRaM7bA79XoW-8Ia08b3A&lib=MDLAdFgRGOJVJ01oTM4DbJHdi3ZE4dG0b",E={"1zgN7jYjf4TlX87decR1sNdKAifaDSqA9":"/images/galeri/posyandu_kader.jpg","12X6-h_FEgGQx5P4IlCv2c2lLrQm5NsyR":"/images/galeri/posyandu_anak.jpg","1KqHvoTxVBG1g8Zb0nocjCfzOMSvBZP3r":"/images/galeri/modul_toga.jpg","1rnnOkHVtnBn6teA1aXELsdU9FIKANSSW":"/images/galeri/olahraga.jpg","11-uWFl8J9eXZzAaQureuND2c1Ypqpg69":"/images/galeri/gotong_royong.jpg"};function w(u){if(!u)return"";let s="";const o=u.match(/[?&]id=([^&]+)/);if(o&&(s=o[1]),!s){const c=u.match(/\/d\/([^/?]+)/);c&&(s=c[1])}return s?E[s]?E[s]:`https://lh3.googleusercontent.com/d/${s}`:u}function $(u){try{return new Date(u).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch{return u}}function q(u){const s=document.getElementById("kes-stats-grid"),o=document.getElementById("kes-api-status");if(!s)return;let c=0,l=0,d=0,r=0,D=0,g=0;u.forEach(W=>{c++,l+=Number(W.anggota_keluarga)||0,W.kondisi_jamban==="Baik/Layak"&&d++,W.keluhan_nyeri_gigi==="Ya"&&r++,W.tindakan_medis_gigi==="Pernah ke Dokter Gigi"&&D++,W.kelompok_rentan&&W.kelompok_rentan!=="Tidak Ada"&&g++});const h=c?Math.round(d/c*100):0,L=c?Math.round(r/c*100):0,R=c?Math.round(D/c*100):0;o&&(o.innerHTML=`🟢 Live · ${c} KK Terdata`),s.innerHTML=`
      <div class="kes-stat-card">
        <div class="kes-stat-icon">🏠</div>
        <div class="kes-stat-val" style="color:#059669">${c}</div>
        <div class="kes-stat-lbl">KK Tersurvei</div>
        <span class="kes-stat-badge ks-green">Data Lapangan</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">👥</div>
        <div class="kes-stat-val" style="color:#1d4ed8">${l}</div>
        <div class="kes-stat-lbl">Jiwa Terdata</div>
        <span class="kes-stat-badge ks-blue">Akumulatif</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">💧</div>
        <div class="kes-stat-val" style="color:${h>=90?"#059669":"#f97316"}">${h}%</div>
        <div class="kes-stat-lbl">Sanitasi Layak</div>
        <span class="kes-stat-badge ${h>=90?"ks-green":"ks-yellow"}">${h>=90?"✅ Sangat Baik":"⚠️ Perlu Perhatian"}</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">🦷</div>
        <div class="kes-stat-val" style="color:#dc2626">${L}%</div>
        <div class="kes-stat-lbl">Keluhan Nyeri Gigi</div>
        <span class="kes-stat-badge ks-red">1 Bulan Terakhir</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">🏥</div>
        <div class="kes-stat-val" style="color:${R>=30?"#059669":"#dc2626"}">${R}%</div>
        <div class="kes-stat-lbl">Akses ke Dokter</div>
        <span class="kes-stat-badge ${R>=30?"ks-green":"ks-red"}">${R>=30?"✅ Cukup":"🆘 Kritis"}</span>
      </div>
      <div class="kes-stat-card">
        <div class="kes-stat-icon">⚠️</div>
        <div class="kes-stat-val" style="color:#7c3aed">${g}</div>
        <div class="kes-stat-lbl">Kelompok Rentan</div>
        <span class="kes-stat-badge ks-purple">Balita & Lansia</span>
      </div>
    `}function C(u){const s=document.getElementById("prevalensi-grid");if(!s||!u.length){s&&(s.innerHTML='<p style="color:#9ca3af;font-size:0.85rem;grid-column:1/-1;">Data prevalensi belum tersedia.</p>');return}const o=Math.max(...u.map(r=>r.persen_karies||0)),c=Math.max(...u.map(r=>r.persen_stunting||0));s.innerHTML=u.map(r=>{const D=Math.round((r.persen_karies||0)*100),g=Math.round((r.persen_stunting||0)*100),h=o?Math.round((r.persen_karies||0)/o*100):0,L=c?Math.round((r.persen_stunting||0)/c*100):0;return`
        <div class="prev-card">
          <div class="prev-card-header">
            <span class="prev-rw">${r.rw}</span>
            <span class="prev-total">${r.total_balita} balita</span>
          </div>
          <div class="prev-bar-wrap">
            <div class="prev-bar-label">
              <span>🦷 Karies</span><strong style="color:#dc2626">${D}%</strong>
            </div>
            <div class="prev-bar-track">
              <div class="prev-bar-fill prev-bar-karies" style="width:0%" data-w="${h}%"></div>
            </div>
          </div>
          <div class="prev-bar-wrap">
            <div class="prev-bar-label">
              <span>📉 Stunting</span><strong style="color:#f97316">${g}%</strong>
            </div>
            <div class="prev-bar-track">
              <div class="prev-bar-fill prev-bar-stunting" style="width:0%" data-w="${L}%"></div>
            </div>
          </div>
          <div class="prev-card-footer">
            Karies: ${r.karies??0} anak · Stunting: ${r.stunting??0} anak
          </div>
        </div>
      `}).join("");const l=s.querySelectorAll(".prev-bar-fill"),d=new IntersectionObserver(r=>{r.forEach(D=>{if(D.isIntersecting){const g=D.target;setTimeout(()=>{g.style.width=g.dataset.w||"0%"},400),d.unobserve(g)}})},{threshold:.3});l.forEach(r=>d.observe(r))}let _=[],f=[];function j(u){_=u,A("all"),document.querySelectorAll(".gtab").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".gtab").forEach(o=>{o.classList.remove("active"),o.setAttribute("aria-selected","false")}),s.classList.add("active"),s.setAttribute("aria-selected","true"),A(s.dataset.filter||"all")})})}function A(u){const s=document.getElementById("galeri-grid"),o=document.getElementById("galeri-empty");if(!s)return;if(f=u==="all"?_:_.filter(l=>l.tipe===u),!f.length){s.innerHTML="",o&&(o.hidden=!1);return}o&&(o.hidden=!0);const c=l=>l<10?"0"+l:""+l;s.innerHTML=f.map((l,d)=>`
      <div class="galeri-card" data-idx="${d}" role="button" tabindex="0" aria-label="Lihat foto: ${l.keterangan}">
        <div class="galeri-thumb">
          <img
            src="${w(l.url_foto)}"
            alt="${l.keterangan}"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'galeri-img-err\\'>📷</div>'"
          />
          <span class="galeri-tipe-badge ${l.tipe==="DS"?"badge-ds":"badge-toga"}">${l.tipe==="DS"?"🏥 Desa Sehat":"🌿 TOGA"}</span>
        </div>
        <div class="galeri-info">
          <p class="galeri-kegiatan">${l.kegiatan||"-"}</p>
          <p class="galeri-ket">${l.keterangan||""}</p>
          <div class="galeri-meta">
            <span class="galeri-rw-badge">RW ${c(l.rw)}</span>
            <span class="galeri-date">${$(l.tanggal)}</span>
          </div>
        </div>
      </div>
    `).join(""),s.querySelectorAll(".galeri-card").forEach(l=>{const d=()=>B(Number(l.dataset.idx));l.addEventListener("click",d),l.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&d()})})}function O(u,s){if(!u||!u.length)return;let o=0,c=0,l=0,d=0,r=0,D=0;u.forEach(H=>{o++,H.perilaku_sikat_gigi==="2x Sehari"&&c++,H.kondisi_jamban==="Baik/Layak"&&l++,H.pengelolaan_sampah==="Dibuang ke TPS"&&d++,H.tindakan_medis_gigi==="Pernah ke Dokter Gigi"?r++:H.tindakan_medis_gigi==="Membeli Obat Saja"&&D++});const g=o?Math.round(c/o*100):80,h=o?Math.round(l/o*100):90,L=o?Math.round(d/o*100):82,R=r+D,W=R?Math.round(r/R*100):62,X=R?Math.round(D/R*100):38,t=document.getElementById("gigi-pic-row"),e=document.getElementById("gigi-pic-label"),n=document.getElementById("gigi-pct-text"),a=document.getElementById("gigi-progress-fill"),i=Math.round(g/100*10);t&&(t.setAttribute("aria-label",`${i} dari 10 warga sudah sikat gigi 2 kali sehari`),t.innerHTML=Array.from({length:10}).map((H,x)=>x<i?'<span class="pictogram-item" title="Sikat gigi rutin">😁</span>':'<span class="pictogram-item" style="opacity:0.25;" title="Belum rutin">😶</span>').join("")),e&&(e.innerHTML=`<strong>${i} dari 10</strong> warga sudah sikat gigi 2× sehari (pagi &amp; malam).`),n&&(n.textContent=`${g}%`),a&&(a.setAttribute("data-width",`${g}%`),a.style.width=`${g}%`);const S=document.getElementById("sanitasi-ring-fill"),I=document.getElementById("sanitasi-pct-val"),m=document.getElementById("sanitasi-pic-row");if(S){const x=226.2-226.2*h/100;S.setAttribute("stroke-dashoffset",String(x)),S.setAttribute("data-offset",String(x))}I&&(I.textContent=`${h}%`);const v=Math.round(h/100*10);m&&(m.setAttribute("aria-label",`${v} dari 10 rumah memiliki jamban sehat`),m.innerHTML=Array.from({length:10}).map((H,x)=>x<v?'<span class="pictogram-item">🏠</span>':'<span class="pictogram-item" style="opacity:0.25;">🏚️</span>').join(""));const T=document.getElementById("sampah-ring-fill"),b=document.getElementById("sampah-pct-val"),y=document.getElementById("sampah-pic-row");if(T){const x=226.2-226.2*L/100;T.setAttribute("stroke-dashoffset",String(x)),T.setAttribute("data-offset",String(x))}b&&(b.textContent=`${L}%`);const M=Math.round(L/100*10);y&&(y.setAttribute("aria-label",`${M} dari 10 rumah mengelola sampah dengan benar`),y.innerHTML=Array.from({length:10}).map((H,x)=>x<M?'<span class="pictogram-item">🗑️</span>':'<span class="pictogram-item" style="opacity:0.25;">🗑️</span>').join(""));const P=document.getElementById("medis-pct-puskesmas"),N=document.getElementById("medis-pct-warung");if(P&&(P.textContent=`${W}%`),N&&(N.textContent=`${X}%`),s&&s.length){let H=0,x=0;s.forEach(J=>{H+=Number(J.total_balita)||0,x+=Number(J.stunting)||0});const G=H?Math.round((H-x)/H*100):100,Q=document.getElementById("kia-pct-val"),U=document.getElementById("kia-text-desc"),V=document.getElementById("kia-children-row"),z=document.getElementById("kia-stunting-badge");if(Q&&(Q.textContent=`${G}%`),U&&(U.innerHTML=`
          <strong>Balita Tumbuh Optimal</strong>
          <span>Sebanyak ${H-x} dari ${H} balita di seluruh RW tumbuh optimal &amp; bebas stunting.</span>
        `),V){V.setAttribute("aria-label",`Prevalensi balita tumbuh optimal ${G}%`);const J=Math.round(G/100*8),te=["👶","👧","👦"];V.innerHTML=Array.from({length:8}).map((ke,ae)=>{const ne=te[ae%te.length];return ae<J?`<span class="pictogram-item">${ne}</span>`:`<span class="pictogram-item" style="opacity:0.25;" title="Kondisi Kurang Optimal">${ne}</span>`}).join("")}z&&(x===0?z.innerHTML="🛡️ <strong>Zero Stunting</strong> – Indikator kesehatan balita di kelurahan sangat optimal!":z.innerHTML="🛡️ <strong>Optimalisasi Tumbuh Kembang</strong> – Terus tingkatkan asupan nutrisi &amp; kunjungan Posyandu!")}}function B(u){const s=f[u];if(!s)return;const o=document.getElementById("kes-lightbox"),c=document.getElementById("kes-lb-img"),l=document.getElementById("kes-lb-cap");if(!o||!c||!l)return;c.src=w(s.url_foto),c.alt=s.keterangan||"";const d=r=>r<10?"0"+r:""+r;l.innerHTML=`
      <strong>${s.kegiatan||""}</strong>
      <span>${s.keterangan||""}</span>
      <span class="lb-rw">RW ${d(s.rw)} · ${$(s.tanggal)}</span>
    `,o.hidden=!1,document.body.style.overflow="hidden"}function k(){const u=document.getElementById("kes-lightbox");u&&(u.hidden=!0),document.body.style.overflow=""}document.getElementById("kes-lb-close")?.addEventListener("click",k),document.getElementById("kes-lb-backdrop")?.addEventListener("click",k),document.addEventListener("keydown",u=>{u.key==="Escape"&&k()});function K(u,s=!1){const o=document.getElementById("kes-api-status");fetch(u).then(c=>{if(!c.ok)throw new Error(`HTTP ${c.status}`);return c.json()}).then(c=>{const l=Array.isArray(c)?c:c.survei??[],d=c.prevalensi??[],r=c.galeri??[];q(l),C(d),O(l,d),j(r),o&&(o.innerHTML=s?"🟢 Live · Local Mode":`🟢 Live · ${l.length} KK Terdata`)}).catch(c=>{if(console.warn(`Fetch gagal untuk ${u}:`,c),!s)o&&(o.innerHTML="⏳ Menghubungkan ke Lokal..."),K("/data-kesehatan-fallback.json",!0);else{o&&(o.innerHTML="🟡 Offline");const l=document.getElementById("kes-stats-grid");l&&(l.innerHTML='<p style="padding:1.5rem;color:#9ca3af;font-size:0.9rem;text-align:center;grid-column:1/-1;">Data tidak tersedia saat ini.</p>')}})}K(p)})();(function(){const p="https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnQjZyOnFpb-cxOFHqzjoPq_m6f733zhOBiy5EW-5XySDs5NMUo4sSXUTgiDdUPyeP6doL9xmREJvuTJ4mD5AVpDqwIq94KT71syJchqgXv45vhYO_LJ3K55uW91vyV5Q5-Okzng24UyXDz-IZcc82WMgVq91t5EXTBepv1bjvlV2jg4Lc3iaTbTAzbbjXFB688ysePGnE8-ncAHUq8ZdqBV8sKiyMqDvFzMP05fIJXsaq9B_XpdTBNknCCMj1_DNoIXBrfO3vRaM7bA79XoW-8Ia08b3A&lib=MDLAdFgRGOJVJ01oTM4DbJHdi3ZE4dG0b",E={Jahe:"🫚",Kunyit:"🟡",Lengkuas:"🌱",Kencur:"🌿",Temulawak:"🌾",Sirih:"🍃",Seledri:"🥬","Daun Mint":"🫙"},w={1:"🌿",2:"☕",3:"🍵",4:"🌱",5:"🌺",6:"🍀"},$={1:"Afd. Pabrik",2:"Afd. 1 / Talang Darat",3:"Afd. 2 / Talang Beduk",4:"Muara Perikan",5:"Muara Abadi",6:"Janang"};function q(f){return E[f]||"🌿"}function C(f){const j=document.getElementById("toga-summary"),A=document.getElementById("toga-chart"),O=document.getElementById("rw-grid"),B=document.getElementById("toga-api-status");if(!f||!f.length){B&&(B.innerHTML="🟡 Tidak Ada Data");return}const k={};f.forEach(d=>{k[d.nama_tanaman]=(k[d.nama_tanaman]||0)+(d.jumlah||0)});const K={};f.forEach(d=>{const r=Number(d.rw);K[r]||(K[r]={tanaman:{},total:0}),K[r].tanaman[d.nama_tanaman]=(K[r].tanaman[d.nama_tanaman]||0)+(d.jumlah||0),K[r].total+=d.jumlah||0});const u=Object.keys(k).length,s=Object.values(k).reduce((d,r)=>d+r,0),o=Object.keys(K).length,c=Math.max(...Object.values(k)),l=Math.max(...Object.values(K).map(d=>d.total));if(B&&(B.innerHTML=`🟢 Live · ${o} RW Terdata`),j&&(j.innerHTML=`
        <div class="toga-sum-card">
          <div class="toga-sum-icon">🌿</div>
          <div class="toga-sum-val">${u}</div>
          <div class="toga-sum-lbl">Jenis Tanaman</div>
        </div>
        <div class="toga-sum-card">
          <div class="toga-sum-icon">🪴</div>
          <div class="toga-sum-val">${s}</div>
          <div class="toga-sum-lbl">Total Tanaman</div>
        </div>
        <div class="toga-sum-card">
          <div class="toga-sum-icon">🗺️</div>
          <div class="toga-sum-val">${o}</div>
          <div class="toga-sum-lbl">RW Aktif</div>
        </div>
      `),A){const d=Object.entries(k).sort((g,h)=>h[1]-g[1]);A.innerHTML=d.map(([g,h])=>{const L=c?Math.round(h/c*100):0;return`
          <div class="toga-bar-row">
            <span class="toga-bar-name">${q(g)} ${g}</span>
            <div class="toga-bar-track">
              <div class="toga-bar-fill" style="width:0%" data-w="${L}%"></div>
            </div>
            <span class="toga-bar-count">${h}</span>
          </div>
        `}).join("");const r=A.querySelectorAll(".toga-bar-fill"),D=new IntersectionObserver(g=>{g.forEach(h=>{if(h.isIntersecting){const L=h.target;setTimeout(()=>{L.style.width=L.dataset.w||"0%"},300),D.unobserve(L)}})},{threshold:.3});r.forEach(g=>D.observe(g))}if(O){const d=Object.entries(K).map(([g,h])=>({rw:Number(g),...h})).sort((g,h)=>g.rw-h.rw);O.innerHTML=d.map(({rw:g,tanaman:h,total:L})=>{const R=g<10?"0"+g:""+g,W=$[g]||`Area RW ${R}`,X=w[g]||"🌿",t=l?Math.round(L/l*100):0,e=Object.entries(h).sort((n,a)=>a[1]-n[1]).map(([n])=>`<span class="rw-tag">${q(n)} ${n}</span>`).join("");return`
          <article class="rw-card" id="rw-${R}" role="listitem">
            <div class="rw-card-header">
              <span class="rw-number">RW ${R}</span>
              <span class="rw-icon" aria-hidden="true">${X}</span>
            </div>
            <h3 class="rw-card-name">${W}</h3>
            <p class="rw-card-total">${L} tanaman · ${Object.keys(h).length} jenis</p>
            <div class="rw-tags">${e}</div>
            <div class="rw-progress-wrap">
              <div class="rw-progress-label-row">
                <span>Kepadatan TOGA</span><span>${t}%</span>
              </div>
              <div class="rw-prog-bar">
                <div class="rw-prog-fill" style="width:0%" data-w="${t}%"></div>
              </div>
            </div>
          </article>
        `}).join("");const r=O.querySelectorAll(".rw-prog-fill"),D=new IntersectionObserver(g=>{g.forEach(h=>{if(h.isIntersecting){const L=h.target;setTimeout(()=>{L.style.width=L.dataset.w||"0%"},400),D.unobserve(L)}})},{threshold:.2});r.forEach(g=>D.observe(g))}}function _(f,j=!1){const A=document.getElementById("toga-api-status");fetch(f).then(O=>{if(!O.ok)throw new Error(`HTTP ${O.status}`);return O.json()}).then(O=>{const B=O.toga??[];C(B),A&&(A.innerHTML=j?"🟢 Live · Local Mode":"🟢 Live")}).catch(O=>{if(console.warn(`Fetch TOGA gagal untuk ${f}:`,O),!j)A&&(A.innerHTML="⏳ Menghubungkan ke Lokal..."),_("/data-kesehatan-fallback.json",!0);else{A&&(A.innerHTML="🟡 Offline");const B=document.getElementById("rw-grid");B&&(B.innerHTML='<p style="padding:1.5rem;color:#9ca3af;font-size:0.9rem;text-align:center;grid-column:1/-1;">Data TOGA tidak tersedia saat ini.</p>')}})}_(p)})();const re=document.querySelectorAll(".wf-btn"),be=document.querySelectorAll(".wisata-card");re.forEach(p=>{p.addEventListener("click",()=>{const E=p.dataset.filter??"all";re.forEach(w=>w.classList.remove("active")),p.classList.add("active"),be.forEach(w=>{const $=w.dataset.category??"",q=E==="all"||$===E;w.style.display=q?"":"none",q&&(w.classList.remove("visible"),setTimeout(()=>w.classList.add("visible"),50))})})});const he=document.querySelectorAll(".reveal"),ye=new IntersectionObserver(p=>{p.forEach(E=>{E.isIntersecting&&E.target.classList.add("visible")})},{threshold:.1});he.forEach(p=>ye.observe(p));const ce=document.getElementById("scrollTop");window.addEventListener("scroll",()=>{ce.classList.toggle("visible",window.scrollY>400)},{passive:!0});ce.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
