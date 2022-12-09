const aDate = {
  date: 1,
  isBefore(anotherDate: number) {
    return anotherDate < this.date;
  },
  isAfter(anotherDate: number) {
    return anotherDate > this.date;
  },
};

const plan = {
  summerStart: 3,
  summerEnd: 4,
  summerRate: 5,
  regularRate: 10,
  regularServiceCharge: 0.5,
};

let charge: number;
let quantity = 5;

// if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
//   charge = quantity * plan.summerRate;
// else charge = quantity * plan.regularRate + plan.regularServiceCharge;

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

charge = summer() ? summerCharge() : regularCharge();

// if (summer()) {
//   charge = summerCharge();
// } else {
//   charge = regularCharge();
// }

// after the conditional decompose, you're able to use a ternary
