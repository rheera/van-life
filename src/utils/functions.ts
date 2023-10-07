import { VanTypes } from "../types/enums";

export const vanTypeButtonColor = (type: VanTypes) => {
  return type === VanTypes.simple
    ? "warning"
    : type === VanTypes.luxury
    ? "dark"
    : "success";
};
