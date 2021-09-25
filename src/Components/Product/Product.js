import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    const { name, price, seller, img, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>

            <div className="">
                <h3 className="product-name">Name: {name}</h3>
                <p><small>by: {seller}</small></p>
                <h5>${price}</h5>
                <p>Only {stock} remainging in stock - order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                />
                <br />
                <br />
                <button onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular">{cartIcon}Add to cart</button>
            </div>


        </div>
    );
};

export default Product;