
export const addCart = (product) =>{
    return{
        type:"addCart",
        pro: product ,
    }
}

export const deleteCart = (product ) =>{
    return{
        type:"deleteCart",
        pro: product, 
    }
}