let menuBtn = document.querySelector(`.menuBtnToggle`);
let sidebar = document.querySelector(`.sidebar`);
let cancelBtn = document.querySelector(`.cancelBtn`)



// IF MENU BTN IS CLICKED
menuBtn.addEventListener(`click` , ()=> {
    sidebar.classList.add(`active`)
})
// IF MENU BTN IS CLICKED


// IF CLOSE BTN AND BACKGROUND ARE CLICKED
const closeBar = (event) => {
    if(
    event.target.classList.contains(`cancelBtn`) || event.target.classList.contains(`sidebar`)
    ){
        sidebar.classList.remove(`active`)
    }
}

cancelBtn.addEventListener(`click` , closeBar)
sidebar.addEventListener(`click` , closeBar)


// IF CLOSE BTN AND BACKGROUND ARE CLICKED








