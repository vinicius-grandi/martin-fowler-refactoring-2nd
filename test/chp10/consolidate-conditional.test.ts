import { expect } from 'chai';
import disabilityAmount, { createEmployee as newEmployee, Employee } from '../../src/chp10/consolidateConditionalExpression';

describe('statement', () => {
  it('checks if an employee has a disability', () => {
    expect(disabilityAmount(newEmployee({
      isPartTime: true,
      monthsDisabled: 2,
      seniority: 4,
    }))).to.be.eq(0);

    expect(disabilityAmount(newEmployee({
      isPartTime: false,
      monthsDisabled: 13,
      seniority: 4,
    }))).to.be.eq(0);

    expect(disabilityAmount(newEmployee({
      isPartTime: false,
      monthsDisabled: 2,
      seniority: 1,
    }))).to.be.eq(0);

    expect(disabilityAmount(newEmployee({
      isPartTime: false,
      monthsDisabled: 2,
      seniority: 14,
      onVacation: true,
    }))).to.be.eq(1);

    expect(disabilityAmount(newEmployee({
      isPartTime: false,
      monthsDisabled: 2,
      seniority: 4,
      onVacation: true,
    }))).to.be.eq(0.5);
  });
});
