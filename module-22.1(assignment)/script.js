// Problem-01 : Train TT's Fine Calculator
function totalFine(fare) {
  if (typeof fare === "number" && fare > 0) {
    const charge = fare * 0.2;
    const extraCharge = 30;
    const total = fare + charge + extraCharge;
    return total;
  } else {
    return "Invalid Amount";
  }
}
totalFine(0);

// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
  const character = [];
  if (typeof str === "string") {
    const strSplit = str.split("");
    for (let i of strSplit) {
      if (i !== " ") {
        character.push(i);
      }
    }
    return character.join("").toUpperCase();
  }
}
onlyCharacter("Serv er : : Do wn");

// Problem-03 : FIFA Best Team Award
function bestTeam(player1, player2) {
  if (
    typeof player1 === "object" &&
    !Array.isArray(player1) &&
    typeof player2 === "object" &&
    !Array.isArray(player2)
  ) {
    const team1 = player1.foul + player1.cardR + player1.cardY;
    const team2 = player2.foul + player2.cardR + player2.cardY;
    console.log(team1, team2);
    if (team1 > team2) {
      return player2.name;
    } else if (team1 < team2) {
      return player1.name;
    } else {
      return "Tie";
    }
  } else {
    return "Invalid";
  }
}
bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France");

// Problem-04: Same Same But Different
function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
isSame({ data: [2, 5, 6] }, [2, 5, 6]);

function resultReport(marks) {
  // You have to write your code here
  let score = 0;
  let passed = 0;
  let failed = 0;
  if (marks.length === 0) {
    return { finalScore: score, pass: passed, fail: failed };
  }
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  for (let mark of marks) {
    score += mark;
    if (mark >= 40) {
      passed++;
    } else {
      failed++;
    }
  }
  const total = parseInt(score / marks.length);
  return { finalScore: total, pass: passed, fail: failed };
}
console.log(resultReport([]));
