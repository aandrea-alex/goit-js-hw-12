import{a as P,S}from"./assets/vendor-f80bfc2c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="/goit-js-hw-12/assets/icons-ddd773f8.svg",x="https://pixabay.com/api/",$="45097431-2d8d6a9f4785bbcc4049d8cdd";async function k(s){try{return(await P.get(s)).data}catch(t){throw new Error(`Failed to fetch data: ${t.message}`)}}async function m(s,t=1){const a={key:$,q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},o=`${x}?${new URLSearchParams(a).toString()}`;try{const e=await k(o);return e.hits.length?Promise.resolve(e):Promise.reject("Sorry, there are no images matching your search query. Please, try again!")}catch(e){console.error("Error:",e)}}const M=s=>{const{largeImageURL:t,previewURL:a,tags:o,likes:e,views:r,comments:i,downloads:L}=s;return`<li class='card'> 
              <a class='card-link' href='${t}'>                    
                <div class='card-cover-inner'>                
                    <img class='card-cover'
                        src='${a}'
                        alt='${o}'                                                          
                    />                                                  
                  <div class='card-cover-darkened'></div>
                </div>
              </a>                 
              <div class="card-info">
                  <div class="field">
                      <span class="label">Likes</span>
                      <span class="value">${e}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Views</span>
                      <span class="value">${r}</span>   
                  </div>
                  <div class="field">
                      <span class="label">Comments</span>
                      <span class="value">${i}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Downloads</span>
                      <span class="value">${L}</span>    
                  </div>
              </div>
          </li>`};function C(s){return s.map(M).join("")}function E(s,t){const a=C(s);t.innerHTML="",t.insertAdjacentHTML("beforeend",a)}const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=document.querySelector(".search-form"),n=document.getElementById("morePageBtn");n.addEventListener("click",I);n.style.display="none";y.addEventListener("submit",O);let l=1,g=0,d="",f=[],h=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${p}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${p}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${p}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function O(s){s.preventDefault(),d=s.currentTarget.search.value.trim(),d!==""&&(q(),c.style.display="block",m(d,l).then(t=>b(t)).catch(t=>v()).finally(()=>{c.style.display="none",w()}))}function v(s){y.search.value="",c.style.display="none",u.style.backgroundColor="#f5f5f5",u.innerHTML="",h.refresh()}function b(s){u.style.backgroundColor="#ffffff",g=Math.ceil(s.totalHits/15),f.push(...s.hits),l+=1,E(f,u),h&&h.refresh()}function I(){c.style.display="block",n.style.visible="none",m(d,l).then(s=>b(s)).catch(s=>v()).finally(()=>{c.style.display="none",n.style.visible="block",w()})}function w(){n.style.display=f.length>0?"block":"none",l>=g&&(n.style.display="none")}function q(){l=1,g=0,f=[]}
//# sourceMappingURL=commonHelpers.js.map
