<script lang="ts">
    import TopNav from "$lib/TopNav.svelte";
    import "./global.css";
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="view-wrapper">
    <TopNav />
    <main>
        {@render children?.()}
    </main>
</div>

<style>
    .view-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        width: 100%;
        height: 100%;
    }

    main {
        flex-grow: 1;
        /* overflow: hidden; */
    }
</style>
