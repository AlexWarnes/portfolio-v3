<script lang="ts">
  import { Button, Tag } from "carbon-components-svelte";
  import type { Project } from "../Data/models";
  import LogoGithub24 from "carbon-icons-svelte/lib/LogoGithub24";
  import Launch24 from "carbon-icons-svelte/lib/Launch24";

  export let project: Project = null;
  let vw;
</script>

<svelte:window bind:innerWidth={vw} />

<article class="card-container">
  <div class="content-wrapper">
    <div class="header">
      <h3>{project.name}</h3>
      <p>{project.tagline}</p>
      {#each project.tags as tag}
        <Tag type="cool-gray">{tag}</Tag>
      {/each}
    </div>
    <!-- MOBILE -->
    {#if vw < 860}
      <img
        src={project.thumbnailURL}
        width={project.thumbnailSizes.mobileWidth}
        height={project.thumbnailSizes.mobileHeight}
        alt={`Screenshot of ${project.name}`}
        loading="lazy"
      />
    {/if}
    <div class="content">
      <p>
        {project.description}
      </p>
    </div>
    <div class="action-row">
      <Button icon={Launch24}>Live Site</Button>
      <Button icon={LogoGithub24}>GitHub Repo</Button>
    </div>
  </div>
  <!-- DESKTOP -->
  {#if vw >= 860}
    <img
      src={project.thumbnailURL}
      width={project.thumbnailSizes.desktopWidth}
      height={project.thumbnailSizes.desktopHeight}
      alt={`Screenshot of ${project.name}`}
      loading="lazy"
    />
  {/if}
</article>

<style>
  .card-container {
    max-width: 1152px;
    margin: 12% auto;
    padding: 18px 24px 18px 18px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .content-wrapper {
    max-width: 512px;
    margin: 0;
  }

  .header {
    padding: 0 0 0 10px;
    border-left: 5px solid var(--accent-1);
  }

  .header p {
    margin: 0 0 8px;
  }

  img {
    display: block;
    margin: 24px auto 12px;
    box-shadow: 0 10px 40px -5px #00000050;
    /* animation: float 2.5s ease-in-out 0s 1 forwards; */
  }

  .content {
    margin: 36px 0;
  }

  .action-row {
    display: flex;
    justify-content: space-between;
  }

  /* DESKTOP */
  @media only screen and (min-width: 860px) {
    img {
      margin: 0 auto;
    }

    .content-wrapper {
      margin: 0 24px;
    }
  }
</style>
