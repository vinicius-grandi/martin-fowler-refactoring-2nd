import type {
  EnrichedPerformances,
  Invoice,
  Performances,
  Plays,
  Play,
  StatementData,
} from './statement.d';

class PerformanceCalculator {
  performance: Performances;
  play: Play;
  constructor(aPerformance: Performances, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): void | number {
    throw new Error('subclass responsibility');
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

function createPerformanceCalculator(aPerformance: Performances, aPlay: Play) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`unknown type: ${aPlay.type}`);
  }
}

function createStatementData(invoice: Invoice, plays: Plays) {
  const statementData: StatementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
    get totalAmount() {
      return totalAmount(this);
    },
    get totalVolumeCredits() {
      return totalVolumeCredits(this);
    },
  };
  return statementData;

  function enrichPerformance({ audience, playID }: Performances) {
    const calculator = createPerformanceCalculator(
      { audience, playID },
      playFor({ audience, playID })
    );
    const result: EnrichedPerformances = {
      audience,
      playID,
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
    return result;
  }
  function playFor(aPerformance: Performances) {
    return plays[aPerformance.playID];
  }
  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
  function totalAmount(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
}

export default createStatementData;
