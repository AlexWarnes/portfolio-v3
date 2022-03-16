import type { Project } from "./models";

export const projects: Project[] = [
  {
    id: "513d71b5-ac28-4d6c-9c0c-b653405a1e1f",
    name: "Deep Space Network (DSN) Live",
    tagline:
      "Monitor connections between NASA/JPL and interplanetary spacecraft missions in real time.",
    description:
      "Built as an experiment to learn more about the Svelte framework, DSN Live displays actual data from NASA's global network of radio antennas communicating with spacecraft throughout the solar system. The site uses a mix of styles from IBM's Carbon Components and custom CSS. Users can learn more about specific spacecraft connected with each dish, enabled by a custom data structure mapping spacecraft to external URLs.",
    repoURL: "https://github.com/AlexWarnes/dsn-live",
    prodURL: "https://dsn-live.netlify.app/",
    tags: ["Svelte", "TypeScript", "Netlify"],
    thumbnailURL: "/assets/DSN.png",
    thumbnailSizes: {
      mobileWidth: 320,
      mobileHeight: 160,
      desktopWidth: 510,
      desktopHeight: 256,
    },
  } as Project,
  {
    id: "1e41fddf-664a-42d6-9f62-0c16b70ff0a3",
    name: "SC3 Lab",
    tagline:
      "Experiment, learn, and generate code for 3D scenes in the browser with three.js and svelte-cubed",
    description:
      "An visual editor for building 3D scenes and generating svelte-cubed code. SC3 Lab can help you quickly setup a scene and share the code via Svelte REPL, experiment with different light and material combinations, or test glTF model animations.",
    repoURL: "https://github.com/AlexWarnes/sc3-lab",
    prodURL: "https://sc3-lab.netlify.app/",
    tags: ["Svelte", "TypeScript", "three.js", "svelte-cubed", "Netlify"],
    thumbnailURL: "/assets/sc3-lab.png",
    thumbnailSizes: {
      mobileWidth: 320,
      mobileHeight: 160,
      desktopWidth: 510,
      desktopHeight: 256,
    },
  } as Project,
  {
    id: "64a6c586-9abe-4fea-960b-ae61d1bfcdfd",
    name: "svelte-fuse-rx",
    tagline: "Fusing Svelte and RxJS with simple actions and pipeable stores",
    description:
      "Combining two of my favorite tools (and learning how to publish an NPM package), svelte-fuse-rx has two primary utilities: an enhanced writable store that can use RxJS operators via pipe, and simple svelte actions for common RxJS use cases like debouncing an input.",
    repoURL: "https://github.com/AlexWarnes/svelte-fuse-rx",
    prodURL: "https://svelte-fuse-rx.netlify.app/",
    tags: ["Svelte", "SvelteKit", "TypeScript", "RxJS", "Netlify"],
    thumbnailURL: "/assets/svelte-fuse-rx.png",
    thumbnailSizes: {
      mobileWidth: 320,
      mobileHeight: 160,
      desktopWidth: 510,
      desktopHeight: 256,
    },
  } as Project,
  {
    id: "bc33c4f8-dca7-4f70-86eb-113999dd9fb9",
    name: "Falah",
    tagline: "A simple Islamic prayer times app.",
    description:
      "Falah, which means 'success' in Arabic, is a prayer times Progressive Web App (PWA) that uses browser geolocation - with permission - to display the 5 daily prayer times for Muslims. While simple to use, the app was my introduction to basic RxJS and reactive programming in Angular.",
    repoURL: "https://github.com/AlexWarnes/falah",
    prodURL: "http://falah-d6e38.firebaseapp.com/",
    tags: ["Angular", "Material", "TypeScript", "Firebase", "RxJS", "PWA"],
    thumbnailURL: "/assets/Falah.png",
    thumbnailSizes: {
      mobileWidth: 200,
      mobileHeight: 360,
      desktopWidth: 213,
      desktopHeight: 384,
    },
  } as Project,
  {
    id: "ec6a998f-60fe-418e-88eb-00ca08772ad9",
    name: "TK360",
    tagline: "Design proposal.",
    description:
      "A proposed redesign for a local construction services website using Angular and Material Components. Implements a custom image gallery inside a Material dialog with keyboard shortcuts.",
    repoURL: "https://github.com/AlexWarnes/tk360",
    prodURL: "https://tk360-llc.web.app/",
    tags: ["Angular", "Material", "TypeScript", "Firebase", "RxJS"],
    thumbnailURL: "/assets/TK360.png",
    thumbnailSizes: {
      mobileWidth: 320,
      mobileHeight: 173,
      desktopWidth: 475,
      desktopHeight: 256,
    },
  } as Project,
  {
    id: "1c14f92b-2266-476e-a6e5-40a3b79e89c7",
    name: "APOD Explorer",
    tagline: "Scroll through the universe.",
    description:
      "Explore NASA Astronomy Picture of the Day (APOD) archives, discover classic photos, and get inspired by simply scrolling. The official APOD site is difficult to quickly and easily browse through old APODs. This project solves that problem using the NASA Open Data APOD API to generate random APODs from the archives, giving the user a new experience on every visit.",
    repoURL: "https://github.com/AlexWarnes/APODexplorer",
    prodURL: "https://alexwarnes.github.io/APODexplorer/",
    tags: ["HTML", "CSS", "JavaScript", "JQuery"],
    thumbnailURL: "/assets/APOD.png",
    thumbnailSizes: {
      mobileWidth: 320,
      mobileHeight: 183,
      desktopWidth: 449,
      desktopHeight: 256,
    },
  } as Project,
];

// [
//   "",
//   "",
//   "",
//   "929abe4a-458e-4853-ac8b-c5e98c6341bd",
//   "e1d6f7fe-71b8-455c-a58c-5845376a5cf5",
//   "67280d10-3c47-4d22-a44e-c897d059a593",
//   "205baaed-2de3-4968-bece-e1708ebf7542"
// ]
