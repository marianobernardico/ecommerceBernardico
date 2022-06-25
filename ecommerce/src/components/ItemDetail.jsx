import React from 'react'
import {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

export default function ItemDetail() {
    const {id} = useParams();
    const [item, setItem] = useState({});

    const collection = 'products';
    const db = getFirestore();

    const docIphone = doc( db, collection, id);
    

    useEffect(() => {

        getDoc(docIphone).then((res)=> {
          if(res.exists()){
            setItem({...res.data(), id: res.id});
          }else{
            console.log("no se encontro el producto")
          }
    
        });
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
            <ItemCount item= {item} initial={1}/>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Stock: {item?.stock}</Card.Footer>
      </Card>
    </>
  )
}
