import React from 'react'
import {useEffect} from 'react';

export default function ItemDetail({itemDetail}) {

  return (
    <>
    <div className="card mb-3">
        <div className="row no-gutters">
            <div class="col-md-4">
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_745035-MLA46195705760_052021-F.webp" style={{height: "600px", width: "420px"}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body" style={{color:"black",height: "700px", width: "800px"}}>
                <h1 className="card-title" style={{height: "100px"}}>{itemDetail?.title}</h1>
                <p className="card-text" style={{height: "100px"}}>{itemDetail?.description}</p>
                <p className="card-text" style={{height: "100px"}}><small class="text-muted">Stock: {itemDetail?.stock}</small></p>
            </div>
            </div>
        </div>
    </div> 
    </>
  )
}
