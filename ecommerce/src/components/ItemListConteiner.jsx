import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

export default function ItemListConteiner({getting}) {

  const {id} = useParams();

  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    fetch("https://629ea27e461f8173e4d6a508.mockapi.io/api/mock_items/itemsmock")
    .then(res => res.json())
    .then(res =>
      {
        if( id!= undefined){
          setItemList(res.filter(element => element.category == id))
        }else{
          setItemList(res)
        }
      });
  }, [id]);


  return (
    <>
    <p>{getting}</p>
    <ItemList items={itemList}/>
    </>

  )
}
