import { expect } from 'chai';
import { trackSummary } from '../../src/chp8/moveFunction1';
import { createAccountant } from '../../src/chp8/MoveFunction2';

describe('move function', () => {
  it('move function', () => {
    expect(trackSummary([1, 2])).to.be.deep.eq({
      distance: 3,
      pace: 0,
      time: 0,
    });
  });
  it('move function again', () => {
    expect(createAccountant(0).overdraftCharge).to.be.eq(10)
    expect(createAccountant(10).overdraftCharge).to.be.eq(12.55)
  });
});
