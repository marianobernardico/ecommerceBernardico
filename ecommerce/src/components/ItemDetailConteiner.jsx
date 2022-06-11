import React from 'react'
import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

export function ItemDetailConteiner() {

    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        fetch("https://629ea27e461f8173e4d6a508.mockapi.io/api/mock_items/itemsmock")
        .then(res => res.json())
        .then(res =>setItemList(res))
        .catch(error => console.log(error));
    
    }, []);

  return (
   <>
   <ItemDetail itemDetail={itemList[1]}/>
   </>
  )
}
