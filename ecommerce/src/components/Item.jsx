import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Item({item}) {

    const {id,title,stock} = item;
    useEffect(() =>{
    },[]);

    return (
    <>
    <Card>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            Id del producto: {id}
        </Card.Text>
        <Card.Text>
            <img src={item.img} style={{height: "200px", width: "200px"}}/><br/>
            <small className="text-muted">Stock: {stock}</small>
        </Card.Text>
        <Card.Text>
            <Link className="btn btn-primary"  role="button" to= {`/item/${id}`} style={ {color : "white"}}>Ver detalle</Link>
        </Card.Text>
        </Card.Body>
    </Card>
       
    </>
  )
}
