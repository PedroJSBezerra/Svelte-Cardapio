<script>
  export let link
  export let linkList
  export let open
  export let toggle
</script>

<ul class={open? "nav-menu --open":"nav-menu"} on:click={toggle}>
  {#each linkList as item}
    <li class="item">
      <a tabindex={!open? 1:0} class="item__link" use:link href={item.url}>{item.name}</a>
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