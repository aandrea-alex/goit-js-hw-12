import{a as S,S as C,i as x}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const $="/goit-js-hw-12/assets/bi-x-octagon-73f29380.svg";const g="/goit-js-hw-12/assets/icons-ddd773f8.svg",k="https://pixabay.com/api/",B="45097431-2d8d6a9f4785bbcc4049d8cdd";async function M(t){try{return(await S.get(t)).data}catch(o){throw new Error(`Failed to fetch data: ${o.message}`)}}async function y(t,o=1){const n={key:B,q:encodeURIComponent(t),image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15},r=`${k}?${new URLSearchParams(n).toString()}`;try{const e=await M(r);return e.hits.length?Promise.resolve(e):Promise.reject("Sorry, there are no images matching your search query. Please, try again!")}catch(e){console.error("Error:",e)}}const R=t=>{const{largeImageURL:o,previewURL:n,tags:r,likes:e,views:s,comments:i,downloads:P}=t;return`<li class='card'> 
              <a class='card-link' href='${o}'>                    
                <div class='card-cover-inner'>                
                    <img class='card-cover'
                        src='${n}'
                        alt='${r}'                                                          
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
                      <span class="value">${s}</span>   
                  </div>
                  <div class="field">
                      <span class="label">Comments</span>
                      <span class="value">${i}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Downloads</span>
                      <span class="value">${P}</span>    
                  </div>
              </div>
          </li>`};function E(t){return t.map(R).join("")}function O(t,o){const n=E(t);o.innerHTML="",o.insertAdjacentHTML("beforeend",n)}async function q(){if(document.querySelectorAll(".gallery li").length!==0)try{window.scroll({top:0,left:0});const o=document.querySelector(".gallery"),n=o.firstChild.getBoundingClientRect().height,r=48;window.scrollBy({top:o.getBoundingClientRect().top+r,behavior:"smooth"});let e=o.getBoundingClientRect().top+r;for(;e<o.getBoundingClientRect().bottom-n-r;)e+=n+r,await new Promise(s=>setTimeout(s,1e3)),window.scrollBy({top:e,left:0,behavior:"smooth"})}catch(o){console.log(o)}}const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=document.querySelector(".search-form"),a=document.getElementById("morePageBtn");a.addEventListener("click",T);a.style.display="none";m.addEventListener("submit",I);let l=1,f=0,d="",h=[],p=new C(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${g}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${g}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${g}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function I(t){t.preventDefault(),d=t.currentTarget.search.value.trim(),d!==""&&(U(),c.style.display="block",y(d,l).then(o=>b(o)).catch(o=>v(o)).finally(()=>{c.style.display="none",L()}))}function v(t){m.search.value="",c.style.display="none",w(t),u.style.backgroundColor="#f5f5f5",u.innerHTML="",p.refresh()}function b(t){u.style.backgroundColor="#ffffff",f=Math.ceil(t.totalHits/15),h.push(...t.hits),l+=1,O(h,u),p&&p.refresh(),q()}function w(t){x.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${$}`,iconColor:"#fafafb"})}function T(){c.style.display="block",a.style.visible="none",y(d,l).then(t=>b(t)).catch(t=>v(t)).finally(()=>{c.style.display="none",a.style.visible="block",L()})}function L(){a.style.display=h.length>0?"block":"none",l>=f&&(a.style.display="none",f>1&&w("We're sorry, but you've reached the end of search results."))}function U(){l=1,f=0,h=[]}
//# sourceMappingURL=commonHelpers.js.map
