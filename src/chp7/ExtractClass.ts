export class Person {
  #name: string;
  #telephoneNumber: TelephoneNumber;

  constructor(
    name: string,
    areaCode: number,
    number: number,
  ) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString();
  }

  set number(n: number) {
    this.#telephoneNumber.number = n;
  }

  set areaCode(areaCode: number) {
    this.#telephoneNumber.areaCode = areaCode;
  }
}

export class TelephoneNumber {
  #number: number;
  #areaCode: number;

  constructor(areaCode: number, number: number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get number() {
    return this.#number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set number(n: number) {
    this.#number = n;
  }

  set areaCode(areaCode: number) {
    this.#areaCode = areaCode;
  }

  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}
