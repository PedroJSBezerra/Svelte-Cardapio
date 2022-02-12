<script>
  export let link
  export let logo
  import { logoHide } from '../../store'
</script>

<a class={$logoHide? "logo --hidden":"logo"} use:link href="/">
  <img class="logo__image" src={logo} href="/" alt="">
</a>

<style lang="scss">
  .logo {
    display: flex;
    height: 200px;
    overflow: hidden;
    transition: all .3s ease;
    
    &.--hidden {
      height: 0;
    }
  }
  
  .logo__image {
    width: 100%;
  }

</style>