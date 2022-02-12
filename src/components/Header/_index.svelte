<script>
  //Components
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
  import Search from './Search.svelte'
  import Button from './Button.svelte'
  import Menu from './Menu.svelte'
  //Images
  import logo from '../../media/logomarca-restaurante-japones.jpg'
  //External vars
  export let link
  export let linkList
  //Functions
  let open = false
  let toggle = () => open = !open

</script>

<header class="header">
  <Logo {logo} {link}/>
  <Nav {open}>
    <Search />
    <Button {open} {toggle} />
  </Nav>
  <Menu {link} {linkList} {open} {toggle} />
</header>

<style lang="scss">
</style>