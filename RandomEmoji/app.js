const emoji=document.querySelector("#emoji");
const emojis=["😂","😘","😍","😁","😜","😎","😉","😒","🫥","🥲","😝","😌","😴😶‍🌫️"];
emoji.addEventListener("mouseover",(e)=>{
    emoji.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
});