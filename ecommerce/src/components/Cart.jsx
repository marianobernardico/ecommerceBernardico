import React from 'react'
import {useContext} from 'react';
import {MyContext} from '../context/CartContext';
import ItemCount from './ItemCount';
import {Card, Button, Col} from 'react-bootstrap';
import Item from './Item';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Cart() {
  const { cartCount,itemsCart, clear, sumCant, restCant, removeItem} = useContext(MyContext);

  useEffect(()=> {
  }, [itemsCart]);

  const sumValues = (price, quantity) => {
    return price*quantity;
  }

  const returnTotalImport = () => {
    var totalValue = 0;
    var totalItems = 0;
    itemsCart.map((item)=> (
      totalValue += sumValues(item.price, item.quantity)
    ));
    return totalValue;
  }

  const body = <>{itemsCart.map((item)=> (
    <Card>
      <Card.Body>
      <img src="https://http2.mlstatic.com/D_NQ_NP_2X_745035-MLA46195705760_052021-F.webp" style={{height: "50px", width: "50px"}}/>
      {item.quantity + " x " + item.title+ " / "}
      {"Precio unitario: $" + item.price + " / "}
      {"Precio total: $" + sumValues(item.price, item.quantity) + "  "}
      <Button variant="primary" onClick={() => {sumCant(item.id)}}>+</Button>
      {" " + item.quantity + " "}
      <Button variant="primary" onClick={() => {restCant(item.id)}}>-</Button>
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
          <Button variant="primary" onClick={() => {}}>Finalizar Compra</Button>
          <Button variant="primary" onClick={() => {clear()}}>Vaciar carrito</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
