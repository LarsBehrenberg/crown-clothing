import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// Components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

// Styles
import './cart-dropdown.styles.scss'

// Utils
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStatetoProps)(CartDropdown)
