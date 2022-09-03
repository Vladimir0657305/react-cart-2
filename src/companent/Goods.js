import React from 'react';

function Goods(props) {
    return (
        <>
            <div className="goods-block">
                <img src={props.image} alt="" />
                <p>{props.title}</p>
                <p>{props.cost}</p>
                <button className="add-to-cart" data-key={props.articul}>Add to cart</button>
                <button className="minus-from-cart" data-key={props.articul}>Minus from cart</button>
                <button className="delete-from-cart" data-key={props.articul}>Delete</button>
            </div>
        </>
    );
}

export default Goods;