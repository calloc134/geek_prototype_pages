import { Outlet } from "@tanstack/react-router";
import { css } from "./lib/styled-system/css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Camera } from "tabler-icons-react";

const Document = () => {
  return (
    <>
      <div
        className={css({
          padding: 4,
          bg: "gray.3",
          display: "flex",
          alignItems: "center",
          gap: 4,
        })}
      >
        <Camera size={32} color={"black"} className={css({})} />
        <h1
          className={css({
            fontSize: 24,
            color: "gray.dark.1",
            fontFamily: "Noto Sans JP",
          })}
        >
          あいろうあ
        </h1>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
};

export { Document };
