import React, { Component } from 'react';
import './style.css';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./action-creators/checkout";
import { withRouter } from "react-router-dom";
import Checkout from './component/checkout';
class App extends Component {
componentWillMount() {
console.log("first");
this.props.actions.getDetails();
}
saveChange = (p) => {
const name = p.target.name;
const value = p.target.value;
const editItem = {};
editItem[name] = value;
this.props.actions.checkoutEditItem(editItem);
} 
editProduct = (item) => {
this.props.actions.editItem(item)
}
handleEditClick = (editProduct) => {
this.props.actions.checkoutEditItemSuccess(editProduct);
window.location.href = "/";
}
render() {
console.log("data",this.props.checkout)
return (
<div className="App" >
   <Switch>
      <Route exact path="/" render={props =>
      this.props.isLoading ? ("...Loading") :
      <Checkout {...props}
         checkout={this.props.checkout}
         editProduct = {this.props.editProp}
         continueCheckout ={this.props.save}
         continuecheck = {this.saveChange} 
         handleEditClick ={this.handleEditClick}/>
      }/>
   </Switch>
   {/* 
   <Checkout checkout = {this.props.checkout} />
   */}
</div>
);
}
}
function mapStateToProps(state) {
return {
checkout: state.checkout,
save:state.checkEdit,
editProp:state.editProduct
};
}
function mapDispatchToProps(dispatch) {
return {
actions: bindActionCreators(productActions, dispatch)
};
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default App;