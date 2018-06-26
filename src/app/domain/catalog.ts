export interface Catalog {
  id?: string;
  name: string;
  icon?: string;
  url?: string;
  children?: Catalog[];
  open?: boolean;
  active?: boolean;
}
