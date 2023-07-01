<script lang="ts">
  import { IconMail } from "@tabler/icons-svelte";
  import { IconBrandGithub } from "@tabler/icons-svelte";
  import { IconBrandInstagram } from "@tabler/icons-svelte";
  import { IconBrandTwitter } from "@tabler/icons-svelte";
  import { IconBrandLinkedin } from "@tabler/icons-svelte";
  import { fade } from "svelte/transition";
  export let rowStyles: string = "";
  const contactItems = [
    {
      description: "Email",
      icon: IconMail,
      href: "mailto:alex.s.warnes@gmail.com",
    },
    {
      description: "GitHub",
      icon: IconBrandGithub,
      href: "https://github.com/AlexWarnes/",
    },
    {
      description: "Instagram",
      icon: IconBrandInstagram,
      href: "https://www.instagram.com/alexwarnesphotos/",
    },
    {
      description: "Twitter",
      icon: IconBrandTwitter,
      href: "https://twitter.com/a_warnes",
    },
    {
      description: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/alexwarnes/",
    },
  ];
</script>

<div class="social-row" style={rowStyles}>
  {#each contactItems as item, idx}
    <span in:fade={{ duration: 1000, delay: 200 + idx * 100 }}>
      <a class="btn icon-btn tertiary" title={item.description} href={item.href}>
        <svelte:component this={item.icon} stroke={1.5} />
      </a>
    </span>
  {/each}
</div>

<style>
  .social-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 275px;
  }
</style>
