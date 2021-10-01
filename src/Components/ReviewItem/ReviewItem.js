import React from 'react';

const ReviewItem = (props) => {
    const { key, name, price, quantity } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            {/* <div className="">
                <img src={img} alt="" />
            </div> */}
            <div className="">
                <h4 className="product-name">Name: {name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">
                    Remove
                </
                button>
            </div>
        </div>
    );
};

export default ReviewItem;