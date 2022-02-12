<script>
  import { search, setMenu } from '../../store'
  import { push } from 'svelte-spa-router'
  // import { location } from 'svelte-spa-router'
  
  export const focusin = () => {
    setMenu(false)
    //router navigate to path
    push("/cardapio")
  }
  
  export const focusout = (event) => {
    // if($location != 'cardapio') event.target.value = ''
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