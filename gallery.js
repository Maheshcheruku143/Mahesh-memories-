const images=document.querySelectorAll(".photo-card img");

const lightbox=document.createElement("div");
lightbox.className="lightbox";

lightbox.innerHTML=`
<span class="close">&times;</span>
<img src="">
`;

document.body.appendChild(lightbox);

const bigImage=lightbox.querySelector("img");
const closeBtn=lightbox.querySelector(".close");

images.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
bigImage.src=img.src;
});
});

closeBtn.onclick=()=>{
lightbox.style.display="none";
};

lightbox.onclick=(e)=>{
if(e.target===lightbox){
lightbox.style.display="none";
}
};