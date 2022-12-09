import { expect } from 'chai';
import payAmount, {
  newMegaEmployee,
} from '../../src/chp10/replaceConditionalWithGuardClauses';

describe('statement', () => {
  it('checks if an employee deserves the amount', () => {
    const firstResult = { amount: 0, reasonCode: 'SEP' };
    expect(
      payAmount(
        newMegaEmployee({
          isPartTime: false,
          isRetired: false,
          isSeparated: true,
          onVacation: false,
          monthsDisabled: 1,
          seniority: 1,
        })
      )
    ).to.be.deep.eq(firstResult);

    const secondResult = { amount: 0, reasonCode: 'RET' };

    expect(
      payAmount(
        newMegaEmployee({
          isPartTime: true,
          isRetired: true,
          isSeparated: false,
          onVacation: true,
          monthsDisabled: 1,
          seniority: 1,
        })
      )
    ).to.be.deep.eq(secondResult);

    expect(
      payAmount(
        newMegaEmployee({
          isPartTime: false,
          isRetired: false,
          isSeparated: false,
          onVacation: false,
          monthsDisabled: 1,
          seniority: 1,
        })
      )
    ).to.be.eq(null);
  });
});
