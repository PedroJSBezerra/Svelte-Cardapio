<script>
  import { filteredItems } from "../store"
  import pizza from '../media/pizza__noimg.jpg'
  import {fade, fly} from 'svelte/transition'

</script>

<ul class="list">
  <h2>Cardápio</h2>
  
  {#each $filteredItems as item}
    <li 
      class="item"
      in:fly={{y:300, duration: 300}} 
      out:fade={{duration: 300}} 
      >
      <h3 class="item__name">{item.name}</h3>
      <span class="item__image" style="background: url({pizza});" alt=""></span>
      <div class="item__info">
        {#each item.variant as item}
          <div class="price">
            <p class="price__size">{item.name}</p>
            <p class="price__price">{item.price},00</p>
          </div>
        {/each}
        <p class="description">{item.ingredients}</p>
      </div>
    </li>
  {/each}
</ul>

<style lang="scss">
  .list {
    .item {
      display: flex;
      margin: 16px 4px;
      flex-wrap: wrap;
      border-radius: 10px;
      padding: 4px;
      background: var(--shadow-black);
      box-shadow: 2px 6px 1rem rgb(0 0 0 / 54%);
      
      &__name {
        padding: 4px 0;
        width: 100%;
        text-transform: capitalize;
      }

      &__image {
        width: 150px;
        height: 150px;
        background-size: cover !important;
      }

      &__info {
        width: calc(100% - 150px);
        height: 150px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 4px;

        .price {
          background: var(--shadow-black);
          border-radius: 4px;
          height: fit-content;
          padding: 4px;

          &__size {
            text-align: center;
          }
          
          &__price {
            text-align: center;
          }
        }

        .description {
          width: 100%;
        }
      }
    }
  }
</style>