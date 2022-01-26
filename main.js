const count = document.querySelector(".count");
const add = document.querySelector(".add");
const restCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");


function secColor(){
    if (count.innerHTML > 0){
        count.style.color ="yellow"
    }
    else if (count.innerHTML < 0){
        count.style.color = "orangered"
    }
    else{
        count.style.color = "#fff"
    }
}
add.addEventListener("click", () =>{
    count.innerHTML++;
    secColor();
})
sub.addEventListener("click", () =>{
    count.innerHTML--;
    secColor();
})
restCount.addEventListener("click", () =>{
    count.innerHTML = 0;
    secColor();
})