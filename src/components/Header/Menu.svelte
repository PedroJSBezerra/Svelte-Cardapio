<script>
  import { link } from 'svelte-spa-router'
  import { linkList } from '../../pages/routes'
  import { menuOpen, setMenu} from '../../store'
  
  const menu = () => {
    setMenu(false)
  }
</script>

<ul class={$menuOpen? "nav-menu --open":"nav-menu"} on:click={menu}>
  {#each linkList as item}
    <li class="item">
      <a tabindex={!menuOpen? 1:0} class="item__link" use:link href={item.url}>{item.name}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .nav-menu {
    background: var(--primary-red);
    height: 0;
    list-style-type: none;
    overflow: hidden;
    transition: all .3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &.--open {
      height: 220px;
    }
  }

  .item {
    &__link {
      color: inherit;
      display: block;
      padding: 1rem;
      text-decoration: none;
      font-weight: 700;
      color: var(--text-white);

      &:hover {
        background: var(--shadow-black);
      }
    }
  }
</style>