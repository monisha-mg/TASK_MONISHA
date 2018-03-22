import {GET_DETAILS,GET_DETAILS_SUCCESS, CHECKOUT_EDIT_ITEM} from "../action-type/checkout";

export default (
    prevState = {checkout:[], isLoading:false,editProducts:{}},
    action
) => {
    switch(action.type){
        case GET_DETAILS:
        return{
            ...prevState,
            isLoading:true
        };
        case GET_DETAILS_SUCCESS:
        console.log(action.checkout)
        return{
            ...prevState,
            checkout:action.checkout,
            isLoading:true
        }
    
        case CHECKOUT_EDIT_ITEM:
         return {
        ...prevState,
        editProducts: { ...prevState.editProducts, ...action.editItem }
        }
        default: 
         return{
            ...prevState
         }
    }
}