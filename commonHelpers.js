import{S as h,i as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="/goit-js-hw-12/assets/bi-x-octagon-73f29380.svg";const i="/goit-js-hw-12/assets/icons-02140929.svg",m="https://pixabay.com/api/",v="45097431-2d8d6a9f4785bbcc4049d8cdd",y=s=>new Promise((t,o)=>fetch(s).then(a=>(a.ok||o(new Error(`HTTP error, status: ${a.status}`)),a.json())).then(a=>t(a)).catch(a=>o(a)));function b(s){const t={key:v,q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},o=`${m}?${new URLSearchParams(t).toString()}`;return new Promise((a,e)=>{y(o).then(r=>{r.hits.length||e("Sorry, there are no images matching your search query. Please, try again!"),a(r.hits)}).catch(r=>{e(`Error fetching images: ${r.message}`)})})}const w=s=>{const{largeImageURL:t,previewURL:o,tags:a,likes:e,views:r,comments:n,downloads:f}=s;return`<li class='card'> 
              <a class='card-link' href='${t}'>                    
                <div class='card-cover-inner'>                
                    <img class='card-cover'
                        src='${o}'
                        alt='${a}'                                                          
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
                      <span class="value">${n}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Downloads</span>
                      <span class="value">${f}</span>    
                  </div>
              </div>
          </li>`};function L(s){return s.map(w).join("")}function S(s,t){const o=L(s);t.innerHTML="",t.insertAdjacentHTML("beforeend",o)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),u=document.querySelector(".search-form");u.addEventListener("submit",$);let d=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${i}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${i}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${i}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function $(s){s.preventDefault(),l.style.display="block";const t=s.currentTarget.search.value.trim();b(t).then(o=>x(o)).catch(o=>P(o))}function P(s){u.search.value="",l.style.display="none",C(s),c.style.backgroundColor="#f5f5f5",c.innerHTML="",d.refresh()}function x(s){u.search.value="",l.style.display="none",c.style.backgroundColor="#ffffff",S(s,c),d.refresh()}function C(s){p.show({message:s,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${g}`,iconColor:"#fafafb"})}
//# sourceMappingURL=commonHelpers.js.map
