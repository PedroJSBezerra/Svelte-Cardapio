import { writable } from 'svelte/store'
import { pizzas as data } from './pizzas'

export let logoHide = writable(false)
export let filteredItems = writable(data)