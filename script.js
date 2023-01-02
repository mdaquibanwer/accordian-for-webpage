const openBtnClick = document.querySelectorAll(".openIcon")
const accordian = document.querySelectorAll(".accordian");
const lines = document.querySelectorAll(".line")
for(let i=0;i<accordian.length;i++){
    accordian[i].addEventListener("click",()=>{
        accordian[i].classList.toggle("active");
        openBtnClick[i].classList.toggle("fa-plus");
        openBtnClick[i].classList.toggle("fa-xmark");
        lines[i].classList.toggle("full")
    })
}