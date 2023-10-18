import type { Project } from "$lib/data/models";

export const projects: Project[] = [
  {
    id: "513d71b5-ac28-4d6c-9c0c-b653405a1e1f",
    name: "Deep Space Network (DSN) Live",
    tagline:
      "Monitor connections between NASA/JPL and interplanetary spacecraft missions in real time.",
    description:
      "Built as an experiment to learn more about Svelte, DSN Live displays actual data from NASA's global network of radio antennas communicating with spacecraft throughout the solar system. The site uses a mix of styles from IBM's Carbon Components and custom CSS. Users can learn more about specific spacecraft connected with each dish, enabled by a custom data structure mapping spacecraft to external URLs.",
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
    id: "d78b896d-ee79-4c64-83b2-053c857a644f",
    name: "Spatula",
    tagline:
      "Create beautiful shader materials in the browser and generate your JavaScript. Powered by lamina.",
    description:
      "Spatula is a visual editor for building shader materials with lamina. It provides a visual editor and generates the JavaScript for your material. You can use that code as a material in any project that uses lamina and Three.js.",
    repoURL: "https://github.com/AlexWarnes/lamina-spatula",
    prodURL: "https://lamina-spatula.vercel.app/",
    tags: ["SvelteKit", "TypeScript", "Three.js", "Threlte", "RxJS", "Vercel"],
    thumbnailURL: "/assets/spatula.jpg",
    thumbnailSizes: {
      // 1200 x 720
      mobileWidth: 320,
      mobileHeight: 192,
      desktopWidth: 400,
      desktopHeight: 240,
    },
  } as Project,
  {
    id: "7391f7b0-af40-4cc5-ba6d-e069bcb7aecf",
    name: "svelte-sequence",
    package: true,
    tagline:
      "Custom stores to compose tweened motion sequences over multiple steps.",
    description:
      "svelte-sequence is an NPM package that provides a custom tweenedSequence store, a custom stopwatch store, and a custom timer store. All of which are utilities that make it easier to coordinate execution of tweened values.",
    repoURL: "https://github.com/AlexWarnes/svelte-sequence",
    prodURL: "https://stackblitz.com/edit/example-svelte-sequence",
    tags: ["Svelte", "TypeScript", "NPM", "semver"],
    thumbnailURL: "/assets/svelte-sequence-demo.jpg",
    thumbnailSizes: {
      // 1200 x 720
      mobileWidth: 320,
      mobileHeight: 192,
      desktopWidth: 400,
      desktopHeight: 240,
    },
  } as Project,
  {
    id: "f5603185-ebd9-4320-9ffd-936cd9620711",
    name: "svelte-kbc",
    package: true,
    tagline:
      "Configure stores for keyboard inputs and events in any Svelte app.",
    description:
      "svelte-kbc is an NPM package that provides a config-based keyboard and event stores using Svelte context. I was tired of repeating the same code for setting up keyboard event handlers, so I made svelte-kbc to make things easier!",
    repoURL: "https://github.com/AlexWarnes/svelte-kbc",
    prodURL: "https://stackblitz.com/edit/example-svelte-kbc",
    tags: ["Svelte", "TypeScript", "NPM", "semver"],
    thumbnailURL: "/assets/svelte-kbc-demo.jpg",
    thumbnailSizes: {
      // 1200 x 720
      mobileWidth: 320,
      mobileHeight: 192,
      desktopWidth: 400,
      desktopHeight: 240,
    },
  } as Project,
  {
    id: "64a6c586-9abe-4fea-960b-ae61d1bfcdfd",
    name: "svelte-fuse-rx",
    package: true,
    tagline:
      "Fusing Svelte and RxJS with simple actions and pipeable stores.",
    description:
      "Combining two of my favorite tools (and learning how to publish an NPM package), svelte-fuse-rx has two primary utilities: an enhanced writable store that can use RxJS operators via pipe, and simple svelte actions for common RxJS use cases like debouncing an input.",
    repoURL: "https://github.com/AlexWarnes/svelte-fuse-rx",
    prodURL: "https://svelte-fuse-rx.netlify.app/",
    tags: ["Svelte", "SvelteKit", "TypeScript", "RxJS", "NPM", "semver", "Netlify"],
    thumbnailURL: "/assets/svelte-fuse-rx.png",
    thumbnailSizes: {
      mobileWidth: 320,
      mobileHeight: 160,
      desktopWidth: 510,
      desktopHeight: 256,
    },
  } as Project,
  {
    id: "929abe4a-458e-4853-ac8b-c5e98c6341bd",
    name: "Enrichment Calculator",
    tagline: "A modern gas centrifuge enrichment calculator.",
    description:
      "Instantly see how gas centrifuge enrichment variables change under different scenarios by isolating SWU, Feed and SWU, Product and SWU, or Feed and Product. Svelte's reactive statements make complex formulas easy to bind together with HTML inputs.",
    repoURL: "https://github.com/AlexWarnes/enrichment-calc",
    prodURL: "https://enrichment-calc.netlify.app/",
    tags: ["Svelte", "Netlify"],
    thumbnailURL: "/assets/enrichment.png",
    thumbnailSizes: {
      mobileWidth: 298,
      mobileHeight: 365,
      desktopWidth: 331,
      desktopHeight: 406,
      // 662 x 812, 331 x 406
    },
  } as Project,

  {
    id: "d648b64f-7b4e-4984-bbfa-a2151a3c930b",
    name: "Photon",
    tagline:
      "[Work in Progress: converting to Threlte v6]",
    description: "An open source portfolio of 3D scenes, experiments, and prototypes.",
    repoURL: "https://github.com/AlexWarnes/photon",
    prodURL: "https://photon-alexwarnes.vercel.app/",
    tags: ["SvelteKit", "TypeScript", "Three.js", "Threlte", "Vercel"],
    thumbnailURL: "/assets/photon.jpg",
    thumbnailSizes: {
      // 1200 x 720
      mobileWidth: 320,
      mobileHeight: 192,
      desktopWidth: 400,
      desktopHeight: 240,
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
    id: "1e41fddf-664a-42d6-9f62-0c16b70ff0a3",
    name: "SC3 Lab",
    tagline:
      "[DEPRECATED] - Experiment, learn, and generate code for 3D scenes in the browser with Three.js and svelte-cubed.",
    description:
      "A visual editor for building 3D scenes and generating svelte-cubed code. SC3 Lab can help you quickly setup a scene and share the code via Svelte REPL, experiment with different light and material combinations, or test glTF model animations.",
    repoURL: "https://github.com/AlexWarnes/sc3-lab",
    prodURL: "https://sc3-lab.netlify.app/",
    tags: ["Svelte", "TypeScript", "Three.js", "svelte-cubed", "Netlify"],
    thumbnailURL: "/assets/sc3-lab.png",
    thumbnailSizes: {
      mobileWidth: 320,
      mobileHeight: 160,
      desktopWidth: 510,
      desktopHeight: 256,
    },
  } as Project,
  // {
  //   id: "ec6a998f-60fe-418e-88eb-00ca08772ad9",
  //   name: "TK360",
  //   tagline: "Design proposal.",
  //   description:
  //     "A proposed redesign for a local construction services website using Angular and Material Components. Implements a custom image gallery inside a Material dialog with keyboard shortcuts.",
  //   repoURL: "https://github.com/AlexWarnes/tk360",
  //   prodURL: "https://tk360-llc.web.app/",
  //   tags: ["Angular", "Material", "TypeScript", "Firebase", "RxJS"],
  //   thumbnailURL: "/assets/TK360.png",
  //   thumbnailSizes: {
  //     mobileWidth: 320,
  //     mobileHeight: 173,
  //     desktopWidth: 475,
  //     desktopHeight: 256,
  //   },
  // } as Project,
  // {
  //   id: "1c14f92b-2266-476e-a6e5-40a3b79e89c7",
  //   name: "APOD Explorer",
  //   tagline: "Scroll through the universe.",
  //   description:
  //     "Explore NASA Astronomy Picture of the Day (APOD) archives, discover classic photos, and get inspired by simply scrolling. The official APOD site is difficult to quickly and easily browse through old APODs. This project solves that problem using the NASA Open Data APOD API to generate random APODs from the archives, giving the user a new experience on every visit.",
  //   repoURL: "https://github.com/AlexWarnes/APODexplorer",
  //   prodURL: "https://alexwarnes.github.io/APODexplorer/",
  //   tags: ["HTML", "CSS", "JavaScript", "JQuery"],
  //   thumbnailURL: "/assets/APOD.png",
  //   thumbnailSizes: {
  //     mobileWidth: 320,
  //     mobileHeight: 183,
  //     desktopWidth: 449,
  //     desktopHeight: 256,
  //   },
  // } as Project,
];

// Grab UUID
// copy(Crypto.randomUUID())
