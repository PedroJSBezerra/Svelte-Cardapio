<script>
  import { menuOpen } from '../../store'
</script>

<nav class={menuOpen? "nav --open":"nav"}>
  <slot><!-- optional fallback --></slot>
</nav>

<style lang="scss">
  .nav {
    background: var(--primary-red);
    display: flex;
    justify-content: flex-end;
    padding: 8px;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
  }
</style>