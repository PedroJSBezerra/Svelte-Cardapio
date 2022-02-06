<script>
  // Libs
  import Router, { link } from 'svelte-spa-router'
  // Components
  import Header from "./components/Header/_index.svelte"
  import Main from "./components/Main.svelte"
  import Footer from "./components/Footer.svelte"
  // Pages Routing
  import Home from "./pages/Home.svelte"
  import Cardapio from "./pages/Cardapio.svelte"
  import Quemsomos from "./pages/Quemsomos.svelte"
  import Contato from "./pages/Contato.svelte"
  // Vars
  let linkList = [
    {
      name: "Início",
      url: "/"
    },
    {
      name: "Cardápio",
      url: "/cardapio"
    },
    {
      name: "Quem Somos",
      url: "/quemsomos"
    },
    {
      name: "Contato",
      url: "/contato"
    },
  ]
  let routes = {
    '/': Home,
    '/cardapio': Cardapio,
    '/quemsomos': Quemsomos,
    '/contato': Contato,
  }
</script>

<div class="app">
  <Header {link}{linkList}/>
  <Main>
    <Router routes={routes} />
  </Main>
  <Footer />
</div>

<style lang="scss">
  :root{
    --primary-white: rgb(255, 240, 240);
    --primary-black: #333;
    --text-white: rgb(255, 240, 240);
    --text-black: #333;
    --shadow-white: rgba(255 255 255 /20%);
    --shadow-black: rgba(0 0 0 /20%);

    --primary-red: #ff2136;
    --primary-red-bg: #ff2136;

    --linear-gradient: linear-gradient(175deg,rgba(230, 80, 34, 0.644) 5%,rgba(115, 66, 228, 0.541) 70%);
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

</style>
