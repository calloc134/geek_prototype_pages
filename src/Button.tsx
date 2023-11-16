import { ark, type HTMLArkProps } from "@ark-ui/react";
import { styled } from "src/styled-system/jsx";
import { button, type ButtonVariantProps } from "src/styled-system/recipes";

export type ButtonProps = ButtonVariantProps & HTMLArkProps<"button">;
export const Button = styled(ark.button, button);
