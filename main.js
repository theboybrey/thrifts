<<<<<<< HEAD
/*let color = Math.random();
color = Math.random().toString(16);
color = Math.random().toString(16).substring(x, y    );

console.log(color);*/ 

const hex = document.querySelector('.hex');
const btn = document.querySelector('.generate');

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8)

    document.body.style.backgroundColor = `#` + randomColor;
    hex.innerHTML = `#` + randomColor; 

}

btn.addEventListener("click", generateColor);
generateColor();
=======
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



const hex = document.querySelector('.hex');
const btn = document.querySelector('.generate');

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8)

    document.body.style.backgroundColor = `#` + randomColor;
    hex.innerHTML = `#` + randomColor; 

}

>>>>>>> ba8708f1aae0853f1382ca7e53aa8667b38f0461
