import { writable } from 'svelte/store'

export let items = [
  {
    imgUrl: "",
    name: "Pizza de Calabreza",
    prices: [
      {
        size: "P",
        price: "13",
      },
      {
        size: "M",
        price: "18",
      },
      {
        size: "G",
        price: "22",
      },
    ],
    description: "Molho de tomate, mussarela, calabresa, cebola e orégano."
  },
  {
    imgUrl: "",
    name: "Pizza de frango",
    prices: [
      {
        size: "P",
        price: "13",
      },
      {
        size: "M",
        price: "18",
      },
      {
        size: "G",
        price: "22",
      },
    ],
    description: "Molho de tomate, mussarela, frango desfiado, cebola e orégano."
  },
  {
    imgUrl: "",
    name: "Pizza Portugueza",
    prices: [
      {
        size: "P",
        price: "13",
      },{
        size: "M",
        price: "18",
      },{
        size: "G",
        price: "22",
      },
    ],
    description: "Molho de tomate, mussarela, calabresa, ovo, frango desfiado, cebola e orégano."
  },
  {
    imgUrl: "",
    name: "Pizza de Chocolate",
    prices: [
      {
        size: "P",
        price: "13",
      },{
        size: "M",
        price: "18",
      },{
        size: "G",
        price: "22",
      },
    ],
    description: "Chocolate, mussarela, mms."
  },
]

export let filteredItems = writable(items)

