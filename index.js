import{a as m,S as p,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="50387932-ebc79aa2032fd85e73f5be643",y="https://pixabay.com/api/";async function g(s){const o={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(y,{params:o})).data}const l=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${e.likes}</p>
            <p class="info-item"><b>Views:</b> ${e.views}</p>
            <p class="info-item"><b>Comments:</b> ${e.comments}</p>
            <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function w(){f.classList.add("visible")}function c(){f.classList.remove("visible")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const e=await g(o);if(c(),e.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits)}catch(e){console.error("❌ Error fetching images:",e),n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),c()}});
//# sourceMappingURL=index.js.map
