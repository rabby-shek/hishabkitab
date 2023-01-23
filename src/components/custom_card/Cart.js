
import React,{useContext} from 'react'
import { CartProvider } from 'react-use-cart';
import { useCart } from 'react-use-cart';
import {PRODUCTS} from './products'
import {shopContext} from '../context/Shop_context';
import CartProducts from './CartProducts';
import Navbar from '../navbar';

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

const Cart = () =>{
    const {cartItems, getTotalCartAmount , getTotalCartItem} = useContext(shopContext);


   const totalamount = getTotalCartAmount();
   const totalItem = getTotalCartItem();
 

   
    return(
        <>

        <Navbar />
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol size="12">
        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
          <MDBCardBody className="p-0">
            <MDBRow className="g-0">
              <MDBCol lg="8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                      Shopping Cart
                    </MDBTypography>
                    <MDBTypography className="mb-0 text-muted">
                      {totalItem} items
                    </MDBTypography>
                  </div>

                  <hr className="my-4" />
                  {
                    
        PRODUCTS.map((product) =>{
            if(cartItems[product.id] !==0)
            {

                return <CartProducts  item={product}/>

            }
           
           

        })
       }

                

                  <hr className="my-4" />

                  <div className="pt-5">
                    <MDBTypography tag="h6" className="mb-0">
                      <MDBCardText tag="a" href="#!" className="text-body">
                       <Link to='/shop'> <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                        to shop</Link>
                      </MDBCardText>
                    </MDBTypography>
                  </div>
                </div>
              </MDBCol>
              <MDBCol lg="4" className="bg-grey">
                <div className="p-5">
                  <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                    Summary
                  </MDBTypography>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4">
                    <MDBTypography tag="h5" className="text-uppercase">
                      items {totalItem}
                    </MDBTypography>
                    <MDBTypography tag="h5">{totalamount}</MDBTypography>
                  </div>

                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Shipping
                  </MDBTypography>

                  <div className="mb-4 pb-2">
                    <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                      <option value="1">Standard-Delivery- €5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Give code
                  </MDBTypography>

                  <div className="mb-5">
                    <MDBInput size="lg" label="Enter your code" />
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-5">
                    <MDBTypography tag="h5" className="text-uppercase">
                      Total price
                    </MDBTypography>
                    <MDBTypography tag="h5">{totalamount}</MDBTypography>
                  </div>

                  <MDBBtn color="dark" block size="lg">
                    Register
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
    
    
      
        </>
    )

}

export default Cart