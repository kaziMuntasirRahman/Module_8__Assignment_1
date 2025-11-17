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
    return `Name: ${this.name}, Age: ${this.age}`;
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

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);