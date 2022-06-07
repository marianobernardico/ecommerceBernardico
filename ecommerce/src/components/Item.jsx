import React, { useEffect } from 'react'

export default function Item({item}) {

    useEffect(() =>{
    },[]);
    console.log("item")

    return (
    <>
        <div className="card" style={ {width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title" style={ {color : "black"}}>{item.id}</h5>
                <p className="card-text" style={ {color : "black"}}>{item.title}</p>
                <p className="card-text" style={ {color : "black"}}>{item.stock}</p>
                <button className="btn btn-primary" >Agregar </button><br/>
            </div>
        </div><br/>
    </>
  )
}
