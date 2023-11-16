import { Outlet } from "@tanstack/react-router";
import { css } from "./lib/styled-system/css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const Document = () => {
  return (
    <>
      <div
        className={css({
          backgroundColor: "ruby.dark.a3",
        })}
      >
        AAAAAAAAAAAAAAAA
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
};

export { Document };
