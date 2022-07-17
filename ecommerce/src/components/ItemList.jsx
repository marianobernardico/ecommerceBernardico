import React, { useEffect } from 'react'
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

export default function ItemList({items}) {

    useEffect(() =>{
    },[]);
    return (
    <>
    <Row xs={1} md={3} className="g-4">
      {items.map((item)=> (
        <Col>
          <Item item = {item}/>
        </Col>
      ))}
    </Row>
    </>
  )
}
