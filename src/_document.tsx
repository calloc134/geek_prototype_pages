import { Outlet } from "@tanstack/react-router";
import { css } from "./lib/styled-system/css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Camera } from "tabler-icons-react";

const Document = () => {
  return (
    <>
      <div
        className={css({
          display: "flex",
          width: "full",
          height: "max-content",
        })}
      >
        <div
          className={css({
            padding: 4,
            bg: "gray.12",
            display: "flex",
            alignItems: "center",
            gap: 4,
          })}
        >
          <Camera
            size={32}
            className={css({
              color: "gray.1",
            })}
          />
          <h1
            className={css({
              fontSize: 24,
              color: "gray.1",
              fontFamily: "Noto Sans JP",
            })}
          >
            もさふぇいす
          </h1>
        </div>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
};

export { Document };
