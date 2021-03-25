<script lang="ts">
  import { projects } from "../../Data/projects";
  import ProjectCard from "../ProjectCard.svelte";
  import SnippetEmbed from "../SnippetEmbed.svelte";

  console.log("projects", projects);
</script>

<h1>DEVELOPMENT</h1>
{#each projects as project (project.id)}
  <ProjectCard {project} />
{/each}
