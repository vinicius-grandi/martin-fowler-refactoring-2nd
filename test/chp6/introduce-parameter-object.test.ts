import { expect } from 'chai';
import { alerts } from '../../src/chp6/introduceParameterObject';
import { priceOrder } from '../../src/chp6/splitPhase';

describe('introduce parameter object', () => {
  it('introduces param obj', () => {
    expect(alerts).to.be.deep.eq([
      {
        temp: 47,
        time: '2016-11-10 09:10',
      },
      {
        temp: 53,
        time: '2016-11-10 09:20',
      },
      {
        temp: 58,
        time: '2016-11-10 09:30',
      },
      {
        temp: 53,
        time: '2016-11-10 09:40',
      },
      {
        temp: 51,
        time: '2016-11-10 09:50',
      },
    ]);
  });
});
