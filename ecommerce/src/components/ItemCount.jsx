import React, { useEffect, useState } from 'react'

export default function ItemCount({stock, initial, onAdd}) {

    var [count, setCount] = useState();

    useEffect(() => { 
        setCount(initial);
    }, []);

    useEffect(() => { 
        if(count < 0){
            setCount(0);
        };
        if(count>stock){
            alert("No queda mas stock :(")
            setCount(stock);

        }
    }, [count]);

    return (
        <>
        <div className="card" style={ {width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title" style={ {color : "black"}}>Item</h5>
                <button className="btn btn-primary" onClick={() => {setCount(count+1)}}>+</button>
                <p className="card-text" style={ {color : "black"}}>{count}</p>
                <button className="btn btn-primary" onClick={() => {setCount(count-1)}}>-</button><br/>
                <button className="btn btn-primary" onClick={() => {onAdd(count)}}>Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}
