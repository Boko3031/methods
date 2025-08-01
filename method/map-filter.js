// 1const numbers = [100,200];
// const res = numbers.map((a) => {
//   return 2 * a;
// });
// console.log(res);


// 2const numbers = ["khulan", "mulan"];
// const res = numbers.map((a) => {
//   return "hiii " + a;
// });
// console.log(res);

// 3const nums = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9];
// const res = nums.filter((a) => {
//   return a % 2 === 0;
// });
// console.log(res);

// 4const nums = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9];
// const res = nums.filter((a) => {
//   return a >= 4;
// });
// console.log(res);

// 5const number = [3, 5, 7, 9, 10];
// const filter1 = number.filter((a) => a > 5);
// const map1 = filter1.map((b) => {
//   return b * b;
// });
// console.log(map1);

// 6const nums = [10, 11, 12, 13, 14];
// const filterednums = nums.filter((a) => a % 2 === 1);
// const map2 = filterednums.map((b) => {
//   return b + 1;
// });
// console.log(map2);

// 7const nums = [1, null, 5, undefined, 10];
// const filterednums = nums
//   .filter((a) => {
//     return a;
//   })
//   .map((b) => {
//     return b * 10;
//   });
// console.log(filterednums);

// 8const test = [
//   {
//     name: "test1",
//     age: 20,
//   },
//   {
//     name: "test2",
//     age: 16,
//   },
//   {
//     name: "test3",
//     age: 15,
//   },
//   {
//     name: "test4",
//     age: 21,
//   },
// ];
// const arr1 = test
//   .filter((a) => {
//     return a.age > 18;
//   })
//   .map((b) => {
//     return b.name;
//   });
// console.log(arr1);

// const names = [
//   {
//     firstName: "haha",
//     lastName: "test",
//   },
//   {
//     firstName: "haha1",
//     lastName: "test1",
//   },
// ];
// const arr = names.map((b) => {
//   return {
//     firstName: b.firstName,
//     lastName: b.lastName,
//     fullname: `${b.firstName} ${b.lastName}`,
//   };
// });
// console.log(arr);

// const people = [
//   { name: "Anu", age: 18 },
//   { name: "Temka", age: 22 },
//   { name: "Nomin", age: 20 },
//   { name: "Baatar", age: 17 },
// ];
// const person = people.map((a) => {
//   if (a.age > 18) {
//     return {
//       ...a,
//       status: "adult",
//     };
//   } else {
//     return {
//       ...a,
//       status: "underage",
//     };
//   }
// });
// console.log(person);

const students = [
  { name: "Anu", scores: [80, 90, 100] },
  { name: "Temka", scores: [50, 60, 70] },
  { name: "Saraa", scores: [95, 100, 90] },
  { name: "Baatar", scores: [40, 50, 60] },
];
const studentscore = students.map((student, index) => {
  let score = 0;
  student.scores.forEach((element, index) => {
    score = score + element;
  });
  return {
    ...student,
    score: score / student.scores.length,
  };
});
const a = studentscore.map((amount, indexOf) => {
  return amount.score >= 80
    ? { ...amount, status: "Excellent" }
      : amount.score < 79 && amount.score > 60
      ?{ ...amount, status: "Passed" }
    : { ...amount, status: "Failed" }
});
console.log(a);

const users = [
  { name: "Alice", age: 22, hobbies: ["reading", "coding", "hiking"] },
  { name: "Bob", age: 16, hobbies: ["gaming", "coding"] },
  { name: "Charlie", age: 19, hobbies: ["drawing", "cooking"] },
  { name: "Diana", age: 25, hobbies: ["coding", "chess", "music"] },
];
const res = users
  .filter((user, index) => {
    return user.age > 18 && user.hobbies.includes("coding");
  })
  .map((el, index) => {
    return {
      name: el.name,
      hobbyCount: el.hobbies.length,
    };
  });
console.log(res);
