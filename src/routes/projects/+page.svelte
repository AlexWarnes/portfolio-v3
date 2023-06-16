<script lang="ts">
  import PageHeader from "$lib/PageHeader.svelte";
  import ProjectCard from "$lib/ProjectCard.svelte";
  import Tag from "$lib/Tag.svelte";
  import { projects } from "$lib/data/projects";
  import { fade } from "svelte/transition";

  const tools = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Svelte",
    "Three.js",
    "Threlte",
    "RxJS",
    "React",
    "Angular",
    "Node",
    "Express",
  ];
</script>

<PageHeader
  title="Web Development"
  subtitle="Combining technology, creativity, and useability to help people in big and small ways."
>
  <div class="code-box">
    <p class="tools-title">Current Toolkit</p>
    {#each tools as tool, idx}
      <span in:fade={{ duration: 1000, delay: 400 + idx * 100 }}>
        <Tag>{tool}</Tag>
      </span>
    {/each}
  </div>
</PageHeader>

{#each projects as project (project.id)}
  <ProjectCard {project} />
{/each}

<style>
  .tools-title {
    margin: 50px 0 5px 0;
    font-size: 1.5em;
  }

  .code-box {
    width: 100%;
    max-width: 375px;
  }
</style>
