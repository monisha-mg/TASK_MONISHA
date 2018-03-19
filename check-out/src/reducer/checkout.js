import {GET_DETAILS,GET_DETAILS_SUCCESS, CHECKOUT} from "../action-type/checkout";

export default (
    prevState = {checkout:[], isLoading:false},
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
        case CHECKOUT:
        return{
            ...prevState,
            checkout:{...prevState.checkout,...action.continueCheckout}
        }
        default: 
         return{
            ...prevState
         }
    }
}