<script>
  import { filteredItems } from "../store"
</script>

<h1>Cardápio</h1>
<ul class="list">
  {#each $filteredItems as item}
    <li class="item">
      <h3 class="item__name">{item.name}</h3>
      <img class="item__image" src={item.imgUrl} alt="">
      <div class="item__info">
        {#each item.prices as item}
          <div class="price">
            <p class="price__size">{item.size}</p>
            <p class="price__price">{item.price},00</p>
          </div>
        {/each}
        <p class="description">{item.description}</p>
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
        width: 100%;
      }

      &__image {
        width: 150px;
        height: 150px;
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