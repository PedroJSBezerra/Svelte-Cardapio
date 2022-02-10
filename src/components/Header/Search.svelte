<script>
  import { filteredItems, items } from '../../store'
  export let search = (event) => {
  let query = event.target.value
  const filteredItem = items.filter(item => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
  })
  filteredItems.set(filteredItem)
}
</script>

<input 
  on:keyup={search}
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