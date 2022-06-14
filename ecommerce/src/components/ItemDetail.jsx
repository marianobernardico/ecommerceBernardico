import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({itemDetail}) {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("https://629ea27e461f8173e4d6a508.mockapi.io/api/mock_items/itemsmock")
        .then(res => res.json())
        .then(res => setItem(res.find(x => x.id == id)));
      }, [id]);

    return (
    <>
    <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_745035-MLA46195705760_052021-F.webp" style={{height: "300px", width: "220px"}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body" style={{color:"black",height: "700px", width: "800px"}}>
                <h1 className="card-title">{item?.title}</h1>
                <p className="card-text">{item?.description}</p>
                <p className="card-text">{item?.category}</p>
                <p className="card-text"><small className="text-muted">Stock: {item?.stock}</small></p>
                <ItemCount stock= {item?.stock} initial={1} />
            </div>
            
            </div>
        </div>
    </div> 
    </>
  )
}
