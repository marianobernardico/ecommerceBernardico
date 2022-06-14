import React, { useEffect } from 'react'
import Item from './Item';

export default function ItemList({items}) {

    useEffect(() =>{
    },[]);
    return (
    <>
    <div className="card-group">
      {items.map((item)=> <div> <Item item = {item}/> </div>)}
    </div>
    </>
  )
}
