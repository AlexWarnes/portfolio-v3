<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes";

  import { Header } from "carbon-components-svelte";

  let vw;
</script>

<svelte:window bind:innerWidth={vw} />

<Header company="Alex Warnes" platformName="Portfolio" href="/#/">
  <div class="flex-spacer" />
  <!-- TODO -->
  <!-- <span class="nav-btn-wrapper">
    <Button href="/#/development" kind="ghost">DEVELOPMENT</Button>
  </span>
  <span class="nav-btn-wrapper">
    <Button href="/#/photography" kind="ghost">PHOTOGRAPHY</Button>
  </span>
  <span class="nav-btn-wrapper">
    <Button href="/#/about" kind="ghost">ABOUT</Button>
  </span> -->
</Header>
<main>
  <Router {routes} />
</main>

<style>
  /* // @import "carbon-components-svelte/css/white"; */

  main {
    height: 100%;
    scroll-behavior: smooth;
    overflow: auto;
  }

  .nav-btn-wrapper :global(a) {
    color: var(--white-1);
    text-decoration: none;
    font-weight: 600;
    margin: 0 12px;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;
  }
  .nav-btn-wrapper :global(a:hover) {
    color: var(--white-1);
    background-color: var(--background-700);
    border-bottom: 2px solid var(--accent-2);
  }
</style>
