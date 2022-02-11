<script>
  import { filteredItems } from "../store"
  import pizza from '../media/pizza__noimg.jpg'
</script>

<ul class="list">
  <h2>Cardápio</h2>
  {#each $filteredItems as item}
    <li class="item">
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
      background: rgb(248, 177, 148);
      display: flex;
      margin: 16px 0;
      flex-wrap: wrap;

      &>*{
        background: var(--shadow-black);
      }
      
      &__name {
        text-transform: capitalize;
        width: 100%;
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

        .price {
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