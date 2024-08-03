import{a as x,S as P,i as S}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const $="/goit-js-hw-12/assets/bi-x-octagon-73f29380.svg";const h="/goit-js-hw-12/assets/icons-ddd773f8.svg",k="https://pixabay.com/api/",C="45097431-2d8d6a9f4785bbcc4049d8cdd";async function M(e){try{return(await x.get(e)).data}catch(t){throw new Error(`Failed to fetch data: ${t.message}`)}}async function m(e,t=1){const o={key:C,q:encodeURIComponent(e),image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},a=`${k}?${new URLSearchParams(o).toString()}`;try{const s=await M(a);return s.hits.length?Promise.resolve(s):Promise.reject("Sorry, there are no images matching your search query. Please, try again!")}catch(s){console.error("Error:",s)}}const E=e=>{const{largeImageURL:t,previewURL:o,tags:a,likes:s,views:r,comments:i,downloads:L}=e;return`<li class='card'> 
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
                      <span class="value">${s}</span>    
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
          </li>`};function O(e){return e.map(E).join("")}function I(e,t){const o=O(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",o)}const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=document.querySelector(".search-form"),n=document.getElementById("morePageBtn");n.addEventListener("click",T);n.style.display="none";y.addEventListener("submit",U);let l=1,f=0,d="",p=[],g=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${h}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${h}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${h}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function U(e){e.preventDefault(),d=e.currentTarget.search.value.trim(),d!==""&&(q(),c.style.display="block",m(d,l).then(t=>b(t)).catch(t=>v()).finally(()=>{c.style.display="none",w()}))}function v(e){y.search.value="",c.style.display="none",u.style.backgroundColor="#f5f5f5",u.innerHTML="",g.refresh()}function b(e){u.style.backgroundColor="#ffffff",f=Math.ceil(e.totalHits/15),p.push(...e.hits),l+=1,I(p,u),g&&g.refresh()}function R(e){S.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${$}`,iconColor:"#fafafb"})}function T(){c.style.display="block",n.style.visible="none",m(d,l).then(e=>b(e)).catch(e=>v()).finally(()=>{c.style.display="none",n.style.visible="block",w()})}function w(){n.style.display=p.length>0?"block":"none",l>=f&&(n.style.display="none",f>1&&R("We're sorry, but you've reached the end of search results."))}function q(){l=1,f=0,p=[]}
//# sourceMappingURL=commonHelpers.js.map
