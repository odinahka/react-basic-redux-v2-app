import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import styles from './CartButton.module.css';

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }
  return (
    <button className={styles.button} onClick = {toggleCartHandler} disabled = {totalQuantity === 0}>
      <span>My Cart</span>
      <span className={styles.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
