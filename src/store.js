//======== imports
import { writable } from 'svelte/store'
import { pizzas as data } from './pizzas'

//========= vars
export let filteredItems = writable(data)
export let menuOpen = writable(false)

//========= functions
export const setMenu = (value) => {
  menuOpen.set(value)
}

export const search = (event) => {
  let query = event.target.value

  const filteredItem = data.filter(item => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.ingredients.toLowerCase().includes(query.toLowerCase())
    )
  })
  
  filteredItems.set(filteredItem)
}