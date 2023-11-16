import { css } from "src/lib/styled-system/css";

const Index = () => {
  return (
    <div
      className={css({
        padding: 4,
        display: "flex",
        alignItems: "center",
        gap: 4,
        border: "2px solid",
        borderRadius: "2xl",
      })}
    >
      <h1
        className={css({
          fontSize: 24,
          color: "gray.12",
        })}
      >
        もさふぇいす
      </h1>
    </div>
  );
};

export { Index };
