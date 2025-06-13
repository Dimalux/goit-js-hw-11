import{a as u,S as d,i as a}from"./assets/vendor-Bz4lgVUE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/",m="50787945-1edbab8bb6a94afd781f3e3fd";function p(s){return u(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery");let y=new d(".gallery a",{captionsData:"alt",captionDelay:300});function h(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${r.likes}</p>
          <p class="info-item"><b>Views</b> ${r.views}</p>
          <p class="info-item"><b>Comments</b> ${r.comments}</p>
          <p class="info-item"><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function g(){c.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("is-hidden")}function L(){document.querySelector(".loader").classList.add("is-hidden")}const S=document.querySelector(".form");let n="";S.addEventListener("submit",w);function w(s){if(s.preventDefault(),n=s.target.elements.searchQuery.value.trim(),!n){a.error({message:"Please enter a search query",position:"topRight"});return}b(),g(),p(n).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}).catch(t=>{a.error({message:"ERROR! Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}).finally(()=>{L()}),s.target.reset()}
//# sourceMappingURL=index.js.map
