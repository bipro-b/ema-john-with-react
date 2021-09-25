import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            });
    }, []);

    useEffect(() => {
        const savedCart = getStoredCart();

        if (products.length) {
            const storedCart = [];
            for (const key in savedCart) {

                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }
    }, [products]) //dependency 
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // Save to local any range 
        addToDb(product.key);

    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProduts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchProduts);

    }
    return (
        <>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Search product" />
            </div>
            <div className="shop-container">
                <div className="product-container">

                    {
                        displayProducts.map(product => <Product product={product} key={product.key}
                            handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
};

export default Shop;