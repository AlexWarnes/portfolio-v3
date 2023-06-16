<script lang="ts">
  // import Router from "svelte-spa-router";
  // import routes from "./routes";

  // import {
  //   Header,
  //   Button,
  //   Icon,
  //   HeaderUtilities,
  //   HeaderAction,
  //   HeaderPanelLinks,
  //   HeaderPanelLink,
  // } from "carbon-components-svelte";
  // import Home32 from "carbon-icons-svelte/lib/Home32";
  // import LocationPerson32 from "carbon-icons-svelte/lib/LocationPerson32";
  // import Code32 from "carbon-icons-svelte/lib/Code32";
  // import { onMount } from "svelte";

  // let isOpen = false;
  // let vw;
  // let showNavButtons = false;
  // const updateHash = () => {
  //   if (window.location.hash === "#/" || window.location.hash === "") {
  //     showNavButtons = false;
  //   } else {
  //     showNavButtons = true;
  //   }
  // };
  // const hashChange = () => {
  //   updateHash();
  // };

  // onMount(() => {
  //   updateHash();
  // });
</script>

<!-- <svelte:window bind:innerWidth={vw} on:hashchange={hashChange} /> -->

<!-- DESKTOP -->
<!-- {#if vw > 875} -->
  <!-- <Header company="Alex Warnes" platformName="Portfolio" href="/#/">
    <div class="flex-spacer" />
    {#if showNavButtons}
      <span class="nav-btn-wrapper">
        <Button href="/#/development" kind="ghost">PROJECTS</Button>
      </span>
      <span class="nav-btn-wrapper">
        <Button href="/#/about" kind="ghost">ABOUT</Button>
      </span>
    {/if}
  </Header> -->
<!-- {:else} -->
  <!-- MOBILE -->
  <!-- <Header company="Alex Warnes" platformName="Portfolio" href="/#/">
    <div class="flex-spacer" />
    <HeaderUtilities>
      <HeaderAction bind:isOpen>
        <HeaderPanelLinks>
          <span class="nav-menu-wrapper">
            <HeaderPanelLink href="/#/">
              <Icon render={Home32} />
              HOME</HeaderPanelLink
            >
            <HeaderPanelLink href="/#/development">
              <Icon render={Code32} />
              PROJECTS</HeaderPanelLink
            >
            <HeaderPanelLink href="/#/about">
              <Icon render={LocationPerson32} />
              ABOUT</HeaderPanelLink
            >
          </span></HeaderPanelLinks
        >
      </HeaderAction>
    </HeaderUtilities>
  </Header> -->
<!-- {/if} -->
<main>
  <!-- <Router {routes} /> -->
</main>

<style>
  /* // @import "carbon-components-svelte/css/white"; */

  main {
    padding-top: 48px;
    height: 100%;
    scroll-behavior: smooth;
    overflow: auto;
  }

  /* .nav-btn-wrapper :global(a) {
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
  } */

  .flex-spacer {
    flex-grow: 1;
  }
  .nav-btn-wrapper :global(a) {
    color: var(--white-1);
    text-decoration: none;
    font-weight: 600;
    margin: 0 12px;
  }
  .nav-menu-wrapper :global(a) {
    display: flex;
    align-items: center;
    margin: 12px 0;
  }
  .nav-menu-wrapper :global(svg) {
    margin: 0 10px 0 0;
  }
</style>
