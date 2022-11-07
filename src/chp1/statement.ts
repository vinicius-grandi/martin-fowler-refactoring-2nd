type Play = {
  name: string;
  type: string;
};

type Plays = {
  [key in string]: Play;
};

type Performances = {
  playID: string;
  audience: number;
};

type Invoice = {
  customer: string;
  performances: Performances[];
};

type EnrichedPerformances = Performances & {
  play: Play;
  amount: number;
};

type StatementData = {
  customer: Invoice['customer'];
  performances: EnrichedPerformances[];
};

function statement(invoice: Invoice, plays: Plays) {
  const statementData: StatementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
  };
  return renderPlaintext(statementData);

  function enrichPerformance(aPerformance: Performances) {
    const result = {
      ...aPerformance,
      play: playFor(aPerformance),
      amount: 0,
    };
    return {
      ...result,
      amount: amountFor(result)
    };
  }
  function playFor(aPerformance: Performances) {
    return plays[aPerformance.playID];
  }
  function amountFor(aPerformance: EnrichedPerformances) {
    let result = 0;
    switch (aPerformance.play.type) {
      case 'tragedy':
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${aPerformance.play.type}`);
    }
    return result;
  }
}

function renderPlaintext(data: StatementData) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    } seats)\n`;
  }
  result += `Amount owed is ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;

  function volumeCreditsFor(aPerformance: EnrichedPerformances) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ('comedy' === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }
  function usd(aNumber: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
  function totalVolumeCredits() {
    let result = 0;
    for (let perf of data.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }
  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      result += perf.amount;
    }
    return result;
  }
}

export { statement };
