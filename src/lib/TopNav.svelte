<script lang="ts">
  import { IconHome } from "@tabler/icons-svelte";
  import { links } from "./data/pages";
  let vw: number;

  // TODO: Handle active path css
  // TODO: hide top nav on / path
</script>

<svelte:window bind:innerWidth={vw} />
<nav>
  <a href="/" class="btn secondary">
    <IconHome />
  </a>
  <div class="flex-spacer"></div>
  {#each links as link (link.path)}
    <a href={link.path} class="btn secondary">
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
</style>