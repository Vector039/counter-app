// const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".substract");

// add.addEventListener("click", () => {
//     count.innerHTML++;
// })
// sub.addEventListener("click", () => {
//     count.innerHTML--;
// })
// resetCount.addEventListener("click", () => {
//     count.innerHTML = 0;
// })

const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".substract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    if(event.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    if(event.target.classList.contains("substract")){
        count.innerHTML--;
        setColor();
    }
    if(event.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }
});

function setColor() {
    if(count.innerHTML > 0){
        count.style.color = "yellow"
    } else if(count.innerHTML < 0){
        count.style.color = "orangered"
    } else {
        count.style.color = "white"
    }
}
