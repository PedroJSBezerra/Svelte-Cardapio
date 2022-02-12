<script>
  import { menuOpen, setMenu } from '../../store'
  const menuToggle = () => {
    setMenu(!$menuOpen)
  }
</script>

<div class={$menuOpen? "nav-button --open":"nav-button"} on:click={menuToggle} tabindex="0">
  <span/>
  <span/>
  <span/>
</div>

<style lang="scss">
  
  .nav-button {
    align-items: center;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 3;
    position: relative;

    span {
      display: block;
      width: 25px;
      height: 3px;
      background: var(--text-white);
      border-radius: 2px;
      position: absolute;
      transition: all .3s ease;

      &:nth-child(1){
        transform: translateY(-8px);
      }

      &:nth-child(3){
        transform: translateY(8px);
      }
    }

    &.--open {
      span {
        background: var(--text-white);

        &:nth-child(1){
          transform: rotateZ(45deg);
        }

        &:nth-child(2){
          opacity: 0;
        }

        &:nth-child(3){
          transform: rotateZ(-45deg);
        }
      }
    }
  }
</style>