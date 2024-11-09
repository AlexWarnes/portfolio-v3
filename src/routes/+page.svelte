<script lang="ts">
  import SocialMedia from "$lib/SocialMedia.svelte";
  import { links } from "$lib/data/pages";
  import { fade } from "svelte/transition";

  let vh: number;
  let vw: number;
</script>

<svelte:window bind:innerWidth={vw} bind:innerHeight={vh} />

<header style="padding-top: {0.2 * vh}px;">
  <div class="header-content">
    <h1>Alex Warnes</h1>
    <p in:fade>Intelligence Analyst turned Web Developer</p>
    <div class="button-col">
      {#each links as link (link.path)}
        <a href={link.path} class="btn primary">
          <svelte:component this={link.icon} size={16} strokeWidth={1.75} />
          <span>{link.name}</span>
        </a>
      {/each}
    </div>
  </div>
  <SocialMedia
    rowStyles="
      position: absolute;
      bottom: 1rem;
    "
  />
</header>

<style>
  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    font-weight: 300;
  }

  .header-content {
    min-width: 320px;
  }
  .button-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.125rem;
    padding: 1.5rem;
  }
</style>
