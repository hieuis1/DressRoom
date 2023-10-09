import { callTab } from "../utils/callData.js";
import { addActive } from "./ChoseItem.js";

callTab()
.then((data) => {
    let listTab = data.map((item) =>{
        return(
            `<li class="nav__item" data_type="${item.type}">${item.showName}</li>`
        )
    }).join("")

    document.querySelector(".nav-pills").innerHTML = listTab
    document.querySelector(".nav__item:first-child").classList.add("active")
    const listItem = document.querySelectorAll(".nav__item")
    listItem.forEach((item) =>{
        item.addEventListener("click",() => addActive(item.getAttribute("data_type"),listItem))
    })
   
    
})









