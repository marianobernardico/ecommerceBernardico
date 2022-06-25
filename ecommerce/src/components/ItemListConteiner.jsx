import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

export default function ItemListConteiner({getting}) {
  
  const [itemList, setItemList] = useState([]);
  const {id} = useParams();
  const db = getFirestore();
  const collections = 'products';
  var collectionItems = null;

  if(id != undefined){
    collectionItems = query(
      collection(db, collections),
      where("category", "==", id))
  }else{
    collectionItems = collection(db, collections);
  }

  useEffect(() => {
    getDocs(collectionItems)
      .then((res) =>
      {
        setItemList(res.docs.map(doc=>({id:doc.id, ...doc.data()})))
      });
    
  }, [id]);


  return (
    <>
    <p>{getting}</p>
    <ItemList items={itemList}/>
    </>

  )
}
