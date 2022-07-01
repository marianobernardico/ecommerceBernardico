import React from 'react'
import { useState , useContext} from 'react';
import { Button , Alert, Card} from 'react-bootstrap';
import { MyContext } from '../context/CartContext';
import {addDoc, getFirestore, collection} from 'firebase/firestore';

export default function Checkout() {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [idOrder, setOrder] = useState('');


    const { cartCount,itemsCart} = useContext(MyContext);

    const db = getFirestore();
    const orderCollection = collection(db, 'orders')
    

    function handleClick(){
        console.log(name +" "+mail +" "+phone)
        const order = {
            buyer: {name, mail, phone, },
            items: itemsCart,
            total: cartCount
        }
        console.log(order)
        addDoc(orderCollection, order).then(({id} )=> setOrder(id));

        //hacer chequeos en email, numero (solo numeros), q tenga cosas en el carrito,nombre no vacio etc
        //si compra exitosa vacio carrito

        //importante para entrega final
        //guardar carrito en localstorage o algo de eso
        //responsive
        //deploy
        //validaciones en el form

    }

    return (
        <div>         
            <br></br>
            <Card className="text-center">
                <Card.Header>Finalizando tu compra</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <input onChange={(e)=> {setName(e.target.value)}} placeholder='ingrese name'></input><br></br>
                    <input onChange={(e)=> {setMail(e.target.value)}} placeholder='ingrese mail'></input><br></br>
                    <input onChange={(e)=> {setPhone(e.target.value)}} placeholder='ingrese phone'></input><br></br>
                    </Card.Text>
                    <Button onClick={()=> {handleClick()}}>Terminar compra</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <br></br>
            <Alert> El id de tu compra es: {idOrder}</Alert>
        </div>
    )
}
