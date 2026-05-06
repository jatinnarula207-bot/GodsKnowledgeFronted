
let cards=document.querySelectorAll(".custom-card");
let popup=document.querySelector(".popup");

let godName=document.getElementById("godName");
let godMantra=document.getElementById("godMantra");
let description=document.getElementById("description");
let heading=document.getElementById("heading");

cards.forEach(card=>{
    card.addEventListener("click",()=>{
        let name=card.getAttribute("data-name");
        let mantra=card.getAttribute("data-mantra");
        let head=card.getAttribute("data-heading");
        let desc=card.getAttribute("data-description");

        godName.innerText=name;
        godMantra.innerText=mantra;
        heading.innerText=head;
        description.innerText=desc;

        popup.style.display="block";
    });
})

document.querySelector(".close-btn").addEventListener("click",()=>{
    popup.style.display="none";
});
