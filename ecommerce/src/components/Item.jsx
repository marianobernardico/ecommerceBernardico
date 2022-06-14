import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';

export default function Item({item}) {

    const {id,title,stock} = item;
    useEffect(() =>{
    },[]);

    return (
    <>
        <div className="card" style={ {width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title" style={ {color : "black"}}>{id}</h5>
                <p className="card-text" style={ {color : "black"}}>{title}</p>
                <p className="card-text" style={ {color : "black"}}>{stock}</p>
                <Link className="btn btn-blue"  role="button" to= {`/item/${id}`} style={ {color : "black"}}>Ver detalle</Link>
            </div>
        </div><br/>
    </>
  )
}
