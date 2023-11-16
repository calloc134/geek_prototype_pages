import { RootRoute, Router } from "@tanstack/react-router";

const root_route = new RootRoute({
  component: () => <div>Root</div>,
});

const router = new Router({
  routeTree: root_route,
});

// tanstack routerを型安全に利用するための型定義
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
