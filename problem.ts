type FormatString = (input: string, toUpper?: boolean) => string;

const formatString: FormatString = (input: string, toUpper?: boolean) => {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
};

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let filtered = items.filter((items) => items.rating >= 4);
  return filtered;
}
/* TODO: remove todo: Problem 5 */
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
/* TODO: remove todo: Problem 6 */
interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length == 0) return null;

  let expensiveProduct: Product = products[0];
  for (const product of products) {
    if (product.price > expensiveProduct?.price) {
      expensiveProduct = product;
    }
  }
  return expensiveProduct;
}
/* TODO: remove todo: Problem 7 */
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
