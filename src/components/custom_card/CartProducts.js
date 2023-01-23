import React,{useContext} from 'react'
import {shopContext} from '../context/Shop_context';

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
const CartProducts = (props) => {
    const {cartItems ,removeFromcart , addTocart,removeAllFromcart, updateCartItemCount} = useContext(shopContext);
    const {id, sale, photo,productName,productPrice,ProductDescription} = props.item;
  
  return (
   
 
<>
<MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        src={photo}
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <MDBTypography tag="h6" className="text-muted">
                        {productName}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                      <MDBBtn color="link" className="px-2" onClick={() => removeFromcart(id)}>
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput type="number" min="0" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} size="sm" />

                      <MDBBtn color="link" className="px-2" onClick={() => addTocart(id)}>
                        <MDBIcon fas icon="plus"/>
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                      <MDBTypography tag="h6" className="mb-0">
                       {productPrice}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                        <MDBIcon fas icon="times" onClick={() => removeAllFromcart(id)}/>
                      </a>
                    </MDBCol>
                  </MDBRow>
                  <hr className="my-4" />


</>
 


  
  )
}

export default CartProducts