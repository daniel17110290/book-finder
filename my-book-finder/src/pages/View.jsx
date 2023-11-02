import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../store/Store'

export const View = () => {

  const [item, setItem] = useState(null)

  const params=useParams()
  const store=useAppContext()

  useEffect(()=>{
    const book=store.getItem(params.bookId)
    setItem(book)
  }, [])

  if(!item){
    return <layout>Item not found</layout>
  }
  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item.cover} width="500" alt=''/> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "Leido ✔"   : "por terminar 🚫"   }</div>
      <div>{item?.review}</div>
    </Layout>
  )
}
