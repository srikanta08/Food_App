import React, { useContext } from 'react'
import "./Cart.css"

import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const { cartItems, food_list, removeFormCard, getTotalCartAmount } = useContext(StoreContext);

  const navigate =useNavigate()



  return (
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className="card-items-title card-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p onClick={()=>removeFormCard(item.id)} className='corss'>X</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h1>Card Totals</h1>
          <div>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:5}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="card-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='card-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
