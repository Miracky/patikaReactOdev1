const users = [
  "Ali",
  { name: "Mehmet", age: 18 },
  { name: "Mehmet", age: 29 },
  { name: "Sevilay", age: 40 },
];

//push
users.push({ name: "Ayse", age: 31 });
users.push({ name: "Fatma", age: 32 });

console.log(users);

//map
users.map((item) => {
  console.log(item.name);
});

//find
const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
console.log(result);

//filter
const filtered = users.filter(({ name, age }) => name === "Mehmet" && age < 20);
console.log(filtered);

//some
const some = users.some((item) => item.age === 18);
console.log(some);

//every
const every = users.every((item) => item.age > 5);
console.log(every);

//includes
// const meyveler = ['elma','armut','muz']
const isIncluded = users.includes("Ali");
console.log(isIncluded);
