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

export interface UserCredential {
  email: string;
  password: string;
}

export interface Review {
  rating: number;
  name: string;
  date: string;
  text: string;
  id: string;
}
