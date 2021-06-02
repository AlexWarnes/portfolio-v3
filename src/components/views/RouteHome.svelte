<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import SocialMedia from "../SocialMedia.svelte";
  import Code32 from "carbon-icons-svelte/lib/Code32";
  import LocationPerson32 from "carbon-icons-svelte/lib/LocationPerson32";
  import { fade } from "svelte/transition";
  import { typewriter } from "../../custom/transitions";
  let vh;
</script>

<svelte:window bind:innerHeight={vh} />
<header style={`padding-top: ${.20 * vh}px;`}>
  <div class="header-content">
    <h1>Alex Warnes</h1>
    <p in:typewriter>Intelligence Analyst turned Web Developer</p>
    <span class="button-wrapper">
      <Button href="/#/development" kind="primary" icon={Code32}>
        Projects
      </Button>
    </span>
    <span class="button-wrapper">
      <Button href="/#/about" kind="primary" icon={LocationPerson32}>
        About
      </Button>
    </span>
  </div>

  <SocialMedia
    rowStyles="position: absolute;
bottom: 5px;"
  />
</header>

<style>

  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url("/assets/Flat-Mountains.svg");
    background-position: bottom;
    background-size: cover;
  }

  .header-content {
    min-width: 320px;
  }

  .button-wrapper {
    display: block;
    margin: 18px 0;
  }

</style>
