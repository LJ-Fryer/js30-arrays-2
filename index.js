const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// 1. Array.prototype.some() // is at least one person 19 or older?

const currentYear = new Date().getFullYear();

const over19 = people.some((person) => {
  const age = currentYear - person.year;
  if (age >= 19) {
    return console.log(`${person.name} is ${age}`);
  }
});
//Boolean
const overNineteen = people.some((person) => currentYear - person.year >= 19);
console.log(overNineteen);

// 2. Array.prototype.every() // is everyone 19 or older?
const allOver19 = people.every((person) => currentYear - person.year >= 19);
console.log(allOver19);

// 3. Array.prototype.find() - Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

function findId(comment) {
  return comment.id === 823423;
}
console.log(comments.find(findId).text);

// 4. Array.prototype.findIndex()
// 4.1 Find the comment with this ID
// 4.2 delete the comment with the ID of 823423
function findComment(comment) {
  if (comment.id === 823423) {
    return comment;
  }
}
console.log(comments.findIndex(findComment));

console.log(
  comments.findIndex((comment) => {
    if (comment.id === 823423) {
      return comment;
    }
  })
);
