<script lang="ts">
  // import { IconMail } from "@tabler/icons-svelte";
  // import { IconBrandGithub } from "@tabler/icons-svelte";
  // import { IconBrandInstagram } from "@tabler/icons-svelte";
  // import { IconBrandTwitter } from "@tabler/icons-svelte";
  // import { IconBrandLinkedin } from "@tabler/icons-svelte";
  import { Mail, Github, Instagram, Twitter, Linkedin } from 'lucide-svelte'
  import { fade } from "svelte/transition";
  import BlueskyIcon from './BlueskyIcon.svelte';
  export let rowStyles: string = "";
  const contactItems = [
    {
      description: "Email",
      icon: Mail,
      href: "mailto:alex.s.warnes@gmail.com",
    },
    {
      description: "GitHub",
      icon: Github,
      href: "https://github.com/AlexWarnes/",
    },
    {
      description: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/alexwarnesphotos/",
    },
    {
      description: "Bluesky",
      icon: BlueskyIcon,
      href: "https://bsky.app/profile/awarnes.bsky.social",
    },
    // {
    //   description: "Twitter",
    //   icon: Twitter,
    //   href: "https://twitter.com/a_warnes",
    // },
    {
      description: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/alexwarnes/",
    },
  ];
</script>

<div class="social-row" style={rowStyles}>
  {#each contactItems as item, idx}
    <span in:fade={{ duration: 1000, delay: 200 + idx * 100 }}>
      <a class="btn icon-btn tertiary" title={item.description} href={item.href}>
        <svelte:component this={item.icon} strokeWidth={1.25} />
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
