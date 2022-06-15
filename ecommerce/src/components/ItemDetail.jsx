import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';

export default function ItemDetail({onAdd}) {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("https://629ea27e461f8173e4d6a508.mockapi.io/api/mock_items/itemsmock")
        .then(res => res.json())
        .then(res => setItem(res.find(x => x.id == id)));
      }, [id]);

    return (
    <>
      <Card style={{ width: '25rem' }}>
        <Card.Header>{item?.title}</Card.Header>
        <Card.Body>
          <Card.Title> 
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_745035-MLA46195705760_052021-F.webp" style={{height: "300px", width: "220px"}}/>
          </Card.Title>
          <Card.Title>Descripcion: {item?.description}</Card.Title>
          <Card.Text>
            Categoria: {item?.category}
            <ItemCount stock= {item?.stock} initial={1} onAdd={onAdd}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Stock: {item?.stock}</Card.Footer>
      </Card>
    </>
  )
}
