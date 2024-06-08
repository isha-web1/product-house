//

export type Variants = {
  type: string;
  value: string;
};
export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type ProductT = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  inventory: Inventory;
  variants: Variants[];
};
