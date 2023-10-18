<script lang="ts">
  import { IconLayoutDashboard } from "@tabler/icons-svelte";
  import { links } from "./data/pages";
  import { page } from "$app/stores";
  let vw: number;

  // TODO: Handle active path css
  // TODO: hide top nav on / path
  $: console.log($page.url?.pathname)
</script>

<svelte:window bind:innerWidth={vw} />
<nav>
  <a href="/" class="btn home-link">
    <IconLayoutDashboard />
    {vw > 600 ? 'Alex Warnes' : 'AW'}
  </a>
  <div class="flex-spacer"></div>
  {#each links as link (link.path)}
    <a href={link.path} class="btn secondary" class:active={$page.url?.pathname?.includes(link.path)}>
      {#if vw > 600}
        <span>{link.name}</span>
      {/if}
      <svelte:component this={link.icon} />
    </a>
  {/each}
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--bg-active);
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  a {
    display: inline-flex;
    flex-flow: row wrap-reverse;
  }

  a.active {
    background-color: var(--secondary-hover);
  }

  .home-link {
    color: var(--color-0);
  }
</style>