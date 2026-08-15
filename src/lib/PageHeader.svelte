<script lang="ts">
    import { fade } from "svelte/transition";

    interface Props {
        // PROPS
        title: string;
        subtitle: string;
        children?: import("svelte").Snippet;
    }

    let { title, subtitle, children }: Props = $props();
    // export let backgroundImgURL: string;
    // export let customStyles: string = "";

    // Responsive trigger
    let vw: number = $state(320);
    // style="background-image: linear-gradient(to bottom right, #272727c8 33%, #27272700),
    // url('{backgroundImgURL}'); {customStyles}"
</script>

<svelte:window bind:innerWidth={vw} />
<header>
    <div class="content">
        <h1 in:fade|global>{title}</h1>
        <p class="subtitle">{subtitle}</p>
        {@render children?.()}
    </div>
</header>

<style>
    header {
        padding: 100px 1rem;
    }

    .content {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
    }

    .subtitle {
        width: 66%;
        max-width: 640px;
        font-weight: 300;
    }
</style>
