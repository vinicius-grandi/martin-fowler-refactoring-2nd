import { expect } from 'chai';
import { owner } from '../../src/chp7/EncapsulateVariable';

describe('statement', () => {
  it('creates a person with name and phone number', () => {
    expect(owner.firstName).to.be.eq('joao');
    expect(owner.lastName).to.be.eq('ninguem');
  });
});
