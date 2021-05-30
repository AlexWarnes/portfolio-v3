<script>
  import { fade } from "svelte/transition";

  // PROPS
  export let title;
  export let subtitle;
  export let backgroundImgURL;
  export let customStyles = "";

  // Responsive trigger
  let vw;
</script>

<svelte:window bind:innerWidth={vw} />
<header
  class="webdev-header content-header"
  style="background-image: linear-gradient(to bottom right, #272727c8 33%, #27272700), 
  url('{backgroundImgURL}'); {customStyles}"
>
  <h1 in:fade>{title}</h1>
  <p class="subtitle">{subtitle}</p>
  <slot />
</header>

<style>
  .webdev-header {
    background-color: none;
    background-color: #272727;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #eaecf2;
    box-shadow: 0 4px 8px #00000028;
  }

  .content-header {
    padding: 40px 40px 60px 10%;
    background-color: #272727;
    background-repeat: no-repeat;
    background-size: cover;
    color: #eaecf2;
    box-shadow: 0 4px 8px #00000028;
    min-height: 45vh;
  }

  .subtitle {
    width: 66%;
    max-width: 640px;
  }

  .content-header > p,
  .content-header > h1 {
    text-shadow: 0 0 10px #272727;
    line-height: 1.4em;
  }

  @media only screen and (min-width: 860px) {
    .content-header {
      padding-top: 100px;
    }

    /* .webdev-header {
      background-image: linear-gradient(to right, #272727c8, #27272700),
        url("/assets/tower-full.jpg");
      background-position: bottom;
    } */
  }
</style>
