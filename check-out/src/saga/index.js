import {getDetailsSuccess,getDetailsFailure} from "../action-creators/checkout";
import { put, takeLatest } from "redux-saga/effects";
import { GET_DETAILS,CHECKOUT_EDIT_ITEM_SUCCESS } from "../action-type/checkout";
function* getDetails() {
  let url = "http://172.16.110.38:8090/api/getDetails";
    try {
      let checkout = yield fetch(url).then(r =>
        r.json()
      );
      yield put(getDetailsSuccess(checkout));
    }
    catch (error) {
      yield put(getDetailsFailure(error));
    }
  }
  function*  checkoutEditItemSuccess(action) {
    try {
      let products = yield fetch(`http://172.16.110.38:8090/api/getDetails/${action.editProducts.id}`, {
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(action.editProducts)
      }).then(result => result.json());
      yield put(getDetailsSuccess(products));
    }
    catch (error) {
      yield put(getDetailsFailure(error));
    }
  }
  export function* checkoutWatcher() {
    yield takeLatest(GET_DETAILS, getDetails);
    yield takeLatest(CHECKOUT_EDIT_ITEM_SUCCESS,checkoutEditItemSuccess);
  }
  
