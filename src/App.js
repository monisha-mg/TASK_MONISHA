import React, { Component } from 'react';
import './style.css';
//import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./action-creators/checkout";
import { withRouter } from "react-router-dom";
import Checkout from './component/checkout';

class App extends Component {
  componentWillMount() {
    this.props.actions.getDetails();
  }
  triggerEdit=()=>{
    console.log("trigered")
    this.props.actions.editItem();
  }
  saveChange = (p) => {
    const name = p.target.name;
    const value = p.target.value;
    const editItem = {};
    editItem[name] = value;
    this.props.actions.checkoutEditItem(editItem);
    console.log(editItem)
  }
  editProduct = (item) => {
    this.props.actions.editItem(item)
  }
  
  handleEditClick = (edits) => {

    this.props.actions.checkoutEditItemSuccess(edits);
    console.log(edits);
    
  }
  render() {
    console.log(this.props.checkout)
    console.log(this.props.editProducts)
    return( 
    <div>
      <Checkout
        checkout={this.props.checkout}
        editProduct={this.props.editProducts}
        continuecheck={this.saveChange}
        handleEditClick={this.handleEditClick}
        triggerEdit={this.triggerEdit}
        />
  </div>
  )
  }
}
function mapStateToProps(state) {
  return {
    checkout: state.checkout,
    editProducts:state.editProducts
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default App;