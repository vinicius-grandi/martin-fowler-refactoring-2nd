import { expect } from 'chai';
import { Person } from '../../src/chp7/ExtractClass';

describe('statement', () => {
  const number = 999999999;
  it('creates a person with name and phone number', () => {
    const person = new Person('John', 16, number);

    expect(person.name).to.be.equal('John');
    expect(person.telephoneNumber).to.be.equal(`(${16}) ${number}`);
  });
  it('allows you to change number and area code', () => {
    const person = new Person('John', 16, number);

    person.number = number + 1;
    person.areaCode = 18;

    expect(person.telephoneNumber).to.be.equal(`(${18}) ${number + 1}`);
  });
});
