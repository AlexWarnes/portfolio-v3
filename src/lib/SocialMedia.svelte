<script lang="ts">
    import { Mail, BriefcaseBusiness } from "@lucide/svelte";
    import { fade } from "svelte/transition";
    import BlueskyIcon from "./BlueskyIcon.svelte";
    import GitHubIcon from "./GitHubIcon.svelte";
    import InstagramIcon from "./InstagramIcon.svelte";
    interface Props {
        rowStyles?: string;
    }

    let { rowStyles = "" }: Props = $props();
    const contactItems: { description: string; icon: any; href: string }[] = [
        {
            description: "Email",
            icon: Mail,
            href: "mailto:alex.s.warnes@gmail.com",
        },
        {
            description: "GitHub",
            icon: GitHubIcon,
            href: "https://github.com/AlexWarnes/",
        },
        {
            description: "Instagram",
            icon: InstagramIcon,
            href: "https://www.instagram.com/alexwarnesphotos/",
        },
        {
            description: "Bluesky",
            icon: BlueskyIcon,
            href: "https://bsky.app/profile/awarnes.bsky.social",
        },
        {
            description: "LinkedIn",
            icon: BriefcaseBusiness,
            href: "https://www.linkedin.com/in/alexwarnes/",
        },
    ];
</script>

<div class="social-row" style={rowStyles}>
    {#each contactItems as item, idx}
        <span in:fade|global={{ duration: 1000, delay: 200 + idx * 100 }}>
            <a
                class="btn icon-btn tertiary"
                title={item.description}
                href={item.href}
            >
                <item.icon strokeWidth={1.25} />
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
