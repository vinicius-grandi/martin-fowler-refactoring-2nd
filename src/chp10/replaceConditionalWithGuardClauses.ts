import { Employee, IEmployee } from './consolidateConditionalExpression';

interface IMegaEmployee extends IEmployee {
  isSeparated: boolean;
  isRetired: boolean;
}

export class MegaEmployee extends Employee implements IMegaEmployee {
  isSeparated: boolean = true;
  isRetired: boolean = true;
  constructor(aMegaEmployee: IMegaEmployee) {
    super(aMegaEmployee);
    this.isSeparated = aMegaEmployee.isSeparated;
    this.isRetired = aMegaEmployee.isRetired;
  }
}

export function newMegaEmployee(aMegaEmployee: IMegaEmployee) {
  return new MegaEmployee(aMegaEmployee);
}

export default function payAmount(employee: IMegaEmployee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }
  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  }
  return null;
}
