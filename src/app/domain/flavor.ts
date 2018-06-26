import { Link } from './link';

export interface Flavor {
  id?: string;
  ephemeral?: number;
  swap?: number;
  rxtxFactor?: number;
  links?: Link[];
}
