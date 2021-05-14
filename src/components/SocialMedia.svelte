<script lang="ts">
  import LogoGithub24 from "carbon-icons-svelte/lib/LogoGithub24";
  import LogoTwitter24 from "carbon-icons-svelte/lib/LogoTwitter24";
  import LogoInstagram24 from "carbon-icons-svelte/lib/LogoInstagram24";
  import Email24 from "carbon-icons-svelte/lib/Email24";
  import LogoLinkedin24 from "carbon-icons-svelte/lib/LogoLinkedin24";
  import { Button } from "carbon-components-svelte";
  import { fade } from "svelte/transition";
  export let rowStyles: string = "";
  const contactItems = [
    {
      description: "Email",
      icon: Email24,
      href: "mailto:alex.s.warnes@gmail.com",
    },
    {
      description: "GitHub",
      icon: LogoGithub24,
      href: "https://github.com/AlexWarnes/",
    },
    {
      description: "Instagram",
      icon: LogoInstagram24,
      href: "https://www.instagram.com/alexwarnesphotos/",
    },
    {
      description: "Twitter",
      icon: LogoTwitter24,
      href: "https://twitter.com/a_warnes",
    },
    {
      description: "LinkedIn",
      icon: LogoLinkedin24,
      href: "https://www.linkedin.com/in/alexwarnes/",
    },
  ];
</script>

<div class="social-row" style={rowStyles}>
  {#each contactItems as item, idx}
    <span in:fade={{ duration: 1000, delay: 200 + idx * 100 }}>
      <Button
        kind="tertiary"
        href={item.href}
        tooltipPosition="bottom"
        tooltipAlignment="center"
        iconDescription={item.description}
        disabled={false}
        icon={item.icon}
      />
    </span>
  {/each}
</div>

<style>
  .social-row
    :global(.bx--btn.bx--btn--icon-only.bx--tooltip__trigger[disabled]:hover) {
    cursor: pointer;
  }

  .social-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 275px;
  }
</style>
