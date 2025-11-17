// ___________________________ problem : 1
const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else return "Error";
};
// ____________________________ problem: 2
const getLength = (value: string | any[]): number => value.length;

// ___________________________ problem: 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// _____________________________ problem: 4
const filterByRating = (
  values: { title: string; rating: number }[]
): { title: string; rating: number }[] =>
  values.filter((value) => value.rating >= 4);

// ______________________________ problem: 5
const filterActiveUsers = (
  values: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] =>
  values.filter((value) => value.isActive === true);

//_______________________________problem: 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable}`
  );
};

//_________________________________problem: 7
const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] => { // use loop to measure length
   let length1 = 0;

   while(arr){

   }
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number => {
  if (products.length === 0) return 0;

  const total = products.reduce((acc, product) => {
    const { price, quantity, discount } = product;
    if (discount!==undefined) {
      return acc += price * quantity * (1 - discount / 100);
    } else {
     return acc += price * quantity;
    }
  }, 0);

  return total;
};

