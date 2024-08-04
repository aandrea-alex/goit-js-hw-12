import{a as P,S as C,i as S}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const x="/goit-js-hw-12/assets/bi-x-octagon-73f29380.svg";const p="/goit-js-hw-12/assets/icons-ddd773f8.svg",B="https://pixabay.com/api/",$="45097431-2d8d6a9f4785bbcc4049d8cdd";async function y(t,s=1){const n={key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};try{const e=(await P.get(B,{params:n})).data;return e.hits.length?Promise.resolve(e):Promise.reject("Sorry, there are no images matching your search query. Please, try again!")}catch(r){throw console.error("Error:",r),new Error(`Failed to fetch data: ${r.message}`)}}const k=t=>{const{largeImageURL:s,previewURL:n,tags:r,likes:e,views:o,comments:i,downloads:L}=t;return`<li class='card'> 
              <a class='card-link' href='${s}'>                    
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
                      <span class="value">${o}</span>   
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
          </li>`};function M(t){return t.map(k).join("")}function E(t,s){const n=M(t);s.innerHTML="",s.insertAdjacentHTML("beforeend",n)}async function O(){if(document.querySelectorAll(".gallery li").length!==0)try{window.scroll({top:0,left:0});const s=document.querySelector(".gallery"),n=s.firstChild.getBoundingClientRect().height,r=48;window.scrollBy({top:s.getBoundingClientRect().top+r,behavior:"smooth"});let e=s.getBoundingClientRect().top+r;for(;e<s.getBoundingClientRect().bottom-n-r;)e+=n+r,await new Promise(o=>setTimeout(o,1e3)),window.scrollBy({top:e,left:0,behavior:"smooth"})}catch(s){console.log(s)}}const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=document.querySelector(".search-form"),a=document.getElementById("morePageBtn");a.addEventListener("click",q);a.style.display="none";m.addEventListener("submit",R);let l=1,f=0,d="",g=[],h=new C(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${p}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${p}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${p}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});async function R(t){if(t.preventDefault(),d=t.currentTarget.search.value.trim(),d!==""){I(),c.style.display="block";try{const s=await y(d,l);b(s)}catch(s){v(s)}finally{c.style.display="none"}}}function v(t){m.search.value="",c.style.display="none",w(t),u.style.backgroundColor="#f5f5f5",u.innerHTML="",h.refresh(),a.style.display="none"}function b(t){u.style.backgroundColor="#ffffff",f=Math.ceil(t.totalHits/15),g.push(...t.hits),l+=1,E(g,u),h&&h.refresh(),O(),T()}function w(t){S.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${x}`,iconColor:"#fafafb"})}async function q(){c.style.display="block",a.style.visible="none";try{const t=await y(d,l);b(t)}catch(t){v(t)}finally{c.style.display="none"}}function T(){a.style.display=g.length>0?"block":"none",l>f&&(a.style.display="none",f>1&&w("We're sorry, but you've reached the end of search results."))}function I(){l=1,f=0,g=[]}
//# sourceMappingURL=commonHelpers.js.map
