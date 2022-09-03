import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from "../store/goodsSlice";
import Goods from '../companent/Goods';
import { increment, decrement, deleteCart } from '../store/cartSlice';



function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('add-to-cart'))
            dispatch(increment(t.getAttribute('data-key')));

        if (t.classList.contains('minus-from-cart'))
            dispatch(decrement(t.getAttribute('data-key')));
        if (t.classList.contains('delete-from-cart'))

            dispatch(deleteCart(t.getAttribute('data-key')));
        return true;
    }

    return (
        <>
            <div className="goods-field" onClick={clickHandler}>
                {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image}
                    articul={item.articul} key={item.articul} />)}
            </div>
        </>
    );

}

export default GoodsList;