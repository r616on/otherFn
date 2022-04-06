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

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  let win = "";
  if (p1 === "rock") {
    switch (p2) {
      case "paper":
        win = "Player 2 won!";
        break;
      case "scissors":
        win = "Player 1 won!";
        break;
      default:
        break;
    }
  } else if (p1 === "scissors") {
    switch (p2) {
      case "paper":
        win = "Player 1 won!";
        break;
      case "rock":
        win = "Player 2 won!";
        break;
      default:
        break;
    }
  } else if (p1 === "paper") {
    switch (p2) {
      case "scissors":
        win = "Player 2 won!";
        break;
      case "rock":
        win = "Player 1 won!";
        break;
      default:
        break;
    }
  }
  return win;
};

console.log(rps("rock", "scissors"));
