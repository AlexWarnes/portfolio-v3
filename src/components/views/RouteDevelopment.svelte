<script lang="ts">
  import { projects } from "../../Data/projects";
  import ProjectCard from "../ProjectCard.svelte";
  import PageHeader from "../PageHeader.svelte";
  import { Tag } from "carbon-components-svelte";
  import { fade } from "svelte/transition";
  const tools = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "RxJS",
    "React",
    "Angular",
    "Svelte",
    "Node",
    "Express",
  ];
  let vw;
</script>

<svelte:window bind:innerWidth={vw} />
<PageHeader
  title="Web Development"
  subtitle="Combining technology, creativity, and useability to help people in big and
small ways."
  backgroundImgURL={vw > 860
    ? "/assets/tower-full.jpg"
    : "/assets/tower-horizontal.jpg"}
  customStyles={vw > 860
    ? "background-image: linear-gradient(to right, #272727c8, #27272700), url('/assets/tower-full.jpg'); background-position: bottom;"
    : ""}
>
  <p class="tools-title">Current Toolkit</p>
  <div class="code-box">
    {#each tools as tool, idx}
      <span in:fade={{ duration: 1000, delay: 400 + idx * 100 }}>
        <Tag type="cool-gray">{tool}</Tag>
      </span>
    {/each}
  </div>
</PageHeader>
{#each projects as project (project.id)}
  <ProjectCard {project} />
{/each}

<style>
  /* .webdev-header {
    background-color: none;
    background-color: #272727; */
  /* Cropped photo ideal for mobile */
  /* background-image: linear-gradient(to bottom, #272727c8 33%, #27272700),
      url("/assets/tower-horizontal.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #eaecf2;
    box-shadow: 0 4px 8px #00000028;
  }

  .content-header {
    padding: 40px 40px 60px 10%;
    background-color: #272727;
    background-repeat: no-repeat;
    background-size: cover;
    color: #eaecf2;
    box-shadow: 0 4px 8px #00000028;
    min-height: 45vh;
  }

  .content-header > p,
  .content-header > h1 {
    text-shadow: 0 0 10px #272727;
    line-height: 1.4em;
  } */

  .tools-title {
    margin: 50px 0 5px 0;
    font-size: 1.5em;
  }

  .code-box {
    width: 100%;
    max-width: 375px;
  }

  @media only screen and (min-width: 860px) {
    /* .content-header {
      padding-top: 100px;
    }

    .content-header > p {
      max-width: 66%;
    } */

    .webdev-header {
      background-image: linear-gradient(to right, #272727c8, #27272700),
        url("/assets/tower-full.jpg");
      background-position: bottom;
    }
  }
</style>
