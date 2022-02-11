import { writable } from 'svelte/store'
import { pizzas as data } from './pizzas'

export let filteredItems = writable(data)

export let search = (event) => {
  let query = event.target.value

  const filteredItem = data.filter(item => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.ingredients.toLowerCase().includes(query.toLowerCase())
    )
  })
  
  filteredItems.set(filteredItem)
}


