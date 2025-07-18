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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.reduce((acc, curr) => [...acc, ...curr], []);
  return result;
}

class Vehicle {
  private Make: string;
  private Year: number;

  constructor(Make: string, Year: number) {
    this.Make = Make;
    this.Year = Year;
  }
  getInfo(): string {
    return `Make: ${this.Make}, Year: ${this.Year}`;
  }
}
class Car extends Vehicle {
  private Model: string;
  constructor(Make: string, Year: number, Model: string) {
    super(Make, Year);
    this.Model = Model;
  }
  getModel(): string {
    return `Model: ${this.Model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

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

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}
