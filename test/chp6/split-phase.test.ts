import { expect } from 'chai';
import { priceOrder } from '../../src/chp6/splitPhase';

describe('split phase', () => {
  it('splits phases', () => {
    expect(
      priceOrder(
        {
          basePrice: 1,
          discountRate: 1,
          discountThreshold: 1,
        },
        1,
        {
          discountedFee: 1,
          discountThreshold: 1,
          feePerCase: 1,
        }
      )
    ).to.be.eq(2);
  });
});
