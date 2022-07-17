import React from 'react'
import {useContext} from 'react';
import {MyContext} from '../context/CartContext';
import {Card, Button} from 'react-bootstrap';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Cart() {
  const {itemsCart, clear, sumCount, restCount, removeItem} = useContext(MyContext);

  useEffect(()=> {
  }, [itemsCart]);

  const sumValues = (price, quantity) => {
    return price*quantity;
  }

  const returnTotalImport = () => {
    var totalValue = 0;
    itemsCart.map((item)=> (
      totalValue += sumValues(item.price, item.quantity)
    ));
    return totalValue;
  }

  const body = <>{itemsCart.map((item)=> (
    <Card>
      <Card.Body>
      <img src={item.img} style={{height: "50px", width: "50px"}}/>
      {item.quantity + " x " + item.title+ " / "}
      {"Precio unitario: $" + item.price + " / "}
      {"Precio total: $" + sumValues(item.price, item.quantity) + "  "}
      <Button variant="primary" onClick={() => {sumCount(item.id)}}>+</Button>
      {" " + item.quantity + " "}
      <Button variant="primary" onClick={() => {restCount(item.id)}}>-</Button>
      {" "}
      <Button variant="primary" onClick={() => {removeItem(item.id)}}>Borrar</Button>
      </Card.Body>
    </Card>
  ))}</>;

  const emptyCart =
  <>
  No hay elementos en el carrito <br/>
  <Link className="btn btn-primary" role="button" to= {`/`} style={ {color : "white"}}>Volver al inicio</Link>
  </>

  return (
    <>
      <Card>
        <Card.Header>Carrito</Card.Header>
        <Card.Body>
          {itemsCart.length != 0 ? body: emptyCart}
        </Card.Body>
        <Card.Footer className="text-muted">
          Importe total : ${returnTotalImport()}
        </Card.Footer>
        <Card.Footer className="text-muted">
          <Link className="btn btn-primary" role="button" to= {`/checkout`} style={ {color : "white"}}>Finalizar compra</Link>
          <Button variant="primary" onClick={() => {clear()}}>Vaciar carrito</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
