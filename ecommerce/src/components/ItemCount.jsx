import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button }from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ItemCount({stock, initial, onAdd}) {

    var [count, setCount] = useState();

    useEffect(() => { 
        setCount(initial);
    }, []);

    useEffect(() => { 
        if(count < 0){
            setCount(1);
        };
        if(count>stock){
            alert("No queda mas stock :(")
            setCount(stock);
        }
    }, [count]);

    function addToCart(){
        onAdd(count);
        setCount(1);
        return ;
    };

    return (
        <>
        <Card>
            <Card.Body>
            <Button variant="primary" onClick={() => {setCount(count+1)}}>+</Button>
            {"  " + count + "  "}
            <Button variant="primary" onClick={() => {setCount(count-1)}}>-</Button>
            </Card.Body>
            <Card.Body>
                <Button variant="primary" onClick={() => {addToCart()}}>Agregar al carrito</Button>
                <Link className="btn btn-primary"  role="button" to= {`/cart`} style={ {color : "white"}}>Terminar mi compra</Link>
            </Card.Body>
        </Card>
        </>
    )
}
