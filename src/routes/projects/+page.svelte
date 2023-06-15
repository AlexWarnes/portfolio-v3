<script lang="ts">
  import PageHeader from '$lib/PageHeader.svelte';
  import ProjectCard from '$lib/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
  let vw: number;
</script>

<svelte:window bind:innerWidth={vw} />
<PageHeader
  title="Web Development"
  subtitle="Combining technology, creativity, and useability to help people in big and small ways."
/>

{#each projects as project (project.id)}
  <ProjectCard {project} />
{/each}
