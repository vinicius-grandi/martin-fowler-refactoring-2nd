type Station = {
  name: string;
  readings: {
    temp: number;
    time: string;
  }[];
};

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

class NumberRange {
  #numberRange: {
    min: number;
    max: number;
  };
  constructor(min: number, max: number) {
    this.#numberRange = {
      min,
      max,
    };
  }
  get max() {
    return this.#numberRange.max;
  }
  get min() {
    return this.#numberRange.min;
  }
  contains(num: number) {
    return num >= this.min && num <= this.max;
  }
}

function readingsOutsideRange(station: Station, range: NumberRange) {
  return station.readings.filter(
    (r) => !range.contains(r.temp)
  );
}

const operatingPlan = {
  temperatureFloor: 0,
  temperatureCeiling: 10,
};

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

export const alerts = readingsOutsideRange(station, range);
