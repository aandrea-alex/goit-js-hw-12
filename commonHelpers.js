import{a as h,S as p,i as g}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="/goit-js-hw-12/assets/bi-x-octagon-73f29380.svg";const i="/goit-js-hw-12/assets/icons-02140929.svg",v="https://pixabay.com/api/",y="45097431-2d8d6a9f4785bbcc4049d8cdd";async function b(s){try{return(await h.get(s)).data}catch(t){throw new Error(`Failed to fetch data: ${t.message}`)}}function w(s){const t={key:y,q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15},o=`${v}?${new URLSearchParams(t).toString()}`;return new Promise((a,e)=>{b(o).then(r=>{r.hits.length||e("Sorry, there are no images matching your search query. Please, try again!"),a(r.hits)}).catch(r=>{e(`Error fetching images: ${r.message}`)})})}const L=s=>{const{largeImageURL:t,previewURL:o,tags:a,likes:e,views:r,comments:n,downloads:f}=s;return`<li class='card'> 
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
          </li>`};function S(s){return s.map(L).join("")}function $(s,t){const o=S(s);t.innerHTML="",t.insertAdjacentHTML("beforeend",o)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=document.querySelector(".search-form");d.addEventListener("submit",x);let u=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${i}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${i}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${i}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function x(s){s.preventDefault(),l.style.display="block";const t=s.currentTarget.search.value.trim();w(t).then(o=>C(o)).catch(o=>P(o))}function P(s){d.search.value="",l.style.display="none",O(s),c.style.backgroundColor="#f5f5f5",c.innerHTML="",u.refresh()}function C(s){d.search.value="",l.style.display="none",c.style.backgroundColor="#ffffff",$(s,c),u.refresh()}function O(s){g.show({message:s,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${m}`,iconColor:"#fafafb"})}
//# sourceMappingURL=commonHelpers.js.map
