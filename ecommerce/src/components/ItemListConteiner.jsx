import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

export default function ItemListConteiner({getting}) {

  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    console.log("ItemListConteiner")
    const items = new Promise((res, rej) => {
      setTimeout(()=>{
        res = [
          {title: "Item 1", img: "imagen 🤯", description: "hehe", stock: 5},
          {title: "Item 2", img: "imagen 🤯", description: "hehe", stock: 2},
          {title: "Item 3", img: "imagen 🤯", description: "hehe", stock: 5}
        ]
        console.log(res)
      }, 1000);
    });

    console.log("acaaaa")
    console.log(itemList);
    items.then((result)=>{
      console.log("then :v")
      console.log(result);
      setItemList(result);
    });
    /*.catch((error)=>{
      console.log(error);
    });*/
    
  }, []);
  
  
  return (
    <>
    <p>{getting}</p>
    <ItemList items={itemList}/>
    </>
    

  )
}
