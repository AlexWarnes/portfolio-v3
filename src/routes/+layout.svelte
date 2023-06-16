<script>
	import TopNav from '$lib/TopNav.svelte';
import './global.css';
</script>

<div class="view-wrapper">
	<!-- <nav>
		<a href="/">HOME</a>
		<a href="/projects">PROJECTS</a>
		<a href="/3d">3D</a>
		<a href="/about">ABOUT</a>
	</nav> -->
  <TopNav />
	<main>
		<slot />
	</main>
</div>

<style>
  .view-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    height: 100%;
  }

  main {
    flex-grow: 1;
    /* overflow: hidden; */
  }
</style>