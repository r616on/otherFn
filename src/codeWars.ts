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

// function topThreeWords(text) {
//   const b = text
//     .split(" ")
//     .filter((item) => item !== "" && item !== " ")
//     .map((item) => item.toLowerCase());
//   const arrRes = [];
//   b.forEach((item) => {
//     arrRes.push({
//       item: item,
//       number: b.filter((el) => el === item).length,
//     });
//   });
//   const c = arrRes.reduce((arr, item) => {
//     const removed = arr.filter((i) => i.number !== item.number);
//     return [...removed, item];
//   }, []);
//   const noSort = [...c];
//   c.sort((a, b) => b.number - a.number);
//   if (c.length > 4) {
//     return [c[0].item, c[1].item, c[2].item];
//   } else if (c.length > 3) {
//     return [noSort[0].item, noSort[1].item];
//   } else if (c.length > 2) {
//     return [noSort[0].item];
//   } else {
//     return [];
//   }
// }
String.prototype.toJadenCase = function (this: string) {
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};
let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
