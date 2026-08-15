<script lang="ts">
  interface Props {
    bg?: string;
    color?: string;
    children?: import('svelte').Snippet;
  }

  let { bg = "var(--bg-2)", color = "var(--color-2)", children }: Props = $props();
</script>
<span class="tag" style="background-color: {bg}; color: {color};">
  {@render children?.()}
</span>

<style>
  .tag {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    margin: 0.25rem;
    margin-left: 0;
    font-size: 0.75rem;
  }
</style>