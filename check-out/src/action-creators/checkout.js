import {
    GET_DETAILS,GET_DETAILS_SUCCESS,GET_DETAILS_FAILURE,CHECKOUT,CHECKOUT_SUCCESS
} from "../action-type/checkout";

export function getDetails(){
    return{
        type:GET_DETAILS
    };
}
export function getDetailsSuccess(checkout){
    return{
        type:GET_DETAILS_SUCCESS,
        checkout
    };
}
export function getDetailsFailure(checkout){
    return{
        type:GET_DETAILS_FAILURE,
        checkout
    };
}
export function checkout(continueCheckout){
    return{
        type:CHECKOUT,
        continueCheckout   
    }
}
export function checkoutSuccess(continueCheckout){
    return{
        type:CHECKOUT_SUCCESS,
        continueCheckout 
    }
}