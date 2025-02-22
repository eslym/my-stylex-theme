import stylex from "@stylexjs/stylex";

export const baseValue = stylex.defineVars({
  lengthFixed: stylex.types.length("4px"),
  lengthRelative: stylex.types.length("0.25rem"),
  fontSize: stylex.types.length("1rem"),
  transitionDuration: stylex.types.time("0.15s"),
  transitionEasing: "ease-in-out",
});
