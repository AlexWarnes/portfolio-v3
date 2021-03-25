import RouteHome from "./components/views/RouteHome.svelte";
import RouteAbout from "./components/views/RouteAbout.svelte";
import RoutePhotography from "./components/views/RoutePhotography.svelte";
import RouteDevelopment from "./components/views/RouteDevelopment.svelte";
import RouteNotFound from "./components/views/RouteNotFound.svelte";

export default {
  "/": RouteHome,
  "/development": RouteDevelopment,
  "/photography": RoutePhotography,
  "/about": RouteAbout,
  "*": RouteNotFound,
};
