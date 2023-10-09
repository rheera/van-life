import { VanTypes } from "./enums";

export interface Van {
  description: string;
  id: string | number;
  imageUrl: string;
  name: string;
  price: number;
  type: VanTypes;
  hostId: string | number;
}
