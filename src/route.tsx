import { RootRoute, Router } from "@tanstack/react-router";
import { Document } from "./_document";

const root_route = new RootRoute({
  component: () => <Document />,
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
