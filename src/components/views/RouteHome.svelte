<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import SocialMedia from "../SocialMedia.svelte";
  import Code32 from "carbon-icons-svelte/lib/Code32";
  import { fade } from "svelte/transition";

</script>

<header>

  <div in:fade class="header-content">
    <h1 >Alex Warnes</h1>
    <p >Intelligence Analyst turned Web Developer</p>
    <span class="button-wrapper">
      <Button href="/#/development" kind="primary" icon={Code32}>
        Projects
      </Button>
    </span>
  </div>

  <SocialMedia rowStyles="position: absolute;
bottom: 5px;" />
</header>

<style>
  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-wrapper {
    display: block;
    margin: 48px 0;
  }

  header :global(.bx--inline-notification--info) {
    position: absolute;
    top: 64px;
  }
</style>
