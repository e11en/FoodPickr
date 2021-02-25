export interface Recipe {
    name: string;
    instructions: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  amount: number;
  amountType: string;
}

export interface ShoppingList {
  date: Date;
  ingredients: Ingredient[];
}