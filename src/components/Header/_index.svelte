<script>
  //Components
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
  import Search from './Search.svelte'
  import Button from './Button.svelte'
  import Menu from './Menu.svelte'

</script>

<header class="header">
  <Logo />
  <Nav >
    <Search />
    <Button />
  </Nav >
  <Menu />
</header>

<style lang="scss">
</style>