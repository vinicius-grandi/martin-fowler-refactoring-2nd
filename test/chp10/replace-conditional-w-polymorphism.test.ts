import { expect } from 'chai';
import {
  BirdInfo,
  plumages,
  speeds,
} from '../../src/chp10/replaceConditionalWithPolymorphism';

describe('replace conditional refactoring', () => {
  it('gives info about birds', () => {
    const birds: BirdInfo[] = [
      {
        isNailed: true,
        name: 'any',
        numberOfCoconuts: 2,
        type: 'any',
        voltage: 1,
      },
      {
        isNailed: true,
        name: 'africanSwallow',
        numberOfCoconuts: 2,
        type: 'AfricanSwallow',
        voltage: 1,
      },
      {
        isNailed: true,
        name: 'europeanSwallow',
        numberOfCoconuts: 2,
        type: 'EuropeanSwallow',
        voltage: 1,
      },
      {
        isNailed: true,
        name: 'norwegianBlueParrot',
        numberOfCoconuts: 2,
        type: 'NorwegianBlueParrot',
        voltage: 1,
      }
    ];
    const birdsPlumage = plumages(birds);
    const birdsAirSpeed = speeds(birds);

    expect(birdsPlumage.get('any')).to.be.eq('unknown');
    expect(birdsPlumage.get('europeanSwallow')).to.be.eq('average');
    expect(birdsPlumage.get('africanSwallow')).to.be.eq('average');
    expect(birdsPlumage.get('norwegianBlueParrot')).to.be.eq('beautiful');

    expect(birdsAirSpeed.get('any')).to.be.eq(null)
    expect(birdsAirSpeed.get('europeanSwallow')).to.be.eq(35)
    expect(birdsAirSpeed.get('africanSwallow')).to.be.eq(36)
    expect(birdsAirSpeed.get('norwegianBlueParrot')).to.be.eq(0)
  });
});
