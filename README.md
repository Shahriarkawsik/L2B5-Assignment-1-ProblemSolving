<!-- # L2B5-Assignment-1-ProblemSolving -->

> # **1. What are some differences between `interfaces` and `types` in TypeScript?**

### Primitive Type

We can use define a type alias for a primitive type.

```ts
type UserName = string;
type UserId = number;
type IsMarried = boolean;
type Users = string[];
interface UserDetails {
  name: string;
  id: number;
}

const userName: UserName = "John Doe";
const userId: UserId = 73;
const isMarried: IsMarried = true;
const userDetails: UserDetails = {
  name: "Shahriar",
  id: 118,
};
```

---

> ### `Union`, `Intersection` and `Tuple` type
>
> **Union :**
> This works when using a `type alias`, but it does not work with an `interface`.

```ts
type Teacher= {
  name: string;
  designation: string;
  contactNumber: string;
}
type TotalCredit ={
  credit: number;
}

type TeacherTotalCredit = Teacher | TotalCredit; ✔
~~interface TeacherTotalCredit = Teacher | TotalCredit;~~ ❌
```

---

> **Intersection :** Intersection operator (&) works with both `type` and `interface`.

**Example :**

> **Type Alias**

```ts
type Teacher = {
  name: string;
  designation: string;
  contactNumber: string;
};
type TotalCredit = {
  credit: number;
};
type TeacherTotalCredit = Teacher & TotalCredit;
```

> **Interface**

```ts
interface Teacher {
  name: string;
  designation: string;
  contactNumber: string;
}
interface TotalCredit {
  credit: number;
}
interface TeacherTotalCredit extends Teacher, TotalCredit {}
```

> **Merge**

```ts
interface Teacher {
  name: string;
  designation: string;
  contactNumber: string;
}
interface Teacher {
  credit: number;
}
```

---

> **Tuple :** A tuple is a _fixed-length_, _ordered collection_ where each element can have a different type.

**Example**

```ts
type Point = [number, number];
const coordinates: Point = [10, 20];
```

---
## TypeScript: `type` vs `interface`

| Feature                      | `type`                                                                 | `interface`                                                        |
|------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------|
| Primary Use                  | Used to define new types (primitives, unions, tuples, etc.)            | Used to define the shape of objects                                 |
| Extension                    | Can extend via `extends` or with intersections (`&`)                   | Can extend only via `extends`                                       |
| Declaration Merging          | Not supported                                                          | Supported — interfaces with the same name are automatically merged  |
| Union & Intersection Support | Supports union (`|`) and intersection (`&`) types                      | Does not support union types directly                               |
| Use with Complex Types       | Great for defining complex types like unions, tuples, mapped types     | Best suited for object-like data structures                         |
| Implements Keyword           | Classes can implement types                                            | Classes can implement interfaces                                    |
| Readability/Intuition        | Sometimes less intuitive for object shapes                             | More intuitive and readable for defining object contracts           |

> 🔹 Use `interface` when defining object shapes, especially for public APIs or class contracts.  
> 🔸 Use `type` when you need unions, intersections, or more complex type manipulations.

---

> # **2. What is the use of the `keyof` keyword in TypeScript? Provide an example.**

#### The `keyof` keyword in TypeScript is used to create `a union type` of all the `property names (keys)` of a given object type.

---

### Why use `keyof` ?

- To restrict input to only the valid keys of a type.
- To ensure type safety when accessing or manipulating object properties dynamically.
- Often used in generic utility functions.

**Example**

```ts
type Person = {
  name: string;
  age: number;
  email: string;
};
type PersonKeys = keyof Person; // "name" | "age" | "email"
function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person: Person = {
  name: "Shahriar",
  age: 25,
  email: "shahriar@example.com",
};
const name = getProperty(person, "name"); // OK
const email = getProperty(person, "email"); // OK
```
