import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

// Components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

// Styles
import './cart-dropdown.styles.scss'

// Utils
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCardHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCardHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStatetoProps)(CartDropdown))
