//variables
const model =document.querySelector(".model"),
    btn = document.querySelector(".btn"),
    close = document.querySelector(".close");

btn.addEventListener("click", openModel);
close.addEventListener("click", closeModel);
model.addEventListener("click", closeModel);

//Open Model 
function openModel(e){
    e.preventDefault();
    model.style.display ="block";
}
//Open Model 
function closeModel(e){
    e.preventDefault();
    model.style.display ="block";
}