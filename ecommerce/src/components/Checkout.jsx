import React from 'react'
import { useState , useContext} from 'react';
import { Button , Alert, Card} from 'react-bootstrap';
import { MyContext } from '../context/CartContext';
import {addDoc, getFirestore, collection} from 'firebase/firestore';

export default function Checkout() {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [finalMessage, setFinalMessage] = useState('');
    const { cartCount, clear,itemsCart} = useContext(MyContext);

    const db = getFirestore();
    const orderCollection = collection(db, 'orders')
    

    function handleClick(){
        if(validateData(name, mail,phone)){
            const order = {
                buyer: {name, mail, phone, },
                items: itemsCart,
                total: cartCount
            }
            addDoc(orderCollection, order).then(({id} )=>{setFinalMessage( "Su compra fue exitosa, su id es:"+id);});
            clear();
        }
    }

    function validateData (name, mail,phone){
        let ret = true;
        if(name == ''){
            alert("Debe ingresar un nombre")
            ret = false;
        }
        if(validateEmail(mail)==null){
            alert("Debe ingresar un mail correcto")
            ret = false;

        }
        if(phone == '' || isNaN(phone)){
            alert("Debe ingresar un telefono correcto")
            ret = false;
        }
        return ret;
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    return (
        <div>         
            <br></br>
            <Card className="text-center">
                <Card.Header>Finalizando tu compra</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <input onChange={(e)=> {setName(e.target.value)}} placeholder='Ingrese un nombre'></input><br></br>
                    <input  onChange={(e)=> {setMail(e.target.value)}} placeholder='Ingrese un email'></input><br></br>
                    <input onChange={(e)=> {setPhone(e.target.value)}} placeholder='Ingrese un telefono'></input><br></br>
                    </Card.Text>
                    <Button onClick={()=> {handleClick()}}>Terminar compra</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <br></br>
            <Alert>{finalMessage}</Alert>
        </div>
    )
}
