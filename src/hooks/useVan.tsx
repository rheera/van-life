import { useOutletContext } from "react-router-dom";
import { ContextType } from "../types/types";

export function useVan() {
  return useOutletContext<ContextType>();
}
