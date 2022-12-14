export type BirdInfo = {
  name: string;
  type: 'EuropeanSwallow' | 'AfricanSwallow' | 'NorwegianBlueParrot' | 'any';
  numberOfCoconuts: number;
  isNailed: boolean;
  voltage: number;
};

class Bird {
  _bird: BirdInfo;

  constructor(aBird: BirdInfo) {
    this._bird = aBird;
  }

  get name() {
    return this._bird.name;
  }

  get plumage(): string {
    return 'unknown';
  }

  get airSpeedVelocity(): null | number {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35;
  }
  get plumage() {
    return 'average';
  }
}
class AfricanSwallow extends Bird {
  get airSpeedVelocity() {
    return 40 - 2 * this._bird.numberOfCoconuts;
  }
  get plumage() {
    return this._bird.numberOfCoconuts > 2 ? 'tired' : 'average';
  }
}
class NorwegianBlueParrot extends Bird {
  get airSpeedVelocity() {
    return this._bird.isNailed ? 0 : 10 + this._bird.voltage / 10;
  }
  get plumage() {
    return this._bird.voltage > 100 ? 'scorched' : 'beautiful';
  }
}

function createBird(bird: BirdInfo) {
  switch (bird.type) {
    case 'AfricanSwallow':
      return new AfricanSwallow(bird);
    case 'EuropeanSwallow':
      return new EuropeanSwallow(bird);
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

export function plumages(birds: BirdInfo[]) {
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
  );
}

export function speeds(birds: BirdInfo[]) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, bird.airSpeedVelocity])
  );
}
