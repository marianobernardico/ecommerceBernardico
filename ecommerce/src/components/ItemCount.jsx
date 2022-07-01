import {useEffect, useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button }from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {MyContext} from '../context/CartContext';

export default function ItemCount({item, initial}) {

    var [count, setCount] = useState();
    const {addItem, sumCount, restCount} = useContext(MyContext);

    useEffect(() => { 
        setCount(initial);
    }, []);

    useEffect(() => { 
        if(count < 0){
            setCount(1);
        };
        if(count>item.stock){
            alert("No queda mas stock :(")
            setCount(item.stock);
        }
    }, [count]);
    
    function addToCart(){
        addItem(item, count);
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
