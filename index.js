import{a as m,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",y="50387932-ebc79aa2032fd85e73f5be643";async function g(s){try{return(await m.get(p,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw r}}const l=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=new d(".gallery a",{});function b(s){const r=s.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${t.likes}</p>
            <p class="info-item"><b>Views:</b> ${t.views}</p>
            <p class="info-item"><b>Comments:</b> ${t.comments}</p>
            <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function w(){f.classList.add("active")}function c(){f.classList.remove("active")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const r=v.value.trim();if(!r){n.warning({message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const t=await g(r);if(c(),t.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits)}catch(t){console.error("❌ Error fetching images:",t),n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),c()}});
//# sourceMappingURL=index.js.map
