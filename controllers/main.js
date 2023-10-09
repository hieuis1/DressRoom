import { callClothes } from "../utils/callData.js"

export const getClothes = (id) =>{
    callClothes()
    .then((data) =>{
        console.log(data);
        let clothesArr = data.filter(item => item.id === id)
        let[clothes] = clothesArr
        let image = document.createElement("img")
        image.src = clothes.imgSrc_png
      
        if(clothes.type === "topclothes"){
            image.classList.add("clothesTop")
            document.querySelector(".body").innerHTML =""
            document.querySelector(".body").appendChild(image)
            document.querySelector(".bikinitop").style.display ="none"
        }
        else if(clothes.type === "botclothes"){
            document.querySelector(".bodyBot").innerHTML =""
            document.querySelector(".bodyBot").appendChild(image)
            document.querySelector(".bikinibottom").style.display ="none"
        }
        else if(clothes.type === "shoes"){
            document.querySelector(".feet").innerHTML =""
            document.querySelector(".feet").appendChild(image)
        }
        else if(clothes.type === "handbags"){
            document.querySelector(".handbag").innerHTML =""
            document.querySelector(".handbag").appendChild(image)
        }
        else if(clothes.type ==="necklaces"){
            image.classList.add("vong")
            document.querySelector(".necklace").innerHTML =""
            document.querySelector(".necklace").appendChild(image)
        }
        else if(clothes.type ==="hairstyle"){
            document.querySelector(".hairstyle").innerHTML =""
            document.querySelector(".hairstyle").appendChild(image)
        }
        else if(clothes.type === "background"){
            document.querySelector(".background").style.backgroundImage = `url("${clothes.imgSrc_png}")`;
        }
    })
}
