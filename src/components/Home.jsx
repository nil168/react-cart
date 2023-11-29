import React from 'react';
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
  const productList = [
    {
      name: 'Fountain Pen',
      price: 80,
      imgSrc: img1,
      id: 'product_fountain_pen',
    },
    {
      name: 'Notebook',
      price: 20,
      imgSrc: img2,
      id: 'product_notebook',
    },
  ];
  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: 'addToCart', payload: options });
    toast.success('Added to cart');
    dispatch({ type: 'calculatePrice'});
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button
      onClick={() => handler({ name, price, quantity: 1, imgSrc,id })}
    >
      Add to cart
    </button>
  </div>
);

export default Home;
