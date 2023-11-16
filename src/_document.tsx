import { Outlet } from "@tanstack/react-router";
import { css } from "./lib/styled-system/css";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Camera } from "tabler-icons-react";

const Document = () => {
  return (
    <div
      className={css({
        justifyContent: "center",
        display: "flex",
        height: "full",
        width: "full",
      })}
    >
      <div
        className={css({
          // display: "flex",
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
            borderBottomRadius: "2xl",
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
            })}
          >
            もさふぇいす
          </h1>
        </div>
        <div
          className={css({
            width: "11/12",
            margin: "auto",
            marginTop: "4",
          })}
        >
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </div>
  );
};

export { Document };
