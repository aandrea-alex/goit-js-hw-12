import{a as p,S as g,i as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const v="/goit-js-hw-12/assets/bi-x-octagon-73f29380.svg";const i="/goit-js-hw-12/assets/icons-ddd773f8.svg",y="https://pixabay.com/api/",b="45097431-2d8d6a9f4785bbcc4049d8cdd";async function w(e){try{return(await p.get(e)).data}catch(t){throw new Error(`Failed to fetch data: ${t.message}`)}}function L(e,t=1){const o={key:b,q:encodeURIComponent(e),image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},n=`${y}?${new URLSearchParams(o).toString()}`;return new Promise((s,r)=>{w(n).then(a=>{a.hits.length||r("Sorry, there are no images matching your search query. Please, try again!"),s(a.hits)}).catch(a=>{r(`Error fetching images: ${a.message}`)})})}const S=e=>{const{largeImageURL:t,previewURL:o,tags:n,likes:s,views:r,comments:a,downloads:h}=e;return`<li class='card'> 
              <a class='card-link' href='${t}'>                    
                <div class='card-cover-inner'>                
                    <img class='card-cover'
                        src='${o}'
                        alt='${n}'                                                          
                    />                                                  
                  <div class='card-cover-darkened'></div>
                </div>
              </a>                 
              <div class="card-info">
                  <div class="field">
                      <span class="label">Likes</span>
                      <span class="value">${s}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Views</span>
                      <span class="value">${r}</span>   
                  </div>
                  <div class="field">
                      <span class="label">Comments</span>
                      <span class="value">${a}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Downloads</span>
                      <span class="value">${h}</span>    
                  </div>
              </div>
          </li>`};function $(e){return e.map(S).join("")}function x(e,t){const o=$(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",o)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=document.querySelector(".search-form"),P=document.getElementById("morePageBtn");P.addEventListener("click",O);d.addEventListener("submit",C);let u=1,f=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${i}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${i}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${i}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function C(e){e.preventDefault(),l.style.display="block";const t=e.currentTarget.search.value.trim();L(t,u).then(o=>k(o)).catch(o=>E(o))}function E(e){d.search.value="",l.style.display="none",M(e),c.style.backgroundColor="#f5f5f5",c.innerHTML="",f.refresh()}function k(e){d.search.value="",l.style.display="none",c.style.backgroundColor="#ffffff",x(e,c),f.refresh()}function M(e){m.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${v}`,iconColor:"#fafafb"})}function O(){u+=1}
//# sourceMappingURL=commonHelpers.js.map
