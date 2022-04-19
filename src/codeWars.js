// function swap(str) {
//   const arr = str.split("");
//   const res = [];
//   arr.forEach((element) => {
//     if (element === " ") {
//       res.push(element);
//     } else {
//       if (element.toUpperCase() === element) {
//         res.push(element.toLowerCase());
//       } else {
//         res.push(element.toUpperCase());
//       }
//     }
//   });
//   return res.join("");
// }

// function generateHashtag(str) {
//   const a = str.replace(/\s/g, "");
//   if (a === "" || a.length > 139) {
//     return false;
//   } else {
//     const b = str
//       .split(" ")
//       .filter((item) => item !== "" && item !== " ")
//       .map((item) => item[0].toUpperCase() + item.slice(1))
//       .join("");
//     return `#${b}`;
//   }
// }

const xMarksTheSpot = (input) => {
  return [];
};

console.log(
  xMarksTheSpot([
    [
      ["o", "o"],
      ["o", "o"],
    ],
  ])
);
