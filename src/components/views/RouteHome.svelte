<script lang="ts">
  import { Button, InlineNotification } from "carbon-components-svelte";
  import SocialMedia from "../SocialMedia.svelte";
  import Code32 from "carbon-icons-svelte/lib/Code32";
</script>

<header>
  <InlineNotification
    lowContrast
    kind="info"
    title="Work in Progress"
    subtitle="This site is undergoing some maintenance. Use the social media links below to see more content."
  />

  <div class="header-content">
    <h1>Alex Warnes</h1>
    <p>Intelligence Analyst turned Web Developer</p>
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
    margin: 12px 0;
  }

  header :global(.bx--inline-notification--info) {
    position: absolute;
    top: 64px;
  }
</style>
