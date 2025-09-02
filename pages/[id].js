/*[id].js*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import data from '../db/data.json';
import { getCart, addToCart, removeFromCart} from '../components/Cart';
import SimilarProducts from '../components/similar';
import Header from '../components/header';
import Footer from '../components/footer';

function Product({ product }) {
  const products = data.data;
  const { id, title, description, price, currency, image, availableSizes = [], availableColors = [] } = product;
  const [cartItems, setCartItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState(availableSizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(availableColors[0] || '');
  
  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, []);
  
  const router = useRouter();
  const isProductInCart = cartItems.some((item) => item.id === id);
  const GRABBER = isProductInCart ? 'Remove from cart': 'Add to cart';
  const handleAddToCart = () => {
    const cartItem = { ...product, selectedSize, selectedColor };
    if(isProductInCart) {
      removeFromCart(product);
    } else {
      addToCart(cartItem);
    }
    router.push('/cart'); 
  };  
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <main className="productPage">
        <div className="grid-container">
          <div className="image-container">
            <Image width={500} height={500} src={image} alt={title} />
          </div>
          <div className="details-container">
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <p>
              <strong>
                {currency} {price}
              </strong>
            </p>
            {availableSizes.length > 0 && (
              <div className="option-group">
                <label className="option-label">Size</label>
                <div className="option-values">
                  {availableSizes.map((sz) => (
                    <button
                      key={sz}
                      className={`option-chip ${selectedSize === sz ? 'active' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {availableColors.length > 0 && (
              <div className="option-group">
                <label className="option-label">Color</label>
                <div className="option-values">
                  {availableColors.map((c) => (
                    <button
                      key={c}
                      className={`option-chip ${selectedColor === c ? 'active' : ''}`}
                      onClick={() => setSelectedColor(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              className={isProductInCart ? 'whiteButton' : 'buyButton'}
              onClick={handleAddToCart}
              disabled={(availableSizes.length && !selectedSize) || (availableColors.length && !selectedColor)}
            >{GRABBER}
            </button>
          </div>
        </div>
        <SimilarProducts currentProduct={product} />
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = data.data.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const product = data.data.find((product) => product.id === id);
  if (!product) {
    return {
      props: {},
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default Product;
