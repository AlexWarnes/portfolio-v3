<script lang="ts">
  export let bg: string = "var(--bg-2)"
  export let color: string = "var(--color-2)"
</script>
<span class="tag" style="background-color: {bg}; color: {color};">
  <slot />
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