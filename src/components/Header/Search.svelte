<script>
  import { filteredItems, logoHide } from '../../store'
  import { push } from 'svelte-spa-router'
  import { pizzas as data } from '../../pizzas'

  let search = (event) => {
    let query = event.target.value

    const filteredItem = data.filter(item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.ingredients.toLowerCase().includes(query.toLowerCase())
      )
    })
    
    filteredItems.set(filteredItem)
  }

  const focusin = () => {
    logoHide.set(true)
    //router navigate to path
    push("/cardapio")
  }
  const focusout = () => {
    logoHide.set(false)
  }
</script>

<input 
  on:keyup={search}
  on:focus={focusin}
  on:focusout={focusout}
  class="nav-search" 
  type="text"
  placeholder="Pesquise aqui ou abra o Cardápio -->"
>

<style>
  .nav-search {
    flex: 1;
    padding: 0.4rem 1rem;
    border-radius: 2px;
    border: none;
    outline: none;
  }
</style>