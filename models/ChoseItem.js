import { callClothes } from "../utils/callData.js"
import { getClothes } from "../controllers/main.js";

const deleteActive = (list) =>{
    list.forEach(element => {
        element.classList.remove("active")
    });
}
const Active = (list,type) =>{
    list.forEach((item)=>{
        if(item.getAttribute("data_type") === type){
            item.classList.add("active")
        }
    })
}


export const addActive =(type,list) =>{
    list == undefined ? "" : deleteActive(list)
    list == undefined ? "" : Active(list,type)
    callClothes()
    .then((data) =>{
       let clothes =  data.filter((item) => item.type == type)
       let clothesCards = clothes.map((item) =>{
            return(
               ` <div class="clothesCar">
                    <img src="${item.imgSrc_jpg}"/>
                    <h5 classc="clothes__name">${item.name}</h5>
                    <button data="${item.id}" class="clothes__test">Thử đồ</button>
                </div>`
            )
       }).join("")
       document.querySelector(".tab-content").innerHTML = clothesCards
       document.querySelectorAll(".clothes__test").forEach((item) =>{
            item.addEventListener("click",() => getClothes(item.getAttribute("data")))
       })
    })
}

addActive("topclothes")