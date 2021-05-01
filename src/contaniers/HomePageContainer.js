
import { connect } from 'react-redux'
import HomePage from '../pages/HomePage'
import { addToCart } from '../actions/cartActions';

const mapStateToProps = store => {
  return {
    isFetching: store.products.isFetching,
    error: store.products.error,
    products: store.products.value,
    cartCount: store.cart.totalCount,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

