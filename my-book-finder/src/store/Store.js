import React, {createContext, useContext, useEffect, useState} from 'react'

const AppContext=createContext({
  items:[],
  createItem:(item)=>{},
  getItem:(id)=>{},
  updateItem:(item)=>{}
})

export const Store = ({children}) => {

  const [items, setItems] = useState([])

  const createItem=(item)=>{
    const temp=[...items]
    temp.push(item)
    setItems(temp)
  }

  const getItem=(id)=>{
    const item=items.find((item) => item.id===id)

    return item
  }

  const updateItem=(item)=>{
    const index=items.findIndex((i) => i.id===item.id)
    const temp=[...items]

    temp[index]={...item}
  }

  return <AppContext.Provider 
  value={{
    items,
    createItem,
    getItem,
    updateItem
  }}>
    {children}
  </AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
