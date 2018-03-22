import React, {Component} from "react";
 
   class Checkout extends Component {
       render(){
        console.log(this.props.checkout.FullName,"Keyvalue");
        console.log(this.props.checkout,"wholeArray");
        return(
            <div>
                {/* <table>
                
                    <tr>
                        <td>{this.props.checkDetails.FullName}</td>
                    </tr>
                </table> */}
                <h1>checkout Form</h1>
                {this.props.checkout.map(check => (
                    <div>
        <div className="col-md-6">
         
           <h3>Billing Address</h3>
           <label ><i className="fa fa-user"></i> Full Name</label>
           <input type="text" className="form-control" id="fname" name="FullName" placeholder=""  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.FullName}/>
           <label ><i className="fa fa-envelope"></i> Email</label>
           <input type="text" className="form-control" id="email" name="Email" placeholder="john@example.com"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.Email}/>
           <label ><i className="fa fa-address-card-o"></i> Address</label>
           <input type="text" className="form-control" id="adr" name="Address" placeholder="542 W. 15th Street"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.Address}/>
           <label ><i className="fa fa-institution"></i> City</label>
           <input type="text" className="form-control" id="city" name="City" placeholder="New York"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.City}/>
        
                    
               <label >State</label>
               <input type="text" className="form-control" id="state" name="state" placeholder="NY"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.State}/>
            
               <label >Zip</label>
               <input type="text" className="form-control" id="zip" name="Zip" placeholder="10001"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.Zip}/>
          
         </div>
        
         <div className="col-md-6">
           <h3>Payment</h3>
           <label >Accepted Cards</label>
           <div className="icon-container">
             <i className="fa fa-cc-visa"></i>
             <i className="fa fa-cc-amex" ></i>
             <i className="fa fa-cc-mastercard" ></i>
             <i className="fa fa-cc-discover"></i>
           </div>
           <label>Name on Card</label>
           <input type="text" className="form-control" id="cname" name="NameOnCard" placeholder="John More Doe"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.NameOnCard}/>
           <label >Credit card number</label>
           <input type="text" className="form-control" id="ccnum" name="CreditCardNumber" placeholder="1111-2222-3333-4444"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.CreditCardNumber}/>
           <label >Exp Month</label>
           <input type="text" className="form-control" id="ExpMonth" name="expmonth" placeholder="September" onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.ExpMonth}/>
           
               <label >Exp Year</label>
               <input type="text" className="form-control" id="ExpYear" name="expyear" placeholder="2018"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.ExpYear}/>
             
             
               <label>CVV</label>
               <input type="text" className="form-control" id="CVV" name="cvv" placeholder="352"  onChange={(p) => {this.props.continuecheck(p)}} defaultValue={check.CVV}/>
            
         </div>
         </div>
                ))}
         <label>
         <input type="checkbox" className=""  name="sameadr" /> Shipping address same as billing
        </label>       
        <button type="submit" value="Continue to checkout" onClick={() => { this.props.handleEditClick(this.props.editProduct) }}>Continue to checkout</button>  
            </div>
        )
    }
   }

export default Checkout;
