import type { EnrichedPerformances, Invoice, Performances, Plays, StatementData } from './statement.d';

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
    const result: EnrichedPerformances = {
      audience,
      playID,
      play: playFor({ audience, playID }),
      get amount() {
        return amountFor(this);
      },
      get volumeCredits() {
        return volumeCreditsFor(this);
      },
    };
    return result;
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
  function volumeCreditsFor(aPerformance: EnrichedPerformances) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ('comedy' === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
    return result;
  }
  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
  function totalAmount(data: StatementData) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
}

export default createStatementData;
