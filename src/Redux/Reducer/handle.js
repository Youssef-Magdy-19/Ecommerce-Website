
const statedCart = ()=>{
    const statedcart = localStorage.getItem("cart")
    return statedcart ? JSON.parse(statedcart) : []
}
const handle =(state = statedCart() , action)=>{
    let product = action.pro
    let updateCart ;
    switch(action.type){
        case "addCart" :
            const exist = state.find((prod) => prod.id === product.id)
            if(exist){
                updateCart = state.map((prod) =>
                    prod.id === product.id ? {...prod , qty : prod.qty+1} : prod
                  );

            }else{
                updateCart = [...state , {...product , qty : 1}]
            }
            localStorage.setItem("cart",JSON.stringify(updateCart))
            return updateCart

        case "deleteCart" :
            const delExist = state.find((prod) => prod.id === product.id)
            if(delExist.qty > 1){
                updateCart = state.map((prod)=>
                    prod.id === product.id ? {...prod , qty : prod.qty - 1} : prod)
            }else{
                updateCart = state.filter((prod) => prod.id !== product.id)
            }
            localStorage.setItem("cart",JSON.stringify(updateCart))
            return updateCart
            
        default :
            return state
    }

}

export default handle