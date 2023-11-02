import React from 'react'
import { useAppContext } from '../store/Store'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Book } from '../components/Book'

export const Index = () => {

  const store=useAppContext()
  return (
    <Layout>
      {store.items.map(item=> (
      <Book key={item.id} item={item}/>
      ))}
    </Layout>
  )
}
