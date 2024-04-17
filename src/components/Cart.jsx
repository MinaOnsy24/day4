import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, removeSpecificProduct, removProducts } from '../store/Slices/Cart';
import './cart.css';

export default function Cart() {
  const cart = useSelector(state => state.Cart)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart)
  }, [cart]);

  const removeSpecificProductFromCart = (product) => {
    dispatch(removeSpecificProduct(product));

  }


  const removProductsFromCart = (product) => {
    dispatch(removProducts(product));

  }


  const addToCart = (product) => {
    dispatch(addProducts(product));

  }








  return (
    <div>
      <div className='row'>
        {
          cart && cart.map((item) => {
            return (
              <div className='col-lg-4 col-md-6 col-12' key={item.id}>
                <div className="card">
                  <img className="card-img-top" style={{ width: "150px", height: "150px" }} src={item.images[0]} alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.price * item.count}</p>
                    <p className="card-text">{item.count}</p>
                    <button className="btn btn-primary" onClick={() => { removeSpecificProductFromCart(item) }}>-</button>
                    <button className="btn btn-primary" onClick={() => { removProductsFromCart(item) }}>remove</button>
                    <button className="btn btn-primary" onClick={() => { addToCart(item) }}>+</button>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>

    </div>
  )
}
