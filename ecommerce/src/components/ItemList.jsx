import React, { useEffect } from 'react'
import Item from './Item';

export default function ItemList({items}) {

    useEffect(() =>{
    },[]);
    return (
    <>
    {items?.map((item)=><Item item = {item}/>)}
    </>
  )
}
