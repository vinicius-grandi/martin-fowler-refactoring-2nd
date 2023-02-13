class AccountType {
  type = {
    isPremium: true
  }
  // if there's a lot of attributes required from the account, it's better to pass the whole object rather than just the daysOverdrawn
  overdraftCharge(daysOverdrawn: number) {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else return daysOverdrawn * 1.75;
  }
}

class Accountant {
  daysOverdrawn: number;
  type: {
    isPremium: boolean;
    overdraftCharge: (n: number) => number
  };

  constructor(daysOverdrawn: number) {
    this.daysOverdrawn = daysOverdrawn;
    const accountType = new AccountType();
    this.type = {
      isPremium: true,
      overdraftCharge: (d) => accountType.overdraftCharge(d),
    };
  }

  get bankCharge() {
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }
  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn);
  }
}

export function createAccountant(daysOverdrawn: number) {
  return new Accountant(daysOverdrawn)
}
