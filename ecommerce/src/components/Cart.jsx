import React from 'react'
import {useContext} from 'react';
import {MyContext} from '../context/CartContext';

export default function Cart() {
  const { cartCount, itemsCart } = useContext(MyContext);

  return (
    <>
      <div>{JSON.stringify({itemsCart})}</div>
    </>
  )
}
