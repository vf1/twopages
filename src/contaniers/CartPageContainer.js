
import { connect } from 'react-redux'
import CartPage from '../pages/CartPage'
import { removeFromCart, clearCart, setCartItemCount } from '../actions/cartActions';

const mapStateToProps = store => {
  return {
    products: store.cart.value,
    totalCount: store.cart.totalCount,
    totalPrice: store.cart.totalPrice,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    clearCart: () => dispatch(clearCart()),
    setCartItemCount: (name, count) => dispatch(setCartItemCount(name, count)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage)

