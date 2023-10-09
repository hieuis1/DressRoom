export const callTab = () =>{
    
    return axios.get('https://652382a9f43b179384158611.mockapi.io/tab')
    .then((data) => data.data)
    
}

export const callClothes = () =>{
    return axios.get("https://652382a9f43b179384158611.mockapi.io/clothes")
    .then((data) => data.data)
}

export const add = (a,b) =>{
    return a*b
}

