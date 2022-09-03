import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";
import Goods from '../companent/Goods';
import { decrement, deleteCart } from '../store/cartSlice';


function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // переиндексируем массив
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})



    let clickHandler = (event) => {

        event.preventDefault();
        let t = event.target;
        //  284s,2s8d
        if (t.classList.contains('minus-from-cart')) {
            dispatch(decrement(t.getAttribute('data-key')));
        }

        if (t.classList.contains('delete-from-cart'))
            dispatch(deleteCart(t.getAttribute('data-key')));
        return false;
    }




    // let lst = ["km-m", "km-cm", "km-mm"];
    // console.log(Object.fromEntries(lst.map(m => [m, Object.fromEntries(m.split('-').map(s => [s, 0]))])));

    let sum = [];
    sum = Object.keys(cart).map(item => goodsObj[item]['cost'] * cart[item]).reduce((prev, curr) => prev + curr, 0)
    // sum1 += sum.reduce((prev, curr) => prev + curr, 0)

    return (
        <>
            <div className="cart-field" onClick={clickHandler}>
                <h1>Корзина</h1>
                <table>
                    <tbody>
                        <tr><th>Articul</th><th>Cost</th><th>Count</th><th>Total</th></tr>
                        {Object.keys(cart).map(item => <tr><th key={item + 1}>{goodsObj[item]['title']}</th><th key={item + 2}>{goodsObj[item]['cost']}</th><th key={item + 3}>{cart[item]}</th><th key={item + 4}>{goodsObj[item]['cost'] * cart[item]}</th>
                            <td><img src={goodsObj[item]['image']} alt="" /> </td>
                            <td><button className="minus-from-cart " data-key={goodsObj[item]['articul']} key={item + 5}>Minus from cart</button>
                                <button className="delete-from-cart" data-key={goodsObj[item]['articul']} key={item + 6}>Delete from cart</button></td>
                        </tr>)}
                        <tr><th>Total </th><th>     </th><th>     </th><th key={sum + 7}>{sum}</th></tr>
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default CartList;