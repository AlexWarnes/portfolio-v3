<script lang="ts">
  // button,tag, launch, github
  import type { Project } from "$lib/data/models";
  import { IconExternalLink } from '@tabler/icons-svelte';
  import { IconBrandGithub } from "@tabler/icons-svelte";
  import { IconBrandNpm } from "@tabler/icons-svelte";
  import Tag from "$lib/Tag.svelte";

  export let project: Project;
  let vw: number;
</script>

<svelte:window bind:innerWidth={vw} />

<article class="card-container panel">
  <div class="content-wrapper">
    <div class="header">
      <h3>{project.name}
        {#if project.package}
          <span class="npm-wrapper">
            <IconBrandNpm />
          </span>
        {/if}
      </h3>
      <p>{project.tagline}</p>
      {#each project.tags as tag}
        <Tag >{tag}</Tag>
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
      <a href="{project.prodURL}" class="btn primary">
        Live Site
        <IconExternalLink />
      </a>
      <a href="{project.repoURL}" class="btn secondary">
        GitHub Repo
        <IconBrandGithub />
      </a>

      <!-- <Button href={project.prodURL} target="_blank" icon={Launch24}>Live Site</Button> -->
      <!-- <Button href={project.repoURL} target="_blank" icon={LogoGithub24}>GitHub Repo</Button> -->
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
    width: 95%;
    margin: 12% auto;
    padding: 18px 24px 18px 18px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }

  .content-wrapper {
    max-width: 512px;
    margin: 0;
  }

  .header {
    padding: 0 0 0 10px;
    border-left: 5px solid var(--primary);
  }

  .npm-wrapper {
    font-size: 1rem;
    vertical-align: bottom;
  }

  .header p {
    margin: 0 0 8px;
    font-size: 0.875rem;
  }

  img {
    display: block;
    margin: 2rem auto;
    border: 0.125rem solid black;
    box-shadow:
      inset 0 0 30px var(--secondary),      /* inner white */
      inset 12px 0 40px var(--primary),   /* inner left magenta short */
      inset -12px 0 40px var(--warning),  /* inner right cyan short */
      inset 12px 0 150px var(--primary),  /* inner left magenta broad */
      inset -12px 0 150px var(--warning), /* inner right cyan broad */
      0 0 30px var(--secondary),            /* outer white */
      -10px 0 40px var(--primary),        /* outer left magenta */
      10px 0 40px var(--warning);         /* outer right cyan */

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
    /* img {
      margin: 0 auto;
    }

    .content-wrapper {
      margin: 0 24px;
    } */
  }
</style> 
