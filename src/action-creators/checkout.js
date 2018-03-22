import {
   
    GET_DETAILS,GET_DETAILS_SUCCESS,GET_DETAILS_FAILURE, CHECKOUT_EDIT_ITEM, CHECKOUT_EDIT_ITEM_SUCCESS
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
export function getDetailsFailure(error){
    return{
        type:GET_DETAILS_FAILURE,
        error
    };
}
  export function checkoutEditItem(editItem) {
      console.log(editItem)
    return {
      type: CHECKOUT_EDIT_ITEM,
      editItem
    };
  }
  export function checkoutEditItemSuccess(editProducts) {
    return {
      type: CHECKOUT_EDIT_ITEM_SUCCESS,
      editProducts
    };
  }