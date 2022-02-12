// Pages Routing
import Home from "./Home.svelte"
import Cardapio from "./Cardapio.svelte"
import Quemsomos from "./Quemsomos.svelte"
import Contato from "./Contato.svelte"
// Vars
export let linkList = [
  {
    name: "Início",
    url: "/"
  },
  {
    name: "Cardápio",
    url: "/cardapio"
  },
  {
    name: "Quem Somos",
    url: "/quemsomos"
  },
  {
    name: "Contato",
    url: "/contato"
  },
]
export let routes = {
  '/': Home,
  '/cardapio': Cardapio,
  '/quemsomos': Quemsomos,
  '/contato': Contato,
}