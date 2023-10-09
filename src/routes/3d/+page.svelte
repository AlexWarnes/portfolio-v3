<script lang="ts">
  import PageHeader from "$lib/PageHeader.svelte";

  export let data

  const embedQueryParams = "&ctl=1&view=preview"
</script>

<PageHeader
  title="3D Scenes"
  subtitle="Made with Threlte."
/>

{#each data.examples as embed (embed.id)}
<div class="embed-wrapper panel">
  <div class="embed-header">
    <h3 id={encodeURI(embed.title.toLowerCase().replace(' ','-'))}>{embed.title}</h3>
    <p class="description">{embed.description}</p>
  </div>
  <iframe title={embed.title} src={embed.url + embedQueryParams} />
</div>
{/each}
<style>
  iframe {
    width: 100%;
    height: 100%;
  }
  .embed-wrapper {
    width: 90%;
    max-width: 1200px;
    height: 80vh;
    max-height: 1000px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
  }
  .embed-header {
    padding: 0 0 0 10px;
    border-left: 5px solid var(--primary);
  }

  .embed-header h3 {
    margin-top: 1rem;
  }
  .embed-header p {
    margin: 0 0 8px;
    font-size: 0.875rem;
    max-width: 25rem;
  }

</style>