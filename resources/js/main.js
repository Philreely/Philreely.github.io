function popup_create(content){
  let outputNode = document.createElement("div");
    outputNode.classList.add("popup");
    // document.querySelector(".slideshow-output");
    outputNode.innerHTML = `
      <span class="popup-btn-close" onclick='this.parentNode.remove()'>&times;</span>  
      <div class="popup-content">
        ${content}
      </div>
    `;
    document.body.appendChild(outputNode);
}

let slideshowNodes = document.querySelectorAll(".slideshow");

slideshowNodes.forEach(function(node){

  node.addEventListener("click", function(eventData){
    eventData.target.style.background = "rgb(49,92,158)";

    let empty = {"innerText":""};
    let html = `
      <h2>${ (eventData.target.querySelector("[data=title]") || empty ).innerText}</h2>
      <p>${ (eventData.target.querySelector("[data=description]") || empty ).innerText}</p>
      <img src="${ (eventData.target.querySelector("[data=image]") || empty ).innerText} alt="Portfolio Picture" />
    `;

    popup_create(html);
    
  });
});